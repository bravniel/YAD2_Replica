import { useState, useEffect } from 'react';
import SearchCheckboxAndLabel from '../../../../searchInputs/searchCheckboxAndLabel/SearchCheckboxAndLabel';

const HousesDropbox = ({ checkedAll, dispatchForm, checked }) => {
  const checkHandler = (event) => {
    if (event.target.value === 0 || event.target.value === undefined) return;
    const checkboxes = ["בית פרטי/קוטג'", 'משק חקלאי/נחלה'];
    if (checkboxes.includes(event.target.value)) {
      const finalCheckboxes = IfExistRemoveOtherwisePush(event.target.value, [
        ...checked,
      ]);
      dispatchForm({
        type: 'PROPERTY_KIND',
        payload: { value: finalCheckboxes },
        option: 'HOUSES',
      });
    }
  };
  function IfExistRemoveOtherwisePush(target, checkboxArr) {
    if (checkboxArr.includes(target))
      checkboxArr.splice(checkboxArr.indexOf(target), 1);
    else checkboxArr.push(target);
    return checkboxArr;
  }
  return (
    <ul className='dropbox-list' onClick={checkHandler}>
      <li>
        <SearchCheckboxAndLabel
          // value='private_house'
          value="בית פרטי/קוטג'"
          checked={checkedAll || checked.includes("בית פרטי/קוטג'")}
          label="בית פרטי/קוטג'"
        />
      </li>
      <li>
        <SearchCheckboxAndLabel
          // value='farm'
          value='משק חקלאי/נחלה'
          checked={checkedAll || checked.includes('משק חקלאי/נחלה')}
          label='משק חקלאי/נחלה'
        />
      </li>
    </ul>
  );
};

export default HousesDropbox;
