/** @format */

// import React from "react";
import { useTranslation } from "react-i18next";
// import CustomTab from "../../../components/CustomTab/CustomTab";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import FacebookIcon from "@mui/icons-material/Facebook";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
    USA_Training_Slides,
    Beijing_Training_Slides,
    Shenzhen_Training_Slides,
    Hangzhou_Training_Slides,
    Chengdu_Training_Slides,
    Taiwan_Training_Slides,
    Thailand_Training_Slides,
} from "../../../data/carouselData";
import { useMediaQuery } from "@mui/material";

// --------USA G4 Training Slides--------------
export function USAG4TrainingContent() {
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
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-subtitle" : "page-subtitle2"} style={{textAlign:"center"}}>{t("gallery.training.G4-subtitle_1")}</div>
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
                {USA_Training_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} />
                        </div>
                    );
                })}
            </Carousel>
        </>
    );
}

// --------    // --------Beijing Training Slides----------------------------
export function BeijingG4TrainingContent() {
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
        borderRadius: "50%",

        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-subtitle" : "page-subtitle2"} style={{textAlign:"center"}}>{t("gallery.training.G4-subtitle_1")}</div>
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
                {Beijing_Training_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} />
                        </div>
                    );
                })}
            </Carousel>
        </>
    );
}

// --------ShenZhen G4 Training Slides--------------
export function ShenzhenG4TrainingContent() {
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
        borderRadius: "50%",

        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-subtitle" : "page-subtitle2"} style={{textAlign:"center"}}>{t("gallery.training.G4-subtitle_1")}</div>
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
                {Shenzhen_Training_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} />
                        </div>
                    );
                })}
            </Carousel>
        </>
    );
}

// --------Chengdu G4 Training Slides--------------

export function ChengduG4TrainingContent() {
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
        borderRadius: "50%",

        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-subtitle" : "page-subtitle2"} style={{textAlign:"center"}}>{t("gallery.training.G4-subtitle_1")}</div>
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
                {Chengdu_Training_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} />
                        </div>
                    );
                })}
            </Carousel>
        </>
    );
}

// --------Hangzhou G4 Training Slides--------------
export function HangzhouG4TrainingContent() {
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
        borderRadius: "50%",

        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-subtitle" : "page-subtitle2"} style={{textAlign:"center"}}>{t("gallery.training.G4-subtitle_1")}</div>
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
                {Hangzhou_Training_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} />
                        </div>
                    );
                })}
            </Carousel>
        </>
    );
}

// --------Taiwan Training Slides--------------
export function TaiwanG4TrainingContent() {
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
        borderRadius: "50%",

        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-subtitle" : "page-subtitle2"} style={{textAlign:"center"}}>{t("gallery.training.G4-subtitle_1")}</div>
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
                {Taiwan_Training_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} />
                        </div>
                    );
                })}
            </Carousel>
        </>
    );
}
// --------Thailand Training Slides--------------

export function ThailandG4TrainingContent() {
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
        borderRadius: "50%",

        display: "inline-block",
        margin: "0 8px",
    };

    return (
        <>
            <div className={!mb ? "page-subtitle" : "page-subtitle2"} style={{textAlign:"center"}}>{t("gallery.training.G3-subtitle_2")}</div>
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
                {Thailand_Training_Slides.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <img src={slide.src} alt={slide.alt} />
                        </div>
                    );
                })}
            </Carousel>
        </>
    );
}
