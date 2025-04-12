/** @format */
import "./Dropzone.css";
import { useState, useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import { supabase } from "../../supabase/supabaseClient";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
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

export default function EventDropzoneSB({ uploadFiles, setUploadFiles, id, fileURL, setFileURL }) {
    const { t } = useTranslation("global");

    // const lang = i18n.language;
    const [progress, setProgress] = useState({});
    const [loading, setLoading] = useState(false);

    const onDrop = useCallback(
        (acceptedFiles) => {
            setUploadFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        },
        [setUploadFiles]
    );

    // console.log(moment().format("MM-DD-YYYY"));
    // let currenDate = moment().format("MM-DD-YYYY");

    const handleUpload = async () => {
        if (!uploadFiles?.length) return;
        setLoading(true);

        try {
            const uploadPromises = uploadFiles.map(async (file) => {
                const fileExt = file.name.split('.').pop();
                const fileName = `${file.name.split('.')[0]}_${moment().format("YYYYMMDD_HHmmss")}.${fileExt}`;
                const filePath = `${id}/${fileName}`;

                // Upload file
                const { error: uploadError} = await supabase.storage
                    .from('events')
                    .upload(filePath, file, {
                        cacheControl: '3600',
                        upsert: false,
                        onUploadProgress: (progress) => {
                            const percent = (progress.loaded / progress.total) * 100;
                            setProgress(prev => ({
                                ...prev,
                                [file.name]: percent
                            }));
                        }
                    });

                if (uploadError) throw uploadError;

                // Get public URL
                const { data: { publicUrl } } = supabase.storage
                    .from('events')
                    .getPublicUrl(filePath);

                return publicUrl;
            });

            const urls = await Promise.all(uploadPromises);
            setFileURL(prev => [...prev, ...urls]);
            setUploadFiles([]);
            toast.success(t("general.images-upload-success"));
        } catch (error) {
            console.error('Error uploading files:', error);
            toast.error(t("general.images-upload-error"));
        } finally {
            setLoading(false);
        }
    };

    const cancelSelectedFile = () => {
        setUploadFiles([]);
    };

    const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        multiple: true,
        accept: {
            "image/jpeg": [],
            "image/png": [],
        },
    });

    const selectedFiles = uploadFiles?.map((file, idx) => (
        <div key={idx} className="upload-files-list">
            <span style={{ marginRight: "6px" }}>#{idx + 1}</span>
            <div>
                <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    style={{ width: "100px", padding: "4px", border: "1px solid lightgrey", borderRadius: "3px" }}
                />
            </div>
            <br />
            <small style={{ color: "grey" }}>
                {file.name} ({(file.size / 1000000).toFixed(1)} MB)
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
            {/* <p style={{ color: "black" }}>{t("admin.event-list.upload-files-title")}</p> */}
            <div className="container">
                <div {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    <CloudUploadIcon style={{ fontSize: "50px", marginBottom: "10px", cursor: "pointer" }} />
                    {isDragActive ? (
                        <p style={{ color: "grey" }}> {t("admin.event-list.drop-files-tooltip")}</p>
                    ) : (
                        <p style={{ color: "grey" }}>{t("admin.event-list.drag-drop-files-tooltip")}</p>
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
                }}
            >
                <Button
                    variant="contained"
                    sx={{ fontSize: "0.75rem", textTransform: "capitalize" }}
                    disabled={loading || !uploadFiles}
                    onClick={handleUpload}
                    startIcon={<CloudUploadIcon style={{ color: "white" }} />}
                >
                    2. {t("referee.profile.upload-new-photo-btn")}
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
            </div>
            <br></br>
            <div className="preview-container">
                {Object.keys(progress).map((fileName) => (
                    <div key={fileName}>
                        {fileName}: {progress[fileName].toFixed(2)}%
                    </div>
                ))}
            </div>
            {/* {filesError && <div>{filesError}</div>} */}
        </>
    );
}


