import React, { useState } from 'react';

const EditInput = ({ data }) => {
  const {
    type,
    placeholder,
    label,
    name,
    validationFunc,
    noValueMessage,
    dispatchForm,
    formState,
  } = data;
  const [isNoValue, setIsNoValue] = useState(true);
  const onChangeSetInput = (e) => {
    const inputValue = e.target.value;
    if (!validationFunc(inputValue.trim())) {
      inputValue.trim().length == 0 ? setIsNoValue(true) : setIsNoValue(false);
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
    <div className='edit-input'>
      <span>{label}</span>
      <input
        className={formState.isValid[name] ? '' : 'edit-invalid'}
        onChange={onChangeSetInput}
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        value={formState.values[name]}
      />
      {!formState.isValid[name] && (
        <div className='invalid-message'>{noValueMessage}</div>
      )}
    </div>
  );
};

export default EditInput;
