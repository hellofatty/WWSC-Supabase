/** @format */

import "./RefereeTraining.css";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import CustomTab from "../../../components/CustomTab/CustomTab";
import { content } from "./TrainingContents";
import { content_TW } from "./TrainingContentsTW";
import { content_CN } from "./TrainingContentsCN";

export default function RefereeTraining() {
    const { i18n, t } = useTranslation("global");

    const lang = i18n.language;

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
            <>
                <div className="page-primary-title">{t("referee.training.title")}</div>
                {lang === "en" && <CustomTab content={content} />}
                {lang === "zh-TW" && <CustomTab content={content_TW} />}
                {lang === "zh-CN" && <CustomTab content={content_CN} />}
            </>
        </Container>
    );
}
