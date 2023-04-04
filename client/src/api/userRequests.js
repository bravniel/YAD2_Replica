import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const signUpUser = async (credentials) => {
  const routeUrl = apiUrl + '/register';
  const newUser = await axios.post(routeUrl, credentials);
  return newUser.data;
};

export const signInUser = async (credentials) => {
  const routeUrl = apiUrl + '/login';
  const user = await axios.post(routeUrl, credentials);
  return user.data;
};

export const publishRealestate = async (credentials) => {
  const routeUrl = apiUrl + '/realestate/asset';
  // const headers = { Authorization: 'Bearer ' + token };
  const newAd = await axios.post(routeUrl, credentials);
  return newAd.data;
};

export const getInitialRealEstates = async (offset) => {
  const routeUrl = apiUrl + '/realestate/';
  // const headers = { Authorization: 'Bearer ' + token };
  const allAssets = await axios.get(routeUrl);
  return allAssets.data;
};

export const getRealEstates = async (searchForm, page, orderBy, filterBy) => {
  const search = JSON.stringify(searchForm);
  const routeUrl = apiUrl + '/realestate/assets';
  const params = { params: { search, page, orderBy, filterBy } };
  console.log('search',search);
  const allAssets = await axios.get(routeUrl, params);
  return allAssets.data;
};