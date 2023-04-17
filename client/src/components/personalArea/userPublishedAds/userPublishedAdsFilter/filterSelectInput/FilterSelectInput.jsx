import React, { useEffect, useRef, useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import FilterSelectInputDropbox from './filterSelectInputDropbox/FilterSelectInputDropbox';

export default function FilterSelectInput({
  itemsList,
  setFilterBy,
  filterBy,
  placeholder,
  selectedPlaceholder,
  checkedItems,
  setCheckedItems,
}) {
  const [dropbox, setDropbox] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (dropbox && ref.current && !ref.current.contains(e.target)) {
        setDropbox(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [dropbox]);

  useEffect(() => {
    console.log('checkedItems', checkedItems);
  }, [checkedItems]);

  return (
    <div className='filter-select-input-container' ref={ref}>
      <div className='filter-input' onClick={() => setDropbox(!dropbox)}>
        <span>
          {filterBy.length === 0
            ? `${placeholder}`
            : filterBy.length === 1
            ? `${itemsList[filterBy[0]]}`
            : `${selectedPlaceholder} (${filterBy.length})`}
        </span>
        {dropbox ? (
          <RiArrowDropUpLine className='arrow-icon' />
        ) : (
          <RiArrowDropDownLine className='arrow-icon' />
        )}
      </div>
      {dropbox && (
        <FilterSelectInputDropbox
          itemsList={itemsList}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
      )}
    </div>
  );
}
