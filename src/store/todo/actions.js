export function addTodoRequest(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}
export function addTodoSuccess(text, response) {
  return {
    type: 'ADD_TODO_SUCCESS',
    payload: {
      response
    },
    text: text
  }
}




export function getTodosRequest() {
  return {
    type: 'GET_TODOS',
  }
}
export function getTodosSuccess(response) {
  return {
    type: 'GET_TODOS_SUCCESS',
    payload: {
      response
    }
  }
}




export function toggleTodoRequest(todo) {
  return {
    type: 'TOGGLE_TODO',
    todo
  }
}
export function toggleTodoSuccess(response) {
  return {
    type: 'TOGGLE_TODO_SUCCESS',
  }
}


export function deleteTodoRequest(id) {
  return {
    type: 'DELETE_TODO',
    id
  }
}
export function deleteTodoSuccess(id) {
  return {
    type: 'DELETE_TODO_SUCCESS',
    id
  }
}
