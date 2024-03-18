import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const AddTask = ({ onAddEmail, onAddPhone }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddEmail = () => {
    if (email.trim() !== "") {
      onAddEmail(email);
      setEmail("");
    }
  };

  const handleAddPhone = () => {
    if (phone.trim() !== "") {
      onAddPhone(phone);
      setPhone("");
    }
  };

  return (
    <div className="add-task">
      <div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddEmail}>
          Add Email
        </Button>
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Phone No."
          variant="outlined"
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddPhone}>
          Add Phone
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
