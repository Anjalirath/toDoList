import React, { useState } from 'react';

const NoteInput = ({ setNote }) => {
  const [note, setNoteLocal] = useState('');

  const handleChange = (e) => {
    setNoteLocal(e.target.value);
    setNote(e.target.value);
  };

  return (
    <div>
      <label>Note: </label>
      <textarea
        value={note}
        onChange={handleChange}
        maxLength={254}
        minLength={5}
        required
      />
    </div>
  );
};

export default NoteInput;
