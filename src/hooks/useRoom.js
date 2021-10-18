import {useState, useEffect} from "react";
import {db} from "../services";

const useRoom = (id) => {
    const [room, setRoom] = useState();
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const unsubscribe = db
            .collection('rooms')
            .doc(id)
            .onSnapshot((doc) => {
                if(doc.exists) setRoom({...doc.data(), id: doc.id});
                else console.log('Room not found!');
                if (isFetching) setIsFetching(false);
            })
        return () => {
            unsubscribe()
        }
    }, [id, isFetching]);

    return {isFetching, room}
}

export default useRoom;