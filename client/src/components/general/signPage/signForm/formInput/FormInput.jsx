import React, { useEffect, useRef, useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';

const FormInput = ({ data }) => {
  const {
    type,
    placeholder,
    label,
    name,
    validationFunc,
    invalidValueMessage,
    noValueMessage,
    dispatchForm,
    formState,
    isEmailExists,
  } = data;
  const [isNoValue, setIsNoValue] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showClear, setShowClear] = useState(false);
  console.log('inputdata:', name);
  const onClearClickHandler = () => {
    document.getElementById(name).value = '';
    dispatchForm({
      type: 'SET',
      payload: { type: name, value: '', isValidInput: true },
    });
    setShowClear(false);
  };

  const onChangeSetInput = (e) => {
    const inputValue = e.target.value;
    if (!validationFunc(inputValue.trim())) {
      inputValue.trim().length == 0 ? setIsNoValue(true) : setIsNoValue(false);
      inputValue.length == 0 ? setShowClear(false) : setShowClear(true);
      dispatchForm({
        type: 'SET',
        payload: { type: name, value: inputValue, isValidInput: false },
      });
    } else {
      dispatchForm({
        type: 'SET',
        payload: { type: name, value: inputValue.trim(), isValidInput: true },
      });
    }
  };

  return (
    <div className='form-input'>
      <span>{label}</span>
      <input
        className={formState.isValid[name] ? '' : 'input-invalid'}
        onChange={onChangeSetInput}
        type={!showPassword ? type : 'text'}
        placeholder={placeholder}
        name={name}
        id={name}
        value={formState.values[name]}
      />
      {name == 'password' || name == 'repeatPassword' ? (
        !showPassword ? (
          <BsFillEyeFill
            className='password-eye-icon'
            onClick={() => setShowPassword(true)}
          />
        ) : (
          <BsFillEyeSlashFill
            className='password-eye-icon'
            onClick={() => setShowPassword(false)}
          />
        )
      ) : (
        showClear && (
          <VscChromeClose
            className='input-clear-icon'
            onClick={onClearClickHandler}
          />
        )
      )}
      {!formState.isValid[name] && !isEmailExists && (
        <div className='invalid-message'>
          {!isNoValue ? invalidValueMessage : noValueMessage}
        </div>
      )}
      {isEmailExists && !formState.isValid[name] && (
        <div className='invalid-message'>
          מישהו הקדים אותך, האימייל הזה כבר קיים
        </div>
      )}
    </div>
  );
};

export default FormInput;
