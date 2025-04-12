/** @format */

// import React from "react";
import "./HongKong.css";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import FacebookIcon from "@mui/icons-material/Facebook";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import { Container } from "@mui/material";
import { hk_Slides } from "../../../data/carouselData";

import { useMediaQuery } from "@mui/material";

export default function HongKongContent() {
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
            <div className={!mb ? "page-primary-title" : "page-secondary-title"}>{t("gallery.hongkong.title")}</div>
            <div className="gallery-container">
                <p style={!mb ? { textIndent: "0px", fontSize: "0.8rem" } : { textIndent: "0px", fontSize: "0.8rem" }}>
                    {t("gallery.hongkong.HKWS_photos")}
                </p>
                <div className="wiser-org-container">
                    <div>
                        <img
                            src="/assets/GlobalLink/HKWA_logo.png"
                            alt="Hong Kong Wiser Association Logo"
                            className="org-logo"
                            // style={{ width: "80px" }}
                        />
                    </div>

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
                <Carousel
                    className={!mb ? "album-photo-item" : "album-photo-item-small"}
                    // width={!mb?"80%":"100%"}
                    swipeable
                    autoPlay
                    showStatus={false}
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
                                    style={{ ...indicatorStyles, background: "red" }}
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
                    {hk_Slides.map((slide) => {
                        return (
                            <div key={slide.id}>
                                <img src={slide.src} alt={slide.alt} loading="lazy"/>
                            </div>
                        );
                    })}
                </Carousel>

               

             
            </div>
        </>
    );
}
