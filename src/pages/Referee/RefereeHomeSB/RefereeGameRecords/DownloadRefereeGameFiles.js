/** @format */

// import "./AddEvent.css";

// import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { projectStorage } from "../../../../firebase/config";

export default function DownloadRefereeGameFiles({ record, toggle, uid, referee }) {
    // const { t} = useTranslation("global");
    // const lang = i18n.language;

    const [downloadFiles, setDownloadFiles] = useState([]);
    // const [downloadFileURLs, setDownloadFileURLs] = useState([]);

    useEffect(() => {
        const storageRef = projectStorage.ref();
        const listRef = storageRef.child(`records/game/${referee.refereeId}-${uid}/${record.id}/`);

        listRef
            .listAll()
            .then((res) => {
                const fileNames = res.items.map((itemRef) => itemRef.name);

                setDownloadFiles(fileNames);
            })

            .catch((error) => {
                console.error("Error listing files:", error);
            });
    }, [uid, record.id, referee.refereeId]);

    const arrayFiles = downloadFiles.map((fileName, index) => {
        return [fileName, record.fileURLs[index]];
    });

    console.log("arrayFiles:", arrayFiles);

    return (
        <>
            <div className="referee-home">
                <div className="container train-container">
                    <div className="training">
                        <div style={{display:"flex", flexWrap:"wrap", fontSize:"0.8rem"}}>
                            {arrayFiles &&
                                arrayFiles.map((file, idx) => (
                                    <ul>
                                        <li key={idx}>
                                            <a href={file[1]} target="_blank" rel="noreferrer">
                                                {idx + 1}. {file[0]}
                                            </a>
                                        </li>
                                    </ul>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
