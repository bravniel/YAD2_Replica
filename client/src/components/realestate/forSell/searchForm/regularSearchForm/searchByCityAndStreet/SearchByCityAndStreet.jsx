import React, { useEffect, useState } from 'react';
import { getCityList, getStreetsList } from '../../../../../../api/dataGovIL';

const SearchByCityAndStreet = ({ dispatchForm }) => {
  const [listResult, setListResult] = useState([]);
  const [value, setValue] = useState('');
  const [isDropDownListOpen, setIsDropDownListOpen] = useState(false);

  const getList = async (value) => {
    if (value.length > 1) {
      const listOfCities = await getCityList(value);
      const listOfStreets = await getStreetsList(value);
      setListResult([...listOfCities, ...listOfStreets]);
    }
    else {
      setListResult([]);
    }
  };
  useEffect(() => {
    dispatchForm({
      type: 'CITY',
      payload: { value: value },
    });
  }, [value]);

  useEffect(() => {
    listResult.length !== 0
      ? setIsDropDownListOpen(true)
      : setIsDropDownListOpen(false);
  }, [listResult]);

  const cityStreetChangeHandler = (event) => {
    setValue(event.target.value);
    getList(event.target.value);
  };

  return (
    <div className='city-street-search-container'>
      <label>חפשו אזור, עיר, שכונה או רחוב</label>
      <input
        placeholder='לדוגמה: רחוב, עיר'
        onChange={cityStreetChangeHandler}
        value={value}
      />
      {isDropDownListOpen && (
        <div className='api-drop-down-list'>
          {listResult.map((item, index) => {
            return (
              <div
                key={index}
                className='api-drop-down-list-item'
                value={item.street_name ? item['street_name'] : item['שם_ישוב']}
                onClick={() => {
                  setValue(
                    item.street_name
                      ? item['street_name'].trim()
                      : item['שם_ישוב'].trim()
                  );
                  setIsDropDownListOpen(false);
                }}>
                {item.street_name
                  ? item['street_name'].trim()
                  : item['שם_ישוב'].trim()}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchByCityAndStreet;
