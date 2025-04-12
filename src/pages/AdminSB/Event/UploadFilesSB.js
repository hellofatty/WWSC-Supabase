/** @format */

import "./AddEventSB.css";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Button, Form } from "reactstrap";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { supabase } from "../../../supabase/supabaseClient";
import EventDropzoneSB from "../../../components/Dropzone/EventDropzoneSB";

export default function UploadFilesSB({ event, toggle }) {
    const navigate = useNavigate();
    const { t } = useTranslation("global");
    const [loading, setLoading] = useState(false);
    const [uploadFiles, setUploadFiles] = useState([]);
    const [photoURL, setPhotoURL] = useState([]);

     // Add Supabase realtime subscription
     useEffect(() => {
        const subscription = supabase
            .channel('events_changes')
            .on('postgres_changes', 
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'events',
                    filter: `id=eq.${event.id}`
                },
                (payload) => {
                    // Refresh the page when this event is updated
                    window.location.reload();
                }
            )
            .subscribe();

        // Cleanup subscription
        return () => {
            subscription.unsubscribe();
        };
    }, [event.id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Get existing photo URLs or initialize empty array
            const existingUrls = event.photo_urls || [];
            const newUrls = [...existingUrls, ...photoURL];

            // Update event with new photo URLs
            const { error: updateError } = await supabase
                .from('events')
                .update({ 
                    photo_urls: newUrls,
                    updated_at: new Date().toISOString()
                })
                .eq('id', event.id);

            if (updateError) throw updateError;

            toast.success(t("admin.event-list.update-success"));
            setPhotoURL([]);
            toggle();
            
             // Option 1: Soft refresh using React Router
             navigate(0);
            
             // Option 2: Use window.location.reload() for hard refresh
             // window.location.reload();
        } catch (error) {
            console.error("Error updating event photos:", error);
            toast.error(t("admin.event-list.update-error"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="referee-home">
            <div className="container train-container">
                <div className="training">
                    <Form onSubmit={handleUpdate}>
                        <EventDropzoneSB
                            uploadFiles={uploadFiles}
                            setUploadFiles={setUploadFiles}
                            fileURL={photoURL}
                            setFileURL={setPhotoURL}
                            id={event.id}
                        />

                        <div style={{ margin: "auto", width: "150px" }}>
                            <Button 
                                color="primary" 
                                size="sm" 
                                style={{ width: "100%", marginTop: "30px" }}
                                disabled={loading}
                            >
                                {loading ? t("general.loading") : t("referee.class.update")}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}


