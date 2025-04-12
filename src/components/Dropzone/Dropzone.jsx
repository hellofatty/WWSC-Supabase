/** @format */
import "./Dropzone.css";
import { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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

function Dropzone({ files, setFiles }) {
    const { t } = useTranslation("global");
    // const { t, i18n } = useTranslation("global");
    // const lang = i18n.language;

    const onDrop = useCallback(
        (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
        [setFiles]
    );
 

    const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [],
            "image/png": [],
        },
    });

    const selectedFiles = files?.map((file, idx) => (
        <div key={idx} className="preview-container">
            <p>#{idx + 1}</p>
            <img
                src={file.preview}
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
            <p style={{ color: "black" }}>{t("admin.event-list.upload-files-title")}</p>
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
            {selectedFiles}
        </>
    );
}

export default Dropzone;
