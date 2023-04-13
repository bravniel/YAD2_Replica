import { BsHeart } from 'react-icons/bs';
import { RxIdCard } from 'react-icons/rx';
import { RiPencilLine } from 'react-icons/ri';
import { BiSearch, BiInfoCircle } from 'react-icons/bi';
import { CiWarning } from 'react-icons/ci';
import {
  isBirthDateValid,
  maxDate,
  phoneNumberValidator,
  signInValidator,
} from './utils';

export const sideBarContent = [
  {
    title: 'המודעות שלי',
    sideIcon: RxIdCard,
    path: '/personal/my-ads',
  },
  {
    title: 'עדכון פרטים',
    sideIcon: RiPencilLine,
    path: '/personal/profile',
  },
  {
    title: 'מודעות שמורות',
    sideIcon: BsHeart,
    path: '/personal/favorites',
  },
  {
    title: 'חיפושים אחרונים',
    sideIcon: BiSearch,
    path: '/personal/latestsearches',
  },
  {
    title: 'הונאות ברשת',
    sideIcon: CiWarning,
    path: '/personal/fraud',
  },
  {
    title: 'טיפים ומידע',
    sideIcon: BiInfoCircle,
    path: '/personal/tips',
  },
];

export const editUserInputs = {
  personalData: [
    {
      label: 'שם פרטי*',
      name: 'FirstName',
      type: 'text',
      validationFunc: signInValidator,
      errorMessage: 'שם פרטי הוא שדה חובה',
    },
    {
      label: 'שם משפחה*',
      name: 'LastName',
      type: 'text',
      validationFunc: signInValidator,
      errorMessage: 'שם משפחה הוא שדה חובה',
    },
    {
      label: 'טלפון*',
      name: 'PhoneNumber',
      type: 'number',
      validationFunc: phoneNumberValidator,
      errorMessage: 'מספר טלפון הוא שדה חובה',
    },
    {
      label: 'תאריך לידה*',
      name: 'dateOfBirth',
      type: 'date',
      validationFunc: isBirthDateValid,
      errorMessage: `תאריך לידה צריך להיות נמוך מ-${maxDate
        .toISOString()
        .substring(0, 10)}`,
    },
  ],
  address: [
    {
      label: 'ישוב / עיר*',
      name: 'city',
      type: 'text',
      placeholder: 'הזינו טקסט',
      validationFunc: signInValidator,
      errorMessage: 'ישוב/עיר הוא שדה חובה',
    },
    {
      label: 'רחוב*',
      name: 'street',
      type: 'text',
      placeholder: 'הזינו טקסט',
      validationFunc: signInValidator,
      errorMessage: 'רחוב הוא שדה חובה',
    },
    {
      label: 'מספר בית',
      name: 'houseNumber',
      type: 'number',
      placeholder: 'הזינו טקסט',
      validationFunc: signInValidator,
      errorMessage: 'מספר בית הוא שדה חובה',
    },
  ],
};
