import React, { useContext, useEffect, useState } from 'react';
import { toggleInput } from '../../../../../actions/newAdActions';
import CheckboxAndLabel from '../../newAdCustomInputs/checkBoxAndLabel/CheckBoxAndLabel';
import NewAdStepTopRow from '../../newAdStepTopRow/NewAdStepTopRow';
import { NewAdContext } from '../PublishRealEstate';
import bit from '../../../../../assets/icons/bit.png';
import rocketShip_VIP from '../../../../../assets/icons/rocketShip_VIP.png';
import TrackItemForm from './trackItemForm/TrackItemForm';
import { getUserFromCookie } from '../../../../../cookies/cookies';
export default function PublishTrack({ stepNumber, stepTitle }) {
  const { newAdDispatch, newAdState } = useContext(NewAdContext);
  const isSectionShown = newAdState['section' + stepNumber]?.isShown;
  const [isChecked, setIsChecked] = useState(true);
  const user = getUserFromCookie();
  let newAdValues = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    // insertValuesOfNewAd();
    // console.log('newAdValues', newAdValues);
    //   return newAsset(newAdState);
    // const newAdValues = {
    //   numberOfParkingPlaces: newAdState[numberOfParkingPlaces].value,
    //   numberOfPorches: newAdState[numberOfPorches].value,
    //   settlement: newAdState[settlement].value,
    //   street: newAdState[street].value,
    //   typeOfProperty: newAdState[typeOfProperty].value,
    //   stateOfProperty: newAdState[stateOfProperty].value,
    //   addressNumber: newAdState[addressNumber].value,
    //   floor: newAdState[floor].value,
    //   floorsInBuilding: newAdState[floorsInBuilding].value,
    //   isOnStilts: newAdState[isOnStilts].value,
    //   numberOfRooms: newAdState[numberOfRooms].value,
    //   props: {
    //     newAdState[hasAC] ? hasAC: newAdState[hasAC].value : null,
    //     hasMamad: newAdState[hasMamad].value,
    //     hasWarehouse: newAdState[hasWarehouse].value,
    //     hasFurniture: newAdState[hasFurniture].value,
    //     numberOfParkingPlaces: newAdState[numberOfParkingPlaces].value,
    //     numberOfParkingPlaces: newAdState[numberOfParkingPlaces].value,
    //     numberOfParkingPlaces: newAdState[numberOfParkingPlaces].value,
    //     numberOfParkingPlaces: newAdState[numberOfParkingPlaces].value,
    //     numberOfParkingPlaces: newAdState[numberOfParkingPlaces].value,
    //     numberOfParkingPlaces: newAdState[numberOfParkingPlaces].value,
    //     numberOfParkingPlaces: newAdState[numberOfParkingPlaces].value,
    //     furnitureDescription: newAdState[furnitureDescription].value,
    //     assetDescription: newAdState[assetDescription].value,
    //   },
    //   builtSquareMeters: newAdState[builtSquareMeters].value,
    //   overallSquareMeters: newAdState[overallSquareMeters].value,
    //   price: newAdState[price].value,
    //   entryDate: getEntryValue(),
    //   imageSrcName: newAdState[imageSrcName].value,
    //   nameOfContact: newAdState[nameOfContact].value,
    //   phoneNumberOfContact: newAdState[phoneNumberOfContact].value,
    //   emailOfContact: newAdState[emailOfContact].value,
    //   adTrack: newAdState[adTrack].value,
    //   uploadDate: new Date().toISOString().substring(0, 10),
    //   owner: user.email[0],
    // };
  };
  function insertValuesOfNewAd() {
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
    newAdValues.isOnStilts = newAdState['isOnStilts']?.value;
    newAdValues.numberOfRooms = newAdState['numberOfRooms']?.value;
    //   props: {
    if (newAdState['hasAC']) newAdValues.props.hasAC = newAdState['hasAC']?.value;
    if (newAdState['hasMamad'])
      newAdValues.props.hasMamad = newAdState['hasMamad']?.value;

    if (newAdState['hasWarehouse'])
      newAdValues.props.hasWarehouse = newAdState['hasWarehouse']?.value;

    if (newAdState['hasFurniture'])
      newAdValues.props.hasFurniture = newAdState['hasFurniture']?.value;

    if (newAdState['hasDisabilityAccess'])
      newAdValues.props.hasDisabilityAccess =
        newAdState['hasDisabilityAccess']?.value;

    if (newAdState['hasElevator'])
      newAdValues.props.hasElevator = newAdState['hasElevator']?.value;

    if (newAdState['hasTadiran'])
      newAdValues.props.hasTadiran = newAdState['hasTadiran']?.value;

    if (newAdState['isRenovated'])
      newAdValues.props.isRenovated = newAdState['isRenovated']?.value;

    if (newAdState['hasKosherKitchen'])
      newAdValues.props.hasKosherKitchen = newAdState['hasKosherKitchen']?.value;
    if (newAdState['hasSunHeatedWaterTank'])
      newAdValues.props.hasSunHeatedWaterTank =
        newAdState['hasSunHeatedWaterTank']?.value;

    if (newAdState['hasBars'])
      newAdValues.props.hasBars = newAdState['hasBars']?.value;

    if (newAdState['furnitureDescription'])
      newAdValues.props.furnitureDescription =
        newAdState['furnitureDescription']?.value;

    if (newAdState['assetDescription'])
      newAdValues.props.assetDescription = newAdState['assetDescription']?.value;

    //   },
    newAdValues.builtSquareMeters = newAdState['builtSquareMeters']?.value;
    newAdValues.overallSquareMeters = newAdState['overallSquareMeters']?.value;
    newAdValues.price = newAdState['price']?.value;
    newAdValues.entryDate = getEntryValue();
    newAdValues.imageSrcName = newAdState['imageSrcName']?.value;
    newAdValues.nameOfContact = newAdState['nameOfContact']?.value;
    newAdValues.phoneNumberOfContact = newAdState['phoneNumberOfContact']?.value;
    newAdValues.emailOfContact = newAdState['emailOfContact']?.value;
    newAdValues.adTrack = newAdState['adTrack']?.value;
    newAdValues.uploadDate = new Date().toISOString().substring(0, 10);
    newAdValues.owner = user.email[0];
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
  return (
    <div className={isSectionShown ? 'new-ad-step' : 'new-ad-step inactive'}>
      <NewAdStepTopRow stepNumber={stepNumber} stepTitle={stepTitle} />
      {isSectionShown && (
        <div className='new-ad-form'>
          <form id='track-form' onSubmit={handleSubmit}>
            <span className='bold'>
              זהו, אנחנו בסוף. לנו נשאר לשמור את המודעה שלך, לך נשאר לבחור את
              מסלול הפרסום.
            </span>
            <div className='span-container'>
              <span>אגב, רצינו לספר לך שיש באתר עוד</span>
              <div className='number-of-ads-container'>???</div>
              <span>
                מודעות דומות לשלך באזור {newAdState['settlement']?.value}{' '}
                והסביבה
              </span>
            </div>
            <div className='span-container'>
              <span>המלצה שלנו?</span>
              <span className='yellow-mark'>לשדרג</span>
              <img className='rocket-ship-img' src={rocketShip_VIP} />
              <span>את המודעה, להופיע לפני כולם ולהתקדם להסכם תיק תק</span>
            </div>
            <div className='horizontal-line'></div>
            <span className='bold'>
              באיזה מסלול לפרסם את המודעה? זה הרגע לבלוט מעל כולם
            </span>
            <div className='span-container'>
              <span className='blue'>חדש! משדרגים בקליק עם</span>
              <img className='bit-img' src={bit} />
            </div>
            <div className='track-options-container'>
              <TrackItemForm title={'בסיסי'} />
              <TrackItemForm title={'בולט במיוחד'} />
              <TrackItemForm title={'בולט'} />
            </div>
            <CheckboxAndLabel
              isChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              label={
                'אני מאשר קבלת דיוור פרסומי הקשור למודעה שפרסמתי באתר יד 2 (להסרה - יש להוריד את הסימון בתיבה)'
              }
            />
          </form>
        </div>
      )}
    </div>
  );
}
