import React, { useContext } from 'react';
import { WindowContext } from '../../../../context/WindowContext';
import DetailsOfActionsOnAd from './detailsOfActionsOnAd/DetailsOfActionsOnAd';
import MiddleBtnSection from './middleBtnSection/MiddleBtnSection';
import PublishedAdFooter from './publishedAdFooter/PublishedAdFooter';

export default function UserPublishedAd({ asset }) {
  const { windowWidth } = useContext(WindowContext);

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
  function converTrackType(trackType) {
    switch (trackType) {
      case 'בולט במיוחד':
        return 'מודעה בולטת במיוחד';
      case 'בולט':
        return 'מודעה בולטת';
      case 'בסיסי':
        return 'מודעה בסיסית';
    }
  }
  return (
    <div className='published-ad-container'>
      <div className='published-ad-info'>
        <div className='image-container'>
          <img
            src={require(`../../../../assets/newAd/${asset.imageSrcName}`)}
            alt={asset.imageSrcName}
          />
          <div className='track-icon-container'>
            <span className='track-icon'>{converTrackType(asset.adTrack)}</span>
          </div>
        </div>
        <div className='ad-details-container'>
          <div className='ad-price'>
            {asset.price ? '\u20AA' + converPrice(asset.price) : 'ללא מחיר'}
          </div>
          <span>{`${asset.typeOfProperty} ,${asset.settlement}, ${asset.street} ${asset.addressNumber}`}</span>
          <span>{`${
            asset.numberOfRooms ? asset.numberOfRooms : '-'
          } חדרים | קומה ${asset.floor ? asset.floor : '-'} | ${
            asset.overallSquareMeters ? asset.overallSquareMeters : '-'
          } מ"ר`}</span>
          {windowWidth > 1020 && <MiddleBtnSection />}
          {windowWidth > 1020 && <DetailsOfActionsOnAd />}
        </div>
      </div>
      <PublishedAdFooter asset={asset} />
    </div>
  );
}
