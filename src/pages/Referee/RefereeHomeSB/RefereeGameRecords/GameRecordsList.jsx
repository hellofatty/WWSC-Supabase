/** @format */

import "./GameRecordsList.css";

import { useTranslation } from "react-i18next";
import { useState } from "react";

// ==========Firebase======================
import { useCollection } from "../../../../hooks/useCollection";
import { useDocument } from "../../../../hooks/useDocument";
import { useFirestore } from "../../../../hooks/useFirestore";

// ==========Reactstrap======================
import { Modal, ModalHeader, ModalBody } from "reactstrap";

// ==========Material UI======================
import DeleteIcon from "@mui/icons-material/Delete";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
// import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import SportsIcon from "@mui/icons-material/Sports";
import EventIcon from "@mui/icons-material/Event";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
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

import moment from "moment";

// ==========Import Components======================
import Pagination from "../../../../components/Pagination/Pagination";
import EditGameRecord from "./EditGameRecord";
import AddGameRecord from "./AddGameRecord";
import UploadRefereeGameFiles from "./UploadRefereeGameFiles";
import DownloadRefereeGameFiles from "./DownloadRefereeGameFiles";
import { PrimaryTitle } from "../../../../components/Text/Title/Title";

export default function GameRecordsList({ uid }) {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;

    const { documents: refereeGameRecords } = useCollection(`users/${uid}/games`, ["uid", "==", uid], ["date", "desc"]);

    const isSmallScreen = useMediaQuery("(max-width:900px)");

    const { deleteDocument } = useFirestore(`users/${uid}/games`);
    // const [toggle, setToggle] = useState(false);
    // const [query, setQuery] = useState("");

    // ------Open Add Modal-------
    const [modalAdd, setModalAdd] = useState(false);
    const toggleAdd = () => setModalAdd(!modalAdd);
    const closeBtnAdd = (
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

    // ------Open Upload Files Modal-------
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

    for (let i = 0; i < refereeGameRecords?.length; i++) {
        arryRecordsYears.push(refereeGameRecords[i].year);
    }

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    const arryRecordsYearsNoDup = removeDuplicates(arryRecordsYears);
    console.log(arryRecordsYearsNoDup);

    const listByFilter = refereeGameRecords?.filter((record) => {
        return query.toLowerCase() === "all" ? refereeGameRecords : record.year.toLowerCase().includes(query);
    });
    // ------Set up Pagnation-------

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    const currentRows = listByFilter ? listByFilter.slice(firstRowIndex, lastRowIndex) : null;
    // const currentRows = listByFilter ? listByFilter.slice(firstRowIndex, lastRowIndex) : null;

    // const [filter, setFilter] = useState("all");

    const { document: referee, error } = useDocument("users", uid);
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
                        <SportsIcon className="sidebar-admin-icon" style={{ fontSize: "30px" }} />
                        {t("referee.record.game-title")}
                    </div>
                </div>
                <div className="record-add-btn">
                    <Tooltip title={t("referee.record.addRecordbtn")} arrow placement="right-start">
                        {/* <Button onClick={toggleAdd}>
                            <PostAddOutlinedIcon fontSize="medium" />
                        </Button> */}
                        <Fab
                            size="small"
                            color="primary"
                            aria-label="add"
                            onClick={toggleAdd}
                            sx={{ marginLeft: "12px" }}
                        >
                            <AddIcon />
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
                        style={{ height: "auto"}}
                    >
                        <ModalHeader toggle={toggleAdd} close={closeBtnAdd} style={{ borderBottom: "0" }}>
                            <PrimaryTitle text={t("referee.record.inputRecord")} />
                        </ModalHeader>
                        <ModalBody>
                            <AddGameRecord uid={uid} toggle={toggleAdd} />
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
                </div>
            </div> */}

            {/* ==========Referee Game Record List (Table layout)=================*/}
            {!isSmallScreen && (
                <>
                    <div className="record-list-table-container">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 350 }} size="small" aria-label="simple table">
                                <TableHead>
                                    <TableRow style={{ backgroundColor: "purple" }}>
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
                                                width: "300px",
                                                fontSize: "0.8rem",
                                            }}
                                        >
                                            {t("referee.record.game")}
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
                                            {t("referee.record.organization")}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{
                                                color: "white",
                                                whiteSpace: "nowrap",
                                                width: "150px",
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
                                                width: "200px",
                                                fontSize: "0.8rem",
                                            }}
                                        >
                                            {t("referee.record.action")}
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {refereeGameRecords
                                        ? currentRows
                                              // .filter((record) => referee.refereeId.toLowerCase().includes(query))
                                              .map((record, idx) => (
                                                  <TableRow
                                                      key={idx}
                                                      hover={true}
                                                      //   selected={true}
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
                                                      {lang === "en" && (
                                                          <TableCell align="center" style={{ fontSize: "0.75rem" }}>
                                                              <span>{record?.game}</span>
                                                          </TableCell>
                                                      )}
                                                      {lang === "zh-TW" && (
                                                          <TableCell align="center">
                                                              <span style={{ fontSize: "0.75rem" }}>
                                                                  {record?.gameTw}
                                                              </span>
                                                          </TableCell>
                                                      )}
                                                      {lang === "zh-CN" && (
                                                          <TableCell align="center">
                                                              <span style={{ fontSize: "0.75rem" }}>
                                                                  {record?.gameCn}
                                                              </span>
                                                          </TableCell>
                                                      )}

                                                      {lang === "en" && (
                                                          <TableCell align="left">
                                                              <div className="record-org-wrapper">
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
                                                              <div className="record-org-wrapper">
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
                                                                      {" "}
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
                                                                      {" "}
                                                                      {record.organization.value?.nameCn}
                                                                  </span>
                                                              </div>
                                                          </TableCell>
                                                      )}

                                                      {lang === "en" && (
                                                          <TableCell align="center" style={{ fontSize: "0.75rem" }}>
                                                              {record.country?.label === "Hong Kong SAR China"
                                                                  ? "Hong Kong"
                                                                  : record.country?.label}
                                                          </TableCell>
                                                      )}
                                                      {lang === "zh-TW" && (
                                                          <TableCell align="center" style={{ fontSize: "0.75rem" }}>
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
                                                              <Tooltip
                                                                  title={t("admin.referee-list.edit")}
                                                                  arrow
                                                                  placement="left-start"
                                                              >
                                                                  <EditIcon
                                                                      fontSize="small"
                                                                      className="record-list-icon"
                                                                      onClick={() => handleEditRecord(idx)}
                                                                  />
                                                              </Tooltip>
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
                                                              )}
                                                          </div>
                                                      </TableCell>
                                                      <>
                                                          <Modal
                                                              isOpen={modalEdit}
                                                              toggle={toggleEdit}
                                                              backdrop="static"
                                                              size="lg"
                                                              centered={true}
                                                              //   contentClassName="modal-height"
                                                              style={{ height: "auto" }}
                                                          >
                                                              <ModalHeader toggle={toggleEdit} close={closeBtnEdit}>
                                                                  <PrimaryTitle text={t("admin.referee-list.edit")} />
                                                              </ModalHeader>
                                                              <ModalBody>
                                                                  <EditGameRecord
                                                                      uid={uid}
                                                                      toggle={toggleEdit}
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
                                                                  <UploadRefereeGameFiles
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
                                                                  <DownloadRefereeGameFiles
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
            {/* ==========Referee Training Class List (Card layout)=================*/}
            {isSmallScreen && (
                <>
                    <div className="record-list-card-container">
                        {refereeGameRecords ? (
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
                                            style={{
                                                backgroundColor: "#D8BFD8",
                                                borderTop: "15px solid purple",
                                                // width: "300px",
                                            }}
                                        >
                                            <div className="record-list-card-title">
                                                {lang === "en" &&
                                                    (record.game ? (
                                                        <h6 style={{ color: "purple", textAlign: "center" }}>
                                                            {record.game}
                                                        </h6>
                                                    ) : (
                                                        <span></span>
                                                    ))}
                                                {lang === "zh-TW" &&
                                                    (record.gameTw ? (
                                                        <h6 style={{ color: "purple", textAlign: "center" }}>
                                                            {record.gameTw}
                                                        </h6>
                                                    ) : (
                                                        <span></span>
                                                    ))}
                                                {lang === "zh-CN" &&
                                                    (record.gameCn ? (
                                                        <h6 style={{ color: "purple", textAlign: "center" }}>
                                                            {record.gameCn}
                                                        </h6>
                                                    ) : (
                                                        <span></span>
                                                    ))}
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
                                                    <span>
                                                        <Tooltip
                                                            title={t("referee.record.card-date")}
                                                            arrow
                                                            placement="left-start"
                                                        >
                                                            <DateRangeIcon fontSize="small" style={{ color: "gray" }} />
                                                        </Tooltip>
                                                    </span>

                                                    <span
                                                        style={{
                                                            fontFamily: "Georgia, serif",
                                                            fontSize: "0.75rem",
                                                        }}
                                                    >
                                                        {moment.utc(record.date.toDate()).format("MM/DD/YYYY")}
                                                    </span>
                                                </div>

                                                <div className="record-list-card-date">
                                                    <span style={{ color: "DodgerBlue" }}>
                                                        <Tooltip
                                                            title={t("referee.record.card-location")}
                                                            arrow
                                                            placement="left-start"
                                                        >
                                                            <LocationOnIcon
                                                                fontSize="small"
                                                                style={{ color: "gray" }}
                                                            />
                                                        </Tooltip>
                                                    </span>
                                                    {lang === "en" && (
                                                        <span
                                                            style={{
                                                                fontFamily: "Georgia, serif",
                                                                fontSize: "0.75rem",
                                                            }}
                                                        >
                                                            {record.country?.label === "Hong Kong SAR China"
                                                                ? "Hong Kong"
                                                                : record.country?.label}
                                                        </span>
                                                    )}
                                                    {lang === "zh-TW" && (
                                                        <span
                                                            style={{
                                                                fontFamily: "Georgia, serif",
                                                                fontSize: "small",
                                                            }}
                                                        >
                                                            {record.countryTw?.label === "中國香港特別行政區"
                                                                ? "香港"
                                                                : record.countryTw?.label}
                                                        </span>
                                                    )}
                                                    {lang === "zh-CN" && (
                                                        <span
                                                            style={{
                                                                fontFamily: "Georgia, serif",
                                                                fontSize: "small",
                                                            }}
                                                        >
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
                                                            <span style={{ color: "#4B0082", fontSize: "0.75rem" }}>
                                                                {record.organization.value?.name}
                                                            </span>
                                                        )}
                                                        {lang === "zh-TW" && (
                                                            <span style={{ color: "#4B0082", fontSize: "0.75rem" }}>
                                                                {record.organization.value?.nameTw}
                                                            </span>
                                                        )}
                                                        {lang === "zh-CN" && (
                                                            <span style={{ color: "#4B0082", fontSize: "0.75rem" }}>
                                                                {record.organization.value?.nameCn}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>

                                            <div
                                                className="record-list-icons-container"
                                                style={{ justifyContent: "flex-end", marginTop: "12px" }}
                                            >
                                                <span>
                                                    <Tooltip
                                                        title={t("admin.referee-list.edit")}
                                                        arrow
                                                        placement="left-start"
                                                    >
                                                        <EditIcon
                                                            fontSize="small"
                                                            style={{ color: "grey", cursor: "pointer" }}
                                                            onClick={() => handleEditRecord(idx)}
                                                        />
                                                    </Tooltip>
                                                </span>
                                                <span>
                                                    <Tooltip title={t("general.upload")} arrow placement="top-start">
                                                        <CloudUploadIcon
                                                            fontSize="small"
                                                            style={{ color: "grey", cursor: "pointer" }}
                                                            onClick={() => handleUploadFiles(idx)}
                                                        />
                                                    </Tooltip>
                                                </span>
                                                <span>
                                                    <Tooltip title={t("general.download")} arrow placement="top-start">
                                                        <FileDownloadIcon
                                                            fontSize="small"
                                                            style={{ color: "grey", cursor: "pointer" }}
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
                                                                style={{ color: "grey", cursor: "pointer" }}
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
                                isOpen={modalEdit}
                                toggle={toggleEdit}
                                backdrop="static"
                                size="lg"
                                centered={true}
                                style={{ height: "auto" }}
                            >
                                <ModalHeader toggle={toggleEdit} close={closeBtnEdit}>
                                    <PrimaryTitle text={t("admin.referee-list.edit")} />
                                </ModalHeader>
                                <ModalBody>
                                    <EditGameRecord uid={uid} toggle={toggleEdit} record={currentRecord} />
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
                                    <PrimaryTitle text={t("referee.record.upload")} />
                                </ModalHeader>
                                <ModalBody>
                                    <UploadRefereeGameFiles
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
                                    <PrimaryTitle text={t("referee.record.download")} />
                                </ModalHeader>
                                <ModalBody>
                                    <DownloadRefereeGameFiles
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
