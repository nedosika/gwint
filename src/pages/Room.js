import React from 'react';
import {useParams} from "react-router-dom";
import useRoom from "../hooks/useRoom";

const Room = () => {
    const {id} = useParams();
    const {isFetching, room} = useRoom(id);

    return (
        <div>
            {
                room
            }
        </div>
    );
};

export default Room;