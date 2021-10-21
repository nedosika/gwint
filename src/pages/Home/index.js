import React from 'react';
import {H1} from '../../conponents/styles/H1';
import {Button} from '../../conponents/styles/Button';
import {useHistory} from 'react-router-dom';
import Layout from "../../layout";

const HomePage = () => {
    const history = useHistory();

    const goToGame = () => {
        history.push('/game/GjI3wzxINkBZzdrV5mBg')
    }

    const goToLogin = () => {
        history.push('/login')
    }

    const goToSignUp = () => {
        history.push('/signup')
    }


    return (
        <Layout>
            <H1>Home</H1>
            <Button onClick={goToGame}>Go to Game Room</Button>
            <Button onClick={goToLogin}>Login</Button>
            <Button onClick={goToSignUp}>Sign Up</Button>
        </Layout>
    );
};

export default HomePage;