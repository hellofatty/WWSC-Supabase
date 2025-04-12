/** @format */

import "./WorldWiserAlbs.css";
// import { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomTab from "../../../components/CustomTab/CustomTab";
import { Container, useMediaQuery } from "@mui/material";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { MalaysiaPhotoConent, ThailandPhotoConent, VietnamPhotoConent } from "./Contents/WorldWiserAlbsContent3";
import { useState } from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";

export default function WorldWiserAlbs4() {
    const { t } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");
    const [index, setIndex] = useState(0);
    const photoContent = [
        { id: 1, title: t("gallery.world.photo_tab_10"), content: <MalaysiaPhotoConent /> },
        { id: 2, title: t("gallery.world.photo_tab_9"), content: <ThailandPhotoConent /> },
        { id: 3, title: t("gallery.world.photo_tab_11"), content: <VietnamPhotoConent /> },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
           <div className={!mb ? "page-primary-title" : "page-secondary-title"}>{t("gallery.world.albums_title_4")}</div>
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
                                {t("gallery.world.photo_tab_10")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <MalaysiaPhotoConent />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.world.photo_tab_9")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ThailandPhotoConent />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.world.photo_tab_11")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <VietnamPhotoConent />
                        </AccordionDetails>
                    </Accordion>
                </AccordionGroup>
            )}
        </Container>
    );
}
