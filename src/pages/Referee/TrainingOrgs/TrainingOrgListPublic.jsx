/** @format */

import "./TrainingOrgListPublic.css";
import { useCollection } from "../../../hooks/useCollection";
import { Container } from "@mui/material";
import Pagination from "../../../components/Pagination/Pagination";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip from "@mui/material/Tooltip";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Chip from "@mui/joy/Chip";
import { useTranslation } from "react-i18next";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { useState } from "react";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";

import BasicModal from "../../../components/MyModal/MyJoyModal";
import { ResParagraph } from "../../../components/Text/Title/Title";
import { Button } from "@mui/joy";
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

// import { InputGroup, InputGroupText, Input } from "reactstrap";

// import { DataGrid, GridColDef } from '@mui/x-data-grid';

// import { useFirestore } from "../../../hooks/useFirestore";

// import AddOrgRecord from "../Organizations/AddOrgRecord";
// import EditOrgRecord from "../Organizations/EditOrgRecord";

// import ViewUserInfo from "../TrainingOrgs/ViewUserInfo";

// import MyModal from "../../../components/MyModal/MyModal";
// import RefereeCard from "../../../components/RefereeCard/RefereeCard";

export default function TrainingOrgListPublic() {
    // All referees

    const { t, i18n } = useTranslation();

    const lang = i18n.language;

    // const { documents: authOrglist, error } = useCollection("organizations");
    const { documents: authOrglist, error } = useCollection(
        "organizations",
        // ["status", "==", "active"],
        ["isAuthorized", "==", true],
        ["name", "desc"]
    );
    const [query, setQuery] = useState("all");
    // // ------Open Add Modal-------
    // const [modalAdd, setModalAdd] = useState(false);
    // const toggleAdd = () => setModalAdd(!modalAdd);
    // const closeBtnAdd = (
    //     <Button onClick={toggleAdd}>
    //         <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
    //     </Button>
    // );

    const [openAuthOrgDialog, setOpenAuthOrgDialog] = useState(false);
    const handleClickOpenAuthOrgHelpDialog = () => {
        setOpenAuthOrgDialog(true);
    };

    const handleCloseAuthOrgHelpDialog = () => {
        setOpenAuthOrgDialog(!openAuthOrgDialog);
    };

    // ------Set up Pagnation-------

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;

    if (!authOrglist) {
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        );
    }

    // console.log(authOrglist);

    const AuthOrgHelpDialogContent = (
        <>
            <div
                className="content-text"
                style={{ marginTop: "20px", marginLeft: "30px", marginRight: "30px", marginBottom: "60px" }}
            >
                <ResParagraph>
                    The World Wiser Sport Committee (WWSC) has started accepting applications from Wiser sport
                    organizations for WWSC's authorization to hold "<b>Grade 4 Wiser Referee Training Classes</b>"
                    (hereafter, "Training Classes"). For any organization interested in applying for WWSC’s
                    authorization, such organization{" "}
                    <u>
                        must have already applied and registered with a related sports department of the local
                        government of its own home country or region, and have been approved to officially establish as
                        a non-profit Wiser sport organization
                    </u>
                    .
                </ResParagraph>{" "}
                <ResParagraph>
                    When applying for WWSC's authorization, any applying organization must first submit its scanned
                    official establishment document(s) to the WWSC for review. Only when the submitted documents have
                    been approved by the WWSC, will the WWSC then work with the applying organization to initiate
                    authorization process. Please submit your applicationand the document for the establishment of
                    organization to our email address as follows:
                </ResParagraph>
                <div
                    className="wwsc-contact-info"
                    style={{
                        color: "teal",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        fontSize: "0.85rem",
                    }}
                >
                    <img
                        className="referee-card-back-logo"
                        src="/WWSC-logo.png"
                        alt="logo"
                        style={{ width: "80px", marginBottom: "6px" }}
                    />

                    <div className="wwsc-title" style={{ fontSize: "0.9rem" }}>
                        <strong>World Wiser Sport Committee</strong>
                    </div>

                    <div className="wwsc-address" style={{ marginBottom: "6px" }}>
                        709 E. Colorado Blvd., Suite 270, Pasadena, CA 91101
                    </div>
                    <div className="wwsc-phone-email" style={{ marginBottom: "6px" }}>
                        Tel: 626.795.7485; Email:&nbsp;
                        <a href="mailto:info@worldwisersport.org">
                            <i>info@worldwisersport.org</i>
                        </a>{" "}
                    </div>
                    {/* <div className="wwsc-email"></div> */}
                    <div className="wwsc-web">
                        <a href="https://worldwisersport.org/">www.wordwisersport.org</a>
                    </div>
                </div>
            </div>
        </>
    );

    const AuthOrgHelpDialogContentTw = (
        <>
            <div
                className="content-text"
                style={{ marginTop: "20px", marginLeft: "30px", marginRight: "30px", marginBottom: "60px" }}
            >
                <p style={{ lineHeight: "2rem" }}>
                    <b>世界Wiser運動委員會 （World Wiser Sport Committee，WWSC）</b>
                    已開放各團體向本會申請授權舉辦「<b>第四級裁判員培訓班</b>
                    」。有意願向本會申請授權舉辦培訓的團體，首先
                    <u>必須是已經向所屬國家或當地政府相關體育部門申請，並獲得批准而正式立案的非營利高智爾球運動團體</u>
                    。任何團體向本會申請授權時，必須要先提交該團體經當地政府批准立案的正式文件的掃描檔案,
                    並經WWSC審核通過後才會進一步與該申請團體進行培訓的授權協議。請提交你的申請授權書和立案文件至本會電子郵件如下：
                </p>

                <div
                    className="wwsc-contact-info"
                    style={{
                        color: "teal",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        fontSize: "0.85rem",
                    }}
                >
                    <img
                        className="referee-card-back-logo"
                        src="/WWSC-logo.png"
                        alt="logo"
                        style={{ width: "80px", marginBottom: "6px" }}
                    />

                    <div className="wwsc-title" style={{ fontSize: "0.9rem" }}>
                        <strong>World Wiser Sport Committee</strong>
                    </div>

                    <div className="wwsc-address" style={{ marginBottom: "6px" }}>
                        709 E. Colorado Blvd., Suite 270, Pasadena, CA 91101
                    </div>
                    <div className="wwsc-phone-email" style={{ marginBottom: "6px" }}>
                        電話: 626.795.7485; 電子郵箱:&nbsp;
                        <a href="mailto:info@worldwisersport.org">
                            <i>info@worldwisersport.org</i>
                        </a>{" "}
                    </div>
                    {/* <div className="wwsc-email"></div> */}
                    <div className="wwsc-web">
                        <a href="https://worldwisersport.org/">www.wordwisersport.org</a>
                    </div>
                </div>
            </div>
        </>
    );

    const AuthOrgHelpDialogContentCn = (
        <>
            <div
                className="content-text"
                style={{ marginTop: "20px", marginLeft: "30px", marginRight: "30px", marginBottom: "60px" }}
            >
                <p style={{ lineHeight: "2rem" }}>
                    <b>世界Wiser运动委员会 （World Wiser Sport Committee，WWSC）</b>
                    已开放各团体向本会申请授权举办「<b>第四级裁判员培训班</b>
                    」。有意愿向本会申请授权举办培训的团体，首先
                    <u>必须是已经向所属国家或当地政府相关体育部门申请，并获得批准而正式立案的非营利高智尔球运动团体</u>
                    。任何团体向本会申请授权时，必须要先提交该团体经当地政府批准立案的正式文件的扫描档案,
                    并经WWSC审核通过後才会进一步与该申请团体进行培训的授权协议。
                    等完成後，见习裁判员方可传送电子邮件至本会以下电子邮箱，正式提出申请成为本会认證的第四级裁判员。
                    请提交你的申请授权书和立案文件至本会电子邮件如下：
                </p>
                <div
                    className="wwsc-contact-info"
                    style={{
                        color: "teal",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        fontSize: "0.85rem",
                    }}
                >
                    <img
                        className="referee-card-back-logo"
                        src="/WWSC-logo.png"
                        alt="logo"
                        style={{ width: "80px", marginBottom: "6px" }}
                    />

                    <div className="wwsc-title" style={{ fontSize: "0.9rem" }}>
                        <strong>World Wiser Sport Committee</strong>
                    </div>

                    <div className="wwsc-address" style={{ marginBottom: "6px" }}>
                        709 E. Colorado Blvd., Suite 270, Pasadena, CA 91101
                    </div>
                    <div className="wwsc-phone-email" style={{ marginBottom: "6px" }}>
                        电话: 626.795.7485; 电子邮箱: 
                        <a href="mailto:info@worldwisersport.org">
                            <i>info@worldwisersport.org</i>
                        </a>{" "}
                    </div>
                    {/* <div className="wwsc-email"></div> */}
                    <div className="wwsc-web">
                        <a href="https://worldwisersport.org/">www.wordwisersport.org</a>
                    </div>
                </div>
            </div>
        </>
    );

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    // Create country filter for authOrgs
    let arryAuthOrgsCountry = [];

    for (let i = 0; i < authOrglist?.length; i++) {
        arryAuthOrgsCountry.push(authOrglist[i].country?.label);
    }

    const arryAuthOrgsCountriesNoDup = removeDuplicates(arryAuthOrgsCountry);

    console.log(arryAuthOrgsCountriesNoDup);

    // const indexHK = arryAuthOrgsCountriesNoDup.findIndex((country) => (country = "Hong Kong SAR China"));
    // console.log(indexHK);

    // const newArryAuthOrgs= arryAuthOrgsCountriesNoDup.with(3,"Hong Kong");
    // console.log(newArryAuthOrgs);

    // console.log(newArryAuthOrgs.reverse());

    // Create country filter for authOrgs 繁體中文
    let arryAuthOrgsCountryTw = [];

    for (let i = 0; i < authOrglist?.length; i++) {
        arryAuthOrgsCountryTw.push(authOrglist[i].countryTw?.label);
    }

    const arryAuthOrgsCountriesTwNoDup = removeDuplicates(arryAuthOrgsCountryTw);

    // Create country filter for authOrgs 简体中文
    let arryAuthOrgsCountryCn = [];

    for (let i = 0; i < authOrglist?.length; i++) {
        arryAuthOrgsCountryCn.push(authOrglist[i].countryCn?.label);
    }

    const arryAuthOrgsCountriesCnNoDup = removeDuplicates(arryAuthOrgsCountryCn);

    // const [query, setQuery] = useState("all");

    const handleCountryChange = (event) => {
        setQuery(event.target.value);
    };

    const handleStatusChange = (event) => {
        event.preventDefault();
        setQuery(event.target.value);
    };

    // const listByFilter = authOrglist
    //     ? authOrglist.filter((org) => {
    //           switch (query) {
    //               case "all":
    //                   return true;
    //               case "active":
    //               case "expired":
    //               case "pending":
    //               case "inactive":
    //                   //   console.log(org.status, filter);
    //                   return org.status === query;
    //               default:
    //                   return true;
    //           }
    //       })
    //     : null;

    const currentRows = authOrglist ? authOrglist.slice(firstRowIndex, lastRowIndex) : null;

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
            <div className="org-list-public-container">
                {error && <p>{error}</p>}
                <div className="org-list-top-container">
                    <div className="page-primary-title">{t("admin.org-list.title")}</div>
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "6px" }}>
                       
                            <Button
                                variant="plain"
                                size="sm"
                                startDecorator={
                                    <HelpIcon
                                        sx={{
                                            fontSize: "1rem",
                                            cursor: "pointer",
                                            textDecoration: "none",
                                            color: "grey",
                                            marginLeft: "3px",
                                        }}
                                    />
                                }
                                onClick={handleClickOpenAuthOrgHelpDialog}
                                sx={{ fontSize: "0.7rem", color: "grey" }}
                            >
                            {/* {t("referee.org-list.tooltip-auth-org")} */}
                            {t("general.help")}
                            </Button>{" "}
                       
                    </div>
                </div>
                <div className="event-list-filter-bar">
                    <div className="event-list-select-container">
                        <div className="event-list-select-item">
                            <span>
                                <Tooltip title={t("admin.org-list.select-status")} arrow placement="top">
                                    <MilitaryTechIcon fontSize="small" sx={{ color: "grey", marginRight: "3px" }} />
                                </Tooltip>
                            </span>
                            <select
                                className="wwsc-select w3-select w3-border "
                                value={query}
                                onChange={handleStatusChange}
                                style={{ fontSize: "0.75rem", height: "auto" }}
                            >
                                <option value="all">{t("admin.org-list.all-status")}</option>
                                <option value="active">{t("admin.referee-list.active")}</option>
                                <option value="expired">{t("admin.referee-list.expired")}</option>
                                <option value="pending">{t("admin.referee-list.pending")}</option>
                                <option value="inactive">{t("admin.referee-list.inactive")}</option>
                            </select>
                        </div>
                        <div className="event-list-select-item">
                            <span>
                                <Tooltip title={t("admin.event-list.select-location")} arrow placement="top">
                                    <PinDropIcon
                                        fontSize="small"
                                        sx={{ color: "grey", marginRight: "3px", marginLeft: "3px" }}
                                    />
                                </Tooltip>
                            </span>

                            {lang === "en" && (
                                <select
                                    className="event-list-select "
                                    value={query}
                                    onChange={handleCountryChange}
                                    style={{ width: "100px", fontSize: "0.75rem", height: "auto" }}
                                >
                                    <option value="all">{t("admin.org-list.all")}</option>
                                    {arryAuthOrgsCountriesNoDup.map((countryEng, index) => (
                                        <option key={index} value={countryEng}>
                                            {countryEng === "Hong Kong SAR China" ? "Hong Kong" : countryEng}
                                        </option>
                                    ))}
                                </select>
                            )}
                            {lang === "zh-TW" && (
                                <select
                                    className="event-list-select "
                                    value={query}
                                    onChange={handleCountryChange}
                                    style={{ width: "120px", fontSize: "0.75rem", height: "auto" }}
                                >
                                    <option value="all">{t("admin.org-list.all-auth-orgs")}</option>
                                    {arryAuthOrgsCountriesTwNoDup.map((countryTw, index) => (
                                        <option key={index} value={countryTw}>
                                            {countryTw === "中國香港特別行政區" ? "香港" : countryTw}
                                        </option>
                                    ))}
                                </select>
                            )}
                            {lang === "zh-CN" && (
                                <select
                                    className="event-list-select"
                                    value={query}
                                    onChange={handleCountryChange}
                                    style={{ width: "120px", fontSize: "0.75rem", height: "auto" }}
                                >
                                    <option value="all">{t("admin.org-list.all-auth-orgs")}</option>
                                    {arryAuthOrgsCountriesCnNoDup.map((countryCn, index) => (
                                        <option key={index} value={countryCn}>
                                            {countryCn === "中国香港特别行政区" ? "香港" : countryCn}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                    </div>

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

                {/* sx={{ Width: 350 }} */}
                {/*--------------Org List Table Layout ----------*/}
                <div className="org-list-table-public-container">
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                                <TableRow style={{ backgroundColor: "grey" }}>
                                    <TableCell style={{ color: "white", whiteSpace: "nowrap", width: "300px" }}>
                                        {t("referee.org-list.auth-org-name")}
                                    </TableCell>

                                    <TableCell
                                        align="center"
                                        style={{ color: "white", whiteSpace: "nowrap", width: "200px" }}
                                    >
                                        {t("referee.org-list.auth-status")}
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ color: "white", whiteSpace: "nowrap", width: "250px" }}
                                    >
                                        {t("referee.org-list.auth-period")}
                                    </TableCell>
                                    {/* <TableCell
                                    align="center"
                                    style={{ color: "white", whiteSpace: "nowrap", width: "100px" }}
                                >
                                    {t("admin.org-list.contact")}
                                </TableCell> */}
                                    <TableCell
                                        align="center"
                                        style={{ color: "white", whiteSpace: "nowrap", width: "250px" }}
                                    >
                                        {t("referee.org-list.auth-country")}
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {authOrglist ? (
                                    currentRows
                                        .filter(
                                            (org) =>
                                                query === "all" ||
                                                org.status.toLowerCase() === query.toLowerCase() ||
                                                org.country?.label.toLowerCase() === query.toLowerCase() ||
                                                org.countryTw?.label.toLowerCase() === query.toLowerCase() ||
                                                org.countryCn?.label.toLowerCase() === query.toLowerCase()
                                        )

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
                                                                    {org.logoURL ? (
                                                                        <img
                                                                            className="org-logo"
                                                                            src={org?.logoURL}
                                                                            alt="Org Logo"
                                                                        />
                                                                    ) : (
                                                                        <div className="no-org-logo">
                                                                            {org?.name[0]}
                                                                        </div>
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
                                                            alt={org?.nameTw}
                                                        >
                                                            {" "}
                                                            <div className="org-logo-name-wrapper">
                                                                <div>
                                                                    {org.logoURL ? (
                                                                        <img
                                                                            className="org-logo"
                                                                            src={org?.logoURL}
                                                                            alt="Org Logo"
                                                                        />
                                                                    ) : (
                                                                        <div className="no-org-logo">
                                                                            {org?.nameTw[0]}
                                                                        </div>
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
                                                                        <img
                                                                            className="org-logo"
                                                                            src={org?.logoURL}
                                                                            alt="Org Logo"
                                                                        />
                                                                    ) : (
                                                                        <div className="no-org-logo">
                                                                            {org?.nameCn[0]}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div>{org?.nameCn}</div>
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
                                                            {t("admin.org-list.active")}
                                                        </Chip>
                                                    )}
                                                    {org?.status === "expired" && (
                                                        <Chip
                                                            color="danger"
                                                            size="md"
                                                            variant="soft"
                                                            sx={{
                                                                fontSize: "0.8rem",
                                                                border: "1px solid var(--joy-palette-danger-300, #F09898)",
                                                            }}
                                                        >
                                                            {t("admin.org-list.expired")}
                                                        </Chip>
                                                    )}
                                                    {org?.status === "pending" && (
                                                        <Chip
                                                            color="success"
                                                            size="md"
                                                            variant="soft"
                                                            sx={{
                                                                fontSize: "0.8rem",
                                                                border: "1px solid var(--joy-palette-success-300, #A1E8A1)",
                                                            }}
                                                        >
                                                            {t("admin.org-list.pending")}
                                                        </Chip>
                                                    )}
                                                    {org?.status === "inactive" && (
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
                                                            {t("admin.org-list.inactive")}
                                                        </Chip>
                                                    )}
                                                </TableCell>
                                                <TableCell align="center" style={{ color: "teal" }}>
                                                    {moment.utc(org.fromDate?.toDate()).format("MM/DD/YYYY")} ~&nbsp;
                                                    {moment.utc(org.toDate?.toDate()).format("MM/DD/YYYY")} <br></br>
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
                                                {lang === "en" && (
                                                    <TableCell align="center" sx={{ color: "teal" }}>
                                                        {org.country?.label === "Hong Kong SAR China"
                                                            ? "Hong Kong"
                                                            : org.country?.label}
                                                    </TableCell>
                                                )}
                                                {lang === "zh-TW" && (
                                                    <TableCell align="center" sx={{ color: "teal" }}>
                                                        {org.countryTw?.label === "中國香港特別行政區"
                                                            ? "香港"
                                                            : org.countryTw?.label}
                                                    </TableCell>
                                                )}
                                                {lang === "zh-CN" && (
                                                    <TableCell align="center" sx={{ color: "teal" }}>
                                                        {org.countryCn?.label === "中国香港特别行政区"
                                                            ? "香港"
                                                            : org.countryCn?.label}
                                                    </TableCell>
                                                )}
                                            </TableRow>
                                        ))
                                ) : (
                                    <p>{t("admin.referee-list.loading-records-message")}</p>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Pagination
                        documents={authOrglist}
                        totalRows={authOrglist?.length}
                        setRowsPerPage={setRowsPerPage}
                        rowsPerPage={rowsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        firstRowIndex={firstRowIndex}
                        lastRowIndex={lastRowIndex}
                    />
                </div>
            </div>

            <BasicModal
                open={openAuthOrgDialog}
                handleClose={handleCloseAuthOrgHelpDialog}
                modalTitle={t("referee.org-list.auth-org-dialog-title")}
                modalContent={
                    lang === "en"
                        ? AuthOrgHelpDialogContent
                        : lang === "zh-TW"
                        ? AuthOrgHelpDialogContentTw
                        : AuthOrgHelpDialogContentCn
                }
            />
            {/* <MyDialog
                handleOpen={openAuthOrgDialog}
                handleClose={handleCloseAuthOrgHelpDialog}
                dialogTitle={t("referee.org-list.auth-org-dialog-title")}
                dialogContent={AuthOrgHelpDialogContent}
                dialogContentTw={AuthOrgHelpDialogContentTw}
                dialogContentCn={AuthOrgHelpDialogContentCn}
            /> */}
        </Container>
    );
}
