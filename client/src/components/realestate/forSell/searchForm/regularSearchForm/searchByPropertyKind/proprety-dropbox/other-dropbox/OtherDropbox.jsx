import { useState, useEffect } from 'react';
import SearchCheckboxAndLabel from '../../../../searchInputs/searchCheckboxAndLabel/SearchCheckboxAndLabel';

const OtherDropbox = ({ checkedAll, dispatchForm, checked }) => {
  const checkHandler = (event) => {
    if (event.target.value === 0 || event.target.value === undefined) return;
    const checkboxes = [
      // 'fields',
      // 'nursing_home',
      // 'tower',
      // 'warehouse',
      // 'parking',
      // 'purchase_group',
      // 'general',
      'מגרשים',
      'דיור מוגן',
      'בניין מגורים',
      'מחסן',
      'חניה',
      "קב' רכישה",
      'כללי',
    ];
    if (checkboxes.includes(event.target.value)) {
      const finalCheckboxes = IfExistRemoveOtherwisePush(event.target.value, [
        ...checked,
      ]);
      dispatchForm({
        type: 'PROPERTY_KIND',
        payload: { value: finalCheckboxes },
        option: 'OTHERS',
      });
    }
  };
  function IfExistRemoveOtherwisePush(target, checkboxArr) {
    if (checkboxArr.includes(target))
      checkboxArr.splice(checkboxArr.indexOf(target), 1);
    else checkboxArr.push(target);
    return checkboxArr;
  }

  const list = {
    fields: 'מגרשים',
    nursing_home: 'דיור מוגן',
    tower: 'בניין מגורים',
    warehouse: 'מחסן',
    parking: 'חניה',
    purchase_group: "קב' רכישה",
    general: 'כללי',
  };

  return (
    <ul className='dropbox-list' onClick={checkHandler}>
      {Object.keys(list).map((key, index) => {
        return (
          <li key={index}>
            <SearchCheckboxAndLabel
              value={list[key]}
              checked={checkedAll || checked.includes(`${list[key]}`)}
              label={list[key]}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default OtherDropbox;
