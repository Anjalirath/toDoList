import React, { useState } from 'react';

const EmailInput = ({ setEmail }) => {
  const [email, setEmailLocal] = useState('');

  const handleChange = (e) => {
    setEmailLocal(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <div>
      <label>Email: </label>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default EmailInput;
