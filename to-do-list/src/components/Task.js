import React from 'react';


const Task = ({ input, onDelete, onCheckboxChange, isChecked }) => {
    return (
      <div className="task">
        <input type="checkbox" checked={isChecked} onChange={onCheckboxChange} />
        <span>{input.email || input.phone}</span>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  };
export default Task;