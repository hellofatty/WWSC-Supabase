/** @format */

import "./Introduction.css";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import introImg from "../../../assets/Landing/landing_1-min.jpg";
import IntroEng from "./IntroEng";
import IntroTW from "./IntroTW";
import IntroCN from "./IntroCN";

export default function Introduction() {
    const { i18n, t } = useTranslation();
    const lang = i18n.language;

    // console.log(i18n.language);

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
            <div className="image-container">
                <img
                    src={introImg}
                    alt={t("about-us.intro-img-alt")}
                    className="image-container"

                    // loading="lazy"
                />
            </div>

            <div className="img-text-container">
                {lang === "en" ? <IntroEng /> : lang === "zh-TW" ? <IntroTW /> : <IntroCN />}
            </div>
        </Container>
    );
}
