/** @format */

// styles
import "./RefereeDetail.css";
import AdminRefereeCard from "../../../components/RefereeCard/AdminRefereeCard";
import AdminSidebar from "../../../components/AdminSidebar/AdminSidebar";
import { useParams } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import RefereeSummary from "./RefereeSummary";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CustomTab from "../../../components/CustomTab/CustomTab";
import GameRecordsList from "../../Referee/RefereeHome/RefereeGameRecords/GameRecordsList";
import TrainingRecordsList from "../../Referee/RefereeHome/RefereeTrainingRecords/TrainingRecordsList";
import TrainingClassRecordsList from "../../Referee/RefereeHome/RefereeTrainingClass/TrainingClassRecordsList";

export default function RefereeDetail() {
    const { t } = useTranslation("global");
    const { id } = useParams();
    const { document: referee, error } = useDocument("users", id);
    const navigate = useNavigate();

    if (error) {
        return <div className="error">{error}</div>;
    }
    if (!referee) {
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        );
    }

    console.log(typeof referee.id);

    const G3content = [
        { title: t("referee.profile.title"), content: <RefereeSummary referee={referee} /> },
        { title: t("referee.record.training-title"), content: <TrainingRecordsList uid={referee.id} /> },
        { title: t("referee.record.game-title"), content: <GameRecordsList uid={referee.id} /> },
        { title: t("referee.class.training-class-title"), content: <TrainingClassRecordsList uid={referee.id} /> },
    ];
    const G4content = [
        { title: t("referee.profile.title"), content: <RefereeSummary referee={referee} /> },
        { title: t("referee.record.training-title"), content: <TrainingRecordsList uid={referee.id} /> },
        { title: t("referee.record.game-title"), content: <GameRecordsList uid={referee.id} /> },
        // { title: t("referee.class.training-class-title"), content: <TrainingClassRecordsList uid={referee.id} /> },
    ];

    return (
        <div className="referee-home">
            <AdminSidebar />
            <div className="profile-right-container">
                <div style={{ backgroundColor: "rgba(211, 211, 211, 0.26)", height: "100vh" }}>
                    <div className="profile-referee-card">
                        <AdminRefereeCard referee={referee} />
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
