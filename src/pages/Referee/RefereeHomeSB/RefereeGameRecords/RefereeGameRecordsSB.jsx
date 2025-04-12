/** @format */

// import "./RefereeGameRecords.css";

import RefereeLayoutSB from "../RefereeLayout/RefereeLayoutSB";
import GameRecordsListSB from "./GameRecordsListSB";

export default function RefereeGameRecordsSB({ uid }) {
    return <RefereeLayoutSB uid={uid} children={<GameRecordsListSB uid={uid} />} />;
}
