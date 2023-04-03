import { useEffect, useRef, useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import SortDropDownBox from './sortDropDownBox/SortDropDownBox';

const Sort = ({ setSort }) => {
  const ref = useRef();
  const [dropbox, setDropbox] = useState(false);
  const [sortBy, setSortBy] = useState({
    date: true,
    cheap: false,
    expensive: false,
  });

  const dropboxHandler = () => setDropbox(!dropbox);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (dropbox && ref.current && !ref.current.contains(e.target)) {
        setDropbox(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [dropbox]);

  return (
    <div className='sort-container' ref={ref}>
      <span>מיין לפי</span>
      <div className='sort' onClick={dropboxHandler}>
        <span>
          {sortBy.date
            ? 'לפי תאריך'
            : sortBy.cheap
            ? 'מחיר - מהזול ליקר'
            : 'מחיר - מהיקר לזול'}
        </span>

        {dropbox ? (
          <RiArrowDropUpLine className='sort-arrow-icon' />
        ) : (
          <RiArrowDropDownLine className='sort-arrow-icon' />
        )}
        {dropbox && (
          <SortDropDownBox
            sortBy={sortBy}
            setSort={setSort}
            setSortBy={setSortBy}
          />
        )}
      </div>
    </div>
  );
};

export default Sort;
