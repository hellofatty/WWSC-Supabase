/** @format */

// import "./RefereeTrainingRecords.css";

import RefereeLayout from "../RefereeLayout/RefereeLayout";
import TrainingClassRecordsList from "./TrainingClassRecordsList";

export default function RefereeTrainingClass({ uid }) {
    return <RefereeLayout uid={uid} children={<TrainingClassRecordsList uid={uid} />} />;
}
