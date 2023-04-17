import React, { useContext } from 'react';
import IconedNavLink from '../../general/header/iconedNavLink/IcondNavLink';
import { sideBarContent } from '../../../utils/personalArea';
import {
  deleteUserFromCookie,
  getUserFromCookie,
} from '../../../cookies/cookies';
import UserSideIcon from '../userSideIcon/UserSideIcon';
import { useNavigate } from 'react-router-dom';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoAccessibilitySharp } from 'react-icons/io5';
import { WindowContext } from '../../../context/WindowContext';

export default function PersonalAreaSideBar({
  handleBurgerButtonClick,
  sideMenu,
}) {
  const user = getUserFromCookie();
  const navigate = useNavigate();

  return (
    <div
      className={
        !sideMenu
          ? 'personal-area-side-bar-wrapper'
          : 'personal-area-side-bar-wrapper active'
      }>
      <div className='user-info-container'>
        <UserSideIcon />
        <span>
          {user.firstName} {user.lastName}
        </span>
      </div>
      <div className=''>
        {sideBarContent.map((item, index) => {
          return (
            <IconedNavLink
              key={index}
              to={item.path}
              text={item.title}
              icon={item.sideIcon}
              onClick={handleBurgerButtonClick}
            />
          );
        })}
      </div>
      <div className='personal-area-side-bar-bottom'>
        <div className='form-sign-options-container'>
          <button className='form-button accessibility'>
            <IoAccessibilitySharp />
          </button>
          <button className='form-button telephone'>
            <BsFillTelephoneFill />
          </button>
        </div>
        <div
          className='personal-area-logout'
          onClick={() => {
            deleteUserFromCookie();
            handleBurgerButtonClick();
            navigate('/realestate/forsell');
          }}>
          התנתקות
        </div>
      </div>
    </div>
  );
}
