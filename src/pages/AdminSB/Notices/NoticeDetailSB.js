import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supabase } from "../../../supabase/supabaseClient";
import "./NoticeDetailSB.css";

// MUI Components
import { 
    Button,
    CircularProgress 
} from "@mui/material";
import {
    Edit as EditIcon,
    CancelOutlined as CancelOutlinedIcon,
    LowPriority as LowPriorityIcon
} from "@mui/icons-material";

// Components
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import EditNoticeSB from "./EditNoticeSB";


export default function NoticeDetailSB() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation("global");
    const { id } = useParams();
    const lang = i18n.language;

    // State
    const [notice, setNotice] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);

    // Fetch notice data
    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const { data, error } = await supabase
                    .from("notices")
                    .select("*")
                    .eq("id", id)
                    .single();

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

    const renderContent = () => {
        const contentMap = {
            "en": {
                title: notice.title,
                content: notice.content
            },
            "zh-TW": {
                title: notice.title_tw,
                content: notice.content_tw
            },
            "zh-CN": {
                title: notice.title_cn,
                content: notice.content_cn
            }
        };

        const { title, content } = contentMap[lang] || contentMap["en"];

        return (
            <>
                <div className="page-secondary-title" style={{ textAlign: "center" }}>
                    {title}
                </div>
                <br />
                <div className="notice-page" dangerouslySetInnerHTML={{ __html: content }} />
            </>
        );
    };

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
                    onClick={() => navigate(`/admin-zone-SB/notice-list`)}
                >
                    {t("admin.notice-list.back-btn")}
                </Button>
                <Button variant="contained" startIcon={<EditIcon />} onClick={toggle}>
                    {t("admin.notice-list.edit")}
                </Button>
            </div>

            <Modal isOpen={modal} toggle={toggle} backdrop="static" size="lg" centered={true}>
                <ModalHeader toggle={toggle} close={closeBtn}>
                    <div className="page-primary-title" style={{borderBottom:"0"}}>{t("admin.notice-list.update-notice-title")}</div>
                </ModalHeader>
                <ModalBody>
                    <EditNoticeSB notice={notice} toggle={toggle} />
                </ModalBody>
            </Modal>

            <div className="text-container">
                <img src="/assets/WWSC logo_ltr_head.png" alt="wwsc logo" className="notice-logo-img" />

                {renderContent()}
             
            </div>
        </div>
    );
}


