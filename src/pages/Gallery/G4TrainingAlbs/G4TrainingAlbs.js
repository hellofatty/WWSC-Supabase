/** @format */

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomTab from "../../../components/CustomTab/CustomTab";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { Container, useMediaQuery } from "@mui/material";
import {
    USAG4TrainingContent,
    BeijingG4TrainingContent,
    ChengduG4TrainingContent,
    HangzhouG4TrainingContent,
    ShenzhenG4TrainingContent,
    TaiwanG4TrainingContent,
    ThailandG4TrainingContent,
} from "./G4TrainingContent";

function TrainingG4Albs() {
    const { t } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");
    const [index, setIndex] = useState(0);

    const photoContent = [
        { id: 1, title: t("gallery.training.G4-tab_1"), content: <USAG4TrainingContent /> },
        { id: 2, title: t("gallery.training.G4-tab_2"), content: <BeijingG4TrainingContent /> },
        { id: 3, title: t("gallery.training.G4-tab_3"), content: <ShenzhenG4TrainingContent /> },
        { id: 4, title: t("gallery.training.G4-tab_4"), content: <ChengduG4TrainingContent /> },
        { id: 5, title: t("gallery.training.G4-tab_5"), content: <HangzhouG4TrainingContent /> },
        { id: 6, title: t("gallery.training.G4-tab_6"), content: <TaiwanG4TrainingContent /> },
        { id: 7, title: t("gallery.training.G4-tab_7"), content: <ThailandG4TrainingContent /> },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
          
          <div className={!mb ? "page-primary-title" : "page-secondary-title"}>{t("gallery.training.G4-title")}</div>
                {!mb ? (
                    <CustomTab content={photoContent} />
                ) : (
                    <AccordionGroup size="sm" variant="soft" transition="0.2s ease">
                        <Accordion
                            expanded={index === 0}
                            onChange={(event, expanded) => {
                                setIndex(expanded ? 0 : null);
                            }}
                        >
                            <AccordionSummary>
                                <div
                                    className="page-subtitle2"
                                    style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                                >
                                    {t("gallery.training.G4-tab_1")}
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <USAG4TrainingContent />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary>
                                <div
                                    className="page-subtitle2"
                                    style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                                >
                                    {t("gallery.training.G4-tab_2")}
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <BeijingG4TrainingContent />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary>
                                <div
                                    className="page-subtitle2"
                                    style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                                >
                                    {t("gallery.training.G4-tab_3")}
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ShenzhenG4TrainingContent />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary>
                                <div
                                    className="page-subtitle2"
                                    style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                                >
                                    {t("gallery.training.G4-tab_4")}
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ChengduG4TrainingContent />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary>
                                <div
                                    className="page-subtitle2"
                                    style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                                >
                                    {t("gallery.training.G4-tab_5")}
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <HangzhouG4TrainingContent />
                            </AccordionDetails>
                        </Accordion>{" "}
                        <Accordion>
                            <AccordionSummary>
                                <div
                                    className="page-subtitle2"
                                    style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                                >
                                    {t("gallery.training.G4-tab_6")}
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TaiwanG4TrainingContent />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.training.G4-tab_7")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ThailandG4TrainingContent />
                        </AccordionDetails>
                    </Accordion>
                    </AccordionGroup>
                )}
          
        </Container>
    );
}

export default TrainingG4Albs;
