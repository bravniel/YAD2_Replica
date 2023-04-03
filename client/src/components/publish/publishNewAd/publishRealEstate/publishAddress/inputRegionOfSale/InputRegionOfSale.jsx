import React, { useContext } from 'react';
import LabelAndTextInput from '../../../newAdCustomInputs/labelAndTextInput/LabelAndTextInput';
import { NewAdContext } from '../../PublishRealEstate';

export default function InputRegionOfSale() {
  const { newAdState } = useContext(NewAdContext);
  return (
    <>
      <LabelAndTextInput
        disabled={true}
        name={'regionOfSale'}
        label='אזור מכירה'
        placeholder={
          newAdState['settlement']?.value.length>0
            ? `אזור ${newAdState['settlement']?.value} והסביבה`
            : ''
        }
      />
      <span className='span'>המידע הזה מגיע מגוף ממשלתי, ולא ניתן לשינוי</span>
    </>
  );
}
