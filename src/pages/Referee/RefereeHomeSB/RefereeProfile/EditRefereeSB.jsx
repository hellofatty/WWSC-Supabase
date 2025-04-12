/** @format */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "../../../../supabase/supabaseClient";
import { useAuthContextSB } from "../../../../hooks/useAuthContextSB";
import { toast } from "react-toastify";
import { Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import CountryListEn from "../../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../../components/CountryList/CountryListCn";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";
import "./EditReferee.css";

export default function EditRefereeSB({ referee, toggle }) {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuthContextSB();

    const [orgs, setOrgs] = useState([]);

    const [photoURL, setPhotoURL] = useState(referee.avatar_url);
    const [name, setName] = useState(referee.name);
    const [sex, setSex] = useState(referee.sex);
    // const [org, setOrg] = useState(referee.org_id);
    const [org, setOrg] = useState(
        referee.org_id
            ? {
                  value: referee.org_id,
                  label: referee.org?.name,
                  labelTw: referee.org?.name_tw,
                  labelCn: referee.org?.name_cn,
              }
            : null
    );

    const [otherName, setOtherName] = useState(referee.other_name);
    const [title, setTitle] = useState(referee.title);
    // const [country, setCountry] = useState(referee.country_en);
    // const [countryTw, setCountryTw] = useState(referee.country_tw);
    // const [countryCn, setCountryCn] = useState(referee.country_cn);
    const [thumbnail, setThumbnail] = useState(null);
    const [fileURL, setFileURL] = useState("");
    const [thumbnailError, setThumbnailError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState(
        referee.country_en
            ? {
                  label: referee.country_en.label,
                  value: referee.country_en.value,
              }
            : null
    );
    const [countryTw, setCountryTw] = useState(
        referee.country_tw
            ? {
                  label: referee.country_tw.label,
                  value: referee.country_tw.value,
              }
            : null
    );
    const [countryCn, setCountryCn] = useState(
        referee.country_cn
            ? {
                  label: referee.country_cn.label,
                  value: referee.country_cn.value,
              }
            : null
    );

    // Fetch organizations
    useEffect(() => {
        const fetchOrganizations = async () => {
            const { data, error } = await supabase
                .from("organizations")
                .select()
                .order("name");

            if (error) {
                console.error("Error fetching organizations:", error);
                return;
            }

            setOrgs(
                data.map((org) => ({
                    value: org.id,
                    label: org.name,
                    labelTw: org.name_tw,
                    labelCn: org.name_cn,
                }))
            );
        };

        fetchOrganizations();
    }, []);

    const handleFileChange = (e) => {
        setThumbnail(null);
        let selected = e.target.files[0];
        setFileURL(URL.createObjectURL(selected));

        if (!selected) {
            setThumbnailError(t("code.signupform.setThumbnailError1"));
            return;
        }

        if (!selected.type.includes("image")) {
            setThumbnailError(t("code.signupform.setThumbnailError2"));
            return;
        }

        if (selected.size > 2000000) {
            setThumbnailError(t("code.signupform.setThumbnailError3"));
            return;
        }

        setThumbnailError(null);
        setThumbnail(selected);
    };

    const updateThumbnail = async () => {
        try {
            setLoading(true);

            if (!thumbnail) {
                throw new Error("No file selected");
            }

            // Upload file to Supabase Storage
            const fileExt = thumbnail.name.split(".").pop();
            const fileName = `${referee.referee_id}_${Date.now()}.${fileExt}`;
            const filePath = `${user.id}/${fileName}`;

            const { error: uploadError } = await supabase.storage.from("avatars").upload(filePath, thumbnail, {
                cacheControl: "3600",
                upsert: true,
            });

            if (uploadError) throw uploadError;

            // Get public URL
            const {
                data: { publicUrl },
            } = supabase.storage.from("avatars").getPublicUrl(filePath);

            setPhotoURL(publicUrl);

            // Update referee avatar_url
            const { error: updateError } = await supabase
                .from("referees")
                .update({ avatar_url: publicUrl })
                .eq("id", user.id);

            if (updateError) throw updateError;

            toast.success(t("referee.profile.update-success-message"));
        } catch (error) {
            console.error("Error updating avatar:", error);
            toast.error(t("referee.profile.update-error-message"));
        } finally {
            setLoading(false);
        }
    };
    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
        color: "white",
    });

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const { error } = await supabase
                .from("referees")
                .update({
                    name,
                    other_name: otherName,
                    sex,
                    org_id: org?.value, // This will update the foreign key
                    title,
                    country_en: country,
                    country_tw: countryTw,
                    country_cn: countryCn,
                    avatar_url: photoURL,
                    updated_at: new Date().toISOString(),
                })
                .eq("id", referee.id);

            if (error) throw error;

            toast.success(t("referee.profile.update-success-message"));
            navigate(location.pathname);
            toggle();
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error(t("referee.profile.update-error-message"));
        } finally {
            setLoading(false);
        }
    };

    const cancelSelectedFile = () => {
        setThumbnail(null);
    };

    console.log(org?.value);

    // const CustomStyles = {
    //     control: (provided) => ({
    //         ...provided,
    //         width: "300px",

    //         borderRadius: "5px",
    //         boxShadow: "none",
    //         textAlign: "left",
    //         fontSize: "0.9rem",
    //     }),
    //     option: (provided, state) => ({
    //         ...provided,
    //         color: state.isSelected ? "white" : "teal",
    //         backgroundColor: state.isSelected ? "teal" : "white",
    //         fontSize: "0.9rem",
    //     }),
    // };

    return (
        <div className="modal-form-edit-profile-container">
            <div className="upLoadPhoto-container">
                <span className="photo-avatar">
                    <img src={referee.avatar_url} alt="" />
                </span>
                <div className="upLoadPhotoBtn-container">
                    <Button
                        sx={{ width: "100%", fontSize: "0.75rem", textTransform: "capitalize" }}
                        component="label"
                        startIcon={<PhotoSizeSelectActualOutlinedIcon style={{ color: "white" }} />}
                        variant="contained"
                        tabIndex={-1}
                    >
                        1. {t("referee.profile.select-new-photo-btn")}
                        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                    </Button>
                    {thumbnail && (
                        <>
                            <span style={{ fontSize: "0.7rem", textAlign: "center" }}>{thumbnail.name}</span>
                            <span className="photo-avatar" style={{ margin: "auto" }}>
                                <img src={fileURL} alt="" />
                            </span>
                        </>
                    )}

                    <div style={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" }}>
                        <Button
                            variant="contained"
                            sx={{ fontSize: "0.75rem", textTransform: "capitalize" }}
                            disabled={loading || !thumbnail}
                            onClick={updateThumbnail}
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
                        </Button>{" "}
                        {thumbnailError && <div>{thumbnailError}</div>}
                    </div>
                </div>
            </div>
            <Form onSubmit={handleUpdate}>
                <div className="modal-form-input-container">
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="refereeName" sm={2} size="sm" className="modal-form-input-label">
                                    {t("referee.profile.name")}*:
                                </Label>

                                <Input
                                    required
                                    id="refereeName"
                                    name="name"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    className="modal-form-input-text"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="refereeOtherName" sm={2} size="sm" className="modal-form-input-label">
                                    {t("referee.profile.otherName")}:
                                </Label>

                                <Input
                                    id="refereeOtherName"
                                    name="otherName"
                                    type="text"
                                    onChange={(e) => setOtherName(e.target.value)}
                                    value={otherName}
                                    className="modal-form-input-text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="refereeSex" sm={2} size="sm" className="modal-form-input-label">
                                    {t("referee.profile.gender")}*:
                                </Label>

                                <Input
                                    id="refereeSex"
                                    name="sex"
                                    type="select"
                                    value={sex}
                                    onChange={(e) => setSex(e.target.value)}
                                    className="modal-form-input-text"
                                >
                                    <option value="">{t("referee.profile.gender")}</option>
                                    <option value="M">{t("referee.profile.male")}</option>
                                    <option value="F">{t("referee.profile.female")}</option>
                                    {/* <option value="O">{t("referee.profile.othersex")}</option> */}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="refereeTitle" sm={2} size="sm" className="modal-form-input-label">
                                    {t("referee.profile.position")}
                                </Label>

                                <Input
                                    id="refereeTitle"
                                    name="title"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="modal-form-input-text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            {" "}
                            <FormGroup>
                                <Label htmlFor="organization" sm={2} size="sm" className="modal-form-input-label">
                                    {t("referee.profile.org")}:
                                </Label>

                                <Select
                                    placeholder={t("referee.profile.select-org")}
                                    options={orgs}
                                    getOptionLabel={(option) =>
                                        lang === "zh-TW"
                                            ? option.labelTw
                                            : lang === "zh-CN"
                                            ? option.labelCn
                                            : option.label
                                    }
                                    onChange={(selectedOption) => setOrg(selectedOption)}
                                    className="modal-form-input-text"
                                    // value={org}
                                    value={orgs.filter(function (option) {
                                        return option?.value === org?.value;
                                    })}
                                    isSearchable={true}
                                />

                            
                            </FormGroup>
                        </Col>{" "}
                        <Col md={6}>
                            <FormGroup>
                                <Label size="sm" className="modal-form-input-label">
                                    {t("referee.profile.country")}*:
                                </Label>
                                {lang === "en" && (
                                    <div className="country-select-input">
                                        <CountryListEn setLocation={setCountry} location={country} />
                                    </div>
                                )}
                                {lang === "zh-TW" && (
                                    <div className="country-select-input">
                                        <CountryListTw setLocation={setCountryTw} location={countryTw} />
                                    </div>
                                )}
                                {lang === "zh-CN" && (
                                    <div className="country-select-input">
                                        <CountryListCn setLocation={setCountryCn} location={countryCn} />
                                    </div>
                                )}
                            </FormGroup>
                        </Col>
                    </Row>
                </div>

                <div style={{ width: "250px" }} className="modal-form-action-buttons">
                    <Button
                        type="submit"
                        sx={{ textTransform: "capitalize" }}
                        variant="contained"
                        size="sm"
                        style={{ width: "100%" }}
                        startIcon={<HowToRegOutlinedIcon style={{ color: "white" }} />}
                    >
                        {t("referee.profile.update-btn")}
                    </Button>
                </div>
            </Form>
        </div>
    );
}
