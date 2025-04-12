/** @format */

/** @format */

import "./ViewMedia.css";
import { Container } from "@mui/material";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";

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

export default function ViewMedia({ event, toggle }) {
    const { i18n, t } = useTranslation();

    const lang = i18n.language;
    // console.log(event.id); 
    
    const isSmallScreen = useMediaQuery("(min-width:900px)");

    const [value, setValue] = useState(0);

   

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const photosContent = (
        <>
            <div className="event-list-photos-container" style={isSmallScreen ? { width: "100%", height:"100%" } : {width:"95%", height:"95%"}}>
                {event.photoURLs ? (
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {event.photoURLs.map((item, idx) => (
                            <ImageListItem key={idx}>
                                <img src={item} alt="" loading="lazy" />
                            </ImageListItem>
                        ))}
                    </ImageList>
                ) : null}
            </div>
        </>
    );

    const videosContent = (
        <>
            <div className="event-list-videos-container" style={{ overflow: "hidden" }}>
                {event.videoURLs ? (
                    event.videoURLs.map((video, idx) => (
                        <div className="envent-list-video" style={isSmallScreen ? { width: "100%", height:"100%" } : {width:"95%", height:"95%"}}>
                            {isSmallScreen ?
                                <iframe
                                    title={video?.title}
                                    src={video?.URL}
                                    // width="560"
                                    // height="314"
                                    width={video?.width}
                                    height={video?.height}
                                    style={{ padding:"6px", border: "1px solid lightgrey", borderRadius:"5px", overflow: "hidden" }}
                                    // scrolling="no"
                                   
                                   
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    allowFullScreen="true"
                                ></iframe> :
                                <iframe
                                    title={video?.title}
                                    src={video?.URL}
                                    width="95%"
                                    height="95%"
                                    // width={video?.width}
                                    // height={video?.height}
                                    style={{ padding:"6px", border: "1px solid lightgrey", borderRadius:"5px", overflow: "hidden" }}
                                    // scrolling="no"
                                    
                                   
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    allowFullScreen="true"></iframe>}
                        </div>
                    ))
                ) : (
                    <div className="event-list-videos-container"></div>
                )}
            </div>
        </>
    );

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "6px" }}>
            <div className="referee-home" style={{ justifyContent: "center" }}>
                <div className="event-list-media-container">
                    {lang === "en" && (
                        <div className="page-secondary-title" style={isSmallScreen?{marginBottom: "0", borderBottom: "0" }:{marginBottom: "0", borderBottom: "0", fontSize:"16px" }}>
                            {event.name}
                        </div>
                    )}
                    {lang === "zh-TW" && (
                        <div className="page-secondary-title" style={isSmallScreen?{marginBottom: "0", borderBottom: "0" }:{marginBottom: "0", borderBottom: "0", fontSize:"16px" }}>
                            {event.nameTw}
                        </div>
                    )}
                    {lang === "zh-CN" && (
                        <div className="page-secondary-title" style={isSmallScreen?{marginBottom: "0", borderBottom: "0" }:{marginBottom: "0", borderBottom: "0", fontSize:"16px" }}>
                            {event.nameCn}
                        </div>
                    )}

                    <Box sx={{ width: "90%" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                                <Tab
                                    icon={<InsertPhotoIcon />}
                                    iconPosition="start"
                                    label={t("admin.event-list.tab-photos")}
                                    sx={isSmallScreen?{fontSize:"0.8rem"}:{fontSize:"0.7rem"}}
                                    {...a11yProps(0)}
                                />
                                {event?.videoURLs && (
                                    <Tab
                                        icon={<SmartDisplayIcon />}
                                        iconPosition="start"
                                        label={t("admin.event-list.tab-videos")}
                                        sx={isSmallScreen?{fontSize:"0.8rem"}:{fontSize:"0.7rem"}}
                                        {...a11yProps(1)}
                                    />
                                )}
                            </Tabs>
                        </Box>

                        <CustomTabPanel value={value} index={0}>
                            {photosContent}
                        </CustomTabPanel>
                        {event?.videoURLs && (
                            <CustomTabPanel value={value} index={1}>
                                {videosContent}
                            </CustomTabPanel>
                        )}
                    </Box>
                </div>
            </div>
        </Container>
    );
}
