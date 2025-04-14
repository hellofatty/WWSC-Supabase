/** @format */

import "./TrainingClassRecordsList.css";

import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "../../../../supabase/supabaseClient";

// ==========Reactstrap======================
import { Modal, ModalHeader, ModalBody } from "reactstrap";

// ==========Material UI======================
// import { styled } from "@mui/material/styles";
// import SearchIcon from "@mui/icons-material/Search";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
// import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import SchoolIcon from "@mui/icons-material/School";
import EventIcon from "@mui/icons-material/Event";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import {
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    useMediaQuery,
} from "@mui/material";
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
import AddTrainingClassRecordSB from "./AddTrainingClassRecordSB";
import EditTrainingClassRecordSB from "./EditTrainingClassRecordSB";
import UploadTrainingClassFilesSB from "./UploadTrainingClassFilesSB";
import DownloadTrainingClassFilesSB from "./DownloadTrainingClassFilesSB";
import { toast } from "react-toastify";

// ==========Create TrainingRecordsList component======================
export default function TrainingClassRecordsListSB({ uid }) {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    const isSmallScreen = useMediaQuery("(max-width:900px)");

    const [trainingClassRecords, setTrainingClassRecords] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("all");
    const [currentRecord, setCurrentRecord] = useState(null);

    const [referee, setReferee] = useState(null);

    // Wrap fetchData in useCallback
    const fetchData = useCallback(async () => {
        try {
            setLoading(true);

            // Fetch referee data
            const { data: refereeData, error: refereeError } = await supabase
                .from("referees")
                .select()
                .eq("id", uid)
                .single();

            if (refereeError) throw refereeError;
            setReferee(refereeData);

            // Fetch training class records with organizations
            const { data: classData, error: classError } = await supabase
                .from("class")
                .select(
                    `
                *,
                organizations:org_id (
                    id,
                    name,
                    name_tw,
                    name_cn,
                    org_url,
                    logo_url
                )
            `
                )
                .eq("user_id", uid)
                .order("date", { ascending: false });

            if (classError) throw classError;

            const transformedData = classData.map((record) => ({
                ...record,
                org: {
                    value: {
                        id: record.organizations?.id,
                        name: record.organizations?.name,
                        nameTw: record.organizations?.name_tw,
                        nameCn: record.organizations?.name_cn,
                        orgURL: record.organizations?.org_url,
                        logoURL: record.organizations?.logo_url,
                    },
                    label: record.organizations?.name,
                },
            }));

            setTrainingClassRecords(transformedData);
        } catch (err) {
            console.error("Error fetching data:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [uid]);

    // Initial data fetch
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Set up realtime subscriptions
    useEffect(() => {
        // Subscribe to class table changes
        const classSubscription = supabase
            .channel("class-changes")
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "class",
                    filter: `user_id=eq.${uid}`,
                },
                (payload) => {
                    console.log("Class change received:", payload);
                    fetchData();
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
                    fetchData();
                }
            )
            .subscribe();

        // Subscribe to referees table changes
        const refereesSubscription = supabase
            .channel("referees-changes")
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "referees",
                    filter: `id=eq.${uid}`,
                },
                (payload) => {
                    console.log("Referee change received:", payload);
                    fetchData();
                }
            )
            .subscribe();

        // Cleanup subscriptions
        return () => {
            supabase.removeChannel(classSubscription);
            supabase.removeChannel(orgsSubscription);
            supabase.removeChannel(refereesSubscription);
        };
    }, [uid, fetchData]);

    // Handle delete
    const handleDelete = async (id) => {
        try {
            setLoading(true);
            const { error } = await supabase.from("class").delete().eq("id", id).eq("user_id", uid);

            if (error) throw error;

            setTrainingClassRecords((prev) => prev.filter((record) => record.id !== id));
            toast.success(t("referee.class.delete-success-message"));
        } catch (err) {
            console.error("Error deleting record:", err);
            toast.error(t("referee.class.delete-error-message"));
        }
    };

    // ------Open Add Modal-------
    const [modalAdd, setModalAdd] = useState(false);
    const toggleAdd = () => setModalAdd(!modalAdd);
    const closeBtnAdd = (
        <Button onClick={toggleAdd}>
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

    // ------Open Edit Modal-------

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

    const handleYearChange = (record) => {
        setQuery(record.target.value);
    };

    // Get unique years
    const arryRecordsYearsNoDup = [...new Set(trainingClassRecords?.map((record) => record.year) || [])];

    const listByFilter = trainingClassRecords?.filter((record) => {
        return query === "all" ? true : record.year === query;
    });

    // ------Set up Pagnation-------
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    const currentRows = listByFilter ? listByFilter.slice(firstRowIndex, lastRowIndex) : null;

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (loading) {
        return (
            <div className="loading-message">
                <CircularProgress />
                <span>{t("general.loading")}</span>
            </div>
        );
    }

    return (
        <div className="record-list-container" style={{ width: "100%", marginRight: "0" }}>
            {error && <p>{error}</p>}
            <div className="record-list-top">
                <div
                    className={!isSmallScreen ? "page-primary-title" : "page-secondary-title"}
                    style={{ marginLeft: "6px" }}
                >
                    <div className="dashboard-title-wrapper">
                        <SchoolIcon className="sidebar-admin-icon" style={{ fontSize: "30px" }} />{" "}
                        {t("referee.class.training-class-title")}
                    </div>
                </div>
                <div className="record-add-btn">
                    <Tooltip title={t("referee.class.addRecordbtn")} arrow placement="right-start">
                        <Fab
                            size="small"
                            color="primary"
                            aria-label="add"
                            onClick={toggleAdd}
                            sx={{ marginLeft: "12px" }}
                        >
                            <AddIcon />
                        </Fab>
                        {/* <Button onClick={toggleAdd}>
                            <PostAddOutlinedIcon fontSize="medium" />
                        </Button> */}
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
                                style={{ marginLeft: "6px", borderBottom: "0", marginBottom: "0", color: "tomato" }}
                            >
                                {t("referee.class.inputRecord")}
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <AddTrainingClassRecordSB uid={uid} toggle={toggleAdd} />
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
            {/* ==========Referee Training Class Record List (Table layout)=================*/}
            {!isSmallScreen && (
                <>
                    <div className="record-list-table-container">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 350 }} size="small" aria-label="simple table">
                                <TableHead>
                                    <TableRow style={{ backgroundColor: "DodgerBlue" }}>
                                        <TableCell
                                            align="center"
                                            style={{
                                                color: "white",
                                                whiteSpace: "nowrap",
                                                width: "70px",
                                                fontSize: "0.8rem",
                                            }}
                                        >
                                            {t("referee.class.date")}
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
                                            {t("referee.class.course")}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{
                                                color: "white",
                                                whiteSpace: "nowrap",
                                                width: "350px",
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
                                                width: "65px",
                                                fontSize: "0.8rem",
                                            }}
                                        >
                                            {t("referee.class.number")}
                                        </TableCell>

                                        <TableCell
                                            align="center"
                                            style={{
                                                color: "white",
                                                whiteSpace: "nowrap",
                                                width: "100px",
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
                                    {trainingClassRecords
                                        ? currentRows
                                              // .filter((record) => referee.refereeId.toLowerCase().includes(query))
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
                                                          {moment.utc(record?.date).format("MM/DD/YYYY")}
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
                                                              <div className="record-org-wrapper">
                                                                  {record.org.value?.logoURL ? (
                                                                      <img
                                                                          className="org-logo"
                                                                          src={record.org.value?.logoURL}
                                                                          alt="Org Logo"
                                                                      />
                                                                  ) : (
                                                                      <span className="no-org-logo">
                                                                          {record.org.value?.name[0]}
                                                                      </span>
                                                                  )}
                                                                  <span style={{ fontSize: "0.75rem" }}>
                                                                      {record.org.value?.name}
                                                                  </span>
                                                              </div>
                                                          </TableCell>
                                                      )}
                                                      {lang === "zh-TW" && (
                                                          <TableCell align="left">
                                                              <div className="record-org-wrapper">
                                                                  {record.org.value?.logoURL ? (
                                                                      <img
                                                                          className="org-logo"
                                                                          src={record.org.value?.logoURL}
                                                                          alt="Org Logo"
                                                                      />
                                                                  ) : (
                                                                      <span className="no-org-logo">
                                                                          {record.org.value?.nameTw[0]}
                                                                      </span>
                                                                  )}

                                                                  <span style={{ fontSize: "0.75rem" }}>
                                                                      {" "}
                                                                      {record.org.value?.nameTw}
                                                                  </span>
                                                              </div>
                                                          </TableCell>
                                                      )}
                                                      {lang === "zh-CN" && (
                                                          <TableCell align="left">
                                                              <div className="record-table-wrapper">
                                                                  {record.org.value?.logoURL ? (
                                                                      <img
                                                                          className="org-logo"
                                                                          src={record.org.value?.logoURL}
                                                                          alt="Org Logo"
                                                                      />
                                                                  ) : (
                                                                      <span className="no-org-logo">
                                                                          {record.org.value?.nameCn[0]}
                                                                      </span>
                                                                  )}

                                                                  <span style={{ fontSize: "0.75rem" }}>
                                                                      {" "}
                                                                      {record.org.value?.nameCn}
                                                                  </span>
                                                              </div>
                                                          </TableCell>
                                                      )}
                                                      <TableCell align="center">{record.number}</TableCell>
                                                      {lang === "en" && (
                                                          <TableCell align="center" style={{ fontSize: "0.75rem" }}>
                                                              {record.country_en?.label === "Hong Kong SAR China"
                                                                  ? "Hong Kong"
                                                                  : record.country_en?.label}
                                                          </TableCell>
                                                      )}
                                                      {lang === "zh-TW" && (
                                                          <TableCell align="center" style={{ fontSize: "0.75rem" }}>
                                                              {record.country_tw?.label === "中國香港特別行政區"
                                                                  ? "香港"
                                                                  : record.country_tw?.label}
                                                          </TableCell>
                                                      )}
                                                      {lang === "zh-CN" && (
                                                          <TableCell align="center" style={{ fontSize: "0.75rem" }}>
                                                              {record.country_cn?.label === "中国香港特别行政区"
                                                                  ? "香港"
                                                                  : record.country_cn?.label}
                                                          </TableCell>
                                                      )}
                                                      <TableCell align="center" style={{ fontSize: "0.75rem" }}>
                                                          <div className="action-icons">
                                                              <Tooltip
                                                                  title={t("admin.referee-list.edit")}
                                                                  arrow
                                                                  placement="left-start"
                                                              >
                                                                  <EditIcon
                                                                      fontSize="small"
                                                                      style={{ color: "grey" }}
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
                                                                          style={{ color: "grey", cursor: "pointer" }}
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
                                                                          style={{ color: "grey", cursor: "pointer" }}
                                                                          onClick={() => handleDownloadFiles(idx)}
                                                                      />
                                                                  </Tooltip>
                                                              </span>

                                                              {uid === record.user_id && (
                                                                  <Tooltip
                                                                      title={t("admin.referee-list.delete")}
                                                                      arrow
                                                                      placement="right-start"
                                                                  >
                                                                      <DeleteIcon
                                                                          fontSize="small"
                                                                          style={{ color: "grey" }}
                                                                          onClick={() => handleDelete(record.id)}
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
                                                              style={{ height: "auto" }}
                                                          >
                                                              <ModalHeader toggle={toggleEdit} close={closeBtnEdit}>
                                                                  <div
                                                                      className="page-primary-title"
                                                                      style={{
                                                                          marginLeft: "6px",
                                                                          borderBottom: "0",
                                                                          marginBottom: "0",
                                                                          color: "tomato",
                                                                      }}
                                                                  >
                                                                      {t("admin.referee-list.edit")}
                                                                  </div>
                                                              </ModalHeader>
                                                              <ModalBody>
                                                                  <EditTrainingClassRecordSB
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
                                                              contentClassName="modal-height"
                                                              fullscreen="lg"
                                                          >
                                                              <ModalHeader toggle={toggleUpload} close={closeBtnUpload}>
                                                                  <div
                                                                      className="page-primary-title"
                                                                      style={{
                                                                          marginLeft: "6px",
                                                                          borderBottom: "0",
                                                                          marginBottom: "0",
                                                                          color: "tomato",
                                                                      }}
                                                                  >
                                                                      {t("referee.record.upload")}
                                                                  </div>
                                                              </ModalHeader>
                                                              <ModalBody>
                                                                  <UploadTrainingClassFilesSB
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
                                                                      style={{
                                                                          marginLeft: "6px",
                                                                          borderBottom: "0",
                                                                          marginBottom: "0",
                                                                          color: "tomato",
                                                                      }}
                                                                  >
                                                                      {t("referee.record.download")}
                                                                  </div>
                                                              </ModalHeader>
                                                              <ModalBody>
                                                                  <DownloadTrainingClassFilesSB
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
                        {trainingClassRecords ? (
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
                                                backgroundColor: "#e1e9ed",
                                                borderTop: "15px solid DodgerBlue",
                                                // width: "300px",
                                            }}
                                        >
                                            <div className="record-list-card-title">
                                                {record.course === "G3 Course" && (
                                                    <h6
                                                        style={{ color: "Brown", textAlign: "center", fontWeight: 600 }}
                                                    >
                                                        {t("referee.record.card-courseG3")}
                                                    </h6>
                                                )}
                                                {record.course === "G4 Course" && (
                                                    <h6
                                                        style={{
                                                            color: "GoldenRod",
                                                            textAlign: "center",
                                                            fontWeight: 600,
                                                        }}
                                                    >
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
                                                    <span style={{ color: "DodgerBlue" }}>
                                                        <Tooltip
                                                            title={t("referee.record.card-date")}
                                                            arrow
                                                            placement="left-start"
                                                        >
                                                            <DateRangeIcon fontSize="small" style={{ color: "gray" }} />
                                                        </Tooltip>
                                                    </span>

                                                    <span style={{ fontFamily: "Georgia, serif", fontSize: "0.75rem" }}>
                                                        {moment.utc(record.date).format("MM/DD/YYYY")}
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
                                                            {record.country_en?.label === "Hong Kong SAR China"
                                                                ? "Hong Kong"
                                                                : record.country_en?.label}
                                                        </span>
                                                    )}
                                                    {lang === "zh-TW" && (
                                                        <span
                                                            style={{
                                                                fontFamily: "Georgia, serif",
                                                                fontSize: "0.75rem",
                                                            }}
                                                        >
                                                            {record.country_tw?.label === "中國香港特別行政區"
                                                                ? "香港"
                                                                : record.country_tw?.label}
                                                        </span>
                                                    )}
                                                    {lang === "zh-CN" && (
                                                        <span
                                                            style={{
                                                                fontFamily: "Georgia, serif",
                                                                fontSize: "0.75rem",
                                                            }}
                                                        >
                                                            {record.country_cn?.label === "中国香港特别行政区"
                                                                ? "香港"
                                                                : record.country_cn?.label}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <div
                                                className="record-list-card-item"
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <span style={{ color: "#0f597c", fontSize: "0.8rem", fontWeight: 500 }}>
                                                    {t("referee.record.card-training-org")}:
                                                </span>{" "}
                                                {record.organization && (
                                                    <div className="record-org-wrapper">
                                                        {record.org.value?.logoURL ? (
                                                            <img
                                                                className="org-logo"
                                                                src={record.org.value?.logoURL}
                                                                alt="referee"
                                                            />
                                                        ) : (
                                                            <span className="no-org-logo">
                                                                {record.org.value?.name[0]}
                                                            </span>
                                                        )}

                                                        {lang === "en" && (
                                                            <span style={{ color: "#4B0082", fontSize: "0.75rem" }}>
                                                                {record.org.value?.name}
                                                            </span>
                                                        )}
                                                        {lang === "zh-TW" && (
                                                            <span style={{ color: "#4B0082", fontSize: "0.75rem" }}>
                                                                {record.org.value?.nameTw}
                                                            </span>
                                                        )}
                                                        {lang === "zh-CN" && (
                                                            <span style={{ color: "#4B0082", fontSize: "0.75rem" }}>
                                                                {record.org.value?.nameCn}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>

                                            <div
                                                className="record-list-card-item"
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    marginTop: "0",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        color: "#0f597c",
                                                        textAlign: "left",
                                                        fontSize: "0.8rem",
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {t("referee.class.number")}:
                                                </span>

                                                <div className="class-list-number">{record.number}</div>
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

                                                {uid === record.user_id && (
                                                    <span>
                                                        <Tooltip
                                                            title={t("admin.referee-list.delete")}
                                                            arrow
                                                            placement="right-start"
                                                        >
                                                            <DeleteIcon
                                                                fontSize="small"
                                                                style={{ color: "grey", cursor: "pointer" }}
                                                                onClick={() => handleDelete(record.id)}
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
                                    <div
                                        className="page-primary-title"
                                        style={{
                                            marginLeft: "6px",
                                            borderBottom: "0",
                                            marginBottom: "0",
                                            color: "tomato",
                                        }}
                                    >
                                        {t("admin.referee-list.edit")}
                                    </div>
                                </ModalHeader>
                                <ModalBody>
                                    <EditTrainingClassRecordSB uid={uid} toggle={toggleEdit} record={currentRecord} />
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
                                        style={{
                                            marginLeft: "6px",
                                            borderBottom: "0",
                                            marginBottom: "0",
                                            color: "tomato",
                                        }}
                                    >
                                        {t("referee.record.upload")}
                                    </div>
                                </ModalHeader>
                                <ModalBody>
                                    <UploadTrainingClassFilesSB
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
                                        style={{
                                            marginLeft: "6px",
                                            borderBottom: "0",
                                            marginBottom: "0",
                                            color: "tomato",
                                        }}
                                    >
                                        {t("referee.record.download")}
                                    </div>
                                </ModalHeader>
                                <ModalBody>
                                    <DownloadTrainingClassFilesSB
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
