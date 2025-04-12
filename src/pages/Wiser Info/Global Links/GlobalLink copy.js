/** @format */

import "./GlobalLink.css";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";

import CustomTab from "../../../components/CustomTab/CustomTab";
import {
    Link1Content,
    ChinaContent,
    HKContent,
    TWContent,
    ThailandContent,
    MalaysiaContent,
    VietnamContent,
} from "./GLContents";

export default function GlobalLink() {
    const { t } = useTranslation("global");

    const link2SubContents = [
        { title: t("global.subtab_1"), content: <ChinaContent /> },
        { title: t("global.subtab_3"), content: <HKContent /> },
        { title: t("global.subtab_2"), content: <TWContent /> },
        { title: t("global.subtab_4"), content: <ThailandContent /> },
        { title: t("global.subtab_5"), content: <MalaysiaContent /> },
        { title: t("global.subtab_6"), content: <VietnamContent /> },
    ];

    function Link2Content() {
        return (
            <div>
                <CustomTab content={link2SubContents} />
            </div>
        );
    }

    const content = [
        { title: t("global.tab_1"), content: <Link1Content /> },
        { title: t("global.tab_2"), content: <Link2Content /> },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
            <div className="text-container">
                <div className="page-primary-title">{t("global.title")}</div>
                <p style={{ textIndent: "0" }}>
                    {t("global.desc")}{" "}
                    <i>
                        <a href="mailto:info@worldwisersport.org">info@worldwisersport.org</a>
                    </i>
                </p>
                <CustomTab content={content} />
            </div>
        </Container>
    );
}
