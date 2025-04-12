/** @format */

import "./App.css";

// import "primereact/resources/themes/lara-light-cyan/theme.css";

// import { PrimeReactProvider } from "primereact/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import cookies from "js-cookie";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// import { ParallaxProvider } from "react-scroll-parallax";
import { useAuthContext } from "./hooks/useAuthContext";
import { useEffect } from "react";
// import { useFetch } from "./hooks/useFetch";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import components & pages

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Introduction from "./pages/About Us/Introduction/Introduction";
import Mission from "./pages/About Us/Mission/Mission";

import Rules from "./pages/Wiser Sport/Rules/Rules";
import Equipment from "./pages/Wiser Sport/Equipment/Equipment";
import Dress from "./pages/Wiser Sport/Dress Code/Dress";
import Glossary from "./pages/Wiser Sport/Glossary/Glossary";

import Tut from "./pages/Play Wiser/Video Tut/Tut";
import Marching from "./pages/Play Wiser/Marching/Marching";
import FAQ from "./pages/Play Wiser/FAQ/FAQ";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TopBar from "./components/TopBar/TopBar";

import Sheet from "./pages/Play Wiser/Sheet/Sheet";
import Ceremony from "./pages/Wiser Info/Ceremony/Ceremony";
import Notice from "./pages/Wiser Info/Notice/Notice";
import Event from "./pages/Wiser Info/Event/Event";
import VounteerDonation from "./pages/Wiser Info/Volunteer Donation/VounteerDonation";
import GlobalLink from "./pages/Wiser Info/Global Links/GlobalLink";

import SearchReferee from "./pages/Referee/SearchReferee/SearchReferee";
import RefereeTraining from "./pages/Referee/Referee/RefereeTraining";
import RefereeSystemIntro from "./pages/Referee/RefereeHome/RefereeSystemIntro/RefereeSystemIntro";
import RefereeHome from "./pages/Referee/RefereeHome/RefereeHome";
import RefereeProfile from "./pages/Referee/RefereeHome/RefereeProfile/RefereeProfile";
import PDFRefereeIDCard from "./pages/Referee/RefereeHome/RefereeIDCard/PDFRefereeIDCard";
import RefereeTrainingRecords from "./pages/Referee/RefereeHome/RefereeTrainingRecords/RefereeTrainingRecords";
import RefereeTrainingClassRecords from "./pages/Referee/RefereeHome/RefereeTrainingClass/RefereeTrainingClassRecords";
import TrainingOrgListPublic from "./pages/Referee/TrainingOrgs/TrainingOrgListPublic";
// import EditTrainingRecord from "./pages/Referee/RefereeTrainingRecords/EditTrainingRecord";
import RefereeGameRecords from "./pages/Referee/RefereeHome/RefereeGameRecords/RefereeGameRecords";

import Login from "./pages/Referee/Login/Login";
import Signup from "./pages/Referee/Signup/Signup";

// -------------Admin Panel--------

import AdminHome from "./pages/Admin/AdminHome/AdminHome";

import RefereeList from "./pages/Admin/RefereeList/RefereeList";
import RITList from "./pages/Admin/RefereeList/RITList";
import G3RefereeList from "./pages/Admin/RefereeList/G3RefereeList";
import G4RefereeList from "./pages/Admin/RefereeList/G4RefereeList";
import RefereeDetail from "./pages/Admin/RefereeList/RefereeDetail";
import OrgList from "./pages/Admin/Organizations/OrgList";
import EventList from "./pages/Admin/Event/EventList";
import NoticeList from "./pages/Admin/Notices/NoticeList";
import NoticeDetail from "./pages/Admin/Notices/NoticeDetail";

// ------------Import Gallery----------
import G4TrainingAlbs from "./pages/Gallery/G4TrainingAlbs/G4TrainingAlbs";
import G3TrainingAlbs from "./pages/Gallery/G3TrainingAlbs/G3TrainingAlbs";
import HongKong from "./pages/Gallery/HongKong/HongKong";
import WorldWiserAlbs from "./pages/Gallery/WorldWiserAlbs/WorldWiserAlbs";
import WorldWiserAlbs2 from "./pages/Gallery/WorldWiserAlbs/WorldWiserAlbs2";
import WorldWiserAlbs3 from "./pages/Gallery/WorldWiserAlbs/WorldWiserAlbs3";
import WorldWiserAlbs4 from "./pages/Gallery/WorldWiserAlbs/WorldWiserAlbs4";

import NoticePage from "./components/NoticePage/NoticePage";
import Privacy from "./pages/Privacy Policy/Privacy";
import Terms from "./pages/Terms/Terms";

import { useCollection } from "./hooks/useCollection";

import { useDocument } from "./hooks/useDocument";
import RefereeIDCardPDF from "./pages/Admin/RefereeList/RefereeIDCardPDF";
import USAWiserAlbs from "./pages/Gallery/WorldWiserAlbs/USAWiserAlbs";

// import { PayPalScriptProvider } from "@paypal/react-paypal-js";

// import CircularProgress from "@mui/material/CircularProgress";

// import NewBread from "./components/NewBread/NewBread";

