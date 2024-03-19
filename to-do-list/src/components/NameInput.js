import React, { useState } from 'react';

const NameInput = ({ setName }) => {
  const [name, setNameLocal] = useState('');

  const handleChange = (e) => {
    setNameLocal(e.target.value);
    setName(e.target.value);
  };

  return (
    <div>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default NameInput;
