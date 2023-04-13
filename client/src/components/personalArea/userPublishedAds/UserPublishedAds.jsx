// UserPublishedAds

import React, { useContext, useEffect, useReducer, useState } from 'react';
import { getUserAds } from '../../../api/userRequests';
import { UserContext } from '../../../context/UserContext';
import { WindowContext } from '../../../context/WindowContext';
import AssetsList from '../../realestate/forSell/assetsList/AssetsList';
import PersonalAreaSideBar from '../personalAreaSideBar/PersonalAreaSideBar';

export default function UserPublishedAds() {
  const { windowWidth } = useContext(WindowContext);
  const [realEstates, setRealEstates] = useState([]);
  const { user, dispatchUser } = useContext(UserContext);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    getUserAds(user.token).then((data) => {
      setRealEstates(data);
      //   setTotalPages(Math.ceil(data.numOfPages / 5));
    });
  }

  return (
    <div className='personal-area'>
      <PersonalAreaSideBar />
      <div className='personal-area-body'>
        <span className='edit-section-title'>המודעות שלי</span>
        <div className='personal-area-form'>
          {realEstates.length > 0 ? (
            <AssetsList realEstates={realEstates} />
          ) : (
            <div>אין נתונים!</div>
          )}
        </div>
      </div>
    </div>
  );
}
