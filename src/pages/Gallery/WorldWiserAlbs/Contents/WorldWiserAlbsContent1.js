/** @format */

// import React from "react";
import "../WorldWiserAlbs.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
// import CustomTab from "../../../components/CustomTab/CustomTab";
import FacebookIcon from "@mui/icons-material/Facebook";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import FacebookIcon from "@mui/icons-material/Facebook";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
    usa_1a_Slides,
    usa_1b_Slides,
    usa_2a_Slides,
    usa_2b_Slides,
    usa_3_Slides,
    usa_4_Slides,
    canada_Slides,
    paraguay_Slides,
    germany_Slides,
    sa_Slides,
    Mexico_Slides,
} from "../../../../data/carouselData";

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

// --------USA Wiser Sport Committee--------------
export function USAPhotoConent1() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;
    const mb = useMediaQuery("(max-width:600px)");
    // const lang = i18n.language;
    const isSmallScreen = useMediaQuery("(min-width:900px)");
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
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>{t("gallery.world.usa_photo_title_1")}</div>

            <p style={{ textIndent: "3px", fontSize: "0.8rem" }}>{t("gallery.world.usa_photos")}</p>
               {/* USA Wiser Sport Committee */}

               <div className="wiser-org-container">
                <img src="/assets/GlobalLink/USA.jpg" alt="USA Wiser Sport Committee Logo" className="org-logo" />

                <div className="flex flex-column">
                    {/* <div className={!mb ? "page-subtitle" : "page-subtitle2"}>{t("global.name_1")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/profile.php?id=100080889607285"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_1")}</span>
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
                        <div className="page-subtitle2" style={{textAlign:"center"}}>{t("gallery.world.usawc_photo_title_1")}</div>
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
                            {usa_1a_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                        <div className="page-subtitle2" style={{textAlign:"center"}}>{t("gallery.world.usawc_photo_title_2")}</div>
                      
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
                            {usa_1b_Slides.map((slide) => {
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
                    <div className="page-subtitle2" style={{textAlign:"center"}}>{t("gallery.usa_videos.title_1")}</div>
                    <p style={{ textIndent: "0px", textAlign: "center" }}>{t("gallery.usa_videos.desc_1")}</p>
                    <div className="us-album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/X9P0R3swMJU?si=X5YIVJRIh5DwCopQ"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="page-subtitle2" style={{textAlign:"center", marginTop:"12px"}}>{t("gallery.usa_videos.title_2")}</div>
                    <p style={{ textIndent: "0px", textAlign: "center" }}>{t("gallery.usa_videos.desc_2")}</p>
                    <div className="us-album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/jXavD674gBI?si=IF3iuFyDolridEaJ"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="page-subtitle2" style={{textAlign:"center", marginTop:"12px"}}>{t("gallery.usa_videos.title_3")}</div>
                    <p style={{ textIndent: "0px", textAlign: "center" }}>{t("gallery.usa_videos.desc_3")}</p>
                    <div className="us-album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/w0RL7YSc0Us?si=DveQewjN0S7HtSN5"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="album-item-title-wrapper">
                        <div className="page-subtitle2" style={{textAlign:"center", marginTop:"12px"}}>{t("gallery.usa_videos.title_4")}</div>
                        <p style={{ textIndent: "0px", textAlign: "center" }}>{t("gallery.usa_videos.desc_4")}</p>
                    </div>
                    <div className="us-album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/7r1MQp5XNAs?si=bj9lxc0EPo08aqwD"
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

// --------Wiser Sport Activities in California, USA--------------
export function USAPhotoConent2() {
    const { t } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");
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
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>{t("gallery.world.usa_photo_title_2")}</div>

            <div className="page-subtitle2" style={{textAlign:"center"}}>{t("gallery.world.usa_photo_title_2a")}</div>

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
                    `${t("gallery.general.current_slide")} ${current} / ${t("gallery.general.total")} # ${total}`
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
                            <ChevronLeftIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                            <ChevronRightIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                {usa_2a_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} loading="lazy" />
                        </div>
                    );
                })}
            </Carousel>
            <hr />
            <div className="page-subtitle2" style={{textAlign:"center"}}>{t("gallery.world.usa_photo_title_2b")}</div>

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
                    `${t("gallery.general.current_slide")} ${current} / ${t("gallery.general.total")} # ${total}`
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
                            <ChevronLeftIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                            <ChevronRightIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                {usa_2b_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} loading="lazy" />
                        </div>
                    );
                })}
            </Carousel>

            <br />
        </>
    );
}

// --------Wiser Sport Activities in Delaware, USA--------------
export function USAPhotoConent3() {
    const { t } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");
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
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>{t("gallery.world.usa_photo_title_3")}</div>

            {/* <div className="page-subtitle2">{t("gallery.world.usa_photo_title_2a")}</div> */}

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
                    `${t("gallery.general.current_slide")} ${current} / ${t("gallery.general.total")} # ${total}`
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
                            <ChevronLeftIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                            <ChevronRightIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                {usa_3_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} loading="lazy" />
                        </div>
                    );
                })}
            </Carousel>

            <br />
        </>
    );
}

// --------Wiser Sport Activities in New Mexico, New York, and Utah,USA--------------
export function USAPhotoConent4() {
    const { t } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");
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
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>{t("gallery.world.usa_photo_title_4")}</div>

            {/* <div className="page-subtitle2">{t("gallery.world.usa_photo_title_2a")}</div> */}

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
                    `${t("gallery.general.current_slide")} ${current} / ${t("gallery.general.total")} # ${total}`
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
                            <ChevronLeftIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                            <ChevronRightIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                {usa_4_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} loading="lazy" />
                        </div>
                    );
                })}
            </Carousel>

            <br />
        </>
    );
}

