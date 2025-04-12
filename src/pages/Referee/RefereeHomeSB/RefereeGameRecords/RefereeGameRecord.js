/** @format */

import "./EditGameRecord.css";
// import "./AddTrainingRecord.css";

// import { toast } from "react-toastify";
// import moment from "moment";
import RefereeCard from "../../../../components/RefereeCard/RefereeCard";
import Sidebar from "../../../../components/Sidebar/Sidebar";
// import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../../../hooks/useDocument";
// import { Timestamp } from "firebase/firestore";
// import { Button, Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import { useTranslation } from "react-i18next";
// import CountrySelect from "../../../components/CountrySelect/CountrySelect";

export default function RefereeGameRecord({ uid }) {
    const { t } = useTranslation("global");
    const { id } = useParams();
    const { document: record, error } = useDocument(`users/${uid}/games`, id);
    const { document: referee } = useDocument("users", uid);
    const navigate = useNavigate();

    if (error) {
        return <div className="error">{error}</div>;
    }
    if (!referee) {
        return (
            <div className="loading">
                {" "}
                <CircularProgress />
            </div>
        );
    }

    if (!record) {
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        );
    }

    console.log(record, referee);

    return (
        <div className="referee-home">
            <Sidebar />
            <div className="profile-right-container">
                <div className="profile-referee-card">
                    <RefereeCard referee={referee} />
                </div>
                <div className="profile-info">
                    <Link
                        to={".."}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(-1);
                        }}
                    >
                        <span style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px" }}>
                            {" "}
                            {t("admin.referee-list.back-to-list")} <KeyboardDoubleArrowRightIcon />
                        </span>
                    </Link>
                    {record.game}
                    {/* <RefereeSummary referee={referee} /> */}
                </div>
            </div>
        </div>
    );
}
