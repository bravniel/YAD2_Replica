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

export const getCountRealEstates = async () => {
  const routeUrl = apiUrl + '/realestate/count';
  const numOfAssets = await axios.get(routeUrl);
  return numOfAssets.data;
};

export const GetSearchStates = async (form) => {
  const routeUrl = apiUrl + '/realestate/search';
  // const headers = { Authorization: 'Bearer ' + token };
  const allAssets = await axios.get(routeUrl, form);
  return allAssets.data;
};

export const getRealEstates = async (searchForm, page, orderBy) => {
  const search = JSON.stringify(searchForm);
  const routeUrl = apiUrl + '/realestate/assets';
  const params = { params: { search, page, orderBy } };
  console.log('search',search);
  const allAssets = await axios.get(routeUrl, params);
  return allAssets.data;
};

//--------------------------------------------------------------------------------

// export const logoutProfessor = async (token) => {
//   const routeUrl = url + 'professors/logout';
//   const headers = { Authorization: 'Bearer ' + token };
//   const professor = await axios.post(routeUrl, {}, { headers });
//   return professor.data;
// };

// async function GetInitialStates() {
//   const res = await fetch(`${server}/initial_states`, { method: 'GET' });
//   return await errorHandler(await res.json());
// }

// async function GetOwnerInfo(email) {
//   const res = await fetch(`${server}/owner/${email}`, { method: 'GET' });
//   return await errorHandler(await res.json());
// }

// async function IsLoggedIn(token) {
//   const res = await fetch(`${server}/validate`, {
//     method: 'GET',
//     headers: { token },
//   });
//   return await errorHandler(await res.json());
// }

// async function PublishRealestate(estate, token) {
//   const res = await fetch(`${server}/publish/realestate`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json', token },
//     body: JSON.stringify(estate),
//   });
//   return await errorHandler(await res.json());
// }

// async function GetSearchStates(form) {
//   const res = await fetch(`${server}/realestate/search`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(form),
//   });
//   return await errorHandler(await res.json());
// }
