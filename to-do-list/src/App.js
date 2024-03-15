import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  const [emailInputs, setEmailInputs] = useState([]);
  const [phoneInputs, setPhoneInputs] = useState([]);

  const handleAddEmail = (email) => {
    setEmailInputs([...emailInputs, { id: Date.now(), email }]);
  };

  const handleAddPhone = (phone) => {
    setPhoneInputs([...phoneInputs, { id: Date.now(), phone }]);
  };

  const handleDeleteInput = (type, id) => {
    if (type === 'email') {
      setEmailInputs(emailInputs.filter((input) => input.id !== id));
    } else if (type === 'phone') {
      setPhoneInputs(phoneInputs.filter((input) => input.id !== id));
    }
  };

  const handleCheckboxChange = (type, id) => {
    // Logic to handle checkbox change, you can implement as needed
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <AddTask onAddEmail={handleAddEmail} onAddPhone={handleAddPhone} />
      <TaskList inputs={emailInputs} type="email" onDelete={handleDeleteInput} onCheckboxChange={handleCheckboxChange} />
      <TaskList inputs={phoneInputs} type="phone" onDelete={handleDeleteInput} onCheckboxChange={handleCheckboxChange} />
    </div>
  );
};
export default App;
