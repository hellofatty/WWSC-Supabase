/** @format */
import "./Dropzone.css";
import { useCallback, useMemo } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { projectStorage } from "../../firebase/config";
import { v4 } from "uuid";
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

function SingleDropzone({ files, setFiles, id, fileURL, setFileURL }) {
    const { t, i18n } = useTranslation("global");

    // const [filesError, setfileError] = useState(null);
    const [progress, setProgress] = useState({});
    const [loading, setLoading] = useState(false);

    const onDrop = useCallback(
        (acceptedFiles) => {
            setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        },
        [setFiles]
    );

    // const onDrop = useCallback(
    //     (acceptedFiles) => {
    //         setFiles(
    //             acceptedFiles.map((file) =>
    //                 Object.assign(file, {
    //                     preview: URL.createObjectURL(file),
    //                 })
    //             )
    //         );
    //     },
    //     [setFiles]
    // );

    const thumbnail = files && files[0];
    console.log(thumbnail?.name);

    let currenDate = moment().format("MM-DD-YYYY");

    const handleUpload = async () => {
        // upload files to storage
        const uploadPath = `orgs/${id}/${thumbnail.name}_${v4()}_${currenDate}}`;
        setLoading(true);
        let uploadTask = projectStorage.ref(uploadPath).put(thumbnail);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                setProgress((prevProgress) => ({
                    ...prevProgress,
                    [thumbnail.name]: progress,
                }));
            },
            (error) => {
                console.error("Upload error:", error);
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((imgURL) => {
                    console.log("File available at", imgURL);
                    setFileURL(imgURL);
                });
            }
        );

        console.log(fileURL);
        setLoading(false);
        toast.success(i18n.t("referee.profile.upload-sucess-message"));
        setFiles([]);
    };

    const cancelSelectedFile = () => {
        setFiles([]);
    };

    const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        // multiple: false,
        maxFiles: 1,
        accept: {
            "image/jpeg": [],
            "image/png": [],
        },
    });

    const selectedFiles = files?.map((file, idx) => (
        <div key={idx} className="preview-container">
            <p>#{idx + 1}</p>
            <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={{ width: "150px", padding: "6px", border: "1px solid lightgrey", borderRadius: "5px" }}
            />
            <br />
            <small style={{ color: "grey" }}>
                {file.name} ({file.size} bytes)
            </small>
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
            <p style={{ color: "black" }}>{t("admin.event-list.upload-file-title")}</p>
            <div className="container">
                <div {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    <CloudUploadIcon style={{ fontSize: "50px", marginBottom: "10px", cursor: "pointer" }} />
                    {isDragActive ? (
                        <p style={{ color: "grey" }}> {t("admin.event-list.drop-file-tooltip")}</p>
                    ) : (
                        <p style={{ color: "grey" }}>{t("admin.event-list.drag-drop-file-tooltip")}</p>
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
                    disabled={loading || !thumbnail}
                    onClick={handleUpload}
                    startIcon={<CloudUploadIcon style={{ color: "white" }} />}
                >
                    2. {t("referee.profile.upload-new-photo-btn")}
                </Button>{" "}
                <Button
                    color="error"
                    sx={{ fontSize: "0.75rem", textTransform: "capitalize" }}
                    variant="outlined"
                    disabled={loading || !thumbnail}
                    onClick={cancelSelectedFile}
                    startIcon={<CancelOutlinedIcon />}
                >
                    {t("referee.profile.cancel-btn")}
                </Button>
                {Object.keys(progress).map((fileName) => (
                    <div key={fileName}>
                        {fileName}: {progress[fileName]}%
                    </div>
                ))}
                {/* {filesError && <div>{filesError}</div>} */}
            </div>
        </>
    );
}

export default SingleDropzone;
