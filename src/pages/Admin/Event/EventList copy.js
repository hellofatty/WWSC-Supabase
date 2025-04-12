/** @format */

import "./EventList.css";
import { useCollection } from "../../../hooks/useCollection";

import AdminSidebar from "../../../components/AdminSidebar/AdminSidebar";
import Pagination from "../../../components/Pagination/Pagination";

// ---------Material UI-------
// import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditIcon from "@mui/icons-material/Edit";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
// import TableChartIcon from "@mui/icons-material/TableChart";

// import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";

import { useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import moment from "moment";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Paper from "@mui/material/Paper";

import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent";
import UploadFiles from "./UploadFiles";

export default function EventList() {
    // All notices

    const { t, i18n } = useTranslation();

    const lang = i18n.language;

    const { documents: eventList, error } = useCollection("events");

    const { deleteDocument } = useFirestore("events");

    const [query, setQuery] = useState("all");

    const handleYearChange = (event) => {
        setQuery(event.target.value);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;

    let arryEventsYears = [];

    for (let i = 0; i < eventList?.length; i++) {
        arryEventsYears.push(eventList[i].year);
    }
    // const arryYears = ["2023", "2024", "2025", "2023", "2024", "2023"]

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    const arryEventsYearsNoDup = removeDuplicates(arryEventsYears);

    console.log(arryEventsYearsNoDup);

    const eventListByFilter = eventList
        ? eventList?.filter((event) => {
              return query.toLowerCase() === "all" ? eventList : event.year.toLowerCase().includes(query);
          })
        : null;

    // ------Open Add Modal-------

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

    const currentRows = eventListByFilter ? eventListByFilter.slice(firstRowIndex, lastRowIndex) : null;

    // console.log(events?[0].year);

    return (
        <div className="referee-home">
            <AdminSidebar />
            <div className="notice-list-container">
                {error && <p>{error}</p>}
                <div className="notice-list-title-wrap">
                    <div className="page-primary-title" style={{ marginLeft: "16px" }}>
                        {t("admin.event-list.title")}
                    </div>
                    <Button variant="contained" startIcon={<PostAddOutlinedIcon />} onClick={toggleAdd}>
                        {t("admin.event-list.add-new-event-btn")}
                    </Button>
                </div>
                <div className="notice-list-filter-bar">
                    <div className="notice-list-select-container">
                        <span style={{ color: "grey" }}>{t("admin.event-list.year")}</span>:
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
                                <span className="grade-item">{t("admin.event-list.all")}</span>
                            </option>
                            {arryEventsYearsNoDup.map((year) => (
                                <option key={year} value={year}>
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
                </div>

                <div className="event-list-card-container">
                    <div>
                        {eventList ? (
                            currentRows.map((event, idx) => (
                                <div key={idx}>
                                    <Paper elevation={3} >
                                        <div className="event-list-card">
                                            <div className="event-list-info">
                                                <div
                                                    className="event-date"
                                                    style={{ color: "teal", fontSize: "0.8rem" }}
                                                >
                                                    <span>
                                                        <Tooltip
                                                            title={t("admin.event-list.event-date")}
                                                            arrow
                                                            placement="left-start"
                                                        >
                                                            <DateRangeIcon fontSize="small" style={{ color: "gray" }} />
                                                        </Tooltip>
                                                    </span>
                                                    &nbsp;
                                                    <span style={{ color: "gray" }}>
                                                        {moment.utc(event.date.toDate()).format("MM/DD/YYYY")}
                                                    </span>
                                                    <br />
                                                    <span>
                                                        <Tooltip
                                                            title={t("admin.event-list.event-location")}
                                                            arrow
                                                            placement="left-start"
                                                        >
                                                            <LocationOnIcon
                                                                fontSize="small"
                                                                style={{ color: "gray" }}
                                                            />
                                                        </Tooltip>
                                                    </span>
                                                    &nbsp;
                                                    {lang === "en" && (event.country || event.city) ? (
                                                        <span style={{ color: "grey" }}>
                                                            @ {event.city} - {event.country.label}
                                                        </span>
                                                    ) : (
                                                        <span style={{ color: "grey" }}></span>
                                                    )}
                                                    {lang === "zh-TW" && (event.countryTw || event.cityTw) ? (
                                                        <span style={{ color: "grey" }}>
                                                            @ {event.cityTw} - {event.countryTw.label}
                                                        </span>
                                                    ) : (
                                                        <span style={{ color: "grey" }}></span>
                                                    )}
                                                    {lang === "zh-CN" && (event.countryCn || event.cityCn) ? (
                                                        <span style={{ color: "grey" }}>
                                                            @ {event.cityCn} - {event.countryCn.label}
                                                        </span>
                                                    ) : (
                                                        <span style={{ color: "grey" }}></span>
                                                    )}
                                                </div>
                                                {lang === "en" && (
                                                    <>
                                                        <a
                                                            title={event.name}
                                                            href={event.link}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <h5 style={{ marginTop: "12px", marginBottom: "12px" }}>
                                                                {event.name}
                                                            </h5>
                                                        </a>
                                                        <p>{event.desc}</p>
                                                        <div>
                                                            <a
                                                                title={event.org.label}
                                                                href={event.org.value?.orgURL}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                            >
                                                                <p style={{ textAlign: "right" }}>
                                                                    (Courtesy of
                                                                    <b> {event.org.label} </b>)
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </>
                                                )}
                                                {lang === "zh-TW" && (
                                                    <>
                                                        <a
                                                            title={event.nameTw}
                                                            href={event.link}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <h5 style={{ marginTop: "12px", marginBottom: "12px" }}>
                                                                {event.nameTw}
                                                            </h5>
                                                        </a>
                                                        <p>{event.descTw}</p>
                                                        <div>
                                                            {" "}
                                                            <a
                                                                title={event.org?.value?.nameTw}
                                                                href={event.org?.value?.orgURL}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                            >
                                                                <p style={{ textAlign: "right" }}>
                                                                    (由<b>{event.org?.value?.nameTw}</b>
                                                                    提供)
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </>
                                                )}
                                                {lang === "zh-CN" && (
                                                    <>
                                                        <a
                                                            title={event.nameCn}
                                                            href={event.link}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <h5 style={{ marginTop: "12px", marginBottom: "12px" }}>
                                                                {event.nameCn}
                                                            </h5>
                                                        </a>
                                                        <p>{event.descCn}</p>
                                                        <div>
                                                            <a
                                                                title={event.org?.value?.nameCn}
                                                                href={event.org?.value?.orgURL}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                            >
                                                                <p style={{ textAlign: "right" }}>
                                                                    (由<b>{event.org?.value?.nameCn}</b>
                                                                    提供)
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </>
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
                                            </div>
                                            <br />
                                            <br />
                                        </div>
                                    </Paper>
                                    <>
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
                                    </>
                                    <>
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
                                    </>
                                </div>
                            ))
                        ) : (
                            <p>Loading events...</p>
                        )}
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
                </div>
            </div>
        </div>
    );
}
