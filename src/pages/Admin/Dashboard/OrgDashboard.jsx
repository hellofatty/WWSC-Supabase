/** @format */

import "./AdminDashboard.css";

import { useState } from "react";
import { Container, MenuItem, TextField } from "@mui/material";
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
import { DataGrid, GridCloseIcon } from "@mui/x-data-grid";
// import { DataGrid, gridClasses } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import Chip from "@mui/joy/Chip";
import { zhTW } from "@mui/x-data-grid/locales";
import { zhCN } from "@mui/x-data-grid/locales";

// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import { useCollection } from "../../../hooks/useCollection";
import { useTheme } from "@mui/material/styles";
import { blueberryTwilightPalette, mangoFusionPalette, cheerfulFiestaPalette } from "@mui/x-charts/colorPalettes";

function OrgDashboard() {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;

    const { documents: orgList, error } = useCollection("organizations");

    const authOrgList = orgList?.filter((org) => org.isAuthorized === true);

    const totalOrgs = orgList?.length;
    const totalAuthOrgs = authOrgList?.length;

    // ------Set up Filter by Country-------
    // const [query, setQuery] = useState("all");

    // const handleCountryChange = (record) => {
    //     setQuery(record.target.value);
    // };

    let arryOrgsCountry = [];

    for (let i = 0; i < orgList?.length; i++) {
        arryOrgsCountry.push(orgList[i].country?.label);
    }

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    const arryOrgsCountryNoDup = removeDuplicates(arryOrgsCountry);
    // console.log(arryRecordsCountryNoDup);

    let arryLengthCountry = [];
    for (let i = 0; i < arryOrgsCountryNoDup?.length; i++) {
        const orgsByCountry = orgList?.filter((org) => {
            return org.country.label === arryOrgsCountryNoDup[i];
        });

        arryLengthCountry.push(orgsByCountry.length);
    }

    // console.log(arryLengthCountry);

    const orgsCountryPieChart = arryLengthCountry.map((value, index) => ({
        id: index,
        value,
        label: arryOrgsCountryNoDup[index],
    }));

    // console.log(refereesCountryPieChart);

    // CountryTw

    let arryOrgsCountryTw = [];

    for (let i = 0; i < orgList?.length; i++) {
        arryOrgsCountryTw.push(orgList[i].countryTw?.label);
    }

    // function removeDuplicates(arr) {
    //     return [...new Set(arr)];
    // }

    const arryOrgsCountryTwNoDup = removeDuplicates(arryOrgsCountryTw);
    // console.log(arryRecordsCountryTwNoDup);

    let arryLengthCountryTw = [];
    for (let i = 0; i < arryOrgsCountryTwNoDup?.length; i++) {
        const orgsByCountryTw = orgList?.filter((org) => {
            return org.countryTw.label === arryOrgsCountryTwNoDup[i];
        });

        arryLengthCountryTw.push(orgsByCountryTw.length);
    }

    // console.log(arryLengthCountryTw);

    const orgsCountryTwPieChart = arryLengthCountryTw.map((value, index) => ({
        id: index,
        value,
        label: arryOrgsCountryTwNoDup[index],
    }));

    // console.log(refereesCountryTwPieChart);

    // CountryCn

    let arryOrgsCountryCn = [];

    for (let i = 0; i < orgList?.length; i++) {
        arryOrgsCountryCn.push(orgList[i].countryCn?.label);
    }

    // function removeDuplicates(arr) {
    //     return [...new Set(arr)];
    // }

    const arryOrgsCountryCnNoDup = removeDuplicates(arryOrgsCountryCn);
    console.log(arryOrgsCountryCnNoDup);

    let arryLengthCountryCn = [];
    for (let i = 0; i < arryOrgsCountryCnNoDup?.length; i++) {
        const orgsByCountryCn = orgList?.filter((org) => {
            return org.countryCn.label === arryOrgsCountryCnNoDup[i];
        });

        arryLengthCountryCn.push(orgsByCountryCn.length);
    }

    console.log(arryLengthCountryCn);

    const orgsCountryCnPieChart = arryLengthCountryCn.map((value, index) => ({
        id: index,
        value,
        label: arryOrgsCountryCnNoDup[index],
    }));

    // console.log(refereesCountryCnPieChart);

    // const listByFilter = refereeGameRecords?.filter((record) => {
    //     return query.toLowerCase() === "all" ? refereeGameRecords : record.year.toLowerCase().includes(query);
    // });

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
            field: "logoURL",
            headerName: t("admin.org-list.logo"),
            headerClassName: "super-app-theme--header",
            renderCell: (params) => (
                <Avatar
                    src={params.row.logoURL}
                    sx={{ marginTop: "6px", border: "1px solid lightgrey", marginLeft: "50px" }}
                />
            ),

            width: 160,
            sortable: false,
            filterable: false,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "name",
            headerName: t("admin.org-list.name"),
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            width: 250,
            editable: true,
            align: "center",
        },
        {
            field: "country",
            headerName: t("admin.org-list.country"),
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            width: 200,
            editable: true,
            align: "center",
        },
        {
            field: "authorized",
            headerName: t("admin.org-list.authorized"),
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            type: "boolean",
            valueOptions: ["true", "false"],
            renderHeader: () => (
                <span style={{ color: "pink" }}>
                    {t("admin.org-list.authorized")}

                    {/* <MilitaryTechIcon /> */}
                </span>
            ),
            renderCell: (params) => {
                return params.value ? (
                    <MilitaryTechIcon
                        style={{
                            color: "DodgerBlue",
                        }}
                    />
                ) : (
                    <GridCloseIcon
                        style={{
                            color: "grey",
                        }}
                    />
                );
            },
            width: 250,
            editable: true,
            align: "center",
        },

        {
            field: "status",
            headerName: t("admin.org-list.status"),
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

            width: 250,
            editable: true,
            align: "center",
        },
    ];

    const rows = orgList?.map((row, index) => ({
        id: index + 1,
        logoURL: row.logoURL,
        name: lang === "en" ? row.name : lang === "zh-TW" ? row.nameTw : lang === "zh-CN" ? row.nameCn : null,

        country:
            lang === "en"
                ? row.country?.label
                : lang === "zh-TW"
                ? row.countryTw?.label
                : lang === "zh-CN"
                ? row.countryCn?.label
                : null,
        authorized: row.isAuthorized,
        status: row.status,
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
    const categories = {
        blueberryTwilight: blueberryTwilightPalette,
        mangoFusion: mangoFusionPalette,
        cheerfulFiesta: cheerfulFiestaPalette,
    };
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
        margin: { top: 0, bottom: 10, left: 10, right: 200 },
    };
    const theme = useTheme();
    const [colorScheme, setColorScheme] = useState("blueberryTwilight");
    const [colorMode, setColorMode] = useState(theme.palette.mode);

    // const newTheme = createTheme({ palette: { mode: colorMode } });

    return (
        <>
            <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
                <div>{error}</div>

                <Box sx={{ width: "100%", marginTop: "20px" }}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 2 }}>
                        <Item style={{ background: "MediumSeaGreen", color: "white" }}>
                            <div className="item-wrapper">
                                <span>{t("admin.dashboard.total-orgs")}:</span>
                                <div className="item-number">{totalOrgs}</div>
                            </div>
                            <div className="item-more-info">
                                <Link to="/admin-zone/training-organization-list">
                                    <Tooltip title={t("admin.org-list.all-orgs")} arrow placement="bottom">
                                        <ReadMoreIcon style={{ color: "white" }} />
                                    </Tooltip>
                                </Link>
                            </div>
                        </Item>
                        <Item style={{ background: "DodgerBlue", color: "white" }}>
                            <div className="item-wrapper">
                                <span>{t("admin.dashboard.total-auth-orgs")}:</span>
                                <div className="item-number">{totalAuthOrgs}</div>
                            </div>{" "}
                            <div className="item-more-info">
                                <Link to="/admin-zone/training-organization-list">
                                    <Tooltip title={t("admin.org-list.authorized-orgs")} arrow placement="bottom">
                                        <ReadMoreIcon style={{ color: "white" }} />
                                    </Tooltip>
                                </Link>
                            </div>
                        </Item>
                        <Stack>
                            <div>
                                <TextField
                                    select
                                    sx={{ maxWidth: 1 }}
                                    value={colorScheme}
                                    onChange={(event) => setColorScheme(event.target.value)}
                                >
                                    {Object.entries(categories).map(([name, colors]) => (
                                        <MenuItem key={name} value={name}>
                                            <Stack direction="row" alignItems="center">
                                                {/* <Typography sx={{ mr: 2 }}>{name}</Typography> */}
                                                <div style={{ width: 200, height: 20 }}>
                                                    {colors(colorMode).map((c) => (
                                                        <div
                                                            key={c}
                                                            style={{
                                                                width: 20,
                                                                height: 20,
                                                                backgroundColor: c,
                                                                display: "inline-block",
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </Stack>
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div>
                                {lang === "en" && (
                                    <PieChart
                                        series={[
                                            {
                                                data: orgsCountryPieChart,
                                                highlightScope: { fade: "global", highlight: "item" },
                                                faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                                            },
                                        ]}
                                        width={400}
                                        height={250}
                                        colors={categories[colorScheme]}
                                        {...legendPlacement}
                                    />
                                )}
                                {lang === "zh-TW" && (
                                    <PieChart
                                        series={[
                                            {
                                                data: orgsCountryTwPieChart,
                                                highlightScope: { fade: "global", highlight: "item" },
                                                faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                                            },
                                        ]}
                                        width={400}
                                        height={250}
                                        {...legendPlacement}
                                        colors={categories[colorScheme]}
                                    />
                                )}
                                {lang === "zh-CN" && (
                                    <PieChart
                                        series={[
                                            {
                                                data: orgsCountryCnPieChart,
                                                highlightScope: { fade: "global", highlight: "item" },
                                                faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                                            },
                                        ]}
                                        width={400}
                                        height={250}
                                        {...legendPlacement}
                                        colors={categories[colorScheme]}
                                    />
                                )}
                            </div>
                        </Stack>
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
                            fontWeight: "bold",
                        },
                    }}
                    // style={{
                    //     display: 'flex',
                    //     flexDirection: 'column',
                    //     maxHeight:"400px",
                    //     minHeight:"200px",
                    //   }}
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
                            // pageSizeOptions={[10]}
                            pageSizeOptions={[5, 10, 25]}
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
                            pageSizeOptions={[5, 10, 25]}
                            // checkboxSelection
                            disableRowSelectionOnClick
                            getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd")}
                            localeText={zhTW.components.MuiDataGrid.defaultProps.localeText}
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
                            // pageSizeOptions={[10]}
                            pageSizeOptions={[5, 10, 25]}
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

export default OrgDashboard;
