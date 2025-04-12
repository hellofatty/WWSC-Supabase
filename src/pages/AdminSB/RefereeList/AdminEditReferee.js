/** @format */

import "./AdminEditReferee.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useCollection } from "../../../hooks/useCollection";
// import { useDocument } from "../../../hooks/useDocument";
// import { Timestamp } from "firebase/firestore";
import { Button, Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
// import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
// import { styled } from "@mui/material/styles";
import { toast } from "react-toastify";
// import moment from "moment";
// import { v4 } from "uuid";
import { useFirestore } from "../../../hooks/useFirestore";
// import { projectStorage } from "../../../firebase/config";
import CountryListEn from "../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../components/CountryList/CountryListCn";
import Select from "react-select";

export default function AdminEditReferee({ referee, toggle }) {
    const { t, i18n } = useTranslation("global");
    // const { i18n } = useTranslation();
    // const dayjs = require("dayjs");

    const lang = i18n.language;

    // const { document: user, error } = useDocument("users", referee.id);

   

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

    // const [photoURL, setPhotoURL] = useState(referee.photoURL);

    const [name, setName] = useState(referee.name);
    const [sex, setSex] = useState(referee.sex);
    const [org, setOrg] = useState(referee.org);
    const [otherName, setOtherName] = useState(referee.otherName);
    const [displayName, setDisplayName] = useState(referee.displayName);
    const [grade, setGrade] = useState(referee.grade);
    const [refereeId, setRefereeID] = useState(referee.refereeId);
    const [status, setStatus] = useState(referee.status);
    const [expiryDate, setExpiryDate] = useState(referee.expiryDate);
    const [level, setLevel] = useState(referee.level);
    const [role, setRole] = useState(referee.role);

    // const [organization, setOrganization] = useState(referee.organization);
    const [title, setTitle] = useState(referee.title);
    const [email, setEmail] = useState(referee.email);
    const [phone, setPhone] = useState(referee.phone);

    const [address, setAddress] = useState(referee.address);
    const [stateProvince, setStateProvince] = useState(referee.stateProv);
    const [city, setCity] = useState(referee.city);
    const [zipcode, setZipcode] = useState(referee.zipcode);
    const [country, setCountry] = useState(referee.country);
    const [countryTw, setCountryTw] = useState(referee.countryTw);
    const [countryCn, setCountryCn] = useState(referee.countryCn);

    const { updateDocument, response } = useFirestore("users");

    const showToastMessage = () => {
        toast.success(t("referee.profile.update-success-message"));
    };

    // const [thumbnail, setThumbnail] = useState(null);
    // const [fileURL, setFileURL] = useState("");
    // const [thumbnailError, setThumbnailError] = useState(null);
    // const [loading, setLoading] = useState(false);

    // Create handleFileChange function
    // const handleFileChange = (e) => {
    //     setThumbnail(null);
    //     let selected = e.target.files[0];
    //     setFileURL(URL.createObjectURL(selected));
    //     // console.log(selected.name);

    //     if (!selected) {
    //         setThumbnailError(t("code.signupform.setThumbnailError1"));
    //         // setThumbnailError("Please select a file");
    //         return;
    //     }

    //     if (!selected.type.includes("image")) {
    //         setThumbnailError(t("code.signupform.setThumbnailError2"));
    //         // setThumbnailError("Selected file must be an image");
    //         return;
    //     }

    //     if (!selected.size > 100000) {
    //         setThumbnailError(t("code.signupform.setThumbnailError3"));
    //         // setThumbnailError("Image file size must be less than 100kb");

    //         return;
    //     }

    //     setThumbnailError(null);
    //     setThumbnail(selected);
    //     console.log(t("code.signupform.thumbnaiUpdated"));
    //     // console.log(selected.name);
    //     // console.log(thumbnail.name);
    // };

    // const VisuallyHiddenInput = styled("input")({
    //     clip: "rect(0 0 0 0)",
    //     clipPath: "inset(50%)",
    //     height: 1,
    //     overflow: "hidden",
    //     position: "absolute",
    //     bottom: 0,
    //     left: 0,
    //     whiteSpace: "nowrap",
    //     width: 1,
    //     color: "white",
    // });

    // const updateThumbnail = async () => {
    //     // upload user thumbnail
    //     const uploadPath = user ? `thumbnails/${user.uid}/${thumbnail.name}_${v4()}_${Date.now()}}`:null;
    //     setLoading(true);
    //     const uploadTask = await projectStorage.ref(uploadPath).put(thumbnail);
    //     const imgURL = await uploadTask.ref.getDownloadURL();
    //     await user.updateProfile({ photoURL: imgURL });
    //     setLoading(false);
    //     toast.success(i18n.t("referee.profile.upload-sucess-message"));
    //     setPhotoURL(imgURL);
    // };

    const handleUpdate = () => {
        updateDocument(referee.id, {
            address,
            city,
            country,
            countryTw,
            countryCn,
            expiryDate,
            grade,
            level,
            name,
            org,
            otherName,
            phone: phone.toString(),
            refereeId,
            role,
            sex,
            stateProv: stateProvince,
            status,
            title: title,
            zipcode: zipcode,
            // photoURL: photoURL,
        });

        console.log("response", response);
        showToastMessage();
        toggle();
    };

    // const cancelSelectedFile = () => {
    //     setThumbnail(null);
    // };

    // console.log(user.uid);

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
            {/* <p>{error}</p> */}
            {/* <div className="upLoadPhoto-container">
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
            </div> */}
            <Form>
                <div className="modal-form-input-container">
                    {referee.grade !== "0" && (
                        <Row>
                            {/* -----Referee reeree ID ----------*/}
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="refereeId" sm={2} size="sm" className="modal-form-input-label">
                                        {t("referee.profile.referee-id")}*:{" "}
                                    </Label>
                                    <Input
                                        required
                                        id="RefereeId"
                                        name="refereeId"
                                        type="text"
                                        onChange={(e) => setRefereeID(e.target.value)}
                                        value={refereeId}
                                        className="modal-form-input-text"
                                    />{" "}
                                </FormGroup>
                            </Col>
                            {/* -----Referee Expiry Date ----------*/}
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="expiryDate" sm={2} size="sm" className="modal-form-input-label">
                                        {t("referee.profile.expiry-date")}*:{" "}
                                    </Label>
                                    <Input
                                        required
                                        id="expiryDate"
                                        name="expiryDate"
                                        type="text"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                        className="modal-form-input-text"
                                    />{" "}
                                </FormGroup>
                            </Col>
                        </Row>
                    )}

                    <Row>
                        <Col md={4}>
                            {/* -----Referee Status ----------*/}
                            <FormGroup>
                                {referee.grade === "0" ? (
                                    <Label htmlFor="refereeStatus" sm={2} size="sm" className="modal-form-input-label">
                                        {t("referee.profile.rit-status")}:{" "}
                                    </Label>
                                ) : (
                                    <Label htmlFor="refereeStatus" sm={2} size="sm" className="modal-form-input-label">
                                        {t("referee.profile.status")}:{" "}
                                    </Label>
                                )}
                                <Input
                                    id="refereeStatus"
                                    name="status"
                                    type="select"
                                    onChange={(e) => setStatus(e.target.value)}
                                    value={status}
                                    defaultValue={"pending"}
                                    className="modal-form-input-text"
                                >
                                    <option value="active"> {t("referee.profile.active")}</option>
                                    <option value="expired"> {t("referee.profile.expired")}</option>
                                    <option value="pending"> {t("referee.profile.pending")}</option>
                                    <option value="inactive"> {t("referee.profile.inactive")}</option>
                                </Input>{" "}
                            </FormGroup>
                        </Col>
                        {/* -----Referee Grade ----------*/}
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="refereeGrade" sm={2} size="sm" className="modal-form-input-label">
                                    {t("referee.profile.grade")}:*:
                                </Label>
                                <Input
                                    required
                                    id="refereeGrade"
                                    name="grade"
                                    type="select"
                                    onChange={(e) => setGrade(e.target.value)}
                                    value={grade}
                                    className="modal-form-input-text"
                                >
                                    <option value="0">0</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        {/* -----Referee Level ----------*/}
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="refereeLevel" sm={2} size="sm" className="modal-form-input-label">
                                    {t("referee.profile.level")}:*:
                                </Label>

                                <Input
                                    required
                                    id="refereeLevel"
                                    name="level"
                                    type="select"
                                    onChange={(e) => setLevel(e.target.value)}
                                    value={level}
                                    className="modal-form-input-text"
                                >
                                    <option value="Referee-in-Training">{t("referee.profile.level-rit")}</option>
                                    <option value="State">{t("referee.profile.level-state")}</option>
                                    <option value="Club">{t("referee.profile.level-club")}</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            {/* -----Referee Name ----------*/}
                            <FormGroup>
                                {referee.grade === "0" ? (
                                    <Label htmlFor="refereeName" sm={2} size="sm" className="modal-form-input-label">
                                        {t("referee.profile.rit-name")}*:
                                    </Label>
                                ) : (
                                    <Label htmlFor="refereeName" sm={2} size="sm" className="modal-form-input-label">
                                        {t("referee.profile.name")}*:
                                    </Label>
                                )}

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
                        <Col md={4}>
                            {/* -----Referee OtherName ----------*/}
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
                        {/* -----Referee DisplayName ----------*/}
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="refereeDisplayName" sm={2} size="sm" className="modal-form-input-label">
                                    {t("referee.profile.displayName")}*:
                                </Label>

                                <Input
                                    id="refereeDisplayName"
                                    name="displayName"
                                    type="text"
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    value={displayName}
                                    className="modal-form-input-text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            {/* -----Referee Role ----------*/}
                            <FormGroup>
                                <Label htmlFor="refereeRole" sm={2} size="sm" className="modal-form-input-label">
                                    {t("referee.profile.role")}:
                                </Label>

                                <Input
                                    id="refereeRole"
                                    name="role"
                                    type="select"
                                    onChange={(e) => setRole(e.target.value)}
                                    value={role}
                                    defaultValue={"Referee"}
                                    className="modal-form-input-text"
                                >
                                    <option value="Admin">{t("referee.profile.role-admin")}</option>
                                    <option value="Moderator">{t("referee.profile.role-moderator")}</option>
                                    <option value="Referee">{t("referee.profile.role-referee")}</option>
                                    <option value="Referee-in-Training">{t("referee.profile.role-rit")}</option>
                                </Input>
                            </FormGroup>
                        </Col>

                        {/* -----Referee Gender ----------*/}
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="refereeSex" sm={2} size="sm" className="modal-form-input-label">
                                    {t("referee.profile.gender")}*:
                                </Label>

                                <Input
                                    required
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
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        {/* -----Referee Organization ----------*/}
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="organization" sm={2} size="sm" className="modal-form-input-label">
                                    {t("referee.profile.org")}::
                                </Label>

                                {lang === "en" && (
                                    <Select
                                        options={organizations}
                                        getOptionLabel={(option) => `${option.label}`}
                                        onChange={(newValue) => setOrg(newValue)}
                                        styles={CustomStyles}
                                        value={organizations.filter(function (option) {
                                            return option.label === org.label;
                                        })}
                                        className="modal-form-input-text"
                                        
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
                                        className="modal-form-input-text"
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
                                        className="modal-form-input-text"
                                    />
                                )}
                            </FormGroup>
                        </Col>
                        {/* -----Referee Position/Title ----------*/}
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="refereeTitle" sm={2} size="sm">
                                    {t("referee.profile.position")}
                                </Label>

                                <Input
                                    required
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
                        {/* -----Referee email ----------*/}
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="email" sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                    {t("referee.profile.email")}*:
                                </Label>

                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="john.doe@gmail.com"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className="modal-form-input-text"
                                />
                            </FormGroup>
                        </Col>
                        {/* -----Referee Phone ----------*/}
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="phone" sm={2} size="sm" className="modal-form-input-label">
                                    {t("referee.profile.phone")}:
                                </Label>

                                <Input
                                    id="phone"
                                    name="phone"
                                    type="number"
                                    maxLength={11}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="modal-form-input-text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    {/* -----Referee Address ----------*/}
                    <FormGroup>
                        <Label htmlFor="address" size="sm" className="modal-form-input-label">
                            {t("referee.profile.address")}:
                        </Label>
                        <Input
                            id="address"
                            name="address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="modal-form-input-text"
                        />
                    </FormGroup>
                    <Row>
                        {/* -----Referee City ----------*/}
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="refereeCity" size="sm" className="modal-form-input-label">
                                    {t("referee.profile.city")}*:
                                </Label>
                                <Input
                                    required
                                    id="refereeCity"
                                    name="city"
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="modal-form-input-text"
                                />
                            </FormGroup>
                        </Col>
                        {/* -----Referee State/Province ----------*/}
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="refereeState" sm={2} size="sm" className="modal-form-input-label">
                                    {t("referee.profile.state-province")}:
                                </Label>

                                <Input
                                    id="refereeState"
                                    name="state"
                                    type="text"
                                    value={stateProvince}
                                    onChange={(e) => setStateProvince(e.target.value)}
                                    className="modal-form-input-text"
                                />
                            </FormGroup>
                        </Col>{" "}
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="refereeZipcode" sm={2} size="sm" className="modal-form-input-label">
                                    {t("referee.profile.zipcode")}:
                                </Label>

                                <Input
                                    id="refereeZipcode"
                                    name="zipcode"
                                    type="text"
                                    value={zipcode}
                                    onChange={(e) => setZipcode(e.target.value)}
                                    className="modal-form-input-text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup>
                        <Label sm={2} size="sm" className="modal-form-input-label">
                            {t("referee.profile.country")}:
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

                    <div style={{ margin: "auto", width: "150px", marginTop: "20px" }}>
                        <Button color="primary" size="sm" onClick={handleUpdate} style={{ width: "100%" }}>
                            {t("referee.profile.update-btn")}
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}
