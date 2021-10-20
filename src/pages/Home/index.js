import React from 'react';
import {H1} from '../../conponents/styles/H1';
import {Button} from '../../conponents/styles/Button';
import {useHistory} from 'react-router-dom';
import Layout from "../../layout";

const HomePage = () => {
    const history = useHistory();

    return (
        <Layout>
            <H1>Home</H1>
            <>
                <Button
                    onClick={() => history.push('/room/GjI3wzxINkBZzdrV5mBg')}
                >
                    Go to game room
                </Button>
            </>
        </Layout>
    );
};

export default HomePage;