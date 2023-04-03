import React, { useContext } from 'react';
import { WindowContext } from '../../../context/WindowContext';
import PublishAllSection from './publishAllSection/PublishAllSection';
import PublishButtomSection from './publishButtomSection/PublishButtomSection';
import PublishMiddleSection from './publishMiddleSection/PublishMiddleSection';
import PublishTopSection from './publishTopSection/PublishTopSection';

export default function PublishBoard({}) {
  const { windowWidth } = useContext(WindowContext);
  return (
    <div className='publish-body'>
      <div className='publish-title'>אני רוצה לפרסם מודעה בלוח...</div>

      {windowWidth < 620 ? (
          <PublishAllSection isDisplayText={windowWidth > 620} />
      ) : (
        <div className='publish-body-wrappper'>
          <PublishTopSection isDisplayText={windowWidth > 620} />
          <PublishMiddleSection isDisplayText={windowWidth > 620} />
          <PublishButtomSection isDisplayIcon={windowWidth < 620} />
        </div>
      )}
    </div>
  );
}
