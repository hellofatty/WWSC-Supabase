/** @format */

import { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import { supabase } from "../../supabase/supabaseClient";
import { toast } from "react-toastify";
// import moment from "moment";
import { CloudUpload as CloudUploadIcon, CancelOutlined as CancelOutlinedIcon } from "@mui/icons-material";
import { Button } from "@mui/material";
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

export default function SingleDropzoneSB({ files, setFiles, id, fileURL, setFileURL }) {
    const { t } = useTranslation("global");
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);

    const onDrop = useCallback(
        (acceptedFiles) => {
            setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        },
        [setFiles]
    );

    const thumbnail = files[0];
    console.log(thumbnail?.name);

    // const thumbnail = files && files[0];
    // console.log(thumbnail?.name);

    // let currenDate = moment().format("MM-DD-YYYY");

    const handleUpload = async () => {
        if (!thumbnail) return;

        // const file = files[0];

        if (thumbnail.size > 2000000) {
            toast.error(t("admin.org-list.file-too-large"));
            return;
        }
        setLoading(true);

        try {
            // 1. Upload file to Supabase storage
            const fileExt = thumbnail.name.split(".").pop();
            const filePath = `${id}/logo.${fileExt}`;

            const { error: uploadError } = await supabase.storage.from("org_logos")
                .upload(filePath, thumbnail, {
                cacheControl: "3600",
                upsert: true,
                onUploadProgress: (progress) => {
                    const percent = (progress.loaded / progress.total) * 100;
                    setProgress(percent);
                },
            });

            if (uploadError) throw uploadError;

            // 2. Get public URL
            const { data: urlData } = supabase.storage.from("org_logos").getPublicUrl(filePath);

            if (!urlData?.publicUrl) {
                throw new Error("Failed to get public URL");
            }

            // // 3. Update organization record with logo URL
            // const { error: updateError } = await supabase
            //     .from('organizations')
            //     .update({ logo_url: urlData.publicUrl })
            //     .eq('id', id);

            // if (updateError) throw updateError;

            setFileURL(urlData.publicUrl);
            console.log(fileURL);
            toast.success(t("admin.org-list.upload-success"));
            setFiles([]);
        } catch (error) {
            console.error("Upload error:", error);
            toast.error(t("admin.org-list.upload-error"));
        } finally {
            setLoading(false);
            setProgress(0);
        }
    };

    const cancelSelectedFile = () => {
        setFiles([]);
        setProgress(0);
    };

    const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        // multiple: false,
        maxFiles: 1,
        accept: {
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
            maxSize: 2000000, // 2MB
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
                    startIcon={<CloudUploadIcon />}
                >
                    {loading ? `${progress.toFixed(0)}%` : t("referee.profile.upload-new-photo-btn")}
                </Button>
                <Button
                    color="error"
                    variant="outlined"
                    sx={{ fontSize: "0.75rem", textTransform: "capitalize" }}
                    disabled={loading || !thumbnail}
                    onClick={cancelSelectedFile}
                    startIcon={<CancelOutlinedIcon />}
                >
                    {t("referee.profile.cancel-btn")}
                </Button>
            </div>
        </>
    );
}
