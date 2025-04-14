/** @format */

import "./AdminDashboard.css";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "../../../supabase/supabaseClient";
import { CircularProgress, Container, MenuItem, TextField } from "@mui/material";
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
import { useTheme } from "@mui/material/styles";
import { blueberryTwilightPalette, mangoFusionPalette, cheerfulFiestaPalette } from "@mui/x-charts/colorPalettes";

export default function OrgDashboardSB() {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    const [orgList, setOrgList] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();
    const [colorScheme, setColorScheme] = useState("blueberryTwilight");

    // Fetch organizations from Supabase
    const fetchOrganizations = useCallback(async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("organizations")
                .select(
                    `
                    *,
                    country:country_en->label,
                    countryTw:country_tw->label,
                    countryCn:country_cn->label
                `
                )
                .order("name");

            if (error) throw error;
            setOrgList(data);
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
            .channel("dashboard-orgs-changes")
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "organizations",
                },
                (payload) => {
                    console.log("Organization change received:", payload);
                    fetchOrganizations();
                }
            )
            .subscribe();

        // Cleanup subscription on unmount
        return () => {
            supabase.removeChannel(orgsSubscription);
        };
    }, [fetchOrganizations]);

    // Calculate authorized orgs
    const authOrgList = orgList?.filter((org) => org.is_authorized === true);
    const totalOrgs = orgList?.length;
    const totalAuthOrgs = authOrgList?.length;

    const processCountryData = (orgList, languageKey) => {
        if (!orgList) return [];

        // Group organizations by country
        const countryGroups = orgList.reduce((acc, org) => {
            const countryLabel = org[languageKey]?.label;
            if (countryLabel) {
                acc[countryLabel] = (acc[countryLabel] || 0) + 1;
            }
            return acc;
        }, {});

        // Convert to pie chart format
        return Object.entries(countryGroups).map(([label, value], index) => ({
            id: index,
            value,
            label,
        }));
    };

    // Use the function to create pie chart data for each language

    const pieChartData = {
        en: processCountryData(orgList, "country_en"),
        tw: processCountryData(orgList, "country_tw"),
        cn: processCountryData(orgList, "country_cn"),
    };

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
        logoURL: row.logo_url,
        name: lang === "en" ? row.name : lang === "zh-TW" ? row.name_tw : lang === "zh-CN" ? row.name_cn : null,

        country:
            lang === "en"
                ? row.country_en?.label
                : lang === "zh-TW"
                ? row.country_tw?.label
                : lang === "zh-CN"
                ? row.country_cn?.label
                : row.country_en?.label,
        authorized: row.is_authorized,
        status: row.status,
    }));

    console.log(rows);

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

    const [colorMode, setColorMode] = useState(theme.palette.mode);

    // Get locale text based on language
    const getLocaleText = () => {
        switch (lang) {
            case "zh-TW":
                return zhTW.components.MuiDataGrid.defaultProps.localeText;
            case "zh-CN":
                return zhCN.components.MuiDataGrid.defaultProps.localeText;
            default:
                return {};
        }
    };

    return (
        <>
            <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
                {error && <div className="error-message">{error}</div>}
                {/* Show loading indicator while fetching data */}
                {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <>
                        <Box sx={{ width: "100%", marginTop: "20px" }}>
                            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 2 }}>
                                <Item style={{ background: "MediumSeaGreen", color: "white" }}>
                                    <div className="item-wrapper">
                                        <span>{t("admin.dashboard.total-orgs")}:</span>
                                        <div className="item-number">{totalOrgs}</div>
                                    </div>
                                    <div className="item-more-info">
                                        <Link to="/admin-zone-SB/training-organization-list">
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
                                        <Link to="/admin-zone-SB/training-organization-list">
                                            <Tooltip
                                                title={t("admin.org-list.authorized-orgs")}
                                                arrow
                                                placement="bottom"
                                            >
                                                <ReadMoreIcon style={{ color: "white" }} />
                                            </Tooltip>
                                        </Link>
                                    </div>
                                </Item>
                                <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 2 }}>
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
                                        <PieChart
                                            series={[
                                                {
                                                    data: pieChartData[
                                                        lang === "zh-TW" ? "tw" : lang === "zh-CN" ? "cn" : "en"
                                                    ],
                                                    highlightScope: {
                                                        fade: "global",
                                                        highlight: "item",
                                                    },
                                                    faded: {
                                                        innerRadius: 30,
                                                        additionalRadius: -30,
                                                        color: "gray",
                                                    },
                                                },
                                            ]}
                                            width={350}
                                            height={200}
                                            colors={categories[colorScheme]}
                                            {...legendPlacement}
                                        />
                                    </div>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box
                            sx={{
                                height: 400,
                                maxHeight: 600,
                                width: "95%",
                                marginTop: "12px",
                                "& .super-app-theme--header": {
                                    backgroundColor: "grey",
                                    color: "white",
                                    fontWeight: "bold",
                                },
                            }}
                        >
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
                                disableRowSelectionOnClick
                                getRowClassName={(params) =>
                                    params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
                                }
                                localeText={getLocaleText()}
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
                        </Box>
                    </>
                )}
            </Container>
        </>
    );
} //
