/** @format */

import React from "react";
import Tooltip from "@mui/material/Tooltip";
import SimCardDownloadRoundedIcon from "@mui/icons-material/SimCardDownloadRounded";
import { useTranslation } from "react-i18next";

function PDFRefereeCard({ referee }) {
    const { t } = useTranslation("global");

    const frontCardContentRefereeClean = (
        <>
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

    const backCardContentRefereeClean = (
        <>
            <div
                className="referee-card-container"
                style={referee.grade !== "4" ? { backgroundColor: "darkred" } : { backgroundColor: "#ffe067" }}
            >
                <div className="back-text-content">
                    <p style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}>
                        The person identified on the front of this card is the official Grade{" "}
                        <strong>{referee.grade}</strong> Wiser Referee certified by the World Wiser Sport Committee
                        (WWSC), entitled to act as a referee in{" "}
                        <strong>{referee.grade !== "4" ? "State" : "Club"}</strong> Level Wiser games and tournaments in
                        accordance with regulations of the WWSC. This I.D. card is issued by the WWSC to the cardholder
                        for referee identification only. The cardholder is not employed by and does not represent the
                        WWSC. The WWSC is not legally responsible in any way for that cardholder's actions, omissions,
                        negligence, etc. If the cardholder's personal integrity or professionalism does not meet the
                        standards of the WWSC, then the WWSC has the right to terminate the referee status of the
                        cardholder at any time. This I.D. card is nontransferable and is void if altered.
                    </p>
                    <p style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}>
                        Please note the card remains valid until the date as indicated on the front of this card. It is
                        the cardholder's responsibility to contact the WWSC to renew the card within 30 days before the
                        card expires.
                    </p>
                </div>
                <div
                    className="wwsc-contact-info"
                    style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}
                >
                    <img className="referee-card-back-logo-referee" src="/WWSC-logo.png" alt="logo" />

                    <div className="wwsc-title">
                        <strong>World Wiser Sport Committee</strong>
                    </div>

                    <div className="wwsc-address" style={{ marginBottom: "4px" }}>
                        709 E. Colorado Blvd., Suite 270, Pasadena, CA 91101
                    </div>
                    <div className="wwsc-phone-email" style={{ marginBottom: "4px" }}>
                        Tel: 626.795.7485; Email:{" "}
                        <a
                            href="mailto:info@worldwisersport.org"
                            style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}
                        >
                            <u>
                                <i>info@worldwisersport.org</i>
                            </u>
                        </a>{" "}
                    </div>
                    {/* <div className="wwsc-email"></div> */}
                    <div className="wwsc-web">
                        <a
                            style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}
                            href="https://worldwisersport.org/"
                        >
                            <u>www.wordwisersport.org</u>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );

    const PDFRefereeIdCard = (
        <>
            {referee.status === "active" ? (
                <p>
                    The <i>current</i> status of your referee ID card is <b> "{referee.status}". </b>
                    You can click the "<b>Download PDF</b>" button below to download the electronic version of your
                    refere ID card.
                </p>
            ) : (
                <p>
                    The current status of your referee ID card is "
                    <span style={{ color: "tomato" }}>
                        <b>{referee.status}</b>
                    </span>
                    ". You can't download the electronic version of your refere ID card.
                </p>
            )}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "6px" }}>
                {referee.status === "active" && (
                    <p
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "2px",
                            fontSize: "0.8rem",
                        }}
                    >
                        <PDFRefereeCard referee={referee} />

                    </p>
                )}{" "}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {frontCardContentRefereeClean}
                {backCardContentRefereeClean}
            </div>
            <div
                className="content-text"
                style={{ marginTop: "20px", marginLeft: "30px", marginRight: "30px", marginBottom: "60px" }}
            >
                <p>
                    The person identified on the front of this card is the official Grade{" "}
                    <strong>{referee.grade}</strong> Wiser Referee certified by the{" "}
                    <b>World Wiser Sport Committee (WWSC)</b>, entitled to act as a referee in{" "}
                    <strong>{referee.grade !== "4" ? "State" : "Club"}</strong> Level Wiser games and tournaments in
                    accordance with regulations of the WWSC.{" "}
                </p>{" "}
                <p>
                    This I.D. card is issued by the WWSC to the cardholder for referee identification only. The
                    cardholder is not employed by and does not represent the WWSC. The WWSC is not legally responsible
                    in any way for that cardholder's actions, omissions, negligence, etc. If the cardholder's personal
                    integrity or professionalism does not meet the standards of the WWSC, then the WWSC has the right to
                    terminate the referee status of the cardholder at any time. This I.D. card is nontransferable and is
                    void if altered.
                </p>
                <p>
                    Please note the card remains valid until the date as indicated on the front of this card. It is the
                    cardholder's responsibility to contact the WWSC to renew the card <u>within 30 days </u>before the
                    card expires.
                </p>
                <div
                    className="wwsc-contact-info"
                    style={{
                        color: "teal",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        fontSize: "0.85rem",
                    }}
                >
                    <img
                        className="referee-card-back-logo"
                        src="/WWSC-logo.png"
                        alt="logo"
                        style={{ width: "80px", marginBottom: "6px" }}
                    />

                    <div className="wwsc-title" style={{ fontSize: "0.9rem" }}>
                        <strong>World Wiser Sport Committee</strong>
                    </div>

                    <div className="wwsc-address" style={{ marginBottom: "6px" }}>
                        709 E. Colorado Blvd., Suite 270, Pasadena, CA 91101
                    </div>
                    <div className="wwsc-phone-email" style={{ marginBottom: "6px" }}>
                        Tel: 626.795.7485; Email:&nbsp;
                        <a href="mailto:info@worldwisersport.org">
                            <i>info@worldwisersport.org</i>
                        </a>{" "}
                    </div>
                    {/* <div className="wwsc-email"></div> */}
                    <div className="wwsc-web">
                        <a href="https://worldwisersport.org/">www.wordwisersport.org</a>
                    </div>
                </div>
            </div>
        </>
    );



    return (
        <>
            <div>
                <Tooltip title={t("referee.card.tooltip-download-pdf")}>
                    <SimCardDownloadRoundedIcon
                        sx={{
                            fontSize: "1.2rem",
                            cursor: "pointer",
                            textDecoration: "none",
                            color: "teal",
                            marginLeft: "3px",
                        }}
                    />
                </Tooltip>
                {t("referee.card.tooltip-download-pdf")}
            </div>
            <div><PDFRefereeIdCard/></div>
        </>
    );
}

export default PDFRefereeCard;
