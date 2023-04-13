import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/general/header/Header';
import PersonalAreaHeader from '../components/personalArea/personalAreaHeader/PersonalAreaHeader';
import { getUserFromCookie } from '../cookies/cookies';

const UserRoute = () => {
  const user = getUserFromCookie();
  const location = useLocation();

  return user ? (
    <>
      {location.pathname.includes('/personal/favorites') ? (
        <Header />
      ) : (
        <PersonalAreaHeader />
      )}
      <Outlet />
    </>
  ) : (
    <Navigate to='/login' />
  );
};

export default UserRoute;
