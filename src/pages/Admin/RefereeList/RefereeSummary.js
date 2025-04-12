/** @format */

import "./RefereeSummary.css";
import Chip from "@mui/joy/Chip";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

// import { updateEmail } from "firebase/auth";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import AdminEditReferee from "./AdminEditReferee";

export default function RefereeSummary({ referee }) {
    const { t } = useTranslation("global");
    const { i18n } = useTranslation();

    const lang = i18n.language;
    // console.log(i18n.language);
    console.log(referee.id);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const closeBtn = (
        <Button onClick={toggle}>
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

    return (
        <div className="profile-info" style={{ paddingBottom: "120px" }}>
            <div className="profile-top">
                {referee.grade === "0" ? (
                    <div className="page-primary-title" style={{ borderBottom: "0", marginBottom: "0" }}>
                        {t("referee.profile.rit-title")}
                    </div>
                ) : (
                    <div className="page-primary-title" style={{ borderBottom: "0", marginBottom: "0" }}>
                        {t("referee.profile.title")}
                    </div>
                )}
                <div className="profile-edit-btn">
                    <Button variant="contained" startIcon={<EditIcon />} onClick={toggle}>
                        {t("admin.notice-list.edit")}
                    </Button>
                </div>
                <>
                    <Modal isOpen={modal} toggle={toggle} backdrop="static" size="lg" centered={true}>
                        <ModalHeader toggle={toggle} close={closeBtn}>
                            {referee.grade === "0" ? (
                                <div className="page-primary-title" style={{ borderBottom: "0", marginBottom: "0" }}>
                                    {t("referee.profile.modal-rit-title-update")}
                                </div>
                            ) : (
                                <div className="page-primary-title" style={{ borderBottom: "0", marginBottom: "0" }}>
                                    {t("referee.profile.modal-title-update")}
                                </div>
                            )}
                        </ModalHeader>
                        <ModalBody>
                            <AdminEditReferee referee={referee} toggle={toggle} />
                        </ModalBody>
                    </Modal>
                </>
            </div>
            <hr style={{ width: "100%" }} />
            {/* <span style={{ color: "teal" }}>{t("referee.profile.wwsc")}</span> */}
            <div className="profile-form">
                {/* -----Referee Status ----------*/}
                <div className="profile-item">
                    <div className="profile-public-status-Wrapper">
                        {referee.grade === "0" ? (
                            <span className="profile-label" style={{marginRight:"6px"}}>{t("referee.profile.rit-status")}*:</span>
                        ) : (
                            <span className="profile-label" style={{marginRight:"6px"}}>{t("referee.profile.status")}*:</span>
                        )}
                        {referee.status === "active" && (
                            <Chip
                            color="primary"
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
                </div>
                {referee.grade !== "0" && (
                    <div className="profile-row">
                        {/* -----Referee reeree ID ----------*/}
                        <div className="profile-item">
                            <span className="profile-label">{t("referee.profile.referee-id")}:</span>
                            <span className="profile-content">{referee.refereeId}</span>
                        </div>
                        {/* -----Referee Expiry Date ----------*/}
                        <div className="profile-item">
                            <span className="profile-label">{t("referee.profile.expiry-date")}:</span>
                            <span className="profile-content">{referee.expiryDate}</span>
                        </div>
                    </div>
                )}
                <div className="profile-row">
                    {/* -----Referee Level ----------*/}
                    <div className="profile-item">
                        <span className="profile-label">{t("referee.profile.level")}:</span>
                        {referee.level === "Referee-in-Training" && (
                            <span className="profile-content">{t("referee.profile.level-rit")}</span>
                        )}
                        {referee.level === "State" && (
                            <span className="profile-content">{t("referee.profile.level-state")}</span>
                        )}
                        {referee.level === "Club" && (
                            <span className="profile-content">{t("referee.profile.level-club")}</span>
                        )}
                    </div>{" "}
                    {/* -----Referee Role ----------*/}
                    {referee.grade !== "0" && (
                        <div className="profile-item">
                            <span className="profile-label">{t("referee.profile.role")}:</span>

                            {referee.role === "Admin" && (
                                <span className="profile-content">{t("referee.profile.role-admin")}</span>
                            )}
                            {referee.role === "Referee" && (
                                <span className="profile-content">{t("referee.profile.role-referee")}</span>
                            )}
                            {referee.role === "Referee-in-Training" && (
                                <span className="profile-content">{t("referee.profile.role-rit")}</span>
                            )}
                            {referee.role === "Moderator" && (
                                <span className="profile-content">{t("referee.profile.role-moderator")}</span>
                            )}
                        </div>
                    )}
                </div>

                <div className="profile-row">
                    {/* -----Referee Name ----------*/}
                    <div className="profile-item">
                        {referee.grade === "0" ? (
                            <span className="profile-label">{t("referee.profile.rit-name")}:</span>
                        ) : (
                            <span className="profile-label">{t("referee.profile.name")}:</span>
                        )}
                        <span className="profile-content">{referee.name}</span>
                    </div>
                    {/* -----Referee otherName ----------*/}
                    <div className="profile-item">
                        <span className="profile-label">{t("referee.profile.otherName")}:</span>
                        <span className="profile-content">{referee.otherName}</span>
                    </div>
                </div>

                <div className="profile-row">
                    {/* -----Referee Grade ----------*/}
                    <div className="profile-item">
                        <span className="profile-label">{t("referee.profile.grade")}*:</span>

                        {referee.grade === "0" && <span className="profile-content">{t("referee.profile.g0")}</span>}
                        {referee.grade === "3" && <span className="profile-content">{t("referee.profile.g3")}</span>}

                        {referee.grade === "4" && <span className="profile-content">{t("referee.profile.g4")}</span>}
                    </div>
                    {/* -----Referee Gender ----------*/}
                    <div className="profile-item">
                        <span className="profile-label">{t("referee.profile.gender")}*:</span>

                        {referee.sex === "F" && <span className="profile-content">{t("referee.profile.female")}</span>}
                        {referee.sex === "M" && <span className="profile-content">{t("referee.profile.male")}</span>}
                        {/* {referee.sex === "O" && (
                            <span className="profile-content">{t("referee.profile.othersex")}</span>
                        )} */}
                    </div>
                </div>
                <div className="profile-row">
                    {/* -----Referee Organization ----------*/}
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
                    {/* -----Referee Position/Title ----------*/}
                    <div className="profile-item">
                        <span className="profile-label">{t("referee.profile.position")}:</span>
                        <span className="profile-content">{referee.title}</span>
                    </div>
                </div>

                <div className="profile-row">
                    {/* -----Referee email ----------*/}
                    <div className="profile-item">
                        <span className="profile-label">{t("referee.profile.email")}*:</span>
                        <span className="profile-content">
                            <i>{referee.email}</i>
                        </span>
                    </div>
                    {/* -----Referee Phone ----------*/}
                    <div className="profile-item">
                        <span className="profile-label">{t("referee.profile.phone")}:</span>
                        <span className="profile-content">{referee.phone}</span>
                    </div>
                </div>
                {/* -----Referee Address ----------*/}
                <div className="profile-item">
                    <span className="profile-label">{t("referee.profile.address")}:*:</span>
                    <span className="profile-content">{referee.address}</span>
                </div>
                <div className="profile-row">
                    {/* -----Referee City ----------*/}
                    <div className="profile-item">
                        <span className="profile-label">{t("referee.profile.city")}:</span>
                        <span className="profile-content">{referee.city}</span>
                    </div>
                    {/* -----Referee State/Province ----------*/}
                    <div className="profile-item">
                        <span className="profile-label">{t("referee.profile.state-province")}:</span>
                        <span className="profile-content">{referee.stateProv}</span>
                    </div>
                </div>
                <div className="profile-row">
                    {/* -----Referee Zipcode ----------*/}
                    <div className="profile-item">
                        <span className="profile-label">{t("referee.profile.zipcode")}:</span>
                        <span className="profile-content">{referee.zipcode}</span>
                    </div>
                    {/* -----Referee Country ----------*/}
                    <div className="profile-item">
                        <span className="profile-label">{t("referee.profile.country")}:</span>
                        {lang === "en" &&
                            (referee.country?.label ? (
                                <span className="profile-content">{referee.country?.label}</span>
                            ) : (
                                <span className="profile-content"></span>
                            ))}
                        {lang === "zh-TW" &&
                            (referee.countryTw?.label ? (
                                <span className="profile-content">{referee.countryTw?.label}</span>
                            ) : (
                                <span className="profile-content"></span>
                            ))}
                        {lang === "zh-CN" &&
                            (referee.countryCn?.label ? (
                                <span className="profile-content">{referee.countryCn?.label}</span>
                            ) : (
                                <span className="profile-content"></span>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
