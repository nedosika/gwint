import {useState, useEffect} from "react";
import * as FirestoreService from "../services/firestore";

const useGame = (id) => {
    const [game, setRoom] = useState();
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
            const unsubscribe = FirestoreService.streamRoom(id, (doc) => {
                if(doc.exists)
                    setRoom({...doc.data(), id: doc.id});
                else
                    console.log('Game not found!');

                if (isFetching)
                    setIsFetching(false);
            });
        return () => {
            unsubscribe()
        }
    }, [id, isFetching]);

    return {isFetchingGame: isFetching, game}
}

export default useGame;