import React, { createContext, useEffect, useReducer, useState } from 'react';
import { getAllFavoriteAds } from '../api/userRequests';
import { getUserFromCookie } from '../cookies/cookies';
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const userData = getUserFromCookie();
  const [user, dispatchUser] = useState(userData);

  const [userFavoriteAds, dispatchUserFavoriteAds] = useState([]);

  useEffect(() => {
    console.log('userFavoriteAds', userFavoriteAds);
  }, [userFavoriteAds]);

  useEffect(() => {
      console.log('user', user);
      user
        ? getAllFavoriteAds(userData.token).then((data) => {
            // let userFavoriteAds = [];
            // data.forEach((element) => userFavoriteAds.push(element.adId));
            dispatchUserFavoriteAds(data);
          })
        : dispatchUserFavoriteAds([]);
  }, [user]);
    
  return (
    <UserContext.Provider
      value={{ user, dispatchUser, userFavoriteAds, dispatchUserFavoriteAds }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
