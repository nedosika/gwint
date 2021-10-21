import React from 'react';
import {useParams} from "react-router-dom";

import useGame from "../../hooks/useGame";
import Slider from "../../conponents/Slider";
import useDeck from "../../hooks/useDeck";
import PlayerDeck from "../../conponents/PlayerDeck";

const GamePage = () => {
    const {id} = useParams();
    const {isFetchingGame, game} = useGame(id);
    const {isFetchingDeck, deck} = useDeck("99PgumndKIaAviDQUAwu");

    return (
        <div>
            <h1>Room # {id}</h1>
            {
                isFetchingDeck
                    ?
                    <div>Loading...</div>
                    :
                    <PlayerDeck deck={deck.deck}/>
            }
        </div>
    );
};

export default GamePage;