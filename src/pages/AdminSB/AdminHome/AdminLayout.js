/** @format */

import "./AdminHome.css";

import AdminSidebar from "../../../components/AdminSidebar/AdminSidebar";

export default function AdminLayout({ children }) {
    // const { user } = useAuthContext();

    return (
        <div className="admin-home" style={{ backgroundColor: "rgba(211, 211, 211, 0.257)" }}>
            <div style={{ zIndex: "100", backgroundColor: "rgba(211, 211, 211, 0.257)" }}>
                <AdminSidebar />
            </div>
            <div className="referee-content" >{children}</div>
        </div>
    );
}
