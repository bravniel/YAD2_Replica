import React, { useEffect, useState } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';

const SellerDetails = ({ asset }) => {
  const [showSellerInfo, setShowSellerInfo] = useState(false);

  return (
    <div className='contact-user'>
      <div
        className='contact-user-container'
        onClick={() => {
          setShowSellerInfo(!showSellerInfo);
        }}>
        <AiOutlinePhone className='phone-icon' />
        <span>הצג טלפון</span>
      </div>

      <div
        className={
          !showSellerInfo ? 'contact-user-dropbox' : 'contact-user-dropbox open'
        }>
        <li>{asset.nameOfContact}</li>
        <li>{asset.phoneNumberOfContact}</li>
        <li
          onClick={() =>
            alert(asset.emailOfContact ? asset.emailOfContact : 'לא צוין מייל')
          }>
          שליחת דוא"ל למפרסם
        </li>
      </div>
    </div>
  );
};

export default SellerDetails;
