// UserFavoritAds

import React, { useContext, useEffect, useReducer, useState } from 'react';
import { getFavoriteAds, getUserAds } from '../../../api/userRequests';
import { UserContext } from '../../../context/UserContext';
import { WindowContext } from '../../../context/WindowContext';
import AssetsList from '../../realestate/forSell/assetsList/AssetsList';
import PersonalAreaSideBar from '../personalAreaSideBar/PersonalAreaSideBar';

export default function UserFavoritAds() {
  const { windowWidth } = useContext(WindowContext);
  const [realEstates, setRealEstates] = useState([]);
  const { user, dispatchUser, userFavoriteAds, dispatchUserFavoriteAds } =
    useContext(UserContext);

  useEffect(() => {
    getData();
  }, [userFavoriteAds]);

  function getData() {
    getFavoriteAds(user.token).then((data) => {
      setRealEstates(data);
      //   setTotalPages(Math.ceil(data.numOfPages / 5));
    });
  }

  return (
    <div className='favorite-ad-page'>
      <span className='favorite-ad-title'>מודעות שאהבתי</span>
      <span className='favorite-ad-subtitle'>מודעות נדלן</span>
      {realEstates.length > 0 ? (
        <AssetsList realEstates={realEstates} />
      ) : (
        <div>אין נתונים!</div>
      )}
    </div>
  );
}
