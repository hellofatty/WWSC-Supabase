/** @format */

import "./GlobalLink.css";
import { useTranslation } from "react-i18next";
import { Container, useMediaQuery } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import SearchIcon from "@mui/icons-material/Search";
import {
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { useCollection } from "../../../hooks/useCollection";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Pagination from "../../../components/Pagination/Pagination";
import { PrimaryTitle, ResParagraphNoIndent } from "../../../components/Text/Title/Title";

export default function GlobalLink() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;
    const { documents: orgList, error } = useCollection(
        "organizations",
        ["name", "!=", "World Wiser Sport Committee"],
        ["name", "asc"]
    );

    const mb = useMediaQuery("(max-width:600px)");
    const [query, setQuery] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    // Create country filter for authOrgs
    let arryOrgsCountry = [];

    for (let i = 0; i < orgList?.length; i++) {
        arryOrgsCountry.push(orgList[i].country?.label);
    }

    const arryOrgsCountriesNoDup = removeDuplicates(arryOrgsCountry);

    // console.log(arryOrgsCountriesNoDup);

    // Create country filter for Orgs 繁體中文
    let arryOrgsCountryTw = [];

    for (let i = 0; i < orgList?.length; i++) {
        arryOrgsCountryTw.push(orgList[i].countryTw?.label);
    }

    const arryOrgsCountriesTwNoDup = removeDuplicates(arryOrgsCountryTw);

    // console.log(arryOrgsCountriesTwNoDup);

    // Create country filter for Orgs 繁體中文
    let arryOrgsCountryCn = [];

    for (let i = 0; i < orgList?.length; i++) {
        arryOrgsCountryCn.push(orgList[i].countryCn?.label);
    }

    const arryOrgsCountriesCnNoDup = removeDuplicates(arryOrgsCountryCn);

    // console.log(arryOrgsCountriesCnNoDup);

    const handleCountryChange = (event) => {
        setQuery(event.target.value);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(25);

    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    const currentRows = orgList ? orgList.slice(firstRowIndex, lastRowIndex) : null;

    if (!orgList) {
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
            <div className="org-list-public-container">
                {error && <p>{error}</p>}
                <div style={{width:"100%"}}><PrimaryTitle text={t("global.title")}/></div>
                <ResParagraphNoIndent>
                    {t("global.desc")}{" "}
                    <i>
                        <a href="mailto:info@worldwisersport.org">info@worldwisersport.org</a>
                    </i>
                </ResParagraphNoIndent>
                <div className="event-list-filter-bar" style={{ marginLeft: "0" }}>
                    <div className="event-list-select-container" style={{ justifyContent: "flex-start" }}>
                        <div className="event-list-select-item" style={{ marginLeft: "0" }}>
                            <span>
                                <Tooltip title={t("admin.org-list.select-location")} arrow placement="left">
                                    <PinDropIcon
                                        fontSize="small"
                                        sx={{ color: "grey", marginRight: "3px", marginLeft: "3px" }}
                                    />
                                </Tooltip>
                            </span>

                            {lang === "en" && (
                                <select
                                    className="event-list-select "
                                    value={query}
                                    onChange={handleCountryChange}
                                    style={{ width: "100px", fontSize: "0.75rem", height: "auto" }}
                                >
                                    <option value="all">{t("admin.org-list.all")}</option>
                                    {arryOrgsCountriesNoDup.map((countryEng, index) => (
                                        <option key={index} value={countryEng}>
                                            {countryEng === "Hong Kong SAR China" ? "Hong Kong" : countryEng}
                                        </option>
                                    ))}
                                </select>
                            )}
                            {lang === "zh-TW" && (
                                <select
                                    className="event-list-select "
                                    value={query}
                                    onChange={handleCountryChange}
                                    style={{ width: "120px", fontSize: "0.75rem", height: "auto" }}
                                >
                                    <option value="all">{t("admin.org-list.all-auth-orgs")}</option>
                                    {arryOrgsCountriesTwNoDup.map((countryTw, index) => (
                                        <option key={index} value={countryTw}>
                                            {countryTw === "中國香港特別行政區" ? "香港" : countryTw}
                                        </option>
                                    ))}
                                </select>
                            )}
                            {lang === "zh-CN" && (
                                <select
                                    className="event-list-select"
                                    value={query}
                                    onChange={handleCountryChange}
                                    style={{ width: "120px", fontSize: "0.75rem", height: "30px" }}
                                >
                                    <option value="all">{t("admin.org-list.all-auth-orgs")}</option>
                                    {arryOrgsCountriesCnNoDup.map((countryCn, index) => (
                                        <option key={index} value={countryCn}>
                                            {countryCn === "中国香港特别行政区" ? "香港" : countryCn}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                    </div>

                    <input
                        className="search-bar"
                        placeholder={t("admin.org-list.search")}
                        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                    />
                    <Tooltip title={t("admin.org-list.search")}>
                        <SearchIcon style={{ color: "grey", marginLeft: "12px" }} className="search-icon" />
                    </Tooltip>
                    {/* </div> */}
                    {/* <div className="referee-list-layout-icon">
                    <div style={{ color: "grey", marginRight: "6px" }}> {t("admin.org-list.all-orgs")} </div>
                    <div>
                        <Switch
                            checked={filter}
                            size="small"
                            onChange={(e) => setFilter(e.target.checked)}
                            inputProps={{ "aria-label": "controlled" }}
                        />
                    </div>{" "}
                    <div style={{ color: "grey", marginRight: "6px" }}> {t("admin.org-list.isAuthorized")} </div>
                </div> */}
                </div>
                <>
                    {/*--------------Org List Table Layout ----------*/}

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 235 }} size="small" aria-label="simple table">
                            <TableHead>
                                <TableRow style={{ backgroundColor: "grey" }}>
                                    <TableCell
                                        align="center"
                                        style={
                                            !mb
                                                ? {
                                                      color: "white",
                                                      whiteSpace: "nowrap",
                                                      width: "300px",
                                                      fontSize: "0.8rem",
                                                  }
                                                : {
                                                      color: "white",
                                                      whiteSpace: "nowrap",
                                                      width: "300px",
                                                      fontSize: "0.75rem",
                                                  }
                                        }
                                    >
                                        {t("admin.org-list.name")}
                                    </TableCell>

                                    <TableCell
                                        align="center"
                                        style={
                                            !mb
                                                ? {
                                                      color: "white",
                                                      whiteSpace: "nowrap",
                                                      width: "300px",
                                                      fontSize: "0.8rem",
                                                  }
                                                : {
                                                      color: "white",
                                                      whiteSpace: "nowrap",
                                                      width: "300px",
                                                      fontSize: "0.75rem",
                                                  }
                                        }
                                    >
                                        {t("admin.org-list.country")}
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orgList ? (
                                    currentRows
                                        .filter(
                                            (org) =>
                                                org.name.toLowerCase().includes(searchQuery) ||
                                                org.nameTw.toLowerCase().includes(searchQuery) ||
                                                org.nameCn.toLowerCase().includes(searchQuery)
                                        )
                                        .filter(
                                            (org) =>
                                                query === "all" ||
                                                org.country?.label.toLowerCase() === query.toLowerCase() ||
                                                org.countryTw?.label.toLowerCase() === query.toLowerCase() ||
                                                org.countryCn?.label.toLowerCase() === query.toLowerCase()
                                        )

                                        .map((org, idx) => (
                                            <TableRow
                                                key={idx}
                                                hover={true}
                                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                            >
                                                {lang === "en" && (
                                                    <TableCell
                                                        align="left"
                                                        style={
                                                            !mb
                                                                ? { color: "teal", fontSize: "0.8rem" }
                                                                : { color: "teal", fontSize: "0.75rem" }
                                                        }
                                                    >
                                                        <a
                                                            href={org?.orgURL}
                                                            style={{ cursor: "pointer" }}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            alt={org?.name}
                                                        >
                                                            <div className="org-logo-name-wrapper">
                                                                <div>
                                                                    {org?.logoURL ? (
                                                                        <div>
                                                                            <img
                                                                                className="org-logo"
                                                                                src={org?.logoURL}
                                                                                alt="Org Logo"
                                                                            />
                                                                        </div>
                                                                    ) : (
                                                                        <div className="no-org-logo">
                                                                            {org?.name[0]}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div>{org?.name}</div>
                                                                {org?.isAuthorized === true &&
                                                                    org?.status === "active" && (
                                                                        <Tooltip
                                                                            title={t("admin.org-list.auth-active-org")}
                                                                        >
                                                                            <MilitaryTechIcon />
                                                                        </Tooltip>
                                                                    )}
                                                            </div>
                                                        </a>
                                                    </TableCell>
                                                )}
                                                {lang === "zh-TW" && (
                                                    <TableCell
                                                        align="left"
                                                        style={
                                                            !mb
                                                                ? { color: "teal", fontSize: "0.8rem" }
                                                                : { color: "teal", fontSize: "0.75rem" }
                                                        }
                                                    >
                                                        <a
                                                            href={org?.orgURL}
                                                            style={{ cursor: "pointer" }}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            alt={org?.nameTw}
                                                        >
                                                            <div className="org-logo-name-wrapper">
                                                                <div>
                                                                    {org?.logoURL ? (
                                                                        <div>
                                                                            <img
                                                                                className="org-logo"
                                                                                src={org?.logoURL}
                                                                                alt="Org Logo"
                                                                                style={{ objectFit: "cover" }}
                                                                            />
                                                                        </div>
                                                                    ) : (
                                                                        <div className="no-org-logo">
                                                                            {org?.nameTw[0]}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div>{org?.nameTw}</div>
                                                            </div>
                                                        </a>
                                                    </TableCell>
                                                )}
                                                {lang === "zh-CN" && (
                                                    <TableCell
                                                        align="left"
                                                        style={
                                                            !mb
                                                                ? { color: "teal", fontSize: "0.8rem" }
                                                                : { color: "teal", fontSize: "0.75rem" }
                                                        }
                                                    >
                                                        <a
                                                            href={org?.orgURL}
                                                            style={{ cursor: "pointer" }}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            alt={org?.nameCn}
                                                        >
                                                            <div className="org-logo-name-wrapper">
                                                                <div>
                                                                    {org?.logoURL ? (
                                                                        <div>
                                                                            <img
                                                                                className="org-logo"
                                                                                src={org.logoURL}
                                                                                alt="Org Logo"
                                                                            />
                                                                        </div>
                                                                    ) : (
                                                                        <div className="no-org-logo">
                                                                            {org.nameCn[0]}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div>{org?.nameCn}</div>
                                                            </div>
                                                        </a>
                                                    </TableCell>
                                                )}

                                                {lang === "en" && (
                                                    <TableCell
                                                        align="center"
                                                        style={
                                                            !mb
                                                                ? { color: "teal", fontSize: "0.8rem" }
                                                                : { color: "teal", fontSize: "0.75rem" }
                                                        }
                                                    >
                                                        {org.country?.label === "Hong Kong SAR China"
                                                            ? "Hong Kong"
                                                            : org.country?.label}
                                                    </TableCell>
                                                )}
                                                {lang === "zh-TW" && (
                                                    <TableCell
                                                        align="center"
                                                        style={
                                                            !mb
                                                                ? { color: "teal", fontSize: "0.8rem" }
                                                                : { color: "teal", fontSize: "0.75rem" }
                                                        }
                                                    >
                                                        {org.countryTw?.label === "中國香港特別行政區"
                                                            ? "香港"
                                                            : org.countryTw?.label}
                                                    </TableCell>
                                                )}
                                                {lang === "zh-CN" && (
                                                    <TableCell
                                                        align="center"
                                                        style={
                                                            !mb
                                                                ? { color: "teal", fontSize: "0.8rem" }
                                                                : { color: "teal", fontSize: "0.75rem" }
                                                        }
                                                    >
                                                        {org.countryCn?.label === "中国香港特别行政区"
                                                            ? "香港"
                                                            : org.countryCn?.label}
                                                    </TableCell>
                                                )}
                                            </TableRow>
                                        ))
                                ) : (
                                    <CircularProgress />
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Pagination
                        documents={orgList}
                        totalRows={orgList && orgList.length}
                        setRowsPerPage={setRowsPerPage}
                        rowsPerPage={rowsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        firstRowIndex={firstRowIndex}
                        lastRowIndex={lastRowIndex}
                    />
                </>
            </div>
        </Container>
    );
}
