/** @format */

import React from "react";
import "./Pagination.css";
import { useTranslation } from "react-i18next";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Pagination({
    documents,
    totalRows,
    setRowsPerPage,
    rowsPerPage,
    currentPage,
    setCurrentPage,
    firstRowIndex,
    lastRowIndex,
}) {
    const { t } = useTranslation("global");

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
        pages.push(i);
    }

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(event.target.value);
    };

    return (
        <div className="pagination-info">
            <span  className="pagination-info-text">
                <label >
                    {t("admin.referee-list.rows-per-page")}:
                    <select name="rows" id="rows" onChange={handleRowsPerPageChange} className="wwsc-select" style={{width:"50px"}}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </label>
            </span>

            <div className="pagination-container">
                <span
                    onClick={() => {
                        setCurrentPage(currentPage - 1);
                    }}
                    style={{ color: "grey", cursor: "pointer" }}
                    className={currentPage > 1 ? "" : "pagination__disable"}
                >
                    <ArrowBackIosNewIcon />
                </span>
                <div className="pagination">
                    {pages.map((page, index) => {
                        return (
                            <span
                                key={index}
                                onClick={() => setCurrentPage(page)}
                                className={page === currentPage ? "active" : ""}
                            >
                                {page}
                            </span>
                        );
                    })}
                </div>
                <span
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                    }}
                    style={{ color: "grey", cursor: "pointer" }}
                    className={currentPage < Math.ceil(totalRows / rowsPerPage) ? "" : "pagination__disable"}
                >
                    <ArrowForwardIosIcon />
                </span>
            </div>
            <div className="pagination-info-text">
                {t("admin.referee-list.records")}:{" "}
                <strong>
                    {firstRowIndex + 1} - {lastRowIndex}
                </strong>{" "}  
                 {t("admin.referee-list.total-records")}: &nbsp;
                <strong>{documents && documents.length}</strong>
            </div>
        </div>
    );
}
