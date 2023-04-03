import React, { useContext } from 'react';
import { BsCameraVideo } from 'react-icons/bs';
import { IoAdd } from 'react-icons/io5';
import {
  toggleIsSectionValid,
  toggleShowSection,
} from '../../../../../actions/newAdActions';
import NewAdStepButtons from '../../newAdStepsButtons/NewAdStepsButtons';
import NewAdStepTopRow from '../../newAdStepTopRow/NewAdStepTopRow';
import { NewAdContext } from '../PublishRealEstate';
import FileUploadBox from './fileUploadBox/FileUploadBox';

export default function PublishPicturesVideos({ stepNumber, stepTitle }) {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);
  const isSectionShown = newAdState['section' + stepNumber]?.isShown;

  const FileUploadBoxContent = [];
  for (let i = 0; i < 9; i++) {
    FileUploadBoxContent.push(
      <FileUploadBox key={`image-${i}`} icon={IoAdd} text={'העלאת תמונות'} />
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    newAdDispatch(toggleShowSection(5));
    newAdDispatch(toggleShowSection(6));
    newAdDispatch(toggleIsSectionValid(5, true));
  };

  return (
    <div className={isSectionShown ? 'new-ad-step' : 'new-ad-step inactive'}>
      <NewAdStepTopRow stepNumber={stepNumber} stepTitle={stepTitle} />
      {isSectionShown && (
        <div className='new-ad-form'>
          <form id='pictures-and-videos-form' onSubmit={handleSubmit}>
            <div>
              <p>ידעת שמודעות עם תמונות ברורות מקבלות פי 10 יותר פניות?</p>
              <p>
                לא להסס להעלות לפה תמונות (אפשר עד 10 + וידאו) ולהבליט את הצדדים
                הטובים ביותר של הנכס
              </p>
            </div>

            <div className='upload-container'>
              <FileUploadBox icon={BsCameraVideo} text={'העלאת סרטון'} />

              <div className='main-photo-upload-container'>
                <span className='main-photo-title'>תמונה ראשית</span>
                <FileUploadBox
                  icon={IoAdd}
                  text={'העלאת תמונות'}
                  isDisabled={false}></FileUploadBox>
              </div>
            </div>
            <div className='horizontal-line'></div>
            <span className='container-title'>תמונות שיופיעו בגוף המודעה</span>
            <div className='upload-container'>{FileUploadBoxContent}</div>
            <NewAdStepButtons stepNumber={stepNumber} />
          </form>
        </div>
      )}
    </div>
  );
}
