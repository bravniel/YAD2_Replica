import React from 'react';
import { useContext } from 'react';
import { toggleInput } from '../../../../../actions/newAdActions';
import { NewAdContext } from '../../publishRealEstate/PublishRealEstate';

export default function CheckboxAndLabel({
  name,
  label,
  isInvalidityShown,
  disabled,
  onClick,
  isChecked,
}) {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);
  const [firstText, secondText] = label.split('<br>');
  return (
    <div className='checkbox-and-label-container'>
      <label
        className={
          disabled
            ? 'checkbox-and-label disabled-input'
            : isInvalidityShown
            ? 'checkbox-and-label invalid-input'
            : 'checkbox-and-label'
        }>
        <input
          onChange={
            onClick
              ? onClick
              : name
              ? () => newAdDispatch(toggleInput(name))
              : null
          }
          name={name}
          type='checkbox'
          checked={isChecked ? isChecked : newAdState[name]?.value}
          disabled={disabled}
          //   onClick={() => {
          //     setIsReadRules && setIsReadRules(!isReadRules);
          //   }}
        />
        <span
          className={disabled ? 'checkmark disabled-checkbox' : 'checkmark'}
        />
        {firstText}
        <br />
        {secondText}
      </label>
      {isInvalidityShown && (
        <span className='invalid-message'>חובה לסמן אם תרצו להמשיך</span>
      )}
    </div>
  );
}
