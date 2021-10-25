import React from 'react';
import {Content} from "../../conponents/Content";
import {Title} from "../../conponents/Title";
import {Card} from "../../conponents/Card";
import {Button} from "../../conponents/styles/Button";
import Field from "../../conponents/Field";
import {Error as ErrorComponent} from "../../conponents/styles/Error";
import useValidatedState from "../../hooks/useValidatedState";
import FirestoreService from "../../services/Firestore";
import {useHistory} from "react-router-dom";
import Game from "../../services/Game";
import {useCurrentUser} from "../../hooks/useCurrentUser";

const GameCreatorPage = () => {
    const history = useHistory();
    const user = useCurrentUser();
    const [isCreatingGame, setIsCreatingGame] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [firebaseErr, setFirebaseErr] = React.useState(undefined);

    const [name, setName, errName] = useValidatedState(
        (value) =>
            value.length < 4
                ? "Name must be more 4 symbols"
                : undefined
    );

    const goBack = () => {
        history.push('/');
    }

    const createGame = () => {
        setIsCreatingGame(true);

        FirestoreService
            .getUserInfo(user.uid)
            .then((response) => FirestoreService
                .createGame(new Game(
                    name,
                    password,
                    response.data()
                )))
            .then((response) => {
                if (!response?.id)
                    throw new Error('Something went wrong!');
                history.push('/game/' + response.id);
            })
            .catch((err) => {
                setFirebaseErr(err.message);
            })
            .finally(() => {
                setIsCreatingGame(false);
            })
    };

    return (
        <Content>
            <Title>Creating new Game</Title>
            <Card>
                <Field
                    errMessage={errName}
                    id="name"
                    label="Name"
                    type="text"
                    onChange={setName}
                    value={name}
                    placeholder="Enter name of game"
                />
                <Field
                    id="password"
                    label="Password"
                    type="password"
                    onChange={setPassword}
                    password={password}
                    placeholder="Enter Password here"
                />
                {firebaseErr && <ErrorComponent>{firebaseErr}</ErrorComponent>}
                <Button disabled={isCreatingGame || errName} onClick={createGame}>Create</Button>
                <Button onClick={goBack}>Back</Button>
            </Card>
        </Content>
    );
};

export default GameCreatorPage;