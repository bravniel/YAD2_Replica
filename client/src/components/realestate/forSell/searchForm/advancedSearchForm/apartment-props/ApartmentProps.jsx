import React, { useState, useEffect } from 'react';
import CheckboxAndLabel from '../../../../../publish/publishNewAd/newAdCustomInputs/checkBoxAndLabel/CheckBoxAndLabel';
import SearchCheckboxAndLabel from '../../searchInputs/searchCheckboxAndLabel/SearchCheckboxAndLabel';

const ApartmentProps = ({ dispatchForm, stateProperties }) => {
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    setChecked(stateProperties.values);
  }, [stateProperties.values]);

  const checkboxHandler = (event) => {
    const checkboxes = [
      'numberOfParkingPlaces',
      'hasElevator',
      'hasAC',
      'numberOfPorches',
      'hasMamad',
      'hasBars',
      'hasWarehouse',
      'hasDisabilityAccess',
      'isRenovated',
      'hasFurniture',
    ];
    if (checkboxes.includes(event.target.value)) {
      const finalCheckboxes = IfExistRemoveOtherwisePush(event.target.value, [
        ...checked,
      ]);
      setChecked(finalCheckboxes);
      dispatchForm({
        type: 'STATE_PROPERTIES',
        payload: { value: finalCheckboxes },
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
    <div className='apartment-props-container' onClick={checkboxHandler}>
      <label>מאפייני דירה</label>
      <div className='props-container'>
        <SearchCheckboxAndLabel
          value='numberOfParkingPlaces'
          checked={checked.includes('numberOfParkingPlaces')}
          label='חניה'
        />
        <SearchCheckboxAndLabel
          value='hasElevator'
          checked={checked.includes('hasElevator')}
          label='מעלית'
        />
        <SearchCheckboxAndLabel
          value='hasAC'
          checked={checked.includes('hasAC')}
          label='מיזוג'
        />
        <SearchCheckboxAndLabel
          value='numberOfPorches'
          checked={checked.includes('numberOfPorches')}
          label='מרפסת'
        />
        <SearchCheckboxAndLabel
          value='hasMamad'
          checked={checked.includes('hasMamad')}
          label='ממ"ד'
        />
        <SearchCheckboxAndLabel
          value='hasBars'
          checked={checked.includes('hasBars')}
          label='סורגים'
        />
        <SearchCheckboxAndLabel
          value='hasWarehouse'
          checked={checked.includes('hasWarehouse')}
          label='מחסן'
        />
        <SearchCheckboxAndLabel
          value='hasDisabilityAccess'
          checked={checked.includes('hasDisabilityAccess')}
          label='גישה לנכים'
        />
        <SearchCheckboxAndLabel
          value='isRenovated'
          checked={checked.includes('isRenovated')}
          label='משופצת'
        />
        <SearchCheckboxAndLabel
          value='hasFurniture'
          checked={checked.includes('hasFurniture')}
          label='מרוהטת'
        />
        <SearchCheckboxAndLabel
          // value='exclusive'
          // checked={checked.includes('exclusive')}
          label='בבלעדיות'
        />
      </div>
    </div>
  );
};

export default ApartmentProps;
