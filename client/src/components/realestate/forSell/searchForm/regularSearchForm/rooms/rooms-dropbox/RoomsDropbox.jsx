import { useState } from "react";
import { RiArrowDropDownLine,RiArrowDropUpLine } from "react-icons/ri";
import RoomNumbersList from "./room-numbers-list/RoomNumbersList";

const RoomsDropbox = ({rooms, setRooms, dispatchForm}) => {

    const [roomsDropbox,setRoomsDropbox] = useState( {minRooms: false, maxRooms: false} );

    const minRoomsDropboxHandler = () => setRoomsDropbox( {minRooms: !roomsDropbox.minRooms, maxRooms: false} );
    const maxRoomsDropboxHandler = () => setRoomsDropbox( {minRooms: false, maxRooms: !roomsDropbox.maxRooms } );

    return (
        <div className="rooms-dropbox">
            <div>
                <input type='text' placeholder={rooms.min === '' ? 'מ-' : '' + rooms.min}/>
                { roomsDropbox.minRooms ? <RiArrowDropUpLine className="rooms-arrow-icon" onClick={minRoomsDropboxHandler}/> 
                        : <RiArrowDropDownLine className="rooms-arrow-icon" onClick={minRoomsDropboxHandler}/>}
            </div>
            { roomsDropbox.minRooms && <RoomNumbersList roomState='min' rooms={rooms} setRooms={setRooms} 
                                        setRoomsDropbox={setRoomsDropbox} dispatchForm={dispatchForm}/>}
            <div>
                <input type='text' placeholder={rooms.max === '' ? 'עד-' : '' + rooms.max}/>
                { roomsDropbox.maxRooms ? <RiArrowDropUpLine className="rooms-arrow-icon" onClick={maxRoomsDropboxHandler}/> 
                        : <RiArrowDropDownLine className="rooms-arrow-icon" onClick={maxRoomsDropboxHandler}/>}
            </div>
            { roomsDropbox.maxRooms && <RoomNumbersList roomState='max' rooms={rooms} setRooms={setRooms} 
                                        setRoomsDropbox={setRoomsDropbox} dispatchForm={dispatchForm}/> }
        </div>
    );
};

export default RoomsDropbox;