/** @format */

import "./Equipment.css";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import { BallsContent, FlagsContent, RopeContent } from "./EqContents.js";
import { BallsContentTw, FlagsContentTw, RopeContentTw } from "./EqContentsTw.js";
import { BallsContentCn, FlagsContentCn, RopeContentCn } from "./EqContentsCn.js";
import CustomTab from "../../../components/CustomTab/CustomTab";
import { PrimaryTitle } from "../../../components/Text/Title/Title";

export default function Equipment() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;

    const content = [
        { title: t("equipment.tab_balls"), content: <BallsContent /> },
        { title: t("equipment.tab_flags"), content: <FlagsContent /> },
        { title: t("equipment.tab_rope"), content: <RopeContent /> },
    ];

    const contentTw = [
        { title: t("equipment.tab_balls"), content: <BallsContentTw /> },
        { title: t("equipment.tab_flags"), content: <FlagsContentTw /> },
        { title: t("equipment.tab_rope"), content: <RopeContentTw /> },
    ];

    const contentCn = [
        { title: t("equipment.tab_balls"), content: <BallsContentCn /> },
        { title: t("equipment.tab_flags"), content: <FlagsContentCn /> },
        { title: t("equipment.tab_rope"), content: <RopeContentCn /> },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
            <PrimaryTitle text={t("equipment.title")}/>

            {lang === "en" && <CustomTab content={content} />}
            {lang === "zh-TW" && <CustomTab content={contentTw} />}
            {lang === "zh-CN" && <CustomTab content={contentCn} />}
        </Container>
    );
}
