import {useState, useEffect} from "react";
import * as FirestoreService from "../services/firestore";

const useRoom = (id) => {
    const [room, setRoom] = useState();
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
            const unsubscribe = FirestoreService.streamRoom(id, (doc) => {
                if(doc.exists)
                    setRoom({...doc.data(), id: doc.id});
                else
                    console.log('Room not found!');

                if (isFetching)
                    setIsFetching(false);
            });
        return () => {
            unsubscribe()
        }
    }, [id, isFetching]);

    return {isFetching, room}
}

export default useRoom;