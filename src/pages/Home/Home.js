import React from 'react';
import {Button} from '../../conponents/styles/Button';
import {useHistory} from 'react-router-dom';
import {useCurrentUser} from "../../hooks/useCurrentUser";
import Logout from "../../conponents/Logout/Logout";
import {Card} from "../../conponents/Card";
import {Content} from "../../conponents/Content";
import {Title} from "../../conponents/Title";

const HomePage = () => {
    const [isCreatingGame, setIsCreatingGame] = React.useState(false);
    const history = useHistory();
    const user = useCurrentUser();

    const goToGame = () => {
        history.push('/game')
    }

    const goToLogin = () => {
        history.push('/login')
    }

    const goToSignUp = () => {
        history.push('/signup')
    }

    const handleCreateGame = () => {
        history.push('/create');
    }

    const goToProfile = () => {
        history.push('/profile/' + user.uid)
    }

    return (
        <Content>
            <Title>Home</Title>
            <Card>
                <Button onClick={goToGame}>Go to Game</Button>
                {user ? (
                    <>
                        <Button disabled={isCreatingGame} onClick={handleCreateGame}>
                            Create Game
                        </Button>
                        <Button onClick={goToProfile}>Profile</Button>
                        <Logout/>
                    </>
                ) : (
                    <>
                        <Button onClick={goToLogin}>Login</Button>
                        <Button onClick={goToSignUp}>SignUp</Button>
                    </>
                )}
            </Card>
        </Content>
    );
};

export default HomePage;