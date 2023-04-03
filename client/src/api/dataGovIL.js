import axios from 'axios';

export const getCityList = async (city) => {
  const routeUrl = `https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=10&q=${city}`;
  try {
    const newCityList = await axios.get(routeUrl);
    return newCityList.data?.result?.records;
  } catch (error) {
    console.log(error);
  }
};

export const getStreetList = async (city, street) => {
  const routeUrl = `https://data.gov.il/api/3/action/datastore_search?resource_id=bf185c7f-1a4e-4662-88c5-fa118a244bda&limit=10&q=${city}%${street}`;
  try {
    const newStreetList = await axios.get(routeUrl);
    return newStreetList.data?.result?.records;
  } catch (error) {
    console.log(error);
  }
};

export const getStreetsList = async (street) => {
  const routeUrl = `https://data.gov.il/api/3/action/datastore_search?resource_id=bf185c7f-1a4e-4662-88c5-fa118a244bda&limit=10&q=${street}`;
  try {
    const newStreetList = await axios.get(routeUrl);
    return newStreetList.data?.result?.records;
  } catch (error) {
    console.log(error);
  }
};