import React, { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { BiShekel } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { changeInput } from '../../../../../actions/newAdActions';
import { getCityList, getStreetList } from '../../../../../api/dataGovIL';
import { NewAdContext } from '../../publishRealEstate/PublishRealEstate';
import ApiDropDownList from '../apiDropDownList/ApiDropDownList';

export default function LabelAndTextInput({
  placeholder,
  name,
  label,
  disabled,
  inputType,
  isInvalidityShown,
  type = 'text',
  setValue,
  value,
  children,
}) {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);

  const inputRef = useRef(null);
  const handleChange = (value) => {
    !setValue
      ? newAdDispatch(changeInput(name, value, inputType))
      : setValue(value);
  };
  return (
    <div className='label-and-text-input'>
      <label className={disabled ? 'disabled-input' : ''} htmlFor={name}>
        {label}
      </label>
      <div className='input-wrapper '>
        <input
          className={isInvalidityShown && !disabled ? 'invalid-input' : ''}
          disabled={disabled}
          value={
            !setValue
              ? newAdState[name]?.value || ''
              : newAdState[name]?.value || value
          }
          ref={inputRef}
          onChange={(e) => handleChange(e.target.value)}
          name={name}
          type={type}
          placeholder={placeholder}
        />
        <div className='icon-wrapper'>
          {
            (newAdState[name]?.value
            || value?.length > 0) && (
                <IoClose
                  className='delete-icon-btn'
                  onClick={() => {
                    !setValue
                      ? newAdDispatch(changeInput(name, ''))
                      : setValue('');

                    inputRef.current.value = '';
                  }}
                />
              )}
          {name == 'price' && <BiShekel className='shekel-icon' />}
        </div>
      </div>
      {children}
      {isInvalidityShown && !disabled && (
        <span className='invalid-message'>שדה חובה</span>
      )}
    </div>
  );
}
