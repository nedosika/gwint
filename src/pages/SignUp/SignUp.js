import React from 'react'
import {H1} from "../../conponents/styles/H1";
import {Button} from "../../conponents/styles/Button";
import {useHistory} from 'react-router-dom';
import Field from "../../conponents/Field";
import validateEmail from "../../helpers/validateEmail";
import useValidatedState from "../../hooks/useValidatedState";
import FirestoreService from "../../services/Firestore";
import {Error as ErrorComponent} from "../../conponents/styles/Error";
import {Content} from "../../conponents/Content";
import {Card} from "../../conponents/Card";

const SignUpPage = () => {
    const history = useHistory();
    const [isSigningUp, setIsSigningUp] = React.useState(false);
    const [firebaseErr, setFirebaseErr] = React.useState(undefined);

    const [password, setPassword, errPassword] = useValidatedState(
        (value) => value.length > 0 && value.length < 6
            ? "Password must be at least 6 characters long"
            : undefined
    )

    const [email, setEmail, errEmail] = useValidatedState(
        (value) => value.length > 0 && !validateEmail(value)
            ? "Email is not valid"
            : undefined
    );

    const [confirmPassword, setConfirmPassword, errConfirmPassword] = useValidatedState(
        (value) =>
            value.length > 0 && password !== value
                ? "Password must much!"
                : undefined
    )

    const signUp = () => {
        setIsSigningUp(true);

        FirestoreService
            .signUp(email, password)
            .then((response) => {
                if (!response)
                    throw new Error('Something went wrong!')

                const {user} = response;

                return FirestoreService
                    .updateUser(
                        user.uid,
                        {
                            uid: user.uid,
                            displayName: user.email.split('@')[0],
                            deck: [
                                {
                                    img: "https://static.wikia.nocookie.net/vedmak/images/8/86/59%D1%80%D0%BE%D1%88%D0%B5.png",
                                    title: "Вернон Роше",
                                    weight: 10
                                },
                                {
                                    img: "https://static.wikia.nocookie.net/vedmak/images/9/9f/126%D0%BD%D0%B0%D1%82%D0%B0%D0%BB%D0%B8%D1%81.png",
                                    title: "Ян Наталис",
                                    weight: "10"
                                },
                                {
                                    img: "https://static.wikia.nocookie.net/vedmak/images/5/53/60%D1%8D%D1%81%D1%82%D0%B5%D1%80%D0%B0%D0%B4.png",
                                    title: "Эстерад Тиссен",
                                    weight: 10
                                },
                                {
                                    img: "https://static.wikia.nocookie.net/vedmak/images/f/ff/127%D1%84%D0%B8%D0%BB%D0%B8%D0%BF%D0%BF%D0%B0.png",
                                    title: " Филиппа Эльхарт",
                                    weight: 10
                                },
                                {
                                    img: "https://static.wikia.nocookie.net/vedmak/images/0/08/19%D1%80%D0%B5%D0%B4._%D0%BF%D0%B5%D1%85%D0%BE%D1%82%D0%B8%D0%BD%D0%B5%D1%86.png",
                                    title: "Реданский пехотинец",
                                    weight: 1,
                                    ability: "Прочная связь"
                                },
                                {
                                    img: "https://static.wikia.nocookie.net/vedmak/images/c/c2/18%D0%BF%D0%B5%D1%85%D1%82%D1%83%D1%80%D0%B0.png",
                                    squad: "meele",
                                    title: "Грёбаная пехтура",
                                    weight: 2,
                                },
                                {
                                    img: "https://static.wikia.nocookie.net/vedmak/images/0/07/21%D1%8F%D1%80%D0%BF%D0%B5%D0%BD.png",
                                    title: "Ярпен Зигрин",
                                    weight: 2
                                }
                            ],
                            leader: {
                                ability: "Если в колоде есть карта Мгла, то она будет сыграна немедленно.",
                                img: "https://static.wikia.nocookie.net/vedmak/images/f/fb/164%D1%84%D0%BE%D0%BB%D1%8C%D1%82%D0%B5%D1%81%D1%82.png",
                                title: "Король Темерии"
                            }
                        }
                    );
            })
            .then(() => {
                history.push('/');
            })
            .catch((err) => {
                setFirebaseErr(err.message);
            })
            .finally(() => {
                setIsSigningUp(false);
            })
    };

    const goToLogin = () => {
        history.push('/login');
    };

    const goBack = () => {
        history.push('/')
    };

    return (
        <Content>
            <H1>SignUp</H1>
            <Card>
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
                {firebaseErr && <ErrorComponent>{firebaseErr}</ErrorComponent>}
                <Button disabled={isSigningUp} onClick={signUp}>SignUp</Button>
                <Button onClick={goToLogin}>Login</Button>
                <Button onClick={goBack}>Back to Home</Button>
            </Card>
        </Content>
    )
}

export default SignUpPage;