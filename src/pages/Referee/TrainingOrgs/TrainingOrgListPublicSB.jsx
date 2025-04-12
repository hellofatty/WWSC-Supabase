/** @format */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "../../../supabase/supabaseClient";
import "./TrainingOrgListPublic.css";

// MUI Components
import {
    Container,
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    // useMediaQuery,
} from "@mui/material";
import { PinDrop as PinDropIcon, Help as HelpIcon, MilitaryTech as MilitaryTechIcon } from "@mui/icons-material";
import { Button, Chip } from "@mui/joy";
// Components
import Pagination from "../../../components/Pagination/Pagination";
import BasicModal from "../../../components/MyModal/MyJoyModal";
import { ResParagraph } from "../../../components/Text/Title/Title";
import moment from "moment";

export default function TrainingOrgListPublicSB() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    // State
    const [organizations, setOrganizations] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openAuthOrgDialog, setOpenAuthOrgDialog] = useState(false);

    // Fetch authorized organizations
    useEffect(() => {
        const fetchOrganizations = async () => {
            try {
                const { data, error } = await supabase
                    .from("organizations")
                    .select(
                        `
                        id,
                        name,
                        name_tw,
                        name_cn,
                        logo_url,
                        org_url,
                        is_authorized,
                        status,
                        from_date,
                        to_date,
                        years,
                        country_label: country_en->label,
                        country_label_tw: country_tw->label,
                        country_label_cn: country_cn->label 
                    `
                    )
                    .eq("is_authorized", true)
                    .order("name", { ascending: true });

                if (error) throw error;
                setOrganizations(data);
            } catch (err) {
                console.error("Error fetching organizations:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrganizations();
    }, []);

    // Helper functions
    const removeDuplicates = (arr) => [...new Set(arr)];

    const getCountries = () => {
        if (!organizations) return { en: [], tw: [], cn: [] };

        const en = removeDuplicates(organizations.map((org) => org.country_label).filter(Boolean));
        const tw = removeDuplicates(organizations.map((org) => org.country_label_tw).filter(Boolean));
        const cn = removeDuplicates(organizations.map((org) => org.country_label_cn).filter(Boolean));

        return { en, tw, cn };
    };

    const countries = getCountries();
    const handleCountryChange = (event) => setQuery(event.target.value);
    const handleStatusChange = (event) => setQuery(event.target.value);

    // Dialog handlers

    // Dialog handlers
    const handleClickOpenAuthOrgHelpDialog = () => setOpenAuthOrgDialog(true);
    const handleCloseAuthOrgHelpDialog = () => setOpenAuthOrgDialog(false);

    // Pagination
    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    const currentRows = organizations?.slice(firstRowIndex, lastRowIndex) || [];

    if (loading) {
        return (
            <div className="loading-container">
                <CircularProgress />
                <p>{t("general.loading")}</p>
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
                                    {countries.en.map((countryEng, index) => (
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
                                    {countries.tw.map((countryTw, index) => (
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
                                    {countries.cn.map((countryCn, index) => (
                                        <option key={index} value={countryCn}>
                                            {countryCn === "中国香港特别行政区" ? "香港" : countryCn}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                    </div>
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
                                {organizations ? (
                                    currentRows
                                    .filter((org) => {
                                        if (query === "all") return true;
                                        
                                        // Handle status filter
                                        if (org.status && query === org.status.toLowerCase()) {
                                            return true;
                                        }
                                    
                                        // Handle country filter for each language
                                        const countryLabel = lang === "en" ? org.country_label 
                                            : lang === "zh-TW" ? org.country_label_tw 
                                            : org.country_label_cn;
                                    
                                        return countryLabel && countryLabel.toLowerCase() === query.toLowerCase();
                                    })

                                        .map((org, idx) => (
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
                                                                    {org.logo_url ? (
                                                                        <img
                                                                            className="org-logo"
                                                                            src={org?.logo_url}
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
                                                            href={org?.org_url}
                                                            style={{ cursor: "pointer" }}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            alt={org?.name_tw}
                                                        >
                                                            {" "}
                                                            <div className="org-logo-name-wrapper">
                                                                <div>
                                                                    {org?.logo_url ? (
                                                                        <img
                                                                            className="org-logo"
                                                                            src={org?.logo_url}
                                                                            alt="Org Logo"
                                                                        />
                                                                    ) : (
                                                                        <div className="no-org-logo">
                                                                            {org?.name_tw[0]}
                                                                        </div>
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
                                                    {moment(org?.from_date).format("MM/DD/YYYY")} ~&nbsp;
                                                    {moment(org?.to_date).format("MM/DD/YYYY")} <br />
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
                                                        {org?.country_label === "Hong Kong SAR China"
                                                            ? "Hong Kong"
                                                            : org?.country_label}
                                                    </TableCell>
                                                )}
                                                {lang === "zh-TW" && (
                                                    <TableCell align="center" sx={{ color: "teal" }}>
                                                        {org?.country_label_tw === "中國香港特別行政區"
                                                            ? "香港"
                                                            : org?.country_label_tw}
                                                    </TableCell>
                                                )}
                                                {lang === "zh-CN" && (
                                                    <TableCell align="center" sx={{ color: "teal" }}>
                                                        {org?.country_label_cn === "中国香港特别行政区"
                                                            ? "香港"
                                                            : org?.country_label_cn}
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
                        documents={organizations}
                        totalRows={organizations?.length}
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
        </Container>
    );
}
