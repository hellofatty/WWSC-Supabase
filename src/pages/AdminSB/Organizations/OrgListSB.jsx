/** @format */

import "./OrgList.css";
import AdminLayout from "../AdminHome/AdminLayout.js";
import OrgListCompSB from "./OrgListCompSB.jsx";


export default function OrgListSB() {
   
    return <AdminLayout children={<OrgListCompSB/>} />;
}
