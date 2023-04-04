import React, { useContext, useEffect, useReducer, useState } from 'react';
import { getRealEstates } from '../../../api/userRequests';
import {
  searchFormInitialState,
  SearchFormReducer,
} from '../../../reducers/rearchFormReducer';
import AssetsList from './assetsList/AssetsList';
import AssetsSortFilter from './assetsSortFilter/AssetsSortFilter';
import Pagination from './pagination/Pagination';
import SearchForm from './searchForm/SearchForm';

export default function ForSell() {
  const [realEstates, setRealEstates] = useState([]);
  const [sort, setSort] = useState('uploadDate DESC');
  const [filter, setFilter] = useState({
    withPicture: false,
    withPrice: false,
  });
  const [form, dispatchForm] = useReducer(
    SearchFormReducer,
    searchFormInitialState
  );
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getData();
  }, [page, sort, filter]);

  function getData() {
    getRealEstates(form, page, sort, filter).then((data) => {
      setRealEstates(data.data);
      setTotalPages(Math.ceil(data.numOfPages / 5));
    });
  }
  return (
    <div className='forsell-page'>
      <SearchForm form={form} dispatchForm={dispatchForm} getData={getData} />
      <div className='page-title'>
        <span>ראשי/</span>
        <span> נדל"ן למכירה</span>
      </div>
      <AssetsSortFilter
        sort={sort}
        setSort={setSort}
        filter={filter}
        setFilter={setFilter}
      />
      {realEstates.length > 0 ? (
        <AssetsList realEstates={realEstates} />
      ) : (
        <div>אין נתונים!</div>
      )}
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        setTotalPages={setTotalPages}
        realEstates={realEstates}
      />
    </div>
  );
}
