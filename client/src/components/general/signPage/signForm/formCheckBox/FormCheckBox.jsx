import React, { useEffect, useState } from 'react';

export default function FormCheckBox({
  id,
  text,
  invalidValueMessage,
  dispatchForm,
    formState,
  required
}) {
    const [checked, setChecked] = useState(false); 

    const onChangeSetCheckbox = (e) => {
        const isChecked = (e.target.checked);
        dispatchForm({
          type: 'SET',
          payload: { type: id, value: isChecked, isValidInput: isChecked },
        });
    //   if (!isChecked) {
    //     dispatchForm({
    //       type: 'SET',
    //       payload: { type: id, value: false, isValidInput: false },
    //     });
    //   } else {
    //     dispatchForm({
    //       type: 'SET',
    //       payload: { type: id, value: true, isValidInput: true },
    //     });
    //     }
    //     setChecked(isChecked);
    };
 
  return (
    <div className='form-check-box-container'>
      <label className='form-check-box'>
        <input
          type='checkbox'
          checked={formState.values[id]}
          name={id}
          onChange={onChangeSetCheckbox}
        />
        <span
          className={
            !required
              ? 'checkmark'
              : formState.isValid[id]
              ? 'checkmark'
              : 'checkmark checkmark-invalid'
          }
        />
        <span>{text}</span>
      </label>
      {!formState.isValid[id] && (
        <div className='invalid-message'>{invalidValueMessage}</div>
      )}
    </div>
  );
}
