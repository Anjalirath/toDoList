import React, { useState } from 'react';
import NoteInput from './NotesInput';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import PhoneInput from './PhoneInput';
import { Button } from '@mui/material';

const Form = ({ addTodo }) => {
  const [note, setNote] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.length < 5) {
      alert('Note must be at least 5 characters long.');
      return;
    }
    if (!name || !email || !phone) {
      alert('Please fill out all fields.');
      return;
    }
    // Further validation for email and phone can be added if needed

    addTodo({ note, name, email, phone });
    setNote('');
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <NoteInput setNote={setNote} />
      <br />
      <NameInput setName={setName} />
      <br />
      <EmailInput setEmail={setEmail} />
      <br />
      <PhoneInput setPhone={setPhone} />
      <br />
      <Button variant="contained" type="submit">Submit</Button>
    </form>
  );
};

export default Form;
