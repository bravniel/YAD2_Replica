import React, { useState } from 'react';
import AssetInfo from './assetInfo/AssetInfo';
import SellerDetails from './sellerDetails/SellerDetails';

import { FaRegHeart } from 'react-icons/fa';
import { IoOpenOutline } from 'react-icons/io5';
import AdFooter from './assetInfo/adFooter/AdFooter';
import { BiMap } from 'react-icons/bi';

export default function AssetAd({ asset }) {
  const [isHover, setIsHover] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const todayDate = new Date().toISOString().substring(0, 10);
  return (
    <div
      className='ad-container'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <div
        className={
          showMoreInfo
            ? asset.adTrack == 'בולט' || asset.adTrack == 'בולט במיוחד'
              ? 'asset-ad bold opened-info'
              : 'asset-ad regular opened-info'
            : asset.adTrack == 'בולט' || asset.adTrack == 'בולט במיוחד'
            ? 'asset-ad bold'
            : 'asset-ad regular'
        }
        onClick={() => setShowMoreInfo(!showMoreInfo)}>
        <div className='image-container'>
          <img
            src={require(`../../../../../assets/newAd/${asset.imageSrcName}`)}
            alt={asset.imageSrcName}
          />
          <div className='heart-icon-container'>
            <FaRegHeart className='heart-icon' />
          </div>
        </div>
        <div className='asset-middle-container'>
          <div className='asset-location'>
            <span className='asset-street-with-number'>
              <span>
                {asset.street} {asset.addressNumber}
              </span>
              {showMoreInfo && (
                <span className='map-icon'>
                  <BiMap /> <span>מפה</span>
                </span>
              )}
            </span>
            <span>{`${asset.typeOfProperty} ,${asset.settlement}`}</span>
          </div>
          <div className='asset-properties'>
            <div className='asset-property'>
              {asset.numberOfRooms ? asset.numberOfRooms : '-'}
              <div>חדרים</div>
            </div>
            <div className='asset-property'>
              {asset.floor ? asset.floor : '-'}
              <div>קומה</div>
            </div>
            <div className='asset-property'>
              {asset.overallSquareMeters ? asset.overallSquareMeters : '-'}
              <div>מ"ר</div>
            </div>
          </div>
        </div>

        <div className='asset-left-container'>
          <div className='ad-price-and-date'>
            <div className='ad-price'>
              {asset.price ? '\u20AA' + asset.price : 'לא צוין מחיר'}
            </div>
            {isHover && !showMoreInfo ? (
              <div className='click-for-details orange'>לחצו לפרטים</div>
            ) : (
              <div className='updated-today'>
                {asset.uploadDate == todayDate
                  ? 'עודכן היום'
                  : asset.uploadDate.substring(0, 10)}
              </div>
            )}
          </div>
        </div>
      </div>
      {!showMoreInfo && (
        <div className='open-new-tab-container'>
          {isHover ? 'פתיחה בטאב חדש' : ''}
          <IoOpenOutline className='open-tab-icon' />
        </div>
      )}
      {showMoreInfo && <AssetInfo asset={asset} />}
      {showMoreInfo && <AdFooter asset={asset} />}
    </div>
  );
}
