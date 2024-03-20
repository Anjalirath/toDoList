import React from 'react';
import { TextField } from '@mui/material';

const EmailInput = ({ value, onChange }) => {


  return (
    <div>
      <label>Email: </label>
      <TextField id="standard-basic" label="Email Address" variant="standard" 
        type="email"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default EmailInput;