// UserSideIcon
import React, { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';

export default function UserSideIcon() {
  const { user } = useContext(UserContext);

  return (
    <div className='initials-container'>
      {user.firstName[0]}
      {user.lastName[0]}
    </div>
  );
}
