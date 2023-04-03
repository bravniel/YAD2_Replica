import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PublishHeader from '../components/publish/publishHeader/PublishHeader';
import { getUserFromCookie } from '../cookies/cookies';

const PublishRoute = () => {
  const user = getUserFromCookie();
  return user ? (
    <>
      <PublishHeader />
      <Outlet />
    </>
  ) : (
    <Navigate to='/login' />
  );
};

export default PublishRoute;
