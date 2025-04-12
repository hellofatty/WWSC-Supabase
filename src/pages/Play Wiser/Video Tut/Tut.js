/** @format */

import "./Tut.css";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import CustomTab from "../../../components/CustomTab/CustomTab";
import { Link } from "react-router-dom";
import { PrimaryTitle, ResParagraphNoIndent, SecondaryTitle } from "../../../components/Text/Title/Title";
import ResponsiveYouTube from "../../../components/ResponsiveImg/ResponsiveYouTube";
// import YoukuEmbedVideo from "youku-embed-video";

export default function Tut() {
    const { t, i18n } = useTranslation("global");
    // const mb = useMediaQuery("(max-width:600px)");

    const lang = i18n.language;

    // =================English================

    const youtubeContent = (
        <div className="video-container">
            <div className="video-item">
                <SecondaryTitle text="YouTube Video Tutorial, Full Version:" />
                <a href="http://youtu.be/RFIru2Bv33w" className="yt-links" target="_blank" rel="noreferrer">
                    http://youtu.be/RFIru2Bv33w
                </a>
                <div className="video-content">
                    <ResponsiveYouTube
                        src="https://www.youtube.com/embed/RFIru2Bv33w?si=g7DxzuUD_fIRI5mX&amp;start=6"
                        title="YouTube Video Tutorial, Full Version"
                    />
                </div>
            </div>
            <hr />
            <div className="video-item">
                <SecondaryTitle text="YouTube Video Tutorial, Part 1:" />

                <a href="http://youtu.be/AEPuZ5OkCT0" className="yt-links" target="_blank" rel="noreferrer">
                    http://youtu.be/AEPuZ5OkCT0
                </a>
                <div className="video-content">
                    <ResponsiveYouTube
                        src="https://www.youtube.com/embed/AEPuZ5OkCT0?si=kHaCInKA7_EBrQHI&amp;start=4"
                        title="YouTube Video Tutorial, Part 1"
                    />
                </div>
            </div>
            <hr />
            <div className="video-item">
                <SecondaryTitle text="YouTube Video Tutorial, Part 2:" />
                <a href="http://youtu.be/eFkCAQRamyE" className="yt-links" target="_blank" rel="noreferrer">
                    http://youtu.be/eFkCAQRamyE
                </a>
                <div className="video-content">
                    <ResponsiveYouTube
                        src="https://www.youtube.com/embed/eFkCAQRamyE?si=_NQDgiCu_7Twa518&amp;start=1"
                        title="YouTube Video Tutorial, Part 2"
                    />
                </div>
            </div>
            <hr />
            <div className="video-item">
                <SecondaryTitle text="YouTube Video Tutorial, Part 3:" />
                <a href="http://youtu.be/s8jtNnw9NtQ" className="yt-links" target="_blank" rel="noreferrer">
                    http://youtu.be/s8jtNnw9NtQ
                </a>
                <div className="video-content">
                    <ResponsiveYouTube
                        src="https://www.youtube.com/embed/s8jtNnw9NtQ?si=146WIGXrcHr-SA_x&amp;start=2"
                        title="YouTube Video Tutorial, Part 3"
                    />
                </div>
            </div>
            <hr></hr>
            <div className="video-item">
                <SecondaryTitle text="YouTube Video Tutorial, Part 4:" />
                <a href="http://youtu.be/CExtrz5V6SE" className="yt-links" target="_blank" rel="noreferrer">
                    http://youtu.be/CExtrz5V6SE
                </a>
                <div className="video-content">
                    <ResponsiveYouTube
                        src="https://www.youtube.com/embed/CExtrz5V6SE?si=u_ECoskzHkqfrLDQ&amp;start=3"
                        title="YouTube Video Tutorial, Part 4"
                    />
                </div>
            </div>
        </div>
    );

    const youkuContent = (
        <div className="yk-links">
            <a href="http://v.youku.com/v_show/id_XNTY1MzcxMjI0.html" target="_blank" rel="noreferrer">
                YouKu Video Tutorial, Full Version
            </a>
            <a href="http://v.youku.com/v_show/id_XNTY1MzM2NDgw.html" target="_blank" rel="noreferrer">
                YouKu Video Tutorial, Part 1
            </a>
            <a href="http://v.youku.com/v_show/id_XNTY1MzQ1ODA4.html" target="_blank" rel="noreferrer">
                YouKu Video Tutorial, Part 2
            </a>
            <a href="http://v.youku.com/v_show/id_XNTY1NTU3OTk2.html" target="_blank" rel="noreferrer">
                YouKu Video Tutorial, Part 3
            </a>
            <a href="http://v.youku.com/v_show/id_XNTY1MzI3NzM2.html" target="_blank" rel="noreferrer">
                YouKu Video Tutorial, Part 4
            </a>
        </div>
    );

    const content = [
        { title: "Youtube", content: youtubeContent },
        { title: "Youku", content: youkuContent },
    ];
    // =================繁體中文================

    const youtubeContent_zh_TW = (
        <div className="video-container">
            <div className="video-item">
                <SecondaryTitle text="教學視頻完整版本鍵結：" />
               
                <a href="http://youtu.be/qlelOHIrPp0" className="yt-links" target="_blank" rel="noreferrer">
                    http://youtu.be/qlelOHIrPp0
                </a>
                <div className="video-content">
                    <ResponsiveYouTube
                        src="https://www.youtube.com/embed/qlelOHIrPp0?si=2zPQZkheQcSGNLqS&amp;start=5"
                        title="教學視頻完整版本鍵結"
                    />
                </div>
            </div>
            <hr />
            <div className="video-item">
                <SecondaryTitle text="教學視頻第一部份鍵結：" />

                <a href="http://youtu.be/d_SDxe6nWv0" className="yt-links" target="_blank" rel="noreferrer">
                    http://youtu.be/d_SDxe6nWv0
                </a>
                <div className="video-content">
                    <ResponsiveYouTube
                        src="https://www.youtube.com/embed/d_SDxe6nWv0?si=unAwMLbdNgnsKcSj&amp;start=2"
                        title="教學視頻第一部份鍵結"
                    />
                </div>
            </div>
            <hr />
            <div className="video-item">
                <SecondaryTitle text="教學視頻第二部份鍵結：" />

                <a href="http://youtu.be/tcVat_bL3XI" className="yt-links" target="_blank" rel="noreferrer">
                    http://youtu.be/tcVat_bL3XI
                </a>
                <div className="video-content">
                    <ResponsiveYouTube
                        src="https://www.youtube.com/embed/tcVat_bL3XI?si=ngCcPElI5WlMqSVx&amp;start=5"
                        title="教學視頻第二部份鍵結"
                    />
                </div>
            </div>
            <hr />
            <div className="video-item">
                <SecondaryTitle text="教學視頻第三部份鍵結：" />

                <a href="http://youtu.be/gAXjZ6DbPYA" className="yt-links" target="_blank" rel="noreferrer">
                    http://youtu.be/gAXjZ6DbPYA
                </a>
                <div className="video-content">
                    <ResponsiveYouTube
                        src="https://www.youtube.com/embed/gAXjZ6DbPYA?si=h1Qcr-xPjBfVnXpk&amp;start=5"
                        title="教學視頻第三部份鍵結"
                    />
                </div>
            </div>
            <hr></hr>
            <div className="video-item">
                <SecondaryTitle text="教學視頻第四部份鍵結：" />
                <a href="http://youtu.be/IzLihsf5S-E" className="yt-links" target="_blank" rel="noreferrer">
                    http://youtu.be/IzLihsf5S-E
                </a>
                <div className="video-content">
                    <ResponsiveYouTube
                        src="https://www.youtube.com/embed/IzLihsf5S-E?si=PDfHhIZe-VINEcjy&amp;start=4"
                        title="教學視頻第四部份鍵結"
                    />
                </div>
            </div>
        </div>
    );

    const youkuContent_TW = (
        <div className="yk-links">
            <a href="http://v.youku.com/v_show/id_XNTY1MzA2NzY0.html?f=19339374" target="_blank" rel="noreferrer">
                優酷網線上—觀看教學視頻完整版本鍵結
            </a>

            <a href="http://v.youku.com/v_show/id_XNTY1MjE4NTYw.html?f=19339374" target="_blank" rel="noreferrer">
                優酷網線上—觀看教學視頻第一部份鍵結{" "}
            </a>

            <a href="http://v.youku.com/v_show/id_XNTY1MjkzNTM2.html?f=19339374" target="_blank" rel="noreferrer">
                優酷網線上—觀看教學視頻第二部份鍵結
            </a>

            <a href="http://v.youku.com/v_show/id_XNTY1MzAzMjEy.html?f=19339374" target="_blank" rel="noreferrer">
                優酷網線上—觀看教學視頻第三部份鍵結
            </a>

            <a href="http://v.youku.com/v_show/id_XNTY1MzI1NDA0.html?f=19339374" target="_blank" rel="noreferrer">
                優酷網線上—觀看教學視頻第四部份鍵結
            </a>
        </div>
    );

    const content_zh_TW = [
        { title: "YouTube", content: youtubeContent_zh_TW },
        { title: "優酷網", content: youkuContent_TW },
    ];

    // =================简体中文================

    const youtubeContent_zh_CN = (
        <div className="video-container">
            <div className="video-item">
                <SecondaryTitle text="教学视频完整版本键结：" />

                <a href="http://youtu.be/qlelOHIrPp0" className="yt-links" target="_blank" rel="noreferrer">
                    http://youtu.be/qlelOHIrPp0
                </a>
                <div className="video-content">
                    <ResponsiveYouTube
                        src="https://www.youtube.com/embed/qlelOHIrPp0?si=2zPQZkheQcSGNLqS&start=5"
                        title="教学视频完整版本键结"
                    />
                </div>
            </div>
            <hr />
            <div className="video-item">
                <SecondaryTitle text="教学视频第一部份键结：" />

                <a href="http://youtu.be/d_SDxe6nWv0" className="yt-links" target="_blank" rel="noreferrer">
                    http://youtu.be/d_SDxe6nWv0
                </a>
                <div className="video-content">
                    <ResponsiveYouTube
                        src="https://www.youtube.com/embed/d_SDxe6nWv0?si=unAwMLbdNgnsKcSj&start=2"
                        title="教学视频第一部份键结"
                    />
                </div>
            </div>
            <hr />
            <div className="video-item">
                <SecondaryTitle text="教学视频第二部份键结：" />

                <a href="http://youtu.be/tcVat_bL3XI" className="yt-links" target="_blank" rel="noreferrer">
                    http://youtu.be/tcVat_bL3XI
                </a>
                <div className="video-content">
                    <ResponsiveYouTube
                        src="https://www.youtube.com/embed/tcVat_bL3XI?si=ngCcPElI5WlMqSVx&start=5"
                        title="教学视频第二部份键结"
                    />
                </div>
            </div>
            <hr />
            <div className="video-item">
                <SecondaryTitle text="教学视频第三部份键结：" />

                <a href="http://youtu.be/gAXjZ6DbPYA" className="yt-links" target="_blank" rel="noreferrer">
                    http://youtu.be/gAXjZ6DbPYA
                </a>
                <div className="video-content">
                    <ResponsiveYouTube
                        src="https://www.youtube.com/embed/gAXjZ6DbPYA?si=h1Qcr-xPjBfVnXpk&start=5"
                        title="教学视频第三部份键结"
                    />
                </div>
            </div>
            <hr></hr>
            <div className="video-item">
                <SecondaryTitle text="教学视频第四部份键结：" />

                <a href="http://youtu.be/IzLihsf5S-E" className="yt-links" target="_blank" rel="noreferrer">
                    http://youtu.be/IzLihsf5S-E
                </a>
                <div className="video-content">
                    <ResponsiveYouTube
                        src="https://www.youtube.com/embed/IzLihsf5S-E?si=PDfHhIZe-VINEcjy&start=4"
                        title="教学视频第四部份键结"
                    />
                  
                </div>
            </div>
        </div>
    );

    const youkuContent_CN = (
        <div className="yk-links">
            <a href="http://v.youku.com/v_show/id_XNTY1MzA2NzY0.html?f=19339374" target="_blank" rel="noreferrer">
                优酷网线上—观看教学视频完整版本键结
            </a>

            <a href="http://v.youku.com/v_show/id_XNTY1MjE4NTYw.html?f=19339374" target="_blank" rel="noreferrer">
                优酷网线上—观看教学视频第一部份键结{" "}
            </a>

            <a href="http://v.youku.com/v_show/id_XNTY1MjkzNTM2.html?f=19339374" target="_blank" rel="noreferrer">
                优酷网线上—观看教学视频第二部份键结
            </a>

            <a href="http://v.youku.com/v_show/id_XNTY1MzAzMjEy.html?f=19339374" target="_blank" rel="noreferrer">
                优酷网线上—观看教学视频第叁部份键结
            </a>

            <a href="http://v.youku.com/v_show/id_XNTY1MzI1NDA0.html?f=19339374" target="_blank" rel="noreferrer">
                优酷网线上—观看教学视频第四部份键结
            </a>
        </div>
    );

    const content_zh_CN = [
        { title: "YouTube", content: youtubeContent_zh_CN },
        { title: "优酷网", content: youkuContent_CN },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
            <PrimaryTitle text={t("video_tutorial.title")} />

            {lang === "en" && (
                <ResParagraphNoIndent>
                    Please note the following video tutorials were craeted by WWSC based on the olde rules handbook
                    published on 11/30/2013. To learn WWSC's new or updated rules handbooks published on 03/21/2018,
                    please visit the
                    <Link to="/wiser-sport/the-rules-of-wiser-sport/"> link</Link> here
                </ResParagraphNoIndent>
            )}
            {lang === "zh-TW" && (
                <ResParagraphNoIndent>
                    請注意以下的教學視頻是根據WWSC於11/30/2013所頒布的舊規則手冊所製作的。
                    學習WWSC於03/21/2018頒布的新競賽規則手冊和更新的一般推廣規則手冊，請點擊此
                    <Link to="/wiser-sport/the-rules-of-wiser-sport/">鏈接</Link>。
                </ResParagraphNoIndent>
            )}
            {lang === "zh-CN" && (
                <ResParagraphNoIndent>
                    请注意以下的教学视频是根据WWSC於11/30/2013所颁布的旧规则手册所製作的。
                    学习WWSC於03/21/2018颁布的新竞赛规则手册和更新的一般推广规则手册，请点击此
                    <Link to="/wiser-sport/the-rules-of-wiser-sport/">链接</Link>。
                </ResParagraphNoIndent>
            )}
            <br></br>
            {lang === "en" && <CustomTab content={content} />}
            {lang === "zh-TW" && <CustomTab content={content_zh_TW} />}
            {lang === "zh-CN" && <CustomTab content={content_zh_CN} />}
        </Container>
    );
}
