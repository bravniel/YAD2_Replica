import React from 'react';

export default function FormButton({ text, onClick, children }) {
  return (
    <button className='form-button' onClick={onClick}>
      {children}
      {text}
    </button>
  );
}
