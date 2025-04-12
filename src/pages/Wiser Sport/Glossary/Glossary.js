/** @format */

import "./Glossary.css";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import {
    alphabetContent,
    alphabetContent_zh_TW,
    alphabetContent_zh_CN,
    orderContent,
    orderContent_zh_TW,
    orderContent_zh_CN,
} from "./GlossaryContents";
import CustomTab from "../../../components/CustomTab/CustomTab";
import { PrimaryTitle } from "../../../components/Text/Title/Title";

export default function Glossary() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;

    const content = [
        { title: t("terms.tab_rule"), content: orderContent },
        { title: t("terms.tab_abc"), content: alphabetContent },
    ];

    const content_zh_TW = [
        { title: t("terms.tab_rule"), content: orderContent_zh_TW },
        { title: t("terms.tab_abc"), content: alphabetContent_zh_TW },
    ];

    const content_zh_CN = [
        { title: t("terms.tab_rule"), content: orderContent_zh_CN },
        { title: t("terms.tab_abc"), content: alphabetContent_zh_CN },
    ];
    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
          
            <PrimaryTitle text={t("terms.title")}/>

            {lang === "en" && <CustomTab content={content} />}
            {lang === "zh-TW" && <CustomTab content={content_zh_TW} />}
            {lang === "zh-CN" && <CustomTab content={content_zh_CN} />}
        </Container>
    );
}
