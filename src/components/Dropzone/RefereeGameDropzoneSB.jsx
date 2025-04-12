/** @format */
import { useState, useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import { supabase } from "../../supabase/supabaseClient";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import moment from "moment";
import "./Dropzone.css";

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

export default function RefereeGameDropzoneSB({ uploadFiles, setUploadFiles, id, fileURL, setFileURL, uid, referee }) {
    const { t } = useTranslation("global");
    const [progress, setProgress] = useState({});
    const [loading, setLoading] = useState(false);

    const onDrop = useCallback(
        (acceptedFiles) => {
            setUploadFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        },
        [setUploadFiles]
    );

    const currenDate = moment().format("MM-DD-YYYY");

    // const uploadPath = `records/game/${referee.refereeId}-${uid}/${id}/${file.name}_${currenDate}`;

    const handleUpload = async () => {
        if (!uploadFiles?.length) return;

        setLoading(true);
        const uploadPromises = uploadFiles.map(async (file) => {
            try {
                // Create file path
                const filePath = `${uid}/${id}/${file.name}_${currenDate}`;

                // Create upload options with progress callback
                const options = {
                    onUploadProgress: (event) => {
                        if (event.totalBytes) {
                            const percent = (event.bytesUploaded / event.totalBytes) * 100;
                            setProgress((prev) => ({
                                ...prev,
                                [file.name]: percent,
                            }));
                        }
                    },
                };

                // Upload file
                 // Upload file with progress tracking
                 const { error: uploadError } = await supabase.storage
                 .from("games")
                 .upload(filePath, file, options);

                if (uploadError) throw uploadError;

                // Get public URL
                const {
                    data: { publicUrl },
                    error: urlError,
                } = await supabase.storage.from("games").getPublicUrl(filePath);

                if (urlError) throw urlError;

                 // Set final progress to 100%
                 setProgress(prev => ({
                    ...prev,
                    [file.name]: 100
                }));

                return publicUrl;
            } catch (error) {
                console.error(`Error uploading ${file.name}:`, error);
                toast.error(t("general.file-upload-error-message"));

                  // Clear progress on error
                  setProgress(prev => {
                    const newProgress = { ...prev };
                    delete newProgress[file.name];
                    return newProgress;
                  });
                
                return null;
            }
        });

        try {
            const urls = await Promise.all(uploadPromises);
            const validUrls = urls.filter((url) => url !== null);

            if (validUrls.length) {
                setFileURL((prev) => [...prev, ...validUrls]);
                toast.success(t("general.file-upload-success-message"));
            }

            setUploadFiles([]);
        } catch (error) {
            console.error("Upload error:", error);
            toast.error(t("general.file-upload-error-message"));
        } finally {
            setLoading(false);
        }
    };

    const cancelSelectedFile = () => {
        setUploadFiles([]);
        setProgress({});
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
        <div className="upload-files-list" key={idx}>
            <span style={{ color: "grey" }}>
                #{idx + 1} {file.name} ({(file.size / 1000000).toFixed(2)} MB)
            </span>
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
            <div className="preview-container">{selectedFiles}</div>
            <div
                style={{
                    display: "flex",
                    gap: "12px",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                    width: "100%",
                }}
            >
                <Button
                    variant="contained"
                    sx={{ fontSize: "0.75rem", textTransform: "capitalize" }}
                    disabled={loading || !uploadFiles?.length}
                    onClick={handleUpload}
                    startIcon={<CloudUploadIcon style={{ color: "white" }} />}
                >
                    {loading ? (
                        <span>
                            <i className="fas fa-spinner fa-spin me-2"></i>
                            {t("common.uploading")}
                        </span>
                    ) : (
                        <>2. {t("referee.record.upload")}</>
                    )}
                </Button>
                <Button
                    color="error"
                    sx={{ fontSize: "0.75rem", textTransform: "capitalize" }}
                    variant="outlined"
                    disabled={loading || !uploadFiles?.length}
                    onClick={cancelSelectedFile}
                    startIcon={<CancelOutlinedIcon />}
                >
                    {t("referee.profile.cancel-btn")}
                </Button>{" "}
            </div>
            <br></br>
            <div className="progress-container">
                {Object.entries(progress).map(([fileName, percent]) => (
                    <div key={fileName} className="progress-item">
                        <div className="progress-info">
                            <span className="filename">{fileName}:</span>
                            <span className="percent">{percent.toFixed(0)}%</span>
                        </div>
                        <div className="progress-bar">
                            <div 
                                className="progress-fill"
                                style={{ width: `${percent}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
