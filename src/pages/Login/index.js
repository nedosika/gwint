import React, {useState} from 'react'
import {H1} from "../../conponents/styles/H1";
import Layout from "../../layout";
import {Button} from "../../conponents/styles/Button";
import {useHistory} from 'react-router-dom';
import Field from "../../conponents/Field";

const LoginPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const goToSignUp = () => {
        history.push('/signup');
    }

    const goBack = () => {
        history.push('/');
    }

    return (
        <Layout>
            <H1>Login</H1>
            <Field
                id="email"
                label="Email"
                type="text"
                onChange={setEmail}
                value={email}
            />
            <Field
                id="password"
                label="Password"
                type="password"
                onChange={setPassword}
                password={password}
            />
            <Button onClick={goToSignUp}>SignUp</Button>
            <Button onClick={goBack}>Back to Home</Button>
        </Layout>
    )
}

export default LoginPage