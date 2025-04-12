/** @format */

import "./Profile.css";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import BadgeIcon from "@mui/icons-material/Badge";
import Tooltip from "@mui/material/Tooltip";

import Chip from "@mui/joy/Chip";

import { Modal, ModalHeader, ModalBody } from "reactstrap";
import EditRefereeSB from "../../pages/Referee/RefereeHomeSB/RefereeProfile/EditRefereeSB";
import RefereeCardSmallSB from "../RefereeCard/RefereeCardSmallSB";
import { Fab, useMediaQuery } from "@mui/material";
import { supabase } from "../../supabase/supabaseClient";

//Creat Profile Component
export default function ProfileSB({ referee }) {
    const { t, i18n } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");
    const lang = i18n.language;
    // console.log(referee);


    const [orgData, setOrgData] = useState(null);

      // Fetch organization data when referee loads
      useEffect(() => {
        const fetchOrgData = async () => {
            if (referee?.org_id) {
                const { data, error } = await supabase
                    .from('organizations')
                    .select('name, name_tw, name_cn')
                    .eq('id', referee.org_id)
                    .single();

                if (error) {
                    console.error('Error fetching organization:', error);
                    return;
                }

                setOrgData(data);
            }
        };

        fetchOrgData();
      }, [referee?.org_id]);
      
    // Get organization name based on current language
      const getOrgName = () => {
        if (!orgData) return '';
        
        switch(lang) {
            case 'zh-TW':
                return orgData.name_tw || '';
            case 'zh-CN':
                return orgData.name_cn || '';
            default:
                return orgData.name || '';
        }
    };

    // Add this helper function after the getOrgName function
const getCountryName = () => {
    if (!referee) return '';
    
    const countryData = {
        'en': referee.country_en?.label,
        'zh-TW': referee.country_tw?.label,
        'zh-CN': referee.country_cn?.label
    };

    return countryData[lang] || '';
};

    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const closeBtn = (
        <Button onClick={toggle}>
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

    return (
        <>
            {mb && <RefereeCardSmallSB referee={referee} />}
            <div className="referee-profile-info">
                <div className="profile-top">
                    <div className="page-primary-title">
                        <div className="dashboard-title-wrapper">
                            <BadgeIcon className="sidebar-admin-icon" style={{ fontSize: "30px" }} />{" "}
                            {t("referee.profile.title")}
                        </div>
                    </div>
                    <div className="profile-edit-btn">
                        <Tooltip title={t("admin.notice-list.edit")} arrow placement="right-start">
                            <Fab size="small" color="secondary" aria-label="edit" onClick={toggle}>
                                <EditIcon />
                            </Fab>
                            {/* <Button onClick={toggle}>
                                <EditIcon fontSize="medium" />
                            </Button> */}
                        </Tooltip>
                    </div>
                </div>{" "}
                <>
                    <Modal
                        isOpen={modal}
                        toggle={toggle}
                        backdrop="static"
                        size="lg"
                        centered={true}
                        // style={{ height: "auto" }}
                        contentClassName="modal-height"
                        fullscreen="lg"
                        scrollable={true}
                    >
                        <ModalHeader toggle={toggle} close={closeBtn}>
                            <div
                                className="page-primary-title"
                                style={{ border: "0", marginBottom: "0", marginInlineStart: "6px" }}
                            >
                                {t("referee.profile.modal-title-update")}
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <EditRefereeSB referee={referee} toggle={toggle} />
                        </ModalBody>
                    </Modal>
                </>
                {/* <hr style={{ width: "100%" }} /> */}
                <div className="profile-form">
                    <span style={{ fontSize: "0.7rem" }}>*{t("referee.profile.update-wwsc-only")}</span>
                    <div className="profile-public-status-Wrapper">
                        <span className="profile-label" style={{ marginRight: "6px" }}>
                            {t("referee.profile.status")}*:
                        </span>
                        {referee.status === "active" && (
                            <Chip
                                color="primary"
                                size="md"
                                variant="soft"
                                sx={{ fontSize: "0.8rem", border: "1px solid var(--joy-palette-primary-300, #97C3F0)" }}
                            >
                                {t("referee.profile.active")}
                            </Chip>
                        )}
                        {referee.status === "expired" && (
                            <Chip
                                color="danger"
                                size="md"
                                variant="soft"
                                sx={{ fontSize: "0.8rem", border: "1px solid var(--joy-palette-danger-300, #F09898)" }}
                            >
                                {t("referee.profile.expired")}
                            </Chip>
                        )}
                        {referee.status === "pending" && (
                            <Chip
                                color="success"
                                size="md"
                                variant="soft"
                                sx={{ fontSize: "0.8rem", border: "1px solid var(--joy-palette-success-300, #A1E8A1)" }}
                            >
                                {t("referee.profile.pending")}
                            </Chip>
                        )}
                        {referee.status === "inactive" && (
                            <Chip
                                color="warning"
                                size="md"
                                variant="soft"
                                sx={{ fontSize: "0.8rem", border: "1px solid var(--joy-palette-warning-500, #9A5B13)" }}
                            >
                                {" "}
                                {t("referee.profile.inactive")}
                            </Chip>
                        )}
                    </div>

                    <div className="profile-row">
                        <div className="profile-item">
                            <span className="profile-label">{t("referee.profile.name")}:</span>
                            <span className="profile-content">{referee.name}</span>
                        </div>
                        <div className="profile-item">
                            <span className="profile-label">{t("referee.profile.displayName")}:</span>
                            <span className="profile-content">{referee.display_name}</span>
                        </div>
                    </div>
                    <div className="profile-row">
                        <div className="profile-item">
                            <span className="profile-label">{t("referee.profile.grade")}*:</span>
                            {referee.grade === "3" ? (
                                <span className="profile-content" style={{ color: "grey" }}>
                                    {t("referee.profile.g3")}
                                </span>
                            ) : referee.grade === "4" ? (
                                <span className="profile-content" style={{ color: "grey" }}>
                                    {t("referee.profile.g4")}
                                </span>
                            ) : (
                                <span className="profile-content" style={{ color: "grey" }}>
                                    {t("referee.profile.g0")}
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
                    <div className="profile-row">
                        <div className="profile-item">
                            <span className="profile-label">{t("referee.profile.org")}:</span>
                            <span className="profile-content"> {getOrgName()}</span>
                           
                        </div>
                        <div className="profile-item">
                            <span className="profile-label">{t("referee.profile.position")}:</span>
                            <span className="profile-content">{referee.title}</span>
                        </div>
                    </div>
                    <div className="profile-row">
                        <div className="profile-item">
                            <span className="profile-label">{t("referee.profile.email")}*:</span>
                            <span className="profile-content" style={{ color: "grey" }}>
                                <i>{referee.email}</i>
                            </span>
                        </div>
                        <div className="profile-item">
                            <span className="profile-label">{t("referee.profile.country")}:</span>
                            <span className="profile-content">{getCountryName()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
