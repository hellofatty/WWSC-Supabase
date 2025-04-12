/** @format */

import "./TrainingRecordsList.css";

import { useTranslation } from "react-i18next";
import { useState } from "react";

// ==========Firebase======================
import { useCollection } from "../../../../hooks/useCollection";
import { useDocument } from "../../../../hooks/useDocument";
import { useFirestore } from "../../../../hooks/useFirestore";

// ==========Reactstrap======================
import { Modal, ModalHeader, ModalBody } from "reactstrap";

// ==========Material UI======================
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
// import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import ClassIcon from "@mui/icons-material/Class";
import EventIcon from "@mui/icons-material/Event";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
// import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
// import TableChartIcon from "@mui/icons-material/TableChart";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
// import OnDeviceTrainingIcon from "@mui/icons-material/OnDeviceTraining";
// import { styled } from "@mui/material/styles";
// import Switch from "@mui/material/Switch";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";

import moment from "moment";

// ==========Import Components======================
import Pagination from "../../../../components/Pagination/Pagination";
import AddTrainingRecord from "./AddTrainingRecord";
import EditTrainingRecord from "./EditTrainingRecord";
import ViewUserInfo from "../RefereeTrainingRecords/ViewUserInfo";
import UploadTrainingFiles from "./UploadTrainingFiles";
import DownloadTrainingFiles from "./DownloadTrainingFiles";

