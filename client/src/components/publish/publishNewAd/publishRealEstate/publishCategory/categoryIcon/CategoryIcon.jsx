import React, { useContext } from 'react';
import { toggleIsSectionValid, toggleShowSection } from '../../../../../../actions/newAdActions';
import { NewAdContext } from '../../PublishRealEstate';

const CategoryIcon = ({ icon, title, stepNumber }) => {
    const { newAdState, newAdDispatch } = useContext(NewAdContext);
  const categoryChoiceHandler = () => {
    if (title === 'מכירה') {
        newAdDispatch(toggleShowSection(stepNumber));
        newAdDispatch(toggleShowSection(stepNumber + 1));
        newAdDispatch(toggleIsSectionValid(stepNumber, true));
    } else alert('Not Functional.');
  };

  return (
    <div className='category-item' onClick={categoryChoiceHandler}>
      <div>{icon}</div>
      <span>{title}</span>
    </div>
  );
};

export default CategoryIcon;
