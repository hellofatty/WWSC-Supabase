/** @format */

import "./Dress.css";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import { DressContentEng, DressContentCN, DressContentTW } from "./DressContents";
import dressImg from "../../../assets/Wiser Sport/Uniform-min.jpg";
import { CustomCarousel } from "../../../components/CustomCarousel/CustomCarousel";

export default function Dress() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;
    // console.log(i18n.language);

    const data = [
        { src: "/assets/Dress/dress1-min.jpg", alt: "dress 1", id: 1 },
        { src: "/assets/Dress/dress2-min.jpg", alt: "dress 2", id: 2 },
        // { src: "/assets/Dress/dress3-min.jpg", alt: "dress 3", id: 3 },
        { src: "/assets/Dress/dress4-min.jpg", alt: "dress 4", id: 4 },
        { src: "/assets/Dress/dress5-min.jpg", alt: "dress 5", id: 5 },
        // { src: "/assets/Dress/dress6-min.jpg", alt: "dress 6", id: 6 },
        { src: "/assets/Dress/dress7-min.jpg", alt: "dress 7", id: 7 },
        { src: "/assets/Dress/dress8-min.png", alt: "dress 8", id: 8 },
        { src: "/assets/Dress/dress9-min.jpg", alt: "dress 9", id: 9 },
        // { src: "/assets/Dress/dress10-min.jpg", alt: "dress 10", id: 10 },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
            <div className="image-container">
                <img src={dressImg} alt="WWSC dress code"/>
                <div className="image-caption">{t("dress_code.img_caption")}</div>
            </div>

            {lang === "en" ? DressContentEng : lang === "zh-TW" ? DressContentTW : DressContentCN}

            <CustomCarousel data={data} widthPercent={"50%"} />
        </Container>
    );
}
