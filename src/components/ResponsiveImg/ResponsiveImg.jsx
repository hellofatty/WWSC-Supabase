/** @format */

import React from "react";
import { Grid, Box } from "@mui/material";
import "./ResponsiveImg.css";

function ResponsiveImg({ src, alt }) {
    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={4} >
                <div className="res-img-container">
                <Box
                   
                    component="img"
                    src={src}
                    alt={alt}
                    sx={{
                        width: "100%", // Image takes full width of the grid item
                        height: "auto", // Maintain aspect ratio
                        maxWidth: "100%", // Ensure image doesn't exceed its container
                    }}
                /></div>
            </Grid>
        </Grid>
    );
}

export default ResponsiveImg;
