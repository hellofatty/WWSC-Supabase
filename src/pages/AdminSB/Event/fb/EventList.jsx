/** @format */

import "./EventList.css";

import { useTranslation } from "react-i18next";
import { useState } from "react";

// --------import Firebase hooks------------
import { useCollection } from "../../../../hooks/useCollection";
import { useFirestore } from "../../../../hooks/useFirestore";

import AdminSidebarSB from "../../../../components/AdminSidebar/AdminSidebarSB";
import Pagination from "../../../../components/Pagination/Pagination";

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
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent";
import UploadFiles from "./UploadFiles";
import ViewMedia from "./ViewMedia";

export default function EventList() {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;

    // Read events document from Firebase

    const { documents: eventList, error } = useCollection("events", ["date", "!=", "null"], ["date", "desc"]);

    const { deleteDocument } = useFirestore("events");

    const [query, setQuery] = useState("all");

    const handleYearChange = (event) => {
        setQuery(event.target.value);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;

    // Create years filter for events

    let arryEventsYears = [];

    for (let i = 0; i < eventList?.length; i++) {
        arryEventsYears.push(eventList[i].year);
    }

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    const arryEventsYearsNoDup = removeDuplicates(arryEventsYears);

    console.log(arryEventsYearsNoDup);

    // Create country filter for events

    let arryEventsCountry = [];

    for (let i = 0; i < eventList?.length; i++) {
        arryEventsCountry.push(eventList[i].country?.label);
    }

    const arryEventCountriesNoDup = removeDuplicates(arryEventsCountry);

    const indexHK = arryEventCountriesNoDup?.findIndex((country) => (country = "Hong Kong SAR China"));
    console.log(indexHK);

    arryEventCountriesNoDup[indexHK] = "Hong Kong";
    console.log(arryEventCountriesNoDup.reverse());

    // Create country filter for events 繁體中文
    let arryEventsCountryTw = [];

    for (let i = 0; i < eventList?.length; i++) {
        arryEventsCountryTw.push(eventList[i].countryTw?.label);
    }

    const arryEventCountriesTwNoDup = removeDuplicates(arryEventsCountryTw);
    const indexHKTw = arryEventCountriesTwNoDup?.findIndex((country) => (country = "中國香港特別行政區"));
    console.log(indexHKTw);

    arryEventCountriesTwNoDup[indexHK] = "中國香港";

    console.log(arryEventCountriesTwNoDup.reverse());

    // Create country filter array for events 简体中文

    let arryEventsCountryCn = [];

    for (let i = 0; i < eventList?.length; i++) {
        arryEventsCountryCn.push(eventList[i].countryCn?.label);
    }

    const arryEventCountriesCnNoDup = removeDuplicates(arryEventsCountryCn);

    const indexHKCn = arryEventCountriesCnNoDup?.findIndex((country) => (country = "中国香港特别行政区"));
    console.log(indexHKCn);

    arryEventCountriesCnNoDup[indexHK] = "中国香港";

    console.log(arryEventCountriesCnNoDup.reverse());

    const handleCountryChange = (event) => {
        setQuery(event.target.value);
    };

    const eventListByFilter = eventList
        ? eventList?.filter((event) => {
              return query.toLowerCase() === "all"
                  ? eventList
                  : event?.year.includes(query) ||
                        event.country?.label.includes(query) ||
                        event.countryTw?.label.includes(query) ||
                        event.countryCn?.label.includes(query);
          })
        : null;

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

    const currentRows = eventListByFilter ? eventListByFilter.slice(firstRowIndex, lastRowIndex) : null;

    if (error) {
        return <div className="error">{error}</div>;
    }
    if (!eventList) {
        return <div className="loading">{t("general.loading")}</div>;
    }

    return (
        <div className="referee-home">
            <AdminSidebarSB />
            <Container maxWidth="md" sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
                <div className="event-content-container">
                    {error && <p>{error}</p>}
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
                    <>
                        <Modal
                            isOpen={modalAdd}
                            toggle={toggleAdd}
                            backdrop="static"
                            size="lg"
                            centered={true}
                            style={{ height: "auto" }}
                        >
                            <ModalHeader toggle={toggleAdd} close={closeBtn}>
                                <div className="page-primary-title" style={{ marginBottom: "0", borderBottom: "0" }}>
                                    {t("admin.event-list.add-new-event-title")}
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <AddEvent toggle={toggleAdd} />
                            </ModalBody>
                        </Modal>
                    </>
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
                                    {arryEventsYearsNoDup.map((year, index) => (
                                        <option key={index} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="event-list-select-item">
                                <span>
                                    <Tooltip title={t("admin.event-list.select-location")} arrow placement="top">
                                        <PinDropIcon sx={{ color: "grey", marginRight: "3px", marginLeft: "3px" }} />
                                    </Tooltip>
                                </span>

                                {lang === "en" && (
                                    <select className="event-list-select " value={query} onChange={handleCountryChange}>
                                        <option value="all">{t("admin.event-list.all")}</option>
                                        {arryEventCountriesNoDup.map((countryEng, index) => (
                                            <option key={index} value={countryEng}>
                                                {countryEng}
                                            </option>
                                        ))}
                                    </select>
                                )}
                                {lang === "zh-TW" && (
                                    <select className="event-list-select " value={query} onChange={handleCountryChange}>
                                        <option value="all">{t("admin.event-list.all")}</option>
                                        {arryEventCountriesTwNoDup.map((countryTw, index) => (
                                            <option key={index} value={countryTw}>
                                                {countryTw}
                                            </option>
                                        ))}
                                    </select>
                                )}
                                {lang === "zh-CN" && (
                                    <select className="event-list-select" value={query} onChange={handleCountryChange}>
                                        <option value="all">{t("admin.event-list.all")}</option>
                                        {arryEventCountriesCnNoDup.map((countryCn, index) => (
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
                        {eventList ? (
                            currentRows.map((event, idx) => (
                                <div key={idx} className="event-list-items-container">
                                    <Card
                                        variant="soft"
                                        sx={{ width: "90%", marginBottom: "3px", border: "1px solid lightgrey" }}
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
                                                    <span>{moment.utc(event.date.toDate()).format("MM/DD/YYYY")}</span>
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
                                                            @ {event?.city} - {event.country?.label}
                                                        </span>
                                                    ) : (
                                                        <span></span>
                                                    )}

                                                    {lang === "zh-TW" ? (
                                                        <span className="event-location-item">
                                                            @ {event?.cityTw} - {event.countryTw?.label}
                                                        </span>
                                                    ) : (
                                                        <span></span>
                                                    )}
                                                    {lang === "zh-CN" ? (
                                                        <span className="event-location-item">
                                                            @ {event?.cityCn} - {event.countryCn?.label}
                                                        </span>
                                                    ) : (
                                                        <span></span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="event-explore-more-icon">
                                                <Tooltip title={t("admin.event-list.explore-more")} placement="top">
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
                                                    src={event.photoURLs?.[0]}
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
                                                            title={event.nameTw}
                                                            href={event.link ? event.link : "#"}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span style={{ color: "teal" }}>{event.nameTw}</span>
                                                        </a>
                                                    </Typography>
                                                    <Typography variant="body2" style={{ color: "grey" }}>
                                                        {event.descTw ? event.descTw : null}
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
                                                            title={event.nameCn}
                                                            href={event.link ? event.link : "#"}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span style={{ color: "teal" }}>{event.nameCn}</span>
                                                        </a>
                                                    </Typography>
                                                    <Typography variant="body2" style={{ color: "grey" }}>
                                                        {event.descCn ? event.descCn : null}
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
                                                <Tooltip title={t("general.upload")} arrow placement="top-start">
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
                                                        onClick={() => deleteDocument(event.id)}
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
                                            <EditEvent toggle={toggleEdit} event={currentRecord} />
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
                                            <UploadFiles toggle={toggleUpload} event={currentRecord} />
                                        </ModalBody>
                                    </Modal>

                                    <Modal
                                        isOpen={modalViewImages}
                                        toggle={toggleViewImages}
                                        backdrop="static"
                                        size="lg"
                                        centered={true}
                                    >
                                        <ModalHeader toggle={toggleViewImages} close={closeBtnViewImages}></ModalHeader>
                                        <ModalBody>
                                            <ViewMedia toggle={toggleViewImages} event={currentRecord} />
                                        </ModalBody>
                                    </Modal>
                                </div>
                            ))
                        ) : (
                            <CircularProgress />
                        )}
                    </>

                    <Pagination
                        documents={eventListByFilter}
                        totalRows={eventListByFilter && eventListByFilter.length}
                        setRowsPerPage={setRowsPerPage}
                        rowsPerPage={rowsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        firstRowIndex={firstRowIndex}
                        lastRowIndex={lastRowIndex}
                    />
                </div>
            </Container>
        </div>
    );
}
