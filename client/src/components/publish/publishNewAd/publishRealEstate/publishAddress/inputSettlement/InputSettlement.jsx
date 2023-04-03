import React, { useContext, useEffect, useState } from 'react';
import { changeInput } from '../../../../../../actions/newAdActions';
import { getCityList } from '../../../../../../api/dataGovIL';
import ApiDropDownList from '../../../newAdCustomInputs/apiDropDownList/ApiDropDownList';
import LabelAndTextInput from '../../../newAdCustomInputs/labelAndTextInput/LabelAndTextInput';
import { NewAdContext } from '../../PublishRealEstate';

export default function InputSettlement({ isInvalidityShown }) {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);
  const [listResult, setListResult] = useState([]);
  const [value, setValue] = useState('');
  const getList = async () => {
    if (value.length > 1) {
      const res = await getCityList(value);
      setListResult(res);
    }
  };
  useEffect(() => {
    getList();
    newAdDispatch(changeInput('settlement', ''));
  }, [value]);

  return (
    <>
      <LabelAndTextInput
        isInvalidityShown={isInvalidityShown}
        name={'settlement'}
        label='ישוב*'
        setValue={setValue}
        value={value}>
        <ApiDropDownList listResult={listResult} type={'settlement'} />
      </LabelAndTextInput>
    </>
  );
}
