import { BsCheck } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { TbCurrencyShekel } from 'react-icons/tb';

export const newAdTrackAttributes = [
  {
    type: 'בסיסי',
    attributes: [
      { icon: BsCheck, text: 'מודעה רגילה ללא הדגשה' },
      { icon: BsCheck, text: 'הקפצה ידנית כל 4 שעות' },
      { icon: IoClose, text: 'הקפצה אוטומטית פעם ביום', type: 'close' },
    ],
    price: { number: 'חינם' },
    priceSubTittle: '-',
  },
  {
    type: 'בולט במיוחד',
    attributes: [
      { icon: BsCheck, text: 'מופיעה בצהוב מעל כולם', isBold: true },
      { icon: BsCheck, text: 'הקפצה ידנית כל 4 שעות' },
      { icon: BsCheck, text: 'הקפצה אוטומטית פעם ביום' },
      { icon: BsCheck, text: 'מקבלת הכי הרבה טלפונים' },
    ],
    price: { number: '259', icon: TbCurrencyShekel },
    priceSubTittle: 'עכשיו בתוקף חדש! 60 ימים',
  },
  {
    type: 'בולט',
    attributes: [
      { icon: BsCheck, text: 'מופיעה בצהוב מעל כולם' },
      { icon: BsCheck, text: 'הקפצה ידנית כל 4 שעות' },
      { icon: BsCheck, text: 'הקפצה אוטומטית פעם ביום' },
    ],
    price: { number: '199', icon: TbCurrencyShekel },
    priceSubTittle: '28 ימים',
  },
];
