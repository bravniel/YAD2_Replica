import React from 'react';
import SubNavBarLeftButtons from './subNavBarLeftButtons/SubNavBarLeftButtons';
import SubNavBarRightButtons from './subNavBarRightButtons/SubNavBarRightButtons';

export default function SubNavBar({ isScreenWidthLessThan1260px }) {
  return (
    <div className='sub-navbar'>
      <SubNavBarRightButtons />
      {!isScreenWidthLessThan1260px && <SubNavBarLeftButtons />}{' '}
    </div>
  );
}
