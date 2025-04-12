/** @format */

import "./RefereeList.css";
import { useCollection } from "../../../hooks/useCollection";

import AdminSidebar from "../../../components/AdminSidebar/AdminSidebar";
import Pagination from "../../../components/Pagination/Pagination";

// ---------Material UI-------
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import TableChartIcon from "@mui/icons-material/TableChart";

import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// import { InputGroup, InputGroupText, Input } from "reactstrap";

// import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";

import { Link } from "react-router-dom";

// import MyModal from "../../../components/MyModal/MyModal";
// import RefereeCard from "../../../components/RefereeCard/RefereeCard";

export default function RefereeList() {
    // All referees

    const { t } = useTranslation("global");

    const { documents: refereeList, error } = useCollection("users", ["grade", "in", ["3", "4"]], ["refereeId", "asc"]);
    const { deleteDocument } = useFirestore("users");

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [filter, setFilter] = useState("all");
    const [toggle, setToggle] = useState(false);

    const handleGradeChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    };

    const handleStatusChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
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
                      console.log(referee.grade, filter);
                      return referee.grade === filter;
                  case "active":
                  case "expired":
                  case "pending":
                  case "inactive":
                      console.log(referee.status, filter);
                      return referee.status === filter;
                  default:
                      return true;
              }
          })
        : null;
    // console.log(refereeList.length);

    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    const currentRows = listByFilter ? listByFilter.slice(firstRowIndex, lastRowIndex) : null;

    return (
        <div className="referee-home">
            <AdminSidebar />
            <div className="referee-list-container">
                {error && <p>{error}</p>}
                <h2>{t("admin.referee-list.title")}</h2>
                <div className="referee-list-filter-bar">
                    <div className="referee-list-select-container">
                        <span style={{ color: "grey", marginRight:"6px" }}>{t("admin.referee-list.by-grade")}:</span>
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
                        <span style={{ color: "grey", marginRight:"6px", marginLeft:"6px"}}>{t("admin.referee-list.by-status")}:</span>
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
                        <span style={{ color: "grey", marginRight:"6px"}}>
                            {t("admin.referee-list.switch-layout")}:{" "}
                        </span>
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
                                    .filter((referee) => referee.refereeId.toLowerCase().includes(query))
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
                                                    <span>
                                                        <img
                                                            className="avatar-circle"
                                                            src={referee.photoURL}
                                                            alt="referee"
                                                        />
                                                    </span>
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
                                                        <div
                                                            className="status-bar"
                                                            style={{ backgroundColor: "DodgerBlue" }}
                                                        >
                                                            <span
                                                                className="status-bar-text"
                                                                style={{ color: "white" }}
                                                            >
                                                                {t("referee.profile.active")}
                                                            </span>
                                                        </div>
                                                    )}
                                                    {referee.status === "expired" && (
                                                        <div
                                                            className="status-bar"
                                                            style={{ backgroundColor: "Chocolate" }}
                                                        >
                                                            <span style={{ color: "white" }}>
                                                                {t("referee.profile.expired")}
                                                            </span>
                                                        </div>
                                                    )}
                                                    {referee.status === "pending" && (
                                                        <div className="status-bar" style={{ backgroundColor: "teal" }}>
                                                            <span style={{ color: "white" }}>
                                                                {t("referee.profile.pending")}
                                                            </span>
                                                        </div>
                                                    )}
                                                    {referee.status === "inactive" && (
                                                        <div
                                                            className="status-bar"
                                                            style={{ backgroundColor: "brown" }}
                                                        >
                                                            <span style={{ color: "white" }}>
                                                                {t("referee.profile.inactive")}
                                                            </span>
                                                        </div>
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
                                                                                referee.grade === "3"
                                                                                    ? "Moccasin"
                                                                                    : "grey",
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
                                                                        color:
                                                                            referee.grade === "3" ? "Moccasin" : "grey",
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
                                <p>Loading records...</p>
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
                    <div className="referee-list-table-container">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 450 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow style={{ backgroundColor: "grey" }}>
                                        <TableCell style={{ color: "white" }}>
                                            {t("admin.referee-list.avatar")}
                                        </TableCell>
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
                                            .filter((referee) => referee.refereeId.toLowerCase().includes(query))
                                            .map((referee) => (
                                                <TableRow
                                                    key={referee.id}
                                                    hover={true}
                                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        <span>
                                                            <img
                                                                className="avatar-circle"
                                                                src={referee.photoURL}
                                                                alt="referee"
                                                            />
                                                        </span>
                                                    </TableCell>
                                                    <TableCell align="center">{referee.name}</TableCell>
                                                    <TableCell align="center">{referee.grade}</TableCell>
                                                    <TableCell align="center">{referee.refereeId}</TableCell>
                                                    <TableCell align="center">
                                                        {referee.status === "active" && (
                                                            <div
                                                                className="status-bar"
                                                                style={{ backgroundColor: "DodgerBlue" }}
                                                            >
                                                                <span
                                                                    className="status-bar-text"
                                                                    style={{ color: "white" }}
                                                                >
                                                                    {t("referee.profile.active")}
                                                                </span>
                                                            </div>
                                                        )}
                                                        {referee.status === "expired" && (
                                                            <div
                                                                className="status-bar"
                                                                style={{ backgroundColor: "Chocolate" }}
                                                            >
                                                                <span style={{ color: "white" }}>
                                                                    {t("referee.profile.expired")}
                                                                </span>
                                                            </div>
                                                        )}
                                                        {referee.status === "pending" && (
                                                            <div
                                                                className="status-bar"
                                                                style={{ backgroundColor: "teal" }}
                                                            >
                                                                <span style={{ color: "white" }}>
                                                                    {t("referee.profile.pending")}
                                                                </span>
                                                            </div>
                                                        )}
                                                        {referee.status === "inactive" && (
                                                            <div
                                                                className="status-bar"
                                                                style={{ backgroundColor: "brown" }}
                                                            >
                                                                <span style={{ color: "white" }}>
                                                                    {t("referee.profile.inactive")}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </TableCell>
                                                    <TableCell align="center">{referee.expiryDate}</TableCell>
                                                    <TableCell align="center">
                                                        <div className="action-icons">
                                                            {/* <Link to={`/admin-zone/referee/${user.id}`}>
                                                                <Tooltip
                                                                    title={t("admin.referee-list.view")}
                                                                    arrow
                                                                    placement="left-start"
                                                                >
                                                                    <VisibilityOutlinedIcon
                                                                        fontSize="small"
                                                                        style={{ color: "grey" }}
                                                                    />
                                                                </Tooltip>
                                                            </Link> */}
                                                            <Link to={`/admin-zone/referee/${referee.id}`}>
                                                                <Tooltip
                                                                    title={t("admin.referee-list.edit")}
                                                                    arrow
                                                                    placement="left-start"
                                                                >
                                                                    <EditIcon
                                                                        fontSize="small"
                                                                        style={{ color: "grey" }}
                                                                    />
                                                                </Tooltip>
                                                            </Link>
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
                                                </TableRow>
                                            ))
                                    ) : (
                                        <p>Loading records...</p>
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
        </div>
    );
}
