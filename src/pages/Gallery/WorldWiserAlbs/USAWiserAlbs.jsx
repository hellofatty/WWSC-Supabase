/** @format */

import "./WorldWiserAlbs.css";
// import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, useMediaQuery } from "@mui/material";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import CustomTab from "../../../components/CustomTab/CustomTab";
import { USAPhotoConent1, USAPhotoConent2, USAPhotoConent3, USAPhotoConent4 } from "./Contents/WorldWiserAlbsContent1";
import { useState } from "react";

export default function USAWiserAlbs() {
    const { t } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");
    const [index, setIndex] = useState(0);

    const USAPhotos = [
        { id: 1, title: t("gallery.world.usa_photo_subtab_1"), content: <USAPhotoConent1 /> },
        { id: 2, title: t("gallery.world.usa_photo_subtab_2"), content: <USAPhotoConent2 /> },
        { id: 3, title: t("gallery.world.usa_photo_subtab_3"), content: <USAPhotoConent3 /> },
        { id: 4, title: t("gallery.world.usa_photo_subtab_4"), content: <USAPhotoConent4 /> },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
            <div className={!mb ? "page-primary-title" : "page-secondary-title"}>{t("gallery.world.albums_title_USA")}</div>
            {!mb ? (
                <CustomTab content={USAPhotos} />
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
                                {t("gallery.world.usa_photo_subtab_1")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <USAPhotoConent1 />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.world.usa_photo_subtab_2")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <USAPhotoConent2 />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.world.usa_photo_subtab_3")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <USAPhotoConent3 />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.world.usa_photo_subtab_4")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <USAPhotoConent4 />
                        </AccordionDetails>
                    </Accordion>
                </AccordionGroup>
            )}
        </Container>
    );
}
