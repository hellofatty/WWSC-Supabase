/** @format */

import "./RefereeHome.css";

import RefereeLayout from "./RefereeLayout/RefereeLayout";
import RefereeDashboard from "./RefereeDashboard/RefereeDashboard";
import { useDocument } from "../../../hooks/useDocument";
import CircularProgress from "@mui/material/CircularProgress";

export default function RefereeHome({ uid }) {
    const { document: referee, error } = useDocument("users", uid);

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

    return <RefereeLayout uid={uid} children={<RefereeDashboard referee={referee} uid={uid} />} />;
}
