/** @format */

import React from "react";
// import lanuage hook
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

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
                    fullWidth
                    maxWidth="md"
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: "1px solid, lightgrey",
                        }}
                    >
                        {/* <DialogTitle id="alert-dialog-title">Instructions for Entering Your Email</DialogTitle> */}
                        <DialogTitle className="page-primary-title">{dialogTitle}</DialogTitle>
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
                        <DialogContentText id="alert-dialog-description">{dialogContent}</DialogContentText>
                    </DialogContent>
                    <DialogActions></DialogActions>
                </Dialog>
            )}
            {lang === "zh-TW" && (
                <Dialog
                    open={handleOpen}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                     fullWidth
                    maxWidth="md"
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: "1px solid, lightgrey",
                        }}
                    >
                        <DialogTitle className="page-primary-title">{dialogTitle}</DialogTitle>

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
                        <DialogContentText id="alert-dialog-description">{dialogContentTw}</DialogContentText>
                    </DialogContent>
                    <DialogActions></DialogActions>
                </Dialog>
            )}
            {lang === "zh-CN" && (
                <Dialog
                    open={handleOpen}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                     fullWidth
                    maxWidth="md"
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: "1px solid, lightgrey",
                            marginBottom: "0",
                            paddingBottom: "0",
                        }}
                    >
                        {" "}
                        <DialogTitle className="page-primary-title">{dialogTitle}</DialogTitle>
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
                        <DialogContentText id="alert-dialog-description">{dialogContentCn}</DialogContentText>
                    </DialogContent>
                    <DialogActions></DialogActions>
                </Dialog>
            )}
        </>
    );
}
