/** @format */

import React from "react";
import { Box } from "@mui/material";
import "./ResponsiveImg.css";

function ResponsiveIframe({ title, src }) {
    return (
        <Box
            sx={{
                position: "relative",
                overflow: "hidden",
                paddingTop: "56.25%", // 16:9 aspect ratio
                marginBottom: "20px",
            }}
        >
           <div className="res-iframe-container">
                <iframe
                    title={title}
                    src={src}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "80%",
                        height: "80%",
                       
                       
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe></div>
            
        </Box>
    );
}

export default ResponsiveIframe;
