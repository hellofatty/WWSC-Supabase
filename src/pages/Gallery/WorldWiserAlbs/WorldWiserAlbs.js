/** @format */

import "./WorldWiserAlbs.css";
// import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, useMediaQuery } from "@mui/material";
import CustomTab from "../../../components/CustomTab/CustomTab";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import {
    CanadaPhotoConent,
    GermanyPhotoConent,
    MexicoPhotoConent,
    ParaguayPhotoConent,
    SouthAfricaPhotoConent,
} from "./Contents/WorldWiserAlbsContent1";
import { useState } from "react";

export default function WorldWiserAlbs() {
    const { t } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");
    const [index, setIndex] = useState(0);

    const photoContent = [
        { id: 1, title: t("gallery.world.photo_tab_2"), content: <CanadaPhotoConent /> },
        { id: 2, title: t("gallery.world.photo_tab_3"), content: <ParaguayPhotoConent /> },
        { id: 3, title: t("gallery.world.photo_tab_12"), content: <MexicoPhotoConent /> },
        { id: 4, title: t("gallery.world.photo_tab_4"), content: <GermanyPhotoConent /> },
        { id: 5, title: t("gallery.world.photo_tab_5"), content: <SouthAfricaPhotoConent /> },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
           <div className={!mb ? "page-primary-title" : "page-secondary-title"}>{t("gallery.world.albums_title_1")}</div>
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
                                {t("gallery.world.photo_tab_2")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CanadaPhotoConent />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.world.photo_tab_3")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ParaguayPhotoConent />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.world.photo_tab_12")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <MexicoPhotoConent />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.world.photo_tab_4")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <GermanyPhotoConent />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.world.photo_tab_5")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SouthAfricaPhotoConent />
                        </AccordionDetails>
                    </Accordion>{" "}
                </AccordionGroup>
            )}
        </Container>
    );
}
