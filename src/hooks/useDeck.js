import {useState, useEffect} from "react";
import FirestoreService from "../services/Firestore";

const useDeck = (id) => {
    const [deck, setDeck] = useState();
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
            const unsubscribe = FirestoreService.streamDeck(id, (doc) => {
                if(doc.exists)
                    setDeck({...doc.data(), id: doc.id});
                else
                    console.log('Deck not found!');

                if (isFetching)
                    setIsFetching(false);
            });
        return () => {
            unsubscribe()
        }
    }, [id, isFetching]);

    return {isFetchingDeck: isFetching, deck}
}

export default useDeck;