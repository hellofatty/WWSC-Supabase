/** @format */

import "./Rules.css";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { updatedContent, updatedContent_zh_TW, updatedContent_zh_CN } from "./UpdatedContents";
import { oldContent, oldContent_zh_TW, oldContent_zh_CN } from "./OldContents";
import CustomTab from "../../../components/CustomTab/CustomTab";
import { PrimaryTitle } from "../../../components/Text/Title/Title";

export default function Rules() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;

    const content = [
        { title: t("rule.tab_new"), content: updatedContent },
        { title: t("rule.tab_old"), content: oldContent },
    ];

    const content_zh_TW = [
        { title: t("rule.tab_new"), content: updatedContent_zh_TW },
        { title: t("rule.tab_old"), content: oldContent_zh_TW },
    ];

    const content_zh_CN = [
        { title: t("rule.tab_new"), content: updatedContent_zh_CN },
        { title: t("rule.tab_old"), content: oldContent_zh_CN },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
          
            <PrimaryTitle text={t("rule.title")}/> 
              
                {lang === "en" && <CustomTab content={content} />}
                {lang === "zh-TW" && <CustomTab content={content_zh_TW} />}
                {lang === "zh-CN" && <CustomTab content={content_zh_CN} />}
          
        </Container>
    );
}
