import React, { useEffect, useRef, useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import PropertyDropbox from './proprety-dropbox/PropertyDropbox';

const SearchByPropertyKind = ({ dispatchForm, form }) => {
  const [dropbox, setDropbox] = useState(false);
  const ref = useRef();

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
      <label>סוג הנכס</label>
      <div className='property-kind' onClick={() => setDropbox(!dropbox)}>
        <span>
          {form.values.apartments.length +
            form.values.houses.length +
            form.values.others.length ===
          0
            ? 'בחרו סוגי נכסים'
            : form.values.apartments.length +
              form.values.houses.length +
              form.values.others.length +
              ' סוגי נכסים '}
        </span>
        {dropbox ? (
          <RiArrowDropUpLine className='arrow-icon' />
        ) : (
          <RiArrowDropDownLine className='arrow-icon' />
        )}
      </div>
      {dropbox && (
        <PropertyDropbox
          dispatchForm={dispatchForm}
          form={form}
          closeDropbox={setDropbox}
        />
      )}
    </div>
  );
};

export default SearchByPropertyKind;
