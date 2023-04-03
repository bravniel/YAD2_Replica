import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { inputProperties } from '../../utils/utils';
import FormButton from '../general/signPage/signForm/formButton/FormButton';
import FormInput from '../general/signPage/signForm/formInput/FormInput';
import FormSignOptions from '../general/signPage/signForm/formSignOptions/FormSignOptions';

export default function FirstStep({
  formInputs,
  formState,
  dispatchForm,
  onClick,
  isEmailExists,
}) {
  const navigate = useNavigate();
  const isPasswordRepeatValid = (value) => {
    return value.toString() === formState.values.password.toString();
  };
  return (
    <>
      {formInputs.map((key, index) => (
        <FormInput
          key={index}
          data={{
            type: inputProperties[key].type,
            placeholder: inputProperties[key].placeholder,
            label: inputProperties[key].label,
            name: key,
            validationFunc:
              key != 'repeatPassword'
                ? inputProperties[key].validationFunc
                : isPasswordRepeatValid,
            invalidValueMessage: inputProperties[key].invalidValueMessage,
            noValueMessage: inputProperties[key].noValueMessage,
            dispatchForm: dispatchForm,
            formState: formState,
            isEmailExists: isEmailExists,
          }}
        />
      ))}
      <FormButton text={'המשך'} onClick={onClick} />
      <FormSignOptions />
      <div className='sign-up-link'>
        כבר יש לך חשבון?
        <span onClick={() => navigate('/login')}>להתחברות</span>
      </div>
    </>
  );
}
