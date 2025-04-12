/** @format */

import "./RefereeProfile.css";

import Profile from "../../../../components/Profile/Profile";
import RefereeLayout from "../RefereeLayout/RefereeLayout";
import { useDocument } from "../../../../hooks/useDocument";
import CircularProgress from "@mui/material/CircularProgress";

export default function RefereeProfile({ uid }) {
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
    return <RefereeLayout uid={uid} children={<Profile referee={referee} />} />;
}
