/** @format */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";

// Import Material UI Icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import DescriptionIcon from "@mui/icons-material/Description";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SearchIcon from "@mui/icons-material/Search";

import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BadgeIcon from "@mui/icons-material/Badge";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Tooltip from "@mui/material/Tooltip";

export function HomeMenu({ clickOpen }) {
    const { t } = useTranslation("global");
    return (
        <li className="top-nav-item">
            <NavLink to="/" className="nav-link" onClick={clickOpen}>
                <Tooltip title={t("navbar.home")} arrow placement="top-start">
                    <HomeIcon sx={{ fontSize: "25px", color: "rgb(245, 245, 245)" }} />
                </Tooltip>
            </NavLink>
        </li>
    );
}
export function AboutUsMenu({ clickOpen }) {
    const { t } = useTranslation("global");
    const aboutDropDownMenu = [
        {
            id: 1,
            link: "/about-us/introduction-to-wiser-sport/",
            icon: <InfoIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.au_subtitle_1"),
        },
        {
            id: 2,
            link: "/about-us/mission-statement-of-wwsc/",
            icon: <AdsClickIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.au_subtitle_2"),
        },
    ];
    return (
        <li className="top-nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="replace"
                role="button"
            >
                {t("navbar.about_us")}
            </a>
            <ul className="dropdown-menu">
                {aboutDropDownMenu.map((menu) => (
                    <li key={menu.id}>
                        <NavLink className="dropdown-item" to={menu.link} onClick={clickOpen}>
                            {/* <InfoIcon className="navbar-icon" fontSize="small" /> */}
                            {menu.icon}
                            {menu.subtitle}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export function WiserSportMenu({ clickOpen }) {
    const { t } = useTranslation("global");

    const wiserSportDropDownMenu = [
        {
            id: 1,
            link: "/wiser-sport/the-rules-of-wiser-sport/",
            icon: <ArchitectureIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.ws_subtitle_1"),
        },
        {
            id: 2,
            link: "/wiser-sport/balls-and-basic-equipment-for-wiser-sport/",
            icon: <GolfCourseIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.ws_subtitle_2"),
        },
        {
            id: 3,
            link: "/wiser-sport/dress-code-for-wiser-sport/",
            icon: <FamilyRestroomIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.ws_subtitle_3"),
        },
        {
            id: 4,
            link: "/wiser-sport/glossary-of-terms/",
            icon: <DescriptionIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.ws_subtitle_4"),
        },
    ];
    return (
        <li className="top-nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="replace"
                role="button"
            >
                {t("navbar.wiser_sport")}
            </a>
            <ul className="dropdown-menu">
                {wiserSportDropDownMenu.map((menu) => (
                    <li key={menu.id}>
                        <NavLink className="dropdown-item" to={menu.link} onClick={clickOpen}>
                            {/* <InfoIcon className="navbar-icon" fontSize="small" /> */}
                            {menu.icon}
                            {menu.subtitle}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export function PlayWiserMenu({ clickOpen }) {
    const { t } = useTranslation("global");
    const playWiserDropDownMenu = [
        {
            id: 1,
            link: "/play-wiser/video-tutorial-play-wiser-ball",
            icon: <PlayCircleOutlineIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.pw_subtitle_1"),
        },
        {
            id: 2,
            link: "/play-wiser/wwsc-demo-video-marching-etiquette-interception",
            icon: <PlayCircleOutlineIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.pw_subtitle_2"),
        },
        {
            id: 3,
            link: "/play-wiser/game-recording-sheet-app-download",
            icon: <PlaylistAddCheckCircleIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.pw_subtitle_3"),
        },
        {
            id: 4,
            link: "/play-wiser/faqs",
            icon: <DeviceUnknownIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.pw_subtitle_4"),
        },
    ];

    return (
        <li className="top-nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="replace"
                role="button"
            >
                {t("navbar.play_wiser")}
            </a>
            <ul className="dropdown-menu">
                {playWiserDropDownMenu.map((menu) => (
                    <li key={menu.id}>
                        <NavLink className="dropdown-item" to={menu.link} onClick={clickOpen}>
                            {/* <InfoIcon className="navbar-icon" fontSize="small" /> */}
                            {menu.icon}
                            {menu.subtitle}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export function GalleryMenu({ clickOpen }) {
    const { t } = useTranslation("global");
    const galleryDropDownMenu = [
        {
            id: 1,
            link: "/gallery/wwsc-g3-referee-training-albums",
            icon: <SlideshowIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.ga_subtitle_1"),
        },
        {
            id: 2,
            link: "/gallery/wwsc-g4-referee-training-albums",
            icon: <SlideshowIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.ga_subtitle_2"),
        },
        {
            id: 3,
            link: "/gallery/wwsc-hong-kong-albums",
            icon: <SlideshowIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.ga_subtitle_3"),
        },
        {
            id: 4,
            link: "/gallery/USA-wiser-albums",
            icon: <PhotoLibraryIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.ga_subtitle_4"),
        },
        {
            id: 5,
            link: "/gallery/world-wiser-albums_1",
            icon: <PhotoLibraryIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.ga_subtitle_5"),
        },
        {
            id: 6,
            link: "/gallery/world-wiser-albums_2",
            icon: <PhotoLibraryIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.ga_subtitle_6"),
        },
        {
            id: 7,
            link: "/gallery/world-wiser-albums_3",
            icon: <PhotoLibraryIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.ga_subtitle_7"),
        },
        {
            id: 8,
            link: "/gallery/world-wiser-albums_4",
            icon: <PhotoLibraryIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.ga_subtitle_8"),
        },
    ];

    return (
        <li className="top-nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="replace"
                role="button"
            >
                {t("navbar.gallery")}
            </a>
            <ul className="dropdown-menu">
                {galleryDropDownMenu.map((menu) => (
                    <li key={menu.id}>
                        <NavLink className="dropdown-item" to={menu.link} onClick={clickOpen}>
                            {menu.icon}
                            {menu.subtitle}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export function WiserInfoMenu({ clickOpen }) {
    const { t } = useTranslation("global");
    const wiserInfoDropDownMenu = [
        {
            id: 1,
            link: "/wiser-info/wwsc-inaugural-ceremony",
            icon: <AccountBalanceIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.wi_subtitle_1"),
        },
        {
            id: 2,
            link: "/wiser-info/wwsc-notices-1",
            icon: <ArticleIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.wi_subtitle_2"),
        },
        {
            id: 3,
            link: "/wiser-info/wiser-event-news",
            icon: <EventOutlinedIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.wi_subtitle_3"),
        },
        {
            id: 4,
            link: "/wiser-info/volunteer-and-donation",
            icon: <VolunteerActivismIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.wi_subtitle_4"),
        },
        {
            id: 5,
            link: "/wiser-info/wiser-global-links",
            icon: <TravelExploreIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.wi_subtitle_5"),
        },
    ];

    return (
        <li className="top-nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="replace"
                role="button"
            >
                {t("navbar.wiser_info")}
            </a>
            <ul className="dropdown-menu">
                {wiserInfoDropDownMenu.map((menu) => (
                    <li key={menu.id}>
                        <NavLink className="dropdown-item" to={menu.link} onClick={clickOpen}>
                            {menu.icon}
                            {menu.subtitle}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export function RefereeZoneMenu({clickOpen}) {
    const { t } = useTranslation("global");
    const { user } = useAuthContext();
    const refereeZoneDropDownMenu = [
        // {
        //     id: 1,
        //     link: "/referee-zone/referee-home",
        //     icon: <DashboardIcon className="navbar-icon" fontSize="small" />,
        //     subtitle: t("navbar.rz_referee_home"),
        // },
        {
            id: 1,
            link: "/referee-zone/referee-system",
            icon: <AssignmentIndIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.rz_referee_system"),
        },
        {
            id: 2,
            link: "/referee-zone/wiser-referee-training",
            icon: <CastForEducationIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.rz_referee_training"),
        },
        {
            id: 3,
            link: "/referee-zone/referee-training-organizations",
            icon: <CorporateFareIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.az_trainingOrgs_list"),
        },
        {
            id: 4,
            link: "/referee-zone/search-referee",
            icon: <SearchIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.rz_search_referee"),
        },
    ];

    return (
        <li className="top-nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="replace"
                role="button"
            >
                {t("navbar.referee_zone")}
            </a>
            <ul className="dropdown-menu">
               {user && <li style={user ? { display: "block" } : { diaply: "none" }}>
                    <NavLink
                        className="dropdown-item"
                        to="/referee-zone/referee-home"
                        onClick={clickOpen}
                        style={{ color: "gold" }}
                    >
                        <DashboardIcon className="navbar-icon" fontSize="small" />
                        {t("navbar.rz_referee_home")}
                    </NavLink>
                </li>}

                {refereeZoneDropDownMenu.map((menu) => (
                    <li key={menu.id}>
                        <NavLink className="dropdown-item" to={menu.link} onClick={clickOpen}>
                            {menu.icon}
                            {menu.subtitle}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export function ContactUsMenu({ clickOpen }) {
    const { t } = useTranslation("global");
    return (
        <li className="top-nav-item">
            <NavLink className="nav-link" to="/contact-us" onClick={clickOpen}>
                {t("navbar.contact_us")}
            </NavLink>
        </li>
    );
}

export function AdminZoneMenu({ clickOpen}) {
    const { t } = useTranslation("global");
    const { user } = useAuthContext();
    const { document: referee } = useDocument("users", user?.uid);
    // console.log("navbar referee:", referee?.role)
    
    const adminZoneDropDownMenu = [
        {
            id: 1,
            link: "/admin-zone/admin-home",
            icon: <AssignmentIndIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.az_dashboard"),
        },
        {
            id: 2,
            link: "/admin-zone/referee-list",
            icon: <BadgeIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.az_referee_list"),
        },
        {
            id: 3,
            link: "/admin-zone/training-organization-list",
            icon: <CorporateFareIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.az_trainingOrgs_list"),
        },
        {
            id: 4,
            link: "/admin-zone/event-list",
            icon: <EventOutlinedIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.az_event_list"),
        },
        {
            id: 5,
            link: "/admin-zone/notice-list",
            icon: <ArticleIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.az_notice_list"),
        },
    ];

    return (
        <li
            className="top-nav-item dropdown"
            style={user && referee?.role === "Admin" ? { display: "block" } : { display: "none" }}
        >
            <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="replace"
                role="button"
            >
                <span style={{ color: "orange" }}>
                    {" "}
                    <strong>{t("navbar.admin_zone")}</strong>
                </span>
            </a>
            <ul className="dropdown-menu">
                {adminZoneDropDownMenu.map((menu) => (
                    <li key={menu.id}>
                        <NavLink className="dropdown-item" to={menu.link} onClick={clickOpen}>
                            {menu.icon}
                            {menu.subtitle}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </li >
    );
}
