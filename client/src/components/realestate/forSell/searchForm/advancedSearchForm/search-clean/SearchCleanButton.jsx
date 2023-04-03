import React, { useState, useEffect } from 'react';

const SearchCleanButton = ({
  dispatchForm,
  getData,
  setIsAdvancedSearchDropboxOpen,
}) => {
  return (
    <div className='search-clean-button-container'>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
            getData();
            setIsAdvancedSearchDropboxOpen(false);
        }}
        className='search-button'>
        חיפוש
      </button>
      <span onClick={() => dispatchForm({ type: 'CLEAN' })}>נקה</span>
    </div>
  );
};

export default SearchCleanButton;
