import React from 'react';
import { TextField } from '@mui/material';

const NoteInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    if (e.target.value.length <= 254) {
      onChange(e);
    }
  };
  return (
    <div>
      <label>Note: </label>
      <TextField id="standard-basic" label="Write Note" variant="standard" 
        value={value}
        onChange={handleChange}
        required
        inputProps={{ minLength: 5, maxLength: 254 }}
      />
      {(value.length < 5 || value.length > 254) && (
        <p style={{ color: 'red' }}>
          *Note must be between 5 and 254 characters long
        </p>
      )}
    </div>
  );
};

export default NoteInput;
