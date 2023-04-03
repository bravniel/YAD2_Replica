import {useState,useEffect} from 'react';

const FloorDropbox = ({floorState, dispatchForm, floors, setDropbox}) => {

    const [floorAmount,setFloorAmount] = useState([]);

    useEffect(()=>{
        const amount = [], limit = (floorState === 'min' ? floors.end : floors.start);
        if( floorState === 'min'){
            if(limit === '')
                for(let i = 0 ; i <= 17; i++ ) amount.push(<li key={'min-room'+i}>{i}</li>);
            else
                for(let i = 0 ; i <= parseInt(limit); i++ ) amount.push(<li key={'min-room'+i}>{i}</li>);
        } else{
            if(limit === '')
                for(let i = 0 ; i <= 17; i++ ) amount.push(<li key={'min-room'+i}>{i}</li>);
            else
                for(let i = parseInt(limit) ; i <= 17; i++ ) amount.push(<li key={'min-room'+i}>{i}</li>);
        }  
        setFloorAmount(amount);
    },[floorState,floors.start,floors.end]);

    const floorHandler = (event) =>{
        if(floorState === 'min'){
            let value;
            if(event.target.innerHTML === 'הכל') value = '';
            else value = event.target.innerHTML;
            dispatchForm({type: 'FLOOR_RANGE', payload: {value}, option: 'START'});
        } else{
            let value;
            if(event.target.innerHTML === 'הכל') value = '';
            else value = event.target.innerHTML;
            dispatchForm({type: 'FLOOR_RANGE', payload: {value}, option: 'END'});
        }
        setDropbox(false);
    }

    return (
        <ul className="floor-dropbox" onClick={floorHandler}>
            <li>הכל</li>
            {floorAmount}
        </ul>
    );
};

export default FloorDropbox;