import React from 'react'
import {AddTodo, VisibleTodo} from 'containers'

const HomePage = () => {
  return(
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <VisibleTodo />
    </div>
  )
}

export default HomePage
