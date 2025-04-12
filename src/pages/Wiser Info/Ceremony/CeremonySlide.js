/** @format */

import React from "react";
import "./Ceremony.css";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
 import { useMediaQuery } from "@mui/material";
export default function CeremonySlide() {
    const { t } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");

    const ceremony_Slides = [
        {
            src: "/assets/Ceremony/image_01-min.jpg",
            alt: "inaugural_ceremony_image_1",
            legend: t("ceremony.legend_1"),
            id: 1,
        },
        {
            src: "/assets/Ceremony/image_02-min.JPG",
            alt: "inaugural_ceremony_image_2",
            legend: t("ceremony.legend_2"),
            id: 2,
        },
        {
            src: "/assets/Ceremony/image_03-min.jpg",
            alt: "inaugural_ceremony_image_3",
            legend: t("ceremony.legend_3"),
            id: 3,
        },
        {
            src: "/assets/Ceremony/image_04-min.jpg",
            alt: "inaugural_ceremony_image_4",
            legend: t("ceremony.legend_4"),
            id: 4,
        },
        {
            src: "/assets/Ceremony/image_05-min.jpg",
            alt: "inaugural_ceremony_image_5",
            legend: t("ceremony.legend_5"),
            id: 5,
        },
    ];

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

    // const indicatorStyles = {
    //     background: "#fff",
    //     width: 8,
    //     height: 8,
    //     display: "inline-block",
    //     margin: "0 8px",
    // };

    return (
        <div id="ceremony-slides-container">
            <Carousel
                // width="1024px"
                swipeable
                autoPlay={true}
                showStatus={false}
                showArrows={true}
                stopOnHover={true}
                interval={5000}
                // showIndicators={true}
                // showThumbs="false"
                dynamicHeight={true}
                // statusFormatter={(current, total) =>
                //     `${t("gallery.hongkong.current_slide")} ${current} / ${t("gallery.hongkong.total")} # ${total}`
                // }
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
                                // style={{ ...indicatorStyles, background: "tomato" }}
                                aria-label={`Selected: ${label} ${index + 1}`}
                                title={`Selected: ${label} ${index + 1}`}
                            />
                        );
                    }
                    return (
                        <li
                            // style={indicatorStyles}
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
                {ceremony_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <div >
                                <img src={slide.src} alt={slide.alt}  />
                                <p className="legend">{slide.legend}</p>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}
