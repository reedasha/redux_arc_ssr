const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO_SUCCESS':
      return [...state, {
        id: action.payload.response.id,
        text: action.payload.response.text,
        completed: action.payload.response.completed
      }]
    case 'DELETE_TODO_SUCCESS':
      return state.filter(todo => todo.id !== action.id)
    case 'TOGGLE_TODO_SUCCESS':
      return state.map(todo =>
        (todo.id === action.id) ? { ...todo,
          completed: !todo.completed
        } : todo
      )
    case 'GET_TODOS_SUCCESS':
      return state.concat(action.payload.response)
    default:
      return state
  }
}

export default todos
