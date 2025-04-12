/** @format */

import React from "react";
import { useTranslation } from "react-i18next";
import CustomTab from "../../../components/CustomTab/CustomTab";
import { Container, useMediaQuery } from "@mui/material";
import { USAG3TrainingContent, HKG3TrainingContent } from "./G3TrainingContent";

function G3TrainingAlbs() {
    
    const { t } = useTranslation("global");
     const mb = useMediaQuery("(max-width:600px)");

    const content = [
        { title: t("gallery.training.G3-tab_1"), content: <USAG3TrainingContent /> },
        { title: t("gallery.training.G3-tab_2"), content: <HKG3TrainingContent /> },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
           
           <div className={!mb ? "page-primary-title" : "page-secondary-title"}>{t("gallery.training.G3-title")}</div>
                <CustomTab content={content} />
          
        </Container>
    );
}

export default G3TrainingAlbs;
