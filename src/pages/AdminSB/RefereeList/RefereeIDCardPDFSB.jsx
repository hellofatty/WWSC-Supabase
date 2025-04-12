/** @format */

import React from "react";
import AdminPDFRefereeIDCard from "../../../components/RefereeCard/AdminPDFRefereeIDCard";
import { useParams } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import { CircularProgress } from "@mui/material";

// import { useTranslation } from "react-i18next";

function RefereeIDCardPDF() {
    // const { t } = useTranslation("global");
    const { id } = useParams();
    const { document: referee, error } = useDocument("users", id);
 

    if (error) {
        return <div className="error">{error}</div>;
    }
    if (!referee) {
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        );
    }

    console.log(typeof referee.id);
    return (
        <>
            <AdminPDFRefereeIDCard referee={referee} />
        </>
    );
}

export default RefereeIDCardPDF;
