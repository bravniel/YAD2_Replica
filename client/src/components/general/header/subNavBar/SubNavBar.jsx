import React, { useContext } from 'react';
import { WindowContext } from '../../../../context/WindowContext';
import SubNavBarLeftButtons from './subNavBarLeftButtons/SubNavBarLeftButtons';
import SubNavBarRightButtons from './subNavBarRightButtons/SubNavBarRightButtons';

export default function SubNavBar() {
  const { windowWidth } = useContext(WindowContext);

  return (
    <div className='sub-navbar'>
      <SubNavBarRightButtons />
      {windowWidth > 1260 && <SubNavBarLeftButtons />}
    </div>
  );
}
