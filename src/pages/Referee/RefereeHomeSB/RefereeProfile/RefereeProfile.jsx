/** @format */

import { useState, useEffect } from "react";
import { supabase } from "../../../../supabase/supabaseClient";
import "./RefereeProfile.css";

import ProfileSB from "../../../../components/Profile/ProfileSB";
import RefereeLayout from "../RefereeLayout/RefereeLayout";
import CircularProgress from "@mui/material/CircularProgress";

export default function RefereeProfile({ uid }) {
    const [referee, setReferee] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReferee = async () => {
            try {
                const { data, error } = await supabase
                    .from('referees')
                    .select('*')
                    .eq('id', uid)
                    .single();

                if (error) {
                    throw error;
                }

                setReferee(data);
                setError(null);
            } catch (err) {
                console.error('Error fetching referee profile:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (uid) {
            fetchReferee();
        }

        // Optional: Set up real-time subscription
        const subscription = supabase
            .channel('referees')
            .on('postgres_changes', 
                { event: '*', schema: 'public', table: 'users', filter: `id=eq.${uid}` },
                (payload) => {
                    setReferee(payload.new);
                }
            )
            .subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, [uid]);

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (loading || !referee) {
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        );
    }

    return <RefereeLayout uid={uid} children={<ProfileSB referee={referee} />} />;
}
