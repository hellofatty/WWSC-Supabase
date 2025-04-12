/** @format */

import React from "react";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip from "@mui/material/Tooltip";
import { useDocument } from "../../../hooks/useDocument";
import { useAuthContext } from "./hooks/useAuthContext";

export default function HelpContent() {
    const { user } = useAuthContext();
    const { document: referee, error } = useDocument("users", user?.uid);
    console.log(referee);

    const frontCardContentReferee = (
        <>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "6px" }}>
                <p
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "2px",
                        fontSize: "0.8rem",
                    }}
                >
                    <Tooltip title={t("referee.card.tooltip-referee-id-card")}>
                        <HelpIcon
                            onClick={handleClickOpenRefereeIdCardDialog}
                            sx={{
                                fontSize: "1.2rem",
                                cursor: "pointer",
                                textDecoration: "none",
                                color: "lightgrey",
                                marginLeft: "3px",
                            }}
                        />
                    </Tooltip>{" "}
                    {t("signup.help")}
                </p>
            </div>

            <div
                className="referee-card-container"
                style={referee.grade !== "4" ? { backgroundColor: "darkred" } : { backgroundColor: "#ffe067" }}
            >
                <img className="referee-card-logo" src="/WWSC-logo.png" alt="logo" />
                <div
                    className="card-title"
                    style={
                        referee.grade !== "4"
                            ? { color: "white", marginBottom: "3px" }
                            : { color: "black", marginBottom: "3px" }
                    }
                >
                    <div style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>
                        <strong>World Wiser Sport Committee</strong>
                    </div>
                    <h5 style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}>WISER REFEREE</h5>
                </div>
                <div className="referee-card-avatar">
                    {referee?.grade && (
                        <div>
                            <img src={referee.photoURL} alt="referee avatar" />
                        </div>
                    )}
                </div>
                <div className="referee-grade">
                    {referee.grade && (
                        <div
                            className="grade-bar"
                            style={referee.grade !== "4" ? { backgroundColor: "#001f4d" } : { backgroundColor: "teal" }}
                        >
                            GRADE &nbsp;<strong>{referee.grade}</strong>
                        </div>
                    )}
                </div>
                <div className="referee-name" style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}>
                    {referee.name}
                </div>
                <div className="referee-id" style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}>
                    {referee.refereeId}
                </div>
                <div className="expiry-date">
                    <span style={referee.grade !== "4" ? { color: "gold" } : { color: "darkred" }}>Valid thru:</span>
                    <span style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}>
                        <span style={{ fontFamily: "Georgia, serif" }}>
                            <strong>{referee.expiryDate}</strong>
                        </span>
                    </span>
                </div>
            </div>
        </>
    );

    return (
        
        
        
        <div>HelpContent</div>);
}




