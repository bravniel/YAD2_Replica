import React, { useContext } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { FiLink2 } from 'react-icons/fi'; // Link
import { MdOutlineOpenInNew } from 'react-icons/md';
import { WindowContext } from '../../../../../context/WindowContext';

const PublishedAdFooter = ({ asset }) => {
  const { windowWidth } = useContext(WindowContext);

  const mistGray = '#b6b6b6';
  const adId = `${asset.propertyId}`.split(',')[0];

  function convertDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${day}.${month}.${year}`;
  }
  const adUploadDate = new Date(`${asset.uploadDate}`.substring(0, 10));
  const exiryDate = new Date(
    adUploadDate.getFullYear(),
    adUploadDate.getMonth() + 3,
    adUploadDate.getDate()
  );
  return (
    <div className='published-ad-footer-container'>
      {windowWidth > 1020 ? (
        <div className='footer-icons-container'>
          <div>
            <FiLink2 />
            <span>שיתוף מודעה</span>
          </div>
          <div className='footer-seperator'></div>
          <div>
            <MdOutlineOpenInNew />
            <span> צפייה במודעה</span>
          </div>
        </div>
      ) : (
        <div className='footer-icons-container'>
          <div>
            <BiMessageRoundedDetail />
            <span>קראת את כל ההודעות</span>
          </div>
        </div>
      )}
      {windowWidth > 1020 ? (
        <div className='footer-ad-info'>
          <span className='info'>
            נוצרה ב- {convertDate(asset.uploadDate.substring(0, 10))}
          </span>
          <div className='footer-seperator'></div>
          <span className='info'>
            תאריך תפוגה {convertDate(exiryDate.toISOString().substring(0, 10))}
          </span>
          <div className='footer-seperator'></div>
          <span className='info'>מספר מודעה: {adId}</span>
        </div>
      ) : (
        <div className='footer-ad-chat'>
          <span className='chat'>לצ'אט</span>
          <AiOutlineLeft />
        </div>
      )}
    </div>
  );
};

export default PublishedAdFooter;
