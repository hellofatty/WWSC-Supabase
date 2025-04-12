/** @format */

import "./Marching.css";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PrimaryTitle, ResParagraphNoIndent } from "../../../components/Text/Title/Title";

import ResponsiveYouTube from "../../../components/ResponsiveImg/ResponsiveYouTube";

export default function Marching() {
    const { i18n } = useTranslation();

    const lang = i18n.language;
    //  const mb = useMediaQuery("(max-width:600px)");

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
            {lang === "en" && (
                <>
                    <PrimaryTitle text="WWSC Demo Video (Marching/Etiquette/Interception)" />
                    <div className="march-video-container">
                        <div className="march-video-item">
                            <ResParagraphNoIndent>
                                The World Wiser Sport Committee created this video to demonstrate:
                            </ResParagraphNoIndent>
                            <br></br>
                            <ol style={{ color: "teal" }}>
                                <li className="rt-list-item">
                                Standard Marching Style of Wiser Ball Teams;
                                </li>
                                <li className="rt-list-item">
                                Standard Marching Style of Wiser Ball Teams;
                                </li>
                                <li className="rt-list-item">
                                How to Perform an “Interception” during Wiser ball games?
                                </li>
                            </ol>
                         
                        </div>

                        <div className="march-video-content">
                            <ResponsiveYouTube
                                src="https://www.youtube.com/embed/9rSN2WSRePk?si=8aIIRyn36Iy937DK"
                                title="WWSC Demo Video (Marching/Etiquette/Interception)"
                            />
                        </div>
                    </div>{" "}
                </>
            )}
            {lang === "zh-TW" && (
                <>
                    <PrimaryTitle text="WWSC示範視頻（正步/禮儀/攔擊）" />

                    <div className="march-video-container">
                        <div className="march-video-item">
                            <ResParagraphNoIndent>世界Wiser運動委員會製作以下的視頻是用來示範:</ResParagraphNoIndent>
                            <br></br>

                            <ol style={{ color: "teal" }}>
                                <li className="rt-list-item">
                                Wiser運動球隊的標準正步;
                                </li>
                                <li className="rt-list-item">
                                Wiser運動球隊的正規禮節（行禮）;
                                </li>
                                <li className="rt-list-item">
                                如何進行“攔擊”。
                                </li>
                            </ol>
                         
                        </div>
                        <div className="march-video-content">
                            <ResponsiveYouTube
                                src="https://www.youtube.com/embed/cqno_70tk-M?si=C_8gC86N-tJA6CKq&amp;start=6"
                                title="WWSC示範視頻（正步/禮儀/攔擊）"
                            />
                        </div>
                    </div>
                </>
            )}
            {lang === "zh-CN" && (
                <>
                    <PrimaryTitle text="WWSC 示範视频（正步/礼仪/拦击）" />
                    <div className="march-video-container">
                        <div className="march-video-item">
                            <ResParagraphNoIndent>世界Wiser运动委员会製作以下的视频是用来示範:</ResParagraphNoIndent>
                            <br></br>
                            <ol style={{ color: "teal" }}>
                                <li className="rt-list-item">
                                Wiser运动球队的标準正步;
                                </li>
                                <li className="rt-list-item">
                                Wiser运动球队的正规礼节（行礼）;
                                </li>
                                <li className="rt-list-item">
                                如何进行“拦击”。
                                </li>
                            </ol>
                        </div>
                        <div className="march-video-content">
                            <ResponsiveYouTube
                                src="https://www.youtube.com/embed/cqno_70tk-M?si=C_8gC86N-tJA6CKq&start=6"
                                title="WWSC 示範视频（正步/礼仪/拦击）"
                            />
                        </div>
                    </div>
                </>
            )}
        </Container>
    );
}
