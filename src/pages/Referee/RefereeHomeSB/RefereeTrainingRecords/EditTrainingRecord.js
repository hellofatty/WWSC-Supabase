/** @format */

import "./EditTrainingRecord.css";
// import "./AddTrainingRecord.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from "react-toastify";

import moment from "moment";

import { useState, useEffect } from "react";
import { useCollection } from "../../../../hooks/useCollection";

import { Timestamp } from "firebase/firestore";
import { Button, Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";
import { useFirestore } from "../../../../hooks/useFirestore";

import { useTranslation } from "react-i18next";

import CountryListEn from "../../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../../components/CountryList/CountryListCn";
import Select from "react-select";
import MyDialog from "../../../../components/MyDialog/MyDialog";
import {
    selectAuthOrgDialogContent,
    selectAuthOrgDialogContentTw,
    selectAuthOrgDialogContentCn,
    selectInstructorDialogContent,
    selectInstructorDialogContentTw,
    selectInstructorDialogContentCn,
    selectCountryDialogContent,
    selectCountryDialogContentTw,
    selectCountryDialogContentCn,
} from "./HelpContent";

export default function EditTrainingRecord({ toggle, uid, record }) {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    const navigate = useNavigate();
    const location = useLocation();

    const [instructors, setInstructors] = useState([]);

    const { documents: G3RefereeList } = useCollection("users", ["grade", "==", "3"], ["refereeId", "asc"]);

    useEffect(() => {
        if (G3RefereeList) {
            setInstructors(
                G3RefereeList.map((user) => {
                    return { value: { ...user, id: user.id }, label: user.name };
                })
            );
        }
    }, [G3RefereeList]);

    const { documents: orgList } = useCollection("organizations");
    // console.log(orgList);

    const [organizations, setOrganizations] = useState([]);

    const AuthOrgList = orgList?.filter((org) => {
        return org.isAuthorized === true;
    });

    useEffect(() => {
        if (AuthOrgList) {
            setOrganizations(
                AuthOrgList.map((org) => {
                    return {
                        value: { ...org, id: org.id },
                        label: org.name,
                    };
                })
            );
        }
    }, [AuthOrgList]);

    const convertedDate = moment.utc(record.date.toDate()).format("yyyy-MM-DD");
    const [date, setDate] = useState(convertedDate);
    const [course, setCourse] = useState(record.course);
    const [organization, setOrganization] = useState(record.organization);
    const [instructor, setInstructor] = useState(record.instructor);
    const [country, setCountry] = useState(record.country);
    const [countryTw, setCountryTw] = useState(record.countryTw);
    const [countryCn, setCountryCn] = useState(record.countryCn);
    const [note, setNote] = useState(record.note);

    const { updateDocument, response } = useFirestore(`users/${uid}/records`);

    const showToastMessage = () => {
        toast.success(i18n.t("referee.class.update-success-message"));
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        updateDocument(record.id, {
            date: Timestamp.fromDate(new Date(date)),
            course,
            organization,
            instructor,
            country,
            countryTw,
            countryCn,
            uid,
            year: new Date(date).getFullYear().toString(),
            month: new Date(date).toLocaleString("default", { month: "long" }),
            note,
        });

        console.log("response", response);
        showToastMessage();
        navigate(location.pathname); // Navigate to the current path
        toggle();
    };

    // console.log(record.id, record);

    const CustomStyles = {
        control: (provided) => ({
            ...provided,
            width: "300px",

            borderRadius: "5px",
            boxShadow: "none",
            textAlign: "left",
            fontSize: "0.8rem",
        }),
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? "white" : "teal",
            backgroundColor: state.isSelected ? "teal" : "white",
            fontSize: "0.8rem",
        }),
    };

    // Handle Select Authorized Training Orgs Dialog Box Open and Close

    const [openSelectAuthOrgDialog, setOpenSelectAuthOrgDialog] = useState(false);

    const handleClickOpenAuthOrgDialog = () => {
        setOpenSelectAuthOrgDialog(true);
    };

    const handleCloseAuthOrgDialog = () => {
        setOpenSelectAuthOrgDialog(false);
    };

    // Handle Select Training Instructor Dialog Box Open and Close

    const [openSelectInstructorDialog, setOpenSelectInstructorDialog] = useState(false);

    const handleClickOpenInstructorDialog = () => {
        setOpenSelectInstructorDialog(true);
    };

    const handleCloseInstructorDialog = () => {
        setOpenSelectInstructorDialog(false);
    };

    // Handle Select Country Dialog Box Open and Close

    const [openSelectCountryDialog, setOpenSelectCountryDialog] = useState(false);

    const handleClickOpenCountryDialog = () => {
        setOpenSelectCountryDialog(true);
    };

    const handleCloseCountryDialog = () => {
        setOpenSelectCountryDialog(false);
    };

    return (
        <div className="referee-home">
            <div className="container train-container">
                <div className="training">
                    <Form onSubmit={handleUpdate}>
                        <div className="modal-form-input-container">
                            <small style={{ color: "grey", fontSize: "0.75rem" }}>
                                *{t("general.required-fields")}
                            </small>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label sm={2} size="sm" className="modal-form-input-label">
                                            {t("referee.record.date")}*:
                                        </Label>

                                        <Input
                                            required
                                            type="date"
                                            onChange={(e) => setDate(e.target.value)}
                                            value={date}
                                            className="modal-form-input-text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label sm={2} size="sm" className="modal-form-input-label">
                                            {t("referee.record.course")}*:
                                        </Label>

                                        <Input
                                            required
                                            type="select"
                                            value={course}
                                            onChange={(e) => setCourse(e.target.value)}
                                            className="modal-form-input-text"
                                        >
                                            <option value="" selected disabled hidden style={{ color: "gray" }}>
                                                {t("referee.record.courseLlabel")}
                                            </option>
                                            <option value="G3 Course" className="modal-form-select-option-item">
                                                {t("referee.record.courseG3")}
                                            </option>
                                            <option value="G4 Course" className="modal-form-select-option-item">
                                                {t("referee.record.courseG4")}
                                            </option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label sm={2} size="sm" className="modal-form-input-label">
                                    <div className="help-text-wrapper" style={{ justifyContent: "flex-start" }}>
                                        {t("referee.record.auth-training-organizations")}*
                                        <Tooltip title={t("referee.record.tooltip-auth-orgs")}>
                                            <HelpIcon
                                                onClick={handleClickOpenAuthOrgDialog}
                                                sx={{
                                                    fontSize: "1rem",
                                                    cursor: "pointer",
                                                    textDecoration: "none",
                                                    color: "lightgrey",
                                                    marginLeft: "3px",
                                                }}
                                            />
                                        </Tooltip>
                                    </div>
                                </Label>
                                {lang === "en" && (
                                    <Select
                                        options={organizations}
                                        getOptionLabel={(option) => `${option.label} (${option.value.status})`}
                                        onChange={(newValue) => setOrganization(newValue)}
                                        styles={CustomStyles}
                                        value={organizations.filter(function (option) {
                                            return `${option.label} (${option.value.status})` === `${organization.label} (${organization.value.status})`;
                                        })}
                                    />
                                )}
                                {lang === "zh-TW" && (
                                    <Select
                                        options={organizations}
                                        getOptionLabel={(option) => `${option.value.nameTw} (${option.value?.statusTw})`}
                                        onChange={(newValue) => setOrganization(newValue)}
                                        styles={CustomStyles}
                                        value={organizations.filter(function (option) {
                                            return `${option.value?.nameTw} (${option.value?.statusTw})` === `${organization.value?.nameTw} (${organization.value?.statusTw})`;
                                        })}
                                    />
                                )}
                                {lang === "zh-CN" && (
                                    <Select
                                        options={organizations}
                                        getOptionLabel={(option) => `${option.value?.nameCn} (${option.value?.statusCn})`}
                                        onChange={(newValue) => setOrganization(newValue)}
                                        styles={CustomStyles}
                                        value={organizations.filter(function (option) {
                                            return `${option.value?.nameCn} (${option.value?.statusCn})` === `${organization.value?.nameCn} (${organization.value?.statusCn})`;
                                        })}
                                    />
                                )}
                            </FormGroup>

                            <FormGroup>
                                <Label sm={2} size="sm" className="modal-form-input-label">
                                    <div className="help-text-wrapper" style={{ justifyContent: "flex-start" }}>
                                        {t("referee.record.instructor")}*
                                        <Tooltip title={t("referee.record.tooltip-instructor")}>
                                            <HelpIcon
                                                onClick={handleClickOpenInstructorDialog}
                                                sx={{
                                                    fontSize: "1rem",
                                                    cursor: "pointer",
                                                    textDecoration: "none",
                                                    color: "lightgrey",
                                                    marginLeft: "3px",
                                                }}
                                            />
                                        </Tooltip>
                                    </div>
                                </Label>

                                <Select
                                    options={instructors}
                                    getOptionLabel={(option) =>
                                        `${option.label}-${option.value.otherName} (${option.value.refereeId})`
                                    }
                                    onChange={(newValue) => setInstructor(newValue)}
                                    styles={CustomStyles}
                                    value={instructors.filter(function (option) {
                                        return (
                                            `${option.label}-${option.value?.otherName} (${option.value?.refereeId})` ===
                                            `${instructor?.label}-${instructor.value?.otherName} (${instructor.value?.refereeId})`
                                        );
                                    })}
                                />
                            </FormGroup>

                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label sm={2} size="sm" className="modal-form-input-label">
                                            <div className="help-text-wrapper" style={{ justifyContent: "flex-start" }}>
                                                {t("referee.record.location")}*
                                                <Tooltip title={t("referee.record.tooltip-location")}>
                                                    <HelpIcon
                                                        onClick={handleClickOpenCountryDialog}
                                                        sx={{
                                                            fontSize: "1rem",
                                                            cursor: "pointer",
                                                            textDecoration: "none",
                                                            color: "lightgrey",
                                                            marginLeft: "3px",
                                                        }}
                                                    />
                                                </Tooltip>
                                            </div>
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
                            <FormGroup>
                                <Label sm={2} size="sm" className="modal-form-input-label">
                                    {t("referee.record.note")}:
                                </Label>

                                <Input
                                    type="textarea"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    className="modal-form-input-text"
                                />
                            </FormGroup>
                        </div>

                        <div style={{ width: "150px", marginTop: "20px" }} className="modal-form-action-buttons">
                            <Button variant="contained" color="primary" size="sm" style={{ width: "100%" }}>
                                {t("referee.record.update")}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            <MyDialog
                handleOpen={openSelectAuthOrgDialog}
                handleClose={handleCloseAuthOrgDialog}
                dialogTitle={t("referee.record.tooltip-auth-orgs")}
                dialogContent={selectAuthOrgDialogContent}
                dialogContentTw={selectAuthOrgDialogContentTw}
                dialogContentCn={selectAuthOrgDialogContentCn}
            />
            <MyDialog
                handleOpen={openSelectInstructorDialog}
                handleClose={handleCloseInstructorDialog}
                dialogTitle={t("referee.record.tooltip-instructor")}
                dialogContent={selectInstructorDialogContent}
                dialogContentTw={selectInstructorDialogContentTw}
                dialogContentCn={selectInstructorDialogContentCn}
            />
            <MyDialog
                handleOpen={openSelectCountryDialog}
                handleClose={handleCloseCountryDialog}
                dialogTitle={t("referee.record.tooltip-location")}
                dialogContent={selectCountryDialogContent}
                dialogContentTw={selectCountryDialogContentTw}
                dialogContentCn={selectCountryDialogContentCn}
            />
        </div>
    );
}
