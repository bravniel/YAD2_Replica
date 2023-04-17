import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoEyeOutline } from 'react-icons/io5';

export default function DetailsOfActionsOnAd() {
  return (
    <div className='details-of-actions-on-ad'>
      <div className='ad-action-details'>
        <span className='action-number'>0</span>
        <span className='action-subtitle'>צפו במודעה</span>
        <div className='ad-action-details-icon views'>
          <IoEyeOutline />
        </div>
      </div>
      <div className='action-details-seperator'></div>
      <div className='ad-action-details'>
        <span className='action-number'>0</span>
        <span className='action-subtitle'>שמרו את המודעה</span>
        <div className='ad-action-details-icon liked'>
          <AiFillHeart />
        </div>
      </div>
      <div className='action-details-seperator'></div>
      <div className='ad-action-details'>
        <span className='action-number'>בקרוב</span>
        <span className='action-subtitle'>לחצו על מס' הטלפון</span>
        <div className='ad-action-details-icon call'>
          <BsFillTelephoneFill />
        </div>
      </div>
    </div>
  );
}
