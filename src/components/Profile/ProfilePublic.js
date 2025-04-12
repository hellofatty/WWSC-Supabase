/** @format */

import "./ProfilePublic.css";

import { useTranslation } from "react-i18next";
import Chip from "@mui/joy/Chip";

//Creat Profile Component
export default function ProfilePublic({ referee }) {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;

    console.log(referee);

    return (
        <>
            <div className="profile-public-info">
                <div className="profile-public-form">
                    <div className="profile-public-status-Wrapper">
                        <span className="profile-label" style={{marginRight:"6px"}}>{t("referee.profile.status")}:</span>
                        {referee.status === "active" && (
                           <Chip
                           color="primary"
                           // onClick={function(){}}
                           size="md"
                           variant="soft"
                           sx={{
                               fontSize: "0.8rem",
                               border: "1px solid var(--joy-palette-primary-300, #97C3F0)",
                           }}
                       >
                           {t("referee.profile.active")}
                       </Chip>
                        )}
                        {referee.status === "expired" && (
                           <Chip
                           color="danger"
                           // onClick={function(){}}
                           size="md"
                           variant="soft"
                           sx={{
                               fontSize: "0.8rem",
                               border: "1px solid var(--joy-palette-danger-300, #F09898)",
                           }}
                       >
                           {t("referee.profile.expired")}
                       </Chip>
                        )}
                        {referee.status === "pending" && (
                             <Chip
                             color="success"
                             // onClick={function(){}}
                             size="md"
                             variant="soft"
                             sx={{
                                 fontSize: "0.8rem",
                                 border: "1px solid var(--joy-palette-success-300, #A1E8A1)",
                             }}
                         >
                             {" "}
                             {t("referee.profile.pending")}
                         </Chip>
                        )}
                        {referee.status === "inactive" && (
                            <Chip
                            color="warning"
                            // onClick={function(){}}
                            size="md"
                            variant="soft"
                            sx={{
                                fontSize: "0.8rem",
                                border: "1px solid var(--joy-palette-warning-500, #9A5B13)",
                            }}
                        >
                            {" "}
                            {t("referee.profile.inactive")}
                        </Chip>
                        )}
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">{t("referee.profile.referee-id")}:</span>
                        <span className="profile-content">{referee.refereeId}</span>
                    </div>

                    <div className="profile-item">
                        <span className="profile-label">{t("referee.profile.name")}:</span>
                        <span className="profile-content">{referee.name}</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">{t("referee.profile.otherName")}:</span>
                        <span className="profile-content">{referee.otherName}</span>
                    </div>

                    <div className="profile-row">
                        <div className="profile-item">
                            <span className="profile-label">{t("referee.profile.grade")}:</span>
                            {referee.grade === "3" ? (
                                <span className="profile-content" style={{ color: "teal" }}>
                                    {t("referee.profile.g3")}
                                </span>
                            ) : (
                                <span className="profile-content" style={{ color: "teal" }}>
                                    {t("referee.profile.g4")}
                                </span>
                            )}
                        </div>
                        <div className="profile-item">
                            <span className="profile-label">{t("referee.profile.gender")}:</span>

                            {referee.sex === "F" && (
                                <span className="profile-content">{t("referee.profile.female")}</span>
                            )}
                            {referee.sex === "M" && (
                                <span className="profile-content">{t("referee.profile.male")}</span>
                            )}
                        </div>
                    </div>

                    <div className="profile-item">
                        <span className="profile-label">{t("referee.profile.org")}:</span>

                        {lang === "en" &&
                            (referee.org?.value?.name ? (
                                <span className="profile-content">{referee.org?.value?.name}</span>
                            ) : (
                                <span className="profile-content"></span>
                            ))}

                        {lang === "zh-TW" &&
                            (referee.org?.value?.nameTw ? (
                                <span className="profile-content">{referee.org?.value?.nameTw}</span>
                            ) : (
                                <span className="profile-content"></span>
                            ))}
                        {lang === "zh-Cn" &&
                            (referee.org?.value?.nameCn ? (
                                <span className="profile-content">{referee.org?.value?.nameCn}</span>
                            ) : (
                                <span className="profile-content"></span>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}
