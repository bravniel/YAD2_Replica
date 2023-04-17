import { SlHome } from 'react-icons/sl';
import { TfiCar } from 'react-icons/tfi';
import { TbSofa, TbGavel } from 'react-icons/tb';
import { RiUserSearchLine } from 'react-icons/ri';
import { SlBriefcase, SlGraduation } from 'react-icons/sl';
import { MdPets } from 'react-icons/md';
import { TiCalculator } from 'react-icons/ti';
import doron_orange from '../assets/icons/doron_orange.png';
import yad1_logo from '../assets/icons/yad1_logo.svg';
import yadata_logo_black from '../assets/icons/yadata_logo_black.svg';
import header_jeep from '../assets/icons/header_jeep.svg';
import header_car_index from '../assets/icons/header_car_index.svg';
import header_car_price from '../assets/icons/header_car_price.svg';
import { GiPalmTree } from 'react-icons/gi';
import validator from 'validator';

export const pageContent = [
  // realestate:
  {
    category: 'realestate',
    title: 'נדל"ן',
    sideIcon: SlHome,
    path: '/realestate/forsell',
    rightItems: [
      {
        title: 'דירות למכירה',
        path: '/realestate/forsell',
      },
      {
        title: 'דירות להשכרה',
        path: '/realestate/rent',
      },
      {
        title: 'שותפים',
        path: '/realestate/roommates',
      },
      {
        title: 'מסחרי',
        path: '/realestate/commercial',
      },
      {
        title: 'חיפוש על גבי מפה',
        path: '/realestate/4',
      },
      {
        title: 'יד1 דירות חדשות',
        path: '/realestate/5',
      },
    ],
    leftItems: [
      {
        title: 'דורון - העוזר האישי',
        path: '/realestate/6',
        subNavBarSrc: doron_orange,
        dropdownSrc: doron_orange,
      },
      {
        title: 'כונס נכסים',
        path: '/realestate/7',
        subNavBarIcon: TbGavel,
        dropdownIcon: TbGavel,
      },
      {
        title: 'הערכת שווי נכס',
        path: '/realestate/8',
        subNavBarSrc: yadata_logo_black,
        dropdownIcon: TiCalculator,
      },
      {
        title: 'משרדי תיווך בישראל',
        path: '/realestate/9',
        dropdownIcon: SlHome,
      },
    ],
  },
  // vehicle:
  {
    category: 'vehicle',
    title: 'רכב',
    sideIcon: TfiCar,
    path: '/vehicle/1',
    rightItems: [
      {
        title: 'כל הרכבים',
        path: '/vehicle/1',
      },
      {
        title: 'מסחרי',
        path: '/vehicle/2',
      },
      {
        title: "ג'יפים",
        path: '/vehicle/3',
      },
      {
        title: 'אופנועים',
        path: '/vehicle/4',
      },
      {
        title: 'קטנועים',
        path: '/vehicle/5',
      },
      {
        title: 'מיוחדים',
        path: '/vehicle/6',
      },
      {
        title: 'אביזרים',
        path: '/vehicle/7',
      },
      {
        title: 'משאיות',
        path: '/vehicle/8',
      },
      {
        title: 'כלי שיט',
        path: '/vehicle/9',
      },
    ],
    leftItems: [
      {
        title: 'קטלוג רכבים',
        path: '/vehicle/10',
        dropdownSrc: header_jeep,
      },
      {
        title: 'מחירון רכב',
        path: '/vehicle/11',
        dropdownSrc: header_car_price,
      },
      {
        title: 'מכרזים וכינוס',
        path: '/vehicle/12',
        dropdownSrc: header_car_index,
      },
      {
        title: 'מימון רכב',
        path: '/vehicle/13',
        dropdownIcon: TiCalculator,
      },
    ],
  },
  // secondHand:
  {
    category: 'secondHand',
    title: 'יד שנייה',
    sideIcon: TbSofa,
    path: '/secondHand/1',
    rightItems: [
      {
        title: 'כל המוצרים',
        path: '/secondHand/2',
      },
      {
        title: 'מוצרי חשמל',
        path: '/secondHand/3',
      },
      {
        title: 'ריהוט',
        path: '/secondHand/4',
      },
      {
        title: 'עסקים למכירה',
        path: '/secondHand/5',
      },
      {
        title: 'ספורט',
        path: '/secondHand/6',
      },
      {
        title: 'סלולרי',
        path: '/secondHand/7',
      },
      {
        title: 'לתינוק ולילד',
        path: '/secondHand/8',
      },
      {
        title: '!הכל בחינם',
        path: '/secondHand/9',
      },
    ],
    leftItems: [
      {
        title: 'קונסולות משחק',
        path: '/secondHand/10',
      },
      {
        title: 'מחשבים וציוד נלווה',
        path: '/secondHand/11',
      },
      {
        title: 'לגינה',
        path: '/secondHand/12',
      },
      {
        title: 'אופנה וטיפוח',
        path: '/secondHand/13',
      },
    ],
  },
  // neededIL:
  {
    category: 'neededIL',
    title: 'IL דרושים',
    sideIcon: RiUserSearchLine,
    path: '/neededIL/1',
    rightItems: [
      {
        title: 'חיפוש עבודה',
        path: '/neededIL/1',
      },
      {
        title: 'פרסום משרות',
        path: '/neededIL/2',
      },
      {
        title: 'כתיבת קורות חיים',
        path: '/neededIL/3',
      },
      {
        title: 'אודות התחברות',
        path: '/neededIL/4',
      },
      {
        title: 'דרושים הייטק',
        path: '/neededIL/5',
      },
      {
        title: 'דרושים סטודנטים',
        path: '/neededIL/6',
      },
      {
        title: 'מגזין הקריירה',
        path: '/neededIL/7',
      },
      {
        title: 'כספים',
        path: '/neededIL/8',
      },
      {
        title: 'מכירות',
        path: '/neededIL/9',
      },
      {
        title: 'שירות לקוחות',
        path: '/neededIL/10',
      },
    ],
    leftItems: [
      {
        title: 'אדמיניסטרציה',
        path: '/neededIL/11',
      },
      {
        title: 'מהנדסים',
        path: '/neededIL/12',
      },
      {
        title: 'תחבורה',
        path: '/neededIL/13',
      },
      {
        title: 'מסעדנות/תיירות',
        path: '/neededIL/14',
      },
      {
        title: 'אבטחה',
        path: '/neededIL/15',
      },
      {
        title: 'בריאות',
        path: '/neededIL/16',
      },
      {
        title: 'בעלי מקצוע',
        path: '/neededIL/17',
      },
      {
        title: 'הדרכה/הוראה',
        path: '/neededIL/18',
      },
      {
        title: 'שיווק',
        path: '/neededIL/19',
      },
      {
        title: 'לתחומים נוספים',
        path: '/neededIL/20',
      },
    ],
  },
  // businessesForSale:
  {
    category: 'businessesForSale',
    title: 'עסקים למכירה',
    sideIcon: SlBriefcase,
    path: '/businessesForSale/1',
    rightItems: [
      {
        title: 'בתי קפה ומסעדות',
        path: '/businessesForSale/1',
      },
      {
        title: 'זכיינות',
        path: '/businessesForSale/2',
      },
      {
        title: 'קווי חלוקה',
        path: '/businessesForSale/3',
      },
      {
        title: 'הזדמנויות עסקיות',
        path: '/businessesForSale/4',
      },
      {
        title: 'מינימרקטים וסופרמרקטים',
        path: '/businessesForSale/5',
      },
      {
        title: 'קיוסקים ופיצוציות',
        path: '/businessesForSale/6',
      },
      {
        title: 'לכל העסקים',
        path: '/businessesForSale/7',
      },
    ],
  },
  // pets:
  {
    category: 'pets',
    title: 'חיות מחמד',
    sideIcon: MdPets,
    path: '/pets/1',
    rightItems: [
      {
        title: 'כלבים',
        path: '/pets/1',
      },
      {
        title: 'חתולים',
        path: '/pets/2',
      },
      {
        title: 'תוכים ובעלי כנף',
        path: '/pets/3',
      },
      {
        title: 'דגים',
        path: '/pets/4',
      },
      {
        title: 'זוחלים',
        path: '/pets/5',
      },
      {
        title: 'מכרסמים',
        path: '/pets/6',
      },
      {
        title: 'סוסים',
        path: '/pets/7',
      },
      {
        title: 'תרנגולים',
        path: '/pets/8',
      },
      {
        title: 'חיות משק',
        path: '/pets/9',
      },
      {
        title: 'חמוסים',
        path: '/pets/10',
      },
    ],
  },
  // professionals:
  {
    category: 'professionals',
    title: 'בעלי מקצוע',
    path: '/professionals/1',
    rightItems: [
      {
        title: 'מכוני בדיקה ורישוי לרכב',
        path: '/professionals/1',
      },
      {
        title: 'רחיצת רכב',
        path: '/professionals/2',
      },
      {
        title: 'שמאי מקרקעין',
        path: '/professionals/3',
      },
      {
        title: 'חומרי בניין',
        path: '/professionals/4',
      },
      {
        title: 'אינסטלטור',
        path: '/professionals/5',
      },
      {
        title: 'חשמלאים',
        path: '/professionals/6',
      },
      {
        title: 'שיפוצים',
        path: '/professionals/7',
      },
      {
        title: 'הובלות',
        path: '/professionals/8',
      },
      {
        title: 'רהיטים',
        path: '/professionals/9',
      },
      {
        title: 'חברות ניקיון ואחזקה',
        path: '/professionals/10',
      },
      {
        title: 'לכל בעלי המקצוע',
        path: '/professionals/11',
      },
    ],
  },
  // more:
  {
    category: 'more',
    title: '...עוד',
    path: '/more/1',
    rightItems: [
      {
        title: 'תיירות ונופש',
        path: '/more/1',
        sideIcon: GiPalmTree,
      },
      {
        title: 'לימודים',
        path: '/more/2',
        sideIcon: SlGraduation,
      },
      {
        title: 'מגזין יד2',
        path: '/more/3',
      },
    ],
  },
];

