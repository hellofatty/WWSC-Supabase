/** @format */

import "./Event.css";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import {
    EventDescrip,
    Yr2025Content,
    Yr2024Content,
    Yr2023Content,
    Yr2022Content,
    Yr2021Content,
    Yr2020Content,
    Yrs201720182019Content,
    Yrs201420152016Content,
    Yrs20122013Content,
} from "./EventContent";

import {
    Yr2025ContentTW,
    Yr2024ContentTW,
    Yr2023ContentTW,
    Yr2022ContentTW,
    Yr2021ContentTW,
    Yr2020ContentTW,
    Yrs201720182019ContentTW,
    Yrs201420152016ContentTW,
    Yrs20122013ContentTW,
    EventDescripTW,
} from "./EventContentTW";

import {
    Yr2025ContentCN,
    Yr2024ContentCN,
    Yr2023ContentCN,
    Yr2022ContentCN,
    Yr2021ContentCN,
    Yr2020ContentCN,
    Yrs201720182019ContentCN,
    Yrs201420152016ContentCN,
    Yrs20122013ContentCN,
    EventDescripCN,
} from "./EventContentCN";

import CustomTab from "../../../components/CustomTab/CustomTab";

export default function Event() {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;

    const content = [
        { title: "2025", content: <Yr2025Content /> },
        { title: "2024", content: <Yr2024Content /> },
        { title: "2023", content: <Yr2023Content /> },
        { title: "2022", content: <Yr2022Content /> },
        { title: "2021", content: <Yr2021Content /> },
        { title: "2020", content: <Yr2020Content /> },
        { title: "2017-2019", content: <Yrs201720182019Content /> },
        { title: "2014-2016", content: <Yrs201420152016Content /> },
        { title: "2012-2013", content: <Yrs20122013Content /> },
    ];

    const content_TW = [
        { title: "2025", content: <Yr2025ContentTW /> },
        { title: "2024", content: <Yr2024ContentTW /> },
        { title: "2023", content: <Yr2023ContentTW /> },
        { title: "2022", content: <Yr2022ContentTW /> },
        { title: "2021", content: <Yr2021ContentTW /> },
        { title: "2020", content: <Yr2020ContentTW /> },
        { title: "2017-2019", content: <Yrs201720182019ContentTW /> },
        { title: "2014-2016", content: <Yrs201420152016ContentTW /> },
        { title: "2012-2013", content: <Yrs20122013ContentTW /> },
    ];

    const content_CN = [
        { title: "2025", content: <Yr2025ContentCN /> },
        { title: "2024", content: <Yr2024ContentCN /> },
        { title: "2023", content: <Yr2023ContentCN /> },
        { title: "2022", content: <Yr2022ContentCN /> },
        { title: "2021", content: <Yr2021ContentCN /> },
        { title: "2020", content: <Yr2020ContentCN /> },
        { title: "2017-2019", content: <Yrs201720182019ContentCN /> },
        { title: "2014-2016", content: <Yrs201420152016ContentCN /> },
        { title: "2012-2013", content: <Yrs20122013ContentCN /> },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
            <div className="text-container">
                <div className="page-primary-title">{t("event.title")}</div>
                {lang === "en" && (
                    <>
                        <EventDescrip />
                        <CustomTab content={content} />
                    </>
                )}{" "}
                {lang === "zh-TW" && (
                    <>
                        <EventDescripTW />
                        <CustomTab content={content_TW} />
                    </>
                )}{" "}
                {lang === "zh-CN" && (
                    <>
                        <EventDescripCN />
                        <CustomTab content={content_CN} />
                    </>
                )}
            </div>
        </Container>
    );
}
