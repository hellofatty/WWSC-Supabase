/** @format */

import "./Footer.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
    const { t } = useTranslation("global");

    const linkArray = [
        { title: t("footer.home"), link: "/" },
        { title: t("footer.about_us"), link: "/about-us/introduction-to-wiser-sport" },
        { title: t("footer.wiser_sport"), link: "/wiser-sport/the-rules-of-wiser-sport/" },
        { title: t("footer.play_wiser"), link: "/play-wiser/video-tutorial-play-wiser-ball" },
        { title: t("footer.privacy_policy"), link: "/wwsc-privacy-policy" },
        { title: t("footer.terms_conditions"), link: "/terms-conditions" },
        { title: t("footer.contact_us"), link: "/contact-us" },
    ];

    return (
        <div className="footer">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ul className="social-icon" style={{ paddingLeft: "0" }}>
                    <li className="social-icon__item">
                        <a
                            rel="noreferrer"
                            className="social-icon__link"
                            href="https://www.facebook.com/groups/wisersport"
                            target="_blank"
                        >
                            <FacebookIcon />
                        </a>
                    </li>
                    <li className="social-icon__item">
                        <a className="social-icon__link" href="replace">
                            <XIcon />
                        </a>
                    </li>
                    <li className="social-icon__item">
                        <a className="social-icon__link" href="replace">
                            <LinkedInIcon />
                        </a>
                    </li>
                    <li className="social-icon__item">
                        <a className="social-icon__link" href="replace">
                            <InstagramIcon />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="links">
                {linkArray.map((link) => (
                    <div className="link" key={link.title}>
                        <p className="footer-link">
                            <NavLink to={link.link}>{link.title}</NavLink>
                        </p>
                    </div>
                ))}
            </div>

            <div className="copyright">
                <span className="copyright-text">{t("footer.copy_rights")}</span>
            </div>
        </div>
    );
}
