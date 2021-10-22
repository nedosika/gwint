import React from 'react';
import {H1} from '../../conponents/styles/H1';
import {Button} from '../../conponents/styles/Button';
import {useHistory} from 'react-router-dom';
import Layout from "../../layout";
import {useCurrentUser} from "../../hooks/useCurrentUser";
import Logout from "../../conponents/Logout/Logout";
import {Card} from "../../conponents/Card";
import {Content} from "../../conponents/Content";
import {Title} from "../../conponents/Title";

const HomePage = () => {
    const [isCreatingRoom, setIsCreatingRoom] = React.useState(false);
    const history = useHistory();
    const user = useCurrentUser();

    const goToGame = () => {
        history.push('/game/GjI3wzxINkBZzdrV5mBg')
    }

    const goToLogin = () => {
        history.push('/login')
    }

    const goToSignUp = () => {
        history.push('/signup')
    }

    const handleCreateRoom = () => {

    }

    const goToProfile = () => {
        history.push('/profile/' + user.uid)
    }

    return (
        <Content>
            <Title>Home</Title>
            <Card>
                <Button onClick={goToGame}>Go to Game Room</Button>
                {user ? (
                    <>
                        <Button disabled={isCreatingRoom} onClick={handleCreateRoom}>
                            Creat Room
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