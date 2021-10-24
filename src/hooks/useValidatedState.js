import {useState, useEffect} from "react";

const useValidatedState = (fn) => {
    const [field, setField] = useState('');
    const [err, setErr] = useState('');

    useEffect(() => {
        setErr(fn(field));
    }, [field]);

    return [field, setField, err]
}

export default useValidatedState;