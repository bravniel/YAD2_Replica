import React, { useContext, useState } from 'react';
import { changeInput } from '../../../../../../actions/newAdActions';
import { NewAdContext } from '../../PublishRealEstate';
import AssetDescriptionProgressBar from './assetDescriptionProgressBar/AssetDescriptionProgressBar';

export default function AssetDescription() {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);
  const [assetDescriptionTextareaLength, setAssetDescriptionTextareaLength] =
    useState('0');
  const [
    furnitureDescriptionTextareaLength,
    setFurnitureDescriptionTextareaLength,
  ] = useState('0');
  
  const handleOnChange = (e, name) => {
    newAdDispatch(changeInput(name, e.target.value,'description'));
    const length = e.target.value.length;
    name == 'furnitureDescription'
      ? setFurnitureDescriptionTextareaLength(length)
      : setAssetDescriptionTextareaLength(length);
  };

  return (
    <div className='asset-description'>
      <span>מה חשוב לך שידעו על הנכס?</span>
      {newAdState['hasFurniture'] && (
        <>
          <span className='asset-description-title'>פרוט הריהוט</span>
          <div className='asset-description-progress-bar'>
            <AssetDescriptionProgressBar
              length={furnitureDescriptionTextareaLength}
            />
            {'200 / ' + furnitureDescriptionTextareaLength}
          </div>
          <textarea
            name='furnitureDescription'
            rows={7}
            maxLength={200}
            onChange={(e) =>
              handleOnChange(e, 'furnitureDescription')
            }></textarea>
        </>
      )}
      <span className='asset-description-title'>פרוט הנכס</span>
      <div className='asset-description-progress-bar'>
        <AssetDescriptionProgressBar length={assetDescriptionTextareaLength} />
        {'400 / ' + assetDescriptionTextareaLength}
      </div>
      <textarea
        placeholder="זה המקום לתאר את הפרטים הבולטים, למשל, האם נערך שיפוץ במבנה, מה שופץ, כיווני אוויר, האווירה ברחוב וכו'"
        name='assetDescription'
        rows={7}
        maxLength={400}
        onChange={(e) => handleOnChange(e, 'assetDescription')}></textarea>
      <span className='asset-description-note'>
        אין צורך להוסיף מספר טלפון כחלק מהתיאור, בהמשך התהליך יש אזור מסודר לזה
      </span>
    </div>
  );
}
