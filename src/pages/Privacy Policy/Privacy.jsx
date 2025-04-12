/** @format */

import "./Privacy.css";
import { Container, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

import privacyImg from "../../../src/assets/Other/Privacy-Policy.jpg";
import { PrivacyContentEng, PrivacyContentTW, PrivacyContentCN } from "./PrivacyContent.js";

export default function Privacy() {
    const { i18n } = useTranslation("global");
     const mb = useMediaQuery("(max-width:600px)");

    const lang = i18n.language;
    // console.log(i18n.language);

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
            <div className="image-container">
                <img src={privacyImg} alt="privacy policy" style={!mb?{height:"260px", objectFit:"cover"}:{height:"160px", objectFit:"cover"}}/>
            </div>



            <div className="img-text-container">
                {lang === "en" && <PrivacyContentEng />}
                {lang === "zh-TW" && <PrivacyContentTW />}
                {lang === "zh-CN" && <PrivacyContentCN />}
            </div>
        </Container>
    );
}
