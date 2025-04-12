/** @format */

// import "./AddEvent.css";

import { useState } from "react";

import { Button, Form } from "reactstrap";

import { toast } from "react-toastify";

import { useFirestore } from "../../../../hooks/useFirestore";


// import { arrayUnion } from "firebase/firestore";

import { useTranslation } from "react-i18next";
import TrainingClassDropzone from "../../../../components/Dropzone/TrainingClassDropzone";
import { useLocation, useNavigate } from "react-router-dom";


export default function UploadTrainingClassFiles({ record, toggle, uid, referee }) {
    const { t, i18n } = useTranslation("global");
    // const lang = i18n.language;
     const navigate = useNavigate();
              const location = useLocation();

    // console.log(record.id);
    // console.log(uid);

    const [uploadFiles, setUploadFiles] = useState([]);
    const [fileURL, setFileURL] = useState([]);

    // const [org, setOrg] = useState(event.org.label);

    const { updateDocument, response } = useFirestore(`users/${uid}/class`);

    const showToastMessage = () => {
        toast.success(i18n.t("general.update-record-success-message"));
    };

    console.log(fileURL);

    const handleUpdate = async (e) => {
        e.preventDefault();

        await updateDocument(record.id, {
            fileURLs: record.fileURLs?record.fileURLs.concat(fileURL):fileURL
        });

        if (!response.error) {
            setFileURL([])
          }
        showToastMessage();
        navigate(location.pathname); // Navigate to the current path
        toggle();
    };


    return (
        <div className="referee-home">
            <div className="container train-container">
                <div className="training">
                    <Form onSubmit={handleUpdate}>
                        <TrainingClassDropzone
                            uploadFiles={uploadFiles}
                            setUploadFiles={setUploadFiles}
                            fileURL={fileURL}
                            setFileURL={setFileURL}
                            id={record.id}
                            uid={uid}
                            referee={referee}
                        />

                        <div style={{ margin: "auto", width: "150px" }}>
                            <Button color="primary" size="sm" style={{ width: "100%", marginTop: "30px" }}>
                                3. {t("general.update-btn")}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