// ==========Create TrainingRecordsList component======================
export default function TrainingRecordsList({ uid }) {
    // dayjs.extend(utc);
    // dayjs.extend(timezone);
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;

    const { documents: trainingRecords } = useCollection(`users/${uid}/records`, ["uid", "==", uid], ["date", "desc"]);
    const { document: referee } = useDocument("users", uid);

    const { deleteDocument } = useFirestore(`users/${uid}/records`);

    const isSmallScreen = useMediaQuery("(max-width:900px)");

    // ------Open Add Modal-------
    const [modalAdd, setModalAdd] = useState(false);
    const toggleAdd = () => setModalAdd(!modalAdd);
    const closeBtnAdd = (
        <Button onClick={toggleAdd}>
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

    // ------Open View Instructor Modal-------
    const [currentRecord, setCurrentRecord] = useState(null);

    const [modalUser, setModalUser] = useState(false);
    const toggleUser = () => setModalUser(!modalUser);

    const handleViewInstructor = (idx) => {
        setCurrentRecord(currentRows[idx]);
        toggleUser();
    };

    const closeBtnUser = (
        <Button onClick={toggleUser}>
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

    // ------Open Table Edit Modal-------

    const [modalTableEdit, setModalTableEdit] = useState(false);

    const toggleTableEdit = () => setModalTableEdit(!modalTableEdit);

    const handleTableEditRecord = (idx) => {
        setCurrentRecord(currentRows[idx]);
        toggleTableEdit();
    };

    const closeBtnTableEdit = (
        <Button onClick={toggleTableEdit}>
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

    // ------Open CardEdit Modal-------

    const [modalCardEdit, setModalCardEdit] = useState(false);

    const toggleCardEdit = () => setModalCardEdit(!modalCardEdit);

    const handleCardEditRecord = (idx) => {
        setCurrentRecord(currentRows[idx]);
        toggleCardEdit();
    };

    const closeBtnCardEdit = (
        <Button onClick={toggleCardEdit}>
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

    // ------Open DownloadFiles Modal-------
    const [modalDownload, setModalDownload] = useState(false);
    const toggleDownload = () => setModalDownload(!modalDownload);

    const handleDownloadFiles = (idx) => {
        setCurrentRecord(currentRows[idx]);
        toggleDownload();
    };

    const closeBtnDownload = (
        <Button onClick={toggleDownload}>
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

    // ------Set up Filter by Year-------
    const [query, setQuery] = useState("all");

    const handleYearChange = (record) => {
        setQuery(record.target.value);
    };

    let arryRecordsYears = [];

    for (let i = 0; i < trainingRecords?.length; i++) {
        arryRecordsYears.push(trainingRecords[i].year);
    }

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    const arryRecordsYearsNoDup = removeDuplicates(arryRecordsYears);
    console.log(arryRecordsYearsNoDup);

    const listByFilter = trainingRecords?.filter((record) => {
        return query.toLowerCase() === "all" ? trainingRecords : record.year.toLowerCase().includes(query);
    });

    // ------Set up Pagnation-------

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;

    const currentRows = listByFilter ? listByFilter.slice(firstRowIndex, lastRowIndex) : null;

    // const [filter, setFilter] = useState("all");

    const { document, error } = useDocument("users", uid);
    if (error) {
        return <div className="error">{error}</div>;
    }
    if (!document) {
        return <div className="loading">{t("general.loading")}</div>;
    }

    return (
        <div className="record-list-container" style={{ width: "100%", marginRight: "0" }}>
            {error && <p>{error}</p>}
            <div className="record-list-top">
                <div className="page-primary-title" style={{ marginLeft: "6px" }}>
                    <div className="dashboard-title-wrapper">
                        <ClassIcon className="sidebar-admin-icon" style={{ fontSize: "30px" }} />
                        {t("referee.record.training-title")}
                    </div>
                </div>
                <div className="record-add-btn">
                    <Tooltip title={t("referee.record.addRecordbtn")} arrow placement="right-start">
                       
                        <Fab size="small" color="primary" aria-label="add" sx={{ marginLeft: "12px" }}>
                            <AddIcon onClick={toggleAdd} />
                        </Fab>
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
                        <ModalHeader toggle={toggleAdd} close={closeBtnAdd}>
                            <div
                                className="page-primary-title"
                                style={{ marginLeft: "6px", borderBottom: "0", marginBottom: "0" }}
                            >
                                {t("referee.record.inputRecord")}
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <AddTrainingRecord uid={uid} toggle={toggleAdd} />
                        </ModalBody>
                    </Modal>
                </>
            </div>

            <div className="record-list-filter-bar">
                <div className="record-list-select-container">
                   
                    <span>
                        <Tooltip title={t("admin.event-list.select-year")} arrow placement="top">
                            <EventIcon fontSize="small" sx={{ color: "grey" }} />
                        </Tooltip>
                    </span>
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
                            marginLeft: "5px",
                            borderRadius: "5px",
                        }}
                        value={query}
                        onChange={handleYearChange}
                    >
                        <option value="all">{t("referee.record.all-records")}</option>
                        {arryRecordsYearsNoDup.map((year, idx) => (
                            <option key={idx} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                    {/* <div className="searchbar">
                        <Tooltip title={t("admin.referee-list.search-rit")}>
                            <SearchIcon className="searchIcon" />
                        </Tooltip>
                        <input
                            placeholder={t("admin.referee-list.search-rit")}
                            className="searchInput"
                            onChange={(e) => setQuery(e.target.value.toLowerCase())}
                        />
                    </div> */}
                </div>

                {/* <div className="record-list-layout-icon">
                    <span style={{ color: "grey", fontSize: "0.8rem" }}>{t("admin.referee-list.switch-layout")}:</span>
                    <Tooltip title="Table Layout" placement="top" arrow>
                        <TableChartIcon style={{ color: "grey" }} />
                    </Tooltip>
                    <span>
                        <Switch
                            checked={toggle}
                            size="small"
                            onChange={(e) => setToggle(e.target.checked)}
                            inputProps={{ "aria-label": "controlled" }}
                        />
                    </span>
                    <Tooltip title="Card Layout" placement="bottom" arrow>
                        <BadgeOutlinedIcon style={{ color: "grey" }} />
                    </Tooltip>
                </div> */}
            </div>

            {/* ==========Referee Training Record List (Table Layout)=================*/}
            {!isSmallScreen && (
                <>
                    <div className="record-list-table-container">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 350 }} size="small" aria-label="simple table">
                                <TableHead>
                                    <TableRow style={{ backgroundColor: "#0f597c" }}>
                                        <TableCell
                                            align="center"
                                            style={{
                                                color: "white",
                                                whiteSpace: "nowrap",
                                                width: "70px",
                                                fontSize: "0.8rem",
                                            }}
                                        >
                                            {t("referee.record.date")}
                                        </TableCell>

                                        <TableCell
                                            align="center"
                                            style={{
                                                color: "white",
                                                whiteSpace: "nowrap",
                                                width: "200px",
                                                fontSize: "0.8rem",
                                            }}
                                        >
                                            {t("referee.record.course")}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{
                                                color: "white",
                                                whiteSpace: "nowrap",
                                                width: "300px",
                                                fontSize: "0.8rem",
                                            }}
                                        >
                                            {t("referee.record.auth-training-organizations")}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{
                                                color: "white",
                                                whiteSpace: "nowrap",
                                                width: "300px",
                                                fontSize: "0.8rem",
                                            }}
                                        >
                                            {t("referee.record.instructor")}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{
                                                color: "white",
                                                whiteSpace: "nowrap",
                                                width: "110px",
                                                fontSize: "0.8rem",
                                            }}
                                        >
                                            {t("referee.record.location")}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{
                                                color: "white",
                                                whiteSpace: "nowrap",
                                                width: "120px",
                                                fontSize: "0.8rem",
                                            }}
                                        >
                                            {t("referee.record.action")}
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {trainingRecords
                                        ? currentRows
                                              // .filter((record) => {
                                              //     return query.toLowerCase() === ""
                                              //         ? currentRows
                                              //         : record.year.toLowerCase().includes(query) ||
                                              //               record.month.toLowerCase().includes(query);
                                              // })
                                              .map((record, idx) => (
                                                  <TableRow
                                                      key={idx}
                                                      hover={true}
                                                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                  >
                                                      <TableCell
                                                          component="th"
                                                          scope="row"
                                                          align="center"
                                                          style={{ fontSize: "0.75rem" }}
                                                      >
                                                          {moment.utc(record.date?.toDate()).format("MM/DD/YYYY")}
                                                      </TableCell>
                                                      {record.course === "G3 Course" && (
                                                          <TableCell align="center" style={{ fontSize: "0.75rem" }}>
                                                              {t("referee.class.courseG3")}
                                                          </TableCell>
                                                      )}
                                                      {record.course === "G4 Course" && (
                                                          <TableCell align="center" style={{ fontSize: "0.75rem" }}>
                                                              {t("referee.class.courseG4")}
                                                          </TableCell>
                                                      )}

                                                      {lang === "en" && (
                                                          <TableCell align="left">
                                                              <div className="record-table-wrapper">
                                                                  {record.organization.value?.logoURL ? (
                                                                      <img
                                                                          className="org-logo"
                                                                          src={record.organization.value?.logoURL}
                                                                          alt="Org Logo"
                                                                      />
                                                                  ) : (
                                                                      <span className="no-org-logo">
                                                                          {record.organization.value?.name[0]}
                                                                      </span>
                                                                  )}
                                                                  <span style={{ fontSize: "0.75rem" }}>
                                                                      {record.organization.value?.name}
                                                                  </span>
                                                              </div>
                                                          </TableCell>
                                                      )}
                                                      {lang === "zh-TW" && (
                                                          <TableCell align="left">
                                                              <div className="record-table-wrapper">
                                                                  {record.organization.value?.logoURL ? (
                                                                      <img
                                                                          className="org-logo"
                                                                          src={record.organization.value?.logoURL}
                                                                          alt="Org Logo"
                                                                      />
                                                                  ) : (
                                                                      <span className="no-org-logo">
                                                                          {record.organization.value?.name[0]}
                                                                      </span>
                                                                  )}

                                                                  <span style={{ fontSize: "0.75rem" }}>
                                                                      {record.organization.value?.nameTw}
                                                                  </span>
                                                              </div>
                                                          </TableCell>
                                                      )}
                                                      {lang === "zh-CN" && (
                                                          <TableCell align="left">
                                                              <div className="record-table-wrapper">
                                                                  {record.organization.value?.logoURL ? (
                                                                      <img
                                                                          className="org-logo"
                                                                          src={record.organization.value?.logoURL}
                                                                          alt="Org Logo"
                                                                      />
                                                                  ) : (
                                                                      <span className="no-org-logo">
                                                                          {record.organization.value?.name[0]}
                                                                      </span>
                                                                  )}

                                                                  <span style={{ fontSize: "0.75rem" }}>
                                                                      {record.organization.value?.nameCn}
                                                                  </span>
                                                              </div>
                                                          </TableCell>
                                                      )}

                                                      <TableCell align="center">
                                                          <div
                                                              className="record-table-wrapper"
                                                              style={{ display: "flex" }}
                                                          >
                                                              <span>
                                                                  <img
                                                                      className="avatar-circle"
                                                                      src={record.instructor.value.photoURL}
                                                                      alt="referee"
                                                                  />
                                                              </span>
                                                              <span style={{ fontSize: "0.75rem" }}>
                                                                  {record.instructor.value?.refereeId}
                                                              </span>{" "}
                                                              <Tooltip
                                                                  title={t("referee.record.view-instructor")}
                                                                  arrow
                                                                  placement="top-start"
                                                              >
                                                                  <VisibilityIcon
                                                                      fontSize="small"
                                                                      className="record-list-icon"
                                                                      onClick={() => handleViewInstructor(idx)}
                                                                  />
                                                              </Tooltip>
                                                          </div>
                                                      </TableCell>
                                                      <>
                                                          <Modal
                                                              isOpen={modalUser}
                                                              toggle={toggleUser}
                                                              backdrop="static"
                                                              size="lg"
                                                              centered={true}
                                                              style={{ height: "auto" }}
                                                          >
                                                              <ModalHeader toggle={toggleUser} close={closeBtnUser}>
                                                                  <div
                                                                      className="page-primary-title"
                                                                      style={{ borderBottom: "0" }}
                                                                  >
                                                                      {t("referee.record.instructor-profile")}
                                                                  </div>
                                                              </ModalHeader>
                                                              <ModalBody>
                                                                  <ViewUserInfo
                                                                      toggle={toggleUser}
                                                                      record={currentRecord}
                                                                  />
                                                              </ModalBody>
                                                          </Modal>
                                                      </>
                                                      {lang === "en" && (
                                                          <TableCell align="center" style={{ fontSize: "0.75rem" }}>
                                                              {record.country?.label === "Hong Kong SAR China"
                                                                  ? "Hong Kong"
                                                                  : record.country?.label}
                                                          </TableCell>
                                                      )}
                                                      {lang === "zh-TW" && (
                                                          <TableCell align="center" style={{ fontSize: "0.75rem" }}>
                                                              {" "}
                                                             
                                                              {record.countryTw?.label === "中國香港特別行政區"
                                                                  ? "香港"
                                                                  : record.countryTw?.label}
                                                          </TableCell>
                                                      )}
                                                      {lang === "zh-CN" && (
                                                          <TableCell align="center" style={{ fontSize: "0.75rem" }}>
                                                              {record.countryCn?.label === "中国香港特别行政区"
                                                                  ? "香港"
                                                                  : record.countryCn?.label}
                                                          </TableCell>
                                                      )}

                                                      <TableCell align="center">
                                                          <div className="action-icons" style={{ fontSize: "0.75rem" }}>
                                                              <span>
                                                                  <Tooltip
                                                                      title={t("admin.referee-list.edit")}
                                                                      arrow
                                                                      placement="left-start"
                                                                  >
                                                                      <EditIcon
                                                                          fontSize="small"
                                                                          className="record-list-icon"
                                                                          onClick={() => handleTableEditRecord(idx)}
                                                                      />
                                                                  </Tooltip>
                                                              </span>
                                                              <span>
                                                                  <Tooltip
                                                                      title={t("admin.event-list.upload")}
                                                                      arrow
                                                                      placement="top-start"
                                                                  >
                                                                      <CloudUploadIcon
                                                                          fontSize="small"
                                                                          className="record-list-icon"
                                                                          onClick={() => handleUploadFiles(idx)}
                                                                      />
                                                                  </Tooltip>
                                                              </span>
                                                              <span>
                                                                  <Tooltip
                                                                      title={t("general.download")}
                                                                      arrow
                                                                      placement="top-start"
                                                                  >
                                                                      <FileDownloadIcon
                                                                          fontSize="small"
                                                                          className="record-list-icon"
                                                                          onClick={() => handleDownloadFiles(idx)}
                                                                      />
                                                                  </Tooltip>
                                                              </span>
                                                              {uid === record.uid && (
                                                                  <span>
                                                                      <Tooltip
                                                                          title={t("admin.referee-list.delete")}
                                                                          arrow
                                                                          placement="right-start"
                                                                      >
                                                                          <DeleteIcon
                                                                              fontSize="small"
                                                                              className="record-list-icon"
                                                                              onClick={() => deleteDocument(record.id)}
                                                                          />
                                                                      </Tooltip>
                                                                  </span>
                                                              )}
                                                          </div>
                                                      </TableCell>
                                                      <>
                                                          <Modal
                                                              isOpen={modalTableEdit}
                                                              toggle={toggleTableEdit}
                                                              backdrop="static"
                                                              size="lg"
                                                              centered={true}
                                                              style={{ height: "auto" }}
                                                          >
                                                              <ModalHeader
                                                                  toggle={toggleTableEdit}
                                                                  close={closeBtnTableEdit}
                                                              >
                                                                  <div
                                                                      className="page-primary-title"
                                                                      style={{
                                                                          marginLeft: "6px",
                                                                          borderBottom: "0",
                                                                          marginBottom: "0",
                                                                      }}
                                                                  >
                                                                      {t("admin.referee-list.edit")}
                                                                  </div>
                                                              </ModalHeader>
                                                              <ModalBody>
                                                                  <EditTrainingRecord
                                                                      uid={uid}
                                                                      toggle={toggleTableEdit}
                                                                      record={currentRecord}
                                                                  />
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
                                                              style={{ height: "auto" }}
                                                          >
                                                              <ModalHeader toggle={toggleUpload} close={closeBtnUpload}>
                                                                  <div
                                                                      className="page-primary-title"
                                                                      style={{ marginBottom: "0", borderBottom: "0" }}
                                                                  >
                                                                      {t("referee.record.upload")}
                                                                  </div>
                                                              </ModalHeader>
                                                              <ModalBody>
                                                                  <UploadTrainingFiles
                                                                      toggle={toggleUpload}
                                                                      record={currentRecord}
                                                                      uid={uid}
                                                                      referee={referee}
                                                                  />
                                                              </ModalBody>
                                                          </Modal>
                                                      </>
                                                      <>
                                                          <Modal
                                                              isOpen={modalDownload}
                                                              toggle={toggleDownload}
                                                              backdrop="static"
                                                              size="lg"
                                                              centered={true}
                                                              style={{ height: "auto" }}
                                                          >
                                                              <ModalHeader
                                                                  toggle={toggleDownload}
                                                                  close={closeBtnDownload}
                                                              >
                                                                  <div
                                                                      className="page-primary-title"
                                                                      style={{ marginBottom: "0", borderBottom: "0" }}
                                                                  >
                                                                      {t("referee.record.download")}
                                                                  </div>
                                                              </ModalHeader>
                                                              <ModalBody>
                                                                  <DownloadTrainingFiles
                                                                      toggle={toggleDownload}
                                                                      record={currentRecord}
                                                                      uid={uid}
                                                                      referee={referee}
                                                                  />
                                                              </ModalBody>
                                                          </Modal>
                                                      </>
                                                  </TableRow>
                                              ))
                                        : null}
                                </TableBody>
                            </Table>
                        </TableContainer>

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
                </>
            )}
            {/* ==========Referee Training Card List =================*/}
            {isSmallScreen && (
                <>
                    <div className="record-list-card-container">
                        {trainingRecords ? (
                            currentRows
                                // .filter((record) => {
                                //     return query.toLowerCase() === ""
                                //         ? currentRows
                                //         : record.year.toLowerCase().includes(query) ||
                                //               record.month.toLowerCase().includes(query);
                                // })
                                .map((record, idx) => (
                                    <div key={idx}>
                                        <div
                                            className="record-list-card"
                                            style={{ backgroundColor: "#e1e9ed", borderTop: "15px solid #0f597c" }}
                                        >
                                            <div className="record-list-card-title">
                                                {record.course === "G3 Course" && (
                                                    <h6 style={{ color: "Brown", textAlign: "center" }}>
                                                        {t("referee.record.card-courseG3")}
                                                    </h6>
                                                )}
                                                {record.course === "G4 Course" && (
                                                    <h6 style={{ color: "#0f597c", textAlign: "center" }}>
                                                        {t("referee.record.card-courseG4")}
                                                    </h6>
                                                )}
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "20px",
                                                    justifyContent: "center",
                                                    marginBottom: "6px",
                                                }}
                                            >
                                                <div className="record-list-card-date">
                                                    <div>
                                                        <Tooltip
                                                            title={t("referee.record.card-date")}
                                                            arrow
                                                            placement="left-start"
                                                        >
                                                            <DateRangeIcon
                                                                className="record-list-icon"
                                                                fontSize="small"
                                                            />
                                                        </Tooltip>
                                                    </div>

                                                    <div style={{ fontFamily: "Georgia, serif", fontSize: "0.75rem" }}>
                                                        {moment.utc(record.date.toDate()).format("MM/DD/YYYY")}
                                                    </div>
                                                </div>

                                                <div className="record-list-card-location">
                                                    <span>
                                                        <Tooltip
                                                            title={t("referee.record.card-location")}
                                                            arrow
                                                            placement="left-start"
                                                        >
                                                            <LocationOnIcon
                                                                className="record-list-icon"
                                                                fontSize="small"
                                                            />
                                                        </Tooltip>
                                                    </span>

                                                    {lang === "en" && (
                                                        <span style={{
                                                                fontFamily: "Georgia, serif",
                                                                fontSize: "0.75rem",
                                                            }}>
                                                            {record.country?.label === "Hong Kong SAR China"
                                                                ? "Hong Kong"
                                                                : record.country?.label}
                                                        </span>
                                                    )}
                                                    {lang === "zh-TW" && (
                                                        <span style={{
                                                                fontFamily: "Georgia, serif",
                                                                fontSize: "0.75rem",
                                                            }}>
                                                            {record.countryTw?.label === "中國香港特別行政區"
                                                                ? "香港"
                                                                : record.countryTw?.label}
                                                        </span>
                                                    )}
                                                    {lang === "zh-CN" && (
                                                        <span style={{
                                                                fontFamily: "Georgia, serif",
                                                                fontSize: "0.75rem",
                                                            }}>
                                                            {record.countryCn?.label === "中国香港特别行政区"
                                                                ? "香港"
                                                                : record.countryCn?.label}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="record-list-card-item">
                                                {/* <span style={{ color: "#0f597c" }}>
                                                    <b>{t("referee.record.organization")}</b>:
                                                </span>{" "} */}
                                                {record.organization && (
                                                    <div className="record-org-wrapper">
                                                        {record.organization.value?.logoURL ? (
                                                            <img
                                                                className="org-logo"
                                                                src={record.organization.value?.logoURL}
                                                                alt="referee"
                                                            />
                                                        ) : (
                                                            <span className="no-org-logo">
                                                                {record.organization.value?.name[0]}
                                                            </span>
                                                        )}

                                                        {lang === "en" && (
                                                            <span
                                                                style={{
                                                                    color: "#0f597c",
                                                                    fontSize: "0.75rem",
                                                                    width: "180px",
                                                                }}
                                                            >
                                                                {record.organization.value?.name}
                                                            </span>
                                                        )}
                                                        {lang === "zh-TW" && (
                                                            <span style={{ color: "#0f597c", fontSize: "0.75rem" }}>
                                                                {record.organization.value?.nameTw}
                                                            </span>
                                                        )}
                                                        {lang === "zh-CN" && (
                                                            <span style={{ color: "#0f597c", fontSize: "0.75rem" }}>
                                                                {record.organization.value?.nameCn}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="record-list-card-item2">
                                                <span  style={{
                                                        color: "#0f597c",
                                                        textAlign: "left",
                                                        fontSize: "0.8rem",
                                                        fontWeight: 500,
                                                    }} >
                                                    {t("referee.record.card-instructor")}:
                                                </span>

                                                <div>
                                                    <span>
                                                        <img
                                                            className="avatar-circle"
                                                            src={record.instructor.value.photoURL}
                                                            alt="referee"
                                                        />
                                                    </span>
                                                    <span
                                                        style={{
                                                            marginLeft: "6px",
                                                            fontSize: "0.75rem",
                                                            marginRight: "6px",
                                                        }}
                                                    >
                                                        {record.instructor.value.refereeId}
                                                    </span>
                                                    <Tooltip
                                                        title={t("referee.record.view-instructor")}
                                                        arrow
                                                        placement="top-start"
                                                    >
                                                        <VisibilityIcon
                                                            className="record-list-icon"
                                                            fontSize="small"
                                                            onClick={() => handleViewInstructor(idx)}
                                                        />
                                                    </Tooltip>
                                                    <>
                                                        <Modal
                                                            isOpen={modalUser}
                                                            toggle={toggleUser}
                                                            backdrop="static"
                                                            size="lg"
                                                            centered={true}
                                                        >
                                                            <ModalHeader toggle={toggleUser} close={closeBtnUser}>
                                                                <div
                                                                    className="page-primary-title"
                                                                    style={{ borderBottom: "0" }}
                                                                >
                                                                    {t("referee.record.instructor-profile")}
                                                                </div>
                                                            </ModalHeader>
                                                            <ModalBody>
                                                                <ViewUserInfo
                                                                    toggle={toggleUser}
                                                                    record={currentRecord}
                                                                />
                                                            </ModalBody>
                                                        </Modal>
                                                    </>
                                                </div>
                                            </div>

                                            <div className="record-list-icons-container">
                                                <span>
                                                    <Tooltip
                                                        title={t("admin.referee-list.edit")}
                                                        arrow
                                                        placement="left-start"
                                                    >
                                                        <EditIcon
                                                            fontSize="small"
                                                            className="record-list-icon"
                                                            onClick={() => handleCardEditRecord(idx)}
                                                        />
                                                    </Tooltip>
                                                </span>
                                                <span>
                                                    <Tooltip title={t("general.upload")} arrow placement="top-start">
                                                        <CloudUploadIcon
                                                            fontSize="small"
                                                            className="record-list-icon"
                                                            onClick={() => handleUploadFiles(idx)}
                                                        />
                                                    </Tooltip>
                                                </span>
                                                <span>
                                                    <Tooltip title={t("general.download")} arrow placement="top-start">
                                                        <FileDownloadIcon
                                                            fontSize="small"
                                                            className="record-list-icon"
                                                            onClick={() => handleDownloadFiles(idx)}
                                                        />
                                                    </Tooltip>
                                                </span>

                                                {uid === record.uid && (
                                                    <span>
                                                        <Tooltip
                                                            title={t("admin.referee-list.delete")}
                                                            arrow
                                                            placement="right-start"
                                                        >
                                                            <DeleteIcon
                                                                fontSize="small"
                                                                className="record-list-icon"
                                                                onClick={() => deleteDocument(record.id)}
                                                            />
                                                        </Tooltip>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                        ) : (
                            <p>Loading records...</p>
                        )}
                        <>
                            <Modal
                                isOpen={modalCardEdit}
                                toggle={toggleCardEdit}
                                backdrop="static"
                                size="lg"
                                centered={true}
                                style={{ height: "auto" }}
                            >
                                <ModalHeader toggle={toggleCardEdit} close={closeBtnCardEdit}>
                                    <h2>{t("admin.referee-list.edit")}</h2>
                                </ModalHeader>
                                <ModalBody>
                                    <EditTrainingRecord uid={uid} toggle={toggleCardEdit} record={currentRecord} />
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
                                style={{ height: "auto" }}
                            >
                                <ModalHeader toggle={toggleUpload} close={closeBtnUpload}>
                                    <div
                                        className="page-primary-title"
                                        style={{ marginBottom: "0", borderBottom: "0" }}
                                    >
                                        {t("referee.record.upload")}
                                    </div>
                                </ModalHeader>
                                <ModalBody>
                                    <UploadTrainingFiles
                                        toggle={toggleUpload}
                                        record={currentRecord}
                                        uid={uid}
                                        referee={referee}
                                    />
                                </ModalBody>
                            </Modal>
                        </>
                        <>
                            <Modal
                                isOpen={modalDownload}
                                toggle={toggleDownload}
                                backdrop="static"
                                size="lg"
                                centered={true}
                                style={{ height: "auto" }}
                            >
                                <ModalHeader toggle={toggleDownload} close={closeBtnDownload}>
                                    <div
                                        className="page-primary-title"
                                        style={{ marginBottom: "0", borderBottom: "0" }}
                                    >
                                        {t("referee.record.download")}
                                    </div>
                                </ModalHeader>
                                <ModalBody>
                                    <DownloadTrainingFiles
                                        toggle={toggleDownload}
                                        record={currentRecord}
                                        uid={uid}
                                        referee={referee}
                                    />
                                </ModalBody>
                            </Modal>
                        </>
                    </div>

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
                </>
            )}
        </div>
    );
}
