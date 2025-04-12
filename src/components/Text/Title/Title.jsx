/** @format */

import React from "react";

import { Typography } from "@mui/material";

export function PrimaryTitle({ text }) {
    return (
        <Typography
            variant="h1"
            component="h1"
            // gutterBottom
            sx={{
                color: "tomato",
                borderBottom: "1px solid rgb(228, 228, 228)",

                lineHeight: 2, // Line height
                letterSpacing: 0.5, // Letter spacing
                pb: "1px", // Padding
                mt: "6px", // Margin top
                mb:  2, // Margin bottom
                textAlign: { xs: "center", sm: "left", md: "left" }, // Center align text
                fontWeight: 500, // Bold font weight
                fontSize: {
                    xs: "1.2rem", // font size for extra-small screens
                    sm: "1.35rem", // font size for small screens
                    md: "1.5rem", // font size for medium screens
                },
            }}
        >
            {text}
        </Typography>
    );
}

export function SecondaryTitle({ text }) {
    return (
        <Typography
            variant="h2"
            component="h2"
            sx={{
                color: "tomato",
                // borderBottom: "1px solid rgb(228, 228, 228)",
                lineHeight: 1.8, // Line height
                letterSpacing: 0.5, // Letter spacing
                pb: "1px", // Padding
                mt: "6px", // Margin top
                mb: "6px", // Margin bottom
                textAlign: { xs: "left", sm: "left", md: "left" }, // Center align text
                fontWeight: 300, // Bold font weight
                fontSize: {
                    xs: "1rem", // font size for extra-small screens
                    sm: "1.1rem", // font size for small screens
                    md: "1.25rem", // font size for medium screens
                },
            }}
        >
            {text}
        </Typography>
    );
}

export function SubTitle({ text }) {
    return (
        <Typography
            variant="h3"
            component="h3"
            sx={{
                color: "tomato",
                // borderBottom: "1px solid rgb(228, 228, 228)",
                lineHeight: 1.8, // Line height
                letterSpacing: 0.5, // Letter spacing
                pb: "1px", // Padding
                mt: "6px", // Margin top
                mb: "6px", // Margin bottom
                textAlign: { xs: "left", sm: "left", md: "left" }, // Center align text
                fontWeight: 300, // Bold font weight
                fontSize: {
                    xs: "0.9rem", // font size for extra-small screens
                    sm: "1rem", // font size for small screens
                    md: "1.1rem", // font size for medium screens
                },
            }}
        >
            {text}
        </Typography>
    );
}

export function ResParagraph({ children }) {
    return (
        <Typography
            variant="body1"
            component="p"
            sx={{
                color: "teal",
                fontWeight: 400,
                lineHeight: { xs: "1.6rem", sm: "1.8rem", md: "2rem" }, // Line height
                letterSpacing: 0.5, // Letter spacing
                mt: "6px", // Margin top
                mb: "6px", // Margin bottom
                pl: { xs: "1.2rem", sm: "1.5rem", md: "0" }, // Padding left
                pr: { xs: "1.2rem", sm: "1.5rem", md: "0" }, // Padding right
                textIndent: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                textAlign: { xs: "justify", sm: "justify", md: "justify" }, // Text alignment
                fontSize: {
                    xs: "0.8rem", // font size for extra-small screens
                    sm: "0.85rem", // font size for small screens
                    md: "0.9rem", // font size for medium screens
                },
            }}
        >
            {children}
        </Typography>
    );
}

export function ResParagraphNoIndent({ children }) {
    return (
        <Typography
            variant="body1"
            component="p"
            sx={{
                color: "teal",
                fontWeight: 400,
                lineHeight: { xs: "1.4rem", sm: "1.8rem", md: "2rem" }, // Line height
                letterSpacing: 0.5, // Letter spacing
                mt: "6px", // Margin top
                mb: "6px", // Margin bottom
                pl: { xs: "1.2rem", sm: "1.5rem", md: "0" }, // Padding left
                pr: { xs: "1.2rem", sm: "1.5rem", md: "0" }, // Padding right
                textIndent: { xs: "0", sm: "0", md: "0" },
                textAlign: { xs: "jestify", sm: "justify", md: "justify" }, // Text alignment
                fontSize: {
                    xs: "0.8rem", // font size for extra-small screens
                    sm: "0.85rem", // font size for small screens
                    md: "0.9rem", // font size for medium screens
                },
            }}
        >
            {children}
        </Typography>
    );
}