// --------Wiser Sport Activities in Canada--------------
export function CanadaPhotoConent() {
    const { t } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");
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
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>{t("gallery.world.albums_subtitle_canada")}</div>

            <p style={{ textIndent: "3px", fontSize: "0.8rem" }}>{t("gallery.world.canada_photos")}</p>
            <div className="wiser-org-container">
                <img src="/assets/GlobalLink/Canada.jpg" alt="Canada Wiser Sport Committee Logo" className="org-logo" />

                <div className="flex flex-column">
                    {/* <div className={!mb ? "page-subtitle" : "page-subtitle2"}>{t("global.name_2")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/CanadaWiser"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_2")}</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className="page-subtitle2">{t("gallery.world.usa_photo_title_2a")}</div> */}
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
                    `${t("gallery.general.current_slide")} ${current} / ${t("gallery.general.total")} # ${total}`
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
                            <ChevronLeftIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                            <ChevronRightIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                {canada_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} loading="lazy" />
                        </div>
                    );
                })}
            </Carousel>
        
          
            <br />
        </>
    );
}

// --------Wiser Sport Activities in Paraguay--------------
export function ParaguayPhotoConent() {
    const { t } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");
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
                {t("gallery.world.albums_subtitle_paraguay")}
            </div>
            <p style={{ textIndent: "3px", fontSize: "0.8rem" }}>{t("gallery.world.paraguay_photos")}</p>
                {/* Comité Wiser Sport Paraguay */}
            <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/Comite.jpg"
                    alt="Comité Wiser Sport Paraguay Logo"
                    className="org-logo"
                    loading="lazy"
                />

                <div className="flex flex-column">
                    {/* <div className={!mb ? "page-subtitle" : "page-subtitle2"}>{t("global.name_3")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/comitewisersportparaguay?fref=ts"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_3")}</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className="page-subtitle2">{t("gallery.world.usa_photo_title_2a")}</div> */}
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
                    `${t("gallery.general.current_slide")} ${current} / ${t("gallery.general.total")} # ${total}`
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
                            <ChevronLeftIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                            <ChevronRightIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                {paraguay_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} loading="lazy" />
                        </div>
                    );
                })}
            </Carousel>
            
        
            <br />
        </>
    );
}

// --------Wiser Sport Activities in Germany--------------
export function GermanyPhotoConent() {
    const { t } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");
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
             <div className={!mb ? "page-secondary-title" : "page-subtitle"}>{t("gallery.world.albums_subtitle_germany")}</div>

            <p style={{ textIndent: "3px", fontSize: "0.8rem" }}>{t("gallery.world.germany_photos")}</p>
            <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/German.png"
                    alt="Deutscher Wiserball Verband Logo"
                    className="org-logo"
                    loading="lazy"
                />

                <div>
                    <a
                        className="org-fb-icon__link"
                        href="https://www.facebook.com/deutscherwiserballverband/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FacebookIcon />
                        <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_5")} </span>
                    </a>
                </div>
            </div>

            {/* <div className="page-subtitle2">{t("gallery.world.usa_photo_title_2a")}</div> */}
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
                    `${t("gallery.general.current_slide")} ${current} / ${t("gallery.general.total")} # ${total}`
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
                            <ChevronLeftIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                            <ChevronRightIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                {germany_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} loading="lazy" />
                        </div>
                    );
                })}
            </Carousel>
            <br></br>
            {/* Comité Wiser Sport Paraguay */}
        
            <br />
        </>
    );
}

// --------Wiser Sport Activities in South Africa--------------
export function SouthAfricaPhotoConent() {
    const { t } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");
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
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>{t("gallery.world.albums_subtitle_sa")}</div>

            <p style={{ textIndent: "3px", fontSize: "0.8rem" }}>{t("gallery.world.sa_photos")}</p>
            <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/South_Africa.jpg"
                    alt="South African Wiser Ball Logo"
                    className="org-logo"
                    loading="lazy"
                />

                <div>
                    <a
                        className="org-fb-icon__link"
                        href="https://www.facebook.com/Wiserballsa/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FacebookIcon />
                        <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_4")}</span>
                    </a>
                </div>
            </div>
            {/* <div className="page-subtitle2">{t("gallery.world.usa_photo_title_2a")}</div> */}
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
                    `${t("gallery.general.current_slide")} ${current} / ${t("gallery.general.total")} # ${total}`
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
                            <ChevronLeftIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                            <ChevronRightIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                {sa_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} loading="lazy" />
                        </div>
                    );
                })}
            </Carousel>
           
           
        </>
    );
}

// --------Wiser Sport Activities in Mexico--------------
export function MexicoPhotoConent() {
    const { t } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");
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
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>{t("gallery.world.albums_subtitle_mexico")}</div>

            <p style={{ textIndent: "3px", fontSize:"0.8rem" }}>{t("gallery.world.mexico_photos")}</p>
            {/* <div className="page-subtitle2">{t("gallery.world.usa_photo_title_2a")}</div> */}
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
                    `${t("gallery.general.current_slide")} ${current} / ${t("gallery.general.total")} # ${total}`
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
                            <ChevronLeftIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                            <ChevronRightIcon color="disable" sx={!mb ? { fontSize: 60 } : { fontSize: 40 }} />
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
                {Mexico_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} loading="lazy" />
                        </div>
                    );
                })}
            </Carousel>
            <br></br>
            {/* Comité Wiser Sport México */}

            <br />
        </>
    );
}
