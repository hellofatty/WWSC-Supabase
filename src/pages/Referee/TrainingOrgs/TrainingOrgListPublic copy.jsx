/** @format */

// import "./OrgList.css";
import { useCollection } from "../../../hooks/useCollection";

import Pagination from "../../../components/Pagination/Pagination";

// ---------Material UI-------
// import SearchIcon from "@mui/icons-material/Search";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// import Button from "@mui/material/Button";
// import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
// import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
// import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
// import TableChartIcon from "@mui/icons-material/TableChart";

// import Switch from "@mui/material/Switch";
// import Tooltip from "@mui/material/Tooltip";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// import { InputGroup, InputGroupText, Input } from "reactstrap";

// import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTranslation } from "react-i18next";
import { useState } from "react";
// import { useFirestore } from "../../../hooks/useFirestore";
import moment from "moment";
// import AddOrgRecord from "../Organizations/AddOrgRecord";
// import EditOrgRecord from "../Organizations/EditOrgRecord";

// import ViewUserInfo from "../TrainingOrgs/ViewUserInfo";
import CircularProgress from "@mui/material/CircularProgress";

// import MyModal from "../../../components/MyModal/MyModal";
// import RefereeCard from "../../../components/RefereeCard/RefereeCard";

export default function TrainingOrgListPublic() {
    
    const { t, i18n } = useTranslation();

    const lang = i18n.language;

    const { documents: authOrglist, error } = useCollection("organizations", ["isAuthorized", "==", true], ["name", "asc"]);
    


 
    // // ------Open Add Modal-------
    // const [modalAdd, setModalAdd] = useState(false);
    // const toggleAdd = () => setModalAdd(!modalAdd);
    // const closeBtnAdd = (
    //     <Button onClick={toggleAdd}>
    //         <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
    //     </Button>
    // );

    // // ------Open Edit Modal-------
    // const [currentRecord, setCurrentRecord] = useState(null);

    // const [modalUser, setModalUser] = useState(false);
    // const toggleUser = () => setModalUser(!modalUser);

    // const handleEditRecord = (idx) => {
    //     setCurrentRecord(currentRows[idx]);
    //     toggleUser();
    // };

    // const closeBtnUser = (
    //     <Button onClick={toggleUser}>
    //         <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
    //     </Button>
    // );

    // ------Set up Pagnation-------

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    const currentRows = authOrglist ? authOrglist.slice(firstRowIndex, lastRowIndex) : null;


    if (!authOrglist) {
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        );
    }

    console.log(authOrglist);

    return (
        <div className="record-list-container" style={{margin:"0 auto"}}>
            {error && <p>{error}</p>}
            <div className="record-list-top">
                <div className="page-primary-title">{t("admin.org-list.title")}</div>
            </div>

            {/* sx={{ Width: 350 }} */}
            {/*--------------Org List Table Layout ----------*/}
            <div className="org-list-table-container" style={{width:"80%"}}>
                <TableContainer component={Paper}>
                    <Table  size="small" aria-label="simple table" >
                        <TableHead>
                            <TableRow style={{ backgroundColor: "grey" }}>
                                <TableCell style={{ color: "white", whiteSpace: "nowrap", width: "80px" }}>
                                    {t("admin.org-list.name")}
                                </TableCell>

                                <TableCell
                                    align="center"
                                    style={{ color: "white", whiteSpace: "nowrap", width: "30px" }}
                                >
                                    {t("admin.org-list.status")}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    style={{ color: "white", whiteSpace: "nowrap", width: "60px" }}
                                >
                                    {t("admin.org-list.period")}
                                </TableCell>
                                {/* <TableCell
                                    align="center"
                                    style={{ color: "white", whiteSpace: "nowrap", width: "100px" }}
                                >
                                    {t("admin.org-list.contact")}
                                </TableCell> */}
                                <TableCell
                                    align="center"
                                    style={{ color: "white", whiteSpace: "nowrap", width: "50px" }}
                                >
                                    {t("admin.org-list.country")}
                                </TableCell>

                                {/* <TableCell
                                    align="center"
                                    style={{ color: "white", whiteSpace: "nowrap", width: "200px" }}
                                >
                                    {t("admin.org-list.action")}
                                </TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {authOrglist ? (
                                currentRows
                                    // .filter((org) => org.isAuthorized === true)
                                    .map((org, idx) => (
                                        <TableRow
                                            key={idx}
                                            hover={true}
                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                        >
                                            {lang === "en" && (
                                                <TableCell align="left" style={{ color: "teal" }}>
                                                    <a
                                                        href={org.orgURL}
                                                        style={{ cursor: "pointer" }}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        alt={org.name}
                                                    >
                                                        <div className="org-logo-name-wrapper">
                                                            <div>
                                                                {org.logoURL ? (
                                                                    
                                                                        <img
                                                                            className="org-logo"
                                                                            src={org.logoURL}
                                                                            alt="Org Logo"
                                                                        />
                                                                    
                                                                ) : (
                                                                    <span className="no-org-logo">{org.name[0]}</span>
                                                                )}
                                                            </div>
                                                            <div>{org.name}</div>
                                                        </div>
                                                    </a>
                                                </TableCell>
                                            )}
                                            {lang === "zh-TW" && (
                                                <TableCell align="left" style={{ color: "teal" }}>
                                                    <a
                                                        href={org.orgURL}
                                                        style={{ cursor: "pointer" }}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        alt={org.nameTw}
                                                    >
                                                        {" "}
                                                        <div className="org-logo-name-wrapper">
                                                            <div>
                                                                {org.logoURL ? (
                                                                    
                                                                        <img
                                                                            className="org-logo"
                                                                            src={org.logoURL}
                                                                            alt="Org Logo"
                                                                        />
                                                                   
                                                                ) : (
                                                                    <span className="no-org-logo">{org.nameTw[0]}</span>
                                                                )}
                                                            </div>
                                                            <div>{org.nameTw}</div>
                                                        </div>
                                                    </a>
                                                </TableCell>
                                            )}
                                            {lang === "zh-CN" && (
                                                <TableCell align="left" style={{ color: "teal" }}>
                                                    <a
                                                        href={org.orgURL}
                                                        style={{ cursor: "pointer" }}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        alt={org.nameCn}
                                                    >
                                                        {" "}
                                                        <div className="org-logo-name-wrapper">
                                                            <div>
                                                                {org.logoURL ? (
                                                                    <span>
                                                                        <img
                                                                            className="org-logo"
                                                                            src={org.logoURL}
                                                                            alt="Org Logo"
                                                                        />
                                                                    </span>
                                                                ) : (
                                                                    <span className="no-org-logo">{org.nameCn[0]}</span>
                                                                )}
                                                            </div>
                                                            <div>{org.nameCn}</div>
                                                        </div>
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
                                            <TableCell align="center" style={{ color: "teal" }}>
                                                {moment(org.fromDate.toDate().toDateString()).format("MM/DD/YYYY")}{" "}
                                                ~&nbsp;
                                                {moment(org.toDate.toDate().toDateString()).format("MM/DD/YYYY")}{" "}
                                                <br></br>
                                                <b>
                                                    ({org.years} {t("admin.org-list.years")})
                                                </b>
                                            </TableCell>
                                            {/* <TableCell align="center"> */}
                                                {/* <span>
                                                    <img
                                                        className="avatar-circle"
                                                        src={org.user.value.photoURL}
                                                        alt="referee"
                                                    />
                                                </span>
                                                <span
                                                    style={{
                                                        marginLeft: "12px",
                                                        fontSize: "0.8rem",
                                                        marginRight: "12px",
                                                        color: "teal",
                                                    }}
                                                >
                                                    {org.user.value.refereeId}
                                                </span>{" "} */}
                                                {/* <Tooltip
                                                    title={t("referee.org-list.view-user-contact")}
                                                    arrow
                                                    placement="right-start"
                                                >
                                                    <VisibilityIcon
                                                        fontSize="small"
                                                        style={{ color: "grey", cursor: "pointer" }}
                                                        onClick={() => handleEditRecord(idx)}
                                                    />
                                                </Tooltip> */}
                                                {/* <div className="action-icons"></div> */}
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
                                                        <div className="page-primary-title">{t("referee.org-list.user-info")}</div>
                                                    </ModalHeader>
                                                    <ModalBody>
                                                        <ViewUserInfo toggle={toggleUser} record={currentRecord} />
                                                    </ModalBody>
                                                </Modal>
                                            </> */}
                                            {lang === "en" && <TableCell align="center">{org.country.label}</TableCell>}
                                            {lang === "zh-TW" && (
                                                <TableCell align="center">{org.countryTw.label}</TableCell>
                                            )}
                                            {lang === "zh-CN" && (
                                                <TableCell align="center">{org.countryCn.label}</TableCell>
                                            )}
                                        </TableRow>
                                    ))
                            ) : (
                                <p>Loading records...</p>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Pagination
                    documents={authOrglist}
                    totalRows={authOrglist && authOrglist.length}
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
