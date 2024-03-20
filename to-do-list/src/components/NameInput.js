import React  from 'react';
import { TextField } from '@mui/material';

const NameInput = ({ value, onChange }) => {


  return (
    <div>
      <label>Name: </label>
      <TextField id="standard-basic" label="Name" variant="standard" 
        type="text"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default NameInput;
