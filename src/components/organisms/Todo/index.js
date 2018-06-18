import React from 'react'
import PropTypes from 'prop-types'


const Todo = ({ onClick, todo }) => {
  const handleClick = (e) => {
    todo.completed = !todo.completed
    onClick(todo)
  }
  return (<li
    onClick={handleClick}
    style={{
      textDecoration: todo.completed ? 'line-through' : 'none'
    }}
  >
    {todo.text}
  </li>
)
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
}

export default Todo
