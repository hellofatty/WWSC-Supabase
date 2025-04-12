/** @format */

import "./RefereeLayout.css";

// import Sidebar from "../../../../components/Sidebar/Sidebar";
import RefereeCard from "../../../../components/RefereeCard/RefereeCard";
import { useDocument } from "../../../../hooks/useDocument";
import CircularProgress from "@mui/material/CircularProgress";
import RefereeSidebar from "../../../../components/Sidebar/RefereeSidebar";
import { Container, useMediaQuery } from "@mui/material";

export default function RefereeLayout({ uid, children }) {
    const { document: referee, error } = useDocument("users", uid);
    const mb = useMediaQuery("(max-width:600px)");

    if (error) {
        return <div className="error">{error}</div>;
    }
    if (!referee) {
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        );
    }

    console.log(referee);

    return (
        <div className="referee-home" style={{ backgroundColor: "rgba(211, 211, 211, 0.257)" }}>
            <div style={{ height:"100vh", zIndex: "100", backgroundColor: "rgba(211, 211, 211, 0.257)" }}>
                <RefereeSidebar referee={referee} />
            </div>
            {!mb && (
                <div className="referee-card" style={{ backgroundColor: "rgba(211, 211, 211, 0.257)" }}>
                    <RefereeCard referee={referee} />
                </div>
            )}

            <Container maxWidth="md" sx={{ paddingBottom: "20px", paddingLeft:"0" }}>
                <div className="referee-content">{children}</div>
            </Container>
        </div>
    );
}
