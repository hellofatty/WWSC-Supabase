/** @format */

import "./Home.css";
import { Container } from "@mui/material";

import introBox from "./images/wiser_intro_box_1-min.jpg";
import wiserRule from "./images/wiser_rules_box_2-min.jpg";
import videoTutorial from "./images/video_tutorial_box_3-min.jpg";
import terms from "./images/glossary_terms_box_4-min.jpg";
import faqs from "./images/faqs_box_5-min.jpg";
import recordingSheet from "./images/recording_sheets_box_6-min.jpg";

import refereeSystem from "./images/intro_referee_sys_box_7-min.jpg";
import signUp from "./images/signup_box_8-min.jpg";
import refereeTraining from "./images/referee_training_box_9-min.jpg";
import authOrg from "./images/auth_orgs_box_10-min.jpg";
import searchReferee from "./images/search_referee_box_11-min.jpg";
import recordingForm from "./images/record_form_box_12-min.jpg";

import handsWiserball from "./images/global_links_box_13-min.jpg";
import notices from "./images/notices_box_14-min.jpg";
import eventNews from "./images/event_news_box_15-min.jpg";
import photosVideos from "./images/photos_videos_box_16-min.jpg";
import volunteerDonation from "./images/volunteer_donation_box_17-min.jpg";
import contactUs from "./images/contact_us_box_18-min.jpg";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BadgeIcon from "@mui/icons-material/Badge";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
// import { useRef } from "react";

