import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  deleteUserFromCookie,
  getUserFromCookie,
} from '../../../../../cookies/cookies';
import IconedNavLink from '../../iconedNavLink/IcondNavLink';
import { BiUser } from 'react-icons/bi';

export default function PersonalSection({ handleBurgerButtonClick }) {
  const user = getUserFromCookie();
  const location = useLocation();
  const handleLogutClick = () => {
    deleteUserFromCookie();
    handleBurgerButtonClick();
  };
  return (
    <div className='personal'>
      <IconedNavLink
        to={user ? '/personal/profile' : 'login'}
        text={user ? `${user.firstName} ${user.lastName}` : 'התחברות'}
        onClick={handleBurgerButtonClick}>
        {user ? (
          <div className='initials-container'>
            {user.firstName[0]}
            {user.lastName[0]}
          </div>
        ) : (
          <div className='initials-container-icon'>
            <BiUser className='iconn' />
          </div>
        )}
        {user && (
          <Link className='me' to={'/personal/profile'}>
            לאזור האישי
          </Link>
        )}
      </IconedNavLink>
      {user && (
        <div className='sign-out'>
          <IconedNavLink
            to={location.pathname}
            text={'התנתקות'}
            onClick={handleLogutClick}
          />
        </div>
      )}
    </div>
  );
}
