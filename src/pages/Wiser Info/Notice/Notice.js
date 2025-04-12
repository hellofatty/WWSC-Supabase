/** @format */

import "./Notice.css";

import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";
import { Pagination, PaginationItem } from "reactstrap";
import { useTranslation } from "react-i18next";
import moment from "moment";
// import { Link } from "react-router-dom";

export default function Notice({ page, notices, error }) {
    const { t, i18n } = useTranslation();

    const lang = i18n.language;

    const lowerLim = page * 5;
    const currentNotice = [...notices].splice(lowerLim, 5);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
            <>
                <div className="page-primary-title">{t("notice.title")}</div>

                {/* {isPending && <div className="load">{t("notice.load")}</div>} */}
                {error && <div className="error">{error}</div>}
                {notices && (
                    <div className="notice-container">
                        <div className="notice-list">
                            <div className="page-container">
                                <Pagination>
                                    {Array(Math.ceil(notices.length / 5))
                                        .fill(0)
                                        .map((_, i) => (
                                            <PaginationItem className="page-numbers">
                                                {
                                                    <NavLink
                                                        to={"/wiser-info/wwsc-notices-" + (i + 1)}
                                                        onClick={scrollToTop}
                                                        style={{ textDecoration: "none" }}
                                                        className="number"
                                                    >
                                                        {i + 1}
                                                    </NavLink>
                                                }
                                            </PaginationItem>
                                        ))}
                                </Pagination>
                            </div>
                            {notices &&
                                currentNotice.map((notice) => (
                                    <div key={notice.id}>
                                        <div className="notice-list-card">
                                            <div className="notice-list-info">
                                                <>
                                                    {lang === "en" && (
                                                        <div
                                                            className="page-secondary-title"
                                                            style={{ letterSpacing: "0px" }}
                                                        >
                                                            {notice.title}
                                                        </div>
                                                    )}
                                                    {lang === "zh-TW" && (
                                                        <div
                                                            className="page-primary-title"
                                                            style={{ letterSpacing: "0px" }}
                                                        >
                                                            {notice.titleTw}
                                                        </div>
                                                    )}
                                                    {lang === "zh-CN" && (
                                                        <div
                                                            className="page-primary-title"
                                                            style={{ letterSpacing: "0px" }}
                                                        >
                                                            {notice.titleCn}
                                                        </div>
                                                    )}
                                                    <div
                                                        className="notice-date-author"
                                                        style={{ color: "grey", fontSize: "0.75em" }}
                                                    >
                                                        {t("admin.notice-list.posted-on")}:&nbsp;
                                                        {moment(notice.postedDate.toDate().toDateString()).format(
                                                            "MM/DD/YYYY"
                                                        )}
                                                        ; {t("admin.notice-list.created-by")}: {notice.author}
                                                    </div>
                                                    {lang === "en" && (
                                                        <div
                                                            className="notice-card-content"
                                                            dangerouslySetInnerHTML={{
                                                                // __html: notice.content,
                                                                __html: notice.excerpt,
                                                            }}
                                                        />
                                                    )}
                                                    {lang === "zh-TW" && (
                                                        <div
                                                            className="notice-card-content"
                                                            dangerouslySetInnerHTML={{
                                                                // __html: notice.content,
                                                                __html: notice.excerptTw,
                                                            }}
                                                        />
                                                    )}
                                                    {lang === "zh-CN" && (
                                                        <div
                                                            className="notice-card-content"
                                                            dangerouslySetInnerHTML={{
                                                                // __html: notice.content,
                                                                __html: notice.excerptCn,
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
                                                        {/* <Link to={`/admin-zone/notice/${notice.id}`}>
                                                            {t("notice.more")}
                                                        </Link> */}
                                                        <NavLink to={"/wiser-info/wwsc-notices/" + notice.slug}>
                                                            {t("notice.more")}
                                                        </NavLink>
                                                    </p>
                                                </>
                                            </div>
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                ))}
                            <div className="page-container">
                                <Pagination>
                                    {Array(Math.ceil(notices.length / 5))
                                        .fill(0)
                                        .map((_, i) => (
                                            <PaginationItem className="page-numbers">
                                                {
                                                    <NavLink
                                                        to={"/wiser-info/wwsc-notices-" + (i + 1)}
                                                        onClick={scrollToTop}
                                                        style={{ textDecoration: "none" }}
                                                        className="number"
                                                    >
                                                        {i + 1}
                                                    </NavLink>
                                                }
                                            </PaginationItem>
                                        ))}
                                </Pagination>
                            </div>
                        </div>
                        <div className="notice-sidebar" style={{ marginTop: "50px" }}>
                            <h3>{t("notice.recentNoticeTitle")}</h3>
                            <ol className="recent-notice-list" style={{ paddingInlineEnd: "50px", textAlign: "right" }}>
                                {notices &&
                                    [...notices].splice(0, 60).map((notice) => (
                                        <li className="recent-notice-item">
                                            {lang === "en" && (
                                                <NavLink to={"/wiser-info/wwsc-notices/" + notice.slug}>
                                                    {notice.shortTitle}
                                                </NavLink>
                                            )}
                                            {lang === "zh-TW" && (
                                                <NavLink to={"/wiser-info/wwsc-notices/" + notice.slug}>
                                                    {notice.shortTitleTw}
                                                </NavLink>
                                            )}
                                            {lang === "zh-CN" && (
                                                <NavLink to={"/wiser-info/wwsc-notices/" + notice.slug}>
                                                    {notice.shortTitleCn}
                                                </NavLink>
                                            )}
                                        </li>
                                    ))}
                            </ol>
                        </div>
                    </div>
                )}
            </>
        </Container>
    );
}
