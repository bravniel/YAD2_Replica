// UserPublishedAdsFilter
import React, { useState } from 'react';
import FilterSelectInput from './filterSelectInput/FilterSelectInput';

export default function UserPublishedAdsFilter() {
  const categoryList = {
    realEstate: 'נדל"ן',
    car: 'רכב',
    secondHand: 'יד שנייה',
    animals: 'בעלי חיים',
    tourisem: 'תיירות',
    studies: 'לימודים',
  };
  const statusList = {
    approvedAds: 'מודעות מאושרות',
    unapprovedAds: 'מודעות לא מאושרות',
    inactiveAds: 'מודעות לא פעילות',
    unvalidAds: 'מודעות שלא בתוקף',
    underReviewAds: 'מודעות בבדיקה',
    businessAds: 'מודעה עסקית',
    awaitingForPhoneCheck: 'ממתינה לבדיקה טלפונית',
    awaitingTheApprovalOfTheHIL: 'ממתין לאישור ההי"ל',
  };
  const [filterByCategory, setFilterByCategory] = useState([]);
  const [filterByStatus, setFilterByStatus] = useState([]);
  const [categorycheckedItems, setCategoryCheckedItems] = useState({});
  const [statuscheckedItems, setStatusCheckedItems] = useState({});

  return (
    <div className='user-published-ads-filter'>
      <span>סינון לפי:</span>
      <FilterSelectInput
        itemsList={categoryList}
        setFilterBy={setFilterByCategory}
        filterBy={filterByCategory}
        placeholder='קטגוריה'
        selectedPlaceholder='קטגוריות'
        checkedItems={categorycheckedItems}
        setCheckedItems={setCategoryCheckedItems}
      />
      <FilterSelectInput
        itemsList={statusList}
        setFilterBy={setFilterByStatus}
        filterBy={filterByStatus}
        placeholder='סטטוס'
        selectedPlaceholder='סטטוסים'
        checkedItems={statuscheckedItems}
        setCheckedItems={setStatusCheckedItems}
      />
    </div>
  );
}
