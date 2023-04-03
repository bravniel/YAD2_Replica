import React from 'react';
import { TbBellRinging2 } from 'react-icons/tb';

const FormTitle = () => {

  return (
    <div className='form-title-container'>
      <h4 className='form-title'>
        איזה נכס ל<span>מכירה</span> תרצו לחפש?
      </h4>
      <div
        className='mail-notification-button'>
        <TbBellRinging2 className='bell-icon' />
        קבלו התראות במייל על החיפוש
      </div>
    </div>
  );
};

export default FormTitle;
