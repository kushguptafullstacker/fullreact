import React, { useState } from 'react';
import { Usetodo } from '../Context/TodoContext';

function Input() {
  const [todoText, setTodoText] = useState('');
  const { addtodo } = Usetodo();

  const handler = (e) => {
    e.preventDefault();
    if (!todoText) return; // Don't add empty todos
    
    try {
      addtodo({ text: todoText, completed: false });
      setTodoText(''); // Reset input field after adding the todo
    } catch (error) {
      console.error("Error adding todo:", error);
      // Optionally handle the error here, such as showing an alert or a message to the user
    }
  };

  return (
    <div>
      <form onSubmit={handler}>
        <label htmlFor="todo-input">Enter your Todo:</label>
        <input
          id="todo-input"
          value={todoText}
          type="text"
          placeholder="Write your todo"
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type="submit">Add new todo</button>
      </form>
    </div>
  );
}

export default Input;
