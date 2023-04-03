import React, { useState, useEffect } from 'react';

const ApartmentEntranceDate = ({ dispatchForm, entranceDate }) => {
  return (
    <div className='apartment-entrance-date-container'>
      <label>תאריך כניסה</label>
      <div className='date-container'>
        <input
          type='date'
          onChange={(event) => {
            dispatchForm({
              type: 'ENTRANCE_DATE',
              payload: { value: event.target.value },
            });
          }}
          value={entranceDate.value ? entranceDate.value: ''}
        />
      </div>
    </div>
  );
};

export default ApartmentEntranceDate;
