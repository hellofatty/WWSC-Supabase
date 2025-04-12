/** @format */

//import stylesheet
import "./Mission.css";
import { Container } from "@mui/material";
// import React, { Suspense, lazy } from "react";

import { MissionContentEng, MissionContentTW, MissionContentCN } from "./MissionContent";
import logoltrImg from "../../../assets/WWSC logo_ltr_head-min.png";

//import translation hook
import { useTranslation } from "react-i18next";

// create Mission page

export default function Mission() {
    const { i18n } = useTranslation("global");
    const lang = i18n.language;

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
            <div className="text-container">
                <img
                    src={logoltrImg}
                    alt="wwsc logo"
                    className="logo-img"
                    style={{ margin: "0, auto" }}
                    loading="lazy"
                />
               
                    {lang === "en" && <MissionContentEng />}
                    {lang === "zh-TW" && <MissionContentTW />}
                    {lang === "zh-CN" && <MissionContentCN />}
            
            </div>
        </Container>
    );
}
