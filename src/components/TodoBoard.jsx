import React from 'react'
import TodoItem from './TodoItem';

const TodoBoard = (props) => {
  console.log('todo', props.todoList)
  return (
    <>
      <h1>TodoBoard</h1>
      {props.todoList.map((item) => <TodoItem item = {item} />)}
    </>
  )
}

export default TodoBoard