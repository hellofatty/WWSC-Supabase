/** @format */

import "./RefereeCard.css";
// import ReactDOM from "react-dom";

// import Avatar from "../Avatar/Avatar";
import { useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
// import { useMediaQuery } from "@mui/material";

import CustomTab from "../CustomTab/CustomTab";
import { useTranslation } from "react-i18next";
// import MyDialog from "../MyDialog/MyDialog";
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

import BasicModal from "../MyModal/MyJoyModal";

// ==============Create Referee ID Card component==========
export default function RefereeCardSmallSB({ referee }) {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    // const { user } = useAuthContext();
    // const [photoURL, setPhotoURL] = useState(referee.photoURL);
    // const isSmallScreen = useMediaQuery("(min-width:600px)");

    // const [isCollapsed, setIsCollapsed] = useState(false);

    const [openRITCardDialog, setOpenRITCardDialog] = useState(false);
    const [openRefereeIdCardDialog, setOpenRefereeIdCardDialog] = useState(false);

    // const handleOpenMenu = () => setIsCollapsed(!isCollapsed);

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
            <CustomTab content={contentRIT} />

            <BasicModal
                open={openRITCardDialog}
                handleClose={handleCloseRITCardDialog}
                modalTitle={t("referee.card.tooltip-rit-card")}
                modalContent={
                    lang === "en" ? (
                        <RITCardDialogContent referee={referee} />
                    ) : lang === "zh-TW" ? (
                        <RITCardDialogContentTw referee={referee} />
                    ) : (
                        <RITCardDialogContentCn referee={referee} />
                    )
                }
            />

         
        </div>
    ) : (
        <div className="card-container">
            <CustomTab content={contentReferee} />

            <BasicModal
                open={openRefereeIdCardDialog}
                handleClose={handleCloseRefereeIdCardDialog}
                modalTitle={t("referee.card.tooltip-referee-id-card")}
                modalContent={
                    lang === "en" ? (
                        <RefereeIdCardDialogContent referee={referee} />
                    ) : lang === "zh-TW" ? (
                        <RefereeIdCardDialogContentTw referee={referee} />
                    ) : (
                        <RefereeIdCardDialogContentCn referee={referee} />
                    )
                }
            />
                    
       
        </div>
    );
}
