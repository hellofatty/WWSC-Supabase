/** @format */

// import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export const CustomCarousel = ({ data, widthPercent }) => {
    const { t } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");
    // console.log(widthPercent);
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
            <Box
                className={!mb ? "album-photo-item" : "album-photo-item-small"}
                sx={{ width: { widthPercent }, mt: 2 }}
            >
                <Carousel
                    swipeable
                    autoPlay
                    showArrows
                    showStatus={false}
                    stopOnHover
                    infiniteLoop={true}
                    showIndicators
                    dynamicHeight
                    showThumbs={false}
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
                    {data.map((slide) => (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} loading="lazy" />
                        </div>
                    ))}
                </Carousel>
            </Box>
        </>
    );
};
