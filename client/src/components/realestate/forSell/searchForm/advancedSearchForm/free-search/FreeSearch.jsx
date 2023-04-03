import React, { useState, useEffect } from 'react';

const FreeSearch = ({ dispatchForm, openSearch }) => {
  const blurHandler = (event) => {
    dispatchForm({
      type: 'OPEN_SEARCH',
      payload: { value: event.target.value },
    });
  };

  return (
    <div className='free-search-container'>
      <label>חיפוש חופשי</label>
      <input
        onBlur={blurHandler}
        placeholder={openSearch.value ? 'חיפוש אחרון: ' + openSearch.value : ''}
      />
    </div>
  );
};

export default FreeSearch;
