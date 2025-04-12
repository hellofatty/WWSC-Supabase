/** @format */

import "./RefereeHome.css";

import RefereeLayoutSB from "./RefereeLayout/RefereeLayoutSB";
import RefereeDashboardSB from "./RefereeDashboard/RefereeDashboardSB";
import { supabase } from "../../../supabase/supabaseClient";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

export default function RefereeHomeSB({ uid }) {
    const [referee, setReferee] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReferee = async () => {
            try {
                const { data, error } = await supabase.from("referees").select("*").eq("id", uid).single();

                if (error) {
                    throw error;
                }

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

    console.log(referee);

    return (
          <><RefereeLayoutSB
            uid={uid}
            children={<RefereeDashboardSB referee={referee} uid={uid} />}
        />

        </>
    );
}
