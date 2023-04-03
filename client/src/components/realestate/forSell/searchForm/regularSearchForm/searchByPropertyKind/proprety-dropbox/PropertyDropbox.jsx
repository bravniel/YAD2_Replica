import { useState, useEffect } from 'react';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import SearchCheckboxAndLabel from '../../../searchInputs/searchCheckboxAndLabel/SearchCheckboxAndLabel';
import ApartmentsDropbox from './apartments-dropbox/ApartmentsDropbox';
import HousesDropbox from './houses-dropbox/HousesDropbox';
import OtherDropbox from './other-dropbox/OtherDropbox';

const PropertyDropbox = ({ dispatchForm, form, closeDropbox }) => {
  const [dropbox, setDropbox] = useState({
    apartments: false,
    houses: false,
    others: false,
  });

  const apartmentsDropboxHandler = () =>
    setDropbox({
      apartments: !dropbox.apartments,
      houses: false,
      others: false,
    });
  const housesDropboxHandler = () =>
    setDropbox({ apartments: false, houses: !dropbox.houses, others: false });
  const othersDropboxHandler = () =>
    setDropbox({ apartments: false, houses: false, others: !dropbox.others });

  const [checkedCategory, setCheckedCategory] = useState({
    checkedAll: false,
    checkedApartments: false,
    checkedHouses: false,
    checkedOthers: false,
  });
  const [checked, setChecked] = useState({
    apartments: [],
    houses: [],
    others: [],
  });

  const categoryCheckHandler = (event) => {
    switch (event.target.value) {
      case 'all': {
        if (checkedCategory.checkedAll) {
          setCheckedCategory({
            checkedAll: false,
            checkedApartments: false,
            checkedHouses: false,
            checkedOthers: false,
          });
          dispatchForm({
            type: 'PROPERTY_KIND',
            payload: { value: [] },
            option: 'APARTMENTS',
          });
          dispatchForm({
            type: 'PROPERTY_KIND',
            payload: { value: [] },
            option: 'HOUSES',
          });
          dispatchForm({
            type: 'PROPERTY_KIND',
            payload: { value: [] },
            option: 'OTHERS',
          });
          break;
        } else {
          setCheckedCategory({
            checkedAll: true,
            checkedApartments: true,
            checkedHouses: true,
            checkedOthers: true,
          });
          dispatchForm({
            type: 'PROPERTY_KIND',
            payload: {
              value: [
                // 'apartment',
                // 'garden_apartment',
                // 'penthouse',
                // 'duplex',
                // 'holiday_apartment',
                // 'basement',
                // 'triplex',
                // 'studio',
                // 'studio_loft',
                'דירה',
                'דירת גן',
                'גג/פנטהאוז',
                'דופלקס',
                'דירת נופש',
                'מרתף/פרטר',
                'טריפלקס',
                'יחידת דיור',
                'סטודיו/לופט',
              ],
            },
            option: 'APARTMENTS',
          });
          dispatchForm({
            type: 'PROPERTY_KIND',
            payload: {
              value: [
                // 'private_house',
                // 'farm',
                "בית פרטי/קוטג'",
                'משק חקלאי/נחלה',
              ],
            },
            option: 'HOUSES',
          });
          dispatchForm({
            type: 'PROPERTY_KIND',
            payload: {
              value: [
                // 'fields',
                // 'nursing_home',
                // 'tower',
                // 'warehouse',
                // 'parking',
                // 'purchase_group',
                // 'general',
                'מגרשים',
                'דיור מוגן',
                'בניין מגורים',
                'מחסן',
                'חניה',
                "קב' רכישה",
                'כללי',
              ],
            },
            option: 'OTHERS',
          });
          break;
        }
      }
      case 'apartments': {
        if (checkedCategory.checkedApartments) {
          dispatchForm({
            type: 'PROPERTY_KIND',
            payload: { value: [] },
            option: 'APARTMENTS',
          });
          setCheckedCategory({ ...checkedCategory, checkedApartments: false });
          break;
        } else {
          dispatchForm({
            type: 'PROPERTY_KIND',
            payload: {
              value: [
                // 'apartment',
                // 'garden_apartment',
                // 'penthouse',
                // 'duplex',
                // 'holiday_apartment',
                // 'basement',
                // 'triplex',
                // 'studio',
                // 'studio_loft',
                'דירה',
                'דירת גן',
                'גג/פנטהאוז',
                'דופלקס',
                'דירת נופש',
                'מרתף/פרטר',
                'טריפלקס',
                'יחידת דיור',
                'סטודיו/לופט',
              ],
            },
            option: 'APARTMENTS',
          });
          setCheckedCategory({ ...checkedCategory, checkedApartments: true });
          break;
        }
      }
      case 'houses': {
        if (checkedCategory.checkedHouses) {
          dispatchForm({
            type: 'PROPERTY_KIND',
            payload: { value: [] },
            option: 'HOUSES',
          });
          setCheckedCategory({ ...checkedCategory, checkedHouses: false });
          break;
        } else {
          dispatchForm({
            type: 'PROPERTY_KIND',
            payload: {
              value: [
                // 'private_house',
                // 'farm',
                "בית פרטי/קוטג'",
                'משק חקלאי/נחלה',
              ],
            },
            option: 'HOUSES',
          });
          setCheckedCategory({ ...checkedCategory, checkedHouses: true });
          break;
        }
      }
      case 'others': {
        if (checkedCategory.checkedOthers) {
          dispatchForm({
            type: 'PROPERTY_KIND',
            payload: { value: [] },
            option: 'OTHERS',
          });
          setCheckedCategory({ ...checkedCategory, checkedOthers: false });
          break;
        } else {
          dispatchForm({
            type: 'PROPERTY_KIND',
            payload: {
              value: [
                // 'fields',
                // 'nursing_home',
                // 'tower',
                // 'warehouse',
                // 'parking',
                // 'purchase_group',
                // 'general',
                'מגרשים',
                'דיור מוגן',
                'בניין מגורים',
                'מחסן',
                'חניה',
                "קב' רכישה",
                'כללי',
              ],
            },
            option: 'OTHERS',
          });
          setCheckedCategory({ ...checkedCategory, checkedOthers: true });
          break;
        }
      }
    }
  };

  useEffect(() => {
    setChecked(form.values);
    const checkCata = {
      checkedAll: false,
      checkedApartments: false,
      checkedHouses: false,
      checkedOthers: false,
    };
    if (form.values.apartments.length === 9) checkCata.checkedApartments = true;
    if (form.values.houses.length === 2) checkCata.checkedHouses = true;
    if (form.values.others.length === 7) checkCata.checkedOthers = true;
    if (
      checkCata.checkedApartments &&
      checkCata.checkedHouses &&
      checkCata.checkedOthers
    )
      checkCata.checkedAll = true;
    setCheckedCategory(checkCata);
  }, [form.values]);

  return (
    <div className='property-dropbox'>
      <div
        style={{
          borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
          borderTop: 'none',
        }}
        onClick={categoryCheckHandler}>
        <SearchCheckboxAndLabel
          value='all'
          checked={checkedCategory.checkedAll}
          label='כל סוגי הנכסים'
        />
      </div>
      <div onClick={categoryCheckHandler}>
        <SearchCheckboxAndLabel
          value='apartments'
          checked={checkedCategory.checkedApartments}
          label='דירות'>
          {checked.apartments.length > 0 && (
            <span className='see-trough'>
              נבחרו {checked.apartments.length} סוגים
            </span>
          )}
        </SearchCheckboxAndLabel>
        {dropbox.apartments ? (
          <IoIosArrowUp
            className='dropbox-arrow-icon'
            onClick={apartmentsDropboxHandler}
          />
        ) : (
          <IoIosArrowDown
            className='dropbox-arrow-icon'
            onClick={apartmentsDropboxHandler}
          />
        )}
      </div>
      {dropbox.apartments && (
        <ApartmentsDropbox
          checkedAll={checkedCategory.checkedApartments}
          dispatchForm={dispatchForm}
          checked={checked.apartments}
        />
      )}
      <div onClick={categoryCheckHandler}>
        <SearchCheckboxAndLabel
          value='houses'
          checked={checkedCategory.checkedHouses}
          label='בתים'>
          {checked.houses.length > 0 && (
            <span className='see-trough'>
              נבחרו {checked.houses.length} סוגים
            </span>
          )}
        </SearchCheckboxAndLabel>
        {dropbox.houses ? (
          <IoIosArrowUp
            className='dropbox-arrow-icon'
            onClick={housesDropboxHandler}
          />
        ) : (
          <IoIosArrowDown
            className='dropbox-arrow-icon'
            onClick={housesDropboxHandler}
          />
        )}
      </div>
      {dropbox.houses && (
        <HousesDropbox
          checkedAll={checkedCategory.checkedHouses}
          dispatchForm={dispatchForm}
          checked={checked.houses}
        />
      )}
      <div onClick={categoryCheckHandler}>
        <SearchCheckboxAndLabel
          value='others'
          checked={checkedCategory.checkedOthers}
          label='סוגים נוספים'>
          {checked.others.length > 0 && (
            <span className='see-trough'>
              נבחרו {checked.others.length} סוגים
            </span>
          )}
        </SearchCheckboxAndLabel>
        {dropbox.others ? (
          <IoIosArrowUp
            className='dropbox-arrow-icon'
            onClick={othersDropboxHandler}
          />
        ) : (
          <IoIosArrowDown
            className='dropbox-arrow-icon'
            onClick={othersDropboxHandler}
          />
        )}
      </div>
      {dropbox.others && (
        <OtherDropbox
          checkedAll={checkedCategory.checkedOthers}
          dispatchForm={dispatchForm}
          checked={checked.others}
        />
      )}
      <span
        className='dropbox-choose-button'
        onClick={() => closeDropbox(false)}>
        בחירה
      </span>
    </div>
  );
};

export default PropertyDropbox;
