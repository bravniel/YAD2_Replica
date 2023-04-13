import React, { useState } from 'react';
import { FiLink2 } from 'react-icons/fi'; // Link
import {
  AiOutlineWhatsApp,
  AiOutlinePrinter,
  AiOutlineMail,
} from 'react-icons/ai'; // Whats app , Print , Mail
import { CgTab } from 'react-icons/cg'; // Tab

const AdFooter = ({ asset }) => {
  const mistGray = '#b6b6b6';
  const adId = `${asset.propertyId}`.split(',')[0];
  return (
    <div className='utils-container'>
      <div className='contact-icons-container'>
        <span>
          <FiLink2 />
        </span>
        <span>
          <AiOutlineWhatsApp />
        </span>
        <span>
          <AiOutlinePrinter />
        </span>
        <span>
          <CgTab />
        </span>
        <span>
          <AiOutlineMail />
        </span>
      </div>
      <div className='commerical-info-error-container'>
        <span className='error'>מצאתי טעות</span>
        <span className='info'>
          מספר מודעה:{' '}
          {adId}
        </span>
      </div>
    </div>
  );
};

export default AdFooter;
