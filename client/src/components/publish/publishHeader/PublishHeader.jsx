import React, { useContext } from 'react';
import { BiUser } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { BsQuestionCircle } from 'react-icons/bs';
import { WindowContext } from '../../../context/WindowContext';
import yad2Logo from '../../../assets/icons/yad2Logo.png';
import { getUserFromCookie } from '../../../cookies/cookies';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import IconedNavLink from '../../general/header/iconedNavLink/IcondNavLink';

const PublishHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { windowWidth } = useContext(WindowContext);
  const user = getUserFromCookie();
  return (
    <div className='publish-header'>
      <div className='publish-header-wrapper'>
        <div
          className='nav-link-logo'
          onClick={() => navigate('/realestate/forsell')}>
          <img src={yad2Logo} alt={'לוגו יד2'} />
        </div>
        {windowWidth > 660 && (
          <span className='publish-header-title'>פרסום מודעה חדשה</span>
        )}
      </div>
      <div className='publish-header-wrapper'>
        <IconedNavLink
          to={'me'}
          text={`${user.firstName} ${user.lastName}`}
          icon={BiUser}
          isDisplayText={windowWidth > 660}
        />
        <NavLink to={'/contact-us'} className='contact-us-link'>
          {windowWidth > 660 ? (
            <span>צור קשר</span>
          ) : (
            <div className='contact-us-container'>
              <BsQuestionCircle className='question-btn' />
            </div>
          )}
        </NavLink>
        {location.pathname.includes('/publish/realestate') && (
          <NavLink to={'/publish'} className='back-to-publish-container'>
            <div className='back-to-publish-btn'>
              {windowWidth > 660 && <span>יציאה</span>}
              <IoMdClose className='exit-btn' />
            </div>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default PublishHeader;
