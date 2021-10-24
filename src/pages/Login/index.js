import React, {useState} from 'react'
import {H1} from "../../conponents/styles/H1";
import Layout from "../../layout";
import {Button} from "../../conponents/styles/Button";
import {useHistory} from 'react-router-dom';
import Field from "../../conponents/Field";

import FirestoreService from "../../services/Firestore";
import {Error} from "../../conponents/styles/Error";

const LoginPage = () => {
    const history = useHistory();
    const [isSignInging, setSignInging] = useState(false);
    const [firebaseErr, setFirebaseErr] = React.useState(undefined);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const goToSignUp = () => {
        history.push('/signup');
    }

    const goBack = () => {
        history.push('/');
    }

    const signIn = () => {
        setSignInging(true);

        FirestoreService
            .signIn(email, password)
            .then(() => {
                history.push('/');
            })
            .catch((err) => {
                setFirebaseErr(err.message)
            })
            .finally(() => {
                setSignInging(false)
            });
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
                placeholder="Enter Email here"
            />
            <Field
                id="password"
                label="Password"
                type="password"
                onChange={setPassword}
                password={password}
                placeholder="Enter Password here"
            />
            {firebaseErr && <Error>{firebaseErr}</Error>}
            <Button disabled={isSignInging} onClick={signIn}>Login</Button>
            <Button onClick={goToSignUp}>SignUp</Button>
            <Button onClick={goBack}>Back to Home</Button>
        </Layout>
    )
}

export default LoginPage