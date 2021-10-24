import React from 'react';
import {useParams} from "react-router-dom";

import useGame from "../../hooks/useGame";
import PlayerDeck from "../../conponents/PlayerDeck";

const GamePage = () => {
    const {id} = useParams();
    const {isFetchingGame, game} = useGame(id);

    console.log("sss" + game)

    return (
        <div>
            <h1>Room # {id}</h1>
            <h1>P1</h1>
            {
                isFetchingGame
                    ?
                    <div>Loading...</div>
                    :
                    <PlayerDeck deck={game.players.P1.deck}/>
            }
            <h2>P2</h2>
            {
                isFetchingGame
                    ?
                    <div>Loading...</div>
                    :
                    <PlayerDeck deck={game.players.P2.deck}/>
            }
        </div>
    );
};

export default GamePage;