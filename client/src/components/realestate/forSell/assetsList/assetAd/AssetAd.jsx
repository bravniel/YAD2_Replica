import React, { useContext, useState } from 'react';
import AssetInfo from './assetInfo/AssetInfo';
import SellerDetails from './sellerDetails/SellerDetails';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoOpenOutline } from 'react-icons/io5';
import AdFooter from './assetInfo/adFooter/AdFooter';
import { BiMap } from 'react-icons/bi';
import {
  addFavoriteAd,
  removeFavoriteAd,
} from '../../../../../api/userRequests';
import { UserContext } from '../../../../../context/UserContext';

export default function AssetAd({ asset }) {
  const { user, dispatchUser, userFavoriteAds, dispatchUserFavoriteAds } =
    useContext(UserContext);

  const [isHover, setIsHover] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const todayDate = new Date().toISOString().substring(0, 10);

  function convertDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  }

  function converPrice(priceStr) {
    let price = priceStr;
    let count = 0;
    let finalPrice = '';
    while (price > 0.1) {
      const module = price % 10;
      if (count === 3) {
        count = 0;
        finalPrice += ',';
      }
      count++;
      finalPrice += module + '';
      price /= 10;
      price = parseInt(price);
    }
    return `${finalPrice.split('').reverse().join('')}`;
  }

  function isAdFavorite(adId) {
    return userFavoriteAds.some((obj) => obj.adId === adId);
  }

  const toggleFavoriteAd = (adId) => {
    if (!isAdFavorite(adId)) {
      if (user) {
        addFavoriteAd(user.token, adId).then(
          (data) => {
            let newFavoriteAd = { adId: `${adId}` };
            dispatchUserFavoriteAds([...userFavoriteAds, newFavoriteAd]);
          },
          (err) => {
            console.log('err: ', err.response.data.Message);
          }
        );
      } else {
        let newFavoriteAd = { adId: `${adId}` };
        dispatchUserFavoriteAds([...userFavoriteAds, newFavoriteAd]);
      }
    } else {
      if (user) {
        removeFavoriteAd(user.token, adId).then(
          (data) => {
            let newFavoriteAdsArray = [...userFavoriteAds];
            newFavoriteAdsArray = newFavoriteAdsArray.filter(
              (obj) => obj.adId !== `${adId}`
            );
            dispatchUserFavoriteAds(newFavoriteAdsArray);
          },
          (err) => {
            console.log('err: ', err.response.data.Message);
          }
        );
      } else {
        let newFavoriteAdsArray = [...userFavoriteAds];
        newFavoriteAdsArray = newFavoriteAdsArray.filter(
          (obj) => obj.adId !== `${adId}`
        );
        dispatchUserFavoriteAds(newFavoriteAdsArray);
      }
    }
  };

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
          <div
            className='heart-icon-container'
            onClick={(event) => {
              // setShowMoreInfo(false);
              event.stopPropagation();
              toggleFavoriteAd(`${asset.propertyId}`.split(',')[0]);
            }}>
            {!isAdFavorite(`${asset.propertyId}`.split(',')[0]) ? (
              <FaRegHeart className='heart-icon' />
            ) : (
              <FaHeart className='favorite-heart-icon' />
            )}
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
              {asset.price
                ? '\u20AA' + converPrice(asset.price)
                : 'לא צוין מחיר'}
            </div>
            {isHover && !showMoreInfo ? (
              <div className='click-for-details orange'>לחצו לפרטים</div>
            ) : (
              <div className='updated-today'>
                {asset.uploadDate == todayDate
                  ? 'עודכן היום'
                  : convertDate(asset.uploadDate.substring(0, 10))}
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
