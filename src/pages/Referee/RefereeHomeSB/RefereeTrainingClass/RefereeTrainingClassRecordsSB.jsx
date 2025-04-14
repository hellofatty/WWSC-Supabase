/** @format */

// import "./RefereeTrainingRecords.css";

import RefereeLayoutSB from "../RefereeLayout/RefereeLayoutSB";
import TrainingClassRecordsListSB from "./TrainingClassRecordsListSB";

export default function RefereeTrainingClassSB({ uid }) {
    return <RefereeLayoutSB uid={uid} children={<TrainingClassRecordsListSB uid={uid} />} />;
}
