/** @format */

import { useState, useEffect } from "react";
import "./RefereeLayout.css";
import { supabase } from "../../../../supabase/supabaseClient";
import RefereeCardSB from "../../../../components/RefereeCard/RefereeCardSB";
import CircularProgress from "@mui/material/CircularProgress";
import RefereeSidebarSB from "../../../../components/Sidebar/RefereeSidebarSB";
import { Container, useMediaQuery } from "@mui/material";

export default function RefereeLayout({ uid, children }) {
    
    const [referee, setReferee] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const mb = useMediaQuery("(max-width:600px)");

    useEffect(() => {
        const fetchReferee = async () => {
            try {
                const { data, error } = await supabase
                    .from("referees")
                    .select("*")
                    .eq("id", uid)
                    .single();

                if (error) throw error;
                setReferee(data);
                setError(null);
            } catch (err) {
                console.error("Error fetching referee:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (uid) {
            fetchReferee();
        }
    }, [uid]);

    if (loading) {
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!referee) {
        return <div className="not-found">Referee not found</div>;
    }


    return (
        <div className="referee-home" style={{ backgroundColor: "rgba(211, 211, 211, 0.257)" }}>
            <div style={{ height:"100vh", zIndex: "100", backgroundColor: "rgba(211, 211, 211, 0.257)" }}>
                <RefereeSidebarSB referee={referee} />
            </div>
            {!mb && (
                <div className="referee-card" style={{ backgroundColor: "rgba(211, 211, 211, 0.257)" }}>
                    <RefereeCardSB referee={referee} />
                </div>
            )}

            <Container maxWidth="md" sx={{ paddingBottom: "20px", paddingLeft:"0" }}>
                <div className="referee-content">{children}</div>
            </Container>
        </div>
    );
}
