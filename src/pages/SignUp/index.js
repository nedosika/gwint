import React from 'react'
import {H1} from "../../conponents/styles/H1";
import Layout from "../../layout";
import {Button} from "../../conponents/styles/Button";
import {useHistory} from 'react-router-dom';

const SignUpPage = () => {
    const history = useHistory();

    const goToLogin = () => {
        history.push('/login');
    }

    const goBack = () => {
        history.push('/')
    }

    return (
        <Layout>
            <H1>SignUp</H1>
            <Button onClick={goToLogin}>Login</Button>
            <Button onClick={goBack}>Back to Home</Button>
        </Layout>
    )
}

export default SignUpPage