import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getFavoriteAds } from '../../../../../../api/userRequests';
import { UserContext } from '../../../../../../context/UserContext';
import FavoriteAdDropdownItem from './favoriteAdDropdownItem/FavoriteAdDropdownItem';

export default function FavoriteAdsDropdown() {
  const { user, dispatchUser, userFavoriteAds, dispatchUserFavoriteAds } =
    useContext(UserContext);
  const [realEstates, setRealEstates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [userFavoriteAds]);

  function getData() {
    if (user)
      getFavoriteAds(user.token).then((data) => {
        setRealEstates(data);
      });
  }
  return user ? (
    <div className='favorite-ads-dropdown'>
      {realEstates.length > 0 &&
        realEstates.map((asset) => (
          <FavoriteAdDropdownItem key={asset.propertyId} asset={asset} />
        ))}
      {realEstates.length > 0 && (
        <div
          className='all-favorite-ads-btn'
          onClick={() => navigate('/personal/favorites')}>
          לכל המודעות שסימנתי
        </div>
      )}
      {realEstates.length === 0 && (
        <div className='favorite-no-ads-dropdown-container'>
          <span className='no-ads-title'>מודעות שאהבתי</span>
          <span className='no-ads-text'>
            הרשימה שלך עדיין ריקה, אפשר להוסיף מודעות לרשימה בלחיצה על הסימן
            בפינה הימנית של כל מוגעה
          </span>
        </div>
      )}
    </div>
  ) : (
    <div className='favorite-ads-dropdown'>
      {userFavoriteAds.length === 0 ? (
        <div className='favorite-no-ads-dropdown-container'>
          <span className='no-ads-title'>מודעות שאהבתי</span>
          <span className='no-ads-text'>
            אין לך עדיין מודעות שאהבת, כדי לשמור מודעות יש להתחבר לחשבון שלך
          </span>
        </div>
      ) : (
        <div className='favorite-no-ads-dropdown-container'>
          <span className='no-ads-title'>מודעות שאהבתי</span>
          <span className='no-ads-text'>
            יש לך ( {userFavoriteAds.length} ) מודעות שאהבת. כדי לראות את
            המודעות שאהבת, ולשמור נוספות, יש להתחבר לחשבון שלך
          </span>
        </div>
      )}
    </div>
  );
}