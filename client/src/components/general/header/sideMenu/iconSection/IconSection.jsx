import React from 'react';
import IconedNavLink from '../../iconedNavLink/IcondNavLink';
import { TbBellRinging2 } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { RiArrowLeftRightLine } from 'react-icons/ri';

export default function IconSection({ handleBurgerButtonClick }) {
  return (
    <div className='icon'>
      <IconedNavLink
        to={'chat'}
        text={"צ'אט"}
        icon={BsChatDots}
        onClick={handleBurgerButtonClick}
      />
      <IconedNavLink
        to={'alert'}
        text={'התראות שלי'}
        icon={TbBellRinging2}
        onClick={handleBurgerButtonClick}
      />
      <IconedNavLink
        to={'/personal/favorites'}
        text={'מודעות שאהבתי'}
        icon={AiOutlineHeart}
        onClick={handleBurgerButtonClick}
      />
      <IconedNavLink
        to={'last_search'}
        text={'חיפושים אחרונים'}
        icon={BiSearch}
        onClick={handleBurgerButtonClick}
      />
      <IconedNavLink
        to={'compare_vehicles'}
        text={'השוואת רכבים'}
        icon={RiArrowLeftRightLine}
        onClick={handleBurgerButtonClick}
      />
    </div>
  );
}
