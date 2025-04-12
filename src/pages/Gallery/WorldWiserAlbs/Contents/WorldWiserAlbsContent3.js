/** @format */

import "../WorldWiserAlbs.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
// import CustomTab from "../../../components/CustomTab/CustomTab";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// ======= Import Slides======
import {
    Vietnam_New_Slides,
    Vietnam_Old_Slides,
    Thailand_New_Slides,
    Thailand_Old_Slides,
    Malaysia_New_Slides,
    Malaysia_Old_Slides,
    HK_AsianCup_Slides,
    HK_1_Slides,
    HK_2_Slides,
    HK_3_Slides,
} from "../../../../data/carouselDataAsia";

import {
    TW_Kaohsiung_1_Slides,
    TW_Kaohsiung_2_Slides,
    TW_Kaohsiung_3_Slides,
    TW_Tainan_1_Slides,
    TW_Tainan_2_Slides,
    TW_Tainan_3_Slides,
    TW_TWML_1_Slides,
    TW_TWML_2_Slides,
    TW_TWML_3_Slides,
    TW_Lile_1_Slides,
    TW_Lile_2_Slides,
    TW_Lile_3_Slides,
    TW_Miaoli_1_Slides,
    TW_Miaoli_2_Slides,
    TW_Yilan_1_Slides,
    TW_Yilan_2_Slides,
    TW_Yilan_3_Slides,
    TW_Taichung_1_Slides,
    TW_Taichung_2_Slides,
    TW_Taichung_3_Slides,
    TW_TWWB_1_Slides,
    TW_TWWB_2_Slides,
    TW_TWWB_3_Slides,
    TW_ROC_1_Slides,
    TW_ROC_2_Slides,
    TW_ROC_3_Slides,
} from "../../../../data/carouselDataAsia";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export function HongKongPhotoConent() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    // const lang = i18n.language;
    const isSmallScreen = useMediaQuery("(min-width:900px)");
    const mb = useMediaQuery("(max-width:600px)");
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };
    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 40,
        height: 40,
        cursor: "pointer",
        // fontSize: "2 rem",
        // color: "white",
    };

    const indicatorStyles = {
        background: "#fff",
        width: 8,
        height: 8,
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_hongkong")}
            </div>
            <p style={{ textIndent: "6px", fontSize: "0.8rem" }}>{t("gallery.world.hongkong_photos")}</p>
            <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/HKWA_logo.png"
                    alt="Hong Kong Wiser Association Logo"
                    className="org-logo"
                    loading="lazy"
                />

                <div>
                    {/* <div className="album-org-title">{t("global.name_11")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/wiserhk"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_11")}</span>
                        </a>
                    </div>
                </div>
            </div>

            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                        sx={{
                            "& .MuiTabs-flexContainer": {
                                height: "55px",
                            },
                        }}
                    >
                        <Tab
                            icon={<InsertPhotoIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <div className={!mb ? "page-subtitle" : "page-subtitle2"} style={{ textAlign: "center" }}>
                        {t("gallery.world.hk_photo_title_1")}
                    </div>

                    <div className="album-flex">
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {HK_AsianCup_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {HK_1_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {HK_2_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {HK_3_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=321&href=https%3A%2F%2Fwww.facebook.com%2Fwiserhk%2Fvideos%2F507804846522038%2F&show_text=false&width=560&t=0"
                            width="560"
                            height="321"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="Wiserball Asain Cup Vieo"
                        ></iframe>
                    </div>
                    <div className="album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/ILZ30W_CfsU?si=-Qba-FAgVSw3y5mE"
                            title="YouTube video player"
                           
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fwiserhk%2Fvideos%2F3190603854414414%2F&show_text=false&width=560&t=0"
                            width="560"
                            height="321"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="Wiserball Cospaly"
                        ></iframe>
                    </div>
                    {/* <div className="album-video-item">
                    <iframe src="https://www.facebook.com/plugins/video.php?height=373&href=https%3A%2F%2Fwww.facebook.com%2Fwiserhk%2Fvideos%2F2185036145090226%2F&show_text=false&width=560&t=0" width="560" height="321" style={{ border: "none", overflow: "hidden" }}
                           
                           allowFullScreen="true"
                           allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                           title="Wiserball Cospaly"></iframe>
                    </div> */}
                </CustomTabPanel>
            </Box>

            <br />

            {/* Hong Kong Wiser Association */}
        </>
    );
}

