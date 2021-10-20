import React from 'react';
import {useParams} from "react-router-dom";

import useRoom from "../../hooks/useRoom";
import {Card} from "../../layout/styles";
import Slider from "../../conponents/Slider";

const RoomPage = () => {
    const {id} = useParams();
    const {isFetching, room} = useRoom(id);

    return (
        <div>
            <h1>Room # {id}</h1>
            {
                isFetching
                    ?
                    <div>Loading...</div>
                    :
                    <Slider>
                        {
                            room?.player1?.deck?.map(
                                (card) => <input type="image" src={card.img}/>)
                        }
                    </Slider>
            }
        </div>
    );
};

export default RoomPage;