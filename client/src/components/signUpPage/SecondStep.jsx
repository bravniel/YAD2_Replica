import React from 'react';
import { inputProperties } from '../../utils/utils';
import FormButton from '../general/signPage/signForm/formButton/FormButton';
import FormCheckBox from '../general/signPage/signForm/formCheckBox/FormCheckBox';
import FormInput from '../general/signPage/signForm/formInput/FormInput';

export default function SecondStep({
  formInputs,
  formState,
  dispatchForm,
  onClick,
}) {
  const isPasswordRepeatValid = (value) => {
    return value.toString() === formState.values.password.toString();
  };
  return (
    <>
      {formInputs.map((key, index) => {
        return inputProperties[key].type != 'checkbox' ? (
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
            }}
          />
        ) : (
          <FormCheckBox
            key={index}
            id={key}
            text={inputProperties[key].label}
            invalidValueMessage={inputProperties[key].invalidValueMessage}
            dispatchForm={dispatchForm}
            formState={formState}
            required={inputProperties[key].required}
          />
        );
      })}
      <FormButton text={'סיום הרשמה'} onClick={onClick} />
    </>
  );
}