export function MalaysiaPhotoConent() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    // const lang = i18n.language;
    const isSmallScreen = useMediaQuery("(min-width:900px)");
    const mb = useMediaQuery("(max-width:600px)");
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };
    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 40,
        height: 40,
        cursor: "pointer",
        // fontSize: "2 rem",
        // color: "white",
    };

    const indicatorStyles = {
        background: "#fff",
        width: 8,
        height: 8,
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_malaysia")}
            </div>

            <p style={{ textIndent: "6px", fontSize: "0.8rem" }}>{t("gallery.world.malaysia_photos")}</p>
            {/* Malaysia Wiser Ball Association */}
            <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/Malaysia.jpg"
                    alt="Malaysia Wiser Ball Association Logo"
                    className="org-logo"
                />

                <div>
                    {/* <div className="album-org-title">{t("global.name_13")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/wiserball.ml"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_13")}</span>
                        </a>
                    </div>
                </div>
            </div>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                        sx={{
                            "& .MuiTabs-flexContainer": {
                                height: "55px",
                            },
                        }}
                    >
                        <Tab
                            icon={<InsertPhotoIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <div className="album-flex">
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {Malaysia_New_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {Malaysia_Old_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    {/* <div className="album-video-item">
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Ffw2appl%2Fvideos%2F1496883840998534%2F&show_text=false&width=560&t=0"
                                width="560"
                                height="314"
                                style={{ border: "none", overflow: "hidden" }}
                               
                                allowFullScreen="true"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                title="2024利樂盃高智爾球友誼邀請賽"
                            ></iframe>
                        </div> */}
                </CustomTabPanel>
            </Box>
        </>
    );
}

export function ThailandPhotoConent() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    // const lang = i18n.language;
    const isSmallScreen = useMediaQuery("(min-width:900px)");
    const mb = useMediaQuery("(max-width:600px)");
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };
    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 40,
        height: 40,
        cursor: "pointer",
        // fontSize: "2 rem",
        // color: "white",
    };

    const indicatorStyles = {
        background: "#fff",
        width: 8,
        height: 8,
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_thailand")}
            </div>
            <p style={{ textIndent: "0", fontSize: "0.8rem" }}>{t("gallery.world.thailand_photos")}</p>
            {/* Thailand Wiser Ball */}
            <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/Thailand.png"
                    alt="Thailand Wiser Ball Association Logo"
                    className="org-logo"
                    loading="lazy"
                />

                <div>
                    {/* <div className="album-org-title">{t("global.name_12")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/ThailandWiserFan"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_12")}</span>
                        </a>
                    </div>
                </div>
            </div>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                        sx={{
                            "& .MuiTabs-flexContainer": {
                                height: "55px",
                            },
                        }}
                    >
                        <Tab
                            icon={<InsertPhotoIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <div className="album-flex">
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {Thailand_New_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        <br />
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {Thailand_Old_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    {/* <div className="album-video-item">
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Ffw2appl%2Fvideos%2F1496883840998534%2F&show_text=false&width=560&t=0"
                                width="560"
                                height="314"
                                style={{ border: "none", overflow: "hidden" }}
                               
                                allowFullScreen="true"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                title="2024利樂盃高智爾球友誼邀請賽"
                            ></iframe>
                        </div> */}
                </CustomTabPanel>
            </Box>

            <br />
            {/* <div classname="videoitem" style = {{marginBottom:"20px", margin:"0, auto"}}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/daVUr3awt40?si=B0TJ6Ljd1f3bFslb"
                    title="YouTube video player"
                   
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   
                ></iframe>
            </div> */}

            <br />
        </>
    );
}

