/** @format */

import "./RefereeCardPublic.css";

// import Avatar from "../Avatar/Avatar";
// import { useState } from "react";

// import { useAuthContext } from "../../hooks/useAuthContext";
// import { projectFirestore } from "../../firebase/config";
// import { getDoc } from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";
import CustomTab from "../CustomTab/CustomTab";
import { useTranslation } from "react-i18next";

export default function RefereeCardPublic({ referee }) {
    const { t } = useTranslation("global");
    // const { user } = useAuthContext();
    // const [photoURL, setPhotoURL] = useState(referee.photoURL);

    if (!referee) return <CircularProgress color="success" />;

    const frontCardContent = (
        <div
            className="referee-card-container"
            style={referee.grade !== "4" ? { backgroundColor: "darkred" } : { backgroundColor: "#ffe067" }}
        >
            <img className="referee-card-logo" src="/WWSC-logo.png" alt="logo" />
            <div className="card-title" style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}>
                <h4 style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>
                    <strong>World Wiser Sport Committee</strong>
                </h4>
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
    );

    const backCardContent = (
        <div
            className="referee-card-container"
            style={referee.grade !== "4" ? { backgroundColor: "darkred" } : { backgroundColor: "#ffe067" }}
        >
            <div className="back-text-content">
                <p style={referee.grade !== "4" ? { color: "white" , textIndent: "0"} : { color: "black" , textIndent: "0"}}>
                    The person identified on the front of this card is the official Grade{" "}
                    <strong>{referee.grade}</strong> Wiser Referee certified by the World Wiser Sport Committee (WWSC),
                    entitled to act as a referee in <strong>{referee.grade !== "4" ? "State" : "Club"}</strong> Level
                    Wiser games and tournaments in accordance with regulations of the WWSC. This I.D. card is issued by
                    the WWSC to the cardholder for referee identification only. The cardholder is not employed by and
                    does not represent the WWSC. The WWSC is not legally responsible in any way for that cardholder's
                    actions, omissions, negligence, etc. If the cardholder's personal integrity or professionalism does
                    not meet the standards of the WWSC, then the WWSC has the right to terminate the referee status of
                    the cardholder at any time. This I.D. card is nontransferable and is void if altered.
                </p>
                <p
                    style={
                        referee.grade !== "4"
                            ? { color: "white", textIndent: "0" }
                            : { color: "black", textIndent: "0" }
                    }
                >
                    Please note the card remains valid until the date as indicated on the front of this card. It is the
                    cardholder's responsibility to contact the WWSC to renew the card within 30 days before the card
                    expires.
                </p>
            </div>
            <div className="wwsc-contact-info" style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}>
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
    );

    const content = [
        { title: t("referee.card.tab1"), content: frontCardContent },
        { title: t("referee.card.tab2"), content: backCardContent },
    ];

    return (
        referee && (
            <div className="card-container" style={{ margin: "auto" }}>
                <CustomTab content={content} />
            </div>
        )
    );
}
