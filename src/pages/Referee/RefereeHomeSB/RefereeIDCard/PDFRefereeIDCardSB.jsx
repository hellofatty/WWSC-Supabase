/** @format */

import React from "react";
import "./PDFRefereeIDCard.css";
// import Tooltip from "@mui/material/Tooltip";
// import SimCardDownloadRoundedIcon from "@mui/icons-material/SimCardDownloadRounded";
import { useTranslation } from "react-i18next";
// import { useDocument } from "../../../../hooks/useDocument";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";
import moment from "moment";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

export default function PDFRefereeIDCardSB({ uid, referee }) {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    const printRef = useRef(null);

    if (!referee) {
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        );
    }

    console.log(referee.photoURL);

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        if (!element) {
            return;
        }

        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
        });
        const data = canvas.toDataURL("image/png");

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: "a4",
        });

        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();

        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, "PNG", 0, 30, pdfWidth, pdfHeight);
        pdf.save(`${referee.refereeId}.pdf`);
    };

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
                    <div style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}>
                        <strong>World Wiser Sport Committee</strong>
                    </div>
                    <h5 style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}>WISER REFEREE</h5>
                </div>
                <div className="referee-card-avatar">
                    {referee?.photoURL && (
                        <div>
                            <img src={referee.photoURL} alt="referee avatar" />
                        </div>
                    )}

                    {/* <div>
                        <img src={referee.photoURL} alt="referee avatar" />
                    </div> */}
                </div>
                <div className="referee-grade">
                    <div
                        className="grade-bar"
                        style={referee.grade !== "4" ? { backgroundColor: "#001f4d" } : { backgroundColor: "teal" }}
                    >
                        GRADE &nbsp;<strong>{referee.grade}</strong>
                    </div>
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
                    <p
                        style={
                            referee.grade !== "4"
                                ? { color: "white", textIndent: "0" }
                                : { color: "black", textIndent: "0" }
                        }
                    >
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
                    <p
                        style={
                            referee.grade !== "4"
                                ? { color: "white", textIndent: "0" }
                                : { color: "black", textIndent: "0" }
                        }
                    >
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

    return (
        <>
            <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
                <div className="text-container">
                    {referee.status === "active" ? (
                        lang === "en" ? (
                            <p style={{ textIndent: "0" }}>
                                The current status of your referee ID card is <b> "{referee.status}"</b>. <br></br>
                                You can click the "<b>Download PDF</b>" button below to download the electronic version
                                of your refere ID card in PDF format.
                            </p>
                        ) : lang === "zh-TW" ? (
                            <p style={{ textIndent: "0" }}>
                                你目前的裁判證狀態是 <b>「{referee.status === "active" ? "有效" : "無效"}」</b>{" "}
                                <br></br>
                                你可以點擊下面的「<b>下載PDF裁判證</b>」按鍵，來下載你PDF格式的裁判員識別證。
                            </p>
                        ) : (
                            <p style={{ textIndent: "0" }}>
                                你目前的裁判證状态是 <b>「{referee.status === "active" ? "有效" : "无效"}」</b>{" "}
                                <br></br>
                                你可以点击下面的「<b>下载PDF裁判證</b>」按键，来下载你PDF格式的裁判员识别證。
                            </p>
                        )
                    ) : lang === "en" ? (
                        <p style={{ textIndent: "0" }}>
                            The current status of your referee ID card is "
                            <span style={{ color: "tomato" }}>
                                <b>{referee.status}</b>
                            </span>
                            ". You can't download the electronic version of your refere ID card.
                        </p>
                    ) : lang === "zh-TW" ? (
                        <p style={{ textIndent: "0" }}>
                            你目前的裁判證狀態是 "
                            <span style={{ color: "tomato" }}>
                                「
                                {referee.status === "pending"
                                    ? "處理中"
                                    : referee.status === "inactive"
                                    ? "無效"
                                    : "過期"}
                                」
                            </span>
                            "，你無法下載你PDF格式的裁判員識別證。
                        </p>
                    ) : (
                        <p style={{ textIndent: "0" }}>
                            你目前的裁判證状态是 "
                            <span style={{ color: "tomato" }}>
                                「
                                {referee.status === "pending"
                                    ? "处理中"
                                    : referee.status === "inactive"
                                    ? "无效"
                                    : "过期"}
                                」
                            </span>
                            "，你无法下载你的电子版格式裁判员识别證。
                        </p>
                    )}
                    {referee.status === "active" && (
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button
                                onClick={handleDownloadPdf}
                                variant="contained"
                                color="secondary"
                                endIcon={<PictureAsPdfIcon />}
                            >
                                {t("referee.card.tooltip-download-pdf")}
                            </Button>
                        </div>
                    )}

                    <br></br>
                    <hr />
                    <br></br>
                    {referee.status === "active" && (
                        <div ref={printRef}>
                            <div className="card-header-wrapper">
                                <div className="card-heder-logo">
                                    <img
                                        className="card-logo"
                                        src="/assets/WWSC logo_ltr_head.png"
                                        alt="logo"
                                        style={{ width: "80px", marginBottom: "6px" }}
                                    />
                                </div>
                                <div className="card-title-wrapper">
                                    <div className="card-page-title">{t("general.wwsc-name")}</div>
                                    <div className="card-page-subtitle">{t("referee.card.subtitle")}</div>
                                </div>
                            </div>
                            <div className="card-main-container">
                                <div className="referee-id-card-container">
                                    {frontCardContentRefereeClean}
                                    {backCardContentRefereeClean}
                                </div>
                                <div className="card-content-text">
                                    {lang === "en" ? (
                                        <>
                                            <p style={{ textIndent: "0" }}>
                                                The person identified on the front of this card is the official Grade{" "}
                                                <span style={{ color: "darkred" }}>
                                                    <strong>{referee.grade}</strong>{" "}
                                                </span>
                                                Wiser Referee certified by the <b>World Wiser Sport Committee (WWSC)</b>
                                                , entitled to act as a referee in{" "}
                                                <span style={{ color: "darkred" }}>
                                                    <strong>{referee.grade !== "4" ? "State" : "Club"}</strong>
                                                </span>{" "}
                                                Level Wiser games and tournaments in accordance with regulations of the
                                                WWSC.{" "}
                                            </p>{" "}
                                            <p style={{ textIndent: "0" }}>
                                                This I.D. card is issued by the WWSC to the cardholder for referee
                                                identification only. The cardholder is not employed by and does not
                                                represent the WWSC. The WWSC is not legally responsible in any way for
                                                that cardholder's actions, omissions, negligence, etc. If the
                                                cardholder's personal integrity or professionalism does not meet the
                                                standards of the WWSC, then the WWSC has the right to terminate the
                                                referee status of the cardholder at any time. This I.D. card is
                                                nontransferable and is void if altered.
                                            </p>
                                            <p style={{ textIndent: "0" }}>
                                                Please note the card remains valid until the date as indicated on the
                                                front of this card. It is the cardholder's responsibility to contact the
                                                WWSC to renew the card <u>within 30 days </u>
                                                before the card expires.
                                            </p>
                                        </>
                                    ) : lang === "zh-TW" ? (
                                        <>
                                            <p style={{ textIndent: "0" }}>
                                                本裁判員識別證正面所顯示的裁判員是由世界高智爾球運動委員會（World Wiser
                                                Sport Committee, WWSC）認證的正式第
                                                <span style={{ color: "darkred" }}>
                                                    <strong>{referee.grade !== "4" ? "三" : "四"}</strong>
                                                </span>
                                                級高智爾球裁判員，其認證符合WWSC的相關規定，具備在{" "}
                                                <span style={{ color: "darkred" }}>
                                                    <strong>{referee.grade !== "4" ? "州/省級" : "俱樂部級"}</strong>
                                                </span>{" "}
                                                高智爾球比賽和錦標賽中擔任裁判員的資格。
                                            </p>{" "}
                                            <p style={{ textIndent: "0" }}>
                                                此裁判員識別證是由WWSC所發放，其目的僅用於裁判員資格的識別。持證者並非WWSC的雇員，也不代表WWSC。WWSC對該持證者的行為、疏忽、失誤等不承擔任何法律責任。如果持證者的個人誠信道德或專業素養未達到WWSC的標准，WWSC有權隨時終止該持證者的裁判員身份。此裁判員識別證不可轉讓，若有任何自行變造或更改則此證視為無效。
                                            </p>
                                            <p style={{ textIndent: "0" }}>
                                                請注意，此證在正面上所示截止日期之前有效。持證者有責任在裁判證到期
                                                <u>前30天內</u>
                                                聯繫WWSC以更新續辦此證。
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <p style={{ textIndent: "0" }}>
                                                本裁判员识别證正面所显示的裁判员是由世界高智尔球运动委员会（World Wiser
                                                Sport Committee, WWSC）认證的正式第
                                                <span style={{ color: "darkred" }}>
                                                    <strong>{referee.grade !== "4" ? "三" : "四"}</strong>
                                                </span>
                                                级高智尔球裁判员，其认證符合WWSC的相关规定，具备在{" "}
                                                <span style={{ color: "darkred" }}>
                                                    <strong>{referee.grade !== "4" ? "州/省级" : "俱乐部级"}</strong>
                                                </span>{" "}
                                                高智尔球比赛和锦标赛中担任裁判员的资格。
                                            </p>{" "}
                                            <p style={{ textIndent: "0" }}>
                                                此裁判员识别證是由WWSC所发放，其目的仅用於裁判员资格的识别。持證者并非WWSC的雇员，也不代表WWSC。WWSC对该持證者的行为、疏忽、失误等不承担任何法律责任。如果持證者的个人诚信道德或专业素养未达到WWSC的标准，WWSC有权随时终止该持證者的裁判员身份。此裁判员识别證不可转让，若有任何自行变造或更改则此證视为无效。
                                            </p>
                                            <p style={{ textIndent: "0" }}>
                                                请注意，此證在正面上所示截止日期之前有效。持證者有责任在裁判證到期
                                                <u>前30天内</u>
                                                联繫WWSC以更新续办此證。
                                            </p>
                                        </>
                                    )}
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
                                            style={{ width: "80px", marginBottom: "16px" }}
                                        />

                                        <div className="wwsc-title" style={{ fontSize: "1rem", color: "#1F497D" }}>
                                            <strong>World Wiser Sport Committee</strong>
                                        </div>

                                        <div className="wwsc-address" style={{ marginBottom: "6px", color: "#1F497D" }}>
                                            709 E. Colorado Blvd., Suite 270, Pasadena, CA 91101
                                        </div>
                                        <div
                                            className="wwsc-phone-email"
                                            style={{ marginBottom: "6px", color: "#1F497D" }}
                                        >
                                            {t("referee.card.tel")}: 626.795.7485; {t("referee.card.email")}:&nbsp;
                                            <a href="mailto:info@worldwisersport.org">
                                                <i>info@worldwisersport.org</i>
                                            </a>{" "}
                                        </div>
                                        {/* <div className="wwsc-email"></div> */}
                                        <div className="wwsc-web" style={{ color: "#1F497D" }}>
                                            <a href="https://worldwisersport.org/">www.wordwisersport.org</a>
                                        </div>
                                    </div>
                                    <div className="card-signature-container">
                                        <div className="secretary-signature"></div>
                                        <div className="secretary-title">
                                            Michael Lin, {t("referee.card.secretary-title")}
                                        </div>
                                        <div className="secretary-signed-date">
                                            {moment.utc(referee.createdAt.toDate()).format("MM/DD/YYYY")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </>
    );
}


