import React, { useContext, useState } from 'react';
import yad2Logo from '../../../../../assets/icons/yad2Logo.png';
import IconedNavLink from '../../iconedNavLink/IcondNavLink';
import { FaBars } from 'react-icons/fa';
import DropdownMenu from '../../dropdownMenu/DropdownMenu';
import { pageContent } from '../../../../../utils/utils';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../../sideMenu/SideMenu';
import { WindowContext } from '../../../../../context/WindowContext';

export default function MainNavBarRightButtons() {
  const { windowWidth } = useContext(WindowContext);
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const handleDropdownClick = () => {
    setDropdown(false);
  };
  const [sideMenu, setSideMenu] = useState(false);
  const handleBurgerButtonClick = () => {
    setSideMenu(!sideMenu);
  };
  return (
    <div
      className={windowWidth > 880 ? 'side-wrapper' : 'side-wrapper reverse'}>
      <div
        className='nav-link-logo'
        onClick={() => navigate('/realestate/forsell')}>
        <img src={yad2Logo} alt={'לוגו יד2'} />
      </div>
      {windowWidth < 1260 && (
        <>
          <button className='burger-button' onClick={handleBurgerButtonClick}>
            <FaBars className='burger-icon' />
            {windowWidth > 880 ? 'תפריט' : ''}
          </button>
          {sideMenu && (
            <SideMenu handleBurgerButtonClick={handleBurgerButtonClick} />
          )}
        </>
      )}

      {windowWidth > 1260 && (
        <ul className='nav-bar'>
          {pageContent.map((item, index) => {
            return (
              <li
                key={index}
                className='nav-bar-item'
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}>
                <IconedNavLink to={item.path} text={item.title} />
                {dropdown && (
                  <DropdownMenu
                    item={item}
                    dropdown={dropdown}
                    handleClick={handleDropdownClick}
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
