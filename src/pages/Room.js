import React from 'react';
import {useParams} from "react-router-dom";
import useRoom from "../hooks/useRoom";

const Room = () => {
    const {id} = useParams();
    const {isFetching, room} = useRoom(id);

    return (
        <div>
            <h1>Room # {id}</h1>
            {isFetching
                ? <div>Loading...</div>
                : <div>{room.player1.name}</div>
            }
            {isFetching
                ?
                    <div>Loading...</div>
                :
                    <div>
                        {room?.player1?.deck?.map((card) => <img src={card.img} alt={card.title} height={200}/>)}
                    </div>
            }
        </div>
    );
};

export default Room;