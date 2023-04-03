import React, { useContext, useEffect, useState } from 'react';
import rocketShip_VIP from '../../../../../../assets/icons/rocketShip_VIP.png';
import kite from '../../../../../../assets/icons/kite.svg';
import highly_recommended from '../../../../../../assets/icons/highly_recommended.svg';
import { NewAdContext } from '../../PublishRealEstate';
import { newAdTrackAttributes } from '../../../../../../utils/newAdTrack';
import { changeInput } from '../../../../../../actions/newAdActions';
import { getUserFromCookie } from '../../../../../../cookies/cookies';
import { assetAttributes } from '../../../../../../utils/realEstate';
import { publishRealestate } from '../../../../../../api/userRequests';
import { useNavigate } from 'react-router-dom';
export default function TrackItemForm({ title }) {
  const { newAdDispatch, newAdState } = useContext(NewAdContext);
  const user = getUserFromCookie();
  let newAdValues = {};
  const navigate = useNavigate();

  const handleOnClick = (e, item) => {
    newAdDispatch(changeInput('adTrack', item.type));
    e.preventDefault();
    //   return newAsset(newAdState);
    insertValuesOfNewAd(item.type);
    console.log('newAdValues', newAdValues);
    publishRealestate(newAdValues).then(
      (publishNewAd) => {
        console.log('publishNewAd', publishNewAd);
        navigate('/');
      },
      (err) => {
        console.log('err: ', err.response);
        //   if (
        //     err.response.data.Message === 'משתמש זה לא קיים במערכת.' ||
        //     err.response.data.Message === 'סיסמה שגויה.'
        //   ) {
        //     setIsError(true);
        //   }
      }
    );
  };

  function insertValuesOfNewAd(adTrack) {
    newAdValues.numberOfParkingPlaces =
      newAdState['numberOfParkingPlaces']?.value;
    newAdValues.numberOfPorches = newAdState['numberOfPorches']?.value;
    newAdValues.settlement = newAdState['settlement']?.value;
    newAdValues.street = newAdState['street']?.value;
    newAdValues.typeOfProperty = newAdState['typeOfProperty']?.value;
    newAdValues.stateOfProperty = newAdState['stateOfProperty']?.value;
    newAdValues.addressNumber = newAdState['addressNumber']?.value;
    newAdValues.floor = newAdState['floor']?.value;
    newAdValues.floorsInBuilding = newAdState['floorsInBuilding']?.value;
    if (newAdState['isOnStilts'])
      newAdValues.isOnStilts = newAdState['isOnStilts']?.value;
    newAdValues.numberOfRooms = newAdState['numberOfRooms']?.value;
    newAdValues.props = {};
    for (const attribute of assetAttributes) {
      const prop = attribute.name;
      if (newAdState[prop]) newAdValues.props[prop] = newAdState[prop]?.value;
    }
    if (newAdState['furnitureDescription'])
      newAdValues.props.furnitureDescription =
        newAdState['furnitureDescription']?.value;
    if (newAdState['assetDescription'])
      newAdValues.props.assetDescription =
        newAdState['assetDescription']?.value;
    if (newAdState['builtSquareMeters'])
      newAdValues.builtSquareMeters = newAdState['builtSquareMeters']?.value;
    newAdValues.overallSquareMeters = newAdState['overallSquareMeters']?.value;
    if (newAdState['price']) newAdValues.price = newAdState['price']?.value;
    newAdValues.entryDate = getEntryValue();
    newAdValues.imageSrcName = newAdState['imageSrcName']?.value;
    newAdValues.nameOfContact = newAdState['nameOfContact']?.value;
    newAdValues.phoneNumberOfContact =
      newAdState['phoneNumberOfContact']?.value;
    if (newAdState['emailOfContact'])
      newAdValues.emailOfContact = newAdState['emailOfContact']?.value;
    newAdValues.adTrack = adTrack;
    newAdValues.uploadDate = new Date().toISOString().substring(0, 10);
    newAdValues.owner = user.email;
  }
  function getEntryValue() {
    const isImmediate = newAdState['isImmediate']?.value;
    const isFlexible = newAdState['isFlexible']?.value;
    if (isImmediate) {
      return 'מיידי';
    } else if (isFlexible) {
      return 'גמיש';
    } else {
      return newAdState['entryDate']?.value;
    }
  }
  return newAdTrackAttributes.map((item, index) => {
    return (
      item.type == title && (
        <div
          key={index}
          className={
            item.type == 'בולט במיוחד'
              ? 'track-item-form highly-recommended-form'
              : 'track-item-form'
          }>
          <form id='track-form'>
            <div className='image-container'>
              {item.type == 'בסיסי' ? (
                <img src={kite} />
              ) : (
                <img src={rocketShip_VIP} />
              )}
              <span className='bold'>{title}</span>
              <div className='horizontal-line'></div>
            </div>
            {item.type == 'בולט במיוחד' && (
              <img className='highly_recommended' src={highly_recommended} />
            )}
            <div className='attributes-container'>
              {item.attributes.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={
                      `${item.icon}` === 'IoClose'
                        ? 'attribute-container light-gray'
                        : 'attribute-container'
                    }>
                    {item.icon &&
                      React.createElement(item.icon, {
                        className:
                          item.type == 'close' ? 'close-icon' : 'check-icon',
                      })}
                    <span
                      className={
                        item.isBold
                          ? 'attribute-text bold'
                          : item.type == 'close'
                          ? 'attribute-text light-gray'
                          : 'attribute-text'
                      }>
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className='price-and-btn-container'>
              <div className='price-and-days-container'>
                <div className='price-container'>
                  <span>{item.price.number}</span>
                  {item.price.icon &&
                    React.createElement(item.price.icon, {
                      className: 'price-icon',
                    })}
                </div>
                <span className='priceSubTittle'>{item.priceSubTittle}</span>
              </div>
              <button
                type='submit'
                className='submit-track-btn'
                onClick={(e) => handleOnClick(e, item)}>
                {item.type == 'בולט במיוחד' ? 'המסלול המומלץ' : 'בחירה במסלול'}
              </button>
            </div>
          </form>
        </div>
      )
    );
  });
}
