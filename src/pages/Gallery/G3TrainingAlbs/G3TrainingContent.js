/** @format */

// import React from "react";
import { useTranslation } from "react-i18next";
// import CustomTab from "../../../components/CustomTab/CustomTab";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import FacebookIcon from "@mui/icons-material/Facebook";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { USA_G3_Training_Slides, HK_G3_Training_Slides } from "../../../data/carouselData";
import { useMediaQuery } from "@mui/material";


// --------USA G3 Training Slides--------------
export function USAG3TrainingContent() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

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
        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-subtitle" : "page-subtitle2"}>{t("gallery.training.G3-subtitle_1")}</div>

            <div className="gallery-container">
                <Carousel
                    // width={!mb ? "80%" : "100%"}
                     className="album-photo-item"
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
                        `${t("gallery.hongkong.current_slide")} ${current} / ${t("gallery.hongkong.total")} # ${total}`
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
                    {USA_G3_Training_Slides.map((slide) => {
                        return (
                            <div key={slide.id} >
                                <img src={slide.src} alt={slide.alt} />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
}

// --------Hong Kong G3 Training Slides--------------

export function HKG3TrainingContent() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;
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
        display: "inline-block",
        margin: "0 8px",
        // marginTop: "20px"
        
    };

    return (
        <>
            <div className={!mb ? "page-subtitle" : "page-subtitle2"}>{t("gallery.training.G3-subtitle_2")}</div>
            <br />
            <Carousel
                // className="album-photo-item"
                 className="album-photo-item"
                showStatus={false}
                swipeable
                autoPlay
                infiniteLoop
                showArrows
                stopOnHover
                showIndicators
                dynamicHeight
                showThumbs={false}
                // animationHandler="fade"
                statusFormatter={(current, total) =>
                    `${t("gallery.hongkong.current_slide")} ${current} / ${t("gallery.hongkong.total")} # ${total}`
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
                                style={{ ...indicatorStyles, background: "tomato"}}
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
                {HK_G3_Training_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt}  />
                        </div>
                    );
                })}
            </Carousel>
        </>
    );
}
