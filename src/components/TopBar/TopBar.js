/** @format */

// import style css file
import "./TopBar.css";

import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

// import Material UI components and icons
// import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LoginIcon from "@mui/icons-material/Login";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import {useMediaQuery, Button, IconButton, Tooltip } from "@mui/material";

// import UseTranslation hook
import { useTranslation } from "react-i18next";
import { useAuthContext } from "../../hooks/useAuthContext";

const LANGUAGE_OPTIONS = [
    { code: "en", lng: "English" },
    { code: "zh-TW", lng: "繁體中文" },
    { code: "zh-CN", lng: "简体中文" },
];

//Create Topbar component
export default function TopBar() {
    const { t, i18n } = useTranslation("global");

    const { logout } = useLogout();

    const isSmallScreen = useMediaQuery("(max-width:900px)");

    // monitor current logged in user from Firebase Auth
    const { user } = useAuthContext();

    const renderAuthButtons = () =>
        !user ? (
            <>
                <li>
                    <Link to="/referee-home/signup">
                        <div className="top-bar-btn">
                            {!isSmallScreen ? (
                                <Button
                                    startIcon={<AccountBoxIcon />}
                                    sx={{ fontSize: "0.8rem", textTransform: "none", fontWeight: "400" }}
                                >
                                    {t("topbar.signup")}
                                </Button>
                            ) : (
                                <IconButton aria-label="signup" color="primary">
                                    <Tooltip title={t("topbar.signup")} placement="top" arrow>
                                        <AccountBoxIcon />
                                    </Tooltip>
                                </IconButton>
                            )}
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/referee-home/login">
                        <div className="top-bar-btn">
                            {!isSmallScreen ? (
                                <Button
                                    startIcon={<LoginIcon />}
                                    sx={{ fontSize: "0.8rem", textTransform: "none", fontWeight: "400" }}
                                >
                                    {t("topbar.login")}
                                </Button>
                            ) : (
                                <IconButton aria-label="login" color="primary">
                                    <Tooltip title={t("topbar.login")} placement="top" arrow>
                                        <LoginIcon />
                                    </Tooltip>
                                </IconButton>
                            )}
                        </div>
                    </Link>
                </li>
                <li>
                    <div className="top-bar-btn">
                        <span className="person-circle-icon">
                            <AccountCircleIcon fontSize="large" style={{ color: "rgb(187, 186, 186)" }} />
                        </span>
                    </div>
                </li>
            </>
        ) : (
            <>
                <li>
                    <div className="top-bar-btn">
                        {!isSmallScreen ? (
                            <Button
                                startIcon={<LogoutIcon />}
                                sx={{ fontSize: "0.8rem", textTransform: "none", fontWeight: "400" }}
                                onClick={logout}
                            >
                                {t("topbar.logout")}
                            </Button>
                        ) : (
                            <IconButton aria-label="logout" color="primary" onClick={logout}>
                                <Tooltip title={t("topbar.logout")} placement="left" arrow>
                                    <LogoutIcon />
                                </Tooltip>
                            </IconButton>
                        )}
                    </div>
                </li>
                <li>
                    <div className="top-bar-avatar-container">
                        <Link to="/referee-zone/referee-home">
                            <Tooltip title={t("navbar.rz_referee_system")}>
                                <div className="referee-list-avater">
                                    <img
                                        className="profile-card-avatar-circle"
                                        src={user.photoURL}
                                        alt="referee avatar"
                                        style={{ width: "35px", height: "35px" }}
                                    />
                                </div>
                            </Tooltip>
                        </Link>
                        <span id="top-bar-user-displayname">
                            {t("referee.sidebar.greeting")}, {user.displayName}
                        </span>
                    </div>
                </li>
            </>
        );

    return (
        <nav className="top-bar-container">
            <ul>
                <li className="top-bar-left">
                    <Link to="/">
                        <img className="top-bar-logo" src="/WWSC-logo.png" alt="Go to Home Page" />
                    </Link>
                    <div className="top-bar-title-container">
                        <div>
                            <span className="top-bar-slogan">{t("topbar.slogan")}</span>
                        </div>
                        <span className="top-bar-title">{t("topbar.title")}</span>
                        <span className="top-bar-subtitle">{t("topbar.subtitle")}</span>
                    </div>
                </li>
                <div className="top-bar-right">
                    {renderAuthButtons()}

                    <li className="top-bar-lang-container">
                        <span className={!isSmallScreen ? "top-bar-lang-icon" : "top-bar-none-lang-icon"}>
                            <Tooltip title={t("topbar.select-lang")} placement="top" arrow>
                                <GTranslateIcon fontSize="small" style={{ color: "#0275d8" }} />
                            </Tooltip>
                        </span>

                        <select onChange={(e) => i18n.changeLanguage(e.target.value)} name="language" id="selectLang">
                            {LANGUAGE_OPTIONS.map(({ code, lng }) => (
                                <option key={code} value={code}>
                                    {lng}
                                </option>
                            ))}
                        </select>
                    </li>
                </div>
            </ul>
        </nav>
    );
}
