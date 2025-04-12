/** @format */

import React from "react";
import { Box } from "@mui/material";
// import "./ResponsiveImg.css";

const ResponsiveYouTube = ({ src, title }) => {
    return (
        <Box>
            <iframe
                src={src}
                title={title}
                // frameborder="0"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </Box>
    );
};

export default ResponsiveYouTube;
