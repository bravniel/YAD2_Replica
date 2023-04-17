// UserPublishedAds

import React, { useContext, useEffect, useState } from 'react';
import { getUserAds } from '../../../api/userRequests';
import { UserContext } from '../../../context/UserContext';
import { WindowContext } from '../../../context/WindowContext';
import PersonalAreaSideBar from '../personalAreaSideBar/PersonalAreaSideBar';
import UserPublishedAd from './userPublishedAd/UserPublishedAd';
import UserPublishedAdsFilter from './userPublishedAdsFilter/UserPublishedAdsFilter';

export default function UserPublishedAds() {
  const { windowWidth } = useContext(WindowContext);
  const [realEstates, setRealEstates] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    getUserAds(user.token).then((data) => {
      setRealEstates(data);
    });
  }

  return (
    <div className='personal-area'>
      {windowWidth > 1020 && <PersonalAreaSideBar />}
      <div className='personal-area-body'>
        <span className='edit-section-title'>המודעות שלי</span>
        <UserPublishedAdsFilter />
        {realEstates.length > 0 ? (
          realEstates.map((asset) => (
            <UserPublishedAd key={asset.propertyId} asset={asset} />
          ))
        ) : (
          <div>אין נתונים!</div>
        )}
      </div>
    </div>
  );
}
