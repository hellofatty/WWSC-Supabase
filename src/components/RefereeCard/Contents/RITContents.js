/** @format */
// import { useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import { Button } from "@mui/joy";
// import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";

export function FrontCardContentRIT({ referee, openDialog }) {
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
                            <img src={referee.avatar_url} alt="referee avatar" />
                        </div>
                    )}
                </div>
                <div className="referee-grade">
                    {referee.grade && (
                        <div className="grade-bar" style={{ backgroundColor: "orange", color: "black" }}>
                            GRADE &nbsp;<strong>{referee.grade}</strong>
                        </div>
                    )}
                </div>
                <div className="referee-name" style={{ color: "beige", marginTop: "10px" }}>
                    {referee.name}
                </div>
            </div>
        </>
    );
}

export function BackCardContentRIT({ referee, openDialog }) {
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
                                    {t("referee.card.tooltip-rit-card")}
                                </Button>
            </div>

            <div className="referee-card-container" style={{ backgroundColor: "seagreen" }}>
                <div className="back-text-content-G3-RIT">
                    <p>
                        The person identified on the front of this card is a Grade <strong>{referee.grade}</strong>{" "}
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
}

export function FrontCardContentRITClean({ referee }) {
    // const { t } = useTranslation("global");

    // const helpOption = true;

    return (
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
                            <img src={referee.avatar_url} alt="referee avatar" />
                        </div>
                    )}
                </div>
                <div className="referee-grade">
                    {referee.grade && (
                        <div className="grade-bar" style={{ backgroundColor: "orange", color: "black" }}>
                            GRADE &nbsp;<strong>{referee.grade}</strong>
                        </div>
                    )}
                </div>
                <div className="referee-name" style={{ color: "beige", marginTop: "10px" }}>
                    {referee.name}
                </div>
            </div>
        </>
    );
}

export function BackCardContentRITClean({ referee }) {
    // const { t } = useTranslation("global");
    // const helpOption = true;
    return (
        <>
            <div className="referee-card-container" style={{ backgroundColor: "seagreen" }}>
                <div className="back-text-content-G3-RIT">
                    <p>
                        The person identified on the front of this card is a Grade <strong>{referee.grade}</strong>{" "}
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
}

export function RITCardDialogContent({ referee }) {
    return (
        <>
            <p>
                The <i>current</i> status of your referee-in-training card is <b> "{referee.status}". </b>
            </p>

            <div className="referee-id-card-container">
                <FrontCardContentRITClean referee={referee} />
                <BackCardContentRITClean referee={referee} />
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
}

export function RITCardDialogContentTw({ referee }) {
    // const { t } = useTranslation("global");

    // const helpOption = true;

    return (
        <>
            <p>
                你目前的見習裁判證狀態是
                <b>「{referee.status === "active" ? "有效" : "處理中..."}」</b>
            </p>

            <div className="referee-id-card-container">
                <FrontCardContentRITClean referee={referee} />
                <BackCardContentRITClean referee={referee} />
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
}
export function RITCardDialogContentCn({ referee }) {
    // const { t } = useTranslation("global");

    // const helpOption = true;

    return (
        <>
            <p>
                你目前的见习裁判證状态是
                <b>「{referee.status === "active" ? "有效" : "处理中..."}」</b>
            </p>

            <div className="referee-id-card-container">
                <FrontCardContentRITClean referee={referee} />
                <BackCardContentRITClean referee={referee} />
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
}
