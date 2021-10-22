import React from 'react'
import {H1} from "../../conponents/styles/H1";
import Layout from "../../layout";
import {Button} from "../../conponents/styles/Button";
import {useHistory} from 'react-router-dom';
import Field from "../../conponents/Field";
import validateEmail from "../../helpers/validateEmail";
import useValidation from "../../hooks/useValidation";
import * as FirestoreService from "../../services/firestore";
import {Error} from "../../conponents/styles/Error";

const SignUpPage = () => {
    const history = useHistory();
    const [isSigningUp, setIsSigningUp] = React.useState(false);
    const [firebaseErr, setFirebaseErr] = React.useState(undefined);
    
    const [password, setPassword, errPassword] = useValidation(
        (password) => password.length > 0 && password.length < 6,
        "Password must be at least 6 characters long"
    )

    const [email, setEmail, errEmail] = useValidation(
        (email) => email.length > 0 && !validateEmail(email),
        "Email is not valid"
    );

    const  [confirmPassword, setConfirmPassword, errConfirmPassword] = useValidation(
        (confirmPassword) => confirmPassword.length > 0 && password !== confirmPassword,
        "Password must much!"
    )

    const signUp = () => {
        setIsSigningUp(true);
        FirestoreService
            .signUp(email, password)
            .then((data) => {
                setIsSigningUp(false);
                history.push('/');
            })
            .catch((err) => {
                setIsSigningUp(false);
                setFirebaseErr(err.message);
                console.log("error: " + err);
            });
    };

    const goToLogin = () => {
        history.push('/login');
    };

    const goBack = () => {
        history.push('/')
    };

    return (
        <Layout>
            <H1>SignUp</H1>
            <Field
                errMessage={errEmail}
                id="email"
                label="Email"
                type="text"
                onChange={setEmail}
                value={email}
                placeholder="Enter Email here"
            />
            <Field
                errMessage={errPassword}
                id="password"
                label="Password"
                type="password"
                onChange={setPassword}
                password={password}
                placeholder="Enter Password here"
            />
            <Field
                errMessage={errConfirmPassword}
                id="confirmPassword"
                label="Confirm password"
                type="password"
                onChange={setConfirmPassword}
                password={confirmPassword}
                placeholder="Enter Password again here"
            />
            {firebaseErr && <Error>{firebaseErr}</Error>}
            <Button disabled={isSigningUp} onClick={signUp}>SignUp</Button>
            <Button onClick={goToLogin}>Login</Button>
            <Button onClick={goBack}>Back to Home</Button>
        </Layout>
    )
}

export default SignUpPage