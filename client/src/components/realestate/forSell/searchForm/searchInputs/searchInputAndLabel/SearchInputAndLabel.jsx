import React from 'react';

export default function SearchInputAndLabel({
  type = 'text',
  id,
  label,
  placeholder,
}) {
  return (
    <div id={id} className='search-block__input-and-label'>
      <label htmlFor={id + '-input'}>{label}</label>
      <input type={type} id={id + '-input'} placeholder={placeholder} />
    </div>
  );
}
