/** @format */

import "./ViewRefereeInfo.css";
import RefereeCardPublic from "../../../components/RefereeCard/RefereeCardPublic";
import ProfilePublic from "../../../components/Profile/ProfilePublic";

export default function ViewRefereeInfo({ referee }) {
    console.log(referee)
    return (
        <div className="view-referee-info-container">
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
    );
}
