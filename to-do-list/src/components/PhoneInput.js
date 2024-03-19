import React, { useState } from 'react';

const PhoneInput = ({ setPhone }) => {
  const [phone, setPhoneLocal] = useState('');

  const handleChange = (e) => {
    setPhoneLocal(e.target.value);
    setPhone(e.target.value);
  };

  return (
    <div>
      <label>Phone: </label>
      <input
        type="tel"
        value={phone}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default PhoneInput;