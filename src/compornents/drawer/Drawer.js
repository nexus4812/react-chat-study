import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import React from "react";

// origin
import './Drawer.scss';

export default function Drawer(prop) {

    const rooms = prop.rooms;

    const changeRoom = prop.changeRoom;

    const currentRoomId = prop.currentRoomId;

    return (
        <div className='drawer'>
            <div className='drawer__header'/>
            <Divider/>
            <List>
                {rooms.map(room => <RoomBox
                    room={room}
                    key={room.roomId}
                    changeRoom={changeRoom}
                    currentRoomId={currentRoomId}
                />)}
            </List>
            <Divider/>
        </div>
    );
}

function RoomBox(props) {

    const changeRoom = props.changeRoom;

    return (
        <ListItem
            button
            onClick={() => changeRoom(props.room.roomId)}
        >
            <ListItemText primary={props.room.name}/>
        </ListItem>
    );
}

