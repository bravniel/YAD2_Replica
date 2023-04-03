import React, { useContext, useState } from 'react';
import { changeInput } from '../../../../../../actions/newAdActions';
import { NewAdContext } from '../../PublishRealEstate';
export default function NoneToThreePicker({ name, label }) {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);
  const [activeButton, setActiveButton] = useState({ className: null });
  const onClickHandle = (e) => {
    if (e.target.className === 'picker-wrapper') return;
    activeButton.className = '';
    setActiveButton(e.target);
    e.target.className = 'active';
    newAdDispatch(changeInput(name, e.target.innerHTML));
  };
  return (
    <div className='none-to-three-picker'>
      <label>{label}</label>
      <div onClick={onClickHandle} className='picker-wrapper'>
        <div className={newAdState[name].value === 'ללא' ? 'active' : ''}>
          ללא
        </div>
        <div className={newAdState[name].value === '1' ? 'active' : ''}>1</div>
        <div className={newAdState[name].value === '2' ? 'active' : ''}>2</div>
        <div className={newAdState[name].value === '3' ? 'active' : ''}>3</div>
      </div>
    </div>
  );
}
