import React, { useContext, useEffect, useState } from 'react';
import { changeInput, toggleIsSectionValid, toggleShowSection } from '../../../../../actions/newAdActions';
import { hideInputIfCondition } from '../../../../../utils/hideInputIfCondition';
import LabelAndSelectInput from '../../newAdCustomInputs/labelAndSelectInput/LabelAndSelectInput';
import NewAdStepButtons from '../../newAdStepsButtons/NewAdStepsButtons';
import NewAdStepTopRow from '../../newAdStepTopRow/NewAdStepTopRow';
import { NewAdContext } from '../PublishRealEstate';
import AssetDescription from './assetDescription/AssetDescription';
import NoneToThreePicker from './noneToThreePicker/NoneToThreePicker';
import PickAttributesBox from './pickAttributesBox/PickAttributesBox';

export default function PublishProps({ stepNumber, stepTitle }) {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);
const isSectionShown = newAdState['section' + stepNumber]?.isShown;
  const shouldInputShow = () =>
    hideInputIfCondition(newAdState.typeOfProperty?.value, 'מגרשים');

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

    if (isThirdSectionMandatoryInputsValid()) {
      newAdDispatch(toggleShowSection(3));
      newAdDispatch(toggleShowSection(4));
      newAdDispatch(toggleIsSectionValid(3, true));
    }
  };

  const isThirdSectionMandatoryInputsValid = () => {
    if (
      newAdState.typeOfProperty?.value !== 'מגרשים' &&
      !newAdState.numberOfRooms?.isValid
    ) {
      newAdDispatch(toggleIsSectionValid(3, false));
      return false;
    }
    return true;
  };

  const showFormData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    };
    useEffect(() => {
      newAdDispatch(changeInput('numberOfParkingPlaces', 'ללא'));
      newAdDispatch(changeInput('numberOfPorches', 'ללא'));
    }, []);

  return (
    <div className={isSectionShown ? 'new-ad-step' : 'new-ad-step inactive'}>
      <NewAdStepTopRow stepNumber={stepNumber} stepTitle={stepTitle} />
      {isSectionShown && (
        <div className='new-ad-form'>
          <form id='about-asset-form' onSubmit={handleSubmit}>
            {shouldInputShow() && (
              <>
                <LabelAndSelectInput
                  defaultValue='בחירת מספר חדרים'
                  name='numberOfRooms'
                  label='מספר חדרים*'
                  isInvalidityShown={
                    isInvalidityShown ? getIsInvalid('numberOfRooms') : false
                  }>
                  <option
                    value='בחירת מספר חדרים'
                    disabled={true}
                    hidden={true}>
                    בחירת מספר חדרים
                  </option>
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </LabelAndSelectInput>
                <NoneToThreePicker
                  name={'numberOfParkingPlaces'}
                  label='חניה'
                />
                <NoneToThreePicker name={'numberOfPorches'} label='מרפסת' />
              </>
            )}
            <PickAttributesBox shouldInputShow={shouldInputShow} />

            <AssetDescription />

            <NewAdStepButtons stepNumber={stepNumber} />
          </form>
        </div>
      )}
    </div>
  );
}
