/** @format */

import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "../../../supabase/supabaseClient";
import { useTranslation } from "react-i18next";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CustomTab from "../../../components/CustomTab/CustomTab";
import RefereeSummarySB from "./RefereeSummarySB";
import AdminRefereeCardSB from "../../../components/RefereeCard/AdminRefereeCardSB";
import AdminSidebarSB from "../../../components/AdminSidebar/AdminSidebarSB";
import "./RefereeDetail.css";
// import GameRecordsList from "../../Referee/RefereeHome/RefereeGameRecords/GameRecordsList";
// import TrainingRecordsList from "../../Referee/RefereeHome/RefereeTrainingRecords/TrainingRecordsList";
// import TrainingClassRecordsList from "../../Referee/RefereeHome/RefereeTrainingClass/TrainingClassRecordsList";

export default function RefereeDetailSB() {
    const { t } = useTranslation("global");
    const { id } = useParams();
    const navigate = useNavigate();
    const [referee, setReferee] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

        // Fetch referee data from Supabase
        useEffect(() => {
            const fetchReferee = async () => {
                try {
                    const { data, error } = await supabase
                        .from('referees')
                        .select(`
                            *,
                            organizations (
                                id,
                                name,
                                name_tw,
                                name_cn
                            )
                        `)
                        .eq('id', id)
                        .single();
    
                    if (error) throw error;
                    setReferee(data);
                } catch (err) {
                    console.error('Error fetching referee:', err);
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchReferee();
        }, [id]);

        if (error) {
            return <div className="error">{error}</div>;
        }
    
        if (loading) {
            return (
                <div className="loading">
                    <CircularProgress />
                </div>
            );
        }

    

    const G3content = [
        { title: t("referee.profile.title"), content: <RefereeSummarySB referee={referee} /> },
        // { title: t("referee.record.training-title"), content: <TrainingRecordsList uid={referee.id} /> },
        // { title: t("referee.record.game-title"), content: <GameRecordsList uid={referee.id} /> },
        // { title: t("referee.class.training-class-title"), content: <TrainingClassRecordsList uid={referee.id} /> },
    ];
    const G4content = [
        { title: t("referee.profile.title"), content: <RefereeSummarySB referee={referee} /> },
        // { title: t("referee.record.training-title"), content: <TrainingRecordsList uid={referee.id} /> },
        // { title: t("referee.record.game-title"), content: <GameRecordsList uid={referee.id} /> },
        // { title: t("referee.class.training-class-title"), content: <TrainingClassRecordsList uid={referee.id} /> },
    ];

    return (
        <div className="referee-home">
            <AdminSidebarSB />
            <div className="profile-right-container">
                <div style={{ backgroundColor: "rgba(211, 211, 211, 0.26)", height: "100vh" }}>
                    <div className="profile-referee-card">
                        <AdminRefereeCardSB referee={referee} />
                    </div>
                </div>
                <div className="profile-info" style={{ backgroundColor: "white" }}>
                    <Link
                        to={".."}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(-1);
                        }}
                    >
                        {referee.grade === "0" ? (
                            <span
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    gap: "6px",
                                    fontSize: "0.8rem",
                                }}
                            >
                                {t("admin.referee-list.back-to-rit-list")} <KeyboardDoubleArrowRightIcon />
                            </span>
                        ) : (
                            <span
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    gap: "6px",
                                    fontSize: "0.8rem",
                                    marginBottom: "12px",
                                }}
                            >
                                {t("admin.referee-list.back-to-list")} <KeyboardDoubleArrowRightIcon />
                            </span>
                        )}
                    </Link>
                    {referee.grade==="3" ? <CustomTab content={G3content}/>:<CustomTab content={G4content}/> }
                   
                </div>
            </div>
        </div>
    );
}
