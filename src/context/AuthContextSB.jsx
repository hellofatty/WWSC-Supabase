/** @format */

import { createContext, useReducer, useEffect } from "react";
import { supabase } from "../supabase/supabaseClient";

export const AuthContextSB = createContext();

export const authReducerSB = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload };
        case "LOGOUT":
            return { ...state, user: null };
        case "AUTH_IS_READY":
            return { ...state, user: action.payload, authIsReady: true };
        default:
            return state;
    }
};

export const AuthContextProviderSB = ({ children }) => {
    const [state, dispatch] = useReducer(authReducerSB, {
        user: null,
        authIsReady: false,
    });

    useEffect(() => {
        // Get initial session
        const initializeAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            dispatch({ 
                type: "AUTH_IS_READY", 
                payload: session?.user || null 
            });
        };

        initializeAuth();

        // Set up auth state listener
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            dispatch({ 
                type: event === 'SIGNED_IN' ? "LOGIN" : "LOGOUT",
                payload: session?.user || null 
            });
        });

        // Cleanup subscription
        return () => {
            if (subscription) subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContextSB.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContextSB.Provider>
    );
};
