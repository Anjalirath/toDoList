import React, { useState } from 'react';

const AddTask = ({ onAddEmail, onAddPhone }) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleAddEmail = () => {
      if (email.trim() !== '') {
        onAddEmail(email);
        setEmail('');
      }
    };
  
    const handleAddPhone = () => {
      if (phone.trim() !== '') {
        onAddPhone(phone);
        setPhone('');
      }
    };
  
    return (
      <div className="add-task">
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleAddEmail}>Add Email</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={handleAddPhone}>Add Phone</button>
        </div>
      </div>
    );
  };
  
export default AddTask;