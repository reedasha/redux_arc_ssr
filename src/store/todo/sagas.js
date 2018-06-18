import { call, put, take, takeEvery, fork } from 'redux-saga/effects'
import axios from 'axios'
import { addTodoSuccess, deleteTodoSuccess, getTodosSuccess, toggleTodoSuccess } from './actions'

export function* getTodo() {
  const response = yield call(
    axios.get,
    'http://localhost:8000/api/todos/'
  )
  yield put(getTodosSuccess(response.data))
}
export function* myGetSaga() {
  while (true) {
    const {} = yield take('GET_TODOS')
    yield call(getTodo)
  }
}



export function* addTodo(text){
  const response = yield call(
    axios,
    {
      method: 'POST',
      url: 'http://localhost:8000/api/todos/',
      data: {
        text: text,
        completed:false
      }
    }
  )
  yield put(addTodoSuccess(text, response.data))
}
export function* myAddSaga() {
  while (true) {
    const {text} = yield take('ADD_TODO')
    yield call(addTodo, text)
  }
}



export function* deleteTodo(id){
  const response = yield call(
    axios.delete,
    'http://localhost:8000/api/todos/'+id
  )
  yield put(deleteTodoSuccess(id))
}
export function* myDeleteSaga() {
  while (true) {
    const {id} = yield take('DELETE_TODO')
    yield call(deleteTodo, id)
  }
}



export function* toggleTodo(todo){
  const response = yield call(
    axios,
    {
      method: 'PUT',
      url: 'http://localhost:8000/api/todos/'+todo.id,
      data:{
        text: todo.text,
        completed: !todo.completed,
      }
    }
  )
  yield put(toggleTodoSuccess(response.data.id))
}
export function* myToggleSaga() {
  while (true) {
    const {todo} = yield take('TOGGLE_TODO')
    yield call(toggleTodo, todo)
  }
}


export default function* () {
  yield fork(myGetSaga),
  yield fork(myAddSaga),
  yield fork(myDeleteSaga),
  yield fork(myToggleSaga)
}
