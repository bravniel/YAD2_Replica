import { useEffect, useRef, useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import RoomsDropbox from './rooms-dropbox/RoomsDropbox';

const Rooms = ({ dispatchForm }) => {
  const ref = useRef();
  const [dropbox, setDropbox] = useState(false);
  const [rooms, setRooms] = useState({ min: '', max: '' });

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
    <div className='property-kind-container' ref={ref}>
      <label>חדרים</label>
      <div className='property-kind' onClick={() => setDropbox(!dropbox)}>
        <span>
          {rooms.min === '' && rooms.max === ''
            ? 'חדרים'
            : (rooms.min ? rooms.min : 'עד') +
              ' - ' +
              (rooms.max ? rooms.max : 'הכל')}
        </span>
        {dropbox ? (
          <RiArrowDropUpLine className='arrow-icon' />
        ) : (
          <RiArrowDropDownLine className='arrow-icon' />
        )}
      </div>
      {dropbox && (
        <RoomsDropbox
          rooms={rooms}
          setRooms={setRooms}
          dispatchForm={dispatchForm}
        />
      )}
    </div>
  );
};

export default Rooms;
