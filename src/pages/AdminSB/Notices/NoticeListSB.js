/** @format */

import { useState, useEffect, useCallback } from "react";
import { supabase } from "../../../supabase/supabaseClient";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

// Components
import AddNoticeSB from "./AddNoticeSB";
import AdminSidebarSB from "../../../components/AdminSidebar/AdminSidebarSB";
import Pagination from "../../../components/Pagination/Pagination";

// MUI Components
import { Button, CircularProgress, Tooltip } from "@mui/material";
import {
    PostAddOutlined as PostAddOutlinedIcon,
    Delete as DeleteIcon,
    Edit as EditIcon,
    CancelOutlined as CancelOutlinedIcon,
} from "@mui/icons-material";

import "./NoticeListSB.css";

// ==========Create NoticeList component======================
export default function NoticeListSB() {
    // All notices

    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    // State
    const [notices, setNotices] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [query, setQuery] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Fetch notices
 // Wrap fetchNotices in useCallback
 const fetchNotices = useCallback(async () => {
    try {
        setLoading(true);
        const { data, error } = await supabase
            .from("notices")
            .select("*")
            .eq("author", "WWSC")
            .order("posted_date", { ascending: false });

        if (error) throw error;
        setNotices(data);
    } catch (err) {
        console.error("Error fetching notices:", err);
        setError(err.message);
    } finally {
        setLoading(false);
    }
}, []);

// Initial data fetch
useEffect(() => {
    fetchNotices();
}, [fetchNotices]);

// Set up realtime subscriptions
useEffect(() => {
    // Subscribe to notices table changes
    const noticesSubscription = supabase
        .channel('notices-changes')
        .on(
            'postgres_changes',
            {
                event: '*', // Listen to all changes
                schema: 'public',
                table: 'notices'
            },
            (payload) => {
                console.log('Notice change received:', payload);
                fetchNotices(); // Refresh data when changes occur
            }
        )
        .subscribe();

    // Cleanup subscription on unmount
    return () => {
        supabase.removeChannel(noticesSubscription);
    };
}, [fetchNotices]);

    // Delete notice
    const handleDelete = async (id) => {
        if (!window.confirm(t("admin.notice-list.delete-confirm"))) return;

        try {
            const { error } = await supabase.from("notices").delete().eq("id", id);

            if (error) throw error;

            // Update local state
            setNotices((prev) => prev.filter((notice) => notice.id !== id));
            toast.success(t("admin.notice-list.delete-success"));
        } catch (err) {
            console.error("Error deleting notice:", err);
            toast.error(t("admin.notice-list.delete-error"));
        }
    };

    const toggle = () => setModal(!modal);

    const closeBtn = (
        <Button onClick={toggle}>
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

    const handleYearChange = (event) => {
        setQuery(event.target.value);
    };

    // Filter and pagination
    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;

    // Filter logic
    const arryNoticesYears = notices?.map((notice) => notice.year) || [];
    const arryNoticesYearsNoDup = [...new Set(arryNoticesYears)];

    const listByFilter = notices?.filter((notice) =>
        query.toLowerCase() === "all" ? true : notice.year.toLowerCase().includes(query)
    );

    const currentRows = listByFilter ? listByFilter.slice(firstRowIndex, lastRowIndex) : null;

    if (loading) {
        return (
            <div className="loading-container">
                <CircularProgress />
                <p>{t("general.loading")}</p>
            </div>
        );
    }

    // console.log(listByFilter.length);
    return (
        <div className="referee-home">
            <AdminSidebarSB />
            <div className="notice-list-container">
                {error && <p>{error}</p>}
                <div className="notice-list-title-wrap">
                    <div className="page-primary-title" style={{ marginLeft: "20px" }}>
                        {t("admin.notice-list.title")}
                    </div>
                    <Button variant="contained" startIcon={<PostAddOutlinedIcon />} onClick={toggle}>
                        {t("admin.notice-list.add-new-notice-btn")}
                    </Button>
                </div>
                <div className="notice-list-filter-bar">
                    <div className="notice-list-select-container">
                        <span style={{ color: "grey" }}>{t("admin.notice-list.year")}</span>:
                        <select
                            className="wwsc-select w3-select w3-border "
                            style={{
                                width: "90px",
                                textAlign: "center",
                                fontSize: "0.8rem",
                                color: "gray",
                                border: "lightgrey",
                                marginBottom: "2px",
                                marginRight: "10px",
                                marginLeft: "10px",
                                borderRadius: "5px",
                            }}
                            value={query}
                            onChange={handleYearChange}
                        >
                            <option value="all">
                                <span className="grade-item">{t("admin.notice-list.all")}</span>
                            </option>
                            {arryNoticesYearsNoDup.map((year, idx) => (
                                <option key={idx} value={year}>
                                    <span className="grade-item">{year}</span>
                                </option>
                            ))}
                        </select>
                        {/* <div>
                            <input
                                className="search-bar"
                                placeholder={t("admin.referee-list.search")}
                                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                            />
                            <Tooltip title={t("admin.referee-list.search")}>
                                <SearchIcon style={{ color: "grey", marginLeft: "12px" }} className="search-icon" />
                            </Tooltip>
                        </div> */}
                    </div>
                </div>
                <div>
                    <Modal isOpen={modal} toggle={toggle} backdrop="static" size="lg" centered={true}>
                        <ModalHeader toggle={toggle} close={closeBtn}>
                            <h4 style={{ color: "tomato" }}>{t("admin.notice-list.add-new-notice-title")}</h4>
                        </ModalHeader>
                        <ModalBody>
                            <AddNoticeSB toggle={toggle} />
                        </ModalBody>
                    </Modal>
                </div>

                <div className="notice-list-card-container">
                    <div className="notice-list-left">
                        <Pagination
                            documents={listByFilter}
                            totalRows={listByFilter && listByFilter.length}
                            setRowsPerPage={setRowsPerPage}
                            rowsPerPage={rowsPerPage}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                            firstRowIndex={firstRowIndex}
                            lastRowIndex={lastRowIndex}
                        />
                        {notices ? (
                            currentRows.map((notice) => (
                                <div key={notice.idx}>
                                    <div className="notice-list-card">
                                        <div className="notice-list-info">
                                            <>
                                                {currentLang === "en" && (
                                                    <div
                                                        className="page-primary-title"
                                                        style={{ letterSpacing: "0px" }}
                                                    >
                                                        {notice.title}
                                                    </div>
                                                )}
                                                {currentLang === "zh-TW" && (
                                                    <div
                                                        className="page-primary-title"
                                                        style={{ letterSpacing: "0px" }}
                                                    >
                                                        {notice.title_tw}
                                                    </div>
                                                )}
                                                {currentLang === "zh-CN" && (
                                                    <div
                                                        className="page-primary-title"
                                                        style={{ letterSpacing: "0px" }}
                                                    >
                                                        {notice.title_cn}
                                                    </div>
                                                )}

                                                <div
                                                    className="notice-date-author"
                                                    style={{ color: "grey", fontSize: "0.8rem" }}
                                                >
                                                    {t("admin.notice-list.posted-on")}:&nbsp;
                                                    {moment(notice.posted_date).format("MM/DD/YYYY")};{" "}
                                                    {t("admin.notice-list.created-by")}: {notice.author}
                                                </div>

                                                <p
                                                    className="notice-status"
                                                    style={{ color: "grey", fontSize: "0.8rem" }}
                                                >
                                                    {t("admin.notice-list.status")}:
                                                    {notice.status === "Published" && (
                                                        <span className="status-bar status-published">
                                                            {t("admin.notice-list.published")}
                                                        </span>
                                                    )}
                                                    {notice.status === "Draft" && (
                                                        <span className="status-bar status-draft">
                                                            {t("admin.notice-list.draft")}
                                                        </span>
                                                    )}
                                                    {notice.status === "Pending" && (
                                                        <span className="status-pending status-bar">
                                                            {t("admin.notice-list.pending")}
                                                        </span>
                                                    )}
                                                </p>

                                                {currentLang === "en" && (
                                                    <div
                                                        className="notice-card-content"
                                                        dangerouslySetInnerHTML={{
                                                            // __html: notice.content,
                                                            __html: notice.excerpt,
                                                        }}
                                                    />
                                                )}
                                                {currentLang === "zh-TW" && (
                                                    <div
                                                        className="notice-card-content"
                                                        dangerouslySetInnerHTML={{
                                                            // __html: notice.content,
                                                            __html: notice.excerpt_tw,
                                                        }}
                                                    />
                                                )}
                                                {currentLang === "zh-CN" && (
                                                    <div
                                                        className="notice-card-content"
                                                        dangerouslySetInnerHTML={{
                                                            // __html: notice.content,
                                                            __html: notice.excerpt_cn,
                                                        }}
                                                    />
                                                )}
                                                <p
                                                    className="read-more-link"
                                                    style={{
                                                        textAlign: "right",
                                                        marginRight: "20px",
                                                        fontSize: "0.9rem",
                                                    }}
                                                >
                                                    <Link to={`/admin-zone-SB/notice/${notice.id}`}>
                                                        {t("notice.more")}
                                                    </Link>
                                                </p>
                                            </>

                                            <div className="notice-list-icon">
                                                <span>
                                                    <Link to={`/admin-zone-SB/notice/${notice.id}`}>
                                                        <Tooltip
                                                            title={t("admin.notice-list.edit")}
                                                            arrow
                                                            placement="left-start"
                                                        >
                                                            <EditIcon fontSize="small" style={{ color: "gray" }} />
                                                        </Tooltip>
                                                    </Link>
                                                </span>
                                                <span>
                                                    <Tooltip
                                                        title={t("admin.notice-list.delete")}
                                                        arrow
                                                        placement="right-start"
                                                    >
                                                        <DeleteIcon
                                                            fontSize="small"
                                                            onClick={() => handleDelete(notice.id)}
                                                            style={{ color: "gray" }}
                                                        />
                                                    </Tooltip>
                                                </span>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Loading notices...</p>
                        )}
                        <Pagination
                            documents={listByFilter}
                            totalRows={listByFilter && listByFilter.length}
                            setRowsPerPage={setRowsPerPage}
                            rowsPerPage={rowsPerPage}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                            firstRowIndex={firstRowIndex}
                            lastRowIndex={lastRowIndex}
                        />
                    </div>
                    <div className="notice-list-right" style={{ minHeight: "100vh", marginLeft: "6px" }}>
                        <div className="notice-sidebar">
                            <h3>{t("notice.recentNoticeTitle")}</h3>
                            <ol className="recent-notice-list" style={{ paddingInlineEnd: "70px", textAlign: "right" }}>
                                {notices &&
                                    listByFilter.splice(0, 40).map((notice) => (
                                        <li className="recent-notice-item" key={notice.id}>
                                            {currentLang === "en" && (
                                                <Link to={`/admin-zone-SB/notice/${notice.id}`}>
                                                    {notice.short_title}
                                                </Link>
                                            )}
                                            {currentLang === "zh-TW" && (
                                                <Link to={`/admin-zone-SB/notice/${notice.id}`}>
                                                    {notice.short_title_tw}
                                                </Link>
                                            )}
                                            {currentLang === "zh-CN" && (
                                                <Link to={`/admin-zone-SB/notice/${notice.id}`}>
                                                    {notice.short_title_cn}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
