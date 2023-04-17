import React, { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import yad2Logo from '../../../assets/icons/yad2Logo.png';
import { WindowContext } from '../../../context/WindowContext';
import PersonalAreaSideMenu from '../personalAreaSideMenu/PersonalAreaSideMenu';
import UserSideIcon from '../userSideIcon/UserSideIcon';

export default function PersonalAreaHeader() {
  const navigate = useNavigate();
  const { windowWidth } = useContext(WindowContext);

  const [sideMenu, setSideMenu] = useState(false);
  const handleBurgerButtonClick = () => {
    setSideMenu(!sideMenu);
  };
  return (
    <div className='personal-area-header'>
      {windowWidth < 770 && (
        <button className='burger-button' onClick={handleBurgerButtonClick}>
          <FaBars className='burger-icon' />
        </button>
      )}
      <div className='personal-area-container'>
        {windowWidth < 1020 && windowWidth > 770 && (
          <button className='burger-button' onClick={handleBurgerButtonClick}>
            <FaBars className='burger-icon' />
          </button>
        )}
        <div
          className='nav-link-logo'
          onClick={() => navigate('/realestate/forsell')}>
          <img src={yad2Logo} alt={'לוגו יד2'} />
        </div>
        {windowWidth > 770 && <span>איזור אישי</span>}
      </div>
      {windowWidth > 770 && (
        <div className='personal-area-container'>
          <UserSideIcon />
          <NavLink to={'/publish'} className='new-ad'>
            <div className='new-ad-link'>+ פרסום מודעה חדשה</div>
          </NavLink>
        </div>
      )}
      <PersonalAreaSideMenu
        handleBurgerButtonClick={handleBurgerButtonClick}
        sideMenu={sideMenu}
        setSideMenu={setSideMenu}
      />
    </div>
  );
}
