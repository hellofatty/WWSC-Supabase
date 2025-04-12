/** @format */

import "./Sidebar.css";
// import Avatar from "../Avatar/Avatar";

// import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BadgeIcon from "@mui/icons-material/Badge";
import ClassIcon from "@mui/icons-material/Class";
import SportsIcon from "@mui/icons-material/Sports";
import SchoolIcon from "@mui/icons-material/School";
// import { projectFirestore } from "../../firebase/config";
// import { getDoc } from "firebase/firestore";
import { useLogout } from "../../hooks/useLogout";
import { useTranslation } from "react-i18next";

export default function Sidebar({ referee }) {
    const { t } = useTranslation("global");
    // const { i18n } = useTranslation();

    const { user } = useAuthContext();

    const { logout, isPending } = useLogout();

    return (
        <>
            
            <div className="sidebar">
                <div className="sidebar-content">
                    <img className="sidebar-referee" src="/assets/referee.png" alt="referee" />
                    {user && (
                        <>
                            <nav className="links">
                                <ul>
                                    <li>
                                        <NavLink to="/referee-zone/referee-home">
                                            <div className="sidebar-menu-item">
                                                <span style={{ marginRight: "12px" }}>
                                                    <DashboardIcon style={{ fontSize: "24px" }} />
                                                </span>
                                                <span style={{ color: "teal" }}>{t("referee.sidebar.dashboard")}</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/referee-zone/referee-home/referee-profile">
                                            <div className="sidebar-menu-item">
                                                <span style={{ marginRight: "12px" }}>
                                                    <BadgeIcon style={{ fontSize: "24px" }} />
                                                </span>

                                                <span style={{ color: "teal" }}>{t("referee.sidebar.profile")}</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/referee-zone/referee-home/referee-training-records">
                                            <div className="sidebar-menu-item">
                                                <span style={{ marginRight: "12px" }}>
                                                    <ClassIcon style={{ fontSize: "24px" }} />
                                                </span>

                                                <span style={{ color: "teal" }}>
                                                    {t("referee.sidebar.trainingRecord")}
                                                </span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/referee-zone/referee-home/referee-game-records">
                                            <div className="sidebar-menu-item">
                                                <span style={{ marginRight: "12px" }}>
                                                    <SportsIcon style={{ fontSize: "24px" }} />
                                                </span>

                                                <span style={{ color: "teal" }}>{t("referee.sidebar.gameRecord")}</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    {referee.grade === "3" && (
                                        <li>
                                            <NavLink to="/referee-zone/referee-home/referee-training-class-records">
                                                <div className="sidebar-menu-item">
                                                    <span style={{ marginRight: "12px" }}>
                                                        <SchoolIcon style={{ fontSize: "24px" }} />
                                                    </span>

                                                    <span style={{ color: "teal" }}>
                                                        {t("referee.sidebar.training-class-records")}
                                                    </span>
                                                </div>
                                            </NavLink>
                                        </li>
                                    )}
                                </ul>
                            </nav>
                        </>
                    )}

                    {user && (
                        <div className="logout-button-container">
                            <div className="logout-btn">
                                {!isPending && (
                                    <button className="referee-link" onClick={logout}>
                                        <img src="/assets/logout.svg" alt="Logout icon" />
                                        <span>{t("referee.sidebar.logout")}</span>
                                    </button>
                                )}
                                {isPending && (
                                    <button className="referee-link" disabled>
                                        {t("referee.sidebar.logoutprogress")}
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
