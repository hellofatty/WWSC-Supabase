/** @format */

import "./AdminDashboard.css";

import { useTranslation } from "react-i18next";

import AdminRefereeDashboardSB from "./AdminRefereeDashboardSB";
import OrgDashboardSB from "./OrgDashboardSB";

import CustomTab from "../../../components/CustomTab/CustomTab";

export default function AdminDashboardSB() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    const content = [
        { title: t("admin.dashboard.referee-tab"), content: <AdminRefereeDashboardSB /> },
        { title: t("admin.dashboard.org-tab"), content: <OrgDashboardSB /> },
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
