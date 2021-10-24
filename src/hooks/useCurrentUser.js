import React from "react";

import FirestoreService from "../services/Firestore";

const CurrentUserContext = React.createContext({});

export const CurrentUserProvider = ({children}) => {
    const [user, setUser] = React.useState(undefined);

    React.useEffect(() => {
        const unsubscribe = FirestoreService.streamAuth(
            (user) => {
                if (user?.uid)
                    return setUser({...user});
                return setUser(undefined)
            });
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <CurrentUserContext.Provider value={user}>
            {children}
        </CurrentUserContext.Provider>
    );
};

export const useCurrentUser = () => React.useContext(CurrentUserContext);
