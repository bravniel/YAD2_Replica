import React, { useState } from 'react';
import CategoryItemModal from './categoryItemModal/CategoryItemModal';

export default function PublishSectionItem({
  icon,
  title,
  subTitle,
  isDisplayIcon = true,
  isDisplayText,
}) {
  const [itemHover, setItemHover] = useState(false);
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    if (title === 'נדל"ן') setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <div
        className='publish-section-item'
        onMouseOver={() => setItemHover(true)}
        onMouseLeave={() => setItemHover(false)}
        onClick={modalHandler}>
        {isDisplayIcon &&
          React.createElement(icon, { className: 'publish-section-icon' })}
        <div className='publish-section-title'>{title}</div>
        {isDisplayText &&
          (subTitle && itemHover ? (
            <button className='start-btn'>מתחילים</button>
          ) : (
            <div className='publish-section-subTitle'>{subTitle}</div>
          ))}
      </div>
      {modal && <CategoryItemModal closeModal={closeModal} />}
    </>
  );
}
