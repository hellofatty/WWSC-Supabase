/** @format */

import "./WorldWiserAlbs.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomTab from "../../../components/CustomTab/CustomTab";
import { Container, useMediaQuery } from "@mui/material";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import {
    CnShanDongPhotoConent,
    CnShanghaiPhotoConent,
    CnShenZhenPhotoConent,
    CnFujianPhotoConent,
    CnHangZhouPhotoConent,
    CnHainanPhotoConent,
} from "./Contents/WorldWiserAlbsContent2";

// import { HongKongPhotoConent } from "./Contents/WorldWiserAlbsContent_3";

export default function WorldWiserAlbs2() {
    const { t } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");
    const [index, setIndex] = useState(0);

    const photoContent = [
        { id: 1, title: t("gallery.world.CN_photo_tab_1"), content: <CnShanghaiPhotoConent /> },
        { id: 2, title: t("gallery.world.CN_photo_tab_2"), content: <CnShanDongPhotoConent /> },
        { id: 3, title: t("gallery.world.CN_photo_tab_3"), content: <CnShenZhenPhotoConent /> },
        { id: 4, title: t("gallery.world.CN_photo_tab_4"), content: <CnFujianPhotoConent /> },
        { id: 5, title: t("gallery.world.CN_photo_tab_5"), content: <CnHangZhouPhotoConent /> },
        { id: 6, title: t("gallery.world.CN_photo_tab_6"), content: <CnHainanPhotoConent /> },
        // { title: t("gallery.world.photo_tab_7"), content: <HongKongPhotoConent />, id: 7 },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
           <div className={!mb ? "page-primary-title" : "page-secondary-title"}>{t("gallery.world.albums_subtitle_cn")}</div>
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
                                {t("gallery.world.CN_photo_tab_1")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CnShanghaiPhotoConent />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.world.CN_photo_tab_2")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CnShanDongPhotoConent />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.world.CN_photo_tab_3")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CnShenZhenPhotoConent />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.world.CN_photo_tab_4")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CnFujianPhotoConent />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.world.CN_photo_tab_5")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CnHangZhouPhotoConent />
                        </AccordionDetails>
                    </Accordion>{" "}
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.world.CN_photo_tab_6")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CnHainanPhotoConent />
                        </AccordionDetails>
                    </Accordion>
                    {/* <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                {t("gallery.world.photo_tab_7")}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <HongKongPhotoConent />
                        </AccordionDetails>
                    </Accordion> */}
                </AccordionGroup>
            )}
        </Container>
    );
}
