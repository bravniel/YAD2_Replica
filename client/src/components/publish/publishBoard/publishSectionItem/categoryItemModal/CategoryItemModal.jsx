import React from 'react';
import { useNavigate } from 'react-router';
import { VscChromeClose } from 'react-icons/vsc'; // X button
import { FcHome } from 'react-icons/fc'; // House

const CategoryItemModal = ({ closeModal }) => {
  const navigate = useNavigate();

  return (
    <div className='category-modal'>
      <div className='category-modal-container'>
        <VscChromeClose className='publish-close-modal' onClick={closeModal} />
        <FcHome className='publish-house-icon' />
        <div className='modal-title'>איזה סוג מודעה תרצו לפרסם?</div>
        <div className='publish-kind-selection-container'>
          <button
            className='modal-kind-btn'
            onClick={() => navigate('/publish/realestate')}>
            פרטי
          </button>
          <button className='modal-kind-btn'>מתווך</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItemModal;
