import React, {useState, useEffect} from 'react'
import {H1} from "../../conponents/styles/H1";
import Layout from "../../layout";
import {Button} from "../../conponents/styles/Button";
import {useHistory} from 'react-router-dom';
import Field from "../../conponents/Field";
import validateEmail from "../../helpers/validateEmail";

const SignUpPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errEmail, setErrEmail] = useState();
    const [errPassword, setErrPassword] = useState();
    const [errConfirmPassword, setErrConfirmPassword] = useState();

    useEffect(() => {
        if (password.length > 0 && password.length < 6)
            setErrPassword("Password must be at least 6 characters long");
        else
            setErrPassword(undefined);

        if (confirmPassword.length > 0)
            if (password !== confirmPassword) {
                setErrPassword("Password must much!");
                setErrConfirmPassword("Password must much!");
            } else {
                setErrPassword(undefined);
                setErrConfirmPassword(undefined);
            }

        if (email.length > 0 && !validateEmail(email))
            setErrEmail("Email is not valid");
        else
            setErrEmail(undefined);

    }, [email, password, confirmPassword]);

    const signUp = () => {

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
            <Button onClick={signUp}>SignUp</Button>
            <Button onClick={goToLogin}>Login</Button>
            <Button onClick={goBack}>Back to Home</Button>
        </Layout>
    )
}

export default SignUpPage