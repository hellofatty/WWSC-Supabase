/** @format */

import "./AddEvent.css";

import { useState } from "react";

import { Button, Form } from "reactstrap";

import { toast } from "react-toastify";

import { useFirestore } from "../../../hooks/useFirestore";

import { useTranslation } from "react-i18next";
import EventDropzone from "../../../components/Dropzone/EventDropzone";


export default function UploadFiles({ event, toggle }) {
    const { t, i18n } = useTranslation("global");
    // const lang = i18n.language;

    console.log(event.id);

    const [uploadFiles, setUploadFiles] = useState([]);
    const [photoURL, setPhotoURL] = useState([]);

    // const [org, setOrg] = useState(event.org.label);

    const { updateDocument, response } = useFirestore(`events`);

    const showToastMessage = () => {
        toast.success(i18n.t("admin.event-list.update-success-message"));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        await updateDocument(event.id, {
            photoURLs: event.photoURLs?event.photoURLs.concat(photoURL):photoURL
        });

        if (!response.error) {
            setPhotoURL([])
          }
        showToastMessage();
        toggle();
    };


    return (
        <div className="referee-home">
            <div className="container train-container">
                <div className="training">
                    <Form onSubmit={handleUpdate}>
                        <EventDropzone
                            uploadFiles={uploadFiles}
                            setUploadFiles={setUploadFiles}
                            fileURL={photoURL}
                            setFileURL={setPhotoURL}
                            id={event.id}
                        />

                        <div style={{ margin: "auto", width: "150px" }}>
                            <Button color="primary" size="sm" style={{ width: "100%", marginTop: "30px" }}>
                                {t("referee.class.update")}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
