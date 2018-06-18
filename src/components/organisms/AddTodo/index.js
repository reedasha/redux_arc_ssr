import React from 'react'

const AddTodo = ({ onAddTodo }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        onAddTodo(input.value)
        input.value = ''
      }}>
        <input type="text" ref={node => { input = node}} placeholder ="add todo"/>
        <button className="btn2" type="submit"> Add Todo </button>
      </form>
    </div>
  )
}

export default AddTodo
