import { AuthContextSB } from '../context/AuthContextSB';
import { useContext } from "react";

export const useAuthContextSB = () => {
    const contextSB = useContext(AuthContextSB)

    if (!contextSB) {
        throw Error('useAuthContext must be inside an AuthContextProvider')
    }

    return contextSB
}