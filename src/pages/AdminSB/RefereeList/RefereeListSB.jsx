/** @format */

import "./RefereeList.css";

import RefereeListCompSB from "./RefereeListCompSB.jsx";
import AdminLayoutSB from "../AdminHome/AdminLayoutSB.js";


export default function RefereeListSB() {
   
    return <AdminLayoutSB children={<RefereeListCompSB/>} />;
}
