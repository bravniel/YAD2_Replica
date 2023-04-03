import React, { useState } from 'react';

const DescriptionContainer = ({ descriptionText }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className='description-container'>
      <p
        className='description-text'
        style={
          showInfo
            ? { overflow: 'visible', height: 'fit-content' }
            : { }
        }>
        {descriptionText}
        {!showInfo && <span className='description-mist'></span>}
      </p>

      {showInfo ? (
        <div className='description-btn' onClick={() => setShowInfo(false)}>
          פחות
        </div>
      ) : (
        <div className='description-btn' onClick={() => setShowInfo(true)}>
          קרא עוד
        </div>
      )}
    </div>
  );
};

export default DescriptionContainer;
