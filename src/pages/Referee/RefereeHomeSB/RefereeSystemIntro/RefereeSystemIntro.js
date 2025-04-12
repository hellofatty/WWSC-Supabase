/** @format */

import "./RefereeSystemIntro.css";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import CustomTab from "../../../../components/CustomTab/CustomTab";
import { content } from "./SystemContents";
import { content_TW } from "./SystemContentsTW";
import { content_CN } from "./SystemContentsCN";

import { PrimaryTitle } from "../../../../components/Text/Title/Title";

export default function RefereeSystemIntro() {
    const { i18n, t } = useTranslation("global");

    const lang = i18n.language;

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
            <>
                <div style = {{width: "100%"}}>
                    
                    {/* <AssignmentIndIcon
                        style={{
                            color: "tomato",
                            marginRight: "12px",
                            fontSize: "2.5rem"
                        }}
                        sx={{
                            lineHeight: 2, // Line height
                            letterSpacing: 0.5, // Letter spacing
                            pb: "1px", // Padding
                            mt: "6px", // Margin top
                            mb: 2, // Margin bottom
                        }}
                    />
                    <div style={{width: "100%"}}> */}
                    <PrimaryTitle text={t("referee.system.title")}/>
                </div>
                {lang === "en" && <CustomTab content={content} />}
                {lang === "zh-TW" && <CustomTab content={content_TW} />}
                {lang === "zh-CN" && <CustomTab content={content_CN} />}
            </>
        </Container>
    );
}
