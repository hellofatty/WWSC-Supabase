/** @format */

import React from "react";
// import lanuage hook
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { PrimaryTitle } from "../Text/Title/Title";

export default function MyDialog({
    handleOpen,
    handleClose,
    dialogTitle,
    dialogContent,
    dialogContentTw,
    dialogContentCn,
}) {
    const { i18n } = useTranslation("global");
    const lang = i18n.language;

    return (
        <>
            {lang === "en" && (
                <Dialog
                    open={handleOpen}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: "1px solid, lightgrey",
                        }}
                    >
                        <DialogTitle id="alert-dialog-title">
                            <PrimaryTitle text={dialogTitle} />
                        </DialogTitle>

                        <CancelOutlinedIcon
                            onClick={handleClose}
                            sx={{
                                marginLeft: "auto",
                                marginTop: "12px",
                                marginRight: "20px",
                                fontSize: "2rem",
                                color: "tomato",
                                cursor: "pointer",
                            }}
                        />
                    </div>
                    <DialogContent>
                        {" "}
                        {lang === "en"}?{dialogContent}:{lang === "zh-TW"}?{dialogContentTw}:{dialogContentCn}
                        <DialogContentText id="alert-dialog-description"></DialogContentText>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
}
