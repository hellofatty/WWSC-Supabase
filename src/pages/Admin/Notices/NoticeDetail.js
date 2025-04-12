/** @format */

//import stylesheet
import "./NoticeDetail.css";

import { useState } from "react";
// import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
//import translation hook
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import EditNotice from "./EditNotice";

function NoticeDetail() {
    const navigate = useNavigate();

    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;

    // const lang = i18n.language;
    // console.log(i18n.language);
    const { id } = useParams();
    const { document: notice, error } = useDocument("notices", id);
    const [modal, setModal] = useState(false);
    // const location = useLocation();
    // const index = location.state.index;

    const toggle = () => setModal(!modal);

    const closeBtn = (
        <Button onClick={toggle}>
            {/* <i class="bi bi-x-circle" style={{ fontSize: "2rem", color: "gray" }}></i> */}
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

    if (error) {
        return <div className="error">{error}</div>;
    }
    if (!notice) {
        return <div className="loading">Loading...</div>;
    }

    // console.log(notice.id);
    // console.log(typeof (notice.slug));
    // console.log(index);

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
            <div>
                <Modal isOpen={modal} toggle={toggle} backdrop="static" size="lg" centered={true}>
                    <ModalHeader toggle={toggle} close={closeBtn}>
                        <h2>{t("admin.notice-list.update-notice-title")}</h2>
                    </ModalHeader>
                    <ModalBody>
                        <EditNotice notice={notice} toggle={toggle} />
                    </ModalBody>
                </Modal>
            </div>
            <div className="text-container">
                <img src="/assets/WWSC logo_ltr_head.png" alt="wwsc logo" className="notice-logo-img" />
                {lang === "en" && (
                    <>
                        <h3 style={{ textAlign: "center" }}>{notice.title}</h3>

                        <div className="notice-page" dangerouslySetInnerHTML={{ __html: notice.content }} />
                    </>
                )}
                 {lang === "zh-TW" && (
                    <>
                        <h3 style={{ textAlign: "center" }}>{notice.titleTw}</h3>

                        <div className="notice-page" dangerouslySetInnerHTML={{ __html: notice.contentTw }} />
                    </>
                )}
                 {lang === "zh-CN" && (
                    <>
                        <h3 style={{ textAlign: "center" }}>{notice.titleCn}</h3>

                        <div className="notice-page" dangerouslySetInnerHTML={{ __html: notice.contentCn }} />
                    </>
                )}
            </div>
        </div>
    );
}

export default NoticeDetail;
