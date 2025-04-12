/** @format */

import "./ViewUserInfo.css";
import RefereeCardPublic from "../../../components/RefereeCard/RefereeCardPublic";
import ProfilePublic from "../../../components/Profile/ProfilePublic";
import { useDocument } from "../../../hooks/useDocument";
import { Container } from "@mui/material";

export default function ViewUserInfo({ record, toggle }) {
    console.log(record.user.value.id);
    const { document: referee, error } = useDocument("users", record.user.value.id);

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
            <div className="view-user-info-container">
                {error && <p>{error}</p>}
                {referee && (
                    <div>
                        <RefereeCardPublic referee={referee} />
                    </div>
                )}
                {referee && (
                    <div>
                        <ProfilePublic referee={referee} />
                    </div>
                )}
            </div>
        </Container>
    );
}
