/** @format */

import "./EventListSB.css";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "../../../supabase/supabaseClient";
import { useTranslation } from "react-i18next";

import AdminSidebarSB from "../../../components/AdminSidebar/AdminSidebarSB";
import Pagination from "../../../components/Pagination/Pagination";

// ---------Import Material UI Components-------
// import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import CircularProgress from "@mui/material/CircularProgress";

// -------Import Material UI Icons---------------
import EventIcon from "@mui/icons-material/Event";
import PinDropIcon from "@mui/icons-material/PinDrop";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInNew from "@mui/icons-material/OpenInNew";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import EditIcon from "@mui/icons-material/Edit";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

// ---------Import Joy UI Components-------
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/joy/IconButton";

// import Typography from "@mui/joy/Typography";

// import { Link } from "react-router-dom";
import moment from "moment";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import Paper from "@mui/material/Paper";

// import Modal Components
import AddEventSB from "./AddEventSB";
import EditEventSB from "./EditEventSB";
import UploadFilesSB from "./UploadFilesSB";
import ViewMediaSB from "./ViewMediaSB";
import { toast } from "react-toastify";

export default function EventListSB() {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    const [events, setEvents] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("all");

    // Wrap fetchEvents in useCallback
    const fetchEvents = useCallback(async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("events")
                .select(
                    `
                *,
                organizations (
                    id,
                    name,
                    name_tw,
                    name_cn,
                    org_url,
                    logo_url
                )
            `
                )
                .order("date", { ascending: false });

            if (error) throw error;

            const transformedData = data.map((event) => ({
                ...event,
                date: event.date,
                org: {
                    value: {
                        id: event.organizations.id,
                        name: event.organizations.name,
                        nameTw: event.organizations.name_tw,
                        nameCn: event.organizations.name_cn,
                        orgURL: event.organizations.org_url,
                        logoURL: event.organizations.logo_url,
                    },
                    label: event.organizations.name,
                },
            }));

            setEvents(transformedData);
        } catch (err) {
            console.error("Error fetching events:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    // Initial data fetch
    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    // Set up realtime subscriptions
    useEffect(() => {
        // Subscribe to events table changes
        const eventsSubscription = supabase
            .channel("events-changes")
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "events",
                },
                (payload) => {
                    console.log("Events change received:", payload);
                    fetchEvents();
                }
            )
            .subscribe();

        // Subscribe to organizations table changes
        const orgsSubscription = supabase
            .channel("orgs-changes")
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "organizations",
                },
                (payload) => {
                    console.log("Organization change received:", payload);
                    fetchEvents();
                }
            )
            .subscribe();

        // Cleanup subscriptions on unmount
        return () => {
            supabase.removeChannel(eventsSubscription);
            supabase.removeChannel(orgsSubscription);
        };
    }, [fetchEvents]);

    // Delete event handler
    const handleDelete = async (id) => {
        try {
            const { error } = await supabase.from("events").delete().eq("id", id);

            if (error) throw error;

            // Update local state
            setEvents((prev) => prev.filter((event) => event.id !== id));
            toast.success(t("admin.event-list.delete-success"));
        } catch (err) {
            console.error("Error deleting event:", err);
            toast.error(t("admin.event-list.delete-error"));
        }
    };

    // Create years filter array
    const arryEventsYears = [...new Set(events?.map((event) => moment(event.date).format("YYYY")))].sort().reverse();

    // Create country filter arrays
    const arryEventCountries = [
        ...new Set(
            events?.map((event) =>
                event.country_en?.label === "Hong Kong SAR China" ? "Hong Kong" : event.country_en?.label
            )
        ),
    ]
        .filter(Boolean)
        .sort();

    const arryEventCountriesTw = [
        ...new Set(
            events?.map((event) =>
                event.country_tw?.label === "中國香港特別行政區" ? "香港" : event.country_tw?.label
            )
        ),
    ]
        .filter(Boolean)
        .sort();

    const arryEventCountriesCn = [
        ...new Set(
            events?.map((event) =>
                event.country_cn?.label === "中国香港特别行政区" ? "香港" : event.country_cn?.label
            )
        ),
    ]
        .filter(Boolean)
        .sort();

    // Filter events
    const filteredEvents = events?.filter((event) => {
        if (query === "all") return true;

        const eventYear = moment(event.date).format("YYYY");
        const countryLabel = event.country_en?.label;
        const countryLabelTw = event.country_tw?.label;
        const countryLabelCn = event.country_cn?.label;

        return eventYear === query || countryLabel === query || countryLabelTw === query || countryLabelCn === query;
    });

    const handleYearChange = (event) => {
        setQuery(event.target.value);
    };

    const handleCountryChange = (event) => {
        setQuery(event.target.value);
    };

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    const currentRows = filteredEvents?.slice(firstRowIndex, lastRowIndex);

    // ------Open Add Event Modal-------

    const [modalAdd, setModalAdd] = useState(false);

    const toggleAdd = () => setModalAdd(!modalAdd);

    const closeBtn = (
        <Button onClick={toggleAdd}>
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

    // ------Open Edit Modal-------
    const [currentRecord, setCurrentRecord] = useState(null);

    const [modalEdit, setModalEdit] = useState(false);
    const toggleEdit = () => setModalEdit(!modalEdit);
    const handleEditRecord = (idx) => {
        setCurrentRecord(currentRows[idx]);
        toggleEdit();
    };

    const closeBtnEdit = (
        <Button onClick={toggleEdit}>
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

    // ------Open UploadFiles Modal-------

    const [modalUpload, setModalUpload] = useState(false);
    const toggleUpload = () => setModalUpload(!modalUpload);
    const handleUploadFiles = (idx) => {
        setCurrentRecord(currentRows[idx]);
        toggleUpload();
    };

    const closeBtnUpload = (
        <Button onClick={toggleUpload}>
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

    // ------Open View Images/Videos Modal-------

    const [modalViewImages, setModalViewImages] = useState(false);
    const toggleViewImages = () => setModalViewImages(!modalViewImages);
    const handleViewImages = (idx) => {
        setCurrentRecord(currentRows[idx]);
        toggleViewImages();
    };

    const closeBtnViewImages = (
        <Button onClick={toggleViewImages}>
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

    return (
        <div className="referee-home">
            <AdminSidebarSB />
            <Container maxWidth="md" sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
                <div className="event-content-container">
                    {error && <p>{error}</p>}
                    {/* Add loading indicator */}
                    {loading ? (
                        <div className="loading-container">
                            <CircularProgress />
                            <Typography variant="body2" sx={{ mt: 2 }}>
                                {t("general.loading")}
                            </Typography>
                        </div>
                    ) : (
                        <>
                            <div className="event-list-title-wrap">
                                <div className="page-primary-title" style={{ marginLeft: "16px" }}>
                                    {t("admin.event-list.title")}
                                </div>
                                <Tooltip title={t("admin.event-list.add-new-event-btn")} placement="right-start">
                                    <IconButton variant="outlined" onClick={toggleAdd} color="primary">
                                        <PostAddOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            
                                <Modal
                                    isOpen={modalAdd}
                                    toggle={toggleAdd}
                                    backdrop="static"
                                    size="lg"
                                    centered={true}
                                    style={{ height: "auto" }}
                                >
                                    <ModalHeader toggle={toggleAdd} close={closeBtn}>
                                        <div
                                            className="page-primary-title"
                                            style={{ marginBottom: "0", borderBottom: "0" }}
                                        >
                                            {t("admin.event-list.add-new-event-title")}
                                        </div>
                                    </ModalHeader>
                                    <ModalBody>
                                        <AddEventSB toggle={toggleAdd} />
                                    </ModalBody>
                                </Modal>
                           
                            <div className="event-list-filter-bar">
                                <div className="event-list-select-container">
                                    <div className="event-list-select-item">
                                        <span>
                                            <Tooltip title={t("admin.event-list.select-year")} arrow placement="top">
                                                <EventIcon sx={{ color: "grey", marginRight: "3px" }} />
                                            </Tooltip>
                                        </span>
                                        <select
                                            className="wwsc-select w3-select w3-border "
                                            value={query}
                                            onChange={handleYearChange}
                                        >
                                            <option value="all">{t("admin.event-list.all")}</option>
                                            {arryEventsYears.map((year, index) => (
                                                <option key={index} value={year}>
                                                    {year}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="event-list-select-item">
                                        <span>
                                            <Tooltip
                                                title={t("admin.event-list.select-location")}
                                                arrow
                                                placement="top"
                                            >
                                                <PinDropIcon
                                                    sx={{ color: "grey", marginRight: "3px", marginLeft: "3px" }}
                                                />
                                            </Tooltip>
                                        </span>

                                        {lang === "en" && (
                                            <select
                                                className="event-list-select "
                                                value={query}
                                                onChange={handleCountryChange}
                                            >
                                                <option value="all">{t("admin.event-list.all")}</option>
                                                {arryEventCountries.map((countryEng, index) => (
                                                    <option key={index} value={countryEng}>
                                                        {countryEng}
                                                    </option>
                                                ))}
                                            </select>
                                        )}
                                        {lang === "zh-TW" && (
                                            <select
                                                className="event-list-select "
                                                value={query}
                                                onChange={handleCountryChange}
                                            >
                                                <option value="all">{t("admin.event-list.all")}</option>
                                                {arryEventCountriesTw.map((countryTw, index) => (
                                                    <option key={index} value={countryTw}>
                                                        {countryTw}
                                                    </option>
                                                ))}
                                            </select>
                                        )}
                                        {lang === "zh-CN" && (
                                            <select
                                                className="event-list-select"
                                                value={query}
                                                onChange={handleCountryChange}
                                            >
                                                <option value="all">{t("admin.event-list.all")}</option>
                                                {arryEventCountriesCn.map((countryCn, index) => (
                                                    <option key={index} value={countryCn}>
                                                        {countryCn}
                                                    </option>
                                                ))}
                                            </select>
                                        )}
                                    </div>
                                </div>
                                {/* <div className="event-list-select-item">
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <span>
                                    <Tooltip title={t("admin.event-list.search")} arrow placement="left-start">
                                        <SearchIcon sx={{ color: "grey", marginRight: "8px" }} />
                                    </Tooltip>
                                </span>
                                <Input
                                    className="event-list-search-bar"
                                    placeholder={t("admin.event-list.search")}
                                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                                />
                            </div>
                        </div> */}
                            </div>

                            <>
                                {filteredEvents ? (
                                    currentRows.map((event, idx) => (
                                        <div key={idx} className="event-list-items-container">
                                            <Card
                                                variant="soft"
                                                sx={{
                                                    width: "90%",
                                                    marginBottom: "3px",
                                                    border: "1px solid lightgrey",
                                                }}
                                            >
                                                <div className="event-item-top-wrapper">
                                                    <div className="event-date-location-wrapper">
                                                        <div className="event-date">
                                                            <span>
                                                                <Tooltip
                                                                    title={t("admin.event-list.event-date")}
                                                                    arrow
                                                                    placement="left-start"
                                                                >
                                                                    <DateRangeIcon
                                                                        fontSize="small"
                                                                        className="event-location-item"
                                                                    />
                                                                </Tooltip>
                                                            </span>
                                                            &nbsp;
                                                            <span>{moment.utc(event.date).format("MM/DD/YYYY")}</span>
                                                        </div>
                                                        <div className="even-location">
                                                            <span>
                                                                <Tooltip
                                                                    title={t("admin.event-list.event-location")}
                                                                    arrow
                                                                    placement="left-start"
                                                                >
                                                                    <LocationOnIcon
                                                                        fontSize="small"
                                                                        className="event-location-item"
                                                                    />
                                                                </Tooltip>
                                                            </span>

                                                            {lang === "en" ? (
                                                                <span className="event-location-item">
                                                                    @ {event?.city} - {event.country_en?.label}
                                                                </span>
                                                            ) : (
                                                                <span></span>
                                                            )}

                                                            {lang === "zh-TW" ? (
                                                                <span className="event-location-item">
                                                                    @ {event?.city_tw} - {event.country_tw?.label}
                                                                </span>
                                                            ) : (
                                                                <span></span>
                                                            )}
                                                            {lang === "zh-CN" ? (
                                                                <span className="event-location-item">
                                                                    @ {event?.city_cn} - {event.country_cn?.label}
                                                                </span>
                                                            ) : (
                                                                <span></span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="event-explore-more-icon">
                                                        <Tooltip
                                                            title={t("admin.event-list.explore-more")}
                                                            placement="top"
                                                        >
                                                            <IconButton
                                                                aria-label="Open in new tab"
                                                                component="a"
                                                                href={event.link ? event.link : "#"}
                                                                target="_blank"
                                                                sx={{ color: "grey" }}
                                                            >
                                                                <OpenInNew />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                                <div>
                                                    <AspectRatio minHeight="200px" maxHeight="350px">
                                                        <img
                                                            src={event.photo_urls?.[0]}
                                                            loading="lazy"
                                                            alt=""
                                                            style={{ objectFit: "cover" }}
                                                        />
                                                    </AspectRatio>
                                                </div>
                                                {lang === "en" && (
                                                    <CardContent orientation="vertical">
                                                        <>
                                                            <Typography
                                                                gutterBottom
                                                                // variant="subtitle1"
                                                                component="div"
                                                                style={{ color: "tomato" }}
                                                            >
                                                                <a
                                                                    title={event.name}
                                                                    href={event.link ? event.link : "#"}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                >
                                                                    <span style={{ color: "teal" }}>{event.name}</span>
                                                                </a>
                                                            </Typography>
                                                            <Typography variant="body2" style={{ color: "grey" }}>
                                                                {event.desc ? event.desc : null}
                                                            </Typography>

                                                            <div className="event-item">
                                                                <a
                                                                    title={event.org?.label}
                                                                    href={event.org.value?.orgURL}
                                                                    style={{ cursor: "pointer" }}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    alt={event.org?.label}
                                                                >
                                                                    <div className="event-org-logo-name-wrapper">
                                                                        <div>
                                                                            {event.org.value?.orgURL ? (
                                                                                <div>
                                                                                    <img
                                                                                        className="org-logo"
                                                                                        src={event.org.value?.logoURL}
                                                                                        alt="Org Logo"
                                                                                    />
                                                                                </div>
                                                                            ) : (
                                                                                <div className="no-org-logo">
                                                                                    {event.org.value?.name[0]}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                        <div>{event.org.value?.name}</div>
                                                                    </div>
                                                                </a>
                                                                {/* <a
                                                    title={event.org?.label}
                                                    href={event.org.value?.orgURL}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <span style={{ color: "teal" }}>
                                                       
                                                        <b> {event.org.label} </b>
                                                    </span>
                                                </a> */}
                                                            </div>

                                                            {/* <Button
                                                    variant="solid"
                                                    size="sm"
                                                    href={event.link}
                                                    color="primary"
                                                    aria-label={event.name}
                                                    sx={{ ml: "auto", alignSelf: "center", fontWeight: 500 }}
                                                >
                                                    Explore{" "}
                                                </Button> */}
                                                        </>
                                                    </CardContent>
                                                )}
                                                {lang === "zh-TW" && (
                                                    <CardContent orientation="vertical">
                                                        <>
                                                            <Typography
                                                                gutterBottom
                                                                // variant="subtitle1"
                                                                component="div"
                                                                style={{ color: "tomato" }}
                                                            >
                                                                <a
                                                                    title={event.name_tw}
                                                                    href={event.link ? event.link : "#"}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                >
                                                                    <span style={{ color: "teal" }}>
                                                                        {event.name_tw}
                                                                    </span>
                                                                </a>
                                                            </Typography>
                                                            <Typography variant="body2" style={{ color: "grey" }}>
                                                                {event.desc_tw ? event.desc_tw : null}
                                                            </Typography>

                                                            <div className="event-item">
                                                                <a
                                                                    title={event.org.value?.nameTw}
                                                                    href={event.org.value?.orgURL}
                                                                    style={{ cursor: "pointer" }}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    alt={event.org.value?.nameTw}
                                                                >
                                                                    <div className="event-org-logo-name-wrapper">
                                                                        {event.org.value?.orgURL ? (
                                                                            <div>
                                                                                <img
                                                                                    className="org-logo"
                                                                                    src={event.org.value?.logoURL}
                                                                                    alt="Org Logo"
                                                                                />
                                                                            </div>
                                                                        ) : (
                                                                            <div className="no-org-logo">
                                                                                {event.org.value?.nameTw[0]}
                                                                            </div>
                                                                        )}

                                                                        <div>{event.org.value?.nameTw}</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </>
                                                    </CardContent>
                                                )}
                                                {lang === "zh-CN" && (
                                                    <CardContent orientation="vertical">
                                                        <>
                                                            <Typography
                                                                gutterBottom
                                                                // variant="subtitle1"
                                                                component="div"
                                                                style={{ color: "tomato" }}
                                                            >
                                                                <a
                                                                    title={event.name_cn}
                                                                    href={event.link ? event.link : "#"}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                >
                                                                    <span style={{ color: "teal" }}>
                                                                        {event.name_cn}
                                                                    </span>
                                                                </a>
                                                            </Typography>
                                                            <Typography variant="body2" style={{ color: "grey" }}>
                                                                {event.desc_cn ? event.desc_cn : null}
                                                            </Typography>

                                                            <div className="event-item">
                                                                <a
                                                                    title={event.org.value?.nameCn}
                                                                    href={event.org.value?.orgURL}
                                                                    style={{ cursor: "pointer" }}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    alt={event.org.value?.nameCn}
                                                                >
                                                                    <div className="event-org-logo-name-wrapper">
                                                                        <div>
                                                                            {event.org.value?.orgURL ? (
                                                                                <div>
                                                                                    <img
                                                                                        className="org-logo"
                                                                                        src={event.org.value?.logoURL}
                                                                                        alt="Org Logo"
                                                                                    />
                                                                                </div>
                                                                            ) : (
                                                                                <div className="no-org-logo">
                                                                                    {event.org.value?.nameCn[0]}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                        <div>{event.org.value?.nameCn}</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </>
                                                    </CardContent>
                                                )}
                                                <div className="event-list-icon">
                                                    <span>
                                                        <Tooltip
                                                            title={t("admin.notice-list.edit")}
                                                            arrow
                                                            placement="left-start"
                                                        >
                                                            <EditIcon
                                                                fontSize="small"
                                                                style={{ color: "grey" }}
                                                                onClick={() => handleEditRecord(idx)}
                                                            />
                                                        </Tooltip>
                                                    </span>
                                                    <span>
                                                        <Tooltip
                                                            title={t("general.upload")}
                                                            arrow
                                                            placement="top-start"
                                                        >
                                                            <CloudUploadIcon
                                                                fontSize="small"
                                                                style={{ color: "grey" }}
                                                                onClick={() => handleUploadFiles(idx)}
                                                            />
                                                        </Tooltip>
                                                    </span>

                                                    <span>
                                                        <Tooltip
                                                            title={t("admin.event-list.view-images")}
                                                            arrow
                                                            placement="top"
                                                        >
                                                            <ImageSearchIcon
                                                                fontSize="small"
                                                                style={{ color: "grey" }}
                                                                onClick={() => handleViewImages(idx)}
                                                            />
                                                        </Tooltip>
                                                    </span>

                                                    <span>
                                                        <Tooltip
                                                            title={t("admin.notice-list.delete")}
                                                            arrow
                                                            placement="right-start"
                                                        >
                                                            <DeleteOutlineIcon
                                                                fontSize="small"
                                                                onClick={() => handleDelete(event.id)}
                                                                style={{ color: "gray" }}
                                                            />
                                                        </Tooltip>
                                                    </span>
                                                </div>
                                            </Card>
                                            <Modal
                                                isOpen={modalEdit}
                                                toggle={toggleEdit}
                                                backdrop="static"
                                                size="lg"
                                                centered={true}
                                                style={{ height: "auto" }}
                                            >
                                                <ModalHeader toggle={toggleEdit} close={closeBtnEdit}>
                                                    <div
                                                        className="page-primary-title"
                                                        style={{ marginBottom: "0", borderBottom: "0" }}
                                                    >
                                                        {t("admin.referee-list.edit")}
                                                    </div>
                                                </ModalHeader>
                                                <ModalBody>
                                                    <EditEventSB toggle={toggleEdit} event={currentRecord} />
                                                </ModalBody>
                                            </Modal>

                                            <Modal
                                                isOpen={modalUpload}
                                                toggle={toggleUpload}
                                                backdrop="static"
                                                size="lg"
                                                centered={true}
                                            >
                                                <ModalHeader toggle={toggleUpload} close={closeBtnUpload}>
                                                    <div
                                                        className="page-primary-title"
                                                        style={{ marginBottom: "0", borderBottom: "0" }}
                                                    >
                                                        {t("admin.event-list.upload")}
                                                    </div>
                                                </ModalHeader>
                                                <ModalBody>
                                                    <UploadFilesSB toggle={toggleUpload} event={currentRecord} />
                                                </ModalBody>
                                            </Modal>

                                            <Modal
                                                isOpen={modalViewImages}
                                                toggle={toggleViewImages}
                                                backdrop="static"
                                                size="lg"
                                                centered={true}
                                            >
                                                <ModalHeader
                                                    toggle={toggleViewImages}
                                                    close={closeBtnViewImages}
                                                ></ModalHeader>
                                                <ModalBody>
                                                    <ViewMediaSB toggle={toggleViewImages} event={currentRecord} />
                                                </ModalBody>
                                            </Modal>
                                        </div>
                                    ))
                                ) : (
                                    <CircularProgress />
                                )}
                            </>

                            <Pagination
                                documents={filteredEvents}
                                totalRows={filteredEvents && filteredEvents.length}
                                setRowsPerPage={setRowsPerPage}
                                rowsPerPage={rowsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                                firstRowIndex={firstRowIndex}
                                lastRowIndex={lastRowIndex}
                            />
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
}
