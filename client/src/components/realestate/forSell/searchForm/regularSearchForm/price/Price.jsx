import React from 'react';

const Price = ({ form, dispatchForm }) => {
  return (
    <div className='price-container'>
      <label>מחיר</label>
      <div>
        <input
          placeholder='מ-'
          type='number'
          onChange={(event) =>
            dispatchForm({
              type: 'PRICE_RANGE',
              payload: {
                value: event.target.value,
              },
              option: 'START',
            })
          }
        />
        <input
          placeholder='עד-'
          type='number'
          onChange={(event) =>
            dispatchForm({
              type: 'PRICE_RANGE',
              payload: {
                value: event.target.value,
              },
              option: 'END',
            })
          }
        />
      </div>
    </div>
  );
};

export default Price;
