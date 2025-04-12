/** @format */

import React from "react";
import "./HongKong.css";
// import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import HongKongContent from "./HongKongContent";

// WWSC was Invited to Teach the Rules and Playing Skills of Wiser in Hong Kong
export default function HongKong() {
    // const { t } = useTranslation("global");
    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
          
                <HongKongContent />
         
        </Container>
    );
}