// import TopBar from "./components/TopBar/TopBar";

function App() {
    const { t, i18n } = useTranslation("global");
    // const currentLang = i18n.language;

    const currentLang = localStorage.getItem("i18next") || cookies.get("i18next") || i18n.language || "en";

    useEffect(() => {
        // console.log("Setting document title");
        document.title = t("document.title");
    }, [currentLang, t]);

    const { documents: notices, error: noticeError } = useCollection(
        "notices",
        ["author", "==", "WWSC"],
        ["postedDate", "desc"]
    );
    // const { documents: refereeList, error: refereeError } = useCollection(
    //     "users",
    //     ["grade", "in", ["3", "4"]],
    //     ["refereeId", "asc"]
    // );

    // const notices = noticeList
    //     ? noticeList.filter((notice) => {
    //           return notice.lang === currentLang;
    //       })
    //     : null;

    const { authIsReady, user } = useAuthContext();

    const { document: referee } = useDocument("users", user?.uid);

    // if (noticeError || refereeError) {
    //     return <div className="error">{noticeError} || { refereeError}</div>;
    //     }
    //     if (!notices || !refereeList) {
    //         return (
    //             <div className="loading">
    //                <p>{t("general.loading")}</p>
    //                 <CircularProgress />
    //             </div>
    //         );
    //     }

    return (
        <>
            {/* <div>
                <PDFRefereeCard />
            </div> */}
            <div className="App">
                {authIsReady && (
                    <>
                        <Router>
                            <TopBar user={user} />
                            {/* <Header /> */}
                            <Navbar />
                            {/* <NewBread /> */}

                            <Routes>
                                <Route exact path="/" Component={Home} />
                                <Route path="/wwsc-privacy-policy" element={<Privacy />} />
                                <Route path="/terms-conditions" element={<Terms />} />
                                <Route path="/about-us/introduction-to-wiser-sport/" element={<Introduction />} />
                                <Route path="/about-us/mission-statement-of-wwsc/" element={<Mission />} />
                                <Route path="/wiser-sport/the-rules-of-wiser-sport" element={<Rules />} />
                                <Route
                                    path="/wiser-sport/balls-and-basic-equipment-for-wiser-sport"
                                    element={<Equipment />}
                                />
                                <Route path="/wiser-sport/dress-code-for-wiser-sport/" element={<Dress />} />
                                <Route path="/wiser-sport/glossary-of-terms/" element={<Glossary />} />
                                <Route path="/play-wiser/video-tutorial-play-wiser-ball" element={<Tut />} />
                                <Route
                                    path="/play-wiser/wwsc-demo-video-marching-etiquette-interception"
                                    element={<Marching />}
                                />
                                <Route path="/play-wiser/game-recording-sheet-app-download" element={<Sheet />} />
                                <Route path="/play-wiser/faqs" element={<FAQ />} />
                                <Route path="/gallery/wwsc-g3-referee-training-albums" element={<G3TrainingAlbs />} />
                                <Route path="/gallery/wwsc-g4-referee-training-albums" element={<G4TrainingAlbs />} />
                                <Route path="/gallery/wwsc-hong-kong-albums" element={<HongKong />} />
                                <Route path="/gallery/USA-wiser-albums" element={<USAWiserAlbs />} />
                                <Route path="/gallery/world-wiser-albums_1" element={<WorldWiserAlbs />} />
                                <Route path="/gallery/world-wiser-albums_2" element={<WorldWiserAlbs2 />} />
                                <Route path="/gallery/world-wiser-albums_3" element={<WorldWiserAlbs3 />} />
                                <Route path="/gallery/world-wiser-albums_4" element={<WorldWiserAlbs4 />} />
                                <Route path="/wiser-info/wwsc-inaugural-ceremony" element={<Ceremony />} />
                                {notices &&
                                    Array(Math.ceil(notices.length / 5))
                                        .fill(0)
                                        .map((_, i) => (
                                            <Route
                                                key={i}
                                                path={"/wiser-info/wwsc-notices-" + (i + 1)}
                                                element={<Notice page={i} notices={notices} error={noticeError} />}
                                            />
                                        ))}
                                {notices &&
                                    notices.map((notice, idx) => (
                                        <Route
                                            path={"/wiser-info/wwsc-notices/" + notice.slug}
                                            key={idx}
                                            // element={<NoticePage content={notice.content} title={notice.title} />}
                                            element={<NoticePage notice={notice} />}
                                        />
                                    ))}
                                <Route path="/wiser-info/wiser-event-news" element={<Event />} />
                                <Route path="/wiser-info/volunteer-and-donation" element={<VounteerDonation />} />
                                <Route path="/wiser-info/wiser-global-links" element={<GlobalLink />} />
                                <Route path="/referee-zone/wiser-referee-training" element={<RefereeTraining />} />
                                <Route path="/referee-zone/search-referee" element={<SearchReferee />} />
                                <Route
                                    path="/referee-zone/referee-training-organizations"
                                    element={<TrainingOrgListPublic />}
                                />
                                <Route path="/referee-zone/referee-system" element={<RefereeSystemIntro />} />
                                <Route
                                    path="/referee-zone/referee-home"
                                    element={
                                        user ? <RefereeHome uid={user.uid} /> : <Navigate to="/referee-home/login" />
                                    }
                                />
                                <Route
                                    path="/referee-zone/referee-id-card"
                                    element={
                                        user ? (
                                            <PDFRefereeIDCard uid={user.uid} referee={referee} />
                                        ) : (
                                            <Navigate to="/referee-home/login" />
                                        )
                                    }
                                />
                                <Route
                                    path="/referee-zone/referee-home/referee-profile"
                                    element={
                                        user ? <RefereeProfile uid={user.uid} /> : <Navigate to="/referee-home/login" />
                                    }
                                />
                                <Route
                                    path="/referee-zone/referee-home/referee-training-records"
                                    element={
                                        user ? (
                                            <RefereeTrainingRecords uid={user.uid} />
                                        ) : (
                                            <Navigate to="/referee-home/login" />
                                        )
                                    }
                                />

                                <Route
                                    path="/referee-zone/referee-home/referee-game-records"
                                    element={
                                        user ? (
                                            <RefereeGameRecords uid={user.uid} />
                                        ) : (
                                            <Navigate to="/referee-home/login" />
                                        )
                                    }
                                />
                                <Route
                                    path="/referee-zone/referee-home/referee-training-class-records"
                                    element={
                                        user ? (
                                            <RefereeTrainingClassRecords uid={user.uid} />
                                        ) : (
                                            <Navigate to="/referee-home/login" />
                                        )
                                    }
                                />

                                <Route
                                    path="/referee-home/login"
                                    element={user ? <Navigate to="/referee-zone/referee-home" /> : <Login />}
                                />

                                <Route
                                    path="/referee-home/signup"
                                    element={user ? <Navigate to="/referee-zone/referee-home" /> : <Signup />}
                                />
                                <Route path="/contact-us" Component={Contact} />
                                <Route
                                    path="/admin-zone/admin-home"
                                    element={
                                        user && referee?.role === "Admin" ? (
                                            <AdminHome />
                                        ) : (
                                            <Navigate to="/referee-home/login" />
                                        )
                                    }
                                />
                                <Route
                                    path="/admin-zone/referee-list"
                                    element={
                                        user && referee?.role === "Admin" ? (
                                            <RefereeList />
                                        ) : (
                                            <Navigate to="/referee-home/login" />
                                        )
                                    }
                                />

                                {/* <Route
                                path="/admin-zone/referee-list"
                                element={user ? <RefereeList /> : <Navigate to="/referee-home/login" />}
                            /> */}

                                <Route
                                    path="/admin-zone/referee-in-training-list"
                                    element={
                                        user && referee?.role === "Admin" ? (
                                            <RITList />
                                        ) : (
                                            <Navigate to="/referee-home/login" />
                                        )
                                    }
                                />
                                <Route
                                    path="/admin-zone/G3-referee-list"
                                    element={
                                        user && referee?.role === "Admin" ? (
                                            <G3RefereeList />
                                        ) : (
                                            <Navigate to="/referee-home/login" />
                                        )
                                    }
                                />
                                <Route
                                    path="/admin-zone/G4-referee-list"
                                    element={
                                        user && referee?.role === "Admin" ? (
                                            <G4RefereeList />
                                        ) : (
                                            <Navigate to="/referee-home/login" />
                                        )
                                    }
                                />

                                <Route
                                    path="/admin-zone/referee/:id"
                                    element={
                                        user && referee?.role === "Admin" ? (
                                            <RefereeDetail />
                                        ) : (
                                            <Navigate to="/referee-home/login" />
                                        )
                                    }
                                />
                                <Route
                                    path="/admin-zone/referee/:id/pdf-card"
                                    element={
                                        user && referee?.role === "Admin" ? (
                                            <RefereeIDCardPDF />
                                        ) : (
                                            <Navigate to="/referee-home/login" />
                                        )
                                    }
                                />
                                <Route
                                    path="/admin-zone/training-organization-list"
                                    element={
                                        user && referee?.role === "Admin" ? (
                                            <OrgList />
                                        ) : (
                                            <Navigate to="/referee-home/login" />
                                        )
                                    }
                                />
                                <Route
                                    path="/admin-zone/event-list"
                                    element={
                                        user && referee?.role === "Admin" ? (
                                            <EventList />
                                        ) : (
                                            <Navigate to="/referee-home/login" />
                                        )
                                    }
                                />
                                <Route
                                    path="/admin-zone/notice-list"
                                    element={
                                        user && referee?.role === "Admin" ? (
                                            <NoticeList />
                                        ) : (
                                            <Navigate to="/referee-home/login" />
                                        )
                                    }
                                />
                                <Route
                                    path="/admin-zone/notice/:id"
                                    element={
                                        user && referee?.role === "Admin" ? (
                                            <NoticeDetail />
                                        ) : (
                                            <Navigate to="/referee-home/login" />
                                        )
                                    }
                                />
                            </Routes>

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
                )}
            </div>
        </>
    );
}

export default App;
