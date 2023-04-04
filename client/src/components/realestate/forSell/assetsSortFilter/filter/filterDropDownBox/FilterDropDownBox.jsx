import SearchCheckboxAndLabel from '../../../searchForm/searchInputs/searchCheckboxAndLabel/SearchCheckboxAndLabel';

const FilterDropDownBox = ({ filterBy, setFilter, setFilterBy, onClick }) => {
  const filterHandler = (event) => {
    switch (event.target.value) {
      case 'withPicture': {
        setFilterBy({
          withPrice: filterBy.withPrice,
          withPicture: !filterBy.withPicture,
        });
        break;
      }
      case 'withPrice': {
        setFilterBy({
          withPicture: filterBy.withPicture,
          withPrice: !filterBy.withPrice,
        });
        break;
      }
    }
  };

  return (
    <div className='filter-dropbox'>
      <div className='filter-dropbox-triangle'></div>
      <div className='filter-checkbox-container'>
        <SearchCheckboxAndLabel
          value='withPrice'
          checked={filterBy.withPrice}
          label='עם מחיר'
          filterHandler={filterHandler}
        />
        <SearchCheckboxAndLabel
          value='withPicture'
          checked={filterBy.withPicture}
          label='עם תמונה'
          filterHandler={filterHandler}
        />
      </div>
      <div className='filter-clear-btn'>
        <span
          onClick={() => {
            setFilter({
              withPicture: false,
              withPrice: false,
            });
            setFilterBy({
              withPicture: false,
              withPrice: false,
            });
          }}>
          ניקוי
        </span>
        <span
          className='filter-btn'
          onClick={() => {
            setFilter(filterBy);
            onClick();
          }}>
          סינון
        </span>
      </div>
    </div>
  );
};

export default FilterDropDownBox;