const phoneRegex = /^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

const currentDate = new Date();

const minNewDate = new Date(
  currentDate.getFullYear() - 100,
  currentDate.getMonth(),
  currentDate.getDate()
);

export const maxDate = new Date(
  currentDate.getFullYear() - 18,
  currentDate.getMonth(),
  currentDate.getDate()
);

export const signInValidator = (value) => {
  return value.length > 0;
};
export const textValidator = (value) => {
  return value.length > 1;
};
export const phoneNumberValidator = (value) => {
  return phoneRegex.test(value);
};
export const emailValidator = (value) => {
  return !!validator.isEmail(value);
};
export const passwordValidator = (value) => {
  return passwordRegex.test(value);
};

export const isBirthDateValid = (value) => {
  const newValue = new Date(value);
  return (
    newValue.getTime() <= maxDate.getTime() &&
    newValue.getTime() >= minNewDate.getTime()
  );
};

export const inputProperties = {
  firstName: {
    type: 'text',
    label: 'שם פרטי*',
    placeholder: 'הקלדת שם פרטי',
    validationFunc: textValidator,
    noValueMessage: 'נבקש למלא את השם',
    invalidValueMessage: 'שם עם אות אחת? זה שיא גינס',
  },
  lastName: {
    type: 'text',
    label: 'שם משפחה*',
    placeholder: 'הקלדת שם משפחה',
    validationFunc: textValidator,
    noValueMessage: 'נבקש למלא את שם המשפחה',
    invalidValueMessage: 'שם משפחה עם אות אחת? זה שיא גינס',
  },
  phoneNumber: {
    type: 'text',
    label: 'מספר טלפון*',
    placeholder: 'הקלדת מספר נייד',
    validationFunc: phoneNumberValidator,
    noValueMessage: 'היי, לא לשכוח למלא מספר טלפון',
    invalidValueMessage: 'נבקש את מספר הנייד שלך',
  },
  email: {
    type: 'text',
    label: 'מייל',
    placeholder: 'yourmail@gmail.com',
    validationFunc: emailValidator,
    noValueMessage: 'לא לשכוח את המייל',
    invalidValueMessage: 'משהו לא תקין במייל, אולי התפספס @ ?',
  },
  password: {
    type: 'password',
    label: 'סיסמה',
    placeholder: 'הקלדת סיסמה',
    validationFunc: passwordValidator,
    noValueMessage: 'לא לשכוח להזין סיסמה',
    invalidValueMessage:
      'נבקש סיסמה באורך 8-20 תווים ושהסיסמה תכלול אותיות באנגלית וספרות',
  },
  repeatPassword: {
    type: 'password',
    label: 'אימות סיסמה',
    placeholder: 'הקלדת סיסמה',
    invalidValueMessage: 'הסיסמאות לא זהות',
  },
  siteRegulations: {
    type: 'checkbox',
    label: `קראתי ואישרתי את תקנון האתר*`,
    required: true,
    invalidValueMessage: 'היי, לא לשכוח את התקנון',
  },
  advertisingMailing: {
    type: 'checkbox',
    label: 'אני רוצה לקבל דיוור פרסומי כללי מיד2',
    required: false,
  },
};
