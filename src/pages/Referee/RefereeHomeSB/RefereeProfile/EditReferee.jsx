/** @format */

import "./EditReferee.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useCollection } from "../../../../hooks/useCollection";
import { toast } from "react-toastify";
import { Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import { useFirestore } from "../../../../hooks/useFirestore";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { styled } from "@mui/material/styles";
// import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { projectStorage } from "../../../../firebase/config";
import Button from "@mui/material/Button";
import { v4 } from "uuid";
// import CountryList from "../../../../components/CountryList/CountryList";
import CountryListEn from "../../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../../components/CountryList/CountryListCn";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditReferee({ referee, toggle }) {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;
      const navigate = useNavigate();
        const location = useLocation();

    const { documents: orgList } = useCollection("organizations");
    // console.log(orgList);

    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        if (orgList) {
            setOrganizations(
                orgList.map((org) => {
                    return {
                        value: { ...org, id: org.id },
                        label: org.name,
                    };
                })
            );
        }
    }, [orgList]);

    const [photoURL, setPhotoURL] = useState(referee.photoURL);
    const [name, setName] = useState(referee.name);
    const [sex, setSex] = useState(referee.sex);
    const [org, setOrg] = useState(referee.org);
    const [otherName, setOtherName] = useState(referee.otherName);
    const [title, setTitle] = useState(referee.title);
    const [country, setCountry] = useState(referee.country);
    const [countryTw, setCountryTw] = useState(referee.countryTw);
    const [countryCn, setCountryCn] = useState(referee.countryCn);

    const { user } = useAuthContext();
    const { updateDocument, response } = useFirestore("users");

    const showToastMessage = () => {
        toast.success(i18n.t("referee.profile.update-success-message"));
    };

    const [thumbnail, setThumbnail] = useState(null);
    const [fileURL, setFileURL] = useState("");
    const [thumbnailError, setThumbnailError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Create handleFileChange function
    const handleFileChange = (e) => {
        setThumbnail(null);
        let selected = e.target.files[0];
        setFileURL(URL.createObjectURL(selected));
        // console.log(selected.name);

        if (!selected) {
            setThumbnailError(t("code.signupform.setThumbnailError1"));
            // setThumbnailError("Please select a file");
            return;
        }

        if (!selected.type.includes("image")) {
            setThumbnailError(t("code.signupform.setThumbnailError2"));
            // setThumbnailError("Selected file must be an image");
            return;
        }

        if (!selected.size > 100000) {
            setThumbnailError(t("code.signupform.setThumbnailError3"));
            // setThumbnailError("Image file size must be less than 100kb");

            return;
        }

        setThumbnailError(null);
        setThumbnail(selected);
        console.log(t("code.signupform.thumbnaiUpdated"));
        // console.log(selected.name);
        // console.log(thumbnail.name);
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
    const updateThumbnail = async () => {
        // upload user thumbnail
        const uploadPath = `thumbnails/${user.uid}/${thumbnail.name}_${v4()}_${Date.now()}}`;
        setLoading(true);
        const uploadTask = await projectStorage.ref(uploadPath).put(thumbnail);
        const imgURL = await uploadTask.ref.getDownloadURL();
        await user.updateProfile({ photoURL: imgURL });
        setLoading(false);
        toast.success(i18n.t("referee.profile.update-success-message"));
       ;
        setPhotoURL(imgURL);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        updateDocument(referee.id, {
            name,
            otherName,
            sex,
            org,
            title,
            country,
            countryTw,
            countryCn,
            photoURL: photoURL,
        });
        console.log("response", response);
        // updateThumbnail();
        showToastMessage();
        navigate(location.pathname); // Navigate to the current path
        toggle();
    };

    const cancelSelectedFile = () => {
        setThumbnail(null);
    };

    console.log(user.uid);

    const CustomStyles = {
        control: (provided) => ({
            ...provided,
            width: "300px",

            borderRadius: "5px",
            boxShadow: "none",
            textAlign: "left",
            fontSize: "0.9rem",
        }),
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? "white" : "teal",
            backgroundColor: state.isSelected ? "teal" : "white",
            fontSize: "0.9rem",
        }),
    };

    return (
        <div className="modal-form-edit-profile-container">
            <div className="upLoadPhoto-container">
                <span className="photo-avatar">
                    <img src={user.photoURL} alt="" />
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

                                {lang === "en" && (
                                    <Select
                                        options={organizations}
                                        getOptionLabel={(option) => `${option.label}`}
                                        onChange={(newValue) => setOrg(newValue)}
                                        styles={CustomStyles}
                                        value={organizations.filter(function (option) {
                                            return option?.label === org?.label;
                                        })}
                                    />
                                )}
                                {lang === "zh-TW" && (
                                    <Select
                                        options={organizations}
                                        getOptionLabel={(option) => `${option.value?.nameTw}`}
                                        onChange={(newValue) => setOrg(newValue)}
                                        styles={CustomStyles}
                                        value={organizations.filter(function (option) {
                                            return option.value?.nameTw === org.value?.nameTw;
                                        })}
                                    />
                                )}
                                {lang === "zh-CN" && (
                                    <Select
                                        options={organizations}
                                        getOptionLabel={(option) => `${option.value?.nameCn}`}
                                        onChange={(newValue) => setOrg(newValue)}
                                        styles={CustomStyles}
                                        value={organizations.filter(function (option) {
                                            return option.value?.nameCn === org.value?.nameCn;
                                        })}
                                    />
                                )}
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
