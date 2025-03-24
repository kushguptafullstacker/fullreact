import { useEffect, useState } from 'react';
import './App.css';
import { TodoProvider } from './Context/TodoContext';
import Input from './Components/Input';
import Todoitem from './Components/Todoitem';

function App() {
  const [todos , settodos]=useState([])
  const addtodo=(todo)=>{
    settodos((prev)=>[{id:Date.now() , ...todo} , ...prev])
  }
  const updatetodo=(id , todo)=>{
    settodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id ? todo : prevtodo))
    )
  }
   const  Deletetodo=(id)=>{
    settodos((prev)=>prev.filter((prevtodo)=>prevtodo.id!==id))
   }
   const Toggle = (id, todo) => {
    settodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id ? { ...prevtodo, completed: !prevtodo.completed } : prevtodo
      )
    );
  };

   useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos);
        if (Array.isArray(parsedTodos)) {
          settodos(parsedTodos);
        }
      } catch (error) {
        console.error("Failed to parse todos from localStorage:", error);
        // Optionally set a default empty array if parsing fails
        settodos([]);
      }
    }
  }, []);
  
  

  return (
    <TodoProvider value={{todos , addtodo , Deletetodo , updatetodo , Toggle }}>
       <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Input />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <Todoitem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
      
      
    </TodoProvider>
  );
}

export default App;
