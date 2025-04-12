/** @format */

import { useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { useAuthContextSB } from "./useAuthContextSB";

export const useLoginSB = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContextSB();

    const login = async (email, password) => {
        setError(null);
        setIsPending(true);

        try {
            // Sign in with Supabase
            const { data, error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
                options: {
                    persist: true, // Enable session persistence
                },
            });

            if (signInError) throw signInError;

            // Store the session in localStorage
            const currentSession = await supabase.auth.getSession();
            if (currentSession?.data?.session) {
                localStorage.setItem("supabase.auth.token", JSON.stringify(currentSession.data.session));
            }

            
            // Update online status in users table
            const { error: updateError } = await supabase
                .from("referees")
                .update({
                    online: true,
                    last_login: new Date().toISOString(),
                })
                .eq("id", data.user.id);

            if (updateError) {
                console.error("Error updating online status:", updateError);
                // Continue with login even if update fails
            }

            // Dispatch login action
            dispatch({ type: "LOGIN", payload: data.user });
            setIsPending(false);
            setError(null);
        } catch (err) {
            setError(err.message);
            console.error("Login error:", err);
            setIsPending(false);
        }
    };

    return { login, isPending, error };
};
