import React from 'react';
import {useHistory} from 'react-router-dom'
import useGames from "../../hooks/useGames";

import {H1} from "../../conponents/styles/H1";
import {Button} from "../../conponents/styles/Button";
import {Content} from "../../conponents/Content";
import {Title} from "../../conponents/Title";
import {Card} from "../../conponents/Card";

const GamesPage = () => {
    const history = useHistory();
    const [isFetching, games] = useGames();

    function handleBack() {
        history.push('/');
    }

    if (isFetching)
        return <H1>Fetching Games...</H1>;
    if (games.length === 0)
        return <H1>No Games Found</H1>;

    return (
        <Content>
            <Title>Games</Title>
            <Card>
                {
                    games.map(({id, name}) =>
                        <Button key={id} onClick={() => history.push(`/game/${id}`)}>
                            {name}
                        </Button>
                    )
                }
                <Button onClick={handleBack}>Back To Home</Button>
            </Card>
        </Content>
    );
};

export default GamesPage;