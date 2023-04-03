import React, { useState } from 'react';
import AdvancedSearchForm from './advancedSearchForm/AdvancedSearchForm';
import FormTitle from './formTitle/FormTitle';
import RegularSearchForm from './regularSearchForm/RegularSearchForm';

export default function SearchForm({ form, dispatchForm, getData }) {
  const [isAdvancedSearchDropboxOpen, setIsAdvancedSearchDropboxOpen] =
    useState(false);

  return (
    <div className='search-bar'>
      <FormTitle />
      <RegularSearchForm
        form={form}
        dispatchForm={dispatchForm}
        isAdvancedSearchDropboxOpen={isAdvancedSearchDropboxOpen}
        setIsAdvancedSearchDropboxOpen={setIsAdvancedSearchDropboxOpen}
        getData={getData}
      />
      {isAdvancedSearchDropboxOpen && (
        <AdvancedSearchForm
          form={form}
          dispatchForm={dispatchForm}
          getData={getData}
          setIsAdvancedSearchDropboxOpen={setIsAdvancedSearchDropboxOpen}
        />
      )}
    </div>
  );
}

//------------------------------------------------------------------------------------------

// import React, { useState, useContext } from 'react';
// import { SearchContext } from './SearchContext';

// const Search = () => {
//   const { setSearchResults } = useContext(SearchContext);
//   const [city, setCity] = useState('');
//   const [street, setStreet] = useState('');
//   const [propertyType, setPropertyType] = useState('All');
//   const [fromPrice, setFromPrice] = useState('');
//   const [toPrice, setToPrice] = useState('');

//   const handleSearch = async () => {
//     // send SQL query to API
//     const response = await fetch(`/api/search?city=${city}&street=${street}&propertyType=${propertyType}&fromPrice=${fromPrice}&toPrice=${toPrice}`);
//     const data = await response.json();
//     setSearchResults(data);
//   };

//   return (
//     <div>
//       <label>
//         City:
//         <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
//       </label>
//       <label>
//         Street:
//         <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
//       </label>
//       <label>
//         Property Type:
//         <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
//           <option value="All">All</option>
//           <option value="House">House</option>
//           <option value="Apartment">Apartment</option>
//         </select>
//       </label>
//       <label>
//         Price Range:
//         <input type="number" value={fromPrice} onChange={(e) => setFromPrice(e.target.value)} />
//         <input type="number" value={toPrice} onChange={(e) => setToPrice(e.target.value)} />
//       </label>
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default Search;

// const sql = require('mssql');

// const config = {
//   user: 'yourusername',
//   password: 'yourpassword',
//   server: 'yourserver',
//   database: 'yourdatabase',
// };

// const searchProperties = async (
//   city,
//   street,
//   propertyType,
//   fromPrice,
//   toPrice
// ) => {
//   try {
//     const pool = await sql.connect(config);

//     // Build the SQL query string based on the input values
//     let queryString = `SELECT * FROM properties WHERE 1=1`;
//     if (city) queryString += ` AND city = '${city}'`;
//     if (street) queryString += ` AND street = '${street}'`;
//     if (propertyType && propertyType !== 'All')
//       queryString += ` AND property_type = '${propertyType}'`;
//     if (fromPrice) queryString += ` AND price >= ${fromPrice}`;
//     if (toPrice) queryString += ` AND price <= ${toPrice}`;

//     // Execute the query and return the results
//     const result = await pool.request().query(queryString);
//     return result.recordset;
//   } catch (err) {
//     console.error(err);
//   }
// };
