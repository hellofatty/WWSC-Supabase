/** @format */

import "./OrgList.css";
import { useCollection } from "../../../hooks/useCollection";

import Pagination from "../../../components/Pagination/Pagination";

// ---------Material UI-------
// import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
// import TableChartIcon from "@mui/icons-material/TableChart";

// import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// import { InputGroup, InputGroupText, Input } from "reactstrap";

// import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";
import moment from "moment";
import AddOrgRecord from "../Organizations/AddOrgRecord";
import EditOrgRecord from "../Organizations/EditOrgRecord";

// import MyModal from "../../../components/MyModal/MyModal";
// import RefereeCard from "../../../components/RefereeCard/RefereeCard";

export default function OrgListComp() {
    // All referees

    const { t, i18n } = useTranslation();

    const lang = i18n.language;

    const { documents: orglist, error } = useCollection("organizations");
    const { deleteDocument } = useFirestore("organizations");

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

    // ------Set up Pagnation-------

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    const currentRows = orglist ? orglist.slice(firstRowIndex, lastRowIndex) : null;

    // const [filter, setFilter] = useState("all");
    // const [toggle, setToggle] = useState(false);

    // const handleGradeChange = (event) => {
    //     event.preventDefault();
    //     setFilter(event.target.value);
    // };

    // const handleStatusChange = (event) => {
    //     event.preventDefault();
    //     setFilter(event.target.value);
    // };

    // const [query, setQuery] = useState("");
    // // const keys = ["name", "otherName", "refereeId", "grade", "status"];

    // const listByFilter = refereeList
    //     ? refereeList.filter((referee) => {
    //           switch (filter) {
    //               case "all":
    //                   return true;

    //               case "3":
    //               case "4":
    //                   console.log(referee.grade, filter);
    //                   return referee.grade === filter;
    //               case "active":
    //               case "expired":
    //               case "pending":
    //               case "inactive":
    //                   console.log(referee.status, filter);
    //                   return referee.status === filter;
    //               default:
    //                   return true;
    //           }
    //       })
    //     : null;
    // console.log(refereeList.length);

    return (
        <div className="record-list-container">
            {error && <p>{error}</p>}
            <div className="record-list-top">
                <div className="page-primary-title">{t("admin.org-list.title")}</div>
                <div className="record-add-btn">
                    <Tooltip title={t("referee.record.addRecordbtn")} arrow placement="right-start">
                        <Button onClick={toggleAdd}>
                            <PostAddOutlinedIcon fontSize="medium" />
                        </Button>
                    </Tooltip>
                </div>
                <>
                    <Modal isOpen={modalAdd} toggle={toggleAdd} backdrop="static" size="lg" centered={true}>
                        <ModalHeader toggle={toggleAdd} close={closeBtnAdd}>
                            <h2> {t("referee.record.inputRecord")}</h2>
                        </ModalHeader>
                        <ModalBody>
                            <AddOrgRecord toggle={toggleAdd} />
                        </ModalBody>
                    </Modal>
                </>
            </div>

            {/* <div className="referee-list-filter-bar"> */}
            {/* <div className="referee-list-select-container">
                    <span style={{ color: "grey", marginRight: "6px" }}>{t("admin.referee-list.by-grade")}:</span>
                    <select className="wwsc-select " value={filter} onChange={handleGradeChange}>
                        <option value="all">
                            <span className="grade-item">{t("admin.referee-list.all")}</span>
                        </option>
                        <option value="3">
                            <span className="grade-item">{t("admin.referee-list.g3")}</span>
                        </option>
                        <option value="4">
                            <span className="grade-item">{t("admin.referee-list.g4")}</span>
                        </option>
                    </select>
                    {/* {t("admin.list.select")}:<br></br> */}
            {/* <span style={{ color: "grey", marginRight: "6px", marginLeft: "6px" }}>
                        {t("admin.referee-list.by-status")}:
                    </span>
                    <select className="wwsc-select " value={filter} onChange={handleStatusChange}>
                        <option value="all">
                            <span className="grade-item">{t("admin.referee-list.all")}</span>
                        </option>
                        <option value="active">
                            <span className="grade-item">{t("admin.referee-list.active")}</span>
                        </option>
                        <option value="expired">
                            <span className="grade-item">{t("admin.referee-list.expired")}</span>
                        </option>
                        <option value="pending">
                            <span className="grade-item">{t("admin.referee-list.pending")}</span>
                        </option>
                        <option value="inactive">
                            <span className="grade-item">{t("admin.referee-list.inactive")}</span>
                        </option>
                    </select> */}
            {/* </div> */}
            {/* <div> */}
            {/* <div className="searchbar">
                        <Tooltip title={t("admin.referee-list.search")}>
                            <SearchIcon className="searchIcon" />
                        </Tooltip>
                        <input
                            placeholder={t("admin.referee-list.search")}
                            className="searchInput"
                            onChange={(e) => setQuery(e.target.value.toLowerCase())}
                        />
                    </div> */}
            {/* <InputGroup>
                                <InputGroupText>
                                    {" "}
                                    <Tooltip title={t("admin.referee-list.search")}>
                                        <SearchIcon
                                            style={{ color: "grey", fontSize: "1rem" }}
                                            // className="search-icon"
                                        />
                                    </Tooltip>
                                </InputGroupText>
                                <Input
                                    style={{ color: "grey", width: "500px" }}
                                    placeholder={t("admin.referee-list.search")}
                                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                                />
                            </InputGroup> */}
            {/* <input
                                className="search-bar"
                                placeholder={t("admin.referee-list.search")}
                                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                            />
                            <Tooltip title={t("admin.referee-list.search")}>
                                <SearchIcon style={{ color: "grey", marginLeft: "12px" }} className="search-icon" />
                            </Tooltip> */}
            {/* </div> */}
            {/* <div className="referee-list-layout-icon">
                    <span style={{ color: "grey", marginRight: "6px" }}>{t("admin.referee-list.switch-layout")}: </span>
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
            {/*--------------Org List Table Layout ----------*/}
            <div className="referee-list-table-container">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 450 }} size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: "grey" }}>
                                <TableCell style={{ color: "white", whiteSpace: "nowrap", width: "300px" }}>
                                    {t("admin.org-list.name")}
                                </TableCell>

                                <TableCell align="center" style={{ color: "white", whiteSpace: "nowrap" }}>
                                    {t("admin.org-list.status")}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    style={{ color: "white", whiteSpace: "nowrap", width: "250px" }}
                                >
                                    {t("admin.org-list.period")}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    style={{ color: "white", whiteSpace: "nowrap", width: "300px" }}
                                >
                                    {t("admin.org-list.contact")}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    style={{ color: "white", whiteSpace: "nowrap", width: "150px" }}
                                >
                                    {t("admin.org-list.country")}
                                </TableCell>

                                <TableCell
                                    align="center"
                                    style={{ color: "white", whiteSpace: "nowrap", width: "200px" }}
                                >
                                    {t("admin.org-list.action")}
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orglist ? (
                                currentRows
                                    // .filter((referee) => referee.refereeId.toLowerCase().includes(query))
                                    .map((org, idx) => (
                                        <TableRow
                                            key={idx}
                                            hover={true}
                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                        >
                                            {lang === "en" && (
                                                <TableCell align="left" style={{ color: "teal" }}>
                                                    <a href={org.orgURL} style={{ cursor: "pointer" }} target="_blank" rel="noreferrer" alt={org.name}>
                                                        {org.name[0].en}
                                                    </a>
                                                </TableCell>
                                            )}
                                            {lang === "zh-TW" && (
                                                <TableCell align="left" style={{ color: "teal" }}>
                                                    <a href={org.orgURL} style={{ cursor: "pointer" }} target="_blank" rel="noreferrer" alt={org.name[1].tw}>
                                                        {org.name[1].tw}
                                                    </a>
                                                </TableCell>
                                            )}
                                            {lang === "zh-CN" && (
                                                <TableCell align="left" style={{ color: "teal" }}>
                                                    <a href={org.orgURL} style={{ cursor: "pointer" }} target="_blank" rel="noreferrer" alt={org.name[2].cn}>
                                                        {org.name[2].cn}
                                                    </a>
                                                </TableCell>
                                            )}
                                            <TableCell align="center">
                                                {org.status === "active" && (
                                                    <div
                                                        className="status-bar"
                                                        style={{ backgroundColor: "DodgerBlue" }}
                                                    >
                                                        <span className="status-bar-text" style={{ color: "white" }}>
                                                            {t("admin.org-list.active")}
                                                        </span>
                                                    </div>
                                                )}
                                                {org.status === "expired" && (
                                                    <div
                                                        className="status-bar"
                                                        style={{ backgroundColor: "Chocolate" }}
                                                    >
                                                        <span style={{ color: "white" }}>
                                                            {t("admin.org-list.expired")}
                                                        </span>
                                                    </div>
                                                )}
                                                {org.status === "pending" && (
                                                    <div className="status-bar" style={{ backgroundColor: "teal" }}>
                                                        <span style={{ color: "white" }}>
                                                            {t("admin.org-list.pending")}
                                                        </span>
                                                    </div>
                                                )}
                                                {org.status === "inactive" && (
                                                    <div className="status-bar" style={{ backgroundColor: "brown" }}>
                                                        <span style={{ color: "white" }}>
                                                            {t("admin.org-list.inactive")}
                                                        </span>
                                                    </div>
                                                )}
                                            </TableCell>
                                            <TableCell align="center">
                                                {moment(org.fromDate.toDate().toDateString()).format("MM/DD/YYYY")} ~
                                                {moment(org.toDate.toDate().toDateString()).format("MM/DD/YYYY")}{" "}
                                                <br></br>({org.years} {t("admin.org-list.years")})
                                            </TableCell>
                                            <TableCell align="center">
                                                <span>
                                                    <img
                                                        className="avatar-circle"
                                                        src={org.user.value.photoURL}
                                                        alt="referee"
                                                    />
                                                </span>
                                                <span style={{ marginLeft: "12px", fontSize: "0.8rem" }}>
                                                    {org.user.value.refereeId}
                                                </span>
                                                <Tooltip
                                                    title={t("referee.org-list.view-user-contact")}
                                                    arrow
                                                    placement="right-start"
                                                >
                                                    <VisibilityIcon
                                                        fontSize="small"
                                                        style={{ color: "grey", cursor: "pointer" }}
                                                        onClick={() => handleEditRecord(idx)}
                                                    />
                                                </Tooltip>
                                            </TableCell>
                                            <>
                                                <Modal
                                                    isOpen={modalUser}
                                                    toggle={toggleUser}
                                                    backdrop="static"
                                                    size="lg"
                                                    centered={true}
                                                >
                                                    <ModalHeader toggle={toggleUser} close={closeBtnUser}>
                                                        <h2>{t("referee.org-list.user-info")}</h2>
                                                    </ModalHeader>
                                                    <ModalBody>
                                                        <ViewUserInfo toggle={toggleUser} record={currentRecord} />
                                                    </ModalBody>
                                                </Modal>
                                            </>
                                            {lang === "en" && <TableCell align="center">{org.country.label}</TableCell>}
                                            {lang === "zh-TW" && (
                                                <TableCell align="center">{org.countryTw.label}</TableCell>
                                            )}
                                            {lang === "zh-CN" && (
                                                <TableCell align="center">{org.countryCn.label}</TableCell>
                                            )}
                                            <TableCell align="center">
                                                <div className="action-icons">
                                                    <Tooltip
                                                        title={t("admin.org-list.edit")}
                                                        arrow
                                                        placement="left-start"
                                                    >
                                                        <EditIcon
                                                            fontSize="small"
                                                            style={{ color: "grey" }}
                                                            onClick={() => handleEditRecord(idx)}
                                                        />
                                                    </Tooltip>

                                                    <Tooltip
                                                        title={t("admin.org-list.delete")}
                                                        arrow
                                                        placement="right-start"
                                                    >
                                                        <DeleteIcon
                                                            fontSize="small"
                                                            style={{ color: "grey" }}
                                                            onClick={() => deleteDocument(org.id)}
                                                        />
                                                    </Tooltip>
                                                </div>
                                            </TableCell>{" "}
                                            <>
                                                <Modal
                                                    isOpen={modalEdit}
                                                    toggle={toggleEdit}
                                                    backdrop="static"
                                                    size="lg"
                                                    centered={true}
                                                >
                                                    <ModalHeader toggle={toggleEdit} close={closeBtnEdit}>
                                                        <h2>{t("admin.referee-list.edit")}</h2>
                                                    </ModalHeader>
                                                    <ModalBody>
                                                        <EditOrgRecord toggle={toggleEdit} record={currentRecord} />
                                                    </ModalBody>
                                                </Modal>
                                            </>
                                        </TableRow>
                                    ))
                            ) : (
                                <p>Loading records...</p>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Pagination
                    documents={orglist}
                    totalRows={orglist && orglist.length}
                    setRowsPerPage={setRowsPerPage}
                    rowsPerPage={rowsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    firstRowIndex={firstRowIndex}
                    lastRowIndex={lastRowIndex}
                />
            </div>
        </div>
    );
}
