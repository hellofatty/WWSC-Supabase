/** @format */

import "./OrgList.css";
import { useCollection } from "../../../hooks/useCollection";
import Chip from "@mui/joy/Chip";

import Pagination from "../../../components/Pagination/Pagination";

// ---------Material UI-------
// import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
// import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
// import TableChartIcon from "@mui/icons-material/TableChart";

// import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";

import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// import { InputGroup, InputGroupText, Input } from "reactstrap";

// import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";
import moment from "moment";
import AddOrgRecord from "../Organizations/AddOrgRecord";
import EditOrgRecord from "../Organizations/EditOrgRecord";
// import EditAuthOrgRecord from "../Organizations/EditAuthOrgRecord";
// import ViewUserInfo from "../Organizations/ViewUserInfo";
import CustomTab from "../../../components/CustomTab/CustomTab";

// import MyModal from "../../../components/MyModal/MyModal";
// import RefereeCard from "../../../components/RefereeCard/RefereeCard";

export default function OrgListComp() {
    // All referees

    const { t, i18n } = useTranslation();

    const lang = i18n.language;

    const { documents: orgList, error } = useCollection("organizations");
    // const { documents: authOrglist } = useCollection("organizations", ["isAuthorized", "==",true], ["name", "asc"]);
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

    // const [modalUser, setModalUser] = useState(false);
    // const toggleUser = () => setModalUser(!modalUser);

    // const handleViewUser = (idx) => {
    //     setCurrentRecord(currentRows[idx]);
    //     toggleUser();
    // };

    // const closeBtnUser = (
    //     <Button onClick={toggleUser}>
    //         <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
    //     </Button>
    // );

       // ------Open Edit Auth Records Modal-------

    // const [modalEditAuthOrg, setModalEditAuthOrg] = useState(false);
    // const toggleEditAuthOrg = () => setModalEditAuthOrg(!modalEditAuthOrg);
    // const handleEditAuthOrgRecord = (idx) => {
    //     setCurrentRecord(currentRows[idx]);
    //     toggleEditAuthOrg();
    // };

    // const closeBtnEditAuthOrg = (
    //     <Button onClick={toggleEditAuthOrg}>
    //         <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
    //     </Button>
    // );

       // ------Open All Wiser Orgs Edit Modal-------

    const [modalAllEdit, setModalAllEdit] = useState(false);
    const toggleAllEdit = () => setModalAllEdit(!modalAllEdit);
    const handleAllEditRecord = (idx) => {
        setCurrentRecord(currentRows[idx]);
        toggleAllEdit();
    };

    const closeBtnAllEdit = (
        <Button onClick={toggleAllEdit}>
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

   // ------Open Auth Org Edit Modal-------
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

    const [filter, setFilter] = useState("all");
    // const [query, setQuery] = useState("all");

    const handleStatusChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // const [toggle, setToggle] = useState(false);

    // // const keys = ["name", "otherName", "refereeId", "grade", "status"];
    if (!orgList) {
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        );
    }
    const listByFilter = orgList
        ? orgList.filter((org) => {
              switch (filter) {
                  case "all":
                      return true;
                  case "active":
                  case "expired":
                  case "pending":
                  case "inactive":
                      console.log(org.status, filter);
                      return org.status === filter;
                  default:
                      return true;
              }
          })
        : null;

    // ------Set up Pagnation-------

    const authOrgList = listByFilter && listByFilter.filter((org) => org.isAuthorized === true);
    console.log(authOrgList?.length);
   

    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    const currentRows = orgList ? orgList.slice(firstRowIndex, lastRowIndex) : null;

    const allWiserOrgsContent = (
        <>
            {/*--------------Org List Table Layout ----------*/}

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow style={{ backgroundColor: "grey" }}>
                            <TableCell style={{ color: "white", whiteSpace: "nowrap", width: "300px" }}>
                                {t("admin.org-list.name")}
                            </TableCell>

                            <TableCell align="center" style={{ color: "white", whiteSpace: "nowrap", width: "200px" }}>
                                {t("admin.org-list.country")}
                            </TableCell>

                            <TableCell align="center" style={{ color: "white", whiteSpace: "nowrap", width: "200px" }}>
                                {t("admin.org-list.action")}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orgList ? (
                            currentRows.map((org, idx) => (
                                <TableRow
                                    key={idx}
                                    hover={true}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    {lang === "en" && (
                                        <TableCell align="left" style={{ color: "teal" }}>
                                            <a
                                                href={org?.orgURL}
                                                style={{ cursor: "pointer" }}
                                                target="_blank"
                                                rel="noreferrer"
                                                alt={org?.name}
                                            >
                                                <div className="org-logo-name-wrapper">
                                                    <div>
                                                        {org?.logoURL ? (
                                                            <div>
                                                                <img
                                                                    className="org-logo"
                                                                    src={org?.logoURL}
                                                                    alt="Org Logo"
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="no-org-logo">{org?.name[0]}</div>
                                                        )}
                                                    </div>
                                                    <div>{org?.name}</div>
                                                    {org?.isAuthorized === true && org?.status === "active" && (
                                                        <Tooltip title={t("admin.org-list.auth-active-org")}>
                                                            <MilitaryTechIcon />
                                                        </Tooltip>
                                                    )}
                                                </div>
                                            </a>
                                        </TableCell>
                                    )}
                                    {lang === "zh-TW" && (
                                        <TableCell align="left" style={{ color: "teal" }}>
                                            <a
                                                href={org?.orgURL}
                                                style={{ cursor: "pointer" }}
                                                target="_blank"
                                                rel="noreferrer"
                                                alt={org?.nameTw}
                                            >
                                                <div className="org-logo-name-wrapper">
                                                    <div>
                                                        {org?.logoURL ? (
                                                            <div>
                                                                <img
                                                                    className="org-logo"
                                                                    src={org?.logoURL}
                                                                    alt="Org Logo"
                                                                    style={{ objectFit: "cover" }}
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="no-org-logo">{org?.nameTw[0]}</div>
                                                        )}
                                                    </div>
                                                    <div>{org?.nameTw}</div>
                                                </div>
                                            </a>
                                        </TableCell>
                                    )}
                                    {lang === "zh-CN" && (
                                        <TableCell align="left" style={{ color: "teal" }}>
                                            <a
                                                href={org?.orgURL}
                                                style={{ cursor: "pointer" }}
                                                target="_blank"
                                                rel="noreferrer"
                                                alt={org?.nameCn}
                                            >
                                                <div className="org-logo-name-wrapper">
                                                    <div>
                                                        {org?.logoURL ? (
                                                            <div>
                                                                <img
                                                                    className="org-logo"
                                                                    src={org.logoURL}
                                                                    alt="Org Logo"
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="no-org-logo">{org.nameCn[0]}</div>
                                                        )}
                                                    </div>
                                                    <div>{org?.nameCn}</div>
                                                </div>
                                            </a>
                                        </TableCell>
                                    )}

                                    {lang === "en" && (
                                        <TableCell align="center" style={{ color: "teal" }}>
                                            {org.country?.label}
                                        </TableCell>
                                    )}
                                    {lang === "zh-TW" && (
                                        <TableCell align="center" style={{ color: "teal" }}>
                                            {org.countryTw?.label}
                                        </TableCell>
                                    )}
                                    {lang === "zh-CN" && (
                                        <TableCell align="center" style={{ color: "teal" }}>
                                            {org.countryCn?.label}
                                        </TableCell>
                                    )}
                                    <TableCell align="center">
                                        <div className="action-icons">
                                            <Tooltip title={t("admin.org-list.edit")} arrow placement="left-start">
                                                <EditIcon
                                                    fontSize="small"
                                                    style={{ color: "grey" }}
                                                    onClick={() => handleAllEditRecord(idx)}
                                                />
                                            </Tooltip>

                                            <Tooltip title={t("admin.org-list.delete")} arrow placement="right-start">
                                                <DeleteIcon
                                                    fontSize="small"
                                                    style={{ color: "grey" }}
                                                    onClick={() => deleteDocument(org.id)}
                                                />
                                            </Tooltip>
                                        </div>
                                    </TableCell>
                                    <>
                                        <Modal
                                            isOpen={modalAllEdit}
                                            toggle={toggleAllEdit}
                                            backdrop="static"
                                            size="lg"
                                            centered={true}
                                            // fullscreen={true}
                                            height="auto"
                                        >
                                            <ModalHeader toggle={toggleAllEdit} close={closeBtnAllEdit}>
                                                <div
                                                    className="page-primary-title"
                                                    style={{ marginBottom: "0", borderBottom: "0" }}
                                                >
                                                    {t("admin.referee-list.edit")}
                                                </div>
                                            </ModalHeader>
                                            <ModalBody>
                                                <EditOrgRecord toggle={toggleAllEdit} org={currentRecord} />
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
                documents={orgList}
                totalRows={orgList && orgList.length}
                setRowsPerPage={setRowsPerPage}
                rowsPerPage={rowsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                firstRowIndex={firstRowIndex}
                lastRowIndex={lastRowIndex}
            />
        </>
    );

    const authorizedOrgsContent = (
        <>
            <div className="referee-list-filter-bar">
                <div className="referee-list-select-container">
                    {/* <div style={{ color: "grey", marginRight: "6px" }}>{t("admin.org-list.isAuthorized")}:</div>
                    <Checkbox
                                    checked={filter}
                                    onChange={(e) => setFilter(e.target.checked)}
                                    inputProps={{ "aria-label": "controlled" }}
                                /> */}

                    {/* {t("admin.list.select")}:<br></br> */}
                    {/* <div style={{ color: "grey", marginRight: "6px", marginLeft: "6px" }}>
                        {t("admin.referee-list.by-status")}:
                    </div> */}
                     <span>
                        <Tooltip title={t("admin.event-list.select-year")} arrow placement="top">
                            <MilitaryTechIcon fontSize="small" sx={{ color: "grey" }} />
                        </Tooltip>
                    </span>
                    <select  className="wwsc-select w3-select w3-border "
                        style={{
                            width: "90px",
                            textAlign: "center",
                            fontSize: "0.8rem",
                            color: "gray",
                            border: "lightgrey",
                            marginBottom: "12px",
                            marginRight: "10px",
                            marginLeft: "5px",
                            borderRadius: "5px",
                        }} value={filter} onChange={handleStatusChange}>
                        <option value="all">
                           {t("admin.org-list.all-status")}
                        </option>
                        <option value="active">
                           {t("admin.referee-list.active")}
                        </option>
                        <option value="expired">
                            {t("admin.referee-list.expired")}
                        </option>
                        <option value="pending">
                            {t("admin.referee-list.pending")}
                        </option>
                        <option value="inactive">
                            {t("admin.referee-list.inactive")}
                        </option>
                    </select>
                </div>

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
                            </Tooltip>
            </div> */}
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
          
            {/*--------------Authroized Org List Table Layout ----------*/}

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow style={{ backgroundColor: "grey" }}>
                            <TableCell style={{ color: "white", whiteSpace: "nowrap", width: "300px" }}>
                                {t("admin.org-list.name")}
                            </TableCell>

                            <TableCell align="center" style={{ color: "white", whiteSpace: "nowrap" }}>
                                {t("admin.org-list.status")}
                            </TableCell>
                            <TableCell align="center" style={{ color: "white", whiteSpace: "nowrap", width: "250px" }}>
                                {t("admin.org-list.period")}
                            </TableCell>
                            {/* <TableCell align="center" style={{ color: "white", whiteSpace: "nowrap", width: "350px" }}>
                                {t("admin.org-list.contact")}
                            </TableCell> */}
                            <TableCell align="center" style={{ color: "white", whiteSpace: "nowrap", width: "120px" }}>
                                {t("admin.org-list.country")}
                            </TableCell>

                            <TableCell align="center" style={{ color: "white", whiteSpace: "nowrap", width: "180px" }}>
                                {t("admin.org-list.action")}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {authOrgList ? (
                            currentRows
                                .filter((org) => org.isAuthorized === true)
                                .filter(filter === "all" ? (org) => true : (org) => org.status === filter)
                                .map((org, idx) => (
                                    <TableRow
                                        key={idx}
                                        hover={true}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        {lang === "en" && (
                                            <TableCell align="left" style={{ color: "teal" }}>
                                                <a
                                                    href={org?.orgURL}
                                                    style={{ cursor: "pointer" }}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    alt={org?.name}
                                                >
                                                    <div className="org-logo-name-wrapper">
                                                        <div>
                                                            {org?.logoURL ? (
                                                                <div>
                                                                    <img
                                                                        className="org-logo"
                                                                        src={org?.logoURL}
                                                                        alt="Org Logo"
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div className="no-org-logo">{org?.name[0]}</div>
                                                            )}
                                                        </div>
                                                        <div>{org?.name}</div>
                                                    </div>
                                                </a>
                                            </TableCell>
                                        )}
                                        {lang === "zh-TW" && (
                                            <TableCell align="left" style={{ color: "teal" }}>
                                                <a
                                                    href={org?.orgURL}
                                                    style={{ cursor: "pointer" }}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    alt={org.nameTw}
                                                >
                                                    <div className="org-logo-name-wrapper">
                                                        <div>
                                                            {org.logoURL ? (
                                                                <div>
                                                                    <img
                                                                        className="org-logo"
                                                                        src={org?.logoURL}
                                                                        alt="Org Logo"
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div className="no-org-logo">{org?.nameTw[0]}</div>
                                                            )}
                                                        </div>
                                                        <div>{org?.nameTw}</div>
                                                    </div>
                                                </a>
                                            </TableCell>
                                        )}
                                        {lang === "zh-CN" && (
                                            <TableCell align="left" style={{ color: "teal" }}>
                                                <a
                                                    href={org?.orgURL}
                                                    style={{ cursor: "pointer" }}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    alt={org?.nameCn}
                                                >
                                                    <div className="org-logo-name-wrapper">
                                                        <div>
                                                            {org.logoURL ? (
                                                                <div>
                                                                    <img
                                                                        className="org-logo"
                                                                        src={org.logoURL}
                                                                        alt="Org Logo"
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div className="no-org-logo">{org.nameCn[0]}</div>
                                                            )}
                                                        </div>
                                                        <div>{org.nameCn}</div>
                                                    </div>
                                                </a>
                                            </TableCell>
                                        )}
                                        <TableCell align="center">
                                            {org.status === "active" && (
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
                                            {org.status === "expired" && (
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
                                            {org.status === "pending" && (
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
                                            {org.status === "inactive" && (
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
                                        </TableCell>
                                        <TableCell align="center" style={{ color: "teal" }}>
                                            {moment(org.fromDate?.toDate().toDateString()).format("MM/DD/YYYY")} ~&nbsp;
                                            {moment(org.toDate?.toDate().toDateString()).format("MM/DD/YYYY")} <br></br>
                                            <b>
                                                ({org.years} {t("admin.org-list.years")})
                                            </b>
                                        </TableCell>

                                        {/* <TableCell align="center"> */}
                                            {/* <div>
                                                <img
                                                    className="avatar-circle"
                                                    src={org.user?.value?.photoURL}
                                                    alt="referee"
                                                />
                                            </div>
                                            <div style={{ marginLeft: "12px", fontSize: "0.8rem", color: "teal" }}>
                                                {org.user?.value?.refereeId}
                                            </div> */}
                                            {/* <Tooltip
                                                title={t("referee.org-list.view-user-contact")}
                                                arrow
                                                placement="top-start"
                                            >
                                                <VisibilityIcon
                                                    fontSize="small"
                                                    style={{ color: "grey", cursor: "pointer", marginLeft: "6px" }}
                                                    onClick={() => handleViewUser(idx)}
                                                />
                                            </Tooltip> */}
                                        {/* </TableCell> */}
                                        {/* <>
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
                                                        style={{ marginBottom: "0", borderBottom: "0" }}
                                                    >
                                                        {t("referee.org-list.user-info")}
                                                    </div>
                                                </ModalHeader>
                                                <ModalBody>
                                                    <ViewUserInfo toggle={toggleUser} record={currentRecord} />
                                                </ModalBody>
                                            </Modal>
                                        </> */}

                                        {lang === "en" && (
                                            <TableCell align="center" style={{ color: "teal" }}>
                                                {org.country?.label}
                                            </TableCell>
                                        )}
                                        {lang === "zh-TW" && (
                                            <TableCell align="center" style={{ color: "teal" }}>
                                                {org.countryTw?.label}
                                            </TableCell>
                                        )}
                                        {lang === "zh-CN" && (
                                            <TableCell align="center" style={{ color: "teal" }}>
                                                {org.countryCn?.label}
                                            </TableCell>
                                        )}
                                        <TableCell align="center">
                                            <div className="action-icons">
                                                <Tooltip title={t("admin.org-list.edit")} arrow placement="left-start">
                                                    <EditIcon
                                                        fontSize="small"
                                                        style={{ color: "grey" }}
                                                        onClick={() => handleEditRecord(idx)}
                                                    />
                                                </Tooltip>
                                                {/* <Tooltip title={t("admin.org-list.auth-edit")} arrow placement="left-start">
                                                    <MilitaryTechIcon
                                                        fontSize="small"
                                                        style={{ color: "grey" }}
                                                        onClick={() => handleEditAuthOrgRecord(idx)}
                                                    />
                                                </Tooltip> */}

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
                                                                <div
                                                                    className="page-primary-title"
                                                                    style={{ marginBottom: "0", borderBottom: "0" }}
                                                                >
                                                                    {t("admin.referee-list.edit")}
                                                                </div>
                                                            </ModalHeader>
                                                            <ModalBody>
                                                                <EditOrgRecord
                                                                    toggle={toggleEdit}
                                                                    org={currentRecord}
                                                                />
                                                            </ModalBody>
                                                        </Modal>
                                                    </>
                                        {/* <>
                                            <Modal
                                                isOpen={modalEditAuthOrg}
                                                toggle={toggleEditAuthOrg}
                                                backdrop="static"
                                                size="lg"
                                                centered={true}
                                            >
                                                <ModalHeader toggle={toggleEditAuthOrg} close={closeBtnEditAuthOrg}>
                                                    <div
                                                        className="page-primary-title"
                                                        style={{ marginBottom: "0", borderBottom: "0" }}
                                                    >
                                                        {t("admin.org-list.auth-edit")}
                                                    </div>
                                                </ModalHeader>
                                                <ModalBody>
                                                    <EditAuthOrgRecord toggle={toggleEditAuthOrg} org={currentRecord} />
                                                </ModalBody>
                                            </Modal>
                                        </> */}
                                    </TableRow>
                                ))
                        ) : (
                            <p>Loading records...</p>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <Pagination
                documents={authOrgList}
                totalRows={authOrgList.length}
                setRowsPerPage={setRowsPerPage}
                rowsPerPage={rowsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                firstRowIndex={firstRowIndex}
                lastRowIndex={lastRowIndex}
            />
        </>
    );

    const content = [
        { title: t("admin.org-list.all-orgs"), content: allWiserOrgsContent },
        { title: t("admin.org-list.authorized-orgs"), content: authorizedOrgsContent },
    ];

    return (
        <div className="record-list-container">
            {error && <p>{error}</p>}
            <div className="record-list-top">
                <div className="page-primary-title">{t("admin.org-list.title")}</div>
                <div className="record-add-btn">
                    <Tooltip title={t("referee.record.addRecordbtn")} arrow placement="right-start">
                    <Fab size="small" color="primary" aria-label="add" sx={{ marginLeft: "12px" }}>
                            <AddIcon onClick={toggleAdd} />
                        </Fab>
                        {/* <Button onClick={toggleAdd}>
                            <PostAddOutlinedIcon fontSize="medium" />
                        </Button> */}
                    </Tooltip>
                </div>
                <>
                    <Modal isOpen={modalAdd} toggle={toggleAdd} backdrop="static" size="lg" centered={true} fullscreen="lg" height="auto">
                        <ModalHeader toggle={toggleAdd} close={closeBtnAdd}>
                            <div className="page-primary-title" style={{ marginBottom: "0", borderBottom: "0" }}>
                                {" "}
                                {t("referee.record.inputRecord")}
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <AddOrgRecord toggle={toggleAdd} />
                        </ModalBody>
                    </Modal>
                </>
            </div>

            <div className="referee-list-table-container" style={{ width: "120%", margin:"0 auto", marginLeft:"20px" }}>
                <CustomTab content={content} />
            </div>
        </div>
    );
}
