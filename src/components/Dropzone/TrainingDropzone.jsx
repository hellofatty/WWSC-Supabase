/** @format */
import "./Dropzone.css";
import { useState, useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Button from "@mui/material/Button";
import { projectStorage } from "../../firebase/config";
import { toast } from "react-toastify";
// import { v4 } from "uuid";
import moment from "moment";

const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
};

const focusedStyle = {
    borderColor: "#2196f3",
};

const acceptStyle = {
    borderColor: "#00e676",
};

const rejectStyle = {
    borderColor: "#ff1744",
};

function TrainingDropzone({ uploadFiles, setUploadFiles, id, fileURL, setFileURL, uid, referee }) {
    const { t, i18n } = useTranslation("global");

    // const lang = i18n.language;
    const [progress, setProgress] = useState({});
    const [loading, setLoading] = useState(false);

    const onDrop = useCallback(
        (acceptedFiles) => {
            setUploadFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        },
        [setUploadFiles]
    );

    // console.log(moment().format("MM-DD-YYYY"))
    let currenDate = moment().format("MM-DD-YYYY");

    const handleUpload = async () => {
        (await uploadFiles) &&
            uploadFiles.forEach((file) => {
                // upload files to storage
                const uploadPath = `records/training/${referee.refereeId}-${uid}/${id}/${file.name}_${currenDate}`;
                setLoading(true);

                let uploadTask = projectStorage.ref(uploadPath).put(file);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log("Upload is " + progress + "% done");
                        setProgress((prevProgress) => ({
                            ...prevProgress,
                            [file.name]: progress,
                        }));
                    },
                    (error) => {
                        console.error("Upload error:", error);
                    },
                    () => {
                        uploadTask.snapshot.ref.getDownloadURL().then((fileDownloadURL) => {
                            console.log("File available at", fileDownloadURL);
                            setFileURL((prevFileURL) => [...prevFileURL, fileDownloadURL]);
                        });
                    }
                );
            });
        console.log(fileURL);
        setLoading(false);
        toast.success(i18n.t("general.file-upload-sucess-message"));
        setUploadFiles([]);
    };

    const cancelSelectedFile = () => {
        setUploadFiles([]);
    };

    const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        multiple: true,
        // accept: {
        //     "image/jpeg": [],
        //     "image/png": [],
        // },
    });

    const selectedFiles = uploadFiles?.map((file, idx) => (
        <div key={idx} className="preview-container">
            <p style={{ color: "grey" }}>
                #{idx + 1} {file.name} ({file.size} bytes)
            </p>
            {/* <img
                // src={file.preview}
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={{ width: "80px", padding: "4px", border: "1px solid lightgrey", borderRadius: "3px" }}
            /> */}
            {/* <br />
            <small >
               
            </small> */}
        </div>
    ));

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isFocused ? focusedStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isFocused, isDragAccept, isDragReject]
    );

    return (
        <>
            {/* <p style={{ color: "black" }}>{t("admin.event-list.upload-files-title")}</p> */}
            <div className="container">
                <div {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    <CloudUploadIcon style={{ fontSize: "50px", marginBottom: "10px", cursor: "pointer" }} />
                    {isDragActive ? (
                        <p style={{ color: "grey" }}> {t("general.drop-files-tooltip")}</p>
                    ) : (
                        <p style={{ color: "grey" }}>{t("general.drag-drop-files-tooltip")}</p>
                    )}
                </div>
            </div>
            {selectedFiles}
            <div
                style={{
                    display: "flex",
                    gap: "12px",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                }}
            >
                <Button
                    variant="contained"
                    sx={{ fontSize: "0.75rem", textTransform: "capitalize" }}
                    disabled={loading || !uploadFiles}
                    onClick={handleUpload}
                    startIcon={<CloudUploadIcon style={{ color: "white" }} />}
                >
                    2. {t("referee.record.upload")}
                </Button>
                <Button
                    color="error"
                    sx={{ fontSize: "0.75rem", textTransform: "capitalize" }}
                    variant="outlined"
                    disabled={loading || !uploadFiles}
                    onClick={cancelSelectedFile}
                    startIcon={<CancelOutlinedIcon />}
                >
                    {t("referee.profile.cancel-btn")}
                </Button>
                <br></br>
                <div style={{marginTop:"12px"}}>
                    {Object.keys(progress).map((fileName) => (
                        <div key={fileName}>
                            {fileName}: {progress[fileName]}%
                        </div>
                    ))}
                    {/* {filesError && <div>{filesError}</div>} */}
                </div>
            </div>
        </>
    );
}

export default TrainingDropzone;
