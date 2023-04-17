import { GiAquarium, GiBeachBall } from 'react-icons/gi';
import { GiDesk } from 'react-icons/gi';
import { RiShirtLine } from 'react-icons/ri';
import { SlBriefcase } from 'react-icons/sl';
import PublishSectionItem from '../publishSectionItem/PublishSectionItem';
const PublishButtomSection = ({ isDisplayIcon }) => {
  const categoryItems = [
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
    <div className='publish-buttom-section'>
      {categoryItems.map((item, index) => {
        return (
          <PublishSectionItem
            key={index}
            icon={item.icon}
            title={item.title}
            isDisplayIcon={isDisplayIcon}
          />
        );
      })}
    </div>
  );
};

export default PublishButtomSection;
