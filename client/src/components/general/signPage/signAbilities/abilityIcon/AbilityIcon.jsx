import React from 'react';

export default function AbilityIcon({ src, text }) {
  return (
    <div className='ability-icon'>
      {src && (
        <div className='ability-icon-img'>
          <img src={src} />
        </div>
      )}
      {text && <div className='ability-icon-text'>{text}</div>}
    </div>
  );
}
