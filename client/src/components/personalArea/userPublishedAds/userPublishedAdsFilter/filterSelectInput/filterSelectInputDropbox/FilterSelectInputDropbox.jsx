import React from 'react';
import SearchCheckboxAndLabel from '../../../../../realestate/forSell/searchForm/searchInputs/searchCheckboxAndLabel/SearchCheckboxAndLabel';

const FilterSelectInputDropbox = ({
  itemsList,
  filterBy,
  setFilterBy,
  checkedItems,
  setCheckedItems,
}) => {
  function isOptionSelected(option) {
    for (let i = 0; i < filterBy.length; i++) {
      if (filterBy[i] === option) {
        return true;
      }
    }
    return false;
  }

  const toggleFilterBy = (event) => {
    const option = event.target.value;
    setCheckedItems({
      ...checkedItems,
      [event.target.value]: event.target.checked,
    });

    if (!isOptionSelected(option)) {
      let newOptionsArray = [...filterBy];
      newOptionsArray.push(option);
      setFilterBy(newOptionsArray);
    } else {
      let newOptionsArray = [...filterBy];
      newOptionsArray = newOptionsArray.filter((item) => item !== option);
      setFilterBy(newOptionsArray);
    }
  };

  return (
    <div className='filter-dropbox'>
      <div className='filter-dropbox-triangle'></div>
      <div className='filter-checkbox-container'>
        {Object.keys(itemsList).map((key, index) => {
          return (
            <SearchCheckboxAndLabel
              key={index}
              value={key}
              checked={checkedItems[key]}
              label={itemsList[key]}
              filterHandler={toggleFilterBy}
            />
          );
        })}
      </div>
      <div className='filter-clear-btn'>
        <span
          onClick={() => {
            setFilterBy([]);
            setCheckedItems({});
            const checkboxes = document.getElementsByTagName('input');
            for (let i = 0; i < checkboxes.length; i++) {
              if (checkboxes[i].type === 'checkbox') {
                checkboxes[i].checked = false;
              }
            }
          }}>
          נקה
        </span>
        <span className='filter-btn' onClick={() => {}}>
          בחר
        </span>
      </div>
    </div>
  );
};

export default FilterSelectInputDropbox;
