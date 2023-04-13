// UserSideIcon

import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import { getUserFromCookie } from '../../../cookies/cookies';

export default function UserSideIcon() {
  // const userInfo = getUserFromCookie();
  // const [user, setUser] = useState(userInfo);
  // useEffect(() => {setUser(getUserFromCookie());}, [getUserFromCookie()]);

  const { user, dispatchUser } = useContext(UserContext);

  return (
    <div className='initials-container'>
      {user.firstName[0]}
      {user.lastName[0]}
    </div>
  );
}
