/** @format */

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supabase } from "../../../supabase/supabaseClient";
import "./NoticeDetail.css";

// MUI Components
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import CircularProgress from "@mui/material/CircularProgress";

// Components
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import EditNoticeSB from "./EditNoticeSB";

function NoticeDetailSB() {
    const navigate = useNavigate();

    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;

    const { id } = useParams();
    // State
    const [notice, setNotice] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);

    // Fetch notice data
    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const { data, error } = await supabase.from("notices").select("*").eq("id", id).single();

                if (error) throw error;
                setNotice(data);
            } catch (err) {
                console.error("Error fetching notice:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNotice();
    }, [id]);

    const toggle = () => setModal(!modal);
    const closeBtn = (
        <Button onClick={toggle}>
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

    if (loading) {
        return (
            <div className="loading-container">
                <CircularProgress />
                <p>{t("general.loading")}</p>
            </div>
        );
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!notice) {
        return <div className="not-found">{t("admin.notice-list.notice-not-found")}</div>;
    }

    return (
        <div className="wwsc-container">
            <div className="notice-button-container">
                <Button
                    variant="outlined"
                    startIcon={<LowPriorityIcon />}
                    onClick={() => navigate(`/admin-zone/notice-list`)}
                >
                    {t("admin.notice-list.back-btn")}
                </Button>
                <Button variant="contained" startIcon={<EditIcon />} onClick={toggle}>
                    {t("admin.notice-list.edit")}
                </Button>
            </div>

            <Modal isOpen={modal} toggle={toggle} backdrop="static" size="lg" centered={true}>
                <ModalHeader toggle={toggle} close={closeBtn}>
                    <h2>{t("admin.notice-list.update-notice-title")}</h2>
                </ModalHeader>
                <ModalBody>
                    <EditNoticeSB notice={notice} toggle={toggle} />
                </ModalBody>
            </Modal>

            <div className="text-container">
                <img src="/assets/WWSC logo_ltr_head.png" alt="wwsc logo" className="notice-logo-img" />
                {lang === "en" && (
                    <>
                        <h3 style={{ textAlign: "center" }}>{notice.title}</h3>
                        <div 
                            className="notice-page" 
                            dangerouslySetInnerHTML={{ __html: notice.content }} 
                        />
                    </>
                )}
                
                {lang === "zh-TW" && (
                    <>
                        <h3 style={{ textAlign: "center" }}>{notice.title_tw}</h3>
                        <div 
                            className="notice-page" 
                            dangerouslySetInnerHTML={{ __html: notice.content_tw }} 
                        />
                    </>
                )}
              {lang === "zh-CN" && (
                    <>
                        <h3 style={{ textAlign: "center" }}>{notice.title_cn}</h3>
                        <div 
                            className="notice-page" 
                            dangerouslySetInnerHTML={{ __html: notice.content_cn }} 
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default NoticeDetailSB;
