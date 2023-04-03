import React from 'react';
import { useNavigate } from 'react-router-dom';
import yad2Logo from '../../../../assets/icons/yad2Logo.png';

export default function SignHeader() {
  const navigate = useNavigate();

  return (
    <div className='sign-header'>
      <div className='nav-link-logo' onClick={()=>navigate('/realestate/forsell')}>
        <img src={yad2Logo} alt={'לוגו יד2'} />
      </div>
    </div>
  );
}
