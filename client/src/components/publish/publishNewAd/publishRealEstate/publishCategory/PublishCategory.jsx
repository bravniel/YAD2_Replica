import React, { useContext, useReducer, useState } from 'react';
import { BsHouseDoor } from 'react-icons/bs'; // House
import { GiHouseKeys } from 'react-icons/gi'; // Keys
import { BiBuildings, BiShekel } from 'react-icons/bi'; // Towers , Shekel

import NewAdStepTopRow from '../../newAdStepTopRow/NewAdStepTopRow';
import { NewAdContext } from '../PublishRealEstate';
import CategoryIcon from './categoryIcon/CategoryIcon';

const PublishCategory = ({ stepNumber, stepTitle }) => {
    const { newAdState, newAdDispatch } = useContext(NewAdContext);
      const isSectionShown = newAdState['section' + stepNumber]?.isShown;

  const inActive = 'inactive-publish-realestate-section-card';
  const categoryIcons = [
    {
      icon: <BsHouseDoor className='category-icon' />,
      title: 'מכירה',
    },
    {
      icon: (
        <span>
          <BsHouseDoor className='category-icon' />
          <BiShekel className='shekels' />
        </span>
      ),
      title: 'השכרה',
    },
    {
      icon: <GiHouseKeys className='category-icon' />,
      title: 'שותפים',
    },
    {
      icon: <BiBuildings className='category-icon' />,
      title: 'מסחרי',
    },
  ];

  return (
    <div
      //   className={
      //     'publish-realestate-section-card ' +
      //     (props.formStage.one.active ? '' : inActive)
      //   }
      className={isSectionShown ? 'new-ad-step' : 'new-ad-step inactive'}>
      <NewAdStepTopRow stepNumber={stepNumber} stepTitle={stepTitle} />
      {isSectionShown && (
        <div className='category-icons-container'>
          {categoryIcons.map((item, index) => {
            return (
              <CategoryIcon
                key={index}
                icon={item.icon}
                title={item.title}
                stepNumber={stepNumber}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PublishCategory;
