import React, { useContext, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
  addFavoriteAd,
  removeFavoriteAd,
} from '../../../../../../../api/userRequests';
import { UserContext } from '../../../../../../../context/UserContext';

export default function FavoriteAdDropdownItem({ asset }) {
  const { user, dispatchUser, userFavoriteAds, dispatchUserFavoriteAds } =
    useContext(UserContext);
  const navigate = useNavigate();

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
    !isAdFavorite(adId)
      ? addFavoriteAd(user.token, adId).then(
          (data) => {
            let newFavoriteAd = { adId: `${adId}` };
            dispatchUserFavoriteAds([...userFavoriteAds, newFavoriteAd]);
          },
          (err) => {
            console.log('err: ', err.response.data.Message);
          }
        )
      : removeFavoriteAd(user.token, adId).then(
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
  };

  return (
    <div
      className='favorite-asset-ad'
      onClick={() => navigate('/personal/favorites')}>
      <div className='image-container'>
        <img
          src={require(`../../../../../../../assets/newAd/${asset.imageSrcName}`)}
          alt={asset.imageSrcName}
        />
        <div
          className='heart-icon-container'
          onClick={(event) => {
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
      <div className='asset-location-container'>
        <span className='asset-street-with-number'>
          <span>
            {asset.street} {asset.addressNumber}
          </span>
        </span>
        <span>{`${asset.typeOfProperty} ,${asset.settlement}`}</span>
      </div>
      <div className='ad-price-and-date'>
        <div className='ad-price'>
          {asset.price ? '\u20AA' + converPrice(asset.price) : 'לא צוין מחיר'}
        </div>
      </div>
    </div>
  );
}
