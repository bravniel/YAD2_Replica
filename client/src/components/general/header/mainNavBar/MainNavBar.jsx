import React, { useContext, useEffect, useState } from 'react';
import { WindowContext } from '../../../../context/WindowContext';
import MainNavBarLeftButtons from './mainNavBarLeftButtons/MainNavBarLeftButtons';
import MainNavBarRightButtons from './mainNavBarRightButtons/MainNavBarRightButtons';

export default function MainNavBar() {
  const { windowWidth } = useContext(WindowContext);

  return (
    <div className={windowWidth > 880 ? 'main-navbar' : 'main-navbar one'}>
      <MainNavBarRightButtons />
      <MainNavBarLeftButtons />
    </div>
  );
}
