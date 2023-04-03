import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserFromCookie } from '../cookies/cookies';

const LoginRoute = () => {
const user = getUserFromCookie();
  return user ? <Navigate to='/' /> : <Outlet />;
};

export default LoginRoute;