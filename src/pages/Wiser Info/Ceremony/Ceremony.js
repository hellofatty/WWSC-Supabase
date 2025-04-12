/** @format */

import "./Ceremony.css";
import { Container} from "@mui/material";
import { useTranslation } from "react-i18next";
import CustomTab from "../../../components/CustomTab/CustomTab";
import { PressContent, NewsContent, TvContent } from "./CeremonyContents";
import { PressContentTw, NewsContentTw, TvContentTw } from "./CeremonyContentsTW";
import { PressContentCn, NewsContentCn, TvContentCn } from "./CeremonyContentsCN";
import CeremonySlide from "./CeremonySlide";

// import YoutubeEmbed from "../../../components/YoutubeEmbed/YoutubeEmbed";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { PrimaryTitle } from "../../../components/Text/Title/Title";

export default function Ceremony() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;
    

    const content = [
        { title: "Press Release", content: <PressContent /> },
        { title: "News Reports", content: <NewsContent /> },
        { title: "TV Reports", content: <TvContent /> },
    ];

    const content_TW = [
        { title: "新聞發佈", content: <PressContentTw /> },
        { title: "新聞報導", content: <NewsContentTw /> },
        { title: "電視報導", content: <TvContentTw /> },
    ];

    const content_CN = [
        { title: "新闻发佈", content: <PressContentCn /> },
        { title: "新闻报导", content: <NewsContentCn /> },
        { title: "电视报导", content: <TvContentCn/> },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
            <PrimaryTitle text={t("ceremony.title")}/>
            <CeremonySlide />
            {lang === "en" && <CustomTab content={content} />}
            {lang === "zh-TW" && <CustomTab content={content_TW} />}
            {lang === "zh-CN" && <CustomTab content={content_CN} />}
        </Container>
    );
}
