/** @format */

import { Route, Routes, Navigate } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";

// Import your components here
import Home from "../pages/Home/Home";
import Privacy from "../pages/Privacy Policy/Privacy";
import Terms from "../pages/Terms/Terms";
import Introduction from "../pages/About Us/Introduction/Introduction";
import Mission from "../pages/About Us/Mission/Mission";
import Rules from "../pages/Wiser Sport/Rules/Rules";
import Equipment from "../pages/Wiser Sport/Equipment/Equipment";
import Dress from "../pages/Wiser Sport/Dress Code/Dress";
import Glossary from "../pages/Wiser Sport/Glossary/Glossary";
import Tut from "../pages/Play Wiser/Video Tut/Tut";
import Marching from "../pages/Play Wiser/Marching/Marching";
import Sheet from "../pages/Play Wiser/Sheet/Sheet";
import FAQ from "../pages/Play Wiser/FAQ/FAQ";
import G3TrainingAlbs from "../pages/Gallery/G3TrainingAlbs/G3TrainingAlbs";
import G4TrainingAlbs from "../pages/Gallery/G4TrainingAlbs/G4TrainingAlbs";
import HongKong from "../pages/Gallery/HongKong/HongKong";
import USAWiserAlbs from "../pages/Gallery/WorldWiserAlbs/USAWiserAlbs";
import WorldWiserAlbs from "../pages/Gallery/WorldWiserAlbs/WorldWiserAlbs";
import Ceremony from "../pages/Wiser Info/Ceremony/Ceremony";
import WorldWiserAlbs4 from "../pages/Gallery/WorldWiserAlbs/WorldWiserAlbs4";
import WorldWiserAlbs3 from "../pages/Gallery/WorldWiserAlbs/WorldWiserAlbs3";
import WorldWiserAlbs2 from "../pages/Gallery/WorldWiserAlbs/WorldWiserAlbs2";
import NoticeSB from "../pages/Wiser Info/Notice/NoticeSB";
import NoticePageSB from "../components/NoticePage/NoticePageSB";
import EventSB from "../pages/Wiser Info/Event/EventSB";
import VounteerDonation from "../pages/Wiser Info/Volunteer Donation/VounteerDonation";
import GlobalLinkSB from "../pages/Wiser Info/Global Links/GlobalLinkSB";
import RefereeTraining from "../pages/Referee/Referee/RefereeTraining";
import SearchReferee from "../pages/Referee/SearchReferee/SearchReferee";
import TrainingOrgListPublicSB from "../pages/Referee/TrainingOrgs/TrainingOrgListPublicSB";
import RefereeSystemIntro from "../pages/Referee/RefereeHome/RefereeSystemIntro/RefereeSystemIntro";



import RefereeHomeSB from "../pages/Referee/RefereeHomeSB/RefereeHomeSB";
import PDFRefereeIDCardSB from "../pages/Referee/RefereeHomeSB/RefereeIDCard/PDFRefereeIDCardSB";
import RefereeProfileSB from "../pages/Referee/RefereeHomeSB/RefereeProfile/RefereeProfileSB";
import RefereeTrainingRecordsSB from "../pages/Referee/RefereeHomeSB/RefereeTrainingRecords/RefereeTrainingRecordsSB";
import RefereeGameRecordsSB from "../pages/Referee/RefereeHomeSB/RefereeGameRecords/RefereeGameRecordsSB";
import RefereeTrainingClassRecordsSB from "../pages/Referee/RefereeHomeSB/RefereeTrainingClass/RefereeTrainingClassRecordsSB";




import RITListSB from "../pages/AdminSB/RefereeList/RITListSB";
import G3RefereeListSB from "../pages/AdminSB/RefereeList/G3RefereeListSB";
import G4RefereeListSB from "../pages/AdminSB/RefereeList/G4RefereeListSB";
import RefereeDetailSB from "../pages/AdminSB/RefereeList/RefereeDetailSB";
import RefereeIDCardPDFSB from "../pages/AdminSB/RefereeList/RefereeIDCardPDFSB";
import OrgListSB from "../pages/AdminSB/Organizations/OrgListSB";
import EventListSB from "../pages/AdminSB/Event/EventListSB";
import NoticeListSB from "../pages/AdminSB/Notices/NoticeListSB";
import NoticeDetailSB from "../pages/AdminSB/Notices/NoticeDetailSB";
import LoginSB from "../pages/Referee/LoginSB/LoginSB";
import SignupSB from "../pages/Referee/SignupSB/SignupSB";
import AdminHomeSB from "../pages/AdminSB/AdminHome/AdminHomeSB";
import RefereeListSB from "../pages/AdminSB/RefereeList/RefereeListSB";
import Contact from "../pages/Contact/Contact";
import { ErrorBoundary } from "react-error-boundary";

