import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { WindowContext } from '../../../context/WindowContext';
import MainNavBar from './mainNavBar/MainNavBar';
import SubNavBar from './subNavBar/SubNavBar';

export default function Header() {
  const location = useLocation();
  const { windowWidth } = useContext(WindowContext);

  return (
    <>
      <MainNavBar />
      {location.pathname.includes('/realestate') && windowWidth > 880 && (
        <SubNavBar />
      )}
    </>
  );
}
