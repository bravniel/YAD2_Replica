import React, { useContext } from 'react';
import { toggleInput } from '../../../../../../../actions/newAdActions';
import { NewAdContext } from '../../../PublishRealEstate';

export default function ToggleAttributeButton({
  icon,
  text,
  children,
  name,
}) {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);

  const handleClick = (e) => {
    e.target.className.includes('active')
      ? (e.target.className = 'toggle-attribute-button')
      : (e.target.className = 'toggle-attribute-button active');

    newAdDispatch(toggleInput(name));
  };

  return (
    <div
      className={'toggle-attribute-button ' + (newAdState[name] && 'active')}
      onClick={handleClick}>
      {icon && React.createElement(icon, { className: 'attribute-icon' })}
      {children}
      {text}
    </div>
  );
}
