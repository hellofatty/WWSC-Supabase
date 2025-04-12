/** @format */

import "./OrgList.css";
import AdminLayout from "../AdminHome/AdminLayout";
import OrgListComp from "./OrgListComp.jsx";


export default function OrgList() {
   
    return <AdminLayout children={<OrgListComp/>} />;
}
