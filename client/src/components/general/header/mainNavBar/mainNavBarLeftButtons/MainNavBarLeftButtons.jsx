import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import IconedNavLink from '../../iconedNavLink/IcondNavLink';
import { TbBellRinging2 } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { CgSmartphone } from 'react-icons/cg';
import { BiUser } from 'react-icons/bi';
import { deleteUserFromCookie } from '../../../../../cookies/cookies';
import { UserContext } from '../../../../../context/UserContext';
import FavoriteAdsDropdown from './favoriteAdsDropdown/FavoriteAdsDropdown';
import { WindowContext } from '../../../../../context/WindowContext';

export default function MainNavBarLeftButtons() {
  const { windowWidth } = useContext(WindowContext);
  const location = useLocation();
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
    <div className={windowWidth > 880 ? 'side-wrapper' : 'side-wrapper'}>
      {windowWidth < 1260 && <IconedNavLink to={'chat'} icon={BsChatDots} />}
      {windowWidth > 880 && (
        <IconedNavLink
          to={'alert'}
          text={'התראות'}
          isDisplayText={windowWidth > 1500}
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
              isDisplayText={windowWidth > 1500}
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
      {windowWidth > 880 && (
        <ul className='nav-bar'>
          <li
            className='nav-bar-item'
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}>
            <IconedNavLink
              to={user ? 'me' : 'login'}
              text={user ? `${user.firstName} ${user.lastName}` : 'התחברות'}
              isDisplayText={windowWidth > 1500}>
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
          {windowWidth < 880 ? '+' : '+ פרסום מודעה חדשה'}
        </div>
      </NavLink>
    </div>
  );
}
