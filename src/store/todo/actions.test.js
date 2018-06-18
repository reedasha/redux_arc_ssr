import * as actions from './actions'

describe('todo actions tests', () => {
  it('getTodosRequest', () => {
    expect(actions.getTodosRequest()).toEqual({type:'GET_TODOS'})
  })
  it('getTodosSuccess', () => {
    const response ={
      text:'test',
      id:123123,
      completed:false
    }
    expect(actions.getTodosSuccess(response)).toEqual({type:'GET_TODOS_SUCCESS',payload:{response}})
  })

  it('addTodoRequest', () => {
    expect(actions.addTodoRequest('test')).toEqual({type:'ADD_TODO', text:'test'})
  })
  it('addTodoSuccess', () => {
    const response = {
      text:'test',
      id:123123,
      completed:false
    }
    expect(actions.addTodoSuccess('test', response)).toEqual({type:'ADD_TODO_SUCCESS',payload:{response}, text:'test'})
  })

  it('toggleTodoRequest', () => {
    const todo = {
      text: 'test',
      id:123123,
      completed: false
    }
    expect(actions.toggleTodoRequest(todo)).toEqual({type:'TOGGLE_TODO', todo})
  })
  it('toggleTodoSuccess', () => {
    const response = {
      text:'test',
      id:123123,
      completed:false
    }
    expect(actions.toggleTodoSuccess(response)).toEqual({type:'TOGGLE_TODO_SUCCESS'})
  })

  it('deleteTodoRequest', () => {
    const id = 123123
    expect(actions.deleteTodoRequest(id)).toEqual({type:'DELETE_TODO', id})
  })
  it('deleteTodoSuccess', () => {
    const id = 123123
    expect(actions.deleteTodoSuccess(id)).toEqual({type:'DELETE_TODO_SUCCESS', id})
  })
})
