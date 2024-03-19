import React from 'react';
import { Button, Checkbox } from '@mui/material';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  const handleDelete = (index) => {
    deleteTodo(index);
  };
  const handleToggle = (index) => {
    toggleTodo(index);
  };
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
      {todos.map((todo, index) => (
          <li key={index}>
            <Checkbox
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggle(index)}
            />
          
            <span>Note: {todo.note}</span>
            <span>{todo.name}</span>
            <span>{todo.email}</span>
            <span>{todo.phone}</span>
            
            <Button variant="contained" onClick={() => handleDelete(index)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;