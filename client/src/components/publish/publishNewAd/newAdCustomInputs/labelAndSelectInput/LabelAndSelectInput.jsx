import React, { useContext } from 'react';
import { changeInput } from '../../../../../actions/newAdActions';
import { NewAdContext } from '../../publishRealEstate/PublishRealEstate';


export default function LabelAndSelectInput({
  id,
  label,
  name,
  children,
  defaultValue,
  isInvalidityShown,
}) {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);

  const onChangeHandle = (e) => {
    newAdDispatch(changeInput(name, e.target.value));
  };

  return (
    <div className='label-and-select-input'>
      <label htmlFor={id}>{label}</label>
      <select
        className={isInvalidityShown ? 'invalid-select' : ''}
        value={newAdState[name]?.value}
        onChange={onChangeHandle}
        name={name}
        id={id}
        defaultValue={defaultValue}>
        {children}
      </select>
      {isInvalidityShown && <span className='invalid-message'>שדה חובה</span>}
    </div>
  );
}
