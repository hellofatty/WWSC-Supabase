/** @format */
// import style css
import "./SignupForm.css";
import { toast } from "react-toastify";

// import material icons & components
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import OutlinedInput from "@mui/material/OutlinedInput";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
// import LoginIcon from "@mui/icons-material/Login";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";

import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import CircularProgress from "@mui/material/CircularProgress";
import EmailIcon from "@mui/icons-material/Email";
import Switch from "@mui/material/Switch";

// import React & custom hooks
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

import { Link } from "react-router-dom";

// import lanuage hook
import { useTranslation } from "react-i18next";

import Background from "./signup_bg.jpg";

import {
    emailDialogContent,
    emailDialogContentTw,
    emailDialogContentCn,
    RefereeIdDialogContent,
    RefereeIdDialogContentTw,
    RefereeIdDialogContentCn,
    passwordDialogContent,
    passwordDialogContentTw,
    passwordDialogContentCn,
    displayNameDialogContent,
    displayNameDialogContentTw,
    displayNameDialogContentCn,
    selectRefereeTypeDialogContent,
    selectRefereeTypeDialogContentTw,
    selectRefereeTypeDialogContentCn,
    photoDialogContent,
    photoDialogContentTw,
    photoDialogContentCn,
} from "./HelpContent";
import { PrimaryTitle } from "../Text/Title/Title";
import BasicModal from "../MyModal/MyJoyModal";

// ======Create "SignupForm" component======

