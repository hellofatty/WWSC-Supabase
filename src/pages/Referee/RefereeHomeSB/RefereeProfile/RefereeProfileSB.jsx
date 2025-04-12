/** @format */

import "./RefereeProfile.css";
import ProfileSB from "../../../../components/Profile/ProfileSB";
import RefereeLayoutSB from "../RefereeLayout/RefereeLayoutSB";


export default function RefereeProfileSB({ uid, referee }) {
    
    return <RefereeLayoutSB uid={uid} children={<ProfileSB referee={referee} />} />;
}
