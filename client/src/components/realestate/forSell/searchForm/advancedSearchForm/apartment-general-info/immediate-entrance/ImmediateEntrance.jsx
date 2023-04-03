import React, {useState,useEffect} from 'react';
import SearchCheckboxAndLabel from '../../../searchInputs/searchCheckboxAndLabel/SearchCheckboxAndLabel';

const ImmediateEntrance = ({dispatchForm, immediateEntrance}) => {

    const [checked,setChecked] = useState(false);

    useEffect(()=>{setChecked(immediateEntrance.value)},[immediateEntrance.value]);

    const checkboxHandler = (event) => {
        if(event.target.value === 'immediate_entrance')
            dispatchForm({type:'IMMEDIATE_ENTRANCE', payload: {value: !checked}});
    }

    return (
      <div className='immediate-entrance-container' onClick={checkboxHandler}>
        {/* <input type='checkbox' value='immediate_entrance' checked={checked} />
        <span>כניסה מיידית</span> */}

        <SearchCheckboxAndLabel
          value='immediate_entrance'
          checked={checked}
          label='כניסה מיידית'
        />
      </div>
    );
};

export default ImmediateEntrance;