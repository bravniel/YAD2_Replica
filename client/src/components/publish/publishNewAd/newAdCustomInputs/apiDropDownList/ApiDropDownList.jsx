import React, { useContext, useEffect, useState } from 'react';
import { changeInput } from '../../../../../actions/newAdActions';
import { NewAdContext } from '../../publishRealEstate/PublishRealEstate';

export default function ApiDropDownList({ type, listResult }) {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);
  const [isDropDownListOpen, setIsDropDownListOpen] = useState(false);

  useEffect(() => {
    listResult.length !== 0
      ? setIsDropDownListOpen(true)
      : setIsDropDownListOpen(false);
  }, [listResult]);
  return (
    isDropDownListOpen && (
      <div className='api-drop-down-list'>
        {listResult.map((item, index) => {
          return (
            <div
              key={index}
              className='api-drop-down-list-item'
              onClick={() => {
                newAdDispatch(
                  changeInput(
                    type,
                    type == 'settlement'
                      ? item['שם_ישוב'].trim()
                      : item['street_name'].trim()
                  )
                );
                setIsDropDownListOpen(false);
              }}>
              {type == 'settlement'
                ? item['שם_ישוב'].trim()
                : item['street_name'].trim()}
            </div>
          );
        })}
      </div>
    )
  );
}
