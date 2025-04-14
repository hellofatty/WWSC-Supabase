/** @format */

// import "./AddEvent.css";

import { useState } from "react";
import { supabase } from "../../../../supabase/supabaseClient";
import { Button, Form } from "reactstrap";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import TrainingClassDropzoneSB from "../../../../components/Dropzone/TrainingClassDropzoneSB";
// import { useLocation, useNavigate } from "react-router-dom";

export default function UploadTrainingClassFilesSB({ record, toggle, uid, referee }) {
    const { t } = useTranslation("global");

    // console.log(record.id);
    // console.log(uid);
    const [loading, setLoading] = useState(false);
    const [uploadFiles, setUploadFiles] = useState([]);
    const [fileURL, setFileURL] = useState([]);

    const showToastMessage = (type, messageKey) => {
        type === 'success' 
            ? toast.success(t(messageKey))
            : toast.error(t(messageKey));
    };

    console.log(fileURL);

    const handleUpdate = async (e) => {
            e.preventDefault();
            setLoading(true);
    
            try {
                // Get existing file_urls
                const { data: existingData, error: fetchError } = await supabase
                    .from('games')
                    .select('file_urls')
                    .eq('id', record.id)
                    .single();
    
                if (fetchError) throw fetchError;
    
                // Combine existing and new URLs
                const updatedFileUrls = existingData.file_urls 
                    ? [...existingData.file_urls, ...fileURL]
                    : fileURL;
    
                // Update the game record
                const { error: updateError } = await supabase
                    .from('class')
                    .update({ 
                        file_urls: updatedFileUrls,
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', record.id);
    
                if (updateError) throw updateError;
    
                setFileURL([]);
                showToastMessage('success', 'general.update-record-success-message');
                // navigate(location.pathname);
                toggle();
            } catch (error) {
                console.error('Error updating files:', error);
                showToastMessage('error', 'general.update-record-error-message');
            } finally {
                setLoading(false);
            }
        };

    return (
        <div className="referee-home">
            <div className="container train-container">
                <div className="training">
                    <Form onSubmit={handleUpdate}>
                        <TrainingClassDropzoneSB
                            uploadFiles={uploadFiles}
                            setUploadFiles={setUploadFiles}
                            fileURL={fileURL}
                            setFileURL={setFileURL}
                            id={record.id}
                            uid={uid}
                            referee={referee}
                        />

                        <div style={{ margin: "auto", width: "150px" }}>
                        <Button 
                                color="primary" 
                                size="sm" 
                                style={{ width: "100%", marginTop: "30px" }}
                                disabled={loading || fileURL.length === 0}
                            >
                                {loading ? (
                                    <span>
                                        <i className="fas fa-spinner fa-spin me-2"></i>
                                        {t("common.updating")}
                                    </span>
                                ) : (
                                    <>3. {t("general.update-btn")}</>
                                )}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
