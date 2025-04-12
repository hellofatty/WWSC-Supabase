/** @format */

import "./Contact.css";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ContactContent, ContactContentTW, ContactContentCN } from "./ContactContents";

// --------Create Contact page component-----

export default function Contact() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;
    // console.log(i18n.language);

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
            <div className="image-container">
                <img src="/assets/Contact/contact-picture.png" id="contact-pic" alt="WWSC office building." />
                <div className="image-caption">{t("contact_us.img_caption")}</div>
            </div>
            {lang === "en" && <ContactContent/>}
            {lang === "zh-TW" && <ContactContentTW/>}
            {lang === "zh-CN" && <ContactContentCN/>}
        </Container>
    );
}
