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
import { useSignupSB } from "../../hooks/useSignupSB";
import { Link, useNavigate } from "react-router-dom";

// import lanuage hook
import { useTranslation } from "react-i18next";
import signupBackImage from "./signup_bg.jpg";

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
import supabaseLogo from "../../assets/supabase.png"

    

// ======Create "SignupForm" component======

export default function SignupFormSB() {
    
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    const navigate = useNavigate();
    const { signup, isPending, error: signupError } = useSignupSB();

    // Form States
    const [isReferee, setIsReferee] = useState(false);
    const [refereeId, setRefereeId] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    // File Upload States
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailError, setThumbnailError] = useState(null);
    const [fileURL, setFileURL] = useState("");

    // Dialog States
    const [openRefereeTypeDialog, setOpenRefereeTypeDialog] = useState(false);
    const [openRefereeIdDialog, setOpenRefereeIdDialog] = useState(false);
    const [openDisplayNameDialog, setOpenDisplayNameDialog] = useState(false);
    const [openEmailDialog, setOpenEmailDialog] = useState(false);
    const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
    const [openPhotoDialog, setOpenPhotoDialog] = useState(false);

    // Handlers
    const handleFileChange = (e) => {
        setThumbnail(null);
        const selected = e.target.files[0];
        if (!selected) {
            setThumbnailError(t("error-code.signupForm.setThumbnailError1"));
            return;
        }
        if (!selected.type.includes("image")) {
            setThumbnailError(t("error-code.signupForm.setThumbnailError2"));
            return;
        }
        if (selected.size > 1000000) {
            setThumbnailError(t("error-code.signupForm.setThumbnailError3"));
            return;
        }

        setThumbnailError(null);
        setThumbnail(selected);
        setFileURL(URL.createObjectURL(selected));
        toast.success(t("error-code.signupForm.thumbnail-selected"));
    };

    // File reset handler
    const reset = () => {
        setThumbnail(null);
        setFileURL("");
    };

    // Password visibility handler
    const handleClickShowPassword = () => setShowPassword(show => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();

    // Switch handler for referee type

    const handleChange = (event) => {
        setIsReferee(event.target.checked);
    }
        
    
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            // Basic validation
            if (!email || !password || !displayName) {
                toast.error(t("signup.required-fields"));
                return;
            }
    
            if (isReferee && !refereeId) {
                toast.error(t("signup.referee-id-required"));
                return;
            }
    
            // const result = await signup(email, password, displayName, refereeId, thumbnail);
            const result = await signup(email, password, displayName, refereeId, thumbnail);
            
            if (result.error) {
                throw new Error(result.error);
            }
    
            toast.success(t("signup.success"));
            navigate("/referee-zone/referee-home-SB");
        } catch (err) {
            console.error("Signup error:", err);
            toast.error(err.message || t("signup.error"));
        }
        };

        // Dialog Handlers
 
        const handleClickOpenRefereeTypeDialog = () => setOpenRefereeTypeDialog(true);
        const handleClickCloseRefereeTypeDialog = () => setOpenRefereeTypeDialog(false);
   
        const handleClickOpenRefereeIdDialog = () => setOpenRefereeIdDialog(true);
        const handleClickCloseRefereeIdDialog = () => setOpenRefereeIdDialog(false);
   
        const handleClickOpenDisplayNameDialog = () => setOpenDisplayNameDialog(true);
        const handleCloseDisplayNameDialog = () => setOpenDisplayNameDialog(false);
   
        const handleClickOpenEmailDialog = () => setOpenEmailDialog(true);
        const handleCloseEmailDialog = () => setOpenEmailDialog(false);
   
        const handleClickOpenPasswordDialog = () => setOpenPasswordDialog(true);
        const handleClosePasswordDialog = () => setOpenPasswordDialog(false);
   
        const handleClickOpenPhotoDialog = () => setOpenPhotoDialog(true);
        const handleClosePhotoDialog = () => setOpenPhotoDialog(false);

        const sectionStyle = {
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${signupBackImage})`
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

        return (
            <div className="signup">
                <div className="signup-image-container" style={sectionStyle}></div>
                <div>
                    <form onSubmit={handleSignUp} className="signup-form">
                        <PrimaryTitle text={t("signup.title")} />
                          <img src={supabaseLogo} alt="Supabase Logo" style={{ width: "150px" }} />

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
                                        // required
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

                        {signupError && <p className="error">{signupError}</p>}
                        <div>
                            <span className="bottom-text-container" style={{ fontSize: "0.75rem", color: "grey" }}>
                                {t("signup.account")} &nbsp;
                                <Link to={"/referee-home-SB/login"}>{t("signup.login")}</Link>
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

