import React from 'react';

const ApartmentSize = ({ dispatchForm, sizeRange }) => {
  return (
    <div className='apartment-size-container'>
      <label>גודל דירה במ"ר</label>
      <div className='size-container'>
        <input
          type='number'
          placeholder={sizeRange.start ? '' + sizeRange.start : 'מ-'}
          onChange={(event) =>
            dispatchForm({
              type: 'SIZE_RANGE',
              payload: { value: event.target.value },
              option: 'START',
            })
          }
          value={sizeRange.start ? sizeRange.start : ''}
        />
        <input
          type='number'
          placeholder={sizeRange.end ? '' + sizeRange.end : 'מ-'}
          onChange={(event) =>
            dispatchForm({
              type: 'SIZE_RANGE',
              payload: { value: event.target.value },
              option: 'END',
            })
          }
          value={sizeRange.end ? sizeRange.end : ''}
        />
      </div>
    </div>
  );
};

export default ApartmentSize;
