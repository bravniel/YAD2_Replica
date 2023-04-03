import SortRadioButtonAndLabel from './sortRadioButtonAndLabel/SortRadioButtonAndLabel';

const SortDropDownBox = ({ sortBy, setSort, setSortBy }) => {
  const sortHandler = (value) => {
    switch (value) {
      case 'uploadDate DESC': {
        setSortBy({ date: true, cheap: false, expensive: false });
        break;
      }
      case 'price ASC': {
        setSortBy({ date: false, cheap: true, expensive: false });
        break;
      }
      case 'price DESC': {
        setSortBy({ date: false, cheap: false, expensive: true });
        break;
      }
    }
    setSort(value);
  };

  return (
    <div className='sort-dropbox'>
      <div className='sort-dropbox-triangle'></div>
      <SortRadioButtonAndLabel
        checked={!!sortBy.date}
        value='uploadDate DESC'
        label='לפי תאריך'
        sortHandler={sortHandler}
      />
      <SortRadioButtonAndLabel
        checked={!!sortBy.cheap}
        value='price ASC'
        label='מחיר - מהזול ליקר'
        sortHandler={sortHandler}
      />
      <SortRadioButtonAndLabel
        checked={!!sortBy.expensive}
        value='price DESC'
        label='מחיר - מהיקר לזול'
        sortHandler={sortHandler}
      />
      {/* <label>
        <input
          type='radio'
          checked={sort == 'uploadDate DESC'}
          value='uploadDate DESC'
          readOnly
          onClick={sortHandler}
        />
        <span>לפי תאריך</span>{' '}
      </label>
      <label>
        <input
          type='radio'
          checked={sort == 'price ASC'}
          value='price ASC'
          onClick={sortHandler}
          readOnly
        />
        <span>מחיר - מהזול ליקר</span>
      </label>
      <label>
        <input
          type='radio'
          checked={sort == 'price DESC'}
          value='price DESC'
          readOnly
          onClick={sortHandler}
        />
        <span>מחיר - מהיקר לזול</span>
      </label> */}
    </div>
  );
};

export default SortDropDownBox;
