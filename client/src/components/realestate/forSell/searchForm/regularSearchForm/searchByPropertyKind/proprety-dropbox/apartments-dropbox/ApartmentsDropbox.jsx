import { useState, useEffect } from 'react';
import SearchCheckboxAndLabel from '../../../../searchInputs/searchCheckboxAndLabel/SearchCheckboxAndLabel';

const ApartmentsDropbox = ({ checkedAll, dispatchForm, checked }) => {
  const checkHandler = (event) => {
    if (event.target.value === 0 || event.target.value === undefined) return;
    const checkboxes = [
      // 'apartment',
      // 'garden_apartment',
      // 'penthouse',
      // 'duplex',
      // 'holiday_apartment',
      // 'basement',
      // 'triplex',
      // 'studio',
      // 'studio_loft',
      'דירה',
      'דירת גן',
      'גג/פנטהאוז',
      'דופלקס',
      'דירת נופש',
      'מרתף/פרטר',
      'טריפלקס',
      'יחידת דיור',
      'סטודיו/לופט',
    ];
    if (checkboxes.includes(event.target.value)) {
      const finalCheckboxes = IfExistRemoveOtherwisePush(event.target.value, [
        ...checked,
      ]);
      dispatchForm({
        type: 'PROPERTY_KIND',
        payload: { value: finalCheckboxes },
        option: 'APARTMENTS',
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
    apartment: 'דירה',
    garden_apartment: 'דירת גן',
    penthouse: 'גג/פנטהאוז',
    duplex: 'דופלקס',
    holiday_apartment: 'דירת נופש',
    basement: 'מרתף/פרטר',
    triplex: 'טריפלקס',
    studio: 'יחידת דיור',
    studio_loft: 'סטודיו/לופט',
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

export default ApartmentsDropbox;
