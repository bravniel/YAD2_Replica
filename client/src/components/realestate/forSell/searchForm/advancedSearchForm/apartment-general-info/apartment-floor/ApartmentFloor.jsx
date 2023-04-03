import { useState, useEffect, useRef } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import FloorDropbox from './floor-dropbox/FloorDropbox';

const ApartmentFloor = ({ dispatchForm, floorRange, valid }) => {
  const ref = useRef();
  const [dropbox, setDropbox] = useState({ start: false, end: false });
  const openStartDropboxHandler = () => setDropbox({ start: true, end: false });
  const openEndDropboxHandler = () => setDropbox({ start: false, end: true });
  const closeDropbox = () => setDropbox({ start: false, end: false });
  const [floors, setFloors] = useState({ start: '', end: '' });

  useEffect(() => {
    setFloors(floorRange.value);
  }, [floorRange.value]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (dropbox && ref.current && !ref.current.contains(e.target)) {
        setDropbox({ start: false, end: false });
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [dropbox]);

  return (
    <div className='apartment-floor-container'>
      <label>קומה</label>
      <div className='floor-input-container' ref={ref}>
        <div>
          <input placeholder={floors.start ? floors.start : 'מ-'} />
          {dropbox.start ? (
            <RiArrowDropUpLine
              className='floor-input-arrow-icon'
              onClick={closeDropbox}
            />
          ) : (
            <RiArrowDropDownLine
              className='floor-input-arrow-icon'
              onClick={openStartDropboxHandler}
            />
          )}
          {dropbox.start && (
            <FloorDropbox
              floorState='min'
              dispatchForm={dispatchForm}
              floors={floors}
              setDropbox={setDropbox}
            />
          )}
        </div>
        <div>
          <input placeholder={floors.end ? floors.end : 'עד-'} />
          {dropbox.end ? (
            <RiArrowDropUpLine
              className='floor-input-arrow-icon'
              onClick={closeDropbox}
            />
          ) : (
            <RiArrowDropDownLine
              className='floor-input-arrow-icon'
              onClick={openEndDropboxHandler}
            />
          )}
          {dropbox.end && (
            <FloorDropbox
              floorState='max'
              dispatchForm={dispatchForm}
              floors={floors}
              setDropbox={setDropbox}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ApartmentFloor;
