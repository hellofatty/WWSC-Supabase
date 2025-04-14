/** @format */

import "./RefereeDashboard.css";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "../../../../supabase/supabaseClient";
import Chip from "@mui/joy/Chip";
import { CircularProgress, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PieChart } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Tooltip from "@mui/material/Tooltip";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
// import { BarChart } from "@mui/x-charts";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
import { BarPlot } from "@mui/x-charts/BarChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import { ChartsGrid } from "@mui/x-charts/ChartsGrid";
import { ChartsTooltip } from "@mui/x-charts/ChartsTooltip";

import { Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { useRef } from "react";
// import RefereeCardSmall from "../../../../components/RefereeCard/RefereeCardSmall";

// import MyPieChart from "../../../../components/MyPieChart/MyPieChart";

export default function RefereeDashboardSB({ referee, uid }) {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;

    const [refereeGameRecords, setRefereeGameRecords] = useState(null);
    const [TrainingClassRecords, setTrainingClassRecords] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const mb = useMediaQuery("(max-width:600px)");

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const fetchGameRecords = useCallback(async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("games")
                .select(
                    `
                    *,
                    organizations (
                        id,
                        name,
                        name_tw,
                        name_cn,
                        logo_url
                    )
                `
                )
                .eq("user_id", uid)
                .order("date", { ascending: false });

            if (error) throw error;
            setRefereeGameRecords(data);
        } catch (err) {
            console.error("Error fetching game records:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [uid]);

    // Fetch training class records
    const fetchTrainingRecords = useCallback(async () => {
        try {
            const { data, error } = await supabase
                .from("class")
                .select(
                    `
                    *,
                    organizations (
                        id,
                        name,
                        name_tw,
                        name_cn,
                        logo_url
                    )
                `
                )
                .eq("user_id", uid)
                .order("date", { ascending: false });

            if (error) throw error;
            setTrainingClassRecords(data);
        } catch (err) {
            console.error("Error fetching training records:", err);
            setError(err.message);
        }
    }, [uid]);

    // Initial data fetch
    useEffect(() => {
        fetchGameRecords();
        fetchTrainingRecords();
    }, [fetchGameRecords, fetchTrainingRecords]);

    // Set up realtime subscriptions
    useEffect(() => {
        // Subscribe to games table changes
        const gamesSubscription = supabase
            .channel("dashboard-games")
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "games",
                    filter: `user_id=eq.${uid}`,
                },
                (payload) => {
                    console.log("Game change received:", payload);
                    fetchGameRecords();
                }
            )
            .subscribe();

        // Subscribe to training class changes
        const classSubscription = supabase
            .channel("dashboard-class")
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "class",
                    filter: `user_id=eq.${uid}`,
                },
                (payload) => {
                    console.log("Training class change received:", payload);
                    fetchTrainingRecords();
                }
            )
            .subscribe();

        // Subscribe to referee changes
        const refereeSubscription = supabase
            .channel("dashboard-referee")
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "referees",
                    filter: `id=eq.${uid}`,
                },
                (payload) => {
                    console.log("Referee change received:", payload);
                    // Update referee data if needed
                }
            )
            .subscribe();

        // Cleanup subscriptions
        return () => {
            supabase.removeChannel(gamesSubscription);
            supabase.removeChannel(classSubscription);
            supabase.removeChannel(refereeSubscription);
        };
    }, [uid, fetchGameRecords, fetchTrainingRecords]);

    // ------Set up Filter by Year-------

    const [classQuery, setClassQuery] = useState("All");

    const handleClassYearChange = (record) => {
        setClassQuery(record.target.value);
    };

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    let arryTrainingClassRecordsYears = [];

    for (let i = 0; i < TrainingClassRecords?.length; i++) {
        arryTrainingClassRecordsYears.push(TrainingClassRecords[i].year);
    }

    const arryTrainingClassRecordsYearsNoDup = removeDuplicates(arryTrainingClassRecordsYears);
    console.log(arryTrainingClassRecordsYearsNoDup);

    const trainingClassRecordsByFilter = TrainingClassRecords?.filter((record) => {
        return classQuery.toLowerCase() === "all"
            ? TrainingClassRecords
            : record.year.toLowerCase().includes(classQuery);
    });

    // Calculate total number of referee training classes and the number of training classes for a specific year.

    let totalClasses = trainingClassRecordsByFilter?.length;
    const requiredClassesPerYear = 2;
    const numberOfYearsClass = arryTrainingClassRecordsYearsNoDup?.length;
    const roundedAllTrainingClassesPercent =
        (totalClasses / (requiredClassesPerYear * numberOfYearsClass)).toFixed(2) * 100;
    let trainingClassPercent =
        classQuery === "All" ? roundedAllTrainingClassesPercent : (totalClasses / (requiredClassesPerYear * 1)) * 100;

    // ================================================================

    const [gameQuery, setGameQuery] = useState("All");

    const handleGameYearChange = (record) => {
        setGameQuery(record.target.value);
    };

    let arryGameRecordsYears = [];

    for (let i = 0; i < refereeGameRecords?.length; i++) {
        arryGameRecordsYears.push(refereeGameRecords[i].year);
    }

    const arryGameRecordsYearsNoDup = removeDuplicates(arryGameRecordsYears);
    console.log(arryGameRecordsYearsNoDup);

    const gameRecordsByYear = refereeGameRecords?.filter((record) => {
        return gameQuery.toLowerCase() === "all" ? refereeGameRecords : record.year.toLowerCase().includes(gameQuery);
    });

    console.log("Test", gameRecordsByYear);

    let arryGameRecordsMonths = [];

    for (let i = 0; i < gameRecordsByYear?.length; i++) {
        arryGameRecordsMonths.push(gameRecordsByYear[i].month);
    }

    console.log(arryGameRecordsMonths);

    const arryGameRecordsMonthsNoDup = removeDuplicates(arryGameRecordsMonths);

    console.log("month", arryGameRecordsMonthsNoDup);

    const gameRecordsByMonth = gameRecordsByYear?.filter((record) => {
        return gameQuery.toLowerCase() === "all" ? gameRecordsByYear : record.year.toLowerCase().includes(gameQuery);
    });

    console.log("test2", gameRecordsByMonth);

    // Calculate total number of referee offciating Wiser games and the number of games for a specific year.

    let totalGames = gameRecordsByYear?.length;
    const requiredGamesPerYear = 10;
    const numberOfYears = arryGameRecordsYearsNoDup?.length;
    const roundedAllGamesPercent = (totalGames / (requiredGamesPerYear * numberOfYears)).toFixed(2) * 100;
    let gamePercent = gameQuery === "All" ? roundedAllGamesPercent : (totalGames / (requiredGamesPerYear * 1)) * 100;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        width: "250px",
        height: "200px",
        color: theme.palette.text.secondary,
        ...theme.applyStyles("dark", {
            backgroundColor: "#1A2027",
        }),
    }));

    // ============================Create Bar Chart Data ============================

    let arryLengthGameRecordsYear = [];

    for (let i = 0; i < arryGameRecordsYearsNoDup?.length; i++) {
        const gameRecordsByYearCount = refereeGameRecords?.filter((game) => {
            return game.year === arryGameRecordsYearsNoDup[i];
        });

        arryLengthGameRecordsYear.push(gameRecordsByYearCount.length);
    }

    const gameRecordsbyYearBarChart = arryLengthGameRecordsYear.map((value, index) => ({
        id: index,
        value,
        label: arryGameRecordsYearsNoDup[index],
    }));

    console.log("YearbarChart", gameRecordsbyYearBarChart);

    //    ===========

    let arryLengthGameRecordsMonth = [];

    for (let i = 0; i < arryGameRecordsMonthsNoDup?.length; i++) {
        const gameRecordsByMonthCount = gameRecordsByMonth?.filter((game) => {
            return game.month === arryGameRecordsMonthsNoDup[i];
        });

        arryLengthGameRecordsMonth.push(gameRecordsByMonthCount.length);
    }

    const gameRecordsbyMonthBarChart = arryLengthGameRecordsMonth.map((value, index) => ({
        id: index,
        value: value,
        label: arryGameRecordsMonthsNoDup[index],
    }));

    console.log("MonthbarChart", typeof gameRecordsbyMonthBarChart[0]?.value === "number");

    // const oldArray = [{ id: 1, value: 2, label: "December" },{ id: 2, value: 3, label: "January" } ]
    // console.log('old array', oldArray);
    // const monthArray = [{ id: 1, label: "January", value: "一月" }, { id: 2, label: "December", value: "12月" }]

    const gameRecordsbyMonthBarChartTw = gameRecordsbyMonthBarChart.map((item) => {
        if (item.label === "January") {
            return { ...item, label: "一月" };
        } else if (item.label === "February") {
            return { ...item, label: "二月" };
        } else if (item.label === "March") {
            return { ...item, label: "三月" };
        } else if (item.label === "April") {
            return { ...item, label: "四月" };
        } else if (item.label === "May") {
            return { ...item, label: "五月" };
        } else if (item.label === "June") {
            return { ...item, label: "六月" };
        } else if (item.label === "July") {
            return { ...item, label: "七月" };
        } else if (item.label === "August") {
            return { ...item, label: "八月" };
        } else if (item.label === "September") {
            return { ...item, label: "九月" };
        } else if (item.label === "October") {
            return { ...item, label: "十月" };
        } else if (item.label === "November") {
            return { ...item, label: "十一月" };
        } else if (item.label === "December") {
            return { ...item, label: "十二月" };
        } else {
            return item;
        }
    });

    console.log("MonthbarChartTw", gameRecordsbyMonthBarChartTw);

    //   console.log('newArray', newArray);

    // console.log('old array 2', oldArray);
    // console.log(oldArray[0].label);
    // console.log(monthArray[0].label, monthArray[0].value);

    const series = [
        { type: "line", dataKey: "value", color: "#fe5f55" },
        { type: "bar", dataKey: "value", color: "#bfdbf7", yAxisId: "leftAxis" },
    ];

    // ============================Create Pie Chart Data ============================

    // ===========1. create a array of countries from referee officiating Wiser game records=======

    let arryGameRecordsCountry = [];

    for (let i = 0; i < refereeGameRecords?.length; i++) {
        arryGameRecordsCountry.push(refereeGameRecords[i].country_en?.label);
    }

    const arryGameRecordsCountryNoDup = removeDuplicates(arryGameRecordsCountry);

    console.log(arryGameRecordsCountryNoDup);

    const HKIndex = arryGameRecordsCountryNoDup.findIndex((country) => country === "Hong Kong SAR China");

    console.log(HKIndex);

    arryGameRecordsCountryNoDup[HKIndex] = "Hong Kong";

    // 2. create a array of game records counts for each country in country array

    let arryLengthCountry = [];

    for (let i = 0; i < arryGameRecordsCountryNoDup?.length; i++) {
        const gameRecordsByCountry = refereeGameRecords?.filter((game) => {
            return game.country_en?.label === arryGameRecordsCountryNoDup[i];
        });

        arryLengthCountry.push(gameRecordsByCountry.length);
    }

    // console.log(arryLengthCountry);

    // 3. Create Pie Chart Data

    //Engligh

    const gameRecordsCountryPieChart = arryLengthCountry.map((value, index) => ({
        id: index,
        value,
        label: arryGameRecordsCountryNoDup[index],
    }));

    console.log(gameRecordsCountryPieChart);

    // 繁体中文

    let arryGameRecordsCountryTw = [];

    for (let i = 0; i < refereeGameRecords?.length; i++) {
        arryGameRecordsCountryTw.push(refereeGameRecords[i].country_tw?.label);
    }

    const arryGameRecordsCountryTwNoDup = removeDuplicates(arryGameRecordsCountryTw);

    const HKIndexTw = arryGameRecordsCountryTwNoDup.findIndex((country) => country === "中國香港特別行政區");
    arryGameRecordsCountryTwNoDup[HKIndexTw] = "香港";
    // console.log(arryRecordsCountryTwNoDup);

    let arryLengthCountryTw = [];

    for (let i = 0; i < arryGameRecordsCountryTwNoDup?.length; i++) {
        const gameRecordsByCountryTw = refereeGameRecords?.filter((game) => {
            return game.country_tw?.label === arryGameRecordsCountryTwNoDup[i];
        });

        arryLengthCountryTw.push(gameRecordsByCountryTw.length);
    }

    // console.log(arryLengthCountryTw);

    const gameRecordsCountryTwPieChart = arryLengthCountryTw.map((value, index) => ({
        id: index,
        value,
        label: arryGameRecordsCountryTwNoDup[index],
    }));

    // 简体中文

    let arryGameRecordsCountryCn = [];

    for (let i = 0; i < refereeGameRecords?.length; i++) {
        arryGameRecordsCountryCn.push(refereeGameRecords[i].country_cn?.label);
    }

    const arryGameRecordsCountryCnNoDup = removeDuplicates(arryGameRecordsCountryCn);
    // console.log(arryRecordsCountryTwNoDup);

    const HKIndexCn = arryGameRecordsCountryCnNoDup.findIndex((country) => country === "中国香港特别行政区");
    arryGameRecordsCountryCnNoDup[HKIndexCn] = "香港";

    let arryLengthCountryCn = [];

    for (let i = 0; i < arryGameRecordsCountryCnNoDup?.length; i++) {
        const gameRecordsByCountryCn = refereeGameRecords?.filter((game) => {
            return game.country_cn?.label === arryGameRecordsCountryCnNoDup[i];
        });

        arryLengthCountryCn.push(gameRecordsByCountryCn.length);
    }

    // console.log(arryLengthCountryCn;

    const gameRecordsCountryCnPieChart = arryLengthCountryCn.map((value, index) => ({
        id: index,
        value: value.toFixed(0),
        label: arryGameRecordsCountryCnNoDup[index],
    }));

    // Piechart legend Placement Custmization

    const legendPlacement = {
        slotProps: {
            legend: {
                labelStyle: {
                    fontSize: 10,
                    fill: "grey",
                },
                direction: "column",
                position: {
                    vertical: "middle",
                    horizontal: "right",
                },
                padding: { bottom: 0, left: 30, right: 50, top: 100 },
                itemMarkWidth: 10,
                itemMarkHeight: 8,
                markGap: 5,
                itemGap: 5,
            },
        },
        margin: { top: 10, bottom: 10, left: 30, right: 0 },
    };

    // ============================Content Constant============================

    const refereeProfileCard = (
        <div>
            <div
                className="record-list-select-container"
                style={!mb ? { marginTop: "40px", display: "block" } : { marginTop: "0", display: "none" }}
            ></div>
            <Item
                style={
                    referee.grade === "3"
                        ? { backgroundColor: "darkred", color: "white", position: "relative" }
                        : referee.grade === "4"
                        ? { backgroundColor: "#ffe067", color: "black", position: "relative" }
                        : { backgroundColor: "seagreen", color: "black", position: "relative" }
                }
            >
                <div className="item-wrapper" style={{ marginTop: "5px" }}>
                    <div className="referee-list-avater">
                        <div>
                            <img className="profile-card-avatar-circle" src={referee.avatar_url} alt="referee avatar" />
                        </div>
                    </div>
                    <div className="dasboard-profile-card-items">
                        <div
                            className="profile-card-name"
                            style={
                                referee.grade !== "4"
                                    ? { Border: "white", color: "white" }
                                    : { Border: "black", color: "black" }
                            }
                        >
                            {referee.name}
                        </div>
                        {referee.grade !== "0" && (
                            <div
                                className="profile-card-referee-ID"
                                style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}
                            >
                                {referee.referee_id}
                            </div>
                        )}
                        <div
                            style={
                                referee.grade !== "4"
                                    ? { fontSize: "0.75rem", color: "white" }
                                    : { fontSize: "0.75rem", color: "black" }
                            }
                        >
                            {t("admin.referee-list.grade")}: {referee.grade}
                        </div>
                        {/* <div>
                {t("admin.referee-list.othername")}:{referee.otherName}
            </div> */}
                        {referee.status === "active" && (
                            <Chip
                                color="primary"
                                // onClick={function(){}}
                                size="md"
                                variant="soft"
                                sx={{
                                    fontSize: "0.785rem",
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
                                    fontSize: "0.785rem",
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
                                    fontSize: "0.785rem",
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
                                    fontSize: "0.785rem",
                                    border: "1px solid var(--joy-palette-warning-500, #9A5B13)",
                                }}
                            >
                                {" "}
                                {t("referee.profile.inactive")}
                            </Chip>
                        )}
                        {referee.grade !== "0" && (
                            <div
                                className="expiry-date"
                                style={referee.grade !== "4" ? { color: "white" } : { color: "black" }}
                            >
                                <div style={{ fontSize: "0.7rem" }}>{t("admin.referee-list.expirydate")}:</div>
                                <div>
                                    <div style={{ fontFamily: "Georgia, serif", fontSize: "0.7rem" }}>
                                        {referee.expiry_date}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="item-more-info" style={{ position: "absolute", bottom: "6px", right: "12px" }}>
                    <Link to="/referee-zone/referee-home-SB/referee-profile">
                        <Tooltip
                            title={
                                referee.grade !== "0"
                                    ? t("referee.dashboard.profile-referee")
                                    : t("referee.dashboard.profile-rit")
                            }
                            arrow
                            placement="top-start"
                        >
                            <ReadMoreIcon
                                fontSize="small"
                                style={
                                    referee.grade !== "4"
                                        ? { color: "white", marginLeft: "20px" }
                                        : { color: "black", marginLeft: "20px" }
                                }
                            />
                        </Tooltip>
                    </Link>
                </div>
            </Item>
        </div>
    );

    const refereeGamesRecordsProgress = (
        <div>
            <div className="record-list-select-container" style={{ display: "flex", alignItems: "center" }}>
                <span>
                    <Tooltip title={t("admin.event-list.select-year")} arrow placement="top">
                        <EventIcon fontSize="small" sx={{ color: "grey" }} />
                    </Tooltip>
                </span>
                <select
                    className="wwsc-select w3-select w3-border "
                    style={{
                        width: "80px",
                        textAlign: "center",
                        fontSize: "0.75rem",
                        color: "gray",
                        border: "lightgrey",
                        marginBottom: "5px",
                        marginTop: "5px",
                        marginRight: "10px",
                        marginLeft: "0",
                        borderRadius: "5px",
                    }}
                    value={gameQuery}
                    onChange={handleGameYearChange}
                >
                    <option value="All">{t("referee.record.all-records")}</option>
                    {arryGameRecordsYearsNoDup.map((year, idx) => (
                        <option key={idx} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <Item style={{ background: "purple", color: "white", position: "relative" }}>
                <div className="item-wrapper">
                    <div className="dashboard-card-item-title">
                        {referee.grade !== "0"
                            ? t("referee.dashboard.game-records-card-title-referee")
                            : t("referee.dashboard.game-records-card-title-rit")}{" "}
                    </div>
                    <div className="dashboard-card-items-box" style={{ display: "flex" }}>
                        <div>
                            <div style={{ fontSize: "0.75rem", color: "white" }}>
                                {gameQuery === "All" ? t("referee.record.all-records") : gameQuery}
                            </div>
                            <div className="item-number">{gameRecordsByYear?.length}</div>
                        </div>

                        <div style={{ width: 100, height: 100, margin: "auto", paddingTop: "6px" }}>
                            <CircularProgressbar
                                value={gamePercent}
                                text={`${gamePercent}%`}
                                styles={buildStyles({
                                    textColor: "white",
                                    pathColor: "turquoise",
                                    trailColor: "gold",
                                })}
                            />
                        </div>
                    </div>
                </div>

                <div className="item-more-info" style={{ position: "absolute", bottom: "6px", right: "12px" }}>
                    <Link to="/referee-zone/referee-home-SB/referee-game-records">
                        <Tooltip
                            title={t("referee.dashboard.referee-game-records-referee")}
                            arrow
                            placement="top-start"
                        >
                            <ReadMoreIcon fontSize="small" style={{ color: "white" }} />
                        </Tooltip>
                    </Link>
                </div>
            </Item>
        </div>
    );

    const refereeTrainingClassRecordsProgress = referee.grade === "3" && (
        <div>
            <div className="record-list-select-container" style={{ display: "flex", alignItems: "center" }}>
                {/* <div style={{ color: "grey", fontSize: "0.75rem" }}>{t("referee.record.select-year")}:</div> */}
                <span>
                    <Tooltip title={t("admin.event-list.select-year")} arrow placement="top">
                        <EventIcon fontSize="small" sx={{ color: "grey" }} />
                    </Tooltip>
                </span>
                <select
                    className="wwsc-select w3-select w3-border "
                    style={{
                        width: "80px",
                        textAlign: "center",
                        fontSize: "0.75rem",
                        color: "gray",
                        border: "lightgrey",
                        marginBottom: "5px",
                        marginTop: "5px",
                        marginRight: "10px",
                        marginLeft: "0",
                        borderRadius: "5px",
                    }}
                    value={classQuery}
                    onChange={handleClassYearChange}
                >
                    <option value="All">{t("referee.record.all-records")}</option>
                    {arryTrainingClassRecordsYearsNoDup.map((year, idx) => (
                        <option key={idx} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <Item style={{ background: "DodgerBlue", color: "white", position: "relative" }}>
                <div className="item-wrapper">
                    <div className="dashboard-card-item-title">
                        {t("referee.dashboard.training-class-instructor-records-card-title")}{" "}
                    </div>
                    <div className="dashboard-card-items-box" style={{ display: "flex" }}>
                        <div>
                            <div
                                style={{
                                    fontSize: "0.75rem",
                                    // fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                {" "}
                                {classQuery === "All" ? t("referee.record.all-records") : classQuery}
                            </div>
                            <div className="item-number">{trainingClassRecordsByFilter?.length}</div>
                        </div>

                        <div
                            style={{
                                width: 100,
                                height: 100,
                                margin: "auto",
                                paddingTop: "6px",
                            }}
                        >
                            <CircularProgressbar
                                value={trainingClassPercent}
                                text={`${trainingClassPercent}%`}
                                styles={buildStyles({
                                    textColor: "white",
                                    pathColor: "turquoise",
                                    trailColor: "gold",
                                })}
                            />
                        </div>
                    </div>
                </div>

                <div className="item-more-info" style={{ position: "absolute", bottom: "6px", right: "12px" }}>
                    <Link to="/referee-zone/referee-home-SB/referee-training-class-records">
                        <Tooltip
                            title={t("referee.dashboard.training-class-instructor-records")}
                            arrow
                            placement="top-start"
                        >
                            <ReadMoreIcon fontSize="small" style={{ color: "white" }} />
                        </Tooltip>
                    </Link>
                </div>
            </Item>
        </div>
    );

    const refereeGameRecordsPiechart = (
        <div className={!mb ? "pie-chart-container" : "pie-chart-container-small"}>
            <div className={!mb ? "chart-title" : "chart-title-small"}>
                {referee.grade !== "0"
                    ? t("referee.dashboard.piechart-title-referee")
                    : t("referee.dashboard.piechart-title-rit")}
            </div>
            {lang === "en" && (
                // <MyPieChart data={gameRecordsCountryPieChart} />
                <PieChart
                    series={[
                        {
                            data: gameRecordsCountryPieChart,
                            highlightScope: { fade: "global", highlight: "item" },
                            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                        },
                    ]}
                    width={!mb ? 320 : 280}
                    height={200}
                    {...legendPlacement}
                    margin={{ top: 20, bottom: 10, left: 10, right: 145 }}
                />
            )}
            {lang === "zh-TW" && (
                // <MyPieChart data={gameRecordsCountryTwPieChart} />
                <PieChart
                    series={[
                        {
                            data: gameRecordsCountryTwPieChart,
                            highlightScope: { fade: "global", highlight: "item" },
                            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                        },
                    ]}
                    width={!mb ? 320 : 280}
                    height={200}
                    {...legendPlacement}
                    margin={{ top: 20, bottom: 10, left: 10, right: 140 }}
                />
            )}
            {lang === "zh-CN" && (
                // <MyPieChart data={gameRecordsCountryCnPieChart} />
                <PieChart
                    series={[
                        {
                            data: gameRecordsCountryCnPieChart,
                            highlightScope: { fade: "global", highlight: "item" },
                            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                        },
                    ]}
                    width={!mb ? 320 : 280}
                    height={200}
                    {...legendPlacement}
                    margin={{ top: 20, bottom: 10, left: 10, right: 140 }}
                />
            )}
        </div>
    );

    const refereeGameRecordsBarchart = (
        <div className={!mb ? "bar-chart-container" : "bar-chart-container-small"}>
            {gameQuery === "All" ? (
                <>
                    <div className={!mb ? "chart-title" : "chart-title-small"}>
                        {referee.grade !== "0"
                            ? t("referee.dashboard.barchart-title-year-referee")
                            : t("referee.dashboard.barchart-title-year-rit")}
                    </div>
                    <Box>
                        <ResponsiveChartContainer
                            dataset={gameRecordsbyYearBarChart}
                            width={!mb ? 350 : 230}
                            series={series}
                            xAxis={[
                                {
                                    scaleType: "band",
                                    dataKey: "label",
                                    label: t("referee.dashboard.year"),
                                    // colorMap: {
                                    //     type: 'ordinal',
                                    //     colors: ['#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#08589e']
                                    //   },
                                    labelStyle: {
                                        fontSize: "0.8rem",
                                        color: "gray",
                                        fontWeight: "bold",
                                    },
                                    reverse: true,
                                    // valueFormatter: (label, context) =>
                                    //     context.location === "tick"
                                    //         ? `${label.slice(0, 3)} `
                                    //         : `${label}`,
                                },
                            ]}
                            yAxis={[
                                {
                                    id: "leftAxis",
                                    reverse: false,
                                    tickLabelStyle: { color: "blue" },
                                },

                                // { id: "rightAxis", reverse: false },
                            ]}
                            height={!mb ? 250 : 200}
                            margin={{
                                left: 38,
                                right: 5,
                                top: 30,
                                bottom: 20,
                            }}
                            sx={{
                                // color: 'success.main',
                                "& .MuiChartsAxis-label ": {
                                    fill: "Gray",
                                    marginTop: "12px",
                                },
                                "& .MuiChartsAxis-tickLabel ": {
                                    fill: "Gray",

                                    // marginTop:"12px"
                                },
                                "&  .MuiChartsAxis-line ": {
                                    stroke: "Gray",
                                    // marginTop:"12px"
                                },
                            }}
                        >
                            <ChartsGrid horizontal />
                            <BarPlot />
                            <LinePlot />
                            <MarkPlot />

                            <ChartsXAxis style={{ color: "grey" }} />
                            <ChartsYAxis
                                axisId="leftAxis"
                                label={t("referee.dashboard.y-axis-label")}
                                labelStyle={!mb ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                            />
                            {/* <ChartsYAxis axisId="rightAxis" position="right" label="precipitation (mm)" /> */}
                            <ChartsTooltip />
                        </ResponsiveChartContainer>
                    </Box>
                </>
            ) : (
                <>
                    <div className="chart-title">
                        {gameQuery}{" "}
                        {referee.grade !== "0"
                            ? t("referee.dashboard.barchart-title-month-referee")
                            : t("referee.dashboard.barchart-title-month-rit")}
                    </div>
                    {lang === "en" ? (
                        <Box>
                            <ResponsiveChartContainer
                                dataset={gameRecordsbyMonthBarChart}
                                width={!mb ? 350 : 230}
                                series={series}
                                xAxis={[
                                    {
                                        scaleType: "band",
                                        dataKey: "label",
                                        label: t("referee.dashboard.month"),
                                        labelStyle: {
                                            fontSize: "0.8rem",
                                            color: "lightgray",
                                            fontWeight: "bold",
                                        },
                                        reverse: true,
                                        valueFormatter: (label, context) =>
                                            context.location === "tick"
                                                ? `${label.slice(0, 3).toUpperCase()} `
                                                : `${label}`,
                                    },
                                ]}
                                yAxis={[
                                    {
                                        id: "leftAxis",
                                        reverse: false,
                                        scaleType: "linear",
                                        // tickLabelInterval: (value, index) => index,
                                        // valueFormatter: (value, context) =>
                                        //     context.location === "tick"
                                        //         ? `${value.toFixed(0)}`
                                        //         : `${value}`,
                                        // labelStyle: {
                                        //     fontSize: "0.8rem",
                                        //     color: "gray",
                                        //     fontWeight: "bold",
                                        // },
                                    },

                                    // { id: "rightAxis", reverse: false },
                                ]}
                                height={!mb ? 250 : 200}
                                margin={{
                                    left: 38,
                                    right: 5,
                                    top: 30,
                                    bottom: 20,
                                }}
                                sx={{
                                    // color: 'success.main',
                                    "& .MuiChartsAxis-label ": {
                                        fill: "Gray",
                                        marginTop: "12px",
                                    },
                                    "& .MuiChartsAxis-tickLabel ": {
                                        fill: "Gray",

                                        // marginTop:"12px"
                                    },
                                    "&  .MuiChartsAxis-line ": {
                                        stroke: "Gray",
                                        // marginTop:"12px"
                                    },
                                }}
                            >
                                <ChartsGrid horizontal />
                                <BarPlot />
                                <LinePlot />
                                <MarkPlot />

                                <ChartsXAxis style={{ color: "grey" }} />
                                <ChartsYAxis
                                    axisId="leftAxis"
                                    label={t("referee.dashboard.y-axis-label")}
                                    labelStyle={!mb ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}
                                    // style={{ marginRight: "6px", color: "grey" }}
                                />
                                {/* <ChartsYAxis axisId="rightAxis" position="right" label="precipitation (mm)" /> */}
                                <ChartsTooltip />
                            </ResponsiveChartContainer>
                        </Box>
                    ) : (
                        <Box>
                            <ResponsiveChartContainer
                                dataset={gameRecordsbyMonthBarChartTw}
                                width={!mb ? 350 : 230}
                                series={series}
                                xAxis={[
                                    {
                                        scaleType: "band",
                                        dataKey: "label",
                                        label: t("referee.dashboard.month"),
                                        labelStyle: {
                                            fontSize: "0.8rem",
                                            color: "lightgray",
                                            fontWeight: "bold",
                                        },
                                        reverse: true,
                                        valueFormatter: (label, context) =>
                                            context.location === "tick"
                                                ? `${label.slice(0, 3).toUpperCase()} `
                                                : `${label}`,
                                    },
                                ]}
                                yAxis={[
                                    {
                                        id: "leftAxis",
                                        reverse: false,
                                        scaleType: "linear",
                                        // tickLabelInterval: (value, index) => index,
                                        // valueFormatter: (value, context) =>
                                        //     context.location === "tick"
                                        //         ? `${value.toFixed(0)}`
                                        //         : `${value}`,
                                        // labelStyle: {
                                        //     fontSize: "0.8rem",
                                        //     color: "gray",
                                        //     fontWeight: "bold",
                                        // },
                                    },

                                    // { id: "rightAxis", reverse: false },
                                ]}
                                height={!mb ? 250 : 200}
                                margin={{
                                    left: 38,
                                    right: 5,
                                    top: 30,
                                    bottom: 20,
                                }}
                            >
                                <ChartsGrid horizontal />
                                <BarPlot />
                                <LinePlot />
                                <MarkPlot />

                                <ChartsXAxis style={{ color: "grey" }} />
                                <ChartsYAxis
                                    axisId="leftAxis"
                                    label={t("referee.dashboard.y-axis-label")}
                                    labelStyle={!mb ? { fontSize: "0.8rem" } : { fontSize: "0.7rem" }}

                                    // style={{ marginRight: "6px", color: "grey" }}
                                />
                                {/* <ChartsYAxis axisId="rightAxis" position="right" label="precipitation (mm)" /> */}
                                <ChartsTooltip />
                            </ResponsiveChartContainer>
                        </Box>
                    )}
                </>
            )}
        </div>
    );

    return (
        <>
            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading-container">
                    <CircularProgress />
                    <div className="loading-text">{t("general.loading")}</div>
                </div>
            ) : (
                <>
                    <div className="page-primary-title" style={{ marginLeft: "6px" }}>
                        <div className="dashboard-title-wrapper">
                            <DashboardIcon className="sidebar-admin-icon" style={{ fontSize: "30px" }} />
                            {referee.grade !== "0"
                                ? t("referee.dashboard.referee-title")
                                : t("referee.dashboard.rit-title")}
                        </div>
                    </div>

                    <div className="dashboard-card-container">
                        <div>
                            {!mb ? (
                                <Box sx={{ width: "100%", marginTop: "0px" }}>
                                    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, sm: 1, md: 1 }}>
                                        {refereeProfileCard}
                                        {refereeGamesRecordsProgress}
                                        {refereeTrainingClassRecordsProgress}
                                    </Stack>
                                    <Stack
                                        direction={{ xs: "column", md: "row" }}
                                        spacing={{ xs: 1, sm: 1, md: 1 }}
                                        style={{ marginTop: "10px" }}
                                    >
                                        {refereeGameRecordsPiechart}
                                        {refereeGameRecordsBarchart}
                                    </Stack>
                                </Box>
                            ) : (
                                <Box sx={{ width: "250px", marginTop: "0px" }}>
                                    <div className="swiper-buttons">
                                        <div ref={prevRef} className="swiper-button-prev"></div>
                                        <div ref={nextRef} className="swiper-button-next"></div>
                                    </div>

                                    <Swiper
                                        // install Swiper modules
                                        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow]}
                                        spaceBetween={10}
                                        slidesPerView={1}
                                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                                        // pagination={{
                                        //     clickable: true,

                                        // }}
                                        scrollbar={{ draggable: true }}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        onSlideChange={() => console.log("slide change")}
                                        autoplay={{ delay: 5000 }}
                                        effect={"coverflow"}
                                        coverflowEffect={{
                                            rotate: 30,
                                            slideShadows: false,
                                        }}
                                    >
                                        <SwiperSlide>{refereeProfileCard}</SwiperSlide>
                                        {/* <SwiperSlide>
                                    <RefereeCardSmall referee={referee} />
                                </SwiperSlide> */}

                                        <SwiperSlide>
                                            {refereeGamesRecordsProgress}
                                            {refereeTrainingClassRecordsProgress}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {refereeGameRecordsPiechart}
                                            {refereeGameRecordsBarchart}
                                        </SwiperSlide>
                                    </Swiper>
                                </Box>
                            )}
                        </div>

                        <br />
                        <br />
                    </div>
                </>
            )}
        </>
    );
}

// export default RefereeDashboard;
