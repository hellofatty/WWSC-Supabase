/** @format */

import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContextSB } from "./useAuthContextSB";
import { supabase } from "../supabase/supabaseClient";

export const useLogoutSB = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContextSB();
    const navigate = useNavigate();

    const logout = async () => {
        setError(null);
        setIsPending(true);

        try {
            // Get current user
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (user) {
                // Update online status
                const { error: updateError } = await supabase
                    .from("referees")
                    .update({ online: false })
                    .eq("id", user.id);

                if (updateError) throw updateError;
            }

            // Sign out
            const { error: signOutError } = await supabase.auth.signOut();
            if (signOutError) throw signOutError;

            // Clear any local storage items you've set
            localStorage.removeItem('supabase.auth.token');

            // Dispatch logout action
            dispatch({ type: "LOGOUT" });
            setIsPending(false);
            setError(null);

             // Navigate to login page
            navigate("/referee-home-SB/login");
            
        } catch (err) {
            console.error("Logout error:", err);
            setError(err.message);
            setIsPending(false);
        }
    };

    return { logout, error, isPending };
};
