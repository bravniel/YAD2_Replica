import React from 'react';
import { BiFilterAlt } from 'react-icons/bi';

const Filter = () => {
  return (
    <div className='filter-container' onClick={() => alert('Not Functional.')}>
      <BiFilterAlt className='filter-icon' />
      <span>סנן תוצאות</span>
    </div>
  );
};

export default Filter;
