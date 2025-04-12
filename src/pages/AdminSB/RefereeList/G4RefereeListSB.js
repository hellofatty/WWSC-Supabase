
import "./RefereeList.css";
import { useState, useEffect } from "react";
import { supabase } from "../../../supabase/supabaseClient";
import Chip from "@mui/joy/Chip";

import AdminSidebarSB from "../../../components/AdminSidebar/AdminSidebarSB";
import Pagination from "../../../components/Pagination/Pagination";

// ---------Material UI-------
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import TableChartIcon from "@mui/icons-material/TableChart";
import OnDeviceTrainingIcon from "@mui/icons-material/OnDeviceTraining";
import CircularProgress from "@mui/material/CircularProgress";

import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// import MyModal from "../../../components/MyModal/MyModal";
// import RefereeCard from "../../../components/RefereeCard/RefereeCard";

export default function G4RefereeListSB() {
    // All referees
    const { t } = useTranslation("global");
    const [referees, setReferees] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filter, setFilter] = useState("all");
    const [toggle, setToggle] = useState(false);
    const [query, setQuery] = useState("");

    // Fetch referees from Supabase
    useEffect(() => {
        const fetchReferees = async () => {
            try {
                const { data, error } = await supabase
                    .from("referees")
                    .select("*")
                    // .select(
                    //     `
                    //     *,
                    //     organizations (
                    //         id,
                    //         name,
                    //         name_tw,
                    //         name_cn
                    //     )
                    // `
                    // )
                    .eq("grade", "4")
                    .order("referee_id", { ascending: true });

                if (error) throw error;
                setReferees(data);
            } catch (err) {
                console.error("Error fetching referees:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReferees();
    }, []);

    // Handle delete
    const handleDelete = async (id) => {
        try {
            const { error } = await supabase.from("referees").delete().eq("id", id);

            if (error) throw error;

            // Update local state
            setReferees((prev) => prev.filter((ref) => ref.id !== id));
            toast.success(t("admin.referee-list.delete-success"));
        } catch (err) {
            console.error("Error deleting referee:", err);
            toast.error(t("admin.referee-list.delete-error"));
        }
    };

    const handleStatusChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    };

    // Filter referees based on status
    const listByFilter = referees?.filter((referee) => {
        switch (filter) {
            case "all":
                return true;
            case "active":
            case "expired":
            case "pending":
            case "inactive":
                return referee.status === filter;
            default:
                return true;
        }
    });

    // Pagination
    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    const currentRows = listByFilter?.slice(firstRowIndex, lastRowIndex);

    return (
        <div className="referee-home">
            <AdminSidebarSB />
            <div className="referee-list-container">
                {error && <p>{error}</p>}
                {loading ? (
                    <div className="loading-container">
                        <CircularProgress />
                        <p>{t("general.loading")}</p>
                    </div>
                ) : (
                    <div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span style={{ marginLeft: "12px", marginBottom: "12px" }}>
                                <OnDeviceTrainingIcon style={{ fontSize: "2.5rem", color: "Teal" }} />
                            </span>
                            <div className="page-primary-title" style={{ marginLeft: "6px" }}>
                                {t("admin.referee-list.G4-title")}
                            </div>
                        </div>

                        <div className="referee-list-filter-bar">
                            <div className="referee-list-select-container">
                                <span style={{ color: "grey" }}>{t("admin.referee-list.by-status")}</span>:
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
                                    value={filter}
                                    onChange={handleStatusChange}
                                >
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
                                    <Tooltip title={t("admin.referee-list.search-rit")}>
                                        <SearchIcon className="searchIcon" />
                                    </Tooltip>
                                    <input
                                        placeholder={t("admin.referee-list.search-rit")}
                                        className="searchInput"
                                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                                    />
                                </div>
                            </div>

                            <div className="referee-list-layout-icon">
                                <span style={{ color: "grey", marginRight: "6px" }}>
                                    {" "}
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
                                    {referees ? (
                                        currentRows
                                            // .filter((user) => user.refereeId.toLowerCase().includes(query))
                                            .filter((referee) => {
                                                return query.toLowerCase() === ""
                                                    ? currentRows
                                                    : referee.referee_id.toLowerCase().includes(query) ||
                                                          referee.name.toLowerCase().includes(query) ||
                                                          referee.display_name.toLowerCase().includes(query) ||
                                                          referee.other_name.toLowerCase().includes(query) ||
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
                                                            <span>
                                                                <img
                                                                    className="avatar-circle"
                                                                    src={referee.avatar_url}
                                                                    alt="referee"
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="referee-list-info">
                                                            <span className="referee-list-name">
                                                                <strong>{referee.name}</strong>
                                                            </span>
                                                            <span>{referee.referee_id}</span>
                                                            <span>
                                                                {t("admin.referee-list.grade")}: {referee.grade}
                                                            </span>
                                                            <span>
                                                                {t("admin.referee-list.othername")}:{referee.other_name}
                                                            </span>
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
                                                            <div className="expiry-date">
                                                                <span style={{ color: "black" }}>
                                                                    {t("admin.referee-list.expirydate")}:
                                                                </span>
                                                                <span style={{ color: "black" }}>
                                                                    <span style={{ fontFamily: "Georgia, serif" }}>
                                                                        <strong>{referee.expiry_date}</strong>
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
                                                                                    referee.grade === "3"
                                                                                        ? "Moccasin"
                                                                                        : "grey",
                                                                            }}
                                                                            onClick={() => handleDelete(referee.id)}
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
                            <div className="referee-list-table-container">
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 450 }} size="small" aria-label="simple table">
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
                                            {referees ? (
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
                                                        <TableRow
                                                            key={referee.id}
                                                            hover={true}
                                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                <span>
                                                                    <img
                                                                        className="avatar-circle"
                                                                        src={referee.avatar_url}
                                                                        alt="referee"
                                                                    />
                                                                </span>
                                                            </TableCell>
                                                            <TableCell align="center">{referee.name}</TableCell>
                                                            <TableCell align="center">{referee.grade}</TableCell>
                                                            <TableCell align="center">{referee.referee_id}</TableCell>
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
                                                            <TableCell align="center">{referee.expiry_date}</TableCell>
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
                                                                            onClick={() => handleDelete(referee.id)}
                                                                        />
                                                                    </Tooltip>
                                                                </div>
                                                            </TableCell>
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
                )}
            </div>
        </div>
    );
}
