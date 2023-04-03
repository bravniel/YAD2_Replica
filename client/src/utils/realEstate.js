import { AiOutlineFormatPainter } from 'react-icons/ai';
import { BiBox, BiCabinet, BiCube } from 'react-icons/bi';
import { GiKitchenTap, GiSolarPower } from 'react-icons/gi';
import { GrWheelchair } from 'react-icons/gr';
import { IoSnow } from 'react-icons/io5';
import { MdGridOn } from 'react-icons/md';
import { TbElevator } from 'react-icons/tb';
export const assetAttributes = [
  {
    name: 'hasAC',
    text: 'מיזוג',
    icon: IoSnow,
    shouldInputShow: true,
  },
  {
    name: 'hasMamad',
    text: 'ממ"ד',
    icon: BiCube,
    shouldInputShow: true,
  },
  { name: 'hasWarehouse', text: 'מחסן', icon: BiBox },
  {
    name: 'hasFurniture',
    text: 'ריהוט',
    icon: BiCabinet,
    shouldInputShow: true,
  },
  { name: 'hasDisabilityAccess', text: 'גישה לנכים', icon: GrWheelchair },
  {
    name: 'hasElevator',
    text: 'מעלית',
    icon: TbElevator,
    shouldInputShow: true,
  },
  {
    name: 'hasTadiran',
    text: 'מזגן תדיראן',
    icon: IoSnow,
    shouldInputShow: true,
  },
  {
    name: 'isRenovated',
    text: 'משופצת',
    icon: AiOutlineFormatPainter,
    shouldInputShow: true,
  },
  {
    name: 'hasKosherKitchen',
    text: 'מטבח כשר',
    icon: GiKitchenTap,
    shouldInputShow: true,
  },
  {
    name: 'hasSunHeatedWaterTank',
    text: 'דוד שמש',
    icon: GiSolarPower,
    shouldInputShow: true,
  },
  {
    name: 'hasBars',
    text: 'סורגים',
    icon: MdGridOn,
    shouldInputShow: true,
  },
];
export const assetProps = [
  { type: 'numberOfParkingPlaces', label: 'חניות' },
  { type: 'numberOfPorches', label: 'מרפסות' },
  { type: 'stateOfProperty', label: 'מצב הנכס' },
  { type: 'floorsInBuilding', label: 'קומות בבנין' },
  { type: 'entryDate', label: 'תאריך כניסה' },
  { type: 'builtSquareMeters', label: 'מ"ר בנוי' },
  { type: 'isOnStilts', label: 'על עמודים' },
];
