import React, {useState} from 'react'
import * as FirestoreService from "../../services/Firestore/Firestore";

import {Button, Error} from '../../conponents'

const Logout = () => {
    const [isLoggingOut, setIsLoggingOut] = useState(false)
    const [firebaseErr, setFirebaseErr] = useState(undefined)

    async function handleClick() {
        setIsLoggingOut(true);
        setFirebaseErr(undefined);

        FirestoreService
            .signOut()
            .catch((err) => {
                setFirebaseErr(err.message);
                setIsLoggingOut(false);
            });
    }

    return (
        <>
            <Button disabled={isLoggingOut} onClick={handleClick}>
                Log Out
            </Button>
            {firebaseErr && <Error>{firebaseErr}</Error>}
        </>
    )
}

export default Logout