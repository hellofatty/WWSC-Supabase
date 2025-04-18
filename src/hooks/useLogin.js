/** @format */

import { useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    // const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null);
        setIsPending(true);

        try {
            // login
            const res = await projectAuth.signInWithEmailAndPassword(email, password);
            // update online status
            const documentRef = projectFirestore.collection("users").doc(res.user.uid);
            await documentRef.update({ online: true });

            // dispatch login action
            dispatch({ type: "LOGIN", payload: res?.user });
            setIsPending(false);
            setError(null);
            // console.log(isCancelled);
            // if (!isCancelled) {
            //     setIsPending(false);
            //     setError(null);
            // }
        } catch (err) {
            setError(err.message);
            console.log(err.code);
            setIsPending(false);
            // if (!isCancelled) {
            //     setError(err.message);
            //     setIsPending(false);
            // }
        }
    };

    // useEffect(() => {
    //     return () => setIsCancelled(true);
    // }, []);

    return { login, isPending, error };
};
