import * as actions from './actions'
import todos from './reducer'


describe('reducer tests', () => {
  const state = []
  it('ADD_TODO_SUCCESS', () => {
    const action = {
      type: 'ADD_TODO_SUCCESS',
      payload: {
        response: {
          "text": "Redux with api ",
          "completed": false,
          "id": 123123
        },
      }
    }
    expect(todos(undefined, {})).toEqual([])
    expect(todos(state, action)).toEqual([{
      "text": "Redux with api ",
      "completed": false,
      "id": 123123
    }])
  })

  it('DELETE_TODO_SUCCESS', () => {
    const state=[{
      "text": "Redux with api ",
      "completed": false,
      "id": 123123
    }]
    const action = {
      type: 'DELETE_TODO_SUCCESS',
      id: 123123
    }
    expect(todos(state, action)).toEqual([])
  })

  it('TOGGLE_TODO_SUCCESS', () => {
    const state = [{
      "text": "Redux with api ",
      "completed": false,
      "id": 123123
    }]
    const action = {
      type: 'TOGGLE_TODO_SUCCESS',
      id: 123123
    }
    expect(todos(state, action)).toEqual([{
      "text": "Redux with api ",
      "completed": true,
      "id": 123123
    }])
  })

  it('TOGGLE_TODO_SUCCESS when faild', () => {
    const state = [{
      "text": "Redux with api ",
      "completed": false,
      "id": 12312
    }]
    const action = {
      type: 'TOGGLE_TODO_SUCCESS',
      id: 123123
    }
    expect(todos(state, action)).toEqual([{
      "text": "Redux with api ",
      "completed": false,
      "id": 12312
    }])
  })

  it('GET_TODOS_SUCCESS', () => {
    const action = {
      type: 'GET_TODOS_SUCCESS',
      payload: {
        response: {
          "text": "Redux with api ",
          "completed": false,
          "id": 123123
        }
      }
    }
    expect(todos(state, action)).toEqual([{
      "text": "Redux with api ",
      "completed": false,
      "id": 123123
    }])
  })

  it('default action test', () => {
    const state = [{
      "text": "Redux with api ",
      "completed": false,
      "id": 123123
    }]
    const action = {
      type: 'GET_TODOS1'
    }
    expect(todos(state, action)).toEqual([{
      "text": "Redux with api ",
      "completed": false,
      "id": 123123
    }])

  })
})
