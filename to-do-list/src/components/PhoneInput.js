import React  from 'react';
import { TextField } from '@mui/material';

const PhoneInput = ({ value, onChange }) => {
  
 

  return (
    <div>
      <label>Phone: </label>
      <TextField id="standard-basic" label="Phone No." variant="standard" 
        type="tel"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default PhoneInput;