// -----Create Home component--------
export default function Home() {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    //   const prevRef = useRef(null);
    //     const nextRef = useRef(null);
    const Home_Landing_Slides = [
        {
            src: "/assets/Landing/landing_1-min.jpg",
            alt: "Landing slide_1",
            id: 1,
        },
        {
            src: "/assets/Landing/landing_2-min.jpg",
            alt: "Landing slide_2",
            id: 2,
        },
        {
            src: "/assets/Landing/landing_3-min.jpg",
            alt: "Landing slide_3",
            id: 3,
        },
        {
            src: "/assets/Landing/landing_4-min.jpg",
            alt: "Landing slide_4",
            id: 4,
        },
        {
            src: "/assets/Landing/landing_5-min.jpg",
            alt: "Landing slide_5",
            id: 5,
        },
        {
            src: "/assets/Landing/landing_6-min.jpg",
            alt: "Landing slide_6",
            id: 6,
        },
        {
            src: "/assets/Landing/landing_7-min.jpg",
            alt: "Landing slide_7",
            id: 7,
        },
        {
            src: "/assets/Landing/landing_8-min.jpg",
            alt: "Landing slide_8",
            id: 8,
        },
        // {
        //     src: "/assets/Landing/Malaysia.jpg",
        //     alt: "Landing slide_9",
        //     id: 9,
        // },
        {
            src: "/assets/Landing/landing_9-min.jpg",
            alt: "Landing slide_9",
            id: 9,
        },

        {
            src: "/assets/Landing/landing_10-min.jpg",
            alt: "Landing slide_10",
            id: 10,
        },
    ];
    // const isSmallScreen = useMediaQuery("(min-width:600px)");
    const mb = useMediaQuery("(max-width:600px)");
    const [index, setIndex] = useState(0);
    const colors = ["primary", "success", "danger"];

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

    //   const indicatorStyles = {
    //     background: "#fff",
    //     width: 8,
    //       height: 8,
    //     borderRadius:"50%",
    //     display: "inline-block",
    //     margin: "0 8px",
    // };

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
            <div className="landing-slides">
                <Carousel
                    // width="1240px"
                    autoPlay
                    swipeable
                    infiniteLoop
                    showArrows
                    stopOnHover
                    showIndicators={false}
                    showThumbs={false}
                    showStatus={false}
                    interval={5000}
                    transitionTime={1500}
                    // dynamicHeight="true"
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
                    // renderIndicator={(onClickHandler, isSelected, index, label) => {
                    //     if (isSelected) {
                    //         return (
                    //             <li
                    //                 style={{ ...indicatorStyles, background: "tomato" }}
                    //                 aria-label={`Selected: ${label} ${index + 1}`}
                    //                 title={`Selected: ${label} ${index + 1}`}
                    //             />
                    //         );
                    //     }
                    //     return (
                    //         <li
                    //             style={indicatorStyles}
                    //             onClick={onClickHandler}
                    //             onKeyDown={onClickHandler}
                    //             value={index}
                    //             key={index}
                    //             role="button"
                    //             tabIndex={0}
                    //             title={`${label} ${index + 1}`}
                    //             aria-label={`${label} ${index + 1}`}
                    //         />
                    //     );
                    // }}
                >
                    {Home_Landing_Slides.map((slide) => {
                        return (
                            <div key={slide.id}>
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="img-slide-item"
                                    style={{ padding: 0 }}
                                />
                            </div>
                        );
                    })}
                </Carousel>
            </div>

            <section>
                <div className="home-section">
                    <div
                        className="page-primary-title"
                        style={
                            !mb
                                ? { textAlign: "left", marginBottom: "16px" }
                                : { textAlign: "center", fontSize: "1.2rem", paddingBottom: "6px" }
                        }
                    >
                        {t("home.about-title")}
                    </div>
                    {lang === "en" && (
                        <p className="home-about-wwsc-text" style={mb ? { lineHeight: 1.7 } : {}}>
                            The World Wiser Sport Committee (WWSC) is a nonprofit organization dedicated to public
                            benefit, officially estabilished in the United States. It is the highest, most authoritative
                            Wiser sport organization in the world. The WWSC trains different levels of referees based on
                            the rules of the Wiser sport. It holds international tournaments, guides the work of Wiser
                            Sport organizations in countries and regions around the globe, and leads the expansion of the
                            Wiser sport throughout the world. Its mission is to enable people living in various regions
                            and of different races, ages, and cultures to play the Wiser sport and, in so doing, to rid
                            themselves of sickness, delay the aging process, improve their physical and mental health,
                            enhance their wisdom, make new friends, elevate their morality, and thereby advance peace
                            and happiness to all of mankind.
                        </p>
                    )}
                    {lang === "zh-TW" && (
                        <p className="home-about-wwsc-text">
                            世界Wiser運動委員會是一個為公眾利益而在美國依法正式成立的非營利組織，是全世界最高、最權威的Wiser領導機構，依特定的Wiser球的規則，訓練不同級別的裁判人員，主辦世界性的比賽，指導各個國家和地區的Wiser運動團體的工作，領導Wiser運動在全世界各個國家和地區的發展，其目的就是讓全世界不同地域、不同膚色、不同年齡、不同文化的人，都能通過打Wiser球，祛除疾病，延緩衰老，增強身心健康，增長智慧，增進友誼，提升道德，進而促進整個世界的和平和人類的幸福。
                        </p>
                    )}
                    {lang === "zh-CN" && (
                        <p className="home-about-wwsc-text">
                            世界Wiser运动委员会是一个为公众利益而在美国依法正式成立的非营利组织，是全世界最高、最权威的Wiser领导机构，依特定的Wiser球的规则，训练不同级别的裁判人员，主办世界性的比赛，指导各个国家和地区的Wiser运动团体的工作，领导Wiser运动在全世界各个国家和地区的发展，其目的就是让全世界不同地域、不同肤色、不同年龄、不同文化的人，都能通过打Wiser球，祛除疾病，延缓衰老，增强身心健康，增长智慧，增进友谊，提升道德，进而促进整个世界的和平和人类的幸福。
                        </p>
                    )}
                </div>
            </section>

            <Tabs
                aria-label="Icon tabs"
                size="lg"
                value={index}
                onChange={(event, value) => setIndex(value)}
                sx={(theme) => ({
                    p: 1,
                    borderRadius: 16,
                    // maxWidth: 400,
                    mx: "auto",
                    boxShadow: theme.shadow.sm,
                    "--joy-shadowChannel": theme.vars.palette[colors[index]].darkChannel,
                    [`& .${tabClasses.root}`]: {
                        py: 1,
                        flex: 1,
                        transition: "0.3s",
                        fontWeight: "md",
                        fontSize: "md",
                        [`&:not(.${tabClasses.selected}):not(:hover)`]: {
                            opacity: 0.7,
                        },
                    },
                })}
            >
                <TabList
                    variant="plain"
                    size="lg"
                    disableUnderline
                    sx={{ borderRadius: "lg", pt: 0, justifyContent: "center" }}
                >
                    <Tab disableIndicator orientation="horizontal" {...(index === 0 && { color: colors[0] })}>
                        <GolfCourseIcon />
                        {!mb ? t("home.play-title") : ""}
                    </Tab>
                    <Tab disableIndicator orientation="horizontal" {...(index === 1 && { color: colors[1] })}>
                        <BadgeIcon />
                        {!mb ? t("home.referee-zone-title") : ""}
                    </Tab>
                    <Tab disableIndicator orientation="horizontal" {...(index === 2 && { color: colors[2] })}>
                        <FavoriteIcon />
                        {!mb ? t("home.join-us-title") : ""}
                    </Tab>
                </TabList>
                <TabPanel value={0}>
                    {" "}
                    <section
                        className="home-section"
                        style={{ backgroundImage: "linear-gradient(to left, #00521F, teal)" }}
                    >
                        {" "}
                        {mb && (
                            <h5
                                style={{ color: "white", marginBottom: "12px", textAlign: "center", marginTop: "10px" }}
                            >
                                {t("home.play-title")}
                            </h5>
                        )}
                        {lang === "en" && (
                            <blockquote className={!mb ? "home-about-wwsc-quote" : "home-about-wwsc-quote-small"}>
                                “Wiser is thus the most ideal sport of all the ball sports for everyone.”
                            </blockquote>
                        )}
                        {lang === "zh-TW" && (
                            <blockquote className={!mb ? "home-about-wwsc-quote" : "home-about-wwsc-quote-small"}>
                                “高智爾球是適合每個人最完美的球類運動”
                            </blockquote>
                        )}
                        {lang === "zh-CN" && (
                            <blockquote className={!mb ? "home-about-wwsc-quote" : "home-about-wwsc-quote-small"}>
                                “高智尔球是适合每个人最完美的球类运动”
                            </blockquote>
                        )}{" "}
                        {!mb ? (
                            <div className="home-box-container">
                                <Link to="/about-us/introduction-to-wiser-sport/">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={introBox}
                                                alt="Wiser-Intro"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.play-box.intro")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                                <Link to="/wiser-sport/the-rules-of-wiser-sport">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={wiserRule}
                                                alt="Wiser-Intro"
                                                style={{ width: "auto", margin: "0 auto" }}
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.play-box.rule")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>{" "}
                                <Link to="/play-wiser/video-tutorial-play-wiser-ball">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={videoTutorial}
                                                alt="Video Tutorials"
                                                style={{ width: "auto", margin: "0 auto" }}
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.play-box.video")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                                <Link to="/wiser-sport/glossary-of-terms/">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={terms}
                                                alt="Wiser-Intro"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.play-box.term")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                                <Link to="/play-wiser/faqs">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={faqs}
                                                alt="Wiser-Intro"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.play-box.faq")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>{" "}
                                <Link to="/play-wiser/game-recording-sheet-app-download">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={recordingSheet}
                                                alt="Wiser-Intro"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.play-box.record")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </div>
                        ) : (
                            <>
                                {/* <div className="swiper-buttons">
                            <div ref={prevRef} className="swiper-button-prev"></div>
                            <div ref={nextRef} className="swiper-button-next"></div> */}
                                {/* </div> */}
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    // navigation
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log("slide change")}
                                    autoplay={{ delay: 5000 }}
                                    effect={"coverflow"}
                                    coverflowEffect={{
                                        rotate: 30,
                                        slideShadows: false,
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="home-box-container">
                                            <Link to="/about-us/introduction-to-wiser-sport/">
                                                <Card style={{ width: "260px" }}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            component="img"
                                                            height={"140px"}
                                                            image={introBox}
                                                            alt="Wiser-Intro"
                                                        />
                                                        <CardContent>
                                                            <Typography
                                                                gutterBottom
                                                                variant="h7"
                                                                component="div"
                                                                style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                            >
                                                                {t("home.play-box.intro")}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Link>
                                            <Link to="/wiser-sport/the-rules-of-wiser-sport">
                                                <Card style={{ width: "260px" }}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            component="img"
                                                            height={"140px"}
                                                            image={wiserRule}
                                                            alt="Wiser-Intro"
                                                            style={{ width: "auto", margin: "0 auto" }}
                                                        />
                                                        <CardContent>
                                                            <Typography
                                                                gutterBottom
                                                                variant="h7"
                                                                component="div"
                                                                style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                            >
                                                                {t("home.play-box.rule")}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Link>{" "}
                                            <Link to="/play-wiser/video-tutorial-play-wiser-ball">
                                                <Card style={{ width: "260px" }}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            component="img"
                                                            height={"140px"}
                                                            image={videoTutorial}
                                                            alt="Video Tutorials"
                                                            style={{ width: "auto", margin: "0 auto" }}
                                                        />
                                                        <CardContent>
                                                            <Typography
                                                                gutterBottom
                                                                variant="h7"
                                                                component="div"
                                                                style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                            >
                                                                {t("home.play-box.video")}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {" "}
                                        <div className="home-box-container">
                                            <Link to="/wiser-sport/glossary-of-terms/">
                                                <Card style={{ width: "260px" }}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            component="img"
                                                            height={"140px"}
                                                            image={terms}
                                                            alt="Wiser-Intro"
                                                        />
                                                        <CardContent>
                                                            <Typography
                                                                gutterBottom
                                                                variant="h7"
                                                                component="div"
                                                                style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                            >
                                                                {t("home.play-box.term")}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Link>
                                            <Link to="/play-wiser/faqs">
                                                <Card style={{ width: "260px" }}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            component="img"
                                                            height={"140px"}
                                                            image={faqs}
                                                            alt="Wiser-Intro"
                                                        />
                                                        <CardContent>
                                                            <Typography
                                                                gutterBottom
                                                                variant="h7"
                                                                component="div"
                                                                style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                            >
                                                                {t("home.play-box.faq")}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Link>{" "}
                                            <Link to="/play-wiser/game-recording-sheet-app-download">
                                                <Card style={{ width: "260px" }}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            component="img"
                                                            height={"140px"}
                                                            image={recordingSheet}
                                                            alt="Wiser-Intro"
                                                        />
                                                        <CardContent>
                                                            <Typography
                                                                gutterBottom
                                                                variant="h7"
                                                                component="div"
                                                                style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                            >
                                                                {t("home.play-box.record")}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </>
                        )}{" "}
                    </section>
                </TabPanel>
                <TabPanel value={1}>
                    {/* ===========Referee Zone============================================== */}
                    <section
                        className="home-section"
                        style={{
                            backgroundImage: "linear-gradient(to left, beige, beige)",
                            // marginTop: "20px",
                            border: "1px solid light-grey",
                        }}
                    >
                        {mb && (
                            <h5 style={{ color: "teal", marginBottom: "12px", textAlign: "center", marginTop: "10px" }}>
                                {t("home.referee-zone-title")}
                            </h5>
                        )}
                        {!mb && (
                            <div className="home-box-container">
                                <Link to="/referee-zone/referee-system">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={refereeSystem}
                                                alt="Referee System"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.referee-box.system")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                                <Link to="/referee-home/signup">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia component="img" height={"140px"} image={signUp} alt="signup" />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.referee-box.signup")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                                <Link to="/referee-zone/wiser-referee-training">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={refereeTraining}
                                                alt="Wiser Referee Training"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.referee-box.referee-training")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                                <Link to="/referee-zone/referee-training-organizations">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={authOrg}
                                                alt="Wiser-Intro"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.referee-box.auth-org")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>{" "}
                                <Link to="/referee-zone/search-referee">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={searchReferee}
                                                alt="Search Referee"
                                                style={{ width: "auto", margin: "0 auto" }}
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.referee-box.search-referee")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                                <Link to="/referee-zone/wiser-referee-training#record-form">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={recordingForm}
                                                alt="Referee Record Form Download"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.referee-box.record-form")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </div>
                        )}
                        {mb && (
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                                spaceBetween={10}
                                slidesPerView={1}
                                // navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log("slide change")}
                                autoplay={{ delay: 5000 }}
                                effect={"coverflow"}
                                coverflowEffect={{
                                    rotate: 30,
                                    slideShadows: false,
                                }}
                            >
                                <SwiperSlide>
                                    <div className="home-box-container">
                                        <Link to="/referee-zone/referee-system">
                                            <Card style={{ width: "260px" }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height={"140px"}
                                                        image={refereeSystem}
                                                        alt="Referee System"
                                                    />
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h7"
                                                            component="div"
                                                            style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                        >
                                                            {t("home.referee-box.system")}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                        <Link to="/referee-home/signup">
                                            <Card style={{ width: "260px" }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height={"140px"}
                                                        image={signUp}
                                                        alt="signup"
                                                    />
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h7"
                                                            component="div"
                                                            style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                        >
                                                            {t("home.referee-box.signup")}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                        <Link to="/referee-zone/wiser-referee-training">
                                            <Card style={{ width: "260px" }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height={"140px"}
                                                        image={refereeTraining}
                                                        alt="Wiser Referee Training"
                                                    />
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h7"
                                                            component="div"
                                                            style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                        >
                                                            {t("home.referee-box.referee-training")}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    {" "}
                                    <div className="home-box-container">
                                        <Link to="/referee-zone/referee-training-organizations">
                                            <Card style={{ width: "260px" }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height={"140px"}
                                                        image={authOrg}
                                                        alt="Wiser-Intro"
                                                    />
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h7"
                                                            component="div"
                                                            style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                        >
                                                            {t("home.referee-box.auth-org")}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>{" "}
                                        <Link to="/referee-zone/search-referee">
                                            <Card style={{ width: "260px" }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height={"140px"}
                                                        image={searchReferee}
                                                        alt="Search Referee"
                                                        style={{ width: "auto", margin: "0 auto" }}
                                                    />
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h7"
                                                            component="div"
                                                            style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                        >
                                                            {t("home.referee-box.search-referee")}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                        <Link to="/referee-zone/wiser-referee-training#record-form">
                                            <Card style={{ width: "260px" }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height={"140px"}
                                                        image={recordingForm}
                                                        alt="Referee Record Form Download"
                                                    />
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h7"
                                                            component="div"
                                                            style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                        >
                                                            {t("home.referee-box.record-form")}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        )}
                    </section>
                </TabPanel>
                <TabPanel value={2}>
                    {/* ===========Join Us============================================== */}
                    <section
                        className="home-section"
                        style={{ backgroundImage: "linear-gradient(to left, #00521F, teal)" }}
                    >
                        {mb && (
                            <h5
                                style={{ color: "white", marginBottom: "12px", textAlign: "center", marginTop: "10px" }}
                            >
                                {t("home.join-us-title")}
                            </h5>
                        )}
                        {!mb && (
                            <div className="home-box-container">
                                <Link to="/wiser-info/wiser-global-links">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={handsWiserball}
                                                alt="Wiser-Intro"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.joinus-box.global-link")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                                <Link to="/wiser-info/wwsc-notices-1">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={notices}
                                                alt="notices"
                                                // style={{ width: "auto", margin: "0 auto" }}
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.joinus-box.notices")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                                <Link to="/wiser-info/wiser-event-news">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={eventNews}
                                                alt="Wiser Event News"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.joinus-box.news")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>

                                <Link to="/gallery/world-wiser-albums_1">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={photosVideos}
                                                alt="Wiser-Intro"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.joinus-box.galleries")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                                <Link to="/wiser-info/volunteer-and-donation">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={volunteerDonation}
                                                alt="Wiser-Intro"
                                                style={{ width: "auto", margin: "0 auto" }}
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.joinus-box.volunteer-donation")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                                <Link to="/contact-us">
                                    <Card style={{ width: "260px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={"140px"}
                                                image={contactUs}
                                                alt="Contact Us"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h7"
                                                    component="div"
                                                    style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                >
                                                    {t("home.joinus-box.contact-us")}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </div>
                        )}{" "}
                        {mb && (
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                                spaceBetween={10}
                                slidesPerView={1}
                                // navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log("slide change")}
                                autoplay={{ delay: 5000 }}
                                effect={"coverflow"}
                                coverflowEffect={{
                                    rotate: 30,
                                    slideShadows: false,
                                }}
                            >
                                <SwiperSlide>
                                    <div className="home-box-container">
                                        <Link to="/wiser-info/wiser-global-links">
                                            <Card style={{ width: "260px" }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height={"140px"}
                                                        image={handsWiserball}
                                                        alt="Wiser-Intro"
                                                    />
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h7"
                                                            component="div"
                                                            style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                        >
                                                            {t("home.joinus-box.global-link")}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                        <Link to="/wiser-info/wwsc-notices-1">
                                            <Card style={{ width: "260px" }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height={"140px"}
                                                        image={notices}
                                                        alt="notices"
                                                        // style={{ width: "auto", margin: "0 auto" }}
                                                    />
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h7"
                                                            component="div"
                                                            style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                        >
                                                            {t("home.joinus-box.notices")}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                        <Link to="/wiser-info/wiser-event-news">
                                            <Card style={{ width: "260px" }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height={"140px"}
                                                        image={eventNews}
                                                        alt="Wiser Event News"
                                                    />
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h7"
                                                            component="div"
                                                            style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                        >
                                                            {t("home.joinus-box.news")}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    {" "}
                                    <div className="home-box-container">
                                        <Link to="/gallery/world-wiser-albums_1">
                                            <Card style={{ width: "260px" }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height={"140px"}
                                                        image={photosVideos}
                                                        alt="Wiser-Intro"
                                                    />
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h7"
                                                            component="div"
                                                            style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                        >
                                                            {t("home.joinus-box.galleries")}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                        <Link to="/wiser-info/volunteer-and-donation">
                                            <Card style={{ width: "260px" }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height={"140px"}
                                                        image={volunteerDonation}
                                                        alt="Wiser-Intro"
                                                        style={{ width: "auto", margin: "0 auto" }}
                                                    />
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h7"
                                                            component="div"
                                                            style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                        >
                                                            {t("home.joinus-box.volunteer-donation")}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                        <Link to="/contact-us">
                                            <Card style={{ width: "260px" }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height={"140px"}
                                                        image={contactUs}
                                                        alt="Contact Us"
                                                    />
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h7"
                                                            component="div"
                                                            style={{ fontSize: "0.9rem", textAlign: "center" }}
                                                        >
                                                            {t("home.joinus-box.contact-us")}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        )}{" "}
                    </section>
                </TabPanel>
            </Tabs>
        </Container>
    );
}
