/** @format */

import React, { Suspense } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import App from "./App";
import wwscLogo from "./WWSC-logo.png";
// Language Translation
import i18n from "./i18n"; // Your i18n configuration
import { I18nextProvider } from "react-i18next";

import { Spinner } from "reactstrap";

// import AuthContextProvider
import { AuthContextProvider } from "./context/AuthContext";
import { AuthContextProviderSB } from "./context/AuthContextSB";

// import AuthContextSBProvider
// import { AuthContextProviderSB } from "./context/AuthContextSB";

// ---------------------------

const root = createRoot(document.getElementById("root"));

// const darkTheme = createTheme({
//     palette: {
//         mode: "dark",
//     },
// });

const loadingMarkup = (
    <div className="py-4 text-center">
        <img src={wwscLogo} alt="logo" width="150px" />
        <Spinner color="primary">"Loading..."</Spinner>
    </div>
);

root.render(
    <React.StrictMode>
        <Suspense fallback={loadingMarkup}>
            {" "}
            <I18nextProvider i18n={i18n} t={i18n.t} lang={i18n.language}>
                <AuthContextProviderSB>
                    <AuthContextProvider>
                    <App />
                    {/* <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <App />
                </ThemeProvider> */}
                    </AuthContextProvider>
                </AuthContextProviderSB>
            </I18nextProvider>
        </Suspense>
    </React.StrictMode>
);
