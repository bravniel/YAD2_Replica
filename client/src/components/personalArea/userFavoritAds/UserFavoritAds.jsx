import React, { useContext, useEffect, useState } from 'react';
import { getFavoriteAds } from '../../../api/userRequests';
import { UserContext } from '../../../context/UserContext';
import AssetsList from '../../realestate/forSell/assetsList/AssetsList';

export default function UserFavoritAds() {
  const [realEstates, setRealEstates] = useState([]);
  const { user, userFavoriteAds } = useContext(UserContext);

  useEffect(() => {
    getData();
  }, [userFavoriteAds]);

  function getData() {
    getFavoriteAds(user.token).then((data) => {
      setRealEstates(data);
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
