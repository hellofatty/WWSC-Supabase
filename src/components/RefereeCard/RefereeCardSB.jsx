/** @format */

import "./RefereeCard.css";
// import ReactDOM from "react-dom";

// import Avatar from "../Avatar/Avatar";
import { useState } from "react";

// import { useAuthContext } from "../../hooks/useAuthContext";
import HelpIcon from "@mui/icons-material/Help";
// import Tooltip from "@mui/material/Tooltip";
// import { projectFirestore } from "../../firebase/config";
// import { getDoc } from "firebase/firestore";
import { Sidebar, Menu } from "react-pro-sidebar";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import SimCardDownloadRoundedIcon from "@mui/icons-material/SimCardDownloadRounded";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
// import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CircularProgress from "@mui/material/CircularProgress";
import { useMediaQuery } from "@mui/material";

import CustomTab from "../CustomTab/CustomTab";
import { useTranslation } from "react-i18next";
// import MyDialog from "../../components/MyDialog/MyDialog";
import { Link } from "react-router-dom";
import BasicModal from "../MyModal/MyJoyModal";
import { Button } from "@mui/joy";

// ==============Create Referee ID Card component==========
export default function RefereeCardSB({ referee }) {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    console.log(referee.referee_id);

    const isSmallScreen = useMediaQuery("(min-width:900px)");

    const [isCollapsed, setIsCollapsed] = useState(false);

    const [openRITCardDialog, setOpenRITCardDialog] = useState(false);
    const [openRefereeIdCardDialog, setOpenRefereeIdCardDialog] = useState(false);

    const handleOpenMenu = () => setIsCollapsed(!isCollapsed);

    // ReactDOM.render(<App />, document.getElementById('root'));

    // Handle RIT ID Card Dialog Box Open and Close

    const handleClickOpenRITCardDialog = () => {
        setOpenRITCardDialog(true);
    };

    const handleCloseRITCardDialog = () => {
        setOpenRITCardDialog(false);
    };

    const frontCardContentRIT = (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                    variant="plain"
                    size="sm"
                    startDecorator={
                        <HelpIcon
                            sx={{
                                fontSize: "1rem",
                                cursor: "pointer",
                                textDecoration: "none",
                                color: "grey",
                                marginLeft: "3px",
                            }}
                        />
                    }
                    onClick={handleClickOpenRITCardDialog}
                    sx={{ fontSize: "0.7rem", color: "grey" }}
                >
                    {t("referee.card.tooltip-rit-card")}
                </Button>
            </div>
            <div className="referee-card-container" style={{ backgroundColor: "seagreen", paddingTop: "6px" }}>
                <img className="referee-card-logo" src="/WWSC-logo.png" alt="logo" />
                <div className="card-title" style={{ color: "beige", marginBottom: "6px" }}>
                    <div style={{ color: "beige", marginBottom: "10px" }}>
                        <strong>World Wiser Sport Committee</strong>
                    </div>
                    <h5 style={{ color: "beige" }}>Referee-in-Training</h5>
                </div>
                <div className="referee-card-avatar">
                    {referee?.grade && (
                        <div>
                            <img src={referee?.avatar_url} alt="referee avatar" />
                        </div>
                    )}
                </div>
                <div className="referee-grade">
                    {referee?.grade && (
                        <div className="grade-bar" style={{ backgroundColor: "orange", color: "black" }}>
                            GRADE &nbsp;<strong>{referee?.grade}</strong>
                        </div>
                    )}
                </div>
                <div className="referee-name" style={{ color: "beige", marginTop: "10px" }}>
                    {referee?.name}
                </div>
            </div>
        </>
    );
    const frontCardContentRITClean = (
        <>
            <div className="referee-card-container" style={{ backgroundColor: "seagreen", paddingTop: "6px" }}>
                <img className="referee-card-logo" src="/WWSC-logo.png" alt="logo" />
                <div className="card-title" style={{ color: "beige", marginBottom: "6px" }}>
                    <div style={{ color: "beige", marginBottom: "10px" }}>
                        <strong>World Wiser Sport Committee</strong>
                    </div>
                    <h5 style={{ color: "beige" }}>Referee-in-Training</h5>
                </div>
                <div className="referee-card-avatar">
                    {referee?.grade && (
                        <div>
                            <img src={referee?.avatar_url} alt="referee avatar" />
                        </div>
                    )}
                </div>
                <div className="referee-grade">
                    {referee?.grade && (
                        <div className="grade-bar" style={{ backgroundColor: "orange", color: "black" }}>
                            GRADE &nbsp;<strong>{referee?.grade}</strong>
                        </div>
                    )}
                </div>
                <div className="referee-name" style={{ color: "beige", marginTop: "10px" }}>
                    {referee?.name}
                </div>
            </div>
        </>
    );

    const backCardContentRIT = (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                    variant="plain"
                    size="sm"
                    startDecorator={
                        <HelpIcon
                            sx={{
                                fontSize: "1rem",
                                cursor: "pointer",
                                textDecoration: "none",
                                color: "grey",
                                marginLeft: "3px",
                            }}
                        />
                    }
                    onClick={handleClickOpenRITCardDialog}
                    sx={{ fontSize: "0.7rem", color: "grey" }}
                >
                    {t("referee.card.tooltip-rit-card")}
                </Button>
            </div>
            <div className="referee-card-container" style={{ backgroundColor: "seagreen" }}>
                <div className="back-text-content-G3-RIT">
                    <p>
                        The person identified on the front of this card is a Grade <strong>{referee?.grade}</strong>{" "}
                        Wiser <b>Referee-in-Training (RIT)</b> and has not yet certified by the World Wiser Sport
                        Committee (WWSC).
                    </p>
                    <p>
                        Before receiving certification from WWSC as a Grade-4 referee, the RIT must fulfill a
                        requirement of completing{" "}
                        <b>at least 10 officiating records for Wiser games within one year after becoming the RIT</b>.
                    </p>
                    <p>
                        Upon completion, the RIT may proceed to submit the application for Grade-4 Referee to the WWSC
                        email address provided below.
                    </p>
                </div>
                <div className="wwsc-contact-info" style={{ color: "beige" }}>
                    <img
                        className="referee-card-back-logo"
                        src="/WWSC-logo.png"
                        alt="logo"
                        style={{ marginBottom: "6px" }}
                    />

                    <div className="wwsc-title">
                        <strong>World Wiser Sport Committee</strong>
                    </div>

                    <div className="wwsc-address" style={{ marginBottom: "6px" }}>
                        709 E. Colorado Blvd., Suite 270, Pasadena, CA 91101
                    </div>
                    <div className="wwsc-phone-email" style={{ marginBottom: "6px" }}>
                        Tel: 626.795.7485; Email:{" "}
                        <a href="mailto:info@worldwisersport.org" style={{ color: "beige" }}>
                            <i>
                                <u> info@worldwisersport.org</u>
                            </i>
                        </a>
                    </div>

                    <div className="wwsc-web">
                        <a style={{ color: "beige" }} href="https://worldwisersport.org/">
                            <u>www.wordwisersport.org</u>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );

    const backCardContentRITClean = (
        <div className="referee-card-container" style={{ backgroundColor: "seagreen" }}>
            <div className="back-text-content-G3-RIT">
                <p>
                    The person identified on the front of this card is a Grade <strong>{referee?.grade}</strong> Wiser
                    Referee-in-Training (RIT) and has not been certified by the World Wiser Sport Committee (WWSC) yet.
                </p>
                <p>
                    Before receiving certification from WWSC as a Grade-4 Referee, the RIT must fulfill a requirement of
                    completing{" "}
                    <b>at least 10 officiating records for Wiser games within one year after becoming the RIT</b>.
                </p>
                <p>
                    Upon completion, the RIT may proceed to submit the application for Grade-4 Referee to the WWSC email
                    address provided below.
                </p>
            </div>
            <div className="wwsc-contact-info" style={{ color: "beige" }}>
                <img className="referee-card-back-logo" src="/WWSC-logo.png" alt="logo" />

                <div className="wwsc-title">
                    <strong>World Wiser Sport Committee</strong>
                </div>

                <div className="wwsc-address" style={{ marginBottom: "6px" }}>
                    709 E. Colorado Blvd., Suite 270, Pasadena, CA 91101
                </div>
                <div className="wwsc-phone-email" style={{ marginBottom: "6px" }}>
                    Tel: 626.795.7485; Email:{" "}
                    <a href="mailto:info@worldwisersport.org" style={{ color: "beige" }}>
                        <i>
                            <u> info@worldwisersport.org</u>
                        </i>
                    </a>
                </div>

                <div className="wwsc-web">
                    <a style={{ color: "beige" }} href="https://worldwisersport.org/">
                        <u>www.wordwisersport.org</u>
                    </a>
                </div>
            </div>
        </div>
    );

    const contentRIT = [
        { title: t("referee.card.tab1"), content: frontCardContentRIT },
        { title: t("referee.card.tab2"), content: backCardContentRIT },
    ];

    const RITCardDialogContent = (
        <>
            <p>
                The <i>current</i> status of your referee-in-training card is <b> "{referee?.status}". </b>
            </p>

            <div style={{ display: "flex", justifyContent: "center" }}>
                {frontCardContentRITClean}
                {backCardContentRITClean}
            </div>
            <div
                className="content-text"
                style={{ marginTop: "20px", marginLeft: "30px", marginRight: "30px", marginBottom: "60px" }}
            >
                <p>
                    The person identified on the front of this card is a Wiser
                    <b> Referee-in-Training (RIT)</b> and has not yet certified by the World Wiser Sport Committee
                    (WWSC).
                </p>
                <p>
                    Before receiving certification from WWSC as a Grade-4 referee, the RIT must fulfill a requirement of
                    completing{" "}
                    <b>at least 10 officiating records for Wiser games within one year after becoming the RIT</b>.
                </p>
                <p>
                    Upon completion, the RIT may proceed to submit an application for Grade-4 Referee to the WWSC email
                    address provided below.
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

    const RITCardDialogContentTw = (
        <>
            <p>
                你目前的見習裁判證狀態是
                <b>「{referee?.status === "active" ? "有效" : "處理中..."}」</b>
            </p>

            <div style={{ display: "flex", justifyContent: "center" }}>
                {frontCardContentRITClean}
                {backCardContentRITClean}
            </div>
            <div
                className="content-text"
                style={{ marginTop: "20px", marginLeft: "30px", marginRight: "30px", marginBottom: "60px" }}
            >
                <p>
                    本見習裁判員證正面所顯示的個人是通過本會第四級裁判員培訓班<b>第一階段</b>的<b>「見習裁判員」</b>
                    ，但其第四級裁判員資格尚未由世界高智爾球運動委員會（World Wiser Sport Committee, WWSC）正式認證。
                </p>
                <p>
                    在成為WWSC認證的第四級裁判員之前，見習裁判員必須符合<b>第二階段</b>
                    要求：在成為見習裁判員資格的一年內，必須完成至少<u>10場擔任Wiser比賽的裁判</u>的條件要求。
                </p>
                <p>等完成後，見習裁判員方可傳送電子郵件至本會以下電子郵箱，正式提出申請成為本會認證的第四級裁判員。</p>
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
                        電話: 626.795.7485; 電子郵箱:&nbsp;
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

    const RITCardDialogContentCn = (
        <>
            <p>
                你目前的见习裁判證状态是
                <b>「{referee?.status === "active" ? "有效" : "处理中..."}」</b>
            </p>

            <div style={{ display: "flex", justifyContent: "center" }}>
                {frontCardContentRITClean}
                {backCardContentRITClean}
            </div>
            <div
                className="content-text"
                style={{ marginTop: "20px", marginLeft: "30px", marginRight: "30px", marginBottom: "60px" }}
            >
                <p>
                    本见习裁判员證正面所显示的个人是通过本会第四级裁判员培训班<b>第一阶段</b>的<b>「见习裁判员」</b>
                    ，但其第四级裁判员资格尚未由世界高智尔球运动委员会（World Wiser Sport Committee, WWSC）正式认證。
                </p>
                <p>
                    在成为WWSC认證的第四级裁判员之前，见习裁判员必须符合<b>第二阶段</b>
                    要求：在成为见习裁判员资格的一年内，必须完成至少<u>10场担任Wiser比赛的裁判</u>的条件要求。
                </p>
                <p>等完成後，见习裁判员方可传送电子邮件至本会以下电子邮箱，正式提出申请成为本会认證的第四级裁判员。</p>
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
                        电话: 626.795.7485; 电子邮箱: 
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

    // ============Referee ID Card Content Template============

    // Handle Referee ID Card Dialog Box Open and Close

    const handleClickOpenRefereeIdCardDialog = () => {
        setOpenRefereeIdCardDialog(true);
    };

    const handleCloseRefereeIdCardDialog = () => {
        setOpenRefereeIdCardDialog(false);
    };

    const frontCardContentReferee = (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                    variant="plain"
                    size="sm"
                    startDecorator={
                        <HelpIcon
                            sx={{
                                fontSize: "1rem",
                                cursor: "pointer",
                                textDecoration: "none",
                                color: "grey",
                                marginLeft: "3px",
                            }}
                        />
                    }
                    onClick={handleClickOpenRefereeIdCardDialog}
                    sx={{ fontSize: "0.7rem", color: "grey" }}
                >
                    {t("referee.card.tooltip-referee-id-card")}
                </Button>
            </div>

            <div
                className="referee-card-container"
                style={referee?.grade !== "4" ? { backgroundColor: "darkred" } : { backgroundColor: "#ffe067" }}
            >
                <img className="referee-card-logo" src="/WWSC-logo.png" alt="logo" />
                <div
                    className="card-title"
                    style={
                        referee?.grade !== "4"
                            ? { color: "white", marginBottom: "3px" }
                            : { color: "black", marginBottom: "3px" }
                    }
                >
                    <div style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>
                        <strong>World Wiser Sport Committee</strong>
                    </div>
                    <h5 style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>WISER REFEREE</h5>
                </div>
                <div className="referee-card-avatar">
                    {referee?.grade && (
                        <div>
                            <img src={referee?.avatar_url} alt="referee avatar" />
                        </div>
                    )}
                </div>
                <div className="referee-grade">
                    {referee?.grade && (
                        <div
                            className="grade-bar"
                            style={
                                referee?.grade !== "4" ? { backgroundColor: "#001f4d" } : { backgroundColor: "teal" }
                            }
                        >
                            GRADE &nbsp;<strong>{referee?.grade}</strong>
                        </div>
                    )}
                </div>
                <div className="referee-name" style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>
                    {referee.name}
                </div>
                <div className="referee-id" style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>
                    {referee.referee_id}
                </div>
                <div className="expiry-date">
                    <span style={referee?.grade !== "4" ? { color: "gold" } : { color: "darkred" }}>Valid thru:</span>
                    <span style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>
                        <span style={{ fontFamily: "Georgia, serif" }}>
                            <strong>{referee.expiry_date}</strong>
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
    const frontCardContentRefereeClean = (
        <>
            <div
                className="referee-card-container"
                style={referee?.grade !== "4" ? { backgroundColor: "darkred" } : { backgroundColor: "#ffe067" }}
            >
                <img className="referee-card-logo" src="/WWSC-logo.png" alt="logo" />
                <div
                    className="card-title"
                    style={
                        referee?.grade !== "4"
                            ? { color: "white", marginBottom: "3px" }
                            : { color: "black", marginBottom: "3px" }
                    }
                >
                    <div style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>
                        <strong>World Wiser Sport Committee</strong>
                    </div>
                    <h5 style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>WISER REFEREE</h5>
                </div>
                <div className="referee-card-avatar">
                    {referee?.grade && (
                        <div>
                            <img src={referee?.avatar_url} alt="referee avatar" />
                        </div>
                    )}
                </div>
                <div className="referee-grade">
                    {referee?.grade && (
                        <div
                            className="grade-bar"
                            style={
                                referee?.grade !== "4" ? { backgroundColor: "#001f4d" } : { backgroundColor: "teal" }
                            }
                        >
                            GRADE &nbsp;<strong>{referee?.grade}</strong>
                        </div>
                    )}
                </div>
                <div className="referee-name" style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>
                    {referee?.name}
                </div>
                <div className="referee-id" style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>
                    {referee?.referee_id}
                </div>

                <div className="expiry-date">
                    <span style={referee?.grade !== "4" ? { color: "gold" } : { color: "darkred" }}>Valid thru:</span>
                    <span style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>
                        <span style={{ fontFamily: "Georgia, serif" }}>
                            <strong>{referee?.expiry_date}</strong>
                        </span>
                    </span>
                </div>
            </div>
        </>
    );

    const backCardContentReferee = (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                    variant="plain"
                    size="sm"
                    startDecorator={
                        <HelpIcon
                            sx={{
                                fontSize: "1rem",
                                cursor: "pointer",
                                textDecoration: "none",
                                color: "grey",
                                marginLeft: "3px",
                            }}
                        />
                    }
                    onClick={handleClickOpenRefereeIdCardDialog}
                    sx={{ fontSize: "0.7rem", color: "grey" }}
                >
                    {t("referee.card.tooltip-referee-id-card")}
                </Button>
            </div>
            <div
                className="referee-card-container"
                style={referee?.grade !== "4" ? { backgroundColor: "darkred" } : { backgroundColor: "#ffe067" }}
            >
                <div className="back-text-content">
                    <p style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>
                        The person identified on the front of this card is the official Grade{" "}
                        <strong>{referee?.grade}</strong> Wiser Referee certified by the World Wiser Sport Committee
                        (WWSC), entitled to act as a referee in{" "}
                        <strong>{referee?.grade !== "4" ? "State" : "Club"}</strong> Level Wiser games and tournaments
                        in accordance with regulations of the WWSC. This I.D. card is issued by the WWSC to the
                        cardholder for referee identification only. The cardholder is not employed by and does not
                        represent the WWSC. The WWSC is not legally responsible in any way for that cardholder's
                        actions, omissions, negligence, etc. If the cardholder's personal integrity or professionalism
                        does not meet the standards of the WWSC, then the WWSC has the right to terminate the referee
                        status of the cardholder at any time. This I.D. card is nontransferable and is void if altered.
                    </p>
                    <p style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>
                        Please note the card remains valid until the date as indicated on the front of this card. It is
                        the cardholder's responsibility to contact the WWSC to renew the card within 30 days before the
                        card expires.
                    </p>
                </div>
                <div
                    className="wwsc-contact-info"
                    style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}
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
                            style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}
                        >
                            info@worldwisersport.org
                        </a>{" "}
                    </div>
                    {/* <div className="wwsc-email"></div> */}
                    <div className="wwsc-web">
                        <a
                            style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}
                            href="https://worldwisersport.org/"
                        >
                            www.wordwisersport.org
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
    const backCardContentRefereeClean = (
        <>
            <div
                className="referee-card-container"
                style={referee?.grade !== "4" ? { backgroundColor: "darkred" } : { backgroundColor: "#ffe067" }}
            >
                <div className="back-text-content">
                    <p style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>
                        The person identified on the front of this card is the official Grade{" "}
                        <strong>{referee?.grade}</strong> Wiser Referee certified by the World Wiser Sport Committee
                        (WWSC), entitled to act as a referee in{" "}
                        <strong>{referee?.grade !== "4" ? "State" : "Club"}</strong> Level Wiser games and tournaments
                        in accordance with regulations of the WWSC. This I.D. card is issued by the WWSC to the
                        cardholder for referee identification only. The cardholder is not employed by and does not
                        represent the WWSC. The WWSC is not legally responsible in any way for that cardholder's
                        actions, omissions, negligence, etc. If the cardholder's personal integrity or professionalism
                        does not meet the standards of the WWSC, then the WWSC has the right to terminate the referee
                        status of the cardholder at any time. This I.D. card is nontransferable and is void if altered.
                    </p>
                    <p style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}>
                        Please note the card remains valid until the date as indicated on the front of this card. It is
                        the cardholder's responsibility to contact the WWSC to renew the card within 30 days before the
                        card expires.
                    </p>
                </div>
                <div
                    className="wwsc-contact-info"
                    style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}
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
                            style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}
                        >
                            <u>
                                <i>info@worldwisersport.org</i>
                            </u>
                        </a>{" "}
                    </div>
                    {/* <div className="wwsc-email"></div> */}
                    <div className="wwsc-web">
                        <a
                            style={referee?.grade !== "4" ? { color: "white" } : { color: "black" }}
                            href="https://worldwisersport.org/"
                        >
                            <u>www.wordwisersport.org</u>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );

    const contentReferee = [
        { title: t("referee.card.tab1"), content: frontCardContentReferee },
        { title: t("referee.card.tab2"), content: backCardContentReferee },
    ];

    const RefereeIdCardDialogContent = (
        <>
            {referee?.status === "active" ? (
                <p>
                    The <i>current</i> status of your referee ID card is <b> "{referee?.status}". </b>
                    You can click the "
                    <Link to="/referee-zone/referee-id-card">
                        <b>Download PDF</b>
                    </Link>
                    " link to preview and download the electronic version of your refere ID card.
                </p>
            ) : (
                <p>
                    The current status of your referee ID card is "
                    <span style={{ color: "tomato" }}>
                        <b>{referee?.status}</b>
                    </span>
                    ". You can't download the electronic version of your refere ID card.
                </p>
            )}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "6px" }}>
                {referee?.status === "active" && (
                    <p
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "2px",
                            fontSize: "0.8rem",
                        }}
                    ></p>
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
                    <strong>{referee?.grade}</strong> Wiser Referee certified by the{" "}
                    <b>World Wiser Sport Committee (WWSC)</b>, entitled to act as a referee in{" "}
                    <strong>{referee?.grade !== "4" ? "State" : "Club"}</strong> Level Wiser games and tournaments in
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

    const RefereeIdCardDialogContentTw = (
        <>
            {referee?.status === "active" ? (
                <p>
                    你目前的裁判證狀態是
                    <b>「{referee?.status === "active" ? "有效" : "無效"}」</b>
                    ，你可以點擊「
                    <Link to="/referee-zone/referee-id-card">
                        <b>下載PDF裁判證</b>
                    </Link>
                    」链接，來預覽和下載你的電子版本裁判員識別證。
                </p>
            ) : (
                <p>
                    你目前的裁判證狀態是
                    <b>
                        「{referee?.status === "pending" ? "處理中" : referee?.status === "inactive" ? "無效" : "過期"}
                        」
                    </b>
                    ，你無法下載你的電子版格式裁判員識別證。
                </p>
            )}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "6px" }}>
                {referee?.status === "active" && (
                    <>
                        <p
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "2px",
                                fontSize: "0.8rem",
                            }}
                        >
                            {/* <Tooltip title={t("referee.card.tooltip-download-pdf")}>
                                <SimCardDownloadRoundedIcon
                                    onClick={handleClickOpenRefereeIdCardDialog}
                                    sx={{
                                        fontSize: "1.2rem",
                                        cursor: "pointer",
                                        textDecoration: "none",
                                        color: "teal",
                                        marginLeft: "3px",
                                    }}
                                />
                            </Tooltip>{" "}
                            {t("referee.card.tooltip-download-pdf")} */}
                        </p>
                    </>
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
                    本裁判員識別證正面所顯示的裁判員是由世界高智爾球運動委員會（World Wiser Sport Committee,
                    WWSC）認證的正式第<strong>{referee?.grade !== "4" ? "三" : "四"}</strong>
                    級高智爾球裁判員，其認證符合WWSC的相關規定，具備在
                    <strong>{referee?.grade !== "4" ? "州/省級" : "俱樂部級"}</strong>{" "}
                    高智爾球比賽和錦標賽中擔任裁判員的資格。{" "}
                </p>
                <p>
                    此裁判員識別證是由WWSC所發放，其目的僅用於裁判員資格的識別。持證者並非WWSC的雇員，也不代表WWSC。WWSC對該持證者的行為、疏忽、失誤等不承擔任何法律責任。如果持證者的個人誠信道德或專業素養未達到WWSC的標准，WWSC有權隨時終止該持證者的裁判員身份。此裁判員識別證不可轉讓，若有任何自行變造或更改則此證視為無效。
                </p>
                <p>
                    請注意，此證在正面上所示截止日期之前有效。持證者有責任在裁判證到期<u>前30天內</u>
                    聯繫WWSC以更新續辦此證。
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
                        電話: 626.795.7485; 電子郵箱:&nbsp;
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

    const RefereeIdCardDialogContentCn = (
        <>
            {referee?.status === "active" ? (
                <p>
                    你目前的裁判證状态是
                    <b>「{referee?.status === "active" ? "有效" : "无效"}」</b>
                    ，你可以点击「
                    <Link to="/referee-zone/referee-id-card">
                        <b>下载PDF裁判證</b>
                    </Link>
                    」链接，来预览和下载你的电子版本裁判员识别證。
                </p>
            ) : (
                <p>
                    你目前的裁判證状态是
                    <b>
                        「{referee?.status === "pending" ? "处理中" : referee?.status === "inactive" ? "无效" : "过期"}
                        」
                    </b>
                    ，你无法下载你的电子版格式裁判员识别證。
                </p>
            )}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "6px" }}>
                {referee?.status === "active" && (
                    <>
                        <p
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "2px",
                                fontSize: "0.8rem",
                            }}
                        >
                            {/* <Tooltip title={t("referee.card.tooltip-download-pdf")}>
                                <SimCardDownloadRoundedIcon
                                    onClick={handleClickOpenRefereeIdCardDialog}
                                    sx={{
                                        fontSize: "1.2rem",
                                        cursor: "pointer",
                                        textDecoration: "none",
                                        color: "teal",
                                        marginLeft: "3px",
                                    }}
                                />
                            </Tooltip>{" "}
                            {t("referee.card.tooltip-download-pdf")} */}
                        </p>
                    </>
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
                    本裁判员识别證正面所显示的裁判员是由世界高智尔球运动委员会（World Wiser Sport Committee,
                    WWSC）认證的正式第<strong>{referee?.grade !== "4" ? "三" : "四"}</strong>
                    级高智尔球裁判员，其认證符合WWSC的相关规定，具备在
                    <strong>{referee?.grade !== "4" ? "州/省级" : "俱乐部级"}</strong>{" "}
                    高智尔球比赛和锦标赛中担任裁判员的资格。{" "}
                </p>
                <p>
                    此裁判员识别證是由WWSC所发放，其目的仅用於裁判员资格的识别。持證者并非WWSC的雇员，也不代表WWSC。WWSC对该持證者的行为、疏忽、失误等不承担任何法律责任。如果持證者的个人诚信道德或专业素养未达到WWSC的标准，WWSC有权随时终止该持證者的裁判员身份。此裁判员识别證不可转让，若有任何自行变造或更改则此證视为无效。
                </p>
                <p>
                    请注意，此證在正面上所示截止日期之前有效。持證者有责任在裁判證到期<u>前30天内</u>
                    联繫WWSC以更新续办此證。
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
                        电话: 626.795.7485; 电子邮箱:
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

    return !referee ? (
        <CircularProgress color="success" />
    ) : referee?.grade === "0" ? (
        <div className="card-container">
            <Sidebar
                width="400px"
                collapsedWidth="20px"
                // collapsed={!isSmallScreen ? isCollapsed : true}
                collapsed={isSmallScreen ? isCollapsed : true}
                transitionDuration={2000}
                rootStyles={{
                    background: "rgba(211, 211, 211, 0.257)",
                }}
            >
                {isSmallScreen && (
                    <div
                        className={isCollapsed ? "card-menu-close-switch-container" : "card-menu-open-switch-container"}
                        // style={{ height: "10px" }}
                    >
                        <IconButton aria-label="open" onClick={handleOpenMenu}>
                            {isCollapsed ? (
                                <KeyboardDoubleArrowRightIcon className="menu-open-switch-icon" fontSize="medium" />
                            ) : (
                                <KeyboardDoubleArrowLeftIcon className="menu-open-switch-icon" fontSize="medium" />
                            )}
                        </IconButton>
                    </div>
                )}

                {isSmallScreen && <Menu>{!isCollapsed && <CustomTab content={contentRIT} />} </Menu>}
            </Sidebar>

            <BasicModal
                open={openRITCardDialog}
                handleClose={handleCloseRITCardDialog}
                modalTitle={t("referee.card.tooltip-rit-card")}
                modalContent={
                    lang === "en"
                        ? RITCardDialogContent
                        : lang === "zh-TW"
                        ? RITCardDialogContentTw
                        : RITCardDialogContentCn
                }
            />
        </div>
    ) : (
        <div className="card-container" style={isCollapsed ? { marginRight: "10px" } : { marginRight: "5px" }}>
            <Sidebar
                width="400px"
                collapsedWidth="20px"
                collapsed={isSmallScreen ? isCollapsed : true}
                transitionDuration={2000}
                rootStyles={{
                    background: "rgba(211, 211, 211, 0.257)",
                }}
            >
                {isSmallScreen && (
                    <div
                        className={isCollapsed ? "card-menu-close-switch-container" : "card-menu-open-switch-container"}
                    >
                        <IconButton aria-label="open" onClick={handleOpenMenu}>
                            {isCollapsed ? (
                                <KeyboardDoubleArrowRightIcon className="menu-open-switch-icon" fontSize="medium" />
                            ) : (
                                <KeyboardDoubleArrowLeftIcon className="menu-open-switch-icon" fontSize="medium" />
                            )}
                        </IconButton>
                    </div>
                )}

                {isSmallScreen && <Menu>{!isCollapsed && <CustomTab content={contentReferee} />}</Menu>}
            </Sidebar>
            <div id="pdf-referee-card"></div>

            <BasicModal
                open={openRefereeIdCardDialog}
                handleClose={handleCloseRefereeIdCardDialog}
                modalTitle={t("referee.card.tooltip-referee-id-card")}
                modalContent={
                    lang === "en"
                        ? RefereeIdCardDialogContent
                        : lang === "zh-TW"
                        ? RefereeIdCardDialogContentTw
                        : RefereeIdCardDialogContentCn
                }
            />
        </div>
    );
}
