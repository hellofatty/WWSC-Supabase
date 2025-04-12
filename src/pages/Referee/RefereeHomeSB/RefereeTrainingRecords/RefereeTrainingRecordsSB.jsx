/** @format */

// import "./RefereeTrainingRecords.css";

import RefereeLayout from "../RefereeLayout/RefereeLayout";
import TrainingRecordsList from "./TrainingRecordsList";

export default function RefereeTrainingRecords({ uid }) {
    return <RefereeLayout uid={uid} children={<TrainingRecordsList uid={uid} />} />;
}
