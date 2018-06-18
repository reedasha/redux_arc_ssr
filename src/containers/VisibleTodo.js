import React, { Component } from 'react'
import { toggleTodoRequest, deleteTodoRequest, getTodosRequest } from 'store/actions'
import { connect } from 'react-redux'
import { TodoList } from 'components'
import { isBrowser, isServer } from 'config'
import { fetchState } from 'react-router-server'

export class PostListContainer extends Component {
  componentWillMount() {
    const {onGet, cleanServerState, hasServerState, setServerState} = this.props
    if (!hasServerState) {
      if (isServer) {
          onGet()
          setServerState()
        } else {
          onGet()
        }
      } else if (isBrowser) {
         cleanServerState()
    }
  }

  render() {
    const { todos, onDeleteTodo, onGet, onTodoClick} = this.props
    return <TodoList {...{todos, onGet, onDeleteTodo, onTodoClick}} />
  }
}

export const mapStateToProps = state => ({
  todos: state.todos
})

export const mapDispatchToProps = ( dispatch ) => ({
  onGet: () => dispatch(getTodosRequest()),
  onTodoClick: (todo) => dispatch(toggleTodoRequest(todo)),
  onDeleteTodo: (id) => dispatch(deleteTodoRequest(id))
})

export const withServerState = fetchState(
  state => ({
    hasServerState: !!state.data,
  }),
  actions => ({
    setServerState: todos => actions.done ({ todos }),
    cleanServerState: () => actions.done(),
  }),
)

export default withServerState(connect(mapStateToProps, mapDispatchToProps)(PostListContainer))
