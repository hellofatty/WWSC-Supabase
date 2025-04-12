/** @format */

import "./WorldWiserVideos.css";
import { useTranslation } from "react-i18next";
import CustomTab from "../../../components/CustomTab/CustomTab";
import YouTube from "react-youtube";
// import {
//     Player,
//     ControlBar,
//     ReplayControl,
//     ForwardControl,
//     CurrentTimeDisplay,
//     TimeDivider,
//     PlaybackRateMenuButton,
//     VolumeMenuButton,
// } from "video-react";
import "video-react/dist/video-react.css";

export default function WorldWiserVideos() {
    const { t } = useTranslation("global");

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    const onPlayerReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    // const USA_Videos = [
    //     {
    //         title: t("gallery.usa_videos.title_1"),
    //         desc: t("gallery.usa_videos.desc_1"),
    //         videoid: "X9P0R3swMJU",
    //         id: 1,
    //     },
    //     {
    //         title: t("gallery.usa_videos.title_2"),
    //         desc: t("gallery.usa_videos.desc_2"),
    //         videoid: "jXavD674gBI",
    //         id: 2,
    //     },
    //     {
    //         title: t("gallery.usa_videos.title_3"),
    //         desc: t("gallery.usa_videos.desc_3"),
    //         videoid: "w0RL7YSc0Us",
    //         id: 3,
    //     },
    //     {
    //         title: t("gallery.usa_videos.title_4"),
    //         desc: t("gallery.usa_videos.desc_4"),
    //         videoid: "7r1MQp5XNAs",
    //         id: 4,
    //     },
    //     {
    //         title: t("gallery.usa_videos.title_5"),
    //         desc: t("gallery.usa_videos.desc_5"),
    //         videoid: "Ivtff5nXsng",
    //         id: 5,
    //     },
    // ];

    // const USAVideoConent = (
    //     <div>
    //         <p style={{ textIndent: "0" }}>{t("gallery.usa_videos.title")}</p>
    //         <img
    //             src="/assets/GlobalLink/USA.jpg"
    //             alt="USAWC logo"
    //             className="wiser-org-logo"
    //             style={{ marginBottom: "25px" }}
    //         />
         
    //         {USA_Videos.map((video) => {
    //             return (
    //                 <div classname="video-container">
    //                     <div className="page-secondary-title">{video.title}</div>
    //                     <p style={{ textIndent: "0" }}>{video.desc}</p>
    //                     <YouTube videoId={video.videoid} opts={opts} onReady={onPlayerReady} className="videoitem" />
                       
    //                 </div>
    //             );
    //         })}
    //     </div>
    // );

    const China_Videos = [
        {
            title: t("gallery.china_videos.title_1"),
            desc: t("gallery.china_videos.desc_1"),
            videoid: "1j2tsavZsJY",
            id: 1,
        },
        {
            title: t("gallery.china_videos.title_2"),
            desc: t("gallery.china_videos.desc_2"),
            videoid: "DLW2Qp9s_Lk",
            id: 2,
        },
        {
            title: t("gallery.china_videos.title_3"),
            desc: t("gallery.china_videos.desc_3"),
            videoid: "EDBYr-Indnw",
            id: 3,
        },
    ];

    const ChinaVideoConent = (
        <div>
            <div className="page-primary-title">{t("gallery.china_videos.title")}</div>

        
            {China_Videos.map((video) => {
                return (
                    <div classname="video-container">
                        <div className="page-secondary-title">{video.title}</div>
                        {/* <p style={{ textIndent: "0" }}>{video.desc}</p> */}
                        <YouTube videoId={video.videoid} opts={opts} onReady={onPlayerReady} className="videoitem" />
                       
                    </div>
                );
            })}
            <span style={{ color: "teal" }}>{t("gallery.china_videos.footer")}</span>
        </div>
    );

    // const HK_Videos = [
    //     {
    //         title: t("gallery.hk_videos.sub_title_2"),
    //         // desc: t("gallery.china_videos.desc_1"),
    //         videoid: "ILZ30W_CfsU",
    //         id: 1,
    //     },
    // ];

    // const HongKongVideoConent = (
    //     <div>
    //         <p style={{ textIndent: "0" }}>{t("gallery.hk_videos.title")}</p>
    //         <div className="wiser-org-container">
    //             <img
    //                 src="/assets/GlobalLink/HKWA_logo.png"
    //                 alt="Hong Kong Wiser Association Logo"
    //                 className="wiser-org-logo"
    //             />
    //             <div>
    //                 <a
    //                     className="org-fb-icon__link"
    //                     href="https://www.facebook.com/wiserhk"
    //                     target="_blank"
    //                     rel="noreferrer"
    //                 >
    //                     <i className="bi bi-facebook"></i>
    //                     <span style={{ fontSize: "1rem" }}>https://www.facebook.com/wiserhk</span>
    //                 </a>
    //             </div>
    //         </div>
    //         <br></br>
        
    //         <div className="page-secondary-title">{t("gallery.hk_videos.sub_title_1")}</div>
    //         <Player poster="/assets/Gallery/HongKong/Wiser_AsianCup.png" className="hk-videoitem">
    //             {/* <ControlBar autoHide={false} className="my-class" /> */}

    //             <source src="/assets/Gallery/HongKong/Wiser_AsianCup.mp4" />

    //             <ControlBar autoHide={false} className="my-class">
    //                 <ReplayControl seconds={10} order={1.1} />
    //                 <ForwardControl seconds={30} order={1.2} />
    //                 <CurrentTimeDisplay order={4.1} />
    //                 <TimeDivider order={4.2} />
    //                 <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
    //                 <VolumeMenuButton disabled />
    //             </ControlBar>
    //         </Player>
          

    //         {HK_Videos.map((video) => {
    //             return (
    //                 <div classname="video-container">
    //                      <div className="page-secondary-title">{video.title}</div>
    //                     {/* <p style={{ textIndent: "0" }}>{video.desc}</p> */}
    //                     <YouTube videoId={video.videoid} opts={opts} onReady={onPlayerReady} className="videoitem" />
    //                     {/* <hr /> */}
    //                 </div>
    //             );
    //         })}
    //     </div>
    // );
    // ============TW VIDEOS

    // const TW_Videos_1a = [
    //     {
    //         sub_title: t("gallery.tw_videos.subtitle_1"),
    //         // desc: t("gallery.tw_videos.desc_1"),
    //         posted: t("gallery.tw_videos.posted_1"),
    //         videoid: "y0L3lHZWo2Y",
    //         id: 1,
    //     },
    //     {
    //         sub_title: t("gallery.tw_videos.subtitle_2"),
    //         // desc: t("gallery.tw_videos.desc_2"),
    //         posted: t("gallery.tw_videos.posted_2"),
    //         videoid: "33-MWai_INQ",
    //         id: 2,
    //     },
    //     {
    //         sub_title: t("gallery.tw_videos.subtitle_3"),
    //         desc: t("gallery.usa_videos.desc_3"),
    //         posted: t("gallery.tw_videos.posted_3"),
    //         videoid: "44CP6oODb3g",
    //         id: 3,
    //     },
    //     {
    //         sub_title: t("gallery.tw_videos.subtitle_4"),
    //         desc: t("gallery.tw_videos.desc_4"),
    //         posted: t("gallery.tw_videos.posted_4"),
    //         videoid: "EkaZI5NUnoc",
    //         id: 4,
    //     },
    // ];

    // const TaiwanVideoConent_1a = (
    //     <div>
    //         {/* ============TW_VIDEOs_1a ==============*/}
    //         <div className="page-primary-title">{t("gallery.tw_videos.title_1a")}</div>
    //         <p style={{ textIndent: "0" }}>{t("gallery.tw_videos.desc_1a")}</p>
    //         <hr />
    //         <div className="wiser-org-container">
    //             <img
    //                 src="/assets/GlobalLink/Taiwan.jpg"
    //                 alt="Taiwan Wiser Ball Association Logo"
    //                 className="tw_wiser_org_logo"
    //             />
    //             <div className="flex flex-column">
    //                 <div>
    //                     <a
    //                         className="org-web-icon__link"
    //                         href="https://www.wiserball.org.tw/"
    //                         target="_blank"
    //                         rel="noreferrer"
    //                     >
    //                         <i className="bi bi-link-45deg"></i>
    //                         <span style={{ fontSize: "1rem" }}>https://www.wiserball.org.tw/</span>
    //                     </a>
    //                 </div>
    //                 <div>
    //                     <a
    //                         className="org-fb-icon__link"
    //                         href="https://www.facebook.com/funwiser"
    //                         target="_blank"
    //                         rel="noreferrer"
    //                     >
    //                         <i className="bi bi-facebook"></i>
    //                         <span style={{ fontSize: "1rem" }}>https://www.facebook.com/funwiser</span>
    //                     </a>
    //                 </div>

    //                 <div>
    //                     <a
    //                         className="org-youtube-icon__link"
    //                         href="https://www.youtube.com/user/letsplaywiserball"
    //                         target="_blank"
    //                         rel="noreferrer"
    //                     >
    //                         <i class="bi bi-youtube"></i>
    //                         <span style={{ fontSize: "1rem" }}>https://www.youtube.com/user/letsplaywiserball</span>
    //                     </a>
    //                 </div>
    //                 <div>
    //                     <a
    //                         className="org-blog-icon__link"
    //                         href="https://funwiser.pixnet.net/blog"
    //                         target="_blank"
    //                         rel="noreferrer"
    //                     >
    //                         <i class="bi bi-file-earmark-richtext"></i>
    //                         <span style={{ fontSize: "1rem" }}>https://funwiser.pixnet.net/blog</span>
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>
         
    //         {TW_Videos_1a.map((video) => {
    //             return (
    //                 <div classname="video-container">
    //                      <div className="page-secondary-title">{video.sub_title}</div>
    //                     <div style={{ color: "gray", marginBottom: "20px" }}>{video.posted}</div>
    //                     {/* <p style={{ textIndent: "0" }}>{video.desc}</p> */}
    //                     <YouTube videoId={video.videoid} opts={opts} onReady={onPlayerReady} className="videoitem" />
                        
    //                 </div>
    //             );
    //         })}
    //     </div>
    // );

    // const TW_Videos_1b = [
    //     {
    //         sub_title: t("gallery.tw_videos.subtitle_1b"),
    //         // desc: t("gallery.tw_videos.desc_a1"),
    //         posted: t("gallery.tw_videos.posted_1b"),
    //         videoid: "h_wTPKFBX4o",
    //         id: 1,
    //     },
    //     {
    //         sub_title: t("gallery.tw_videos.subtitle_1b_2"),
    //         // desc: t("gallery.tw_videos.desc_a1"),
    //         posted: t("gallery.tw_videos.posted_1b_2"),
    //         videoid: "P3cyR1ce84Y",
    //         id: 2,
    //     },
    // ];

    // const TaiwanVideoConent_1b = (
    //     <div>
    //         {/* ============TW_VIDEOs_1b ==============*/}
    //         <div className="page-primary-title">{t("gallery.tw_videos.title_1b")}</div>
    //         <p style={{ textIndent: "0" }}>{t("gallery.tw_videos.desc_1b")}</p>
          
    //         <div className="wiser-org-container">
    //             <img
    //                 src="/assets/GlobalLink/Taichung.jpg"
    //                 alt="Taichung City Wiser Ball Association Logo"
    //                 className="tw_wiser_org_logo"
    //             />
    //             <div className="flex flex-column">
    //                 {/* <div>
    //                     <a
    //                         className="org-web-icon__link"
    //                         href="https://www.wiserball.org.tw/"
    //                         target="_blank"
    //                         rel="noreferrer"
    //                     >
    //                         <i className="bi bi-link-45deg"></i>
    //                         <span style={{ fontSize: "1rem" }}>https://www.wiserball.org.tw/</span>
    //                     </a>
    //                 </div> */}
    //                 <div>
    //                     <a
    //                         className="org-fb-icon__link"
    //                         href="https://www.facebook.com/profile.php?id=100063749123109"
    //                         target="_blank"
    //                         rel="noreferrer"
    //                     >
    //                         <i className="bi bi-facebook"></i>
    //                         <span style={{ fontSize: "1rem" }}>
    //                             https://www.facebook.com/profile.php?id=100063749123109
    //                         </span>
    //                     </a>
    //                 </div>

    //                 <div>
    //                     <a
    //                         className="org-youtube-icon__link"
    //                         href="https://www.youtube.com/@twbataichung9720"
    //                         target="_blank"
    //                         rel="noreferrer"
    //                     >
    //                         <i class="bi bi-youtube"></i>
    //                         <span style={{ fontSize: "1rem" }}>https://www.youtube.com/@twbataichung9720</span>
    //                     </a>
    //                 </div>
    //                 {/* <div>
    //                     <a
    //                         className="org-blog-icon__link"
    //                         href="https://funwiser.pixnet.net/blog"
    //                         target="_blank"
    //                         rel="noreferrer"
    //                     >
    //                         <i class="bi bi-file-earmark-richtext"></i>
    //                         <span style={{ fontSize: "1rem" }}>https://funwiser.pixnet.net/blog</span>
    //                     </a>
    //                 </div> */}
    //             </div>
    //         </div>
         
    //         {TW_Videos_1b.map((video) => {
    //             return (
    //                 <div classname="video-container">
    //                      <div className="page-secondary-title">{video.sub_title}</div>
    //                     <div style={{ color: "gray", marginBottom: "20px" }}>{video.posted}</div>
    //                     {/* <p style={{ textIndent: "0" }}>{video.desc}</p> */}
    //                     <YouTube videoId={video.videoid} opts={opts} onReady={onPlayerReady} className="videoitem" />
                       
    //                 </div>
    //             );
    //         })}
    //     </div>
    // );

    // const TaiwanVideoSubConent_1 = [
    //     { title: t("gallery.tw_videos.TW_Wiser_Name_1a"), content: TaiwanVideoConent_1a },
    //     { title: t("gallery.tw_videos.TW_Wiser_Name_1b"), content: TaiwanVideoConent_1b },
    // ];

    // const TaiwanVideoContent_1 = (
    //     <div>
    //         <CustomTab content={TaiwanVideoSubConent_1} />
    //     </div>
    // );

    // // ================TW_VIDEOS_2=============

    // const TW_Videos_2a = [
    //     {
    //         sub_title: t("gallery.tw_videos.subtitle_5"),
    //         // desc: t("gallery.tw_videos.desc_5"),
    //         posted: t("gallery.tw_videos.posted_5"),
    //         videoid: "B6_8sHcHCNU",
    //         id: 1,
    //     },
    // ];

    // const TaiwanVideoContent_2a = (
    //     <div>
    //         {/* ============TW_VIDEOs_2a ==============*/}
    //         <div className="page-primary-title">{t("gallery.tw_videos.title_2")}</div>
    //         <p style={{ textIndent: "0" }}>{t("gallery.tw_videos.desc_2")}</p>
          
    //         <div className="wiser-org-container">
    //             <img
    //                 src="/assets/GlobalLink/Kaohsiung.jpg"
    //                 alt="Kaohsiung Wiser Ball Association Logo"
    //                 className="tw_wiser_org_logo"
    //             />
    //             <div className="flex flex-column">
    //                 <div>
    //                     <a
    //                         className="org-fb-icon__link"
    //                         href="https://www.facebook.com/profile.php?id=100066374088411"
    //                         target="_blank"
    //                         rel="noreferrer"
    //                     >
    //                         <i className="bi bi-facebook"></i>
    //                         <span style={{ fontSize: "1rem" }}>
    //                             https://www.facebook.com/profile.php?id=100066374088411
    //                         </span>
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>
            
    //         {TW_Videos_2a.map((video) => {
    //             return (
    //                 <div classname="video-container">
    //                      <div className="page-secondary-title">{video.sub_title}</div>
    //                     <div style={{ color: "gray", marginBottom: "20px" }}>{video.posted}</div>
    //                     {/* <p style={{ textIndent: "0" }}>{video.desc}</p> */}
    //                     <YouTube videoId={video.videoid} opts={opts} onReady={onPlayerReady} className="videoitem" />
                   
    //                 </div>
    //             );
    //         })}
    //     </div>
    // );

    // const TW_Videos_2b = [
    //     {
    //         sub_title: t("gallery.tw_videos.subtitle_6"),
    //         // desc: t("gallery.tw_videos.desc_6"),
    //         posted: t("gallery.tw_videos.posted_6"),
    //         videoid: "FjFMdNzXpvk",
    //         id: 1,
    //     },
    //     {
    //         sub_title: t("gallery.tw_videos.subtitle_7"),
    //         // desc: t("gallery.usa_videos.desc_7"),
    //         posted: t("gallery.tw_videos.posted_7"),
    //         videoid: "Gfon8-j-1Is",
    //         id: 2,
    //     },
    //     {
    //         sub_title: t("gallery.tw_videos.subtitle_8"),
    //         // desc: t("gallery.tw_videos.desc_8"),
    //         posted: t("gallery.tw_videos.posted_8"),
    //         videoid: "LQYCwFUoCtI",
    //         id: 3,
    //     },
    //     {
    //         sub_title: t("gallery.tw_videos.subtitle_9"),
    //         // desc: t("gallery.usa_videos.desc_7"),
    //         posted: t("gallery.tw_videos.posted_9"),
    //         videoid: "sR-b3-_qDtk",
    //         id: 4,
    //     },
    //     {
    //         sub_title: t("gallery.tw_videos.subtitle_10"),
    //         // desc: t("gallery.usa_videos.desc_7"),
    //         posted: t("gallery.tw_videos.posted_10"),
    //         videoid: "3ehdgMeScgY",
    //         id: 5,
    //     },
    // ];

    // const TaiwanVideoContent_2b = (
    //     <div>
    //         {/* ============TW_VIDEOs_2b ==============*/}

    //         <div className="page-primary-title">{t("gallery.tw_videos.title_3")}</div>
    //         <p style={{ textIndent: "0" }}>{t("gallery.tw_videos.desc_3")}</p>
            
    //         <div className="wiser-org-container">
    //             <img
    //                 src="/assets/GlobalLink/Tainan.jpg"
    //                 alt="Tainan Wiser Association Logo"
    //                 className="tw_wiser_org_logo"
    //             />
    //             <div className="flex flex-column">
    //                 <div>
    //                     <a
    //                         className="org-fb-icon__link"
    //                         href="https://www.facebook.com/tainan.wiserball"
    //                         target="_blank"
    //                         rel="noreferrer"
    //                     >
    //                         <i className="bi bi-facebook"></i>
    //                         <span style={{ fontSize: "1rem" }}>https://www.facebook.com/tainan.wiserball</span>
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>
           
    //         {TW_Videos_2b.map((video) => {
    //             return (
    //                 <div classname="video-container">
    //                      <div className="page-secondary-title">{video.sub_title}</div>
    //                     <div style={{ color: "gray", marginBottom: "20px" }}>{video.posted}</div>
    //                     {/* <p style={{ textIndent: "0" }}>{video.desc}</p> */}
    //                     <YouTube videoId={video.videoid} opts={opts} onReady={onPlayerReady} className="videoitem" />
                      
    //                 </div>
    //             );
    //         })}
    //     </div>
    // );

    // const TaiwanVideoSubContent_2 = [
    //     { title: t("gallery.tw_videos.TW_Wiser_Name_2a"), content: TaiwanVideoContent_2a },
    //     { title: t("gallery.tw_videos.TW_Wiser_Name_2b"), content: TaiwanVideoContent_2b },
    // ];

    // const TaiwanVideoContent_2 = (
    //     <div>
    //         <CustomTab content={TaiwanVideoSubContent_2} />
    //     </div>
    // );

    const videoContent = [
        // { title: t("gallery.world.video_tab_1"), content: USAVideoConent },
        { title: t("gallery.world.video_tab_2"), content: ChinaVideoConent },
        // { title: t("gallery.world.video_tab_3"), content: HongKongVideoConent },
        // { title: t("gallery.world.video_tab_4"), content: TaiwanVideoContent_1 },
       
    ];
    // const videoContent = (
    //     <div>
    //         <CustomTab content={videoSubContent} />
    //     </div>
    // );

    // const content = [
    //     { title: t("gallery.world.photo_tab_name"), content: photoContent },
    //     { title: t("gallery.world.video_tab_name"), content: videoContent },
    // ];

    return (
        <div className="wwsc-container">
            <div className="text-container">
            <div className="page-primary-title">{t("gallery.world.videos_title")}</div>
                <CustomTab content={videoContent} />
            </div>
        </div>
    );
}
