/** @format */

// import "./AddEvent.css";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "../../../../supabase/supabaseClient";

export default function DownloadTrainingClassFilesSB({ record, toggle, uid, referee }) {
    const { t } = useTranslation("global");
    const [fileUrls, setFileUrls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        const fetchFileUrls = async () => {
            try {
                // Get file_urls from games table
                const { data, error } = await supabase
                    .from('class')
                    .select('file_urls')
                    .eq('id', record.id)
                    .single();

                if (error) throw error;

                // Map file URLs to names by extracting filename from URL
                const filesWithNames = data.file_urls?.map(url => {
                    const fileName = url.split('/').pop().split('_')[0]; // Get original filename
                    return { url, name: fileName };
                }) || [];

                setFileUrls(filesWithNames);
            } catch (err) {
                console.error('Error fetching files:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFileUrls();
    }, [record.id]);


    return (
        <>
           <div className="referee-home">
            <div className="container train-container">
                <div className="training">
                    {error && <p className="error-message">{t("general.error-message")}</p>}
                    {loading ? (
                        <p>{t("general.loading")}</p>
                    ) : (
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.8rem" }}>
                            {fileUrls.length === 0 ? (
                                <p>{t("general.no-files")}</p>
                            ) : (
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    {fileUrls.map((file, idx) => (
                                        <li key={idx} style={{ marginBottom: "8px" }}>
                                            <a 
                                                href={file.url}
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="file-download-link"
                                            >
                                                {idx + 1}. {file.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}
