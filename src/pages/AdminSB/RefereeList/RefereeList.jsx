/** @format */

import "./RefereeList.css";

import RefereeListComp from "./RefereeListComp.jsx";
import AdminLayout from "../AdminHome/AdminLayout.js";


export default function RefereeList() {
   
    return <AdminLayout children={<RefereeListComp/>} />;
}
