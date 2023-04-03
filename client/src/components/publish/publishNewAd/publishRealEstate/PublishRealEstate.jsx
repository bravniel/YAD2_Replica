import React, { createContext, useEffect, useReducer, useState } from 'react';
import { toggleInput } from '../../../../actions/newAdActions';

import {
  newAdInitialState,
  NewAdReducer,
} from '../../../../reducers/newAdReducer';
import PublishAddress from './publishAddress/PublishAddress';
import PublishCategory from './publishCategory/PublishCategory';
import PublishContact from './publishContact/PublishContact';
import PublishPicturesVideos from './publishPicturesVideos/PublishPicturesVideos';
import PublishPriceSizeDate from './publishPriceSizeDate/PublishPriceSizeDate';
import PublishProps from './publishProps/PublishProps';
import PublishTrack from './publishTrack/PublishTrack';

export const NewAdContext = createContext();

const PublishRealEstate = () => {
  const [newAdState, newAdDispatch] = useReducer(
    NewAdReducer,
    newAdInitialState
  );
  
  return (
    <NewAdContext.Provider value={{ newAdState, newAdDispatch }}>
      <div className='publish-realestate-container'>
        <PublishCategory stepNumber={1} stepTitle={'אני רוצה למכור נכס'} />
        <PublishAddress stepNumber={2} stepTitle={'כתובת הנכס'} />
        <PublishProps stepNumber={3} stepTitle={'על הנכס'} />
        <PublishPriceSizeDate
          stepNumber={4}
          stepTitle={'תשלומים, תאריכים ועוד'}
        />
        <PublishPicturesVideos stepNumber={5} stepTitle={'תמונות וסרטונים'} />
        <PublishContact stepNumber={6} stepTitle={'פרטים ליצירת קשר'} />
        <PublishTrack stepNumber={7} stepTitle={'בחירת מסלול'} />
      </div>
    </NewAdContext.Provider>
  );
};

export default PublishRealEstate;
