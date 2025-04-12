/** @format */

import React from "react";
import { ContentEng, ContentTW, ContentCN } from "./Content";
import { Button, Container } from "@mui/material";
import donationQRCode from "../../../assets/QR Code.png";
//import translation hook
import { useTranslation } from "react-i18next";

import PayPalCheckout from "./PayPal";
import Diversity1Icon from "@mui/icons-material/Diversity1";

function VounteerDonation() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;

    return (
        <>
            <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
                <>
                    {lang === "en" && <ContentEng />}
                    {lang === "zh-TW" && <ContentTW />}
                    {lang === "zh-CN" && <ContentCN />}
                </>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignContent: "center",
                        gap: "12px",
                        margin: "0 auto",
                        flexWrap: "wrap",
                    }}
                >
                    {/* <PayPalButtonV2 /> */}
                    <div><PayPalCheckout /></div>
<hr />
                    <div style={{ margin: "0 auto" }}>
                        <Button
                            variant="contained"
                            sx={{textTransform: 'none'}}
                            color="secondary"
                            startIcon={<Diversity1Icon />}
                            href="https://www.paypal.com/donate/?hosted_button_id=M7H6KWHGKDUV8"
                            target="_blank"
                        >
                            {t("general.donate-button")}
                        </Button>
                    </div>
                    <div style={{ margin: "0 auto" }}>
                        <img src={donationQRCode} width="80px" alt="PayPal Donation QR Code" />
                    </div>

                    <br />
                    
                </div>
            </Container>
        </>
    );
}

export default VounteerDonation;
