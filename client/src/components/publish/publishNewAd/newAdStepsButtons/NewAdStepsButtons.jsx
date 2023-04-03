import React, { useContext } from 'react';
import { toggleShowSection } from '../../../../actions/newAdActions';
import { NewAdContext } from '../publishRealEstate/PublishRealEstate';

export default function NewAdStepButtons({
  stepNumber,
  isBackButton = true,
  nextStepText,
}) {
  const { newAdDispatch } = useContext(NewAdContext);
  return (
    <div className='new-ad-step-buttons'>
      {isBackButton && (
        <button
          type='button'
          className='step-button'
          onClick={() => {
            newAdDispatch(toggleShowSection(stepNumber));
            newAdDispatch(toggleShowSection(stepNumber - 1));
          }}>
          חזרה
        </button>
      )}
      <button className='step-button orange-button'>
        {nextStepText ? nextStepText : 'להמשיך לשלב הבא'}
      </button>
    </div>
  );
}
