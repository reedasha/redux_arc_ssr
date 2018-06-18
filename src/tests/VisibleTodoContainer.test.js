import React from 'react';
import {mapDispatchToProps, withServerState, mapStateToProps, PostListContainer} from '../containers/VisibleTodo'
import { mount } from 'enzyme'


describe('AddTodoContainer tests', () => {

  it('mapDispatchToProps test', () => {
    const dispatchSpy = jest.fn()
    const todo = {
      text: 'test',
      id: 123,
      completed: false
    }
    mapDispatchToProps(dispatchSpy).onGet()
    mapDispatchToProps(dispatchSpy).onTodoClick(todo)
    mapDispatchToProps(dispatchSpy).onDeleteTodo(todo.id)
    expect(dispatchSpy.mock.calls).toEqual([
        [ { type: 'DEFAULT_GET_TODOS_REQUEST' } ],
        [ { type: 'DEFAULT_TOGGLE_TODO_REQUEST' } ],
        [ { type: 'DEFAULT_DELETE_TODO_REQUEST' } ] ])
    })

  it('mapStateToProps test', () => {
    const state = {
      todos: {
        test: "test",
        id: 123,
        completed: false
      }
    }
    expect(mapStateToProps(state)).toEqual({ todos: { test: 'test', id: 123, completed: false } })
  })

  it('componentWillMount test', () => {
    const props = {
        onGet: jest.fn(),
        todos: [{
          text: "test",
          id: 123,
          completed: false
        },
      ],
      hasServerState: false,
      setServerState: jest.fn(),
      onDeleteTodo: jest.fn(),
      onTodoClick: jest.fn(),
      cleanServerState: jest.fn(),
    }
    const wrapper = mount(<PostListContainer {...props} />)
    expect(wrapper).toBeDefined()
  })

  it('tests for withServerState', () => {

  })

})
