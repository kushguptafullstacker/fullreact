import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState={
    todos:[{
        id:"1",
        text:"write your tpdos"
    }]
}

const todoslice=createSlice({
    name:"Todo",
    initialState,
       reducers:{
       addtodo:(state , action)=>{
        const Todo={
         id:nanoid(),
         text:action.payload
        }
        state.todos.push(Todo)
       },
       removetodo:(state , action)=>{
        state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
       }
    }
})

export const {addtodo , removetodo} = todoslice.actions
export default todoslice.reducer