export function VietnamPhotoConent() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    // const lang = i18n.language;
    const isSmallScreen = useMediaQuery("(min-width:900px)");
    const mb = useMediaQuery("(max-width:600px)");
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };
    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 40,
        height: 40,
        cursor: "pointer",
        // fontSize: "2 rem",
        // color: "white",
    };

    const indicatorStyles = {
        background: "#fff",
        width: 8,
        height: 8,
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_vietnam")}
            </div>
            <p style={{ textIndent: "0", fontSize: "0.8rem" }}>{t("gallery.world.vietnam_photos")}</p>
            {/* Vietnam Wiser Ball */}
            <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/Vietnam.png"
                    alt="Vietnam Wiser Ball Logo"
                    className="org-logo"
                    loading="lazy"
                />

                <div>
                    {/* <div className="album-org-title">{t("global.name_14")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/VietnamWiserBall"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_14")}</span>
                        </a>
                    </div>
                </div>
            </div>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                        sx={{
                            "& .MuiTabs-flexContainer": {
                                height: "55px",
                            },
                        }}
                    >
                        <Tab
                            icon={<InsertPhotoIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <div className="album-flex">
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {Vietnam_New_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                        <hr />
                        {/* <h5>{t("gallery.world.usawc_photo_title_2")}</h5> */}
                        <br />
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {Vietnam_Old_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <div className="album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/daVUr3awt40?si=B0TJ6Ljd1f3bFslb"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </CustomTabPanel>
            </Box>

            <br />
        </>
    );
}

export function TwKaohsiungPhotoConent() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    // const lang = i18n.language;
    const isSmallScreen = useMediaQuery("(min-width:900px)");
    const mb = useMediaQuery("(max-width:600px)");
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };
    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 40,
        height: 40,
        cursor: "pointer",
        // fontSize: "2 rem",
        // color: "white",
    };

    const indicatorStyles = {
        background: "#fff",
        width: 8,
        height: 8,
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_TW_Kaohsiung")}
            </div>
            <p style={{ textIndent: "0", fontSize: "0.8rem" }}>{t("gallery.world.TW_Kaohsiung_photos")}</p>
            {/* Kaohsiung Wiser Sport Association */}
            <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/Kaohsiung.jpg"
                    alt="Kaohsiung Wiser Sport Association Logo"
                    className="org-logo"
                    loading="lazy"
                />

                <div>
                    {/* <div className="album-org-title">{t("global.name_TW_12")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/kaohsiungwisersport"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_TW_12")}</span>
                        </a>
                    </div>
                </div>
            </div>

            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                        sx={{
                            "& .MuiTabs-flexContainer": {
                                height: "55px",
                            },
                        }}
                    >
                        <Tab
                            icon={<InsertPhotoIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <div className="album-flex">
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Kaohsiung_1_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                        <hr />
                        {/* <h5>{t("gallery.world.hk_photo_title_1")}</h5> */}
                        <br />
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Kaohsiung_2_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                        <br />
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Kaohsiung_3_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=429&href=https%3A%2F%2Fwww.facebook.com%2Fkaohsiungwisersport%2Fvideos%2F463589228192078%2F&show_text=false&width=560&t=0"
                            width="560"
                            height="314"
                            style={{ border: "none", overflow: "hidden" }}
                           
                            allowFullScreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="歡迎高雄各地的銀髮族一起來打球"
                        ></iframe>
                    </div>

                    <div className="album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/B6_8sHcHCNU?si=0fyqiSJs2bog_9PS"
                           
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            title={t("gallery.tw_videos.title_2")}
                        ></iframe>
                    </div>
                </CustomTabPanel>
            </Box>
        </>
    );
}

