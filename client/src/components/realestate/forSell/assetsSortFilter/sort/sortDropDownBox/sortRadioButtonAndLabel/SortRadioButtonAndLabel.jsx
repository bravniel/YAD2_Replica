import React, { useEffect, useState } from 'react';

export default function SortRadioButtonAndLabel({ checked, value, label, sortHandler }) {
  return (
    <label className='radio-container'>
      <input
        type='radio'
        checked={checked}
        name='sort'
        value={value}
        onChange={() => sortHandler(value)}
      />
      <span className='radio-checkmark'></span>
      {label}
    </label>
  );
}
