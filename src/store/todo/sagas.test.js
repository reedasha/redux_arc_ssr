import {call, put, take, takeEvery, fork } from 'redux-saga/effects'
import {testSaga, expectSaga } from 'redux-saga-test-plan';
import {myGetSaga, getTodo, myAddSaga, addTodo, myDeleteSaga, deleteTodo, myToggleSaga, toggleTodo} from './sagas'
import {getTodosSuccess,addTodoSuccess,deleteTodoSuccess,toggleTodoSuccess} from './actions'
import axios from 'axios'
import moxios from 'moxios'
import defSaga from './sagas'


describe('Saga functions tests', () => {

  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })



  it('myGetSaga', () => {
    const generator = myGetSaga()
    expect(generator.next().value).toEqual(take('GET_TODOS'))
    expect(generator.next({}).value).toEqual(call(getTodo))
  })

  it('getTodo', () => {
    const rd = [{
      text: "test",
      completed: true,
      id: 1
    }]
    moxios.wait(function () {
       let request = moxios.requests.mostRecent()
       request.respondWith({
         status: 200,
         response: [{
           text: "test",
           completed: true,
           id: 1}]
       })
    })
    return expectSaga(getTodo)
      .dispatch(axios.get, 'http://localhost:3002/todos/')
      .put(getTodosSuccess(rd))
      .run()
  })




  it('myAddSaga', () => {
    const text = 'test'
    const generator = myAddSaga()
    expect(generator.next().value).toEqual(take('ADD_TODO'))
    expect(generator.next({text}).value).toEqual(call(addTodo, 'test'))
  })
  it('addTodo', () => {
    const text = 'test'
    const rd = {
          text: "test",
          completed: false,
          id: 1
        }
    const config = {
      method:'POST',
      url:'http://localhost:3002/todos/',
      data:{
        text: 'text',
        completed: false,
        id: 1
      }
    }
    moxios.wait(function () {
       let request = moxios.requests.mostRecent()
       request.respondWith({
         status: 201,
         response:{
           text: "test",
           completed: false,
           id: 1
         }
       })
    })
    return expectSaga(addTodo, text)
      .dispatch(axios, config)
      .put(addTodoSuccess(text, rd))
      .run()
  })





  it('myDeleteSaga', () => {
    const id = 123
    const generator = myDeleteSaga()
    expect(generator.next().value).toEqual(take('DELETE_TODO'))
    expect(generator.next({id}).value).toEqual(call(deleteTodo, 123))
  })
  it('deleteTodo', () => {
    const id = 123
    moxios.wait(function () {
       let request = moxios.requests.mostRecent()
       request.respondWith({
         status: 201,
         response:{
           text: "test",
           completed: false,
           id: 1
         }
       })
    })
    return expectSaga(deleteTodo, id)
      .dispatch(axios.delete, 'http://localhost:3002/todos/'+id)
      .put(deleteTodoSuccess(id))
      .run()
  })


  it('myToggleSaga', () => {
    const todo = {
      text:'test',
      completed: false,
      id: 123
    }
    const text = 'test'
    const generator = myToggleSaga()
    expect(generator.next().value).toEqual(take('TOGGLE_TODO'))
    expect(generator.next({todo}).value).toEqual(call(toggleTodo, todo))
  })
  it('toggleTodo', () => {
    const todo = {
      text: "test",
      completed: false,
      id: 1
    }
    const config = {
      method: 'PUT',
      url: 'http://localhost:3002/todos/'+todo.id,
      data: {
        text: todo.text,
        completed: !todo.completed,
      }
    }
    moxios.wait(function () {
       let request = moxios.requests.mostRecent()
       request.respondWith({
         status: 201,
         response:{
           data:{
             text: "test",
             completed: false,
             id: 1
           }
         }
       })
    })
    return expectSaga(toggleTodo, todo)
      .dispatch(axios, config)
      .put(toggleTodoSuccess(todo.id))
      .run()
  })
  it('sagas fork', () => {
    const generator = defSaga()
    expect(generator.next().value).toEqual(fork(myGetSaga))
    expect(generator.next().value).toEqual(fork(myAddSaga))
    expect(generator.next().value).toEqual(fork(myDeleteSaga))
    expect(generator.next().value).toEqual(fork(myToggleSaga))
  })
})
