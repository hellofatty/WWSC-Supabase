/** @format */

import "./AdminHome.css";

import AdminDashboardSB from "../Dashboard/AdminDashboardSB";
import AdminLayoutSB from "../../AdminSB/AdminHome/AdminLayoutSB";

export default function AdminHomeSB() {
    return <AdminLayoutSB children={<AdminDashboardSB />} />;
}
