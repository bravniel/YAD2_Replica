import React, { useEffect, useRef, useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import FilterDropDownBox from './filterDropDownBox/FilterDropDownBox';

const Filter = ({ setFilter }) => {
  const ref = useRef();
  const [dropbox, setDropbox] = useState(false);
  const [filterBy, setFilterBy] = useState({
    withPicture: false,
    withPrice: false,
  });
  const dropboxHandler = () => setDropbox(!dropbox);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (dropbox && ref.current && !ref.current.contains(e.target)) {
        setDropbox(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [dropbox]);
  return (
    <div className='filter' ref={ref}>
      <div
        onClick={dropboxHandler}
        className={
          !!filterBy.withPicture || !!filterBy.withPrice
            ? 'filter-container with-filter'
            : 'filter-container without-filter'
        }>
        <BiFilterAlt className='filter-icon' />
        <span>סנן תוצאות</span>
      </div>
      {dropbox && (
        <FilterDropDownBox
          filterBy={filterBy}
          setFilter={setFilter}
          setFilterBy={setFilterBy}
          onClick={dropboxHandler}
        />
      )}
    </div>
  );
};

export default Filter;
