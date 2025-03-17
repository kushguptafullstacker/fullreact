import React from 'react'
import { removetodo } from '../Slice/Cretaeslice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
function Todoitem() {
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()
  return (
    <div>
        <ul>
        {todos.map((todo)=>(
            <li key={todo.id}>
                <button onClick={()=>dispatch(removetodo(todos.id))}>x</button>
            </li>
        ))}
         
        </ul>
        
       
    </div>
  )
}

export default Todoitem