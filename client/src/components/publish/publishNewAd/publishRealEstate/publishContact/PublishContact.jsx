import React, { useContext, useEffect, useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import {
    toggleInput,
  toggleIsSectionValid,
  toggleShowSection,
} from '../../../../../actions/newAdActions';
import CheckboxAndLabel from '../../newAdCustomInputs/checkBoxAndLabel/CheckBoxAndLabel';
import LabelAndTextInput from '../../newAdCustomInputs/labelAndTextInput/LabelAndTextInput';
import NewAdStepButtons from '../../newAdStepsButtons/NewAdStepsButtons';
import NewAdStepTopRow from '../../newAdStepTopRow/NewAdStepTopRow';
import { NewAdContext } from '../PublishRealEstate';

export default function PublishContact({ stepNumber, stepTitle }) {
  const { newAdDispatch, newAdState } = useContext(NewAdContext);
  const isSectionShown = newAdState['section' + stepNumber]?.isShown;
  const [isInvalidityShown, setIsInvalidityShown] = useState(false);
  const getIsInvalid = (inputName) => {
    if (inputName == 'isReadRules') {
      return !newAdState[inputName]?.value;
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

    if (isSixthSectionMandatoryInputsValid()) {
      newAdDispatch(toggleShowSection(6));
      newAdDispatch(toggleShowSection(7));
      newAdDispatch(toggleIsSectionValid(6, true));
      //   return newAsset(newAdState);
    }
  };

  const isSixthSectionMandatoryInputsValid = () => {
    if (
      !newAdState.nameOfContact?.isValid ||
      !newAdState.phoneNumberOfContact?.isValid ||
      !newAdState.isReadRules?.value
    ) {
      newAdDispatch(toggleIsSectionValid(6, false));
      return false;
    }
    return true;
    };
  return (
    <div className={isSectionShown ? 'new-ad-step' : 'new-ad-step inactive'}>
      <NewAdStepTopRow stepNumber={stepNumber} stepTitle={stepTitle} />
      {isSectionShown && (
        <div className='new-ad-form'>
          <form id='contact-details-form' onSubmit={handleSubmit}>
            <span> רגע לפני שמפרסמים את המודעה, נבדוק שפרטי הקשר נכונים</span>
            <LabelAndTextInput
              name='nameOfContact'
              label={'שם איש קשר*'}
              isInvalidityShown={
                isInvalidityShown ? getIsInvalid('nameOfContact') : false
              }
            />
            <LabelAndTextInput
              inputType={'number'}
              name='phoneNumberOfContact'
              label={'טלפון ראשי*'}
              isInvalidityShown={
                isInvalidityShown ? getIsInvalid('phoneNumberOfContact') : false
              }
            />
            <div className='horizontal-line'></div>
            <div className='add-contact'>
              <MdAddCircleOutline />
              <span>הוספת איש קשר נוסף</span>
            </div>
            <CheckboxAndLabel
              name={'virtualContactPhoneNumber'}
              label={
                'אני רוצה שיופיע מספר וירטואלי במודעה שלי<br>המספר הוירטואלי יינתן בחינם בכפוף למידיניות השירות ולמעט במקרים המפורטים כאן'
              }
            />
            <CheckboxAndLabel
              disabled={!newAdState['virtualContactPhoneNumber']?.value}
              label={'אני רוצה לקבל שיחות מגולשי האתר גם בסופשים'}
            />
            <LabelAndTextInput name='emailOfContact' label={'דוא"ל'} />
            <CheckboxAndLabel
              //   setIsReadRules={setIsReadRules}
              //   isReadRules={isReadRules}
              label={'קראתי ואישרתי את התקנון*'}
              name='isReadRules'
              //   isInvalidityShown={!isReadRules}
              isInvalidityShown={
                isInvalidityShown ? getIsInvalid('isReadRules') : false
              }
            />
            <CheckboxAndLabel
              label={
                'אשמח לקבל עדכונים, הצעות או טיפים לשיפור המודעה שלי לפרטי החשבון או לפרטי המודעה'
              }
            />
            <NewAdStepButtons
              stepNumber={stepNumber}
              isBackButton={false}
              nextStepText={'המשך לבחירת מסלול'}
            />
          </form>
        </div>
      )}
    </div>
  );
}