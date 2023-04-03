import { BsShop } from 'react-icons/bs'; // Shop
import { GrUserWorker } from 'react-icons/gr'; // Worker
import { FaRegBuilding } from 'react-icons/fa'; // Building
import { HiOutlineDesktopComputer } from 'react-icons/hi'; // Computer
import PublishSectionItem from '../publishSectionItem/PublishSectionItem';

const PublishMiddleSection = ({ isDisplayText }) => {
  const categoryItems = [
    {
      icon: BsShop,
      title: 'עסקים למכירה',
      subTitle: 'הייטק,בתי קפה וכו',
    },
    {
      icon: GrUserWorker,
      title: 'בעלי מקצוע',
      subTitle: 'הובלות, מוסכים, שיפוצים',
    },
    {
      icon: FaRegBuilding,
      title: 'נדל"ן מסחרי',
      subTitle: 'מחסנים, קליניקות, משרדים',
    },
    {
      icon: HiOutlineDesktopComputer,
      title: 'סלולר',
      subTitle: 'מכשירים, אביזרים ושעונים חכמים',
    },
  ];

  return (
    <div className='publish-middle-section'>
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

export default PublishMiddleSection;
