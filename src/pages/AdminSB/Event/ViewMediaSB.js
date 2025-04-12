/** @format */

import "./ViewMediaSB.css";
import { CircularProgress, Container } from "@mui/material";
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

export default function ViewMediaSB({ event, toggle }) {
    const { i18n, t } = useTranslation();
    const lang = i18n.language;
    // console.log(event.id);
    const isSmallScreen = useMediaQuery("(min-width:900px)");
    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const photosContent = (
        <>
            <div
                className="event-list-photos-container"
                style={isSmallScreen ? { width: "100%", height: "100%" } : { width: "95%", height: "95%" }}
            >
                {loading && <CircularProgress />}
                {error && <div className="error">{error}</div>}
                
                {event.photo_urls && event.photo_urls.length > 0 ? (
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {event.photo_urls.map((url, idx) => (
                            <ImageListItem key={idx}>
                                <img
                                    src={url}
                                    alt={`Event photo_# ${idx + 1}`}
                                    loading="lazy"
                                    onError={(e) => {
                                        console.error(`Error loading image: ${url}`);
                                        e.target.src = '/placeholder-image.jpg'; // Add a placeholder image
                                    }}
                                    style={{
                                        borderRadius: '4px',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                ) : (
                    <div className="no-photos-message">
                        {t("admin.event-list.no-photos")}
                    </div>
                )}
            </div>
        </>
    );

    const videosContent = (
        <>
            <div className="event-list-videos-container" style={{ overflow: "hidden" }}>
                {event.videoURLs ? (
                    event.videoURLs.map((video, idx) => (
                        <div
                            className="envent-list-video"
                            style={isSmallScreen ? { width: "100%", height: "100%" } : { width: "95%", height: "95%" }}
                        >
                            {isSmallScreen ? (
                                <iframe
                                    title={video?.title}
                                    src={video?.URL}
                                    // width="560"
                                    // height="314"
                                    width={video?.width}
                                    height={video?.height}
                                    style={{
                                        padding: "6px",
                                        border: "1px solid lightgrey",
                                        borderRadius: "5px",
                                        overflow: "hidden",
                                    }}
                                    // scrolling="no"

                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    allowFullScreen="true"
                                ></iframe>
                            ) : (
                                <iframe
                                    title={video?.title}
                                    src={video?.URL}
                                    width="95%"
                                    height="95%"
                                    // width={video?.width}
                                    // height={video?.height}
                                    style={{
                                        padding: "6px",
                                        border: "1px solid lightgrey",
                                        borderRadius: "5px",
                                        overflow: "hidden",
                                    }}
                                    // scrolling="no"

                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    allowFullScreen="true"
                                ></iframe>
                            )}
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
                   
                <div className="page-secondary-title" 
                         style={isSmallScreen ? 
                             { marginBottom: "0", borderBottom: "0" } : 
                             { marginBottom: "0", borderBottom: "0", fontSize: "16px" }}>
                        {lang === "en" && event.name}
                        {lang === "zh-TW" && event.name_tw}
                        {lang === "zh-CN" && event.name_cn}
                    </div>

                    <Box sx={{ width: "90%" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                                <Tab
                                    icon={<InsertPhotoIcon />}
                                    iconPosition="start"
                                    label={t("admin.event-list.tab-photos")}
                                    sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                                    {...a11yProps(0)}
                                />
                               {event?.video_urls?.length > 0 && (
                                    <Tab
                                        icon={<SmartDisplayIcon />}
                                        iconPosition="start"
                                        label={t("admin.event-list.tab-videos")}
                                        sx={isSmallScreen ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                                        {...a11yProps(1)}
                                    />
                                )}
                            </Tabs>
                        </Box>

                        <CustomTabPanel value={value} index={0}>
                            {photosContent}
                        </CustomTabPanel>
                        {event?.video_urls?.length > 0 && (
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
