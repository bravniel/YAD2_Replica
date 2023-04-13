// PersonalAreaHeader

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import yad2Logo from '../../../assets/icons/yad2Logo.png';
import UserSideIcon from '../userSideIcon/UserSideIcon';

export default function PersonalAreaHeader() {
  const navigate = useNavigate();

  return (
    <div className='personal-area-header'>
      <div className='personal-area-container'>
        <div
          className='nav-link-logo'
          onClick={() => navigate('/realestate/forsell')}>
          <img src={yad2Logo} alt={'לוגו יד2'} />
        </div>
        <span>איזור אישי</span>
      </div>
      <div className='personal-area-container'>
        <UserSideIcon />
        <NavLink to={'/publish'} className='new-ad'>
          <div className='new-ad-link'>+ פרסום מודעה חדשה</div>
        </NavLink>
      </div>
    </div>
  );
}
