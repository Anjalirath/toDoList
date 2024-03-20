import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './states/store';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css'


const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, done: false }]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <Provider store={store}>
    <div className="container">
      <h1>Todo App</h1>
   
      <Form addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
    </Provider>
  );
};

export default App;
