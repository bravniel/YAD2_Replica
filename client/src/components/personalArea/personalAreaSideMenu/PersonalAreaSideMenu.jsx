import React from 'react';
import PersonalAreaSideBar from '../personalAreaSideBar/PersonalAreaSideBar';

export default function PersonalAreaSideMenu({
  sideMenu,
  handleBurgerButtonClick,
}) {
  return (
    <div
      className={
        !sideMenu ? 'personal-area-side-menu' : 'personal-area-side-menu active'
      }>
      <PersonalAreaSideBar
        handleBurgerButtonClick={handleBurgerButtonClick}
        sideMenu={sideMenu}
      />
      <div className='close-side-menu' onClick={handleBurgerButtonClick}></div>
    </div>
  );
}