export default function SignupForm() {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;

    // Referee-in-training and WWSC referee Switch

    const [isReferee, setIsReferee] = useState(false);
    const handleChange = (event) => {
        setIsReferee(event.target.checked);
    };

    //use UseState hook
    const [refereeId, setRefereeId] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailError, setThumbnailError] = useState(null);
    const [fileURL, setFileURL] = useState("");

    //Use useSignup hook
    const { signup, isPending, error } = useSignup();

    // Create handleFileChange function
    const showToastMessage = () => {
        toast.success(t("error-code.signupForm.thumbnail-selected"));
        // toast.success(t("referee.record.update-success-message"));
    };

    const handleFileChange = (e) => {
        setThumbnail(null);
        let selected = e.target.files[0];
        setFileURL(URL.createObjectURL(selected));
        console.log(selected);

        if (!selected) {
            setThumbnailError(t("error-code.signupForm.setThumbnailError1"));
            // setThumbnailError("Please select a file");
            return;
        }

        if (!selected.type.includes("image")) {
            setThumbnailError(t("error-code.signupForm.setThumbnailError2"));
            // setThumbnailError("Selected file must be an image");
            return;
        }

        if (!selected.size > 1000000) {
            setThumbnailError(t("error-code.signupForm.setThumbnailError3"));
            // setThumbnailError("Image file size must be less than 1mb");

            return;
        }

        setThumbnailError(null);
        setThumbnail(selected);
        console.log(t("error-code.signupForm.thumbnail-selected"));
        showToastMessage();
    };

    // Create handleInputChange function

    const reset = () => {
        setThumbnail("");
    };

    // Toggle show and hide password

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
        color: "white",
    });

    // Create signup form handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email, password, displayName, refereeId, thumbnail);
    };

    // Handle Select Referee Type Instructions Dialog Box Open and Close

    const [openRefereeTypeDialog, setOpenRefereeTypeDialog] = useState(false);

    const handleClickOpenRefereeTypeDialog = () => {
        setOpenRefereeTypeDialog(true);
    };

    const handleClickCloseRefereeTypeDialog = () => {
        setOpenRefereeTypeDialog(!openRefereeTypeDialog);
    };

    // Handle Select Referee ID Dialog Box Open and Close

    const [openRefereeIdDialog, setOpenRefereeIdDialog] = useState(false);

    const handleClickOpenRefereeIdDialog = () => {
        setOpenRefereeIdDialog(true);
    };
    const handleClickCloseRefereeIdDialog = () => {
        setOpenRefereeIdDialog(!openRefereeIdDialog);
    };

    // Handle DisplayName Instructions Dialog Box Open and Close

    const [openDisplayNameDialog, setOpenDisplayNameDialog] = useState(false);

    const handleClickOpenDisplayNameDialog = () => {
        setOpenDisplayNameDialog(true);
    };

    const handleCloseDisplayNameDialog = () => {
        setOpenDisplayNameDialog(false);
    };

    // Handle Email Instructions Dialog Box Open and Close

    const [openEmailDialog, setOpenEmailDialog] = useState(false);

    const handleClickOpenEmailDialog = () => {
        setOpenEmailDialog(true);
    };

    const handleCloseEmailDialog = () => {
        setOpenEmailDialog(false);
    };

    // Handle Passwod Instructions Dialog Box Open and Close

    const [openPasswordDialog, setOpenPasswordDialog] = useState(false);

    const handleClickOpenPasswordDialog = () => {
        setOpenPasswordDialog(true);
    };

    const handleClosePasswordDialog = () => {
        setOpenPasswordDialog(false);
    };

    // Handle Photo Instructions Dialog Box Open and Close

    const [openPhotoDialog, setOpenPhotoDialog] = useState(false);

    const handleClickOpenPhotoDialog = () => {
        setOpenPhotoDialog(true);
    };

    const handleClosePhotoDialog = () => {
        setOpenPhotoDialog(false);
    };

    var sectionStyle = {
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Background})`,
    };

    return (
        <div className="signup">
            <div className="signup-image-container" style={sectionStyle}></div>
            <div>
                <form onSubmit={handleSubmit} className="signup-form">
                    <PrimaryTitle text={t("signup.title")} />

                    <img className="referee" src="/assets/referee.png" alt="referee" />
                    <div className="help-text">
                        <Link to={"/referee-zone/referee-system"}>{t("signup.help")}</Link>
                    </div>
                    <Box
                        // component="form"
                        // onSubmit={handleSubmit}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                            justifyContent: "center",

                            "& > :not(style)": { m: 1, width: "100%" },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {/* Referee-in-training and WWSC referee switch check box */}
                        <InputLabel shrink>
                            <div className="help-text-wrapper" style={{ justifyContent: "flex-start" }}>
                                {t("signup.select-referee-type")}*
                                <Tooltip title={t("signup.tooltip-referee-type")}>
                                    <HelpIcon
                                        onClick={handleClickOpenRefereeTypeDialog}
                                        sx={{
                                            fontSize: "1.2rem",
                                            cursor: "pointer",
                                            textDecoration: "none",
                                            color: "lightgrey",
                                            marginLeft: "3px",
                                        }}
                                    />

                                 
                                </Tooltip>
                            </div>
                        </InputLabel>
                        <FormControl sx={{ m: 3 }} variant="standard">
                            <div className="referee-checkbox">
                                <span
                                    style={
                                        isReferee
                                            ? { color: "grey", fontSize: "0.85rem" }
                                            : { color: "teal", textDecoration: "underline", fontSize: "0.85rem" }
                                    }
                                >
                                    {t("signup.referee-in-training")}
                                </span>
                                <Switch
                                    size="small"
                                    checked={isReferee}
                                    onChange={handleChange}
                                    inputProps={{ "aria-label": "controlled" }}
                                    // color="secondary"
                                />
                                <span
                                    style={
                                        isReferee
                                            ? { color: "teal", textDecoration: "underline", fontSize: "0.85rem" }
                                            : { color: "grey", fontSize: "0.85rem" }
                                    }
                                >
                                    {t("signup.referee")}
                                </span>
                            </div>{" "}
                        </FormControl>
                        {/* Input Referee ID  */}
                        {isReferee && (
                            <FormControl sx={{ m: 3 }} variant="standard">
                                <InputLabel shrink>
                                    <div className="help-text-wrapper">
                                        {t("signup.refereeID")}*
                                        <Tooltip title={t("signup.tooltip-referee-ID")}>
                                            <HelpIcon
                                                onClick={handleClickOpenRefereeIdDialog}
                                                sx={{
                                                    fontSize: "1.2rem",
                                                    cursor: "pointer",
                                                    textDecoration: "none",
                                                    color: "lightgrey",
                                                    marginLeft: "3px",
                                                }}
                                            />
                                        </Tooltip>
                                    </div>
                                </InputLabel>
                                <Input
                                    required
                                    size="small"
                                    placeholder="WWSC-G4-CR-XXXXX"
                                    onChange={(e) => setRefereeId(e.target.value)}
                                    value={refereeId}
                                    id="signup-referee-id"
                                    name="refereeID"
                                    type="text"
                                    label={t("signup.refereeID")}
                                />
                            </FormControl>
                        )}
                        <FormControl sx={{ m: 3 }} variant="standard">
                            <InputLabel shrink>
                                <div className="help-text-wrapper">
                                    {t("signup.displayName")}*
                                    <Tooltip title={t("signup.tooltip-displayName")}>
                                        <HelpIcon
                                            onClick={handleClickOpenDisplayNameDialog}
                                            sx={{
                                                fontSize: "1.2rem",
                                                cursor: "pointer",
                                                textDecoration: "none",
                                                color: "lightgrey",
                                                marginLeft: "3px",
                                            }}
                                        />
                                    </Tooltip>
                                </div>
                            </InputLabel>
                            <Input
                                required
                                size="small"
                                placeholder={t("signup.displayName-placeholder")}
                                onChange={(e) => setDisplayName(e.target.value)}
                                value={displayName}
                                id="signup-referee-displayname"
                                name="displayName"
                                type="text"
                                label={t("signup.displayName")}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 3 }} variant="standard">
                            <InputLabel shrink htmlFor="standard-adornment-email" sx={{ color: "grey" }}>
                                <div className="help-text-wrapper">
                                    {" "}
                                    {t("signup.email")}*
                                    <Tooltip title={t("signup.tooltip-email")}>
                                        <HelpIcon
                                            onClick={handleClickOpenEmailDialog}
                                            sx={{
                                                fontSize: "1.2rem",
                                                cursor: "pointer",
                                                textDecoration: "none",
                                                color: "lightgrey",
                                                marginLeft: "3px",
                                            }}
                                        />
                                    </Tooltip>
                                </div>
                            </InputLabel>
                            <Input
                                required
                                size="small"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder={t("signup.email-placeholder")}
                                id="standard-adornment-email"
                                name="email"
                                type="email"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Tooltip title={t("signup.tooltip-email")}>
                                            <IconButton edge="end">
                                                <EmailIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </InputAdornment>
                                }
                                label={t("signup.email")}
                            />
                            {/* <FormHelperText id="email-helper-text">{t("login.email_helper")}</FormHelperText> */}
                        </FormControl>
                        <FormControl sx={{ m: 3 }} variant="standard">
                            <InputLabel shrink>
                                <div className="help-text-wrapper">
                                    {t("signup.password")}*
                                    <Tooltip title={t("signup.tooltip-password")}>
                                        <HelpIcon
                                            onClick={handleClickOpenPasswordDialog}
                                            sx={{
                                                fontSize: "1.2rem",
                                                cursor: "pointer",
                                                textDecoration: "none",
                                                color: "lightgrey",
                                                marginLeft: "3px",
                                            }}
                                        />
                                    </Tooltip>
                                </div>
                            </InputLabel>
                            <Input
                                required
                                size="small"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Enter your password"
                                id="standard-adornment-password"
                                type={showPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Tooltip title={t("signup.tooltip-show-hide-password")}>
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </Tooltip>
                                    </InputAdornment>
                                }
                                label={t("signup.password")}
                            />
                            {/* <FormHelperText id="passsword-helper-text">{t("login.password_helper")}</FormHelperText> */}
                        </FormControl>
                        <InputLabel shrink>
                            {t("signup.selectFile")}*
                            <Tooltip title={t("signup.tooltip-photo")}>
                                <HelpIcon
                                    onClick={handleClickOpenPhotoDialog}
                                    sx={{
                                        fontSize: "1.2rem",
                                        cursor: "pointer",
                                        textDecoration: "none",
                                        color: "lightgrey",
                                        marginLeft: "3px",
                                    }}
                                />
                            </Tooltip>
                        </InputLabel>
                        <Button
                            sx={{ width: "50px", textTransform: "none" }}
                            component="label"
                            role={undefined}
                            variant="outlined"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon style={{ color: "#1976d2" }} />}
                        >
                            {t("signup.selectFile")}
                            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                        </Button>
                        {thumbnail && (
                            <div className="signup-upload-file-container">
                                <span className="photo-avatar">
                                    <img src={fileURL} alt="" />
                                </span>
                                <span id="selected-thumbnail-name">{thumbnail.name}</span>

                                <Button
                                    type="button"
                                    color="secondary"
                                    size="sm"
                                    variant="outlined"
                                    onClick={reset}
                                    sx={{ width: "160px", textTransform: "none" }}
                                >
                                    {t("signup.reset")}
                                </Button>
                            </div>
                        )}
                        <br />
                        {thumbnailError && <div>{thumbnailError}</div>}
                    </Box>

                    {!isPending && (
                        <Button
                            sx={{ width: "345px", marginLeft: "16px", textTransform: "none", marginBottom: "12px" }}
                            type="submit"
                            size="medium"
                            variant="contained"
                            endIcon={<AppRegistrationIcon style={{ color: "white" }} />}
                        >
                            {t("signup.signup-btn")}
                        </Button>
                    )}
                    {isPending && (
                        <>
                            <CircularProgress />
                            <span>{t("signup.loading")}</span>
                        </>
                    )}

                    {error && <p className="error">{error}</p>}
                    <div>
                        <span className="bottom-text-container" style={{ fontSize: "0.75rem", color: "grey" }}>
                            {t("signup.account")} &nbsp;
                            <Link to={"/referee-home/login"}>{t("signup.login")}</Link>
                        </span>
                        {/* <span><Link to={"/referee-zone/referee-system"}>{t("signup.help")}</Link></span> */}
                    </div>
                </form>

                <BasicModal
                    open={openRefereeTypeDialog}
                    handleClose={handleClickCloseRefereeTypeDialog}
                    modalTitle={t("signup.tooltip-referee-type")}
                    modalContent={
                        lang === "en"
                            ? selectRefereeTypeDialogContent
                            : lang === "zh-TW"
                            ? selectRefereeTypeDialogContentTw
                            : selectRefereeTypeDialogContentCn
                    }
                />

                <BasicModal
                    open={openRefereeIdDialog}
                    handleClose={handleClickCloseRefereeIdDialog}
                    modalTitle={t("signup.tooltip-referee-ID")}
                    modalContent={
                        lang === "en"
                            ? RefereeIdDialogContent
                            : lang === "zh-TW"
                            ? RefereeIdDialogContentTw
                            : RefereeIdDialogContentCn
                    }
                />

                <BasicModal
                    open={openDisplayNameDialog}
                    handleClose={handleCloseDisplayNameDialog}
                    modalTitle={t("signup.tooltip-displayName")}
                    modalContent={
                        lang === "en"
                            ? displayNameDialogContent
                            : lang === "zh-TW"
                            ? displayNameDialogContentTw
                            : displayNameDialogContentCn
                    }
                />
                <BasicModal
                    open={openEmailDialog}
                    handleClose={handleCloseEmailDialog}
                    modalTitle={t("signup.tooltip-email")}
                    modalContent={
                        lang === "en"
                            ? emailDialogContent
                            : lang === "zh-TW"
                            ? emailDialogContentTw
                            : emailDialogContentCn
                    }
                />
                <BasicModal
                    open={openPasswordDialog}
                    handleClose={handleClosePasswordDialog}
                    modalTitle={t("signup.tooltip-password")}
                    modalContent={
                        lang === "en"
                            ? passwordDialogContent
                            : lang === "zh-TW"
                            ? passwordDialogContentTw
                            : passwordDialogContentCn
                    }
                />

                <BasicModal
                    open={openPhotoDialog}
                    handleClose={handleClosePhotoDialog}
                    modalTitle={t("signup.tooltip-photo")}
                    modalContent={
                        lang === "en"
                            ? photoDialogContent
                            : lang === "zh-TW"
                            ? photoDialogContentTw
                            : photoDialogContentCn
                    }
                />
            </div>
        </div>
    );
}
