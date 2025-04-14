/** @format */

import "./OrgList.css";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "../../../supabase/supabaseClient";
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

import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import Tooltip from "@mui/material/Tooltip";

import {
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

// import { InputGroup, InputGroupText, Input } from "reactstrap";

// import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTranslation } from "react-i18next";

import moment from "moment";
import AddOrgRecordSB from "./AddOrgRecordSB";
import EditOrgRecordSB from "./EditOrgRecordSB";

// import ViewUserInfo from "../Organizations/ViewUserInfo";
import CustomTab from "../../../components/CustomTab/CustomTab";
import { toast } from "react-toastify";

// import MyModal from "../../../components/MyModal/MyModal";
// import RefereeCard from "../../../components/RefereeCard/RefereeCard";

export default function OrgListCompSB() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    // State
    const [organizations, setOrganizations] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // Fetch all organizations
    const fetchOrganizations = useCallback(async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("organizations")
                .select(`
                    id,
                    name,
                    name_tw,
                    name_cn,
                    city,
                    city_tw,
                    city_cn,
                    logo_url,
                    org_url,
                    is_authorized,
                    status,
                    from_date,
                    to_date,
                    years,
                    country_en,
                    country_tw,
                    country_cn
                `)
                .order("name", { ascending: true });

            if (error) throw error;
            setOrganizations(data);
        } catch (err) {
            console.error("Error fetching organizations:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    // Initial data fetch
    useEffect(() => {
        fetchOrganizations();
    }, [fetchOrganizations]);

    // Set up realtime subscriptions
    useEffect(() => {
        // Subscribe to organizations table changes
        const orgsSubscription = supabase
            .channel('org-changes')
            .on(
                'postgres_changes',
                {
                    event: '*', // Listen to all changes
                    schema: 'public',
                    table: 'organizations'
                },
                (payload) => {
                    console.log('Organization change received:', payload);
                    fetchOrganizations(); // Refresh data when changes occur
                }
            )
            .subscribe();

        // Cleanup subscription
        return () => {
            supabase.removeChannel(orgsSubscription);
        };
    }, [fetchOrganizations]);

    // Handle delete
    const handleDelete = async (id) => {
        try {
            const { error } = await supabase.from("organizations").delete().eq("id", id);

            if (error) throw error;

            setOrganizations((prev) => prev.filter((org) => org.id !== id));
            toast.success(t("admin.org-list.delete-success"));
        } catch (err) {
            console.error("Error deleting organization:", err);
            toast.error(t("admin.org-list.delete-error"));
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
    const [currentRecord, setCurrentRecord] = useState(null);

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
    // const [modalEdit, setModalEdit] = useState(false);
    // const toggleEdit = () => setModalEdit(!modalEdit);
    // const handleEditRecord = (idx) => {
    //     setCurrentRecord(currentRows[idx]);
    //     toggleEdit();
    // };

    // const closeBtnEdit = (
    //     <Button onClick={toggleEdit}>
    //         <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
    //     </Button>
    // );

    const handleStatusChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    };

    // Filter functions
    const filteredOrgs = organizations?.filter((org) => {
        if (filter === "all") return true;
        return org.status === filter;
    });

    const authorizedOrgs = organizations?.filter(
        (org) => org.is_authorized === true && (filter === "all" || org.status === filter)
    );

    // Pagination
    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    const currentRows = filteredOrgs?.slice(firstRowIndex, lastRowIndex);

    if (loading) {
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        );
    }

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
                        {organizations ? (
                            currentRows.map((org, idx) => (
                                <TableRow
                                    key={idx}
                                    hover={true}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    {lang === "en" && (
                                        <TableCell align="left" style={{ color: "teal" }}>
                                            <a
                                                href={org?.org_url}
                                                style={{ cursor: "pointer" }}
                                                target="_blank"
                                                rel="noreferrer"
                                                alt={org?.name}
                                            >
                                                <div className="org-logo-name-wrapper">
                                                    <div>
                                                        {org?.logo_url ? (
                                                            <div>
                                                                <img
                                                                    className="org-logo"
                                                                    src={org?.logo_url}
                                                                    alt="Org Logo"
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="no-org-logo">{org?.name[0]}</div>
                                                        )}
                                                    </div>
                                                    <div>{org?.name}</div>
                                                    {org?.is_authorized === true && org?.status === "active" && (
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
                                                href={org?.org_url}
                                                style={{ cursor: "pointer" }}
                                                target="_blank"
                                                rel="noreferrer"
                                                alt={org?.name_tw}
                                            >
                                                <div className="org-logo-name-wrapper">
                                                    <div>
                                                        {org?.logo_url ? (
                                                            <div>
                                                                <img
                                                                    className="org-logo"
                                                                    src={org?.logo_url}
                                                                    alt="Org Logo"
                                                                    style={{ objectFit: "cover" }}
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="no-org-logo">{org?.name_tw[0]}</div>
                                                        )}
                                                    </div>
                                                    <div>
                                                        {org?.name_tw}
                                                        {org?.is_authorized === true && org?.status === "active" && (
                                                            <Tooltip title={t("admin.org-list.auth-active-org")}>
                                                                <MilitaryTechIcon />
                                                            </Tooltip>
                                                        )}
                                                    </div>
                                                </div>
                                            </a>
                                        </TableCell>
                                    )}
                                    {lang === "zh-CN" && (
                                        <TableCell align="left" style={{ color: "teal" }}>
                                            <a
                                                href={org?.org_url}
                                                style={{ cursor: "pointer" }}
                                                target="_blank"
                                                rel="noreferrer"
                                                alt={org?.name_cn}
                                            >
                                                <div className="org-logo-name-wrapper">
                                                    <div>
                                                        {org?.logo_url ? (
                                                            <div>
                                                                <img
                                                                    className="org-logo"
                                                                    src={org.logo_url}
                                                                    alt="Org Logo"
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="no-org-logo">{org?.name_cn[0]}</div>
                                                        )}
                                                    </div>
                                                    <div>
                                                        {org?.name_cn}
                                                        {org?.is_authorized === true && org?.status === "active" && (
                                                            <Tooltip title={t("admin.org-list.auth-active-org")}>
                                                                <MilitaryTechIcon />
                                                            </Tooltip>
                                                        )}
                                                    </div>
                                                </div>
                                            </a>
                                        </TableCell>
                                    )}

                                    {lang === "en" && (
                                        <TableCell align="center" style={{ color: "teal" }}>
                                            {org?.country_en.label}
                                        </TableCell>
                                    )}
                                    {lang === "zh-TW" && (
                                        <TableCell align="center" style={{ color: "teal" }}>
                                            {org?.country_tw.label}
                                        </TableCell>
                                    )}
                                    {lang === "zh-CN" && (
                                        <TableCell align="center" style={{ color: "teal" }}>
                                            {org?.country_cn.label}
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
                                                    onClick={() => handleDelete(org.id)}
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
                                                <EditOrgRecordSB toggle={toggleAllEdit} org={currentRecord} />
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
                documents={filteredOrgs}
                totalRows={filteredOrgs && filteredOrgs.length}
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
                    <select
                        className="wwsc-select w3-select w3-border "
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
                        }}
                        value={filter}
                        onChange={handleStatusChange}
                    >
                        <option value="all">{t("admin.org-list.all-status")}</option>
                        <option value="active">{t("admin.referee-list.active")}</option>
                        <option value="expired">{t("admin.referee-list.expired")}</option>
                        <option value="pending">{t("admin.referee-list.pending")}</option>
                        <option value="inactive">{t("admin.referee-list.inactive")}</option>
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

                            {/* <TableCell align="center" style={{ color: "white", whiteSpace: "nowrap", width: "180px" }}>
                                {t("admin.org-list.action")}
                            </TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {authorizedOrgs ? (
                            authorizedOrgs.map((org, idx) => (
                                <TableRow
                                    key={idx}
                                    hover={true}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    {lang === "en" && (
                                        <TableCell align="left" style={{ color: "teal" }}>
                                            <a
                                                href={org?.org_url}
                                                style={{ cursor: "pointer" }}
                                                target="_blank"
                                                rel="noreferrer"
                                                alt={org?.name}
                                            >
                                                <div className="org-logo-name-wrapper">
                                                    <div>
                                                        {org?.logo_url ? (
                                                            <div>
                                                                <img
                                                                    className="org-logo"
                                                                    src={org?.logo_url}
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
                                                href={org?.org_url}
                                                style={{ cursor: "pointer" }}
                                                target="_blank"
                                                rel="noreferrer"
                                                alt={org.name_tw}
                                            >
                                                <div className="org-logo-name-wrapper">
                                                    <div>
                                                        {org.logo_url ? (
                                                            <div>
                                                                <img
                                                                    className="org-logo"
                                                                    src={org?.logo_url}
                                                                    alt="Org Logo"
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="no-org-logo">{org?.name_tw[0]}</div>
                                                        )}
                                                    </div>
                                                    <div>{org?.name_tw}</div>
                                                </div>
                                            </a>
                                        </TableCell>
                                    )}
                                    {lang === "zh-CN" && (
                                        <TableCell align="left" style={{ color: "teal" }}>
                                            <a
                                                href={org?.org_url}
                                                style={{ cursor: "pointer" }}
                                                target="_blank"
                                                rel="noreferrer"
                                                alt={org?.name_cn}
                                            >
                                                <div className="org-logo-name-wrapper">
                                                    <div>
                                                        {org.logo_url ? (
                                                            <div>
                                                                <img
                                                                    className="org-logo"
                                                                    src={org.logo_url}
                                                                    alt="Org Logo"
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="no-org-logo">{org.name_cn[0]}</div>
                                                        )}
                                                    </div>
                                                    <div>{org.name_cn}</div>
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
                                        {moment(org?.from_date).format("MM/DD/YYYY")} ~&nbsp;
                                        {moment(org?.to_date).format("MM/DD/YYYY")} <br />
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
                                            {org?.country_en.label}
                                        </TableCell>
                                    )}
                                    {lang === "zh-TW" && (
                                        <TableCell align="center" style={{ color: "teal" }}>
                                            {org?.country_tw.label}
                                        </TableCell>
                                    )}
                                    {lang === "zh-CN" && (
                                        <TableCell align="center" style={{ color: "teal" }}>
                                            {org?.country_cn.label}
                                        </TableCell>
                                    )}
                                    {/* <TableCell align="center">
                                        <div className="action-icons"> */}
                                            {/* <Tooltip title={t("admin.org-list.edit")} arrow placement="left-start">
                                                <EditIcon
                                                    fontSize="small"
                                                    style={{ color: "grey" }}
                                                    onClick={() => handleEditRecord(idx)}
                                                />
                                            </Tooltip> */}
                                         

                                            {/* <Tooltip title={t("admin.org-list.delete")} arrow placement="right-start">
                                                <DeleteIcon
                                                    fontSize="small"
                                                    style={{ color: "grey" }}
                                                    onClick={() => handleDelete(org.id)}
                                                />
                                            </Tooltip> */}
                                        {/* </div>
                                    </TableCell> */}
                                    {/* <>
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
                                                <EditOrgRecordSB toggle={toggleEdit} org={currentRecord} />
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
                documents={authorizedOrgs}
                totalRows={authorizedOrgs.length}
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
                    <Modal
                        isOpen={modalAdd}
                        toggle={toggleAdd}
                        backdrop="static"
                        size="lg"
                        centered={true}
                        fullscreen="lg"
                        height="auto"
                    >
                        <ModalHeader toggle={toggleAdd} close={closeBtnAdd}>
                            <div className="page-primary-title" style={{ marginBottom: "0", borderBottom: "0" }}>
                                {" "}
                                {t("referee.record.inputRecord")}
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <AddOrgRecordSB toggle={toggleAdd} />
                        </ModalBody>
                    </Modal>
                </>
            </div>

            <div
                className="referee-list-table-container"
                style={{ width: "120%", margin: "0 auto", marginLeft: "20px" }}
            >
                <CustomTab content={content} />
            </div>
        </div>
    );
}
