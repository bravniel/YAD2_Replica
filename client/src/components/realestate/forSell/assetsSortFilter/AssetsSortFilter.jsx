import React from 'react';
import Sort from './sort/Sort';
import Filter from './filter/Filter';
import Map from './map/Map';

const AssetsSortFilter = ({ sort, setSort }) => {
  return (
    <div className='sort-filter-map-container'>
      <Sort sort={sort} setSort={setSort} />
      <Filter />
      <Map />
    </div>
  );
};

export default AssetsSortFilter;
