import React, { useContext, useEffect, useState } from 'react';
import { changeInput } from '../../../../../../actions/newAdActions';
import { getStreetList } from '../../../../../../api/dataGovIL';
import ApiDropDownList from '../../../newAdCustomInputs/apiDropDownList/ApiDropDownList';
import LabelAndTextInput from '../../../newAdCustomInputs/labelAndTextInput/LabelAndTextInput';
import { NewAdContext } from '../../PublishRealEstate';

export default function InputStreet({ disabled, isInvalidityShown }) {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);
  const [value, setValue] = useState('');
    const [listResult, setListResult] = useState([]);
  const getList = async () => {
    if (value.length > 1) {
      const res = await getStreetList(
        newAdState['settlement'].value,
        value
      );
      setListResult(res);
    }
    console.log('listResult', listResult);
    console.log('value', value);
  };
  useEffect(() => {
    getList();
    newAdDispatch(changeInput('street', ''));
  }, [value]);
    return (
      <>
        <LabelAndTextInput
          isInvalidityShown={isInvalidityShown}
          disabled={disabled}
          name={'street'}
          label='רחוב*'
          placeholder='הכנסת שם הרחוב'
                setValue={setValue}
            value={value}>
          <ApiDropDownList listResult={listResult} type={'street'} />
        </LabelAndTextInput>

        <span className='span'>
          המידע הזה מגיע מגוף ממשלתי, אם הרחוב שלך לא מופיע, מומלץ לבחור רחוב
          קרוב אליך
        </span>

        <span className={disabled ? 'disabled span orange' : 'span orange'}>
          לא מצאת את הרחוב?
        </span>

        {!disabled && isInvalidityShown && (
          <span className='invalid-message'>יש לבחור רחוב מתוך הרשימה</span>
        )}
      </>
    );
}
