import { createContext, useContext } from "react";

export const TodoContext=createContext(  {
     todos:[
    {   
        id:1, 
        todo:"wite a todo",
        completed:false
    }
    
],
   addtodo:(todo)=>{},
   updatetodo:(todo , id)=>{},
   Deletetodo:(id)=>{},
   Toggle:(id)=>{}

})
export const Usetodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider


