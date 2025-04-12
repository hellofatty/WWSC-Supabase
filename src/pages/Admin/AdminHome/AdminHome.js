/** @format */

import "./AdminHome.css";

import AdminDashboard from "../Dashboard/AdminDashboard";
import AdminLayout from "./AdminLayout";
// import AdminSidebar from "../../../components/AdminSidebar/AdminSidebar";

export default function AdminHome() {
    // const { user } = useAuthContext();

    return <AdminLayout children={<AdminDashboard />} />;
}
