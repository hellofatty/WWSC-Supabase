/** @format */

import { useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { useAuthContextSB } from "./useAuthContextSB";
import { useNavigate } from "react-router-dom";

export const useSignupSB = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContextSB();
    const navigate = useNavigate();

    // const signup = async (email, password, displayName, refereeId, thumbnail, orgId = null)

    const signup = async (email, password, displayName, refereeId, thumbnail) => {
        setError(null);
        setIsPending(true);
        let avatarUrl = null;

        try {
            // 1. Sign up user with Supabase Auth
            const { data: authData, error: signUpError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        display_name: displayName,
                        // referee_id: refereeId,
                    },
                },
            });

            console.log(authData)
            // console.log(thumbnail)

            if (signUpError) {
                throw new Error(signUpError.message);
            }

            if (!authData.user) {
                throw new Error("No user data returned from signup");
            }

            // 2. Handle avatar upload if provided
            if (thumbnail) {
                try {
                    const fileExt = thumbnail.name.split('.').pop();
                    const fileName = `${refereeId}.${fileExt}`;
                    const filePath = `${authData.user.id}/${fileName}`;

                    // Upload the file
                    const { error: uploadError } = await supabase.storage
                        .from('avatars')
                        .upload(filePath, thumbnail, {
                            cacheControl: '3600',
                            upsert: false,
                            contentType: thumbnail.type
                        });

                    if (uploadError) throw uploadError;

                    // Get the public URL
                    const { data: urlData } = supabase.storage
                        .from('avatars')
                        .getPublicUrl(filePath);

                    avatarUrl = urlData.publicUrl;
                } catch (uploadError) {
                    console.error('Avatar upload failed:', uploadError);
                    // Continue signup even if avatar upload fails
                }
            }
            // 3. Create user profile in users table
            const grade = refereeId ? refereeId.split("-")[1][1] : "0";
            console.log(grade);

            const { data: userData, error: profileError } = await supabase
            .from("referees")
            .insert({
                id: authData.user.id,
                display_name: displayName,
                email: email,
                referee_id: refereeId,
                grade: grade,
                avatar_url: avatarUrl,
                // org_id: orgId,
                created_at: new Date().toISOString(),
                role: 'Referee', // Default role
                status: 'pending' // Default status
            })
            .select()
            .single();

            if (profileError) {
                if (profileError.code === '42501') { // Permission denied
                    throw new Error('Not authorized to create profile');
                }
                if (profileError.code === '23505') { // Unique violation
                    throw new Error('A user with this email already exists');
                }
                throw profileError;
            }

            if (!userData) {
                throw new Error('No user profile data returned');
            }

          

            // 4. Dispatch login action
            dispatch({ type: "LOGIN", payload: authData.user });
            setIsPending(false);
            setError(null);

            // 5. Navigate to referee dashboard
            navigate("/referee-zone/referee-home-SB");

            return { user: userData };
        } catch (err) {
            console.error("Signup error:", err);
            setError(err.message);
            setIsPending(false);

            // Cleanup: If profile creation fails, delete the uploaded avatar
            if (avatarUrl) {
                const filePath = avatarUrl.split('/').slice(-2).join('/');
                await supabase.storage
                    .from('avatars')
                    .remove([filePath]);
            }
            return { error: err.message };
        }
    };

    return { signup, isPending, error };
};
