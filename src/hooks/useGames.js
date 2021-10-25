import {useState, useEffect} from "react";
import FirestoreService from "../services/Firestore";

const useGames = () => {
    const [games, setGames] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const unsubscribe = FirestoreService
            .streamGames((doc) => {
                const games = [];

                doc.forEach((doc) => {
                    games.push({...doc.data(), id: doc.id})
                });

                if (games.length > 0)
                    setGames(games);
                else
                    console.log('Games not found!');

                if (isFetching)
                    setIsFetching(false);
            });
        return () => {
            unsubscribe()
        }
    }, [isFetching]);

    return [isFetching, games]
}

export default useGames;