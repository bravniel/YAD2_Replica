import {useState , useEffect} from 'react';

const RoomNumbersList = ({roomState , rooms, setRooms , setRoomsDropbox, dispatchForm} ) => {

    const [roomAmount,setRoomAmount] = useState([]);

    useEffect(()=>{
        const amount = [], limit = (roomState === 'min' ? rooms.max : rooms.min);        
        if( roomState === 'min'){
            if(limit === '')
                for(let i = 1 ; i <= 10; i= i + 0.5 ) amount.push(<li key={'min-room'+i}>{i}</li>);
            else
                for(let i = 1 ; i <= limit; i= i + 0.5 ) amount.push(<li key={'min-room'+i}>{i}</li>);
        } else{
            if(limit === '')
                for(let i = 1 ; i <= 10; i= i + 0.5 ) amount.push(<li key={'min-room'+i}>{i}</li>);
            else
                for(let i = limit/1 ; i <= 10; i= i + 0.5 ) amount.push(<li key={'min-room'+i}>{i}</li>);
        }
        setRoomAmount(amount);
    },[roomState,rooms.min,rooms.max]);

    
    const roomChoiceHandler = (event) =>{
        if(roomState === 'min') {
            if(event.target.innerHTML === 'הכל' ) setRooms({...rooms, min: ''});
            else setRooms({...rooms, min: event.target.innerHTML});
            dispatchForm({type: 'ROOMS_RANGE',payload: {value: (event.target.innerHTML==='הכל' ? '' : event.target.innerHTML)} , option: 'START'});
        } else{
            if(event.target.innerHTML === 'הכל' ) setRooms({...rooms, max: ''});
            else setRooms({...rooms, max: event.target.innerHTML});
            dispatchForm({type: 'ROOMS_RANGE',payload: { value: (event.target.innerHTML==='הכל' ? '' : event.target.innerHTML)} , option: 'END'});
        }
        setRoomsDropbox({minRooms: false, maxRooms: false});
    }

    return (
        <ul style={roomState==='min' ? {right: '10%'} : {left: '10%'}} onClick={roomChoiceHandler}>
            <li>הכל</li>
            {roomAmount}
        </ul>
    );
};

export default RoomNumbersList;