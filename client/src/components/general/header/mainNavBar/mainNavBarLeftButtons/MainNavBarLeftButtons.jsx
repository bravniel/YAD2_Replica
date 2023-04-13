import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import IconedNavLink from '../../iconedNavLink/IcondNavLink';
import { TbBellRinging2 } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { CgSmartphone } from 'react-icons/cg';
import { BiUser } from 'react-icons/bi';
import {
  deleteUserFromCookie,
  getUserFromCookie,
} from '../../../../../cookies/cookies';
import { UserContext } from '../../../../../context/UserContext';
import FavoriteAdsDropdown from './favoriteAdsDropdown/FavoriteAdsDropdown';

export default function MainNavBarLeftButtons({
  isScreenWidthLessThan1500px,
  isScreenWidthLessThan1260px,
  isScreenWidthLessThan880px,
}) {
  const location = useLocation();
  // const user = getUserFromCookie();
  const [dropdown, setDropdown] = useState(false);
  const [favoritAdsDropdown, setFavoritAdsDropdown] = useState(false);
  const handleDropdownClick = () => {
    deleteUserFromCookie();
    dispatchUser(null);
    setDropdown(false);
  };
  const { user, dispatchUser, userFavoriteAds, dispatchUserFavoriteAds } =
    useContext(UserContext);
  return (
    <div
      className={!isScreenWidthLessThan880px ? 'side-wrapper' : 'side-wrapper'}>
      {isScreenWidthLessThan1260px && (
        <IconedNavLink to={'chat'} icon={BsChatDots} />
      )}
      {!isScreenWidthLessThan880px && (
        <IconedNavLink
          to={'alert'}
          text={'התראות'}
          isDisplayText={!isScreenWidthLessThan1500px}
          icon={TbBellRinging2}
        />
      )}
      <ul className='nav-bar'>
        <li
          className='nav-bar-item'
          onMouseEnter={() => setFavoritAdsDropdown(true)}
          onMouseLeave={() => setFavoritAdsDropdown(false)}>
          <div className='favorite-ads-container'>
            <IconedNavLink
              to={'/personal/favorites'}
              text={'מודעות שאהבתי'}
              isDisplayText={!isScreenWidthLessThan1500px}
              icon={AiOutlineHeart}
            />
            {userFavoriteAds.length > 0 && (
              <div className='favorite-ads-count-icon'>
                {userFavoriteAds.length}
              </div>
            )}
            <div
              className={
                !favoritAdsDropdown ? 'clicked' : 'favorite-dropdown-content'
              }>
              <FavoriteAdsDropdown />
            </div>
          </div>
        </li>
      </ul>
      {/* <div className='favorite-ads-container'>
        <IconedNavLink
          to={'/personal/favorites'}
          text={'מודעות שאהבתי'}
          isDisplayText={!isScreenWidthLessThan1500px}
          icon={AiOutlineHeart}
        />
        {userFavoriteAds.length > 0 && (
          <div className='favorite-ads-count-icon'>
            {userFavoriteAds.length}
          </div>
        )}
      </div> */}
      {!isScreenWidthLessThan880px && (
        <ul className='nav-bar'>
          <li
            className='nav-bar-item'
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}>
            <IconedNavLink
              to={user ? 'me' : 'login'}
              text={user ? `${user.firstName} ${user.lastName}` : 'התחברות'}
              isDisplayText={!isScreenWidthLessThan1500px}>
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
            </IconedNavLink>
            {user && (
              <div className={!dropdown ? 'clicked' : 'dropdown-content'}>
                <div>
                  <IconedNavLink
                    text={'איזור אישי'}
                    icon={BiUser}
                    onClick={() => setDropdown(false)}
                    to={'/personal/profile'}
                  />
                  <IconedNavLink
                    text={'התנתקות'}
                    icon={CgSmartphone}
                    onClick={handleDropdownClick}
                    to={location.pathname}
                  />
                </div>
              </div>
            )}
          </li>
        </ul>
      )}
      <NavLink to={'/publish'} className='new-ad'>
        <div className='new-ad-link'>
          {isScreenWidthLessThan880px ? '+' : '+ פרסום מודעה חדשה'}
        </div>
      </NavLink>
    </div>
  );
}
