import React, { useContext } from 'react';
import LabelAndTextInput from '../../../newAdCustomInputs/labelAndTextInput/LabelAndTextInput';
import { NewAdContext } from '../../PublishRealEstate';

export default function InputNeighborhood() {
    const { newAdState } = useContext(NewAdContext);

    return (
      <>
        <LabelAndTextInput
          // isInvalidityShown={isInvalidityShown}
          disabled={true}
          name={'neighborhood'}
          label='שכונה'
          placeholder={
            newAdState['settlement']? newAdState['settlement']?.value : ''
          }
        />
        <span className='span'>
          המידע הזה מגיע מגוף ממשלתי, ולא ניתן לשינוי
        </span>
      </>
    );
}