export function TwTainanPhotoConent() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    // const lang = i18n.language;
    const isSmallScreen = useMediaQuery("(min-width:900px)");
    const mb = useMediaQuery("(max-width:600px)");
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };
    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 40,
        height: 40,
        cursor: "pointer",
        // fontSize: "2 rem",
        // color: "white",
    };

    const indicatorStyles = {
        background: "#fff",
        width: 8,
        height: 8,
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_TW_Tainan")}
            </div>
            <p style={{ textIndent: "0", fontSize: "0.8rem" }}>{t("gallery.world.TW_Tainan_photos")}</p>
            {/* Tainan Wiser Sport Association */}
            <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/Tainan.jpg"
                    alt="Tainan Wiser Association Logo"
                    className="org-logo"
                    loading="lazy"
                />

                <div>
                    {/* <div className="album-org-title">{t("global.name_TW_11")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/tainan.wiserball"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_TW_11")}</span>
                        </a>
                    </div>
                </div>
            </div>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                        sx={{
                            "& .MuiTabs-flexContainer": {
                                height: "55px",
                            },
                        }}
                    >
                        <Tab
                            icon={<InsertPhotoIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <div className="album-flex">
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Tainan_1_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        {/* <h5>{t("gallery.world.hk_photo_title_1")}</h5> */}
                        <br />
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Tainan_2_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                        <br />
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Tainan_3_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <div className="album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/sR-b3-_qDtk?si=ShK8z5KRBaMq8U8y"
                            title="YouTube video player"
                           
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/3ehdgMeScgY?si=iEeAR-6pvhpFzytC"
                            title="YouTube video player"
                           
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullscreen
                        ></iframe>
                    </div>
                    <div className="album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/Gfon8-j-1Is?si=_4beT1k63BuHctgP"
                            title="YouTube video player"
                           
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </CustomTabPanel>
            </Box>
        </>
    );
}

export function TwTWMLPhotoConent() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    // const lang = i18n.language;
    const isSmallScreen = useMediaQuery("(min-width:900px)");
    const mb = useMediaQuery("(max-width:600px)");
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };
    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 40,
        height: 40,
        cursor: "pointer",
        // fontSize: "2 rem",
        // color: "white",
    };

    const indicatorStyles = {
        background: "#fff",
        width: 8,
        height: 8,
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_TW_TWML")}
            </div>
            <p style={{ textIndent: "0", fontSize: "0.8rem" }}>{t("gallery.world.TW_TWML_photos")}</p>
            {/* Taiwan Major League Wiserball */}
            <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/Taiwan Major League.jpg"
                    alt="Taiwan Major League Wiserball Logo"
                    className="org-logo"
                    loading="lazy"
                />

                <div>
                    {/* <div className="album-org-title">{t("global.name_TW_3")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/TMLWISERBALL"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_TW_3")}</span>
                        </a>
                    </div>
                </div>
            </div>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                        sx={{
                            "& .MuiTabs-flexContainer": {
                                height: "55px",
                            },
                        }}
                    >
                        <Tab
                            icon={<InsertPhotoIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <div className="album-flex">
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_TWML_1_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        {/* <h5>{t("gallery.world.hk_photo_title_1")}</h5> */}
                        <br />
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_TWML_2_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                        <br />
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_TWML_3_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                        <br />
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2F100001700137266%2Fvideos%2F1612765496335669%2F%3Fidorvanity%3D1448838391995014&show_text=false&width=560&t=0"
                            width="560"
                            height="321"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="Wiserball Asain Cup Vieo"
                        ></iframe>
                    </div>
                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FTMLWISERBALL%2Fvideos%2F588594986923378%2F&show_text=false&width=560&t=0"
                            width="560"
                            height="321"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="Wiserball Asain Cup Vieo"
                        ></iframe>
                    </div>
                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FTMLWISERBALL%2Fvideos%2F7343691909024698%2F&show_text=false&width=560&t=0"
                            width="560"
                            height="321"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="Wiserball Asain Cup Vieo"
                        ></iframe>
                    </div>
                </CustomTabPanel>
            </Box>
        </>
    );
}

