/** @format */

import "./AdminDashboard.css";

// import { useState } from "react";

import { useTranslation } from "react-i18next";

import AdminRefereeDashboard from "./AdminRefereeDashboard";
import OrgDashboard from "./OrgDashboard";

import CustomTab from "../../../components/CustomTab/CustomTab";

function AdminDashboard() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    const content = [
        { title: t("admin.dashboard.referee-tab"), content: <AdminRefereeDashboard /> },
        { title: t("admin.dashboard.org-tab"), content: <OrgDashboard /> },
    ];

    return (
        <>
            <div className="page-secondary-title" style={{ marginLeft: "20px", marginTop: "12px" }}>
                {t("admin.dashboard.title")}
            </div>
            <div className="referee-list-table-container" style={{ width: "100%" }}>
                <CustomTab content={content} />
            </div>
        </>
    );
} //

export default AdminDashboard;
