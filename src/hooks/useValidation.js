import {useState, useEffect} from "react";

const useValidation = (fn, errMsg) => {
    const [field, setField] = useState('');
    const [err, setErr] = useState('');

    useEffect(() => {
        if(fn(field))
            setErr(errMsg);
        else
            setErr(undefined);
    }, [field]);

    return [field, setField, err]
}

export default useValidation;