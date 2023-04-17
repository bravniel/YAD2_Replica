// middleBtnSection
import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { GrEdit } from 'react-icons/gr';
import { IoSnowOutline } from 'react-icons/io5';

export default function MiddleBtnSection() {
  return (
    <div className='middle-btn-section'>
      <div className='published-btn'>
        <GrEdit />
        <span>עריכה</span>
      </div>
      <div className='published-btn'>
        <IoSnowOutline />
        <span>הקפאה</span>
      </div>
      <div className='published-btn'>
        <BiTrash />
        <span>הסרה</span>
      </div>
    </div>
  );
}
