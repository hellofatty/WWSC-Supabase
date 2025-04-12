/** @format */

import "./RefereeCard2.css";

// import Avatar from "../Avatar/Avatar";

import { useState, useEffect } from "react";
// import { useAuthContext } from "../../hooks/useAuthContext";
import { projectFirestore } from "../../firebase/config";
import { getDoc } from "firebase/firestore";
import CustomTab from "../CustomTab/CustomTab";
import { useTranslation } from "react-i18next";

export default function RefereeCard2({ user }) {
    const { t } = useTranslation("global");

    // const { user } = useAuthContext();
    const [refId, setRefId] = useState("loading...");
    const [grade, setGrade] = useState(null);
    const [name, setName] = useState(null);
    const [date, setDate] = useState(null);
    // const [level, setLevel] = useState(null);

    useEffect(() => {
        async function getRefereeId() {
            const docSnap = await getDoc(projectFirestore.collection("users").doc(user.id));

            setRefId(docSnap.data().refereeId);
            setGrade(docSnap.data().grade);
            setName(docSnap.data().name);
            setDate(docSnap.data().expiryDate);
            // setLevel(docSnap.data().level);
        }
        getRefereeId();
    }, [user]);

   

    const frontCardContent = (
        <div
            className="referee-card-container"
            style={grade !== "4" ? { backgroundColor: "darkred" } : { backgroundColor: "#ffcb00" }}
        >
            <img className="referee-card-logo" src="/WWSC-logo.png" alt="logo" />
            <div className="card-title" style={grade !== "4" ? { color: "white" } : { color: "black" }}>
                <h4 style={grade !== "4" ? { color: "white" } : { color: "black" }}>
                    <strong>World Wiser Sport Committee</strong>
                </div>
                <h5 style={grade !== "4" ? { color: "white" } : { color: "black" }}>WISER REFEREE</h5>
            </div>
            <div className="referee-card-avatar">
                {grade && (
                    <div>
                        <img src={user.photoURL} alt="user avatar" />
                    </div>
                )}
            </div>
            <div className="referee-grade">
                {grade && (
                    <div
                        className="grade-bar"
                        style={grade !== "4" ? { backgroundColor: "#001f4d" } : { backgroundColor: "teal" }}
                    >
                        GRADE &nbsp;<strong>{grade}</strong>
                    </div>
                )}
            </div>
            <div className="referee-name" style={grade !== "4" ? { color: "white" } : { color: "black" }}>
                {name}
            </div>
            <div className="referee-id" style={grade !== "4" ? { color: "white" } : { color: "black" }}>
                {refId}
            </div>
            <div className="expiry-date">
                <span style={grade !== "4" ? { color: "gold" } : { color: "darkred" }}>Valid thru:</span>
                <span style={grade !== "4" ? { color: "white" } : { color: "black" }}>
                    <span style={{ fontFamily: "Georgia, serif" }}>
                        <strong>{date}</strong>
                    </span>
                </span>
            </div>
        </div>
    );

    const backCardContent = (
        <div
            className="referee-card-container"
            style={grade !== "4" ? { backgroundColor: "darkred" } : { backgroundColor: "#ffcb00" }}
        >
            <div className="back-text-content">
                <p style={grade !== "4" ? { color: "white" } : { color: "black" }}>
                    The person identified on the front of this card is the official Grade <strong>{grade}</strong> Wiser
                    Referee certified by the World Wiser Sport Committee (WWSC), entitled to act as a referee in{" "}
                    <strong>{grade !== "4" ? "State" : "Club"}</strong> Level" Wiser games and tournaments in accordance
                    with regulations of the WWSC. This I.D. card is issued by the WWSC to the cardholder for referee
                    identification only. The cardholder is not employed by and does not represent the WWSC. The WWSC is
                    not legally responsible in any way for that cardholder's actions, omissions, negligence, etc. If the
                    cardholder's personal integrity or professionalism does not meet the standards of the WWSC, then the
                    WWSC has the right to terminate the referee status of the cardholder at any time. This I.D. card is
                    nontransferable and is void if altered.
                </p>
                <p style={grade !== "4" ? { color: "white" } : { color: "black" }}>
                    Please note the card remains valid until the date as indicated on the front of this card. It is the
                    cardholder's responsibility to contact the WWSC to renew the card within 30 days before the card
                    expires.
                </p>
            </div>
            <div className="wwsc-contact-info" style={grade !== "4" ? { color: "white" } : { color: "black" }}>
                {/* <img className="referee-card-back-logo" src="/WWSC-logo.png" alt="logo" /> */}

                <div className="wwsc-title">
                    <strong>World Wiser Sport Committee</strong>
                </div>

                <div className="wwsc-address" style={{ marginBottom: "6px" }}>
                    709 E. Colorado Blvd., Suite 270, Pasadena, CA 91101
                </div>
                <div className="wwsc-phone-email" style={{ marginBottom: "6px" }}>
                    Tel: 626.795.7485; Email:{" "}
                    <a
                        href="mailto:info@worldwisersport.org"
                        style={grade !== "4" ? { color: "white" } : { color: "black" }}
                    >
                        info@worldwisersport.org
                    </a>{" "}
                </div>
                {/* <div className="wwsc-email"></div> */}
                <div className="wwsc-web">
                    <a
                        style={grade !== "4" ? { color: "white" } : { color: "black" }}
                        href="https://worldwisersport.org/"
                    >
                        www.wordwisersport.org
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
        <div className="card-container">
            <CustomTab content={content} />
        </div>
    );
}
