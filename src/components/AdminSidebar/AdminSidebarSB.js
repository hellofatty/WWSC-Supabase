/** @format */

import "./AdminSidebar.css";

// import "./RefereeSidebar.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import MenuOpenIcon from "@mui/icons-material/MenuOpen";
// import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DashboardIcon from "@mui/icons-material/Dashboard";
import OnDeviceTrainingIcon from "@mui/icons-material/OnDeviceTraining";
import BadgeIcon from "@mui/icons-material/Badge";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import SportsIcon from "@mui/icons-material/Sports";

import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "@mui/material";

import { useAuthContextSB } from "../../hooks/useAuthContextSB";
import { useLogoutSB } from "../../hooks/useLogoutSB";
import { useState } from "react";

export default function AdminSidebarSB() {
    const { t } = useTranslation("global");
    // const { i18n } = useTranslation();

    const { user } = useAuthContextSB();
    const isSmallScreen = useMediaQuery("(min-width:600px)");

    const { logout, isPending } = useLogoutSB();

    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleOpenMenu = () => {
        // Toggle the sidebar's collapsed state
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="sidebar-container">
            <Sidebar
                width="270px"
                collapsedWidth="60px"
                style={{ minHeight: "100vh" }}
                collapsed={isSmallScreen ? isCollapsed : true}
                transitionDuration={2000}
                rootStyles={{
                    background:
                        "linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)",
                }}
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
                {/* <div className="sidebar-open-admin-icon">
                    <ManageAccountsIcon />
                </div> */}
                {user && (
                    <Menu
                        renderExpandIcon={({ open }) => <span>{open ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>}
                        transitionDuration={1000}
                    >
                        <MenuItem
                            style={{ paddingLeft: "10px" }}
                            icon={
                                <Tooltip title={t("admin.sidebar.dashboard")} placement="right-start">
                                    <DashboardIcon className="sidebar-menu-icon" />
                                </Tooltip>
                            }
                            component={<Link to="/admin-zone-SB/admin-home" />}
                        >
                            <span className="sidebar-menu-label">{t("admin.sidebar.dashboard")}</span>
                        </MenuItem>

                        <SubMenu
                            style={{ paddingLeft: "5px" }}
                            icon={
                                <Tooltip title={t("admin.sidebar.refereeList")} placement="right-start">
                                    <BadgeIcon className="sidebar-menu-icon" />
                                </Tooltip>
                            }
                            label={t("admin.sidebar.refereeList")}
                            component={<Link to="/admin-zone-SB/referee-list" />}
                            defaultOpen={true}
                            className="sidebar-submenu-label"
                        >
                            <Divider />
                            <MenuItem
                                style={{ paddingLeft: "10px" }}
                                icon={
                                    <Tooltip title={t("admin.sidebar.G3-refereeList")} placement="right-start">
                                        <OnDeviceTrainingIcon className="sidebar-menu-icon" />
                                    </Tooltip>
                                }
                                component={<Link to="/admin-zone-SB/G3-referee-list" />}
                            >
                                <span className="sidebar-submenu-menu-label">{t("admin.sidebar.G3-refereeList")}</span>
                            </MenuItem>{" "}
                            <MenuItem
                                style={{ paddingLeft: "10px" }}
                                icon={
                                    <Tooltip title={t("admin.sidebar.G4-refereeList")} placement="right-start">
                                        <SportsIcon className="sidebar-menu-icon" />
                                    </Tooltip>
                                }
                                component={<Link to="/admin-zone-SB/G4-referee-list" />}
                            >
                                <span className="sidebar-submenu-menu-label">{t("admin.sidebar.G4-refereeList")}</span>
                            </MenuItem>
                            <MenuItem
                                style={{ paddingLeft: "10px" }}
                                icon={
                                    <Tooltip title={t("admin.sidebar.RITList")} placement="right-start">
                                        <ContactPageIcon className="sidebar-menu-icon" />
                                    </Tooltip>
                                }
                                component={<Link to="/admin-zone-SB/referee-in-training-list" />}
                            >
                                <span className="sidebar-submenu-menu-label"> {t("admin.sidebar.RITList")}</span>
                            </MenuItem>
                        </SubMenu>
                        <MenuItem
                            style={{ paddingLeft: "10px" }}
                            icon={
                                <Tooltip title={t("admin.sidebar.trainingOrgList")} placement="right-start">
                                    <CorporateFareIcon className="sidebar-menu-icon" />
                                </Tooltip>
                            }
                            component={<Link to="/admin-zone-SB/training-organization-list" />}
                        >
                            <span className="sidebar-menu-label">{t("admin.sidebar.trainingOrgList")}</span>
                        </MenuItem>
                        <MenuItem
                            style={{ paddingLeft: "10px" }}
                            icon={
                                <Tooltip title={t("admin.sidebar.eventList")} placement="right-start">
                                    <EventOutlinedIcon className="sidebar-menu-icon" />
                                </Tooltip>
                            }
                            component={<Link to="/admin-zone-SB/event-list" />}
                        >
                            <span className="sidebar-menu-label"> {t("admin.sidebar.eventList")}</span>
                        </MenuItem>
                        <MenuItem
                            style={{ paddingLeft: "10px" }}
                            icon={
                                <Tooltip title={t("admin.sidebar.noticeList")} placement="right-start">
                                    <TextSnippetIcon className="sidebar-menu-icon" />
                                </Tooltip>
                            }
                            component={<Link to="/admin-zone-SB/notice-list" />}
                        >
                            <span className="sidebar-menu-label">{t("admin.sidebar.noticeList")}</span>
                        </MenuItem>
                        <MenuItem
                            style={{ paddingLeft: "5px", marginTop: "30px", marginBottom: "60px" }}
                            icon={
                                <Tooltip title={t("referee.sidebar.logout")} placement="right-start">
                                    <LogoutIcon className="sidebar-menu-icon" />
                                </Tooltip>
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
