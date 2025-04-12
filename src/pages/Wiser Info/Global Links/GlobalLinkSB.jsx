/** @format */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "../../../supabase/supabaseClient";
import "./GlobalLink.css";

// MUI Components
import {
    Container,
    useMediaQuery,
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
} from "@mui/material";
import { PinDrop as PinDropIcon, Search as SearchIcon, MilitaryTech as MilitaryTechIcon } from "@mui/icons-material";

// Components
import Pagination from "../../../components/Pagination/Pagination";
import { PrimaryTitle, ResParagraphNoIndent } from "../../../components/Text/Title/Title";

export default function GlobalLinkSB() {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    const mb = useMediaQuery("(max-width:600px)");

    // State
    const [organizations, setOrganizations] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(25);

    // Fetch organizations
    useEffect(() => {
        const fetchOrganizations = async () => {
            try {
                const { data, error } = await supabase
                    .from("organizations")
                    .select(
                        `
                    id,
                    name,
                    name_tw,
                    name_cn,
                    city,
                    city_tw,
                    city_cn,
                    logo_url,
                    is_authorized,
                    status,
                    from_date,
                    to_date,
                    years,
                    org_url,
                    org_url2,
                    country_label: country_en->label,
                    country_label_tw: country_tw->label,
                    country_label_cn: country_cn->label 
                `
                    )
                    // .neq('name', 'World Wiser Sport Committee')
                    .order("name", { ascending: true });

                if (error) throw error;
                setOrganizations(data);
                console.log(organizations);
            } catch (err) {
                console.error("Error fetching organizations:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrganizations();
    }, []);

    // Helper functions
    const removeDuplicates = (arr) => [...new Set(arr)];

    const getCountries = () => {
        if (!organizations) return { en: [], tw: [], cn: [] };

        const en = removeDuplicates(organizations.map((org) => org.country_label).filter(Boolean));
        const tw = removeDuplicates(organizations.map((org) => org.country_label_tw).filter(Boolean));
        const cn = removeDuplicates(organizations.map((org) => org.country_label_cn).filter(Boolean));

        return { en, tw, cn };
    };

    const countries = getCountries();
    const handleCountryChange = (event) => setQuery(event.target.value);

    // Pagination
    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    const currentRows = organizations?.slice(firstRowIndex, lastRowIndex) || [];

    if (loading) {
        return (
            <div className="loading-container">
                <CircularProgress />
                <p>{t("general.loading")}</p>
            </div>
        );
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
            <div className="org-list-public-container">
                {error && <p>{error}</p>}
                <div style={{ width: "100%" }}>
                    <PrimaryTitle text={t("global.title")} />
                </div>
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
                                    {countries.en.map((country, index) => (
                                        <option key={index} value={country}>
                                            {country === "Hong Kong SAR China" ? "Hong Kong" : country}
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
                                    {countries.tw.map((country_tw, index) => (
                                        <option key={index} value={country_tw}>
                                            {country_tw === "中國香港特別行政區" ? "香港" : country_tw}
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
                                    {countries.cn.map((country_cn, index) => (
                                        <option key={index} value={country_cn}>
                                            {country_cn === "中国香港特别行政区" ? "香港" : country_cn}
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
                                        {/* {t("admin.org-list.country")} */}
                                        city
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {organizations ? (
                                    currentRows
                                        .filter((org) => {
                                            const nameEn = org.name?.toLowerCase() || "";
                                            const nameTw = org.name_tw?.toLowerCase() || "";
                                            const nameCn = org.name_cn?.toLowerCase() || "";
                                            const search = searchQuery?.toLowerCase() || "";

                                            return (
                                                nameEn.includes(search) ||
                                                nameTw.includes(search) ||
                                                nameCn.includes(search)
                                            );
                                        })
                                        .filter((org) => {
                                            if (query === "all") return true;

                                            const countryEn = org.country_label?.toLowerCase() || "";
                                            const countryTw = org.country_label_tw?.toLowerCase() || "";
                                            const countryCn = org.country_label_cn?.toLowerCase() || "";
                                            const queryLower = query.toLowerCase();

                                            return (
                                                countryEn === queryLower ||
                                                countryTw === queryLower ||
                                                countryCn === queryLower
                                            );
                                        })
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
                                                            href={org?.org_url}
                                                            style={{ cursor: "pointer" }}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            alt={org?.name}
                                                        >
                                                            <div className="org-logo-name-wrapper">
                                                                <div>
                                                                    {org?.logo_url ? (
                                                                        <div>
                                                                            <img
                                                                                className="org-logo"
                                                                                src={org?.logo_url}
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
                                                                {org?.is_authorized === true &&
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
                                                            href={org?.org_url}
                                                            style={{ cursor: "pointer" }}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            alt={org?.name_tw}
                                                        >
                                                            <div className="org-logo-name-wrapper">
                                                                <div>
                                                                    {org?.logo_url ? (
                                                                        <div>
                                                                            <img
                                                                                className="org-logo"
                                                                                src={org?.logo_url}
                                                                                alt="Org Logo"
                                                                                style={{ objectFit: "cover" }}
                                                                            />
                                                                        </div>
                                                                    ) : (
                                                                        <div className="no-org-logo">
                                                                            {org?.name_tw[0]}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div>{org?.name_tw}</div>
                                                                {org?.is_authorized === true &&
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
                                                            href={org?.org_url}
                                                            style={{ cursor: "pointer" }}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            alt={org?.name_cn}
                                                        >
                                                            <div className="org-logo-name-wrapper">
                                                                <div>
                                                                    {org?.logo_url ? (
                                                                        <div>
                                                                            <img
                                                                                className="org-logo"
                                                                                src={org.logo_url}
                                                                                alt="Org Logo"
                                                                            />
                                                                        </div>
                                                                    ) : (
                                                                        <div className="no-org-logo">
                                                                            {org.name_cn[0]}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div>{org?.name_cn}</div>
                                                                {org?.is_authorized === true &&
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

                                                {lang === "en" && (
                                                    <TableCell
                                                        align="center"
                                                        style={
                                                            !mb
                                                                ? { color: "teal", fontSize: "0.8rem" }
                                                                : { color: "teal", fontSize: "0.75rem" }
                                                        }
                                                    >
                                                        {org?.country_label === "Hong Kong SAR China"
                                                            ? "Hong Kong"
                                                            : org?.country_label}
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
                                                        {org?.country_label_tw === "中國香港特別行政區"
                                                            ? "香港"
                                                            : org?.country_label_tw}
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
                                                        {org?.country_label_cn === "中国香港特别行政区"
                                                            ? "香港"
                                                            : org?.country_label_cn}
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
                                                        {org?.city}
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
                                                        {org?.city_tw}
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
                                                        {org?.city_cn}
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
                        documents={organizations}
                        totalRows={organizations && organizations.length}
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
