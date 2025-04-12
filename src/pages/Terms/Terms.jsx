/** @format */

import "./Terms.css";
import { Container, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import termImg from "../../../src/assets/Other/terms_conditions.jpg";
import TermsEng from "./TermsEng";
import TermsTW from "./TermsTW";
import TermsCN from "./TermsCN";

export default function Terms() {
    const { i18n } = useTranslation("global");
    const lang = i18n.language;
    const mb = useMediaQuery("(max-width:600px)");

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
            <div className="image-container">
                <img src={termImg} alt="terms_conditions" style={!mb?{height:"260px", objectFit:"cover"}:{height:"160px", objectFit:"cover"}}/>
            </div>
            <div className="img-text-container">
                {lang === "en" && <TermsEng />}
                {lang === "zh-TW" && <TermsTW />}
                {lang === "zh-CN" && <TermsCN />}
            </div>
         </Container>
    );
}
