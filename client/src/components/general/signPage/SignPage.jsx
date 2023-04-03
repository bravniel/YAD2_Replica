import React, { useContext } from 'react';
import { WindowContext } from '../../../context/WindowContext';
import SignAbilities from './signAbilities/SignAbilities';
import SignHeader from './signHeader/SignHeader';

export default function SignPage({children}) {
  const { windowWidth } = useContext(WindowContext);
  return (
    <div className='sign-page'>
      {windowWidth > 900 ? <SignHeader /> : null}
      <div className='sign-body'>
        <div className='sign-container'>
          <div className='sign-form'>{children}</div>
          {windowWidth > 900 ? <SignAbilities /> : null}
        </div>
      </div>
    </div>
  );
}
