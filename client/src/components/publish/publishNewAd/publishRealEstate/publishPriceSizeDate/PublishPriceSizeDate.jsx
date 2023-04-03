import React, { useContext, useEffect, useState } from 'react';
import {
  changeInput,
  toggleInput,
  toggleIsSectionValid,
  toggleShowSection,
} from '../../../../../actions/newAdActions';
import CheckboxAndLabel from '../../newAdCustomInputs/checkBoxAndLabel/CheckBoxAndLabel';
import LabelAndTextInput from '../../newAdCustomInputs/labelAndTextInput/LabelAndTextInput';
import NewAdStepButtons from '../../newAdStepsButtons/NewAdStepsButtons';
import NewAdStepTopRow from '../../newAdStepTopRow/NewAdStepTopRow';
import { NewAdContext } from '../PublishRealEstate';
export default function PublishPriceSizeDate({ stepNumber, stepTitle }) {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);
  const isSectionShown = newAdState['section' + stepNumber]?.isShown;
  const [isInvalidityShown, setIsInvalidityShown] = useState(false);

  const getIsInvalid = (inputName) => {
    if (inputName == 'price') {
      if (newAdState['price']) {
        return !newAdState['price'].isValid;
      } else {
        return false;
      }
    } else {
      if (newAdState[inputName]?.isValid) return false;
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsInvalidityShown(true);

    for (const input in newAdState) {
      if (newAdState[input].isValid === false) return;
    }

    if (isFourthSectionMandatoryInputsValid()) {
      newAdDispatch(toggleShowSection(4));
      newAdDispatch(toggleShowSection(5));
      newAdDispatch(toggleIsSectionValid(4, true));
    }
  };
  const isFourthSectionMandatoryInputsValid = () => {
    if (!newAdState.overallSquareMeters?.isValid) {
      newAdDispatch(toggleIsSectionValid(4, false));
      return false;
    }
    return true;
  };

  // useEffect(() => {
  //   newAdDispatch(toggleInput('isImmediate'));
  // }, [newAdState['isImmediate'], newAdState['isFlexible']]);

  return (
    <div className={isSectionShown ? 'new-ad-step' : 'new-ad-step inactive'}>
      <NewAdStepTopRow stepNumber={stepNumber} stepTitle={stepTitle} />
      {isSectionShown && (
        <div className='new-ad-form'>
          <form id='payments-and-more-form' onSubmit={handleSubmit}>
            <LabelAndTextInput
              name={'builtSquareMeters'}
              label='מ"ר בנוי'
              placeholder='כמה מ"ר יש בנכס'
            />

            <LabelAndTextInput
              name={'overallSquareMeters'}
              label='גודל במ"ר סך הכל*'
              inputType='number'
              isInvalidityShown={
                isInvalidityShown ? getIsInvalid('overallSquareMeters') : false
              }
            />

            <LabelAndTextInput
              name={'price'}
              label='מחיר'
              placeholder='סכום מינימלי 100,000'
              inputType='price'
              isInvalidityShown={
                isInvalidityShown ? getIsInvalid('price') : false
              }
            />

            <div className='date-container'>
              <LabelAndTextInput
                type='date'
                name={'entryDate'}
                label='תאריך כניסה*'
                inputType='date'
                isInvalidityShown={
                  isInvalidityShown ? getIsInvalid('entryDate') : false
                }
                disabled={
                  newAdState['isFlexible']?.value ||
                  newAdState['isImmediate']?.value
                }
              />
              <div className='date-container-check-box'>
                <CheckboxAndLabel
                  name='isImmediate'
                  label='מיידי'
                  onClick={() => {
                    newAdDispatch(toggleInput('isImmediate'));
                    if (newAdState['isFlexible']?.value == true)
                      newAdDispatch(toggleInput('isFlexible'));
                  }}
                />
                <CheckboxAndLabel
                  name='isFlexible'
                  label='גמיש'
                  onClick={() => {
                    newAdDispatch(toggleInput('isFlexible'));
                    if (newAdState['isImmediate']?.value == true)
                      newAdDispatch(toggleInput('isImmediate'));
                  }}
                />
              </div>
            </div>

            <NewAdStepButtons stepNumber={stepNumber} />
          </form>
        </div>
      )}
    </div>
  );
}