import { useAuthContextSB } from "../hooks/useAuthContextSB";
import { supabase } from "../supabase/supabaseClient";
import { useEffect, useState } from "react";



export const AppRouterSB = () => {
    const { user } = useAuthContextSB();

    const [notices, setNotices] = useState(null);
    const [noticeError, setNoticeError] = useState(null);
    const [referee, setReferee] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get notices from Supabase
                const { data: noticesData, error: noticesError } = await supabase
                    .from("notices")
                    .select("*")
                    .eq("author", "WWSC")
                    .order("posted_date", { ascending: false });

                if (noticesError) throw noticesError;
                setNotices(noticesData);

                // Get referee data if user is authenticated
                if (user?.id) {
                    const { data: refereeData, error: refereeError } = await supabase
                        .from("referees")
                        .select("*")
                        .eq("id", user.id)
                        .single();

                    if (refereeError) throw refereeError;
                    setReferee(refereeData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setNoticeError(error.message);
            }
        };

        fetchData();
    }, [user?.id]); // Re-run when user ID changes

    // console.log(referee?.role);
    // console.log(referee?.name);
    return (
        <ErrorBoundary
            fallback={<div>Something went wrong</div>}
            onError={(error, errorInfo) => {
                console.error("Error:", error, errorInfo);
            }}
        >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wwsc-privacy-policy" element={<Privacy />} />
                <Route path="/terms-conditions" element={<Terms />} />

                {/* About Us Routes */}
                <Route path="/about-us/introduction-to-wiser-sport/" element={<Introduction />} />
                <Route path="/about-us/mission-statement-of-wwsc/" element={<Mission />} />

                {/* Wiser Sport Routes */}
                <Route path="/wiser-sport/the-rules-of-wiser-sport" element={<Rules />} />
                <Route path="/wiser-sport/balls-and-basic-equipment-for-wiser-sport" element={<Equipment />} />
                <Route path="/wiser-sport/dress-code-for-wiser-sport/" element={<Dress />} />
                <Route path="/wiser-sport/glossary-of-terms/" element={<Glossary />} />

                {/* Play Wiser Routes */}
                <Route path="/play-wiser/video-tutorial-play-wiser-ball" element={<Tut />} />
                <Route path="/play-wiser/wwsc-demo-video-marching-etiquette-interception" element={<Marching />} />
                <Route path="/play-wiser/game-recording-sheet-app-download" element={<Sheet />} />
                <Route path="/play-wiser/faqs" element={<FAQ />} />

                {/* Gallery Routes */}
                <Route path="/gallery/wwsc-g3-referee-training-albums" element={<G3TrainingAlbs />} />
                <Route path="/gallery/wwsc-g4-referee-training-albums" element={<G4TrainingAlbs />} />
                <Route path="/gallery/wwsc-hong-kong-albums" element={<HongKong />} />
                <Route path="/gallery/USA-wiser-albums" element={<USAWiserAlbs />} />
                <Route path="/gallery/world-wiser-albums_1" element={<WorldWiserAlbs />} />
                <Route path="/gallery/world-wiser-albums_2" element={<WorldWiserAlbs2 />} />
                <Route path="/gallery/world-wiser-albums_3" element={<WorldWiserAlbs3 />} />
                <Route path="/gallery/world-wiser-albums_4" element={<WorldWiserAlbs4 />} />

                {/* Wiser Info Routes */}
                <Route path="/wiser-info/wwsc-inaugural-ceremony" element={<Ceremony />} />

                {/* Notice Routes */}
                {notices &&
                    Array(Math.ceil(notices.length / 5))
                        .fill(0)
                        .map((_, i) => (
                            <Route
                                key={`notice-page-${i}`}
                                path={"/wiser-info/wwsc-notices-" + (i + 1)}
                                element={<NoticeSB page={i} notices={notices} error={noticeError} />}
                            />
                        ))}
                {notices &&
                    notices.map((notice) => (
                        <Route
                            path={"/wiser-info/wwsc-notices/" + notice.slug}
                            key={`notice-detail-${notice.slug}`}
                            // element={<NoticePage content={notice.content} title={notice.title} />}
                            element={<NoticePageSB notice={notice} />}
                        />
                    ))}
                <Route path="/wiser-info/wiser-event-news" element={<EventSB />} />
                <Route path="/wiser-info/volunteer-and-donation" element={<VounteerDonation />} />
                <Route path="/wiser-info/wiser-global-links" element={<GlobalLinkSB />} />

                {/* Referee Zone Routes */}
                <Route path="/referee-zone/wiser-referee-training" element={<RefereeTraining />} />
                <Route path="/referee-zone/search-referee" element={<SearchReferee />} />
                <Route path="/referee-zone/referee-training-organizations" element={<TrainingOrgListPublicSB />} />
                <Route path="/referee-zone/referee-system" element={<RefereeSystemIntro />} />

                {/* Protected Routes - Updated to use Supabase user.id */}
                <Route
                    path="/referee-zone/referee-home-SB"
                    element={user ? <RefereeHomeSB uid={user.id} /> : <Navigate to="/referee-home-SB/login" />}
                />
                <Route
                    path="/referee-zone/referee-id-card-SB"
                    element={
                        user ? (
                            <PDFRefereeIDCardSB uid={user.id} referee={referee} />
                        ) : (
                            <Navigate to="/referee-home-SB/login" />
                        )
                    }
                />
                <Route
                    path="/referee-zone/referee-home-SB/referee-profile"
                    element={user ? <RefereeProfileSB uid={user.id} referee={referee}/> : <Navigate to="/referee-home-SB/login" />}
                />
                <Route
                    path="/referee-zone/referee-home-SB/referee-training-records"
                    element={user ? <RefereeTrainingRecordsSB uid={user.id} /> : <Navigate to="/referee-home-SB/login" />}
                />

                <Route
                    path="/referee-zone/referee-home-SB/referee-game-records"
                    element={user ? <RefereeGameRecordsSB uid={user.id} /> : <Navigate to="/referee-home-SB/login" />}
                />
                <Route
                    path="/referee-zone/referee-home-SB/referee-training-class-records"
                    element={
                        user ? <RefereeTrainingClassRecordsSB uid={user.id} /> : <Navigate to="/referee-home-SB/login" />
                    }
                />

                <Route
                    path="/referee-home-SB/login"
                    element={user ? <Navigate to="/referee-zone/referee-home-SB" /> : <LoginSB />}
                />

                <Route
                    path="/referee-home-SB/signup"
                    element={user ? <Navigate to="/referee-zone/referee-home-SB" /> : <SignupSB />}
                />

                {/* Contact us Route */}
                <Route path="/contact-us" element={<Contact />} />

                {/* Admin Routes */}
                <Route
                    path="/admin-zone-SB/admin-home"
                    element={user && referee?.role === "Admin" ? <AdminHomeSB /> : <Navigate to="/referee-home-SB/login" />}
                />
                <Route
                    path="/admin-zone-SB/referee-list"
                    element={
                        user && referee?.role === "Admin" ? <RefereeListSB /> : <Navigate to="/referee-home-SB/login" />
                    }
                />

                <Route
                    path="/admin-zone-SB/referee-in-training-list"
                    element={user && referee?.role === "Admin" ? <RITListSB /> : <Navigate to="/referee-home-SB/login" />}
                />
                <Route
                    path="/admin-zone-SB/G3-referee-list"
                    element={
                        user && referee?.role === "Admin" ? <G3RefereeListSB /> : <Navigate to="/referee-home-SB/login" />
                    }
                />
                <Route
                    path="/admin-zone-SB/G4-referee-list"
                    element={
                        user && referee?.role === "Admin" ? <G4RefereeListSB /> : <Navigate to="/referee-home-SB/login" />
                    }
                />

                <Route
                    path="/admin-zone-SB/referee/:id"
                    element={
                        user && referee?.role === "Admin" ? <RefereeDetailSB /> : <Navigate to="/referee-home-SB/login" />
                    }
                />
                <Route
                    path="/admin-zone-SB/referee/:id/pdf-card"
                    element={
                        user && referee?.role === "Admin" ? <RefereeIDCardPDFSB /> : <Navigate to="/referee-home-SB/login" />
                    }
                />
                <Route
                    path="/admin-zone-SB/training-organization-list"
                    element={user && referee?.role === "Admin" ? <OrgListSB /> : <Navigate to="/referee-home-SB/login" />}
                />
                <Route
                    path="/admin-zone-SB/event-list"
                    element={user && referee?.role === "Admin" ? <EventListSB /> : <Navigate to="/referee-home-SB/login" />}
                />
                <Route
                    path="/admin-zone-SB/notice-list"
                    element={user && referee?.role === "Admin" ? <NoticeListSB /> : <Navigate to="/referee-home-SB/login" />}
                />
                <Route
                    path="/admin-zone-SB/notice/:id"
                    element={
                        user && referee?.role === "Admin" ? <NoticeDetailSB /> : <Navigate to="/referee-home-SB/login" />
                    }
                />
            </Routes>
        </ErrorBoundary>
    );
};
