/** @format */

import "./RefereeCard.css";
// import ReactDOM from "react-dom";

// import Avatar from "../Avatar/Avatar";
import { useState } from "react";

// import { useAuthContext } from "../../hooks/useAuthContext";
// import HelpIcon from "@mui/icons-material/Help";
// import Tooltip from "@mui/material/Tooltip";
// import { projectFirestore } from "../../firebase/config";
// import { getDoc } from "firebase/firestore";
import { Sidebar, Menu } from "react-pro-sidebar";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import SimCardDownloadRoundedIcon from "@mui/icons-material/SimCardDownloadRounded";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
// import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CircularProgress from "@mui/material/CircularProgress";
import { useMediaQuery } from "@mui/material";

import CustomTab from "../CustomTab/CustomTab";
import { useTranslation } from "react-i18next";
import MyDialog from "../MyDialog/MyDialog";
// import { Link } from "react-router-dom";
import {
    FrontCardContentRIT,
    BackCardContentRIT,
    RITCardDialogContent,
    RITCardDialogContentTw,
    RITCardDialogContentCn,
} from "./Contents/RITContents";
import {
    BackCardContentReferee,
    FrontCardContentReferee,
    RefereeIdCardDialogContent,
    RefereeIdCardDialogContentCn,
    RefereeIdCardDialogContentTw,
} from "./Contents/RefereeContents";

// ==============Create Referee ID Card component==========
export default function RefereeCard({ referee }) {
    const { t } = useTranslation("global");
    // const { user } = useAuthContext();
    // const [photoURL, setPhotoURL] = useState(referee.photoURL);
    const isSmallScreen = useMediaQuery("(min-width:900px)");

    const [isCollapsed, setIsCollapsed] = useState(false);

    const [openRITCardDialog, setOpenRITCardDialog] = useState(false);
    const [openRefereeIdCardDialog, setOpenRefereeIdCardDialog] = useState(false);

    const handleOpenMenu = () => setIsCollapsed(!isCollapsed);

    // ReactDOM.render(<App />, document.getElementById('root'));

    // Handle RIT ID Card Dialog Box Open and Close

    const handleClickOpenRITCardDialog = () => {
        setOpenRITCardDialog(true);
    };

    const handleCloseRITCardDialog = () => {
        setOpenRITCardDialog(false);
    };

    const contentRIT = [
        {
            title: t("referee.card.tab1"),
            content: <FrontCardContentRIT referee={referee} openDialog={handleClickOpenRITCardDialog} />,
        },
        {
            title: t("referee.card.tab2"),
            content: <BackCardContentRIT referee={referee} openDialog={handleClickOpenRITCardDialog} />,
        },
    ];

    // ============Referee ID Card Content Template============

    // Handle Referee ID Card Dialog Box Open and Close

    const handleClickOpenRefereeIdCardDialog = () => {
        setOpenRefereeIdCardDialog(true);
    };

    const handleCloseRefereeIdCardDialog = () => {
        setOpenRefereeIdCardDialog(false);
    };

    const contentReferee = [
        {
            title: t("referee.card.tab1"),
            content: <FrontCardContentReferee referee={referee} openDialog={handleClickOpenRefereeIdCardDialog} />,
        },
        {
            title: t("referee.card.tab2"),
            content: <BackCardContentReferee referee={referee} openDialog={handleClickOpenRefereeIdCardDialog} />,
        },
    ];

    return !referee ? (
        <CircularProgress color="success" />
    ) : referee.grade === "0" ? (
        <div className="card-container">
            <Sidebar
                width="400px"
                collapsedWidth="20px"
                // collapsed={!isSmallScreen ? isCollapsed : true}
                collapsed={isSmallScreen ? isCollapsed : true}
                transitionDuration={2000}
                rootStyles={{
                    background: "rgba(211, 211, 211, 0.257)",
                }}
            >
                {isSmallScreen && (
                    <div
                        className={isCollapsed ? "card-menu-close-switch-container" : "card-menu-open-switch-container"}
                        // style={{ height: "10px" }}
                    >
                        <IconButton aria-label="open" onClick={handleOpenMenu}>
                            {isCollapsed ? (
                                <KeyboardDoubleArrowRightIcon className="menu-open-switch-icon" fontSize="medium" />
                            ) : (
                                <KeyboardDoubleArrowLeftIcon className="menu-open-switch-icon" fontSize="medium" />
                            )}
                        </IconButton>
                    </div>
                )}

                {isSmallScreen && <Menu>{!isCollapsed && <CustomTab content={contentRIT} />} </Menu>}
            </Sidebar>
            <MyDialog
                handleOpen={openRITCardDialog}
                handleClose={handleCloseRITCardDialog}
                dialogTitle={t("referee.card.tooltip-rit-card")}
                dialogContent={<RITCardDialogContent referee={referee} />}
                dialogContentTw={<RITCardDialogContentTw referee={referee} />}
                dialogContentCn={<RITCardDialogContentCn referee={referee} />}
            />
        </div>
    ) : (
        <div className="card-container" style={isCollapsed ? { marginRight: "10px" } : { marginRight: "5px" }}>
            <Sidebar
                width="400px"
                collapsedWidth="20px"
                collapsed={isSmallScreen ? isCollapsed : true}
                transitionDuration={2000}
                rootStyles={{
                    background: "rgba(211, 211, 211, 0.257)",
                }}
            >
                {isSmallScreen && (
                    <div
                        className={isCollapsed ? "card-menu-close-switch-container" : "card-menu-open-switch-container"}
                    >
                        <IconButton aria-label="open" onClick={handleOpenMenu}>
                            {isCollapsed ? (
                                <KeyboardDoubleArrowRightIcon className="menu-open-switch-icon" fontSize="medium" />
                            ) : (
                                <KeyboardDoubleArrowLeftIcon className="menu-open-switch-icon" fontSize="medium" />
                            )}
                        </IconButton>
                    </div>
                )}

                {isSmallScreen && <Menu>{!isCollapsed && <CustomTab content={contentReferee} />}</Menu>}
            </Sidebar>
            <div id="pdf-referee-card"></div>
            <MyDialog
                handleOpen={openRefereeIdCardDialog}
                handleClose={handleCloseRefereeIdCardDialog}
                dialogTitle={t("referee.card.tooltip-referee-id-card")}
                dialogContent={<RefereeIdCardDialogContent referee={referee} />}
                dialogContentTw={<RefereeIdCardDialogContentTw referee={referee} />}
                dialogContentCn={<RefereeIdCardDialogContentCn referee={referee} />}
            />
        </div>
    );
}
