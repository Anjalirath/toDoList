import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../states/todosSlice';
import { Button } from '@mui/material';
import NotesInput from './NotesInput'
import NameInput from './NameInput'
import EmailInput from './EmailInput'
import PhoneInput from './PhoneInput'


const Form = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(note.length>4){
    dispatch(addTodo({ note, name, email, phone, done: false }));
    setNote('');
    setName('');
    setEmail('');
    setPhone('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <NotesInput value={note} onChange={(e) => setNote(e.target.value)} />
      <NameInput value={name} onChange={(e) => setName(e.target.value)} />
      <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <PhoneInput value={phone} onChange={(e) => setPhone(e.target.value)} />
      <br />
      <Button variant="contained" type="submit">Submit</Button>
    </form>
  );
};

export default Form;