export function TwLilePhotoConent() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    // const lang = i18n.language;
    const isSmallScreen = useMediaQuery("(min-width:900px)");
    const mb = useMediaQuery("(max-width:600px)");
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };
    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 40,
        height: 40,
        cursor: "pointer",
        // fontSize: "2 rem",
        // color: "white",
    };

    const indicatorStyles = {
        background: "#fff",
        width: 8,
        height: 8,
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_TW_Lile")}
            </div>
            <p style={{ textIndent: "0", fontSize: "0.8rem" }}>{t("gallery.world.TW_Lile_photos")}</p>
            {/* Li-Le Wiser Sport Association  */}
            <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/Li-Le.png"
                    alt="Li-Le Wiser Sport Association Logo"
                    className="org-logo"
                    loading="lazy"
                />

                <div>
                    {/* <div className="album-org-title">{t("global.name_TW_7a")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/fw2appl"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_TW_7a")}</span>
                        </a>
                    </div>
                </div>
            </div>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                        sx={{
                            "& .MuiTabs-flexContainer": {
                                height: "55px",
                            },
                        }}
                    >
                        <Tab
                            icon={<InsertPhotoIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <div className="album-flex">
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Lile_1_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Lile_2_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Lile_3_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Ffw2appl%2Fvideos%2F1496883840998534%2F&show_text=false&width=560&t=0"
                            width="560"
                            height="314"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="2024利樂盃高智爾球友誼邀請賽"
                        ></iframe>
                    </div>
                </CustomTabPanel>
            </Box>
            <br />
        </>
    );
}

export function TwMiaoliPhotoConent() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    // const lang = i18n.language;
    const isSmallScreen = useMediaQuery("(min-width:900px)");
    const mb = useMediaQuery("(max-width:600px)");
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };
    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 40,
        height: 40,
        cursor: "pointer",
        // fontSize: "2 rem",
        // color: "white",
    };

    const indicatorStyles = {
        background: "#fff",
        width: 8,
        height: 8,
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_TW_Miaoli")}
            </div>
            <p style={{ textIndent: "0", fontSize: "0.8rem" }}>{t("gallery.world.TW_Miaoli_photos")}</p>
            {/* MiaoLi Wiser Ball */}
            <div className="wiser-org-container">
                {/* <img
                        src="/assets/GlobalLink/Li-Le.png"
                        alt="Li-Le Wiser Sport Association Logo"
                        className="org-logo"
                        
                    /> */}

                <div>
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/groups/888207258805132"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_TW_7b")}</span>
                        </a>
                    </div>
                </div>
            </div>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                        sx={{
                            "& .MuiTabs-flexContainer": {
                                height: "55px",
                            },
                        }}
                    >
                        <Tab
                            icon={<InsertPhotoIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <div className="album-flex">
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Miaoli_1_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        <hr />
                        {/* <h5>{t("gallery.world.hk_photo_title_1")}</h5> */}
                        <br />

                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Miaoli_2_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100000350052802%2Fvideos%2F1070141047936101%2F%3Fidorvanity%3D888207258805132&show_text=false&width=560&t=0"
                            width="560"
                            height="314"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="西湖鄉學校高智爾球推廣"
                        ></iframe>
                    </div>
                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100000350052802%2Fvideos%2F1051595489833173%2F%3Fidorvanity%3D888207258805132&show_text=false&width=560&t=0"
                            width="560"
                            height="314"
                            style={{ border: "none", overflow: "hidden" }}
                           
                            allowFullScreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="全齡高智爾球友誼賽"
                        ></iframe>
                    </div>
                </CustomTabPanel>
            </Box>

            <br />
        </>
    );
}

