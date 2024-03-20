import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../states/todosSlice';
import { Button, Checkbox } from '@mui/material';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  const handleToggle = (index) => {
    dispatch(toggleTodo(index));
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <Checkbox 
            type="checkbox"
            checked={todo.done}
            onChange={() => handleToggle(index)}
          />
          <span>Note: {todo.note}</span>
          <span>Name: {todo.name}</span>
          <span>Email: {todo.email}</span>
          <span>Phone: {todo.phone}</span>
          <Button variant="contained" onClick={() => handleDelete(index)}>Delete</Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;