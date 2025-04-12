/** @format */
// styles
import "./LoginForm.css";

// Use useLogin hook
import { useLogin } from "../../hooks/useLogin";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { projectAuth } from "../../firebase/config";
import { toast } from "react-toastify";

import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
// import FilledInput from "@mui/material/FilledInput";
import Tooltip from "@mui/material/Tooltip";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
// import HelpIcon from "@mui/icons-material/Help";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

import LoginIcon from "@mui/icons-material/Login";
// import CircularProgress from "@mui/material/CircularProgress";
import EmailIcon from "@mui/icons-material/Email";

import { projectAuth } from "../../firebase/config";
import Background from "./login-bg.jpg";

// ----Import translation hook-------
import { useTranslation } from "react-i18next";
import { PrimaryTitle } from "../Text/Title/Title";
// import { projectAuth } from "../../firebase/config";

// create LoginForm component

export default function LoginForm() {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    var sectionStyle = {
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Background})`,
    };

    // Use custom useLogin hook
    const { login, error, isPending } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            toast.error(t("login.email-required-message"));
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            toast.warning(t("login.email-notvalid-message"));
        }
        if (!password.trim()) {
            toast.error(t("login.password-required-message"));
        } else if (password.length < 6) {
            toast.error(t("login.password-length-message"));
        }
        if (email && password) {
            login(email, password);
        }
    };
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickForgetPassword = () => {
        if (email) {
            projectAuth
                .sendPasswordResetEmail(email)
                .then(() => {
                    alert(`${t("login.reset-password-email-sent")}: ${email}`);
                    toast.success(`${t("login.reset-password-email-sent")}: ${email}`);
                })
                .catch((error) => {
                    console.log(error.code);
                    console.log(error.message);
                });
        } else {
            toast.error(t("login.reset-password-email-required"));
        }
    };

    return (
        <div className="login">
            <div className="login-image-container" style={sectionStyle}></div>
            <div className="form-container">
                <div className="login-form">
                    <PrimaryTitle text={t("login.title")} />
                 
                    <div className="help-text">
                        <Link to={"/referee-zone/referee-system"}>{t("signup.help")}</Link>
                    </div>
                    {/* <img className="referee" src="/assets/referee.png" alt="referee" /> */}
                    <div className="mu-input-container">
                        <Box
                            onSubmit={handleSubmit}
                            component="form"
                            sx={{
                                display: "flex",
                                textAlign: "left",
                                flexDirection: "column",
                                justifyContent: "center",
                                "& > :not(style)": { m: 1, width: "100%" },
                            }}
                            noValidate
                            // autoComplete="off"
                        >
                            <FormControl required sx={{ m: 1 }} variant="standard">
                                <InputLabel shrink htmlFor="email" sx={{ color: "grey" }}>
                                    {t("login.email")}
                                </InputLabel>
                                <Input
                                    size="small"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    placeholder={t("signup.email-placeholder")}
                                    id="email"
                                    type="email"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Tooltip title={t("signup.tooltip-email")}>
                                                <IconButton edge="end" >
                                                    <EmailIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </InputAdornment>
                                    }
                                    label={t("login.email")}
                                />
                                {/* <FormHelperText id="email-helper-text">{t("login.email_helper")}</FormHelperText> */}
                            </FormControl>
                            <FormControl required sx={{ m: 1 }} variant="standard">
                                <InputLabel shrink>{t("login.password")}</InputLabel>
                                <Input
                                    size="small"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    placeholder={t("login.input-password")}
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
                                    label={t("login.password")}
                                />
                                {/* <FormHelperText id="passsword-helper-text">{t("login.password_helper")}</FormHelperText> */}
                            </FormControl>
                            {!isPending && (
                                <Button
                                    type="submit"
                                    size="medium"
                                    variant="contained"
                                    endIcon={<LoginIcon style={{ color: "white" }} />}
                                >
                                    {t("login.button")}
                                </Button>
                            )}

                            {isPending && (
                                <Button
                                    type="submit"
                                    size="medium"
                                    variant="contained"
                                    endIcon={<LoginIcon style={{ color: "white" }} />}
                                    disabled
                                >
                                    {t("login.loading")}
                                </Button>
                            )}
                        </Box>
                    </div>
                    <span style={{ fontSize: "0.75rem" }}>
                        {t("login.no_account")} <Link to={"/referee-home/signup"}>{t("login.signup")}</Link>.
                    </span>
                    <span
                        style={{ cursor: "pointer", color: "#0275d8", fontSize: "0.75rem" }}
                        onClick={handleClickForgetPassword}
                    >
                        {t("login.forget-password")}
                    </span>

                    {error && <span className="error">{t("login.wrong-info")} </span>}
                </div>
            </div>
        </div>
    );
}
