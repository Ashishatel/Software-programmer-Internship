import React from 'react'
import {Todo} from "../Mycomponent/Todo";
export const Todos = (props) => {
  return (
    <div className="container">
    <h3>Todo List</h3>
    <Todo todo={props.todo[0]}/>
    </div>
  )
}

//export default Todos
