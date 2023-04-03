import React from 'react';

export default function SearchCheckboxAndLabel({ value, label, checked, children, filterHandler}) {
  return (
    <div className='checkbox-and-label-container'>
      <label className='checkbox-and-label'>
        <input
          type='checkbox'
          value={value}
          checked={checked}
          onChange={filterHandler? filterHandler:null}
        />
        <span className='checkmark' />
        <span className='label'>
          {label} {children}
        </span>
      </label>
    </div>
  );
}
