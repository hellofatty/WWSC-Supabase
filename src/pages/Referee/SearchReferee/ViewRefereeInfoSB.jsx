/** @format */

import "./ViewRefereeInfo.css";
import RefereeCardPublicSB from "../../../components/RefereeCard/RefereeCardPublicSB";
import ProfilePublicSB from "../../../components/Profile/ProfilePublicSB";

export default function ViewRefereeInfoSB({ referee }) {
    console.log(referee)
    return (
        <div className="view-referee-info-container">
            {referee && (
                <div>
                    <RefereeCardPublicSB referee={referee} />
                </div>
            )}
            {referee && (
                <div>
                    <ProfilePublicSB referee={referee} />
                </div>
            )}
        </div>
    );
}
