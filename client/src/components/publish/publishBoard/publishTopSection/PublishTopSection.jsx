import { GiFamilyHouse } from 'react-icons/gi'; // House
import { IoCarSport } from 'react-icons/io5'; // Car
import { FaCouch } from 'react-icons/fa'; // Couch
import PublishSectionItem from '../publishSectionItem/PublishSectionItem';
const PublishTopSection = ({ isDisplayText }) => {
  const categoryItems = [
    {
      icon: GiFamilyHouse,
      title: 'נדל"ן',
      subTitle: 'מכירה,השכרה,מסחרי',
    },
    {
      icon: IoCarSport,
      title: 'כלי רכב',
      subTitle: 'כלי רכב, דו גלגלי, כלי שיט, מיוחדים',
    },
    {
      icon: FaCouch,
      title: 'יד שניה',
      subTitle: 'לבית לגינה ולמשרד, חשמל, ספורט פנאי ושונות',
    },
  ];

  return (
    <div className='publish-top-section'>
      {categoryItems.map((item, index) => {
        return (
          <PublishSectionItem
            key={index}
            icon={item.icon}
            title={item.title}
            subTitle={item.subTitle}
            isDisplayText={isDisplayText}
          />
        );
      })}
    </div>
  );
};

export default PublishTopSection;
