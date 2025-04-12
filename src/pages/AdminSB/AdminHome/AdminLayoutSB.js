/** @format */

import "./AdminHome.css";

import AdminSidebarSB from "../../../components/AdminSidebar/AdminSidebarSB";

export default function AdminLayoutSB({ children }) {
    // const { user } = useAuthContext();

    return (
        <div className="admin-home" style={{ backgroundColor: "rgba(211, 211, 211, 0.257)" }}>
            <div style={{ zIndex: "100", backgroundColor: "rgba(211, 211, 211, 0.257)" }}>
                <AdminSidebarSB />
            </div>
            <div className="referee-content" >{children}</div>
        </div>
    );
}
