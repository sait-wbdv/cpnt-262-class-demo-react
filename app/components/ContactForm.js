'use client';
import { useState } from 'react';

export function ContactForm() {
  const [name, setName] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    alert(`Welcome, ${name}`);
    setName('');
  };

  console.log(name);
  return (
    <form
      className="flex flex-col items-center text-center gap-4 w-full"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col items-start text-lg w-1/2">
        <label>Name</label>
        <input
          type="text"
          id="name"
          value={name}
          className="text-black p-2 text-lg w-full"
          onChange={(event) => {
            console.log(event);
            const value = event.target.value;
            setName(value);
            if (value.length === 0) {
              setNameErrorMessage('Name is required');
            } else if (value.length > 0 && value.length < 5) {
              setNameErrorMessage(
                'Name must be greater than or equal to 5 characters'
              );
            } else {
              setNameErrorMessage('');
            }
          }}
          placeholder="Enter your full name"
        />
        {nameErrorMessage && (
          <small className="text-red-600">{nameErrorMessage}</small>
        )}
      </div>
      <button type="submit" className="bg-black p-4">
        Submit
      </button>
    </form>
  );
}
