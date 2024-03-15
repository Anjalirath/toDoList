
import React, { useState } from 'react';
import Task from './Task';


const TaskList = ({ inputs, type, onDelete }) => {
    const [selectedId, setSelectedId] = useState(null);
  
    const handleCheckboxChange = (id) => {
      setSelectedId(id);
    };
  
    const handleDelete = () => {
      if (selectedId !== null) {
        onDelete(type, selectedId);
        setSelectedId(null);
      }
    };
  
    return (
      <div className="task-list">
        {inputs.map((input) => (
          <Task key={input.id} input={input} onDelete={handleDelete} onCheckboxChange={() => handleCheckboxChange(input.id)} />
        ))}
      </div>
    );
  };
  

export default TaskList;