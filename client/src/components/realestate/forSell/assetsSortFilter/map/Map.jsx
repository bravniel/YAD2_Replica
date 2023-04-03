import React from 'react';
import { BiMap } from 'react-icons/bi';

const Map = () => {
  return (
    <div className='map-container' onClick={() => alert('Not Functional.')}>
      <BiMap className='map-icon' />
      <span>תצוגת מפה</span>
    </div>
  );
};

export default Map;
