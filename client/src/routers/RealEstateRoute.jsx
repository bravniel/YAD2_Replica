import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/general/header/Header';

const RealEstateRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RealEstateRoute;