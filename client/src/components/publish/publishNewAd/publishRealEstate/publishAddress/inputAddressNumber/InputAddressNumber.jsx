import React from 'react';
import LabelAndTextInput from '../../../newAdCustomInputs/labelAndTextInput/LabelAndTextInput';

export default function InputAddressNumber({ disabled, isInvalidityShown }) {
  return (
    <>
      <LabelAndTextInput
        isInvalidityShown={isInvalidityShown}
        inputType='number'
        disabled={disabled}
        name={'addressNumber'}
        label='מס בית*'
      />
      {!disabled && isInvalidityShown && (
        <span>יש לבחור מס' בית מתוך הרשימה</span>
      )}
    </>
  );
}
