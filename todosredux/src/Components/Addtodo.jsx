import React from 'react'
import { useState } from 'react'
import { addtodo } from '../Slice/Cretaeslice'
import {useDispatch} from 'react-redux'
 function Addtodo() {
    const [input , setinput]=useState("")
    const dispatch=useDispatch()

    const buttonhandler=(e)=>{
        e.preventDefault()
        dispatch(addtodo(input))
        setinput('')
    }
  return (
    <div>
    <form onClick={buttonhandler}>
   <input
   type='text'
   placeholder='enter todo'
   value={input}
   onChange={(e)=>setinput(e.target.value)}
   />
  
   <button>add</button>
   </form>
    </div>
  )
}

export default Addtodo