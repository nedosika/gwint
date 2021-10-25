import {useState, useEffect} from "react";
import FirestoreService from "../services/Firestore";

const useGame = (id) => {
    const [game, setGame] = useState(undefined);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const unsubscribe = FirestoreService
            .streamGame(id, (doc) => {
                if (doc.exists)
                    setGame({...doc.data(), id: doc.id});
                else
                    console.log('Game not found!');

                if (isFetching)
                    setIsFetching(false);
            });
        return () => {
            unsubscribe()
        }
    }, [id, isFetching]);

    return [isFetching, game]
}

export default useGame;