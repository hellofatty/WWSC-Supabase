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
import {
    HongKongPhotoConent,
    TwKaohsiungPhotoConent,
    TwLilePhotoConent,
    TwMiaoliPhotoConent,
    TwROCPhotoConent,
    TwTaichungPhotoConent,
    TwTainanPhotoConent,
    TwTWMLPhotoConent,
    TwTWWBPhotoConent,
    TwYilanPhotoConent,
} from "./Contents/WorldWiserAlbsContent3";
import { useState } from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";

export default function WorldWiserAlbs3() {
    const { t } = useTranslation("global");
       const mb = useMediaQuery("(max-width:600px)");
    const [index, setIndex] = useState(0);


    const Taiwan1PhotoConent = [
        <div>
            {/* <CustomTab content={Taiwan1Photos} /> */}
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
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal", fontSize: "0.8rem" }}
                        >
                            {t("gallery.world.TW_photo_subtab_1")}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TwROCPhotoConent />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal", fontSize: "0.8rem" }}
                        >
                            {t("gallery.world.TW_photo_subtab_2")}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TwTWWBPhotoConent />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal", fontSize: "0.8rem" }}
                        >
                            {t("gallery.world.TW_photo_subtab_3")}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TwTWMLPhotoConent />
                    </AccordionDetails>
                </Accordion>
            </AccordionGroup>
        </div>,
    ];

  
    const Taiwan2PhotoConent = [
        <div>
            {/* <CustomTab content={Taiwan2Photos} /> */}
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
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal", fontSize: "0.8rem" }}
                        >
                            {t("gallery.world.TW_photo_subtab_4")}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TwTaichungPhotoConent />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal", fontSize: "0.8rem" }}
                        >
                            {t("gallery.world.TW_photo_subtab_5")}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TwLilePhotoConent />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal", fontSize: "0.8rem" }}
                        >
                            {t("gallery.world.TW_photo_subtab_6")}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TwMiaoliPhotoConent />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal", fontSize: "0.8rem" }}
                        >
                            {t("gallery.world.TW_photo_subtab_7")}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TwYilanPhotoConent />
                    </AccordionDetails>
                </Accordion>
            </AccordionGroup>
        </div>,
    ];
    // const Taiwan3PhotoConent = <div>Taiwan Photo Content 3</div>;
  

    const Taiwan3PhotoConent = [
        <div>
            {/* <CustomTab content={Taiwan3Photos} /> */}
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
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal", fontSize: "0.8rem" }}
                        >
                            {t("gallery.world.TW_photo_subtab_8")}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TwTainanPhotoConent />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal", fontSize: "0.8rem" }}
                        >
                            {t("gallery.world.TW_photo_subtab_9")}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TwKaohsiungPhotoConent />
                    </AccordionDetails>
                    </Accordion>
            </AccordionGroup>
        </div>,
    ];

    const photoContent = [
        { title: t("gallery.world.photo_tab_7"), content: <HongKongPhotoConent />, id: 1 },
        { title: t("gallery.world.photo_tab_8-1"), content: Taiwan1PhotoConent, id: 2 },
        { title: t("gallery.world.photo_tab_8-2"), content: Taiwan2PhotoConent, id: 3 },
        { title: t("gallery.world.photo_tab_8-3"), content: Taiwan3PhotoConent, id: 4 },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
             <div className={!mb ? "page-primary-title" : "page-secondary-title"}>{t("gallery.world.albums_title_3")}</div>
            <CustomTab content={photoContent} />
        </Container>
    );
}
