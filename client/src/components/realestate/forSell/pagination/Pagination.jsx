import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Pagination({ page, setPage, totalPages, setTotalPages, realEstates }) {
  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <div className='pagination'>
      <button onClick={previousPage} disabled={page === 1}>
        <IoIosArrowForward />
        <span className='previous'>הקודם</span>
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index}
          className={index + 1 === page ? 'active' : ''}
          onClick={() => setPage(index + 1)}>
          {index + 1}
        </div>
      ))}

      <button onClick={nextPage} disabled={page === totalPages || realEstates.length == 0}>
        <span className='next'>הבא</span>
        <IoIosArrowBack />
      </button>
    </div>
  );
}

export default Pagination;

// useEffect(() => {
//   // send query to retrieve data for the current page and search criteria
//   const fetchPageData = async () => {
//     try {
//       const pool = await sql.connect(config);
//       const offset = (page - 1) * 5;
//       const result = await pool
//         .request()
//         .input('city', sql.NVarChar(50), cityInputValue)
//         .input('street', sql.NVarChar(50), streetInputValue)
//         .input('propertyType', sql.NVarChar(50), propertyTypeInputValue)
//         .input('fromPrice', sql.Decimal(18, 2), fromPriceInputValue)
//         .input('toPrice', sql.Decimal(18, 2), toPriceInputValue).query(`
//           SELECT *
//           FROM mytable
//           WHERE (City LIKE '%' + @city + '%' OR Street LIKE '%' + @street + '%')
//             AND PropertyType = @propertyType
//             AND Price >= @fromPrice
//             AND Price <= @toPrice
//           ORDER BY id
//           OFFSET ${offset} ROWS
//           FETCH NEXT 5 ROWS ONLY
//         `);
//       setData(result.recordset);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   fetchPageData();
// }, [
//   page,
//   cityInputValue,
//   streetInputValue,
//   propertyTypeInputValue,
//   fromPriceInputValue,
//   toPriceInputValue,
// ]);
