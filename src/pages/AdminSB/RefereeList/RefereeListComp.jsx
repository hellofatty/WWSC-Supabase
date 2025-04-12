/** @format */

import "./RefereeList.css";
import { useCollection } from "../../../hooks/useCollection";
import Chip from "@mui/joy/Chip";

import Pagination from "../../../components/Pagination/Pagination";

// ---------Material UI-------
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import TableChartIcon from "@mui/icons-material/TableChart";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";

import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// import { InputGroup, InputGroupText, Input } from "reactstrap";

// import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";
import Button from "@mui/material/Button";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import AdminEditReferee from "./AdminEditReferee";

// import MyModal from "../../../components/MyModal/MyModal";
// import RefereeCard from "../../../components/RefereeCard/RefereeCard";

export default function RefereeListComp() {
    // All referees

    const { t } = useTranslation("global");

    const { documents: refereeList, error } = useCollection("users", ["grade", "in", ["3", "4"]], ["refereeId", "asc"]);
    const { deleteDocument } = useFirestore("users");

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [filter, setFilter] = useState("all");
    const [toggle, setToggle] = useState(false);

    const handleGradeChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    };

    const handleStatusChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    };

    const [query, setQuery] = useState("");
    // const keys = ["name", "otherName", "refereeId", "grade", "status"];

    const listByFilter = refereeList
        ? refereeList.filter((referee) => {
              switch (filter) {
                  case "all":
                      return true;

                  case "3":
                  case "4":
                      console.log(referee?.grade, filter);
                      return referee?.grade === filter;
                  case "active":
                  case "expired":
                  case "pending":
                  case "inactive":
                      console.log(referee?.status, filter);
                      return referee?.status === filter;
                  default:
                      return true;
              }
          })
        : null;
    // console.log(refereeList.length);

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

    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    const currentRows = listByFilter ? listByFilter.slice(firstRowIndex, lastRowIndex) : null;

    return (
        <div className="referee-list-container">
            {error && <p>{error}</p>}
            <div className="page-primary-title" style={{ marginLeft: "12px" }}>
                {t("admin.referee-list.title")}
            </div>
            <div className="referee-list-filter-bar" style={{ marginLeft: "40px", marginTop: "20px" }}>
                <div className="referee-list-select-container">
                    <span style={{ color: "grey", marginRight: "6px" }}>{t("admin.referee-list.by-grade")}:</span>
                    <select className="wwsc-select " value={filter} onChange={handleGradeChange}>
                        <option value="all" className="grade-item">
                            {t("admin.referee-list.all-grade")}
                        </option>
                        <option value="3" className="grade-item">
                            {t("admin.referee-list.g3")}
                        </option>
                        <option value="4" className="grade-item">
                            {t("admin.referee-list.g4")}
                        </option>
                    </select>
                    {/* {t("admin.list.select")}:<br></br> */}
                    <span style={{ color: "grey", marginRight: "6px", marginLeft: "6px" }}>
                        {t("admin.referee-list.by-status")}:
                    </span>
                    <select className="wwsc-select " value={filter} onChange={handleStatusChange}>
                        <option value="all" className="grade-item">
                            {t("admin.referee-list.all-status")}
                        </option>
                        <option value="active">{t("admin.referee-list.active")}</option>
                        <option value="expired" className="grade-item">
                            {t("admin.referee-list.expired")}
                        </option>
                        <option value="pending" className="grade-item">
                            {t("admin.referee-list.pending")}
                        </option>
                        <option value="inactive" className="grade-item">
                            {t("admin.referee-list.inactive")}
                        </option>
                    </select>
                </div>
                <div>
                    <div className="searchbar">
                        <Tooltip title={t("admin.referee-list.search")}>
                            <SearchIcon className="searchIcon" />
                        </Tooltip>
                        <input
                            placeholder={t("admin.referee-list.search")}
                            className="searchInput"
                            onChange={(e) => setQuery(e.target.value.toLowerCase())}
                            style={{border:"0", width:"100%"}}
                        />
                    </div>
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
                </div>

                <div className="referee-list-layout-icon">
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
            </div>

            {toggle && (
                <>
                    <div className="referee-list-card-container">
                        {refereeList ? (
                            currentRows
                                .filter((referee) => {
                                    return query.toLowerCase() === ""
                                        ? currentRows
                                        : referee.refereeId.toLowerCase().includes(query) ||
                                              referee.name.toLowerCase().includes(query) ||
                                              referee.displayName.toLowerCase().includes(query) ||
                                              referee.otherName.toLowerCase().includes(query) ||
                                              referee.status.toLowerCase().includes(query);
                                })
                                .map((referee) => (
                                    <div key={referee.id}>
                                        <div
                                            className="referee-list-card"
                                            style={
                                                referee.grade === "3"
                                                    ? { backgroundColor: "rgba(173, 62, 32, 0.7)" }
                                                    : { backgroundColor: "#ffcb00" }
                                            }
                                        >
                                            <div className="referee-list-avater">
                                                <Avatar
                                                    src={referee.photoURL}
                                                    alt={referee.name}
                                                    title={referee.name}
                                                ></Avatar>
                                            </div>
                                            <div className="referee-list-info">
                                                <span className="referee-list-name">
                                                    <strong>{referee.name}</strong>
                                                </span>
                                                <span>{referee.refereeId}</span>
                                                <span>
                                                    {t("admin.referee-list.grade")}: {referee.grade}
                                                </span>
                                                <span>
                                                    {t("admin.referee-list.othername")}:{referee.otherName}
                                                </span>
                                                {referee.status === "active" && (
                                                    <Chip
                                                        color="primary"
                                                        size="md"
                                                        variant="soft"
                                                        sx={{
                                                            fontSize: "0.8rem",
                                                            border: "1px solid var(--joy-palette-primary-300, #97C3F0)",
                                                        }}
                                                    >
                                                        {t("referee.profile.active")}
                                                    </Chip>
                                                )}
                                                {referee.status === "expired" && (
                                                    <Chip
                                                        color="danger"
                                                        size="md"
                                                        variant="soft"
                                                        sx={{
                                                            fontSize: "0.8rem",
                                                            border: "1px solid var(--joy-palette-danger-300, #F09898)",
                                                        }}
                                                    >
                                                        {t("referee.profile.expired")}
                                                    </Chip>
                                                )}
                                                {referee.status === "pending" && (
                                                    <Chip
                                                        color="success"
                                                        size="md"
                                                        variant="soft"
                                                        sx={{
                                                            fontSize: "0.8rem",
                                                            border: "1px solid var(--joy-palette-success-300, #A1E8A1)",
                                                        }}
                                                    >
                                                        {" "}
                                                        {t("referee.profile.pending")}
                                                    </Chip>
                                                )}
                                                {referee.status === "inactive" && (
                                                    <Chip
                                                        color="warning"
                                                        size="md"
                                                        variant="soft"
                                                        sx={{
                                                            fontSize: "0.8rem",
                                                            border: "1px solid var(--joy-palette-warning-500, #9A5B13)",
                                                        }}
                                                    >
                                                        {" "}
                                                        {t("referee.profile.inactive")}
                                                    </Chip>
                                                )}
                                                <div className="expiry-date">
                                                    <span style={{ color: "black" }}>
                                                        {t("admin.referee-list.expirydate")}:
                                                    </span>
                                                    <span style={{ color: "black" }}>
                                                        <span style={{ fontFamily: "Georgia, serif" }}>
                                                            <strong>{referee.expiryDate}</strong>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="referee-list-icon">
                                                    {/* <span>
                                                        <Link to={`/admin-zone/referee/${user.id}`}>
                                                            <Tooltip
                                                                title={t("admin.referee-list.view")}
                                                                arrow
                                                                placement="left-start"
                                                            >
                                                                <VisibilityOutlinedIcon
                                                                    fontSize="small"
                                                                    style={{
                                                                        color: user.grade === "3" ? "Moccasin" : "grey",
                                                                    }}
                                                                />
                                                            </Tooltip>
                                                        </Link>
                                                    </span> */}
                                                    <span>
                                                        <Link to={`/admin-zone/referee/${referee.id}`}>
                                                            <Tooltip
                                                                title={t("admin.referee-list.edit")}
                                                                arrow
                                                                placement="left-start"
                                                            >
                                                                <EditIcon
                                                                    fontSize="small"
                                                                    style={{
                                                                        color:
                                                                            referee.grade === "3" ? "Moccasin" : "grey",
                                                                    }}
                                                                />
                                                            </Tooltip>
                                                            {/* <i class="bi bi-pencil-square"></i> */}
                                                        </Link>
                                                    </span>
                                                    <span>
                                                        <Tooltip
                                                            title={t("admin.referee-list.delete")}
                                                            arrow
                                                            placement="right-start"
                                                        >
                                                            <DeleteIcon
                                                                fontSize="small"
                                                                style={{
                                                                    color: referee.grade === "3" ? "Moccasin" : "grey",
                                                                }}
                                                                onClick={() => deleteDocument(referee.id)}
                                                            />
                                                        </Tooltip>
                                                    </span>
                                                    {/* <i class="bi bi-trash3" onClick={() => deleteDocument(user.id)}></i> */}
                                                </div>
                                            </div>
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                ))
                        ) : (
                            <CircularProgress />
                        )}
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
            {/*--------------Referee List Table Layout ----------*/}
            {!toggle && (
                <div className="referee-list-table-container" style={{ marginLeft: "60px", marginTop: "20px" }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 450 }} size="small" aria-label="simple table">
                            <TableHead>
                                <TableRow style={{ backgroundColor: "grey" }}>
                                    <TableCell style={{ color: "white" }}>{t("admin.referee-list.avatar")}</TableCell>
                                    <TableCell align="center" style={{ color: "white" }}>
                                        {t("admin.referee-list.name")}
                                    </TableCell>
                                    <TableCell align="center" style={{ color: "white" }}>
                                        {t("admin.referee-list.grade")}
                                    </TableCell>
                                    <TableCell align="center" style={{ color: "white" }}>
                                        {t("admin.referee-list.referee-id")}
                                    </TableCell>
                                    <TableCell align="center" style={{ color: "white" }}>
                                        {t("admin.referee-list.status")}
                                    </TableCell>
                                    <TableCell align="center" style={{ color: "white" }}>
                                        {t("admin.referee-list.expirydate")}
                                    </TableCell>
                                    <TableCell align="center" style={{ color: "white" }}>
                                        {t("admin.referee-list.action")}
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {refereeList ? (
                                    currentRows
                                        .filter((referee) => {
                                            return query.toLowerCase() === ""
                                                ? currentRows
                                                : referee.refereeId.toLowerCase().includes(query) ||
                                                      referee.name.toLowerCase().includes(query) ||
                                                      referee.displayName.toLowerCase().includes(query) ||
                                                      referee.otherName.toLowerCase().includes(query) ||
                                                      referee.status.toLowerCase().includes(query);
                                        })
                                        .map((referee, idx) => (
                                            <TableRow
                                                key={idx}
                                                hover={true}
                                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <div style={{ position: "relative" }}>
                                                        {referee.online && <div className="online-user"></div>}
                                                        <Avatar alt="referee.name" src={referee.photoURL} />
                                                    </div>
                                                </TableCell>
                                                <TableCell align="center">{referee.name}</TableCell>
                                                <TableCell align="center">{referee.grade}</TableCell>
                                                <TableCell align="center">{referee.refereeId}</TableCell>
                                                <TableCell align="center">
                                                    {referee.status === "active" && (
                                                        <Chip
                                                            color="primary"
                                                            // onClick={function(){}}
                                                            size="md"
                                                            variant="soft"
                                                            sx={{
                                                                fontSize: "0.8rem",
                                                                border: "1px solid var(--joy-palette-primary-300, #97C3F0)",
                                                            }}
                                                        >
                                                            {t("referee.profile.active")}
                                                        </Chip>
                                                    )}
                                                    {referee.status === "expired" && (
                                                        <Chip
                                                            color="danger"
                                                            // onClick={function(){}}
                                                            size="md"
                                                            variant="soft"
                                                            sx={{
                                                                fontSize: "0.8rem",
                                                                border: "1px solid var(--joy-palette-danger-300, #F09898)",
                                                            }}
                                                        >
                                                            {t("referee.profile.expired")}
                                                        </Chip>
                                                    )}
                                                    {referee.status === "pending" && (
                                                        <Chip
                                                            color="success"
                                                            // onClick={function(){}}
                                                            size="md"
                                                            variant="soft"
                                                            sx={{
                                                                fontSize: "0.8rem",
                                                                border: "1px solid var(--joy-palette-success-300, #A1E8A1)",
                                                            }}
                                                        >
                                                            {" "}
                                                            {t("referee.profile.pending")}
                                                        </Chip>
                                                    )}
                                                    {referee.status === "inactive" && (
                                                        <Chip
                                                            color="warning"
                                                            // onClick={function(){}}
                                                            size="md"
                                                            variant="soft"
                                                            sx={{
                                                                fontSize: "0.8rem",
                                                                border: "1px solid var(--joy-palette-warning-500, #9A5B13)",
                                                            }}
                                                        >
                                                            {" "}
                                                            {t("referee.profile.inactive")}
                                                        </Chip>
                                                    )}
                                                </TableCell>
                                                <TableCell align="center">{referee.expiryDate}</TableCell>
                                                <TableCell align="center">
                                                    <div className="action-icons">
                                                        <Link to={`/admin-zone/referee/${referee.id}`}>
                                                            <Tooltip
                                                                title={t("admin.referee-list.view")}
                                                                arrow
                                                                placement="left-start"
                                                            >
                                                                <VisibilityIcon
                                                                    fontSize="small"
                                                                    style={{ color: "grey" }}
                                                                />
                                                            </Tooltip>
                                                        </Link>

                                                        <Tooltip
                                                            title={t("admin.referee-list.edit")}
                                                            arrow
                                                            placement="top-start"
                                                        >
                                                            <EditIcon
                                                                fontSize="small"
                                                                style={{ color: "grey" }}
                                                                onClick={() => handleEditRecord(idx)}
                                                            />
                                                        </Tooltip>

                                                        <Tooltip
                                                            title={t("admin.referee-list.delete")}
                                                            arrow
                                                            placement="right-start"
                                                        >
                                                            <DeleteIcon
                                                                fontSize="small"
                                                                style={{ color: "grey" }}
                                                                onClick={() => deleteDocument(referee.id)}
                                                            />
                                                        </Tooltip>
                                                    </div>
                                                </TableCell>
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
                                                            <AdminEditReferee
                                                                toggle={toggleEdit}
                                                                referee={currentRecord}
                                                            />
                                                        </ModalBody>
                                                    </Modal>
                                                </>
                                            </TableRow>
                                        ))
                                ) : (
                                    <CircularProgress />
                                )}
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
            )}
        </div>
    );
}
