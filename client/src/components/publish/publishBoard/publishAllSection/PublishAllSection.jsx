import { GiAquarium, GiBeachBall } from 'react-icons/gi';
import { GiDesk } from 'react-icons/gi';
import { RiShirtLine } from 'react-icons/ri';
import { SlBriefcase } from 'react-icons/sl';
import { GiFamilyHouse } from 'react-icons/gi';
import { IoCarSport } from 'react-icons/io5';
import { FaCouch } from 'react-icons/fa';
import { BsShop } from 'react-icons/bs'; // Shop
import { GrUserWorker } from 'react-icons/gr'; // Worker
import { FaRegBuilding } from 'react-icons/fa'; // Building
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import PublishSectionItem from '../publishSectionItem/PublishSectionItem';
const PublishAllSection = ({ isDisplayText }) => {
  const categoryItems = [
    {
      icon: GiFamilyHouse,
      title: 'נדל"ן',
    },
    {
      icon: IoCarSport,
      title: 'כלי רכב',
    },
    {
      icon: FaCouch,
      title: 'יד שניה',
    },
    {
      icon: BsShop,
      title: 'עסקים למכירה',
    },
    {
      icon: GrUserWorker,
      title: 'בעלי מקצוע',
    },
    {
      icon: FaRegBuilding,
      title: 'נדל"ן מסחרי',
    },
    {
      icon: HiOutlineDesktopComputer,
      title: 'סלולר',
    },
    {
      icon: GiDesk,
      title: 'ריהוט',
    },
    {
      icon: RiShirtLine,
      title: 'אופנה וטיפוח',
    },
    {
      icon: GiAquarium,
      title: 'חיות מחמד',
    },
    {
      icon: GiBeachBall,
      title: 'לתינוק ולילד',
    },
    {
      icon: SlBriefcase,
      title: 'דרושים',
    },
  ];

  return (
    <div className='publish-all-section'>
      {categoryItems.map((item, index) => {
        return (
          <PublishSectionItem
            key={index}
            icon={item.icon}
            title={item.title}
            isDisplayText={isDisplayText}
          />
        );
      })}
    </div>
  );
};

export default PublishAllSection;
