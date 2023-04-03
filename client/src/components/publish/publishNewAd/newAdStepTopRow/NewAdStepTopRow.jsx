import React, { useContext } from 'react';
import { toggleShowSection } from '../../../../actions/newAdActions';
import { NewAdContext } from '../publishRealEstate/PublishRealEstate';
import { ImCheckmark } from 'react-icons/im';
import { GrEdit } from 'react-icons/gr';
import { BiEditAlt, BiPencil } from 'react-icons/bi';


export default function NewAdStepTopRow({ stepNumber, stepTitle }) {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);
  const isSectionValid = newAdState['section' + stepNumber]?.isSectionValid;
  const isSectionShown = newAdState['section' + stepNumber]?.isShown;

  const clickHandler = () => {
    if (isSectionValid && !isSectionShown)
      newAdDispatch(toggleShowSection(stepNumber));
  };

  return (
    <div
      className={
        'new-ad-step-top-row' + (isSectionValid ? ' cursor-pointer' : '')
      }
      onClick={clickHandler}>
      {isSectionValid && !isSectionShown ? (
        <div className='step-checkmark'>
          <ImCheckmark />
          <div className='step-edit'>
            <BiPencil />
          </div>
        </div>
      ) : (
        <div className='step-number'>{stepNumber}</div>
      )}
      <div className='step-title'>{stepTitle}</div>
    </div>
  );
}
