/** @format */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { useAuthContext } from "../../hooks/useAuthContext";
// import { useDocument } from "../../hooks/useDocument";

// Import Material UI Icons
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import AdsClickIcon from "@mui/icons-material/AdsClick";
// import ArchitectureIcon from "@mui/icons-material/Architecture";
// import GolfCourseIcon from "@mui/icons-material/GolfCourse";
// import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
// import DescriptionIcon from "@mui/icons-material/Description";

// import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
// import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
// import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";
// import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
// import SlideshowIcon from "@mui/icons-material/Slideshow";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
// import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ArticleIcon from "@mui/icons-material/Article";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SearchIcon from "@mui/icons-material/Search";

import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BadgeIcon from "@mui/icons-material/Badge";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
// import Tooltip from "@mui/material/Tooltip";
import { useAuthContextSB } from "../../hooks/useAuthContextSB";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";




export function RefereeZoneMenu({clickOpen}) {
    const { t } = useTranslation("global");
    const { user } = useAuthContextSB();
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
                        to="/referee-zone/referee-home-SB"
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



export function AdminZoneMenu({ clickOpen}) {
    const { t } = useTranslation("global");
    const { user } = useAuthContextSB();
    const [referee, setReferee] = useState(null);
   

    useEffect(() => {
            const fetchData = async () => {
                try {
                       
                    // Get referee data if user is authenticated
                    if (user?.id) {
                        const { data: refereeData, error: refereeError } = await supabase
                            .from("referees")
                            .select("*")
                            .eq("id", user.id)
                            .single();
    
                        if (refereeError) throw refereeError;
                        setReferee(refereeData);
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                    
                }
            };
    
            fetchData();
        }, [user?.id]); // Re-run when user ID changes


    // const { document: referee } = useDocument("users", user?.uid);
    // // console.log("navbar referee:", referee?.role)
    
    const adminZoneDropDownMenu = [
        {
            id: 1,
            link: "/admin-zone-SB/admin-home",
            icon: <AssignmentIndIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.az_dashboard"),
        },
        {
            id: 2,
            link: "/admin-zone-SB/referee-list",
            icon: <BadgeIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.az_referee_list"),
        },
        {
            id: 3,
            link: "/admin-zone-SB/training-organization-list",
            icon: <CorporateFareIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.az_trainingOrgs_list"),
        },
        {
            id: 4,
            link: "/admin-zone-SB/event-list",
            icon: <EventOutlinedIcon className="navbar-icon" fontSize="small" />,
            subtitle: t("navbar.az_event_list"),
        },
        {
            id: 5,
            link: "/admin-zone-SB/notice-list",
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
