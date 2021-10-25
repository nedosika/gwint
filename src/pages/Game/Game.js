import React from 'react';
import {useParams} from "react-router-dom";

import useGame from "../../hooks/useGame";
import PlayerDeck from "../../conponents/PlayerDeck";
import {H1} from "../../conponents/styles/H1";

const GamePage = () => {
    const {id} = useParams();
    const [isFetching, game] = useGame(id);

    if (isFetching)
        return <H1>Fetching Game...</H1>;
    if (!game?.players)
        return <H1>No Game Found</H1>;

    return (
        <div>
            <h1>Room # {id}</h1>
            <h1>P1</h1>
            {
                <PlayerDeck deck={game.players.P1.deck}/>
            }
            <h2>P2</h2>
            {

                <PlayerDeck deck={game.players.P2.deck}/>
            }
        </div>
    );
};

export default GamePage;