export function TwYilanPhotoConent() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    // const lang = i18n.language;
    const isSmallScreen = useMediaQuery("(min-width:900px)");
    const mb = useMediaQuery("(max-width:600px)");
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };
    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 40,
        height: 40,
        cursor: "pointer",
        // fontSize: "2 rem",
        // color: "white",
    };

    const indicatorStyles = {
        background: "#fff",
        width: 8,
        height: 8,
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_TW_Yilan")}
            </div>
            <p style={{ textIndent: "0", fontSize: "0.8rem" }}>{t("gallery.world.TW_Yilan_photos")}</p>
            {/* Yilan Wiser Sport Association  */}
            <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/ILan.jpg"
                    alt="Li-Le Wiser Sport Association Logo"
                    className="org-logo"
                    loading="lazy"
                />

                <div>
                    {/* <div className="album-org-title">{t("global.name_TW_7a")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/ilanwiser"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_TW_10")}</span>
                        </a>
                    </div>
                </div>
            </div>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                        sx={{
                            "& .MuiTabs-flexContainer": {
                                height: "55px",
                            },
                        }}
                    >
                        <Tab
                            icon={<InsertPhotoIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <div className="album-flex">
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Yilan_1_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        {/* <h5>{t("gallery.world.hk_photo_title_1")}</h5> */}

                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Yilan_2_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                        <br />
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Yilan_3_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    {/* <div className="album-video-item">
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Ffw2appl%2Fvideos%2F1496883840998534%2F&show_text=false&width=560&t=0"
                                width="560"
                                height="314"
                                style={{ border: "none", overflow: "hidden" }}
                               
                                allowFullScreen="true"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                title="2024利樂盃高智爾球友誼邀請賽"
                            ></iframe>
                        </div> */}
                </CustomTabPanel>
            </Box>
            <br />
        </>
    );
}

export function TwTaichungPhotoConent() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    // const lang = i18n.language;
    const isSmallScreen = useMediaQuery("(min-width:900px)");
    const mb = useMediaQuery("(max-width:600px)");
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };
    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 40,
        height: 40,
        cursor: "pointer",
        // fontSize: "2 rem",
        // color: "white",
    };

    const indicatorStyles = {
        background: "#fff",
        width: 8,
        height: 8,
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_TW_Taichung")}
            </div>
            <p style={{ textIndent: "0", fontSize: "0.8rem" }}>{t("gallery.world.TW_Taichung_photos")}</p>
            {/* Taichung Wiser Sport Association  */}
            <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/Taichung.jpg"
                    alt="Taichung Wiser Sport Association Logo"
                    className="org-logo"
                    loading="lazy"
                />

                <div>
                    {/* <div className="album-org-title">{t("global.name_TW_7a")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/profile.php?id=100063749123109"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_TW_8")}</span>
                        </a>
                    </div>
                </div>
            </div>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                        sx={{
                            "& .MuiTabs-flexContainer": {
                                height: "55px",
                            },
                        }}
                    >
                        <Tab
                            icon={<InsertPhotoIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <div className="album-flex">
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Taichung_1_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Taichung_2_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                        <br />
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_Taichung_3_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <div className="album-flex">
                        <div className="album-video-item">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/LazAFu2TOMc?si=uYzMP8zwWG-qczj5"
                                title="YouTube video player"
                               
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="album-video-item">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/Eyek8asxO0o?si=cbG-1c81zU5uWG8t"
                                title="YouTube video player"
                               
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="album-video-item">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/e1LQTomTv80?si=VEfzl9uUnqyDCVOB"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="album-video-item">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/h_wTPKFBX4o?si=5QD-MYn3X8hRuAt1"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </CustomTabPanel>
            </Box>
        </>
    );
}

export function TwTWWBPhotoConent() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    // const lang = i18n.language;
    const isSmallScreen = useMediaQuery("(min-width:900px)");
    const mb = useMediaQuery("(max-width:600px)");
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };
    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 40,
        height: 40,
        cursor: "pointer",
        // fontSize: "2 rem",
        // color: "white",
    };

    const indicatorStyles = {
        background: "#fff",
        width: 8,
        height: 8,
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_TW_TWWB")}
            </div>

            <p style={{ textIndent: "6px", fontSize: "0.8rem" }}>{t("gallery.world.TW_TWWB_photos")}</p>
            {/* Li-Le Wiser Sport Association  */}
            <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/Taiwan.jpg"
                    alt="Taiwan Wiser Sport Association Logo"
                    className="org-logo"
                    loading="lazy"
                />

                <div>
                    {/* <div className="album-org-title">{t("global.name_TW_7a")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/funwiser"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_TW_2")}</span>
                        </a>
                    </div>
                </div>
            </div>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                        sx={{
                            "& .MuiTabs-flexContainer": {
                                height: "55px",
                            },
                        }}
                    >
                        <Tab
                            icon={<InsertPhotoIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <div className="album-flex">
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_TWWB_1_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        {/* <h5>{t("gallery.world.hk_photo_title_1")}</h5> */}

                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_TWWB_2_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_TWWB_3_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    {/* <div className="album-video-item">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/LazAFu2TOMc?si=uYzMP8zwWG-qczj5"
                                title="YouTube video player"
                               
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div> */}
                    <div className="album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/y0L3lHZWo2Y?si=z_da_mmlLK-Uj1o7"
                            title="YouTube video player"
                           
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/44CP6oODb3g?si=OtQfno2mWPgDRdUD"
                            title="YouTube video player"
                           
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/EkaZI5NUnoc?si=BN1O92gatVykgzYV"
                            title="YouTube video player"
                           
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                           allowFullScreen
                        ></iframe>
                    </div>
                </CustomTabPanel>
            </Box>
        </>
    );
}

