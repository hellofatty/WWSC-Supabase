/** @format */

import "./NoticePage.css";
import Button from "@mui/material/Button";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";

export default function NoticePage({ notice }) {
    const navigate = useNavigate();

    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
            <div className="wwsc-container">
                <div className="notice-button-container" style={{ marginLeft: "auto" }}>
                    <Button
                        variant="outlined"
                        startIcon={<LowPriorityIcon />}
                        onClick={() => navigate(`/wiser-info/wwsc-notices-1`)}
                    >
                        {t("admin.notice-list.back-btn")}
                    </Button>
                </div>
                <div className="text-container">
                    <img src="/assets/WWSC logo_ltr_head.png" alt="wwsc logo" className="notice-logo-img" />
                    {lang === "en" && (
                        <>
                            <div className="page-primary-title" style={{ textAlign: "center" }}>{notice.title}</div>

                            <div className="notice-page" dangerouslySetInnerHTML={{ __html: notice.content }} />
                        </>
                    )}
                    {lang === "zh-TW" && (
                        <>
                            <div className="page-primary-title" style={{ textAlign: "center" }}>{notice.title_tw}</div>

                            <div className="notice-page" dangerouslySetInnerHTML={{ __html: notice.content_tw }} />
                        </>
                    )}{" "}
                    {lang === "zh-CN" && (
                        <>
                            <div className="page-primary-title" style={{ textAlign: "center" }}>{notice.title_cn}</div>

                            <div className="notice-page" dangerouslySetInnerHTML={{ __html: notice.content_cn }} />
                        </>
                    )}
                </div>
            </div>
        </Container>
    );
}
