import React from 'react';
import { CgClose } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import BottonIconSection from './bottonIconSection/BottonIconSection';
import CategoryNavigation from './categoryNavigation/CategoryNavigation';
import IconSection from './iconSection/IconSection';
import PersonalSection from './personalSection/PersonalSection';
import QuickSearch from './quickSearch/QuickSearch';

export default function SideMenu({ handleBurgerButtonClick }) {
  return (
    <div className='menu'>
      <div className='side-menu'>
        <button className='burger-button' onClick={handleBurgerButtonClick}>
          <CgClose className='burger-icon' />
        </button>
        <PersonalSection handleBurgerButtonClick={handleBurgerButtonClick} />
        <NavLink
          to={'/publish'}
          className='new-ad'
          onClick={handleBurgerButtonClick}>
          <div className='new-ad-link'>פרסום מודעה חדשה</div>
        </NavLink>
        <IconSection handleBurgerButtonClick={handleBurgerButtonClick} />
        <QuickSearch handleBurgerButtonClick={handleBurgerButtonClick} />
        <CategoryNavigation handleBurgerButtonClick={handleBurgerButtonClick} />
        <BottonIconSection handleBurgerButtonClick={handleBurgerButtonClick} />
      </div>
    </div>
  );
}
