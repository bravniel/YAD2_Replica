import React, { useContext } from 'react';
import { useState } from 'react';
import {
  toggleIsSectionValid,
  toggleShowSection,
} from '../../../../../actions/newAdActions';
import { hideInputIfCondition } from '../../../../../utils/hideInputIfCondition';
import NewAdStepButtons from '../../newAdStepsButtons/NewAdStepsButtons';
import NewAdStepTopRow from '../../newAdStepTopRow/NewAdStepTopRow';
import { NewAdContext } from '../PublishRealEstate';
import InputAddressNumber from './inputAddressNumber/InputAddressNumber';
import InputFloors from './inputFloors/InputFloors';
import InputGetUpdates from './inputGetUpdates/InputGetUpdates';
import InputNeighborhood from './inputNeighborhood/InputNeighborhood';
import InputRegionOfSale from './inputRegionOfSale/InputRegionOfSale';
import InputSettlement from './inputSettlement/InputSettlement';
import InputStateOfProperty from './inputStateOfProperty/InputStateOfProperty';
import InputStreet from './inputStreet/InputStreet';
import InputTypeOfProperty from './inputTypeOfProperty/InputTypeOfProperty';

export default function PublishAddress({ stepNumber, stepTitle }) {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);
  const isSectionShown = newAdState['section' + stepNumber]?.isShown;
  const [isInvalidityShown, setIsInvalidityShown] = useState(false);

  const getIsInvalid = (inputName) => {
    if (newAdState[inputName]?.isValid) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsInvalidityShown(true);

    for (const input in newAdState) {
      if (newAdState[input].isValid === false) return;
    }

    if (isSecondSectionMandatoryInputsValid()) {
      newAdDispatch(toggleShowSection(2));
      newAdDispatch(toggleShowSection(3));
      newAdDispatch(toggleIsSectionValid(2, true));
    }
  };

  const isSecondSectionMandatoryInputsValid = () => {
    if (
      !newAdState.typeOfProperty?.isValid ||
      (shouldInputStateOfPropertyShow() &&
        !newAdState.stateOfProperty?.isValid) ||
      !newAdState.settlement?.isValid ||
      !newAdState.street?.isValid ||
      !newAdState.addressNumber?.isValid ||
      (shouldInputFloorsShow() && !newAdState.floor?.isValid) ||
      (shouldInputFloorsShow() && !newAdState.floorsInBuilding?.isValid)
    ) {
      newAdDispatch(toggleIsSectionValid(2, false));
      return false;
    }
    return true;
  };

  const shouldInputStateOfPropertyShow = () => {
    return hideInputIfCondition(newAdState.typeOfProperty?.value, 'מגרשים');
  };

  const shouldInputFloorsShow = () => {
    switch (newAdState.typeOfProperty?.value) {
      case undefined:
        return true;
      case 'דירה':
        return true;
      case 'דירת גן':
        return true;
      case 'גג/פנטהאוז':
        return true;
      case 'דופלקס':
        return true;
      case 'דירת נופש':
        return true;
      case 'מרתף/פרטר':
        return true;
      case 'טריפלקס':
        return true;
      case 'יחידת דיור':
        return true;
      case 'דיור מוגן':
        return true;
      case 'בניין מגורים':
        return true;
      case 'סטודיו/לופט':
        return true;
      case 'כללי':
        return true;

      default:
        return false;
    }
  };

  return (
    <div className={isSectionShown ? 'new-ad-step' : 'new-ad-step inactive'}>
      <NewAdStepTopRow stepNumber={stepNumber} stepTitle={stepTitle} />
      {isSectionShown && (
        <div className='new-ad-form'>
          <span> סימנו עבורך את שדות החובה. שלא נפספס פרט חשוב</span>
          <form id='asset-address-form' onSubmit={handleSubmit}>
            <InputTypeOfProperty
              isInvalidityShown={
                isInvalidityShown ? getIsInvalid('typeOfProperty') : false
              }
            />

            {shouldInputStateOfPropertyShow() && (
              <InputStateOfProperty
                isInvalidityShown={
                  isInvalidityShown ? getIsInvalid('stateOfProperty') : false
                }
              />
            )}

            <InputSettlement
              isInvalidityShown={
                isInvalidityShown ? getIsInvalid('settlement') : false
              }
            />

            <InputStreet
              isInvalidityShown={
                isInvalidityShown ? getIsInvalid('street') : false
              }
              disabled={!newAdState.settlement?.isValid}
            />

            <InputAddressNumber
              isInvalidityShown={
                isInvalidityShown ? getIsInvalid('addressNumber') : false
              }
              disabled={!newAdState.street?.isValid}
            />

            {shouldInputFloorsShow() && (
              <InputFloors
                disabled={!newAdState.typeOfProperty?.value}
                isInvalidityShown={isInvalidityShown}
                getIsInvalid={getIsInvalid}
                typeOfPropertyValue={newAdState.typeOfProperty?.value}
              />
            )}

            <InputNeighborhood />

            <InputRegionOfSale />

            <InputGetUpdates />

            <NewAdStepButtons stepNumber={stepNumber} />
          </form>
        </div>
      )}
    </div>
  );
}
