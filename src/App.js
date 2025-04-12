/** @format */

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import cookies from "js-cookie";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { useTranslation } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";

// import { ParallaxProvider } from "react-scroll-parallax";
// import { useAuthContext } from "./hooks/useAuthContext";
import { useEffect } from "react";
// import { useFetch } from "./hooks/useFetch";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import components & pages

import NavbarSB from "./components/Navbar/NavbarSB";
import Footer from "./components/Footer/Footer";
// import TopBar from "./components/TopBar/TopBar";



// import { AppRouter } from "./routes/AppRouter";
import { AppRouterSB } from "./routes/AppRouterSB";
import TopBarSB from "./components/TopBar/TopBarSB";
import { supabase } from "./supabase/supabaseClient";
import { useAuthContextSB } from "./hooks/useAuthContextSB";

// import { PayPalScriptProvider } from "@paypal/react-paypal-js";

// import CircularProgress from "@mui/material/CircularProgress";

// import NewBread from "./components/NewBread/NewBread";

function App() {
    const { t, i18n } = useTranslation("global");
    // const currentLang = i18n.language;

    const currentLang = localStorage.getItem("i18next") || cookies.get("i18next") || i18n.language || "en";

    useEffect(() => {
        // console.log("Setting document title");
        document.title = t("document.title");
    }, [currentLang, t]);

    const { dispatch } = useAuthContextSB();

    useEffect(() => {
        // Check for existing session
        const checkSession = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();
            
            if (error) {
                console.error('Error recovering session:', error);
                return;
            }
    
            if (session) {
                dispatch({ type: "LOGIN", payload: session.user });
            }
        };
    
        checkSession();
    
        // Set up auth state listener
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                dispatch({ type: "LOGIN", payload: session.user });
            } else {
                dispatch({ type: "LOGOUT" });
            }
        });
    
        return () => {
            if (subscription) subscription.unsubscribe();
        };
    }, [dispatch]);


    return (
        <>
            <div className="App">
                <>
                    <Router>
                        <TopBarSB />
                        {/* <Header /> */}
                        <NavbarSB />
                        {/* <NewBread /> */}

                        <AppRouterSB />

                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                        <Footer />
                    </Router>
                </>
            </div>
        </>
    );
}

export default App;
