/** @format */

import "./RefereeSidebar.css";
import { Sidebar, MenuItem, Menu } from "react-pro-sidebar";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
// import MenuIcon from "@mui/icons-material/Menu";
// import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BadgeIcon from "@mui/icons-material/Badge";
// import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ClassIcon from "@mui/icons-material/Class";
import SportsIcon from "@mui/icons-material/Sports";
import SchoolIcon from "@mui/icons-material/School";
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "@mui/material";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { useEffect, useState } from "react";

export default function RefereeSidebar({ referee }) {
    const { t } = useTranslation("global");
    // const { i18n } = useTranslation();

    const { user } = useAuthContext();
    const isSmallScreen = useMediaQuery("(min-width:900px)");

    const { logout, isPending } = useLogout();

    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleOpenMenu = () => setIsCollapsed(!isCollapsed);

    const handleCollapsedMenuClick = () => {
        if (isCollapsed === true) {
            setIsCollapsed(true);
        } else {
            setIsCollapsed(false);
        }
    };
    // Custom hook for getting window size
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState([
      window.innerHeight,
      window.innerWidth,
    ]);
  
    useEffect(() => {
      const handleWindowResize = () => {
        setWindowSize([window.innerHeight, window.innerWidth]);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
    return windowSize;
    };
    
    const [windowHeight] = useWindowSize();

    return (
        <div className="sidebar-container">
            <Sidebar
                width="220px"
                collapsedWidth="60px"
                collapsed={isSmallScreen ? isCollapsed : true}
                transitionDuration={2000}
                rootStyles={{
                    background:
                        "linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)",
                }}

                style={{ height: windowHeight }}
            >
                {isSmallScreen && (
                    <div className={isCollapsed ? "menu-close-switch-container" : "menu-open-switch-container"}>
                        <IconButton aria-label="open" onClick={handleOpenMenu}>
                            {isCollapsed ? (
                                <KeyboardDoubleArrowRightIcon className="menu-open-switch-icon" fontSize="medium" />
                            ) : (
                                <KeyboardDoubleArrowLeftIcon className="menu-open-switch-icon" fontSize="medium" />
                            )}
                        </IconButton>
                    </div>
                )}

                {!isCollapsed && <div className={!isSmallScreen ? "sidebar-close-referee-icon" : "sidebar-open-referee-icon"}>
                    <img src="/assets/referee.png" alt="referee" />
                </div>}
                {user && (
                    <Menu
                        renderExpandIcon={({ open }) => <span>{open ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>}
                        transitionDuration={1000}
                    >
                        <MenuItem
                            style={{paddingLeft:"10px"}}
                            icon={
                                <IconButton aria-label="Dashboard" onClick={handleCollapsedMenuClick}>
                                    <Tooltip
                                        title={isCollapsed ? t("referee.sidebar.dashboard-referee") : ""}
                                        placement="right-start"
                                    >
                                        <DashboardIcon className="sidebar-menu-icon" />
                                    </Tooltip>
                                </IconButton>
                            }
                            component={<Link to="/referee-zone/referee-home" />}
                        >
                            <span className="sidebar-menu-label">
                                {referee.grade !== "0"
                                    ? t("referee.sidebar.dashboard-referee")
                                    : t("referee.sidebar.dashboard-rit")}
                            </span>
                        </MenuItem>

                        <MenuItem
                            style={{paddingLeft:"10px"}}
                            icon={
                                <IconButton aria-label="Dashboard" onClick={handleCollapsedMenuClick}>
                                    <Tooltip
                                        title={isCollapsed ? t("referee.sidebar.profile-referee") : ""}
                                        placement="right-start"
                                    >
                                        <BadgeIcon className="sidebar-menu-icon" />
                                    </Tooltip>
                                </IconButton>
                            }
                            component={<Link to="/referee-zone/referee-home/referee-profile" />}
                        >
                            <span className="sidebar-menu-label">
                                {referee.grade !== "0"
                                    ? t("referee.sidebar.profile-referee")
                                    : t("referee.sidebar.profile-rit")}
                            </span>
                        </MenuItem>

                        
                            <Divider variant="middle" />

                            <MenuItem
                                style={{paddingLeft:"10px"}}
                                icon={
                                    <IconButton aria-label="Training">
                                        <Tooltip
                                            title={isCollapsed ? t("referee.sidebar.training-records") : ""}
                                            placement="right-start"
                                        >
                                            <ClassIcon className="sidebar-menu-icon" />
                                        </Tooltip>
                                    </IconButton>
                                }
                                component={<Link to="/referee-zone/referee-home/referee-training-records" />}
                            >
                                <span className="sidebar-menu-label">{t("referee.sidebar.training-records")}</span>
                            </MenuItem>

                            <MenuItem
                                  style={{paddingLeft:"10px"}}
                                icon={
                                    <IconButton aria-label="Game">
                                        <Tooltip
                                            title={isCollapsed ? t("referee.sidebar.referee-game-records") : ""}
                                            placement="right-start"
                                        >
                                            <SportsIcon className="sidebar-menu-icon" />
                                        </Tooltip>
                                    </IconButton>
                                }
                                component={<Link to="/referee-zone/referee-home/referee-game-records" />}
                            >
                                <span className="sidebar-menu-label">{t("referee.sidebar.referee-game-records")}</span>
                            </MenuItem>

                            {referee.grade === "3" && (
                                <MenuItem
                                style={{paddingLeft:"10px", marginBottom: "30px" }}
                                    icon={
                                        <IconButton aria-label="Class">
                                            <Tooltip
                                                title={isCollapsed ? t("referee.sidebar.training-class-records") : ""}
                                                placement="right-start"
                                            >
                                                <SchoolIcon className="sidebar-menu-icon" />
                                            </Tooltip>
                                        </IconButton>
                                    }
                                    component={<Link to="/referee-zone/referee-home/referee-training-class-records" />}
                                   
                                >
                                    <span className="sidebar-menu-label">
                                        {t("referee.sidebar.training-class-records")}
                                    </span>
                                </MenuItem>
                            )}
                       
                        <MenuItem
                            style={{paddingLeft:"10px", marginTop: "30px", marginBottom: "60px"}}
                            icon={
                                <IconButton aria-label="Logout">
                                    <Tooltip
                                        title={isCollapsed ? t("referee.sidebar.logout") : ""}
                                        placement="right-start"
                                    >
                                        <LogoutIcon className="sidebar-menu-icon" />
                                    </Tooltip>
                                </IconButton>
                            }
                            onClick={logout}
                            disabled={isPending ? true : false}
                            
                        >
                            <span className="sidebar-menu-label"> {t("referee.sidebar.logout")}</span>
                        </MenuItem>
                    </Menu>
                )}
            </Sidebar>
        </div>
    );
}
