/** @format */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { supabase } from "../../supabase/supabaseClient";
import { useLoginSB } from "../../hooks/useLoginSB";
import { PrimaryTitle } from "../Text/Title/Title";
import supabaseLogo from "../../assets/supabase.png"

// MUI imports
import {
    Box,
    Button,
    FormControl,
    IconButton,
    Input,
    InputLabel,
    InputAdornment,
    Tooltip
} from "@mui/material";
import {
    Visibility,
    VisibilityOff,
    Login as LoginIcon,
    Email as EmailIcon
} from "@mui/icons-material";

// Styles and assets
import "./LoginForm.css";
import loginBackImage from "./login-bg.jpg";

// create LoginForm component

export default function LoginFormSB() {

    const { t } = useTranslation("global");
    const navigate = useNavigate();
    const { login, isPending, error: loginError } = useLoginSB();

    // State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Styles
    const sectionStyle = {
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${loginBackImage})`
    };

    // Handlers
    const handleSignIn = async (e) => {
        e.preventDefault();

        const validateForm = () => {
            if (!email.trim()) {
                toast.error(t("login.email-required-message"));
                return false;
            }
            if (!/\S+@\S+\.\S+/.test(email)) {
                toast.warning(t("login.email-notvalid-message"));
                return false;
            }
            if (!password.trim()) {
                toast.error(t("login.password-required-message"));
                return false;
            }
            if (password.length < 6) {
                toast.error(t("login.password-length-message"));
                return false;
            }
            return true;
        };

        if (!validateForm()) return;

        try {
            await login(email, password);
            navigate("/referee-zone/referee-home-SB");
        } catch (err) {
            console.error("Login error:", err);
            toast.error(t("login.wrong-info"));
        }
    };

    const handleClickForgetPassword = async () => {
        if (!email) {
            toast.error(t("login.reset-password-email-required"));
            return;
        }
//TODO: redirectTo: `${window.location.origin}/reset-password`
        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/reset-password`
            });

            if (error) throw error;
            toast.success(`${t("login.reset-password-email-sent")}: ${email}`);
        } catch (error) {
            console.error('Error sending password reset email:', error);
            toast.error(t("login.reset-password-error"));
        }
    };

    const handleClickShowPassword = () => setShowPassword(show => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();

    return (
        <div className="login">
           
            <div className="login-image-container" style={sectionStyle}></div>
            <div className="form-container">
                <div className="login-form">
              
                    <PrimaryTitle text={t("login.title")} />
                    <img src={supabaseLogo} alt="Supabase Logo" style={{ width: "150px" }} />
                    <div className="help-text">
                        <Link to="/referee-zone/referee-system">{t("signup.help")}</Link>
                    </div>

                    <div className="mu-input-container">
                        <Box
                            component="form"
                            onSubmit={handleSignIn}
                            sx={{
                                display: "flex",
                                textAlign: "left",
                                flexDirection: "column",
                                justifyContent: "center",
                                "& > :not(style)": { m: 1, width: "100%" }
                            }}
                            noValidate
                        >
                            <FormControl required sx={{ m: 1 }} variant="standard">
                                <InputLabel shrink htmlFor="email" sx={{ color: "grey" }}>
                                    {t("login.email")}
                                </InputLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t("signup.email-placeholder")}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Tooltip title={t("signup.tooltip-email")}>
                                                <IconButton edge="end">
                                                    <EmailIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                            <FormControl required sx={{ m: 1 }} variant="standard">
                                <InputLabel shrink>{t("login.password")}</InputLabel>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder={t("login.input-password")}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Tooltip title={t("signup.tooltip-show-hide-password")}>
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </Tooltip>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                            <Button
                                type="submit"
                                size="medium"
                                variant="contained"
                                endIcon={<LoginIcon style={{ color: "white" }} />}
                                disabled={isPending}
                            >
                                {isPending ? t("login.loading") : t("login.button")}
                            </Button>
                        </Box>
                    </div>

                    <span style={{ fontSize: "0.75rem" }}>
                        {t("login.no_account")} <Link to="/referee-home-SB/signup">{t("login.signup")}</Link>
                    </span>
                    
                    <span
                        style={{ cursor: "pointer", color: "#0275d8", fontSize: "0.75rem" }}
                        onClick={handleClickForgetPassword}
                    >
                        {t("login.forget-password")}
                    </span>

                    {loginError && <span className="error">{t("login.wrong-info")}</span>}
                </div>
            </div>
        </div>
    );
}
