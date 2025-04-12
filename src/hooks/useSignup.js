/** @format */
import { useState, useEffect } from "react";
import { projectAuth, projectStorage, projectFirestore, timestamp } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { v4 } from "uuid";

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, displayName, refereeId, thumbnail) => {
        setError(null);
        setIsPending(true);

        try {
            // signup user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);

            if (!res) {
                throw new Error("Could not complete signup");
            }

            const grade = refereeId ? refereeId.split("-")[1][1] : "0";

            // upload user thumbnail
            const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}_${v4()}`;
            const img = await projectStorage.ref(uploadPath).put(thumbnail);
            const imgUrl = await img.ref.getDownloadURL();

            // add display name and PHOTO_URL to user
            await res.user.updateProfile({ displayName, photoURL: imgUrl });

            const createdAt = timestamp.fromDate(new Date());
            // create a user documentin cloud firestore of "users" collection
            // await projectFirestore.collection("users").doc(res.user.uid).set({
            //     country: "",
            //     countryTw: "",
            //     countryCn: "",
            //     displayName,
            //     email: res.user.email,
            //     grade,
            //     name: "",
            //     org: "",
            //     otherName: "",
            //     photoURL: imgUrl,
            //     refereeId,
            //     sex: "",
            //     status: "",
            //     title: "",
            //     createdAt,
            //     zipcode: "",
            // });

            await projectFirestore.collection("users").doc(res.user.uid).set({
                address: "",
                city: "",
                country: "",
                countryTw: "",
                countryCn:"",
                displayName,
                email: res.user.email,
                expiryDate: "",
                grade,
                level: "",
                name: "",
                org: "",
                otherName: "",
                phone: "",
                photoURL: imgUrl,
                refereeId,
                role: "",
                sex: "",
                stateProv: "",
                status: "",
                title: "",
                createdAt,
                zipcode: "",
            });

            // dispatch login action
            dispatch({ type: "LOGIN", payload: res.user });

            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }
        } catch (err) {
            if (!isCancelled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    };

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { signup, isPending, error };
};