export function TwROCPhotoConent() {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;

    // const lang = i18n.language;
    const isSmallScreen = useMediaQuery("(min-width:900px)");
    const mb = useMediaQuery("(max-width:600px)");
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };
    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 40,
        height: 40,
        cursor: "pointer",
        // fontSize: "2 rem",
        // color: "white",
    };

    const indicatorStyles = {
        background: "#fff",
        width: 8,
        height: 8,
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_TW_ROC")}
            </div>

            <p style={{ textIndent: "6px", fontSize: "0.8rem" }}>{t("gallery.world.TW_ROC_photos")}</p>
            {/* Li-Le Wiser Sport Association  */}
            <div className="wiser-org-container">
                <img src="/assets/GlobalLink/ROCWSA-logo.png" alt="ROCWSA Logo" className="org-logo" />

                <div>
                    {/* <div className="album-org-title">{t("global.name_TW_7a")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/ROCWSA"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_TW_1")}</span>
                        </a>
                    </div>
                </div>
            </div>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                        sx={{
                            "& .MuiTabs-flexContainer": {
                                height: "55px",
                            },
                        }}
                    >
                        <Tab
                            icon={<InsertPhotoIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <div className="album-flex">
                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_ROC_1_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        {/* <h5>{t("gallery.world.hk_photo_title_1")}</h5> */}

                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_ROC_2_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>

                        <Carousel
                            className={!mb ? "album-photo-item" : "album-photo-item-small"}
                            swipeable
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showArrows
                            stopOnHover
                            showIndicators
                            dynamicHeight
                            showThumbs={false}
                            // animationHandler="fade"
                            statusFormatter={(current, total) =>
                                `${t("gallery.general.current_slide")} ${current} / ${t(
                                    "gallery.general.total"
                                )} # ${total}`
                            }
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, left: 0 }}
                                    >
                                        <ChevronLeftIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <span
                                        className="slide-arrow"
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        style={{ ...arrowStyles, right: !mb ? 20 : 5 }}
                                    >
                                        <ChevronRightIcon
                                            color="disable"
                                            sx={!mb ? { fontSize: 60 } : { fontSize: 40 }}
                                        />
                                    </span>
                                )
                            }
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                if (isSelected) {
                                    return (
                                        <li
                                            style={{ ...indicatorStyles, background: "tomato" }}
                                            aria-label={`Selected: ${label} ${index + 1}`}
                                            title={`Selected: ${label} ${index + 1}`}
                                        />
                                    );
                                }
                                return (
                                    <li
                                        style={indicatorStyles}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        title={`${label} ${index + 1}`}
                                        aria-label={`${label} ${index + 1}`}
                                    />
                                );
                            }}
                        >
                            {TW_ROC_3_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    {lang === "en" ? (
                        <div className="page-subtitle2">
                            Wishing all mothers around the world a joyful Mother's Day!!!
                        </div>
                    ) : lang === "zh-TW" ? (
                        <div className="page-subtitle2">祝福天下的母親，母親節快樂!!!</div>
                    ) : (
                        <div className="page-subtitle2">祝福天下的母亲，母亲节快乐!!!</div>
                    )}
                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FROCWSA%2Fvideos%2F1457253354908774%2F&show_text=false&width=560&t=0"
                            width="560"
                            height="314"
                            style={{ border: "none", overflow: "hidden" }}
                            //
                            allowFullScreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="ROC Wiser Sport Association 祝福天下的母親，母親節快樂!!!"
                        ></iframe>
                    </div>
                    {lang === "en" ? (
                        <div className="album-flex">
                            <div className="page-subtitle2">
                                The 2019 Wiser Ball Summer Camp at Taichung Hanko Junior High School
                            </div>
                            <p style={{ textIndent: "0px", textAlign:"center" }}>
                                As the summer vacation draws to a close, one of the most gratifying aspects is the
                                opportunity to introduce Wiser Ball to a wider audience. The conclusion of the summer
                                camp signifies not an end, but rather the beginning of a new chapter...
                            </p>
                        </div>
                    ) : lang === "zh-TW" ? (
                        <div className="album-flex">
                            <div className="page-subtitle2">2019台中漢口國中wiser球(高智爾球)夏令營</div>
                            <p style={{ textIndent: "0px", textAlign:"center" }}>
                                暑假將近尾聲，最開心的事情就是能讓更多人知道Wiser球(高智爾球)，夏令營的結業不是結束，而是另一個開始!…
                            </p>
                        </div>
                    ) : (
                        <div className="album-flex">
                            <div className="page-subtitle2">2019台中汉口国中wiser球(高智尔球)夏令营</div>
                            <p style={{ textIndent: "0px", textAlign:"center" }}>
                                暑假将近尾声，最开心的事情就是能让更多人知道Wiser球(高智尔球)，夏令营的结业不是结束，而是另一个开始!…
                            </p>
                        </div>
                    )}

                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FROCWSA%2Fvideos%2F2960216130718725%2F&show_text=false&width=560&t=0"
                            width="560"
                            height="314"
                            style={{ border: "none", overflow: "hidden" }}
                            //
                            allowFullScreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="ROC Wiser Sport Association 祝福天下的母親，母親節快樂!!!"
                        ></iframe>
                    </div>
                    {lang === "en" ? (
                        <div className="album-flex">
                            <div className="page-subtitle2">20240507 Nantou County Council News</div>
                            <p style={{ textIndent: "0px", textAlign:"center"}}>
                                The Nantou County Council has announced the news regarding the Rui Zhi Cup, a high-level
                                wiserball friendly competition held in the Zhongzhangtou area, aimed at fostering
                                camaraderie through the sport. This event is supported by County Councilor Lin Youyou.
                            </p>
                        </div>
                    ) : lang === "zh-TW" ? (
                        <div className="album-flex">
                            <div className="page-subtitle2">2024-05-07 南投縣議會 民議新聞</div>
                            <p style={{ textIndent: "0px", textAlign:"center" }}>
                                睿智盃高智爾球中彰投地區聯誼賽 以球會友打球聯誼(縣議員 林友友)
                            </p>
                        </div>
                    ) : (
                        <div className="album-flex">
                            <div className="page-subtitle2">2024-05-07 南投县议会 民议新闻</div>
                            <p style={{ textIndent: "0px", textAlign:"center" }}>
                                睿智盃高智尔球中彰投地区联谊赛 以球会友打球联谊(县议员 林友友)
                            </p>
                        </div>
                    )}
                    <div className="album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/CgMchVmsWJQ?si=TfxjrBiGuY06yvTS"
                            title="YouTube video player"
                           
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </CustomTabPanel>
            </Box>
        </>
    );
}
