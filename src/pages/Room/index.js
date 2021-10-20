import React from 'react';
import {useParams} from "react-router-dom";
import useRoom from "../../hooks/useRoom";
import {Card} from "../../layout/styles";

const RoomPage = () => {
    const {id} = useParams();
    const {isFetching, room} = useRoom(id);

    return (
        <div>
            <h1>Room # {id}</h1>
            <Card>
                {isFetching
                    ? <div>Loading...</div>
                    : <div>{room.player2.name}</div>
                }
                {isFetching
                    ?
                    <div>Loading...</div>
                    :
                    <div>
                        {room?.player2?.deck?.map((card) => <img src={card.img} alt={card.title} height={200}/>)}
                    </div>
                }
            </Card>
            <Card>
                <div>Board</div>
            </Card>
            <Card>
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
            </Card>
        </div>
    );
};

export default RoomPage;