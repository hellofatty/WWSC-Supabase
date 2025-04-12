/** @format */

import "./AdminDashboard.css";

import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Tooltip from "@mui/material/Tooltip";
import { PieChart } from "@mui/x-charts/PieChart";
import { styled } from "@mui/material/styles";
// import { alpha, styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
// import { DataGrid, gridClasses } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/joy/Chip";
import { zhTW } from "@mui/x-data-grid/locales";
import { zhCN } from "@mui/x-data-grid/locales";

// import { desktopOS, valueFormatter } from './webUsageStats';

// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import { useCollection } from "../../../hooks/useCollection";

function AdminRefereeDashboard() {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;

    const { documents: refereeList, error } = useCollection(
        "users",
        ["grade", "in", ["3", "4", "0"]],
        ["refereeId", "asc"]
    );

    const G3G4RefereeList = refereeList?.filter((referee) => {
        return (referee.grade === "3") | (referee.grade === "4");
    });

    const totalReferees = G3G4RefereeList?.length;

    // ------Set up Filter by Country-------
    // const [query, setQuery] = useState("all");

    // const handleCountryChange = (record) => {
    //     setQuery(record.target.value);
    // };

    let arryRecordsCountry = [];

    for (let i = 0; i < G3G4RefereeList?.length; i++) {
        arryRecordsCountry.push(G3G4RefereeList[i].country?.label);
    }

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    const arryRecordsCountryNoDup = removeDuplicates(arryRecordsCountry);
    // console.log(arryRecordsCountryNoDup);

    let arryLengthCountry = [];
    for (let i = 0; i < arryRecordsCountryNoDup?.length; i++) {
        const refereesByCountry = G3G4RefereeList?.filter((referee) => {
            return referee.country.label === arryRecordsCountryNoDup[i];
        });

        arryLengthCountry.push(refereesByCountry.length);
    }

    // console.log(arryLengthCountry);

    const refereesCountryPieChart = arryLengthCountry.map((value, index) => ({
        id: index,
        value,
        label: arryRecordsCountryNoDup[index],
    }));

    // console.log(refereesCountryPieChart);

    // CountryTw

    let arryRecordsCountryTw = [];

    for (let i = 0; i < G3G4RefereeList?.length; i++) {
        arryRecordsCountryTw.push(G3G4RefereeList[i].countryTw?.label);
    }

    // function removeDuplicates(arr) {
    //     return [...new Set(arr)];
    // }

    const arryRecordsCountryTwNoDup = removeDuplicates(arryRecordsCountryTw);
    // console.log(arryRecordsCountryTwNoDup);

    let arryLengthCountryTw = [];
    for (let i = 0; i < arryRecordsCountryTwNoDup?.length; i++) {
        const refereesByCountryTw = G3G4RefereeList?.filter((referee) => {
            return referee.countryTw.label === arryRecordsCountryTwNoDup[i];
        });

        arryLengthCountryTw.push(refereesByCountryTw.length);
    }

    // console.log(arryLengthCountryTw);

    const refereesCountryTwPieChart = arryLengthCountryTw.map((value, index) => ({
        id: index,
        value,
        label: arryRecordsCountryTwNoDup[index],
    }));

    // console.log(refereesCountryTwPieChart);

    // CountryCn

    let arryRecordsCountryCn = [];

    for (let i = 0; i < G3G4RefereeList?.length; i++) {
        arryRecordsCountryCn.push(G3G4RefereeList[i].countryCn?.label);
    }

    // function removeDuplicates(arr) {
    //     return [...new Set(arr)];
    // }

    const arryRecordsCountryCnNoDup = removeDuplicates(arryRecordsCountryCn);
    console.log(arryRecordsCountryCnNoDup);

    let arryLengthCountryCn = [];
    for (let i = 0; i < arryRecordsCountryCnNoDup?.length; i++) {
        const refereesByCountryCn = G3G4RefereeList?.filter((referee) => {
            return referee.countryCn.label === arryRecordsCountryCnNoDup[i];
        });

        arryLengthCountryCn.push(refereesByCountryCn.length);
    }

    console.log(arryLengthCountryCn);

    const refereesCountryCnPieChart = arryLengthCountryCn.map((value, index) => ({
        id: index,
        value,
        label: arryRecordsCountryCnNoDup[index],
    }));

    console.log(refereesCountryCnPieChart);

    // const listByFilter = refereeGameRecords?.filter((record) => {
    //     return query.toLowerCase() === "all" ? refereeGameRecords : record.year.toLowerCase().includes(query);
    // });

    const G3refereeList = refereeList?.filter((referee) => {
        return referee.grade === "3";
    });
    const totalG3Referees = G3refereeList?.length;

    const G4refereeList = refereeList?.filter((referee) => {
        return referee.grade === "4";
    });

    const totalG4Referees = G4refereeList?.length;

    const RITList = refereeList?.filter((rit) => {
        return rit.grade === "0";
    });

    const totalRITs = RITList?.length;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        width: "150px",
        height: "110px",
        color: theme.palette.text.secondary,
        ...theme.applyStyles("dark", {
            backgroundColor: "#1A2027",
        }),
    }));

    const columns = [
        // { field: "id", headerName: "ID", width: 90, headerAlign:"center", headerClassName: "super-app-theme--header", align:"center" },
        {
            field: "photoURL",
            headerName: t("admin.referee-list.avatar"),
            headerClassName: "super-app-theme--header",
            renderCell: (params) => (
                <Avatar
                    src={params.row.photoURL}
                    sx={{ marginTop: "6px", border: "1px solid lightgrey", marginLeft: "6px" }}
                />
            ),

            width: 100,
            sortable: false,
            filterable: false,
            align: "center",
        },
        {
            field: "name",
            headerName: t("admin.referee-list.name"),
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            width: 180,
            editable: true,
            align: "center",
        },
        {
            field: "otherName",
            headerName: t("admin.referee-list.othername"),
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            width: 180,
            editable: true,
            align: "center",
        },
        {
            field: "grade",
            headerName: t("admin.referee-list.grade"),
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            type: "singleSelect",
            valueOptions: ["3", "4"],
            width: 150,
            editable: true,
            align: "center",
        },
        {
            field: "refereeID",
            headerName: t("admin.referee-list.referee-id"),
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            width: 200,
            editable: true,
            align: "center",
        },
        {
            field: "status",
            headerName: t("admin.referee-list.status"),
            headerClassName: "super-app-theme--header",
            type: "singleSelect",
            valueOptions: ["active", "expired", "pending", "inactive"],
            headerAlign: "center",
            renderCell: (params) =>
                params.row.status === "active" ? (
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
                ) : params.row.status === "expired" ? (
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
                ) : params.row.status === "pending" ? (
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
                ) : params.row.status === "inactive" ? (
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
                ) : null,

            width: 160,
            editable: true,
            align: "center",
        },
        {
            field: "expiryDate",
            headerName: t("admin.referee-list.expirydate"),
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            // type: "number",
            // type: "date",
            width: 160,
            editable: true,
            align: "center",
        },
    ];

    const rows = G3G4RefereeList?.map((row, index) => ({
        id: index + 1,
        photoURL: row.photoURL,
        name: row.name,
        otherName: row.otherName,
        grade: row.grade,
        refereeID: row.refereeId,
        status: row.status,
        expiryDate: row.expiryDate,
    }));

    console.log(rows);

    // const ODD_OPACITY = 0.2;

    // const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    //     [`& .${gridClasses.row}.even`]: {
    //         backgroundColor: theme.palette.grey[200],
    //         "&:hover": {
    //             backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
    //             "@media (hover: none)": {
    //                 backgroundColor: "transparent",
    //             },
    //         },
    //         "&.Mui-selected": {
    //             backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY + theme.palette.action.selectedOpacity),
    //             "&:hover": {
    //                 backgroundColor: alpha(
    //                     theme.palette.primary.main,
    //                     ODD_OPACITY + theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity
    //                 ),
    //                 // Reset on touch devices, it doesn't add specificity
    //                 "@media (hover: none)": {
    //                     backgroundColor: alpha(
    //                         theme.palette.primary.main,
    //                         ODD_OPACITY + theme.palette.action.selectedOpacity
    //                     ),
    //                 },
    //             },
    //         },
    //     },
    // }));
    const legendPlacement = {
        slotProps: {
            legend: {
                direction: "column",
                position: {
                    vertical: "middle",
                    horizontal: "right",
                },
                padding: 0,
                itemMarkWidth: 20,
                itemMarkHeight: 8,
                markGap: 5,
                itemGap: 5,
            },
        },
        margin: { top: 0, bottom: 10, left: 10, right: 10 },
    };

    return (
        <>
            <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
                <div>{error}</div>

                <Box sx={{ width: "100%", marginTop: "20px" }}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 2 }}>
                        <Item>
                            <div className="item-wrapper">
                                <span>{t("admin.dashboard.total-referees")}:</span>
                                <div className="item-number">{totalReferees}</div>
                            </div>
                            <div className="item-more-info">
                                <Link to="/admin-zone/referee-list">
                                    <Tooltip title={t("admin.referee-list.title")} arrow placement="bottom">
                                        <ReadMoreIcon style={{ color: "grey" }} />
                                    </Tooltip>
                                </Link>
                            </div>
                        </Item>
                        <Item style={{ background: "brown", color: "white" }}>
                            <div className="item-wrapper">
                                <span>{t("admin.dashboard.total-g3-referees")}:</span>
                                <div className="item-number">{totalG3Referees}</div>
                            </div>{" "}
                            <div className="item-more-info">
                                <Link to="/admin-zone/G3-referee-list">
                                    <Tooltip title={t("admin.referee-list.G3-title")} arrow placement="bottom">
                                        <ReadMoreIcon style={{ color: "white" }} />
                                    </Tooltip>
                                </Link>
                            </div>
                        </Item>
                        <Item style={{ background: "gold", color: "black" }}>
                            <div className="item-wrapper">
                                <span>{t("admin.dashboard.total-g4-referees")}:</span>
                                <div className="item-number">{totalG4Referees}</div>
                            </div>{" "}
                            <div className="item-more-info">
                                <Link to="/admin-zone/G4-referee-list">
                                    <Tooltip title={t("admin.referee-list.G4-title")} arrow placement="bottom">
                                        <ReadMoreIcon style={{ color: "grey" }} />
                                    </Tooltip>
                                </Link>
                            </div>
                        </Item>
                        <Item style={{ background: "green", color: "white" }}>
                            <div className="item-wrapper">
                                <span>{t("admin.dashboard.total-rits")}:</span>
                                <div className="item-number">{totalRITs}</div>
                            </div>{" "}
                            <div className="item-more-info">
                                <Link to="/admin-zone/referee-in-training-list">
                                    <Tooltip title={t("admin.referee-list.RIT-title")} arrow placement="bottom">
                                        <ReadMoreIcon style={{ color: "white" }} />
                                    </Tooltip>
                                </Link>
                            </div>
                        </Item>
                        {lang === "en" && (
                            <PieChart
                                series={[
                                    {
                                        data: refereesCountryPieChart,
                                        highlightScope: { fade: "global", highlight: "item" },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                                    },
                                ]}
                                width={400}
                                height={200}
                                // {...legendPlacement}
                                margin={{ top: 0, bottom: 10, left: 10, right: 100 }}
                                slotProps={{
                                    legend: {
                                        direction: "column",
                                        position: {
                                            vertical: "middle",
                                            horizontal: "right",
                                        },
                                        padding: 0,
                                        itemMarkWidth: 20,
                                        itemMarkHeight: 8,
                                        markGap: 5,
                                        itemGap: 5,
                                    },
                                }}
                            />
                        )}
                        {lang === "zh-TW" && (
                            <PieChart
                                series={[
                                    {
                                        data: refereesCountryTwPieChart,
                                        highlightScope: { fade: "global", highlight: "item" },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                                    },
                                ]}
                                width={400}
                                height={200}
                                {...legendPlacement}
                            />
                        )}
                        {lang === "zh-CN" && (
                            <PieChart
                                series={[
                                    {
                                        data: refereesCountryCnPieChart,
                                        highlightScope: { fade: "global", highlight: "item" },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                                    },
                                ]}
                                width={400}
                                height={200}
                                {...legendPlacement}
                            />
                        )}
                    </Stack>
                </Box>
                <Box
                    sx={{
                        height: 400,
                        maxHeight: 600,
                        width: "100%",
                        marginTop: "12px",
                        "& .super-app-theme--header": {
                            backgroundColor: "grey",
                            color: "white",
                        },
                    }}
                >
                    {lang === "en" && (
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            columnHeaderHeight={40}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 10,
                                    },
                                },
                            }}
                            pageSizeOptions={[5, 10, 25]}
                            // pageSizeOptions={[10]}
                            // checkboxSelection
                            disableRowSelectionOnClick
                            getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd")}
                            sx={{
                                ".MuiTablePagination-displayedRows": {
                                    marginTop: "1em",
                                    marginBottom: "1em",
                                },
                                ".MuiTablePagination-selectLabel": {
                                    marginTop: "1em",
                                    marginBottom: "1em",
                                },
                                ".MuiDataGrid-container--top [role=row]": {
                                    backgroundColor: "grey",
                                },
                            }}
                        />
                    )}
                    {lang === "zh-TW" && (
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            columnHeaderHeight={40}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 10,
                                    },
                                },
                            }}
                            localeText={zhTW.components.MuiDataGrid.defaultProps.localeText}
                            pageSizeOptions={[5, 10, 25]}
                            // pageSizeOptions={[10]}
                            // checkboxSelection
                            disableRowSelectionOnClick
                            getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd")}
                            sx={{
                                ".MuiTablePagination-displayedRows": {
                                    marginTop: "1em",
                                    marginBottom: "1em",
                                },
                                ".MuiTablePagination-selectLabel": {
                                    marginTop: "1em",
                                    marginBottom: "1em",
                                },
                            }}
                        />
                    )}
                    {lang === "zh-CN" && (
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            columnHeaderHeight={40}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 10,
                                    },
                                },
                            }}
                            pageSizeOptions={[5, 10, 25]}
                            // pageSizeOptions={[10]}
                            // checkboxSelection
                            disableRowSelectionOnClick
                            getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd")}
                            localeText={zhCN.components.MuiDataGrid.defaultProps.localeText}
                            sx={{
                                ".MuiTablePagination-displayedRows": {
                                    marginTop: "1em",
                                    marginBottom: "1em",
                                },
                                ".MuiTablePagination-selectLabel": {
                                    marginTop: "1em",
                                    marginBottom: "1em",
                                },
                            }}
                        />
                    )}
                </Box>
            </Container>
        </>
    );
} //

export default AdminRefereeDashboard;
