/** @format */

// import "./RefereeGameRecords.css";

import RefereeLayout from "../RefereeLayout/RefereeLayout";
import GameRecordsList from "./GameRecordsList";

export default function RefereeGameRecords({ uid }) {
    return <RefereeLayout uid={uid} children={<GameRecordsList uid={uid} />} />;
}
