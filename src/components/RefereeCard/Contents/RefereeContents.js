/** @format */
// import { useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import { Button } from "@mui/joy";
// import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function FrontCardContentReferee({ referee, openDialog }) {
    const { t } = useTranslation("global");

    // const helpOption = true;

    return (
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
                    onClick={openDialog}
                    sx={{ fontSize: "0.7rem", color: "grey" }}
                >
                    {t("referee.card.tooltip-referee-id-card")}
                </Button>
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
                            <img src={referee.avatar_url} alt="referee avatar" />
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
                    {referee.referee_id}
                </div>
                <div className="expiry-date">
                    <span style={referee.grade !== "4" ? { color: "gold" } : { color: "darkred" }}>Valid thru:</span>
                    <span style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}>
                        <span style={{ fontFamily: "Georgia, serif" }}>
                            <strong>{referee.expiry_date}</strong>
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
}

export function BackCardContentReferee({ referee, openDialog }) {
    const { t } = useTranslation("global");
    // const helpOption = true;
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center"}}>
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
                    onClick={openDialog}
                    sx={{ fontSize: "0.7rem", color: "grey" }}
                >
                    {t("referee.card.tooltip-referee-id-card")}
                </Button>
            </div>
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
                            info@worldwisersport.org
                        </a>{" "}
                    </div>
                    {/* <div className="wwsc-email"></div> */}
                    <div className="wwsc-web">
                        <a
                            style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}
                            href="https://worldwisersport.org/"
                        >
                            www.wordwisersport.org
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export function FrontCardContentRefereeClean({ referee }) {
    // const { t } = useTranslation("global");

    // const helpOption = true;

    return (
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
                            <img src={referee.avatar_url} alt="referee avatar" />
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
                    {referee.referee_id}
                </div>
                <div className="expiry-date">
                    <span style={referee.grade !== "4" ? { color: "gold" } : { color: "darkred" }}>Valid thru:</span>
                    <span style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}>
                        <span style={{ fontFamily: "Georgia, serif" }}>
                            <strong>{referee.expiry_date}</strong>
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
}

export function BackCardContentRefereeClean({ referee }) {
    // const { t } = useTranslation("global");
    // const helpOption = true;
    return (
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
                            info@worldwisersport.org
                        </a>{" "}
                    </div>
                    {/* <div className="wwsc-email"></div> */}
                    <div className="wwsc-web">
                        <a
                            style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}
                            href="https://worldwisersport.org/"
                        >
                            www.wordwisersport.org
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export function RefereeIdCardDialogContent({ referee }) {
    return (
        <>
            {referee.status === "active" ? (
                <p>
                    The <i>current</i> status of your referee ID card is <b> "{referee.status}". </b>
                    You can click the "
                    <Link to={`/admin-zone/referee/${referee.id}/pdf-card`}>
                        <b>Download PDF</b>
                    </Link>
                    " link to preview and download the electronic version of your refere ID card.
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
                    ></p>
                )}{" "}
            </div>
            <div className="referee-id-card-container">
                <FrontCardContentRefereeClean referee={referee} />
                <BackCardContentRefereeClean referee={referee} />
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
}

export function RefereeIdCardDialogContentTw({ referee }) {
    // const { t } = useTranslation("global");

    // const helpOption = true;

    return (
        <>
            {referee.status === "active" ? (
                <p>
                    你目前的裁判證狀態是
                    <b>「{referee.status === "active" ? "有效" : "無效"}」</b>
                    ，你可以點擊「
                    <Link to={`/admin-zone/referee/${referee.id}/pdf-card`}>
                        <b>下載PDF裁判證</b>
                    </Link>
                    」链接，來預覽和下載你的電子版本裁判員識別證。
                </p>
            ) : (
                <p>
                    你目前的裁判證狀態是
                    <b>
                        「{referee.status === "pending" ? "處理中" : referee.status === "inactive" ? "無效" : "過期"}」
                    </b>
                    ，你無法下載你的電子版格式裁判員識別證。
                </p>
            )}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "6px" }}>
                {referee.status === "active" && (
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
            <div className="referee-id-card-container">
                <FrontCardContentRefereeClean referee={referee} />
                <BackCardContentRefereeClean referee={referee} />
            </div>
            <div
                className="content-text"
                style={{ marginTop: "20px", marginLeft: "30px", marginRight: "30px", marginBottom: "60px" }}
            >
                <p>
                    本裁判員識別證正面所顯示的裁判員是由世界高智爾球運動委員會（World Wiser Sport Committee,
                    WWSC）認證的正式第<strong>{referee.grade !== "4" ? "三" : "四"}</strong>
                    級高智爾球裁判員，其認證符合WWSC的相關規定，具備在
                    <strong>{referee.grade !== "4" ? "州/省級" : "俱樂部級"}</strong>{" "}
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
}
export function RefereeIdCardDialogContentCn({ referee }) {
    // const { t } = useTranslation("global");

    // const helpOption = true;

    return (
        <>
            {referee.status === "active" ? (
                <p>
                    你目前的裁判證状态是
                    <b>「{referee.status === "active" ? "有效" : "无效"}」</b>
                    ，你可以点击「
                    <Link to={`/admin-zone/referee/${referee.id}/pdf-card`}>
                        <b>下载PDF裁判證</b>
                    </Link>
                    」链接，来预览和下载你的电子版本裁判员识别證。
                </p>
            ) : (
                <p>
                    你目前的裁判證状态是
                    <b>
                        「{referee.status === "pending" ? "处理中" : referee.status === "inactive" ? "无效" : "过期"}」
                    </b>
                    ，你无法下载你的电子版格式裁判员识别證。
                </p>
            )}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "6px" }}>
                {referee.status === "active" && (
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
            <div className="referee-id-card-container">
                <FrontCardContentRefereeClean referee={referee} />
                <BackCardContentRefereeClean referee={referee} />
            </div>
            <div
                className="content-text"
                style={{ marginTop: "20px", marginLeft: "30px", marginRight: "30px", marginBottom: "60px" }}
            >
                <p>
                    本裁判员识别證正面所显示的裁判员是由世界高智尔球运动委员会（World Wiser Sport Committee,
                    WWSC）认證的正式第<strong>{referee.grade !== "4" ? "三" : "四"}</strong>
                    级高智尔球裁判员，其认證符合WWSC的相关规定，具备在
                    <strong>{referee.grade !== "4" ? "州/省级" : "俱乐部级"}</strong>{" "}
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
}
