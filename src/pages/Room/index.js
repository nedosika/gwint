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
                <div>Board</div>
            </Card>
            <Card>
                {isFetching
                    ? <div>Loading...</div>
                    : <div>{room.player1.name}</div>
                }
                {
                    isFetching
                        ?
                        <div>Loading...</div>
                        :
                        <div>
                            {
                                room?.player1?.deck?.map(
                                    (card) => <input type="image" src={card.img} />)
                            }
                        </div>
                }
            </Card>
        </div>
    );
};

export default RoomPage;