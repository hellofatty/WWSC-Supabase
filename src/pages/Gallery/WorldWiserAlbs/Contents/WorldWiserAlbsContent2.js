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
// import FacebookIcon from "@mui/icons-material/Facebook";
import LinkIcon from "@mui/icons-material/Link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// ======= Import Slides======

import {
    CN_Putuo_1_Slides,
    CN_Putuo_2_Slides,
    CN_Mali_1_Slides,
    CN_Mali_2_Slides,
    CN_Laizhou_1_Slides,
    CN_Zibo_1_Slides,
} from "../../../../data/carouselDataChina";

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

export function CnShanghaiPhotoConent() {
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
                {t("gallery.world.albums_subtitle_CN_Shanghai_Putuo")}
            </div>
            <p style={{ textIndent: "0", fontSize: "0.8rem" }}>{t("gallery.world.CN_Shanghai_Putuo_photos")}</p>
            {/* Shanghai Putuo Deyu Wiser Ball Club */}
            <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/deyu_logo.jpg"
                    alt="Shanghai Putuo Deyu Wiser Ball Club Logo"
                    className="org-logo"
                    loading="lazy"
                />

                <div>
                    {/* <div className="album-org-title">{t("global.name_TW_3")}</div> */}
                    <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.wiserorg.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkIcon />
                            <span style={{ width: "100%", fontSize: "0.8rem" }}>{t("global.name_china2")}</span>
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
                            {CN_Putuo_1_Slides.map((slide) => {
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
                            {CN_Putuo_2_Slides.map((slide) => {
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
                    {lang === "en" ? (
                        <>
                            <div className="page-subtitle2" style={{ textAlign: "center" }}>
                                Love in Action: Highlights of Our 2024 Volunteers!✨
                            </div>
                            <p style={{ textIndent: "0px" }}>
                                As time flies by and we look back through the river of years, those brilliant moments of
                                Wiserball shine like radiant stars, illuminating our memories. Every successful event
                                owes its achievements to the lovely and admirable volunteers, whose presence is like
                                warm sunlight touching our hearts and radiating an awe-inspiring glow.
                            </p>
                            <p style={{ textIndent: "0px" }}>
                                During the prelude of event preparations, we transformed the campus playground into a
                                battlefield brimming with passion. We worked hand in hand, from moving equipment to
                                meticulously marking out the competition areas. Every detail was infused with sweat and
                                love. Like tireless artisans, we crafted each detail with care, striving for perfection
                                even in the most inconspicuous signage placements.
                            </p>
                            <p style={{ textIndent: "0px" }}>
                                We understood deeply that this was a joyful haven we were building for all athletes and
                                their families, and we wanted it to be filled with enthusiasm and vibrant energy.
                            </p>
                            <p style={{ textIndent: "0px", textAlign: "center" }}>
                                (The text is provided by <b>Shanghai Putuo Deyu Wiser Ball Club</b>)
                            </p>
                        </>
                    ) : lang === "zh-TW" ? (
                        <>
                            <div className="page-subtitle2" style={{ textAlign: "center" }}>
                                愛心彙聚——2024年度志願者精彩瞬間！✨
                            </div>
                            <p>
                                時光荏苒，歲月如梭，當我們在歲月的長河中回首，那些高智爾球的輝煌瞬間，如同璀璨的星辰，照亮了我們的記憶。
                                每一場賽事的成功舉辦，都離不開那些可愛可敬的志願者們，他們的身影，如同溫暖的陽光灑落心田，也綻放出令人動容的光芒。
                            </p>
                            <p style={{ textIndent: "0px" }}>
                                在活動籌備的序曲中，我們把校園操場化作了激情澎湃的“戰場”。
                                我們攜手並肩，從搬運的器材用具，到精心劃分賽場區域，每一個細節都凝聚了汗水與愛心。
                                如同一群不知疲倦的工匠，用心雕琢每一個細節，哪怕是最不起眼的標識擺放，也要追求完美無瑕。
                            </p>
                            <p style={{ textIndent: "0px" }}>
                                因為我們深知，這是為所有運動員與家人們搭建的歡樂天地，我們要讓它充滿熱情，活力四溢。
                            </p>
                            <p style={{ textIndent: "0px" }}>
                                （本文由<b>上海普陀區德育高智爾球俱樂部提供</b>）
                            </p>
                        </>
                    ) : (
                        <>
                            <div className="page-subtitle2" style={{ textAlign: "center" }}>
                                爱心彙聚——2024年度志愿者精彩瞬间！✨
                            </div>
                            <p>
                                时光荏苒，岁月如梭，当我们在岁月的长河中回首，那些高智尔球的辉煌瞬间，如同璀璨的星辰，照亮了我们的记忆。
                                每一场赛事的成功举办，都离不开那些可爱可敬的志愿者们，他们的身影，如同温暖的阳光灑落心田，也绽放出令人动容的光芒。
                            </p>
                            <p style={{ textIndent: "0px" }}>
                                在活动筹备的序曲中，我们把校园操场化作了激情澎湃的“战场”。
                                我们携手并肩，从搬运的器材用具，到精心划分赛场区域，每一个细节都凝聚了汗水与爱心。
                                如同一群不知疲倦的工匠，用心雕琢每一个细节，哪怕是最不起眼的标识摆放，也要追求完美无瑕。
                            </p>
                            <p style={{ textIndent: "0px" }}>
                                因为我们深知，这是为所有运动员与家人们搭建的欢乐天地，我们要让它充满热情，活力四溢。
                            </p>
                            <p style={{ textIndent: "0px" }}>
                                （本文由<b>上海普陀区德育高智尔球俱乐部提供</b>）
                            </p>
                        </>
                    )}

                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkaonatty%2Fvideos%2F617523170681173%2F%3Fidorvanity%3D774772584753336&show_text=false&width=560&t=0"
                            width="560"
                            height="310"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="Wiserball Asain Cup Vieo"
                        ></iframe>
                    </div>
                    <hr style={{ color: "grey", marginTop: "12px" }}></hr>
                    {lang === "en" ? (
                        <>
                            <div className="page-subtitle2" style={{ textAlign: "center", marginTop: "12px" }}>
                                [Harmony and Wisdom] The 4th Shanghai Citizenl Games
                            </div>
                            <p style={{ textIndent: "0px", textAlign: "center" }}>
                                2024 Wiserl Finals winning team's inspiring speeches
                            </p>
                            {/* <p style={{ textIndent: "0px", textAlign:"center" }}>
                               (Courtesy of Shanghai Putuo Deyu
                                Wiser Ball Club)
                            </p> */}
                        </>
                    ) : lang === "zh-TW" ? (
                        <>
                            <div className="page-subtitle2" style={{ textAlign: "center", marginTop: "12px" }}>
                                【和諧與智慧】上海市第四屆市民運動會
                            </div>
                            <p style={{ textIndent: "0px", textAlign: "center" }}>2024高智爾球總決賽得獎球隊精彩感言</p>
                            {/* <p style={{ textIndent: "0px", textAlign:"center" }}>
                                （上海普陀德育高智爾球俱樂部提供）
                            </p> */}
                        </>
                    ) : (
                        <>
                            <div className="page-subtitle2" style={{ textAlign: "center", marginTop: "12px" }}>
                                【和谐与智慧】上海市第四届市民运动会
                            </div>
                            <p style={{ textIndent: "0px", textAlign: "center" }}>2024高智尔球总决赛得奖球队精彩感言</p>
                            {/* <p style={{ textIndent: "0px", textAlign:"center" }}>
                                （上海普陀德育高智尔球俱乐部提供）
                            </p> */}
                        </>
                    )}
                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Fkaonatty%2Fvideos%2F1276618283493924%2F%3Fidorvanity%3D774772584753336&show_text=false&width=560&t=0"
                            width="560"
                            height="317"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="Wiserball Asain Cup Vieo"
                        ></iframe>
                    </div>
                    <hr style={{ color: "grey", marginTop: "12px" }}></hr>
                    {lang === "en" ? (
                        <>
                            <div className="page-subtitle2" style={{ textAlign: "center", marginTop: "12px" }}>
                                {" "}
                                [The Peak of Wisdom and Courage]{" "}
                            </div>
                            <p style={{ textIndent: "0px" }}>
                                The results of the Wiserball Finals are announced, witness the excitement and glory! In
                                any game, winning or losing is not the most important, the process of participation and
                                the experience gained are the key. The fighting spirit and teamwork displayed by the
                                players on the field truly reflected the significance of the event. Wiserball will
                                continue to move forward with everyone, conveying equality and care, and making life
                                full of health and happiness.
                            </p>
                            <p style={{ textIndent: "0px", textAlign: "center", marginTop: "12px" }}>
                                {/* (Courtesy of Shanghai Putuo Deyu Wiser Ball Club) */}
                            </p>
                        </>
                    ) : lang === "zh-TW" ? (
                        <>
                            <div className="page-subtitle2" style={{ textAlign: "center", marginTop: "12px" }}>
                                【智勇之巔】高智爾球總決賽結果揭曉，見證精彩與榮耀！
                            </div>
                            <p style={{ textIndent: "0px" }}>
                                任何一場比賽，輸贏都不是最重要的，參與的過程和所收穫的經驗才是關鍵。選手們在賽場上展現的拼搏精神和團隊合作，真正體現了賽事的意義。高智爾球將伴隨每個人繼續前行，傳遞平等與關懷，讓生活充滿健康與快樂。
                            </p>
                            {/* <p style={{ textIndent: "0px", textAlign: "center" }}>（上海普陀德育高智爾球俱樂部提供）</p> */}
                        </>
                    ) : (
                        <>
                            <div className="page-subtitle2" style={{ textAlign: "center", marginTop: "12px" }}>
                                【智勇之巅】高智尔球总决赛结果揭晓，见證精彩与荣耀！
                            </div>
                            <p style={{ textIndent: "0px" }}>
                                任何一场比赛，输赢都不是最重要的，参与的过程和所收穫的经验才是关键。选手们在赛场上展现的拼搏精神和团队合作，真正体现了赛事的意义。高智尔球将伴随每个人继续前行，传递平等与关怀，让生活充满健康与快乐。
                            </p>
                            {/* <p style={{ textIndent: "0px", textAlign: "center" }}>（上海普陀德育高智尔球俱乐部提供）</p> */}
                        </>
                    )}

                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkaonatty%2Fvideos%2F3777347515840129%2F%3Fidorvanity%3D774772584753336&show_text=false&width=560&t=0"
                            width="560"
                            height="314"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="Wiserball Asain Cup Vieo"
                        ></iframe>
                    </div>
                    <hr style={{ color: "grey", marginTop: "12px" }}></hr>
                    {lang === "en" ? (
                        <>
                            <div className="page-subtitle2" style={{ textAlign: "center", marginTop: "12px" }}>
                                More to Enjoy! Putuo Tournament Highlights:
                            </div>
                            <p style={{ textIndent: "0px", textAlign: "center" }}>
                                Family Fun - Hand in Hand, Advancing with Pride, Sharing the Joy Far and Wide!".👏
                            </p>{" "}
                            <p style={{ textIndent: "0px", textAlign: "center" }}>
                                {" "}
                                (Courtesy of Shanghai Putuo Moral Education Wiser Ball Club)
                            </p>
                        </>
                    ) : lang === "zh-TW" ? (
                        <>
                            <div className="page-subtitle2" style={{ textAlign: "center", marginTop: "12px" }}>
                                精彩繼續!【普陀賽花絮視頻】
                            </div>
                            <p style={{ textIndent: "0px", textAlign: "center" }}>
                                高智爾球 親子同心 攜手共進 共享美好！👏
                            </p>
                        </>
                    ) : (
                        <>
                            <div className="page-subtitle2" style={{ textAlign: "center", marginTop: "12px" }}>
                                精彩继续!【普陀赛花絮视频】
                            </div>
                            <p style={{ textIndent: "0px", textAlign: "center" }}>
                                高智尔球 亲子同心 携手共进 共享美好！👏
                            </p>
                        </>
                    )}
                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Fkaonatty%2Fvideos%2F1312436093258699%2F%3Fidorvanity%3D774772584753336&show_text=false&width=560&t=0"
                            width="560"
                            height="317"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="Wiserball Asain Cup Vieo"
                        ></iframe>
                    </div>
                    <hr style={{ color: "grey", marginTop: "12px" }}></hr>
                    {lang === "en" ? (
                        <>
                            <div className="page-subtitle2" style={{ textAlign: "center", marginTop: "12px" }}>
                                👉Hightlight Video from Shanghai, China -<br></br> “Nurturing Bonds: 2024 "Run, Youth!"
                                Shanghai Children's Sports League”{" "}
                            </div>
                            <p style={{ textIndent: "0px", textAlign: "center" }}>
                                The 4th Wiser Ball Campus Tournament, Embracing Health, Happiness, and Autonomy 😊🏃‍♂️
                            </p>
                        </>
                    ) : lang === "zh-TW" ? (
                        <>
                            <div className="page-subtitle2" style={{ textAlign: "center", marginTop: "12px" }}>
                                影片來囉！【運動伴成長，親子更和諧】2024 “奔跑吧·少年”上海市少兒體育聯賽
                            </div>
                            <p style={{ textIndent: "0px", textAlign: "center" }}>
                                “健康、快樂、我做主”第四屆高智爾球校園聯賽 😊🏃‍♂️🌟
                            </p>
                        </>
                    ) : (
                        <>
                            <div className="page-subtitle2" style={{ textAlign: "center", marginTop: "12px" }}>
                                影片来囉！【运动伴成长，亲子更和谐】2024 “奔跑吧·少年”上海市少儿体育联赛
                            </div>
                            <p style={{ textIndent: "0px", textAlign: "center" }}>
                                “健康、快乐、我做主”第四届高智尔球校园联赛 😊🏃‍♂️🌟
                            </p>
                        </>
                    )}

                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkaonatty%2Fvideos%2F737549428530537%2F%3Fidorvanity%3D774772584753336&show_text=false&width=560&t=0"
                            width="560"
                            height="314"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="Wiserball Asain Cup Vieo"
                        ></iframe>
                    </div>
                </CustomTabPanel>
            </Box>
        </>
    );
}

export function CnShenZhenPhotoConent() {
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
                {t("gallery.world.albums_subtitle_CN_Shenzhen_Mali")}
            </div>
           
            <p style={{ textIndent: "0", fontSize:"0.8rem" }}>{t("gallery.world.CN_Shenzhen_Mali_photos")}</p>
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
                            {CN_Mali_1_Slides.map((slide) => {
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
                            {CN_Mali_2_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                        <br />
                        {/* <Carousel
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
                            {TW_TWML_3_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt}  loading="lazy"/>
                                    </div>
                                );
                            })}
                        </Carousel> */}
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <div className="page-subtitle2" style={{ textAlign: "center" }}>
                        {t("gallery.world.albums_subtitle_CN_Shenzhen_Mali")}
                    </div>
                    {lang === "en" ? (
                        <p style={{ textIndent: "0px", fontSize: "0.8rem", textAlign: "center" }}>
                            Videos courtesy of Ma Li, WWSC Grade 3 Referee in Shenzhen
                        </p>
                    ) : lang === "zh-TW" ? (
                        <p style={{ textIndent: "0px", fontSize: "0.8rem", textAlign: "center" }}>
                            由深圳第三級裁判馬荔提供
                        </p>
                    ) : (
                        <p style={{ textIndent: "0px", fontSize: "0.8rem", textAlign: "center" }}>
                            由深圳第三級裁判馬荔提供
                        </p>
                    )}

                    <div className="video-item-container">
                        <div className="album-mali-video-item">
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fmichaellinwwsc%2Fvideos%2F4462015947357310%2F%3Fidorvanity%3D774772584753336&show_text=false&width=267&t=0"
                                width="267"
                                height="476"
                                style={{ border: "none", overflow: "hidden" }}
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                title="Videos courtesy of Ma Li, WWSC Grade 3 Referee in Shenzhen"
                            ></iframe>
                        </div>

                        <div className="album-mali-video-item">
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fmichaellinwwsc%2Fvideos%2F7519872114761170%2F%3Fidorvanity%3D774772584753336&show_text=false&width=267&t=0"
                                width="267"
                                height="476"
                                style={{ border: "none", overflow: "hidden" }}
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                title="Videos courtesy of Ma Li, WWSC Grade 3 Referee in Shenzhen"
                            ></iframe>
                        </div>
                        <div className="album-mali-video-item">
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fmichaellinwwsc%2Fvideos%2F453990573983430%2F%3Fidorvanity%3D774772584753336&show_text=false&width=267&t=0"
                                width="267"
                                height="476"
                                style={{ border: "none", overflow: "hidden" }}
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                title="Videos courtesy of Ma Li, WWSC Grade 3 Referee in Shenzhen"
                            ></iframe>
                        </div>
                    </div>
                </CustomTabPanel>
            </Box>

            {/* Vietnam Wiser Ball */}
            <div className="wiser-org-container">
                {/* <img
                    src="/assets/GlobalLink/deyu_logo.jpg"
                    alt="Shanghai Putuo Moral Education Wiser Ball Club Logo"
                    className="wiser_org_logo"
                    style={{ width: "60px" }}
                /> */}

                <div className="flex flex-column">
                    {/* <div className="album-org-title">{t("global.name_china3b")}</div> */}
                    {/* <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.wiserorg.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkIcon />
                            <span style={{ fontSize: "1rem" }}>{t("global.name_china2")}</span>
                        </a>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export function CnShanDongPhotoConent() {
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
                {t("gallery.world.albums_subtitle_CN_Shandong")}
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
                        <div className="page-subtitle2" style={{ textAlign: "center" }}>
                            {t("gallery.world.albums_item_title_Laizhou")}
                        </div>
                        <p style={{ textIndent: "0", fontSize: "0.8rem", textAlign: "center" }}>
                            {t("gallery.world.CN_Laizhou_photos")}
                        </p>
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
                            {CN_Laizhou_1_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt} loading="lazy" />
                                    </div>
                                );
                            })}
                        </Carousel>
                        <hr style={{ color: "grey" }} />

                        <div className="page-subtitle2" style={{ textAlign: "center" }}>
                            {t("gallery.world.albums_item_title_Zibo")}
                        </div>
                        <p style={{ textIndent: "0", fontSize: "0.8rem", textAlign: "center" }}>
                            {t("gallery.world.CN_Zibo_photos")}
                        </p>
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
                            {CN_Zibo_1_Slides.map((slide) => {
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
                    <div className="page-subtitle2" style={{ textAlign: "center" }}>
                        {t("gallery.world.albums_item_title_Zibo")}
                    </div>
                    <p style={{ textIndent: "0", fontSize: "0.8rem", textAlign: "center" }}>
                        {t("gallery.world.CN_Zibo_video")}
                    </p>
                    <hr style={{ color: "grey" }} />
                    {lang === "en" ? (
                        <>
                            <p style={{ textIndent: "0px" }}>
                                On January 2, 2025, the HuanTai County{" "}
                                <b>
                                    New Year's Day and Spring Festival Mass Fitness Series Activities and the Second
                                    "Principal's Cup" Wiserball Target Shooting Competition
                                </b>
                                of HuanTai County Experimental School kicked off spectacularly, with{" "}
                                <b>more than 1,600 student enthusiasts</b> participating. At the competition site, the
                                participants were all full of energy and fighting spirit. They cooperated with each
                                other, competing in intelligence and physical strength through arrangement and striking.
                                The players' ball skills and team cooperation won rounds of applause from the audience,
                                igniting the passion of the winter.{" "}
                            </p>{" "}
                            <p>
                                HuanTai County Experimental School student Wei Yiwen: "I have been practicing gateball
                                for more than a year. Through this competition, I have gained a lot of happiness. I hope
                                more students will join this sport."
                            </p>{" "}
                            <p>
                                HuanTai County Experimental School Gateball Head Coach and teacher Liu Chunhong:
                                "Wiserball is a sport of will, unity, and joy. In recent years, this sport has been
                                widely developed in HuanTai. Children have cultivated good habits unconsciously. I hope
                                that through this competition, more children will participate in this sport."
                            </p>{" "}
                            <p style={{ textIndent: "0px" }}>
                                In recent years, HuanTai has been committed to building "The Beautiful HuanTai, the City
                                of Sports," widely carrying out mass fitness activities. The city's quality has
                                continued to improve, and people's well-being has been continuously enhanced, creating a
                                strong social fitness atmosphere of "I exercise, I am healthy, I am happy."
                            </p>{" "}
                            <hr style={{ color: "grey" }} />
                            <p style={{ textIndent: "0px", marginBottom: "12px", lineHeight: "1" }}>
                                <b>Location</b>: HuanTai County Experimental School [China, Shandong]{" "}
                            </p>
                            <p style={{ textIndent: "0px", marginBottom: "12px", lineHeight: "1" }}>
                                <b>Date</b>: January 2-3, 2025{" "}
                            </p>
                            <p style={{ textIndent: "0px", marginBottom: "12px", lineHeight: "1" }}>
                                <b>Participants</b>: All teachers and students of the first and second grades of HuanTai
                                County Experimental School Primary School
                            </p>
                        </>
                    ) : lang === "zh-TW" ? (
                        <>
                            <p style={{ textIndent: "0px" }}>
                                2025年1月2日，桓台縣元旦春節
                                <b>全民健身系列活動暨桓台縣實驗學校第二屆「校長杯」高智爾球定點球比賽</b>精彩開賽，
                                <b>1600餘名學生愛好者</b>
                                參加。比賽現場，參賽隊員們個個精神飽滿、鬥志昂揚，大家相互配合，在佈局與投擊中，進行智力與體力的較量，球員們的球技和團隊協作贏得了觀眾陣陣掌聲，點燃冬日裡的熱情。
                            </p>
                            <p>
                                桓台縣實驗學校學生魏一玟：「我練習高智爾球一年多了，通過這次比賽我收穫了很多快樂，希望更多的同學加入到這項運動中。」
                            </p>
                            <p>
                                桓台縣實驗學校高智爾球主教練
                                劉春紅老師：「高智爾球是一項意志、團結、快樂的運動，近幾年來該項運動在桓台得到了廣泛的開展，孩子們在不知不覺中培養了良好習慣，希望通過這次比賽，讓更多孩子們參與這項運動。」
                            </p>
                            <p style={{ textIndent: "0px" }}>
                                近年來，桓台致力打造「<b>大美桓台·體育之城</b>
                                」，廣泛開展全民健身運動，城市品質持續提升，民生福祉不斷增進，營造「
                                <b>我運動、我健康、我快樂</b>」濃厚的社會健身氛圍。
                            </p>
                            <hr style={{ color: "grey" }} />
                            <p style={{ textIndent: "0px", marginBottom: "12px", lineHeight: "1" }}>
                                <b>地點</b>： 桓台縣實驗學校
                            </p>
                            <p style={{ textIndent: "0px", marginBottom: "12px", lineHeight: "1" }}>
                                <b>日期</b>： 2025年1月2日-3日
                            </p>
                            <p style={{ textIndent: "0px", marginBottom: "12px", lineHeight: "1" }}>
                                <b>參加人員</b>： 桓台縣實驗學校小學一丶二年級的全體師生
                            </p>
                        </>
                    ) : (
                        <>
                            <p style={{ textIndent: "0px" }}>
                                2025年1月2日，桓台县元旦春节
                                <b>全民健身系列活动暨桓台县实验学校第二届「校长杯」高智尔球定点球比赛</b>精彩开赛，
                                <b>1600馀名学生爱好者</b>
                                参加。比赛现场，参赛队员们个个精神饱满、鬥志昂扬，大家相互配合，在佈局与投击中，进行智力与体力的较量，球员们的球技和团队协作赢得了观众阵阵掌声，点燃冬日里的热情。
                            </p>
                            <p>
                                桓台县实验学校学生魏一玟：「我练习高智尔球一年多了，通过这次比赛我收穫了很多快乐，希望更多的同学加入到这项运动中。」
                            </p>
                            <p>
                                桓台县实验学校高智尔球主教练
                                刘春红老师：「高智尔球是一项意志、团结、快乐的运动，近几年来该项运动在桓台得到了广泛的开展，孩子们在不知不觉中培养了良好习惯，希望通过这次比赛，让更多孩子们参与这项运动。」
                            </p>
                            <p style={{ textIndent: "0px" }}>
                                近年来，桓台致力打造「<b>大美桓台·体育之城</b>
                                」，广泛开展全民健身运动，城市品质持续提升，民生福祉不断增进，营造「
                                <b>我运动、我健康、我快乐</b>」浓厚的社会健身氛围。
                            </p>
                            <hr style={{ color: "grey" }} />
                            <p style={{ textIndent: "0px", marginBottom: "12px", lineHeight: "1" }}>
                                <b>地点</b>： 桓台县实验学校
                            </p>
                            <p style={{ textIndent: "0px", marginBottom: "12px", lineHeight: "1" }}>
                                <b>日期</b>： 2025年1月2日-3日
                            </p>
                            <p style={{ textIndent: "0px", marginBottom: "12px", lineHeight: "1" }}>
                                <b>参加人员</b>： 桓台县实验学校小学一丶二年级的全体师生
                            </p>
                        </>
                    )}
                    <br></br>
                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkaonatty%2Fvideos%2F1117102040120779%2F%3Fidorvanity%3D774772584753336&show_text=false&width=560&t=0"
                            width="560"
                            height="314"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="第二屆「校長杯」高智爾球定點球比賽"
                        ></iframe>
                    </div>
                </CustomTabPanel>
            </Box>
            <br />

            {/* Li-Le Wiser Sport Association  */}
            {/* <div className="wiser-org-container">
                <img
                    src="/assets/GlobalLink/Li-Le.png"
                    alt="Li-Le Wiser Sport Association Logo"
                    className="wiser_org_logo"
                    style={{ width: "60px" }}
                /> */}

            {/* <div className="flex flex-column"> */}
            {/* <div className="album-org-title">{t("global.name_TW_7a")}</div> */}
            {/* <div>
                        <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/fw2appl"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ fontSize: "1rem" }}>{t("global.name_TW_7a")}</span>
                        </a>
                    </div> */}
            {/* </div> */}
            {/* </div> */}
        </>
    );
}

export function CnFujianPhotoConent() {
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
    // const arrowStyles = {
    //     position: "absolute",
    //     zIndex: 2,
    //     top: "calc(50% - 15px)",
    //     width: 40,
    //     height: 40,
    //     cursor: "pointer",
    //     // fontSize: "2 rem",
    //     // color: "white",
    // };

    // const indicatorStyles = {
    //     background: "#fff",
    //     width: 8,
    //     height: 8,
    // borderRadius: "50%",
    //     display: "inline-block",
    //     margin: "0 8px",
    // };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_CN_Fujian")}
            </div>

            <p style={{ textIndent: "0", fontSize: "0.8rem" }}>{t("gallery.world.CN_Fujian_photos")}</p>
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
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={1}>
                    <div className="album-flex">
                        {/* <Carousel
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
                            {TW_Miaoli_1_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt}  loading="lazy"/>
                                    </div>
                                );
                            })}
                        </Carousel> */}
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={0}>
                    {lang === "en" ? (
                        <div className="page-subtitle2" style={{ textAlign: "center" }}>
                            2024 Fujian Provincial National Fitness Games (Ningde Division) and the 2nd East China
                            Wiserball Championships
                        </div>
                    ) : lang === "zh-TW" ? (
                        <div className="page-subtitle2" style={{ textAlign: "center" }}>
                            2024年福建省全民健身運動會（寧德賽區）暨第二屆華東區高智爾球賽
                        </div>
                    ) : (
                        <div className="page-subtitle2" style={{ textAlign: "center" }}>
                            2024年福建省全民健身运动会（宁德赛区）暨第二届华东区高智尔球赛
                        </div>
                    )}
                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Fkaonatty%2Fvideos%2F934164652103005%2F%3Fidorvanity%3D774772584753336&show_text=false&width=560&t=0"
                            width="560"
                            height="317"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="福建省全民健身運動會(寧德賽區)暨第二屆華東區高智爾球賽"
                        ></iframe>
                    </div>
                </CustomTabPanel>
            </Box>

            {/* Vietnam Wiser Ball */}
            <div className="wiser-org-container">
                {/* <img
                        src="/assets/GlobalLink/Li-Le.png"
                        alt="Li-Le Wiser Sport Association Logo"
                        className="wiser_org_logo"
                        style={{ width: "60px" }}
                    /> */}

                <div className="flex flex-column">
                    {/* <div className="album-org-title">{t("global.name_TW_7a")}</div> */}
                    <div>
                        {/* <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/groups/888207258805132"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ fontSize: "1rem" }}>{t("global.name_china4a")}</span>
                        </a> */}
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export function CnHangZhouPhotoConent() {
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
    // const arrowStyles = {
    //     position: "absolute",
    //     zIndex: 2,
    //     top: "calc(50% - 15px)",
    //     width: 40,
    //     height: 40,
    //     cursor: "pointer",
    //     // fontSize: "2 rem",
    //     // color: "white",
    // };

    // const indicatorStyles = {
    //     background: "#fff",
    //     width: 8,
    //     height: 8,
    // borderRadius: "50%",
    //     display: "inline-block",
    //     margin: "0 8px",
    // };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_CN_Hangzhou")}
            </div>

            <p style={{ textIndent: "0", fontSize: "0.8rem" }}>{t("gallery.world.CN_Hangzhou_photos")}</p>
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
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={1}>
                    <div className="album-flex">
                        {/* <Carousel
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
                            {TW_Miaoli_2_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt}  loading="lazy"/>
                                    </div>
                                );
                            })}
                        </Carousel> */}
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={0}>
                    <div className="page-subtitle2" style={{ textAlign: "center" }}>
                        {t("gallery.china_videos.title_1")}
                    </div>

                    <div className="album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/1j2tsavZsJY?si=IPlHId0JzoLtPbnT"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <hr style={{ color: "grey", marginTop: "12px" }}></hr>
                    <div className="page-subtitle2" style={{ textAlign: "center" }}>
                        {t("gallery.china_videos.title_2")}
                    </div>

                    <div className="album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/DLW2Qp9s_Lk?si=zJZY6bRkV0GJcR4p"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <hr style={{ color: "grey", marginTop: "12px" }}></hr>
                    <div className="page-subtitle2" style={{ textAlign: "center" }}>
                        {t("gallery.china_videos.title_3")}
                    </div>

                    <div className="album-video-item">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/EDBYr-Indnw?si=5ckx-Mkb7-QxtNBV"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </CustomTabPanel>
            </Box>

            <div className="wiser-org-container">
                {/* <img
                        src="/assets/GlobalLink/Li-Le.png"
                        alt="Li-Le Wiser Sport Association Logo"
                        className="wiser_org_logo"
                        style={{ width: "60px" }}
                    /> */}

                <div className="flex flex-column">
                    {/* <div className="album-org-title">{t("global.name_TW_7a")}</div> */}
                    <div>
                        {/* <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/groups/888207258805132"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ fontSize: "1rem" }}>{t("global.name_china4a")}</span>
                        </a> */}
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export function CnHainanPhotoConent() {
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
    // const arrowStyles = {
    //     position: "absolute",
    //     zIndex: 2,
    //     top: "calc(50% - 15px)",
    //     width: 40,
    //     height: 40,
    //     cursor: "pointer",
    //     // fontSize: "2 rem",
    //     // color: "white",
    // };

    // const indicatorStyles = {
    //     background: "#fff",
    //     width: 8,
    //     height: 8,
    // borderRadius: "50%",
    //     display: "inline-block",
    //     margin: "0 8px",
    // };

    return (
        <>
            <div className={!mb ? "page-secondary-title" : "page-subtitle"}>
                {t("gallery.world.albums_subtitle_CN_Hainan")}
            </div>
          
            <p style={{ textIndent: "0", fontSize:"0.8rem"}}>{t("gallery.world.CN_Hainan_photos")}</p>
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
                            label={t("admin.event-list.tab-videos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<SmartDisplayIcon />}
                            iconPosition="start"
                            label={t("admin.event-list.tab-photos")}
                            sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={1}>
                    <div className="album-flex">
                        {/* <Carousel
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
                            {TW_Miaoli_1_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt}  loading="lazy"/>
                                    </div>
                                );
                            })}
                        </Carousel> */}

                        {/* <Carousel
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
                            {TW_Miaoli_2_Slides.map((slide) => {
                                return (
                                    <div key={slide.id}>
                                        <img src={slide.src} alt={slide.alt}  loading="lazy"/>
                                    </div>
                                );
                            })}
                        </Carousel> */}
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={0}>
                    {lang === "en" ? (
                        <>
                            <div className="album-item-title-wrapper">
                                <div className="page-subtitle2" style={{ textAlign: "center" }}>
                                    Highlights from the First Wiserball League Competitions in Hainan Province
                                </div>
                                <p style={{ textIndent: "0px", textAlign: "center" }}>
                                    Every play, every discussion, is filled with their love for this sport! Let's
                                    experience the endless challenges and joy that WISER brings!
                                </p>
                            </div>
                        </>
                    ) : lang === "zh-TW" ? (
                        <>
                            <div className="album-item-title-wrapper">
                                <div className="page-subtitle2" style={{ textAlign: "center" }}>
                                    【海南省第一屆高智爾球聯賽花絮】
                                </div>
                                <p style={{ textIndent: "0px", textAlign: "center" }}>
                                    每一次發球、每一次討論，都飽含著他們對這項運動的熱愛!
                                    一起感受WISER帶來的無限挑戰與樂趣 !
                                </p>{" "}
                            </div>
                        </>
                    ) : (
                        <>
                            {" "}
                            <div className="album-item-title-wrapper">
                                <div className="page-subtitle2" style={{ textAlign: "center" }}>
                                    【海南省第一届高智尔球联赛花絮】
                                </div>
                                <p style={{ textIndent: "0px", textAlign: "center" }}>
                                    每一次发球、每一次讨论，都饱含著他们对这项运动的热爱!
                                    一起感受WISER带来的无限挑战与乐趣 !
                                </p>{" "}
                            </div>
                        </>
                    )}

                    <div className="album-video-item">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Fkaonatty%2Fvideos%2F2016599298854791%2F%3Fidorvanity%3D774772584753336&show_text=false&width=560&t=0"
                            width="560"
                            height="317"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="海南省第一屆高智爾球聯賽花絮"
                        ></iframe>
                    </div>
                </CustomTabPanel>
            </Box>

            {/* Vietnam Wiser Ball */}
            <div className="wiser-org-container">
                {/* <img
                        src="/assets/GlobalLink/Li-Le.png"
                        alt="Li-Le Wiser Sport Association Logo"
                        className="wiser_org_logo"
                        style={{ width: "60px" }}
                    /> */}

                <div className="flex flex-column">
                    {/* <div className="album-org-title">{t("global.name_TW_7a")}</div> */}
                    <div>
                        {/* <a
                            className="org-fb-icon__link"
                            href="https://www.facebook.com/groups/888207258805132"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                            <span style={{ fontSize: "1rem" }}>{t("global.name_china4a")}</span>
                        </a> */}
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}
