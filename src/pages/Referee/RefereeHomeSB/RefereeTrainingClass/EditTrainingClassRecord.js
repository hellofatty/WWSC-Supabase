/** @format */

import "./EditTrainingClassRecord.css";

import { toast } from "react-toastify";
import moment from "moment";

import { useState, useEffect } from "react";
import { useCollection } from "../../../../hooks/useCollection";

import { Timestamp } from "firebase/firestore";
import { Button, Form, FormGroup, Label, Row, Col, Input } from "reactstrap";

import { useFirestore } from "../../../../hooks/useFirestore";

import { useTranslation } from "react-i18next";

import CountryListEn from "../../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../../components/CountryList/CountryListCn";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditTrainingClassRecord({ toggle, uid, record }) {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
      const navigate = useNavigate();
          const location = useLocation();

    const { documents: orgList } = useCollection("organizations", ["status", "==", "active"], ["createdAt", "asc"]);
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

    const convertedDate = moment.utc(record.date.toDate()).format("yyyy-MM-DD");
    const [date, setDate] = useState(convertedDate);
    const [course, setCourse] = useState(record.course);
    const [organization, setOrganization] = useState(record.organization);
    const [number, setNumber] = useState(record.number);
    const [country, setCountry] = useState(record.country);
    const [countryTw, setCountryTw] = useState(record.countryTw);
    const [countryCn, setCountryCn] = useState(record.countryCn);
    const [note, setNote] = useState(record.note);

    const { updateDocument, response } = useFirestore(`users/${uid}/class`);

    const showToastMessage = () => {
        toast.success(i18n.t("referee.class.update-success-message"));
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        updateDocument(record.id, {
            date: Timestamp.fromDate(new Date(date)),
            course,
            organization,
            number,
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

    return (
        <div className="referee-home">
            <div className="container">
                <div className="training">
                    <Form onSubmit={handleUpdate}>
                        <div className="modal-form-input-container">
                        <small style={{color:"grey", fontSize:"0.75rem"}}>*{t("general.required-fields")}</small>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label sm={2} size="sm" className="modal-form-input-label">
                                            {t("referee.class.date")}*:
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
                                            {t("referee.class.course")}*:
                                        </Label>

                                        <Input
                                            required
                                            id="course"
                                            name="course"
                                            type="select"
                                            value={course}
                                            onChange={(e) => setCourse(e.target.value)}
                                            className="modal-form-input-text"
                                        >
                                            <option value="" selected disabled hidden>
                                                {t("referee.record.courseLlabel")}
                                            </option>
                                            <option value="G3 Course">{t("referee.class.courseG3")}</option>
                                            <option value="G4 Course">{t("referee.class.courseG4")}</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label sm={2} size="sm" className="modal-form-input-label">
                                            {t("referee.record.auth-training-organizations")}*:
                                        </Label>

                                        {lang === "en" && (
                                            <Select
                                                options={organizations}
                                                getOptionLabel={(option) => option.label}
                                                onChange={(newValue) => setOrganization(newValue)}
                                                styles={CustomStyles}
                                                value={organizations.filter(function (option) {
                                                    return option?.label === organization?.label;
                                                })}
                                                
                                            />
                                        )}
                                        {lang === "zh-TW" && (
                                            <Select
                                                options={organizations}
                                                getOptionLabel={(option) => option.value?.nameTw}
                                                onChange={(newValue) => setOrganization(newValue)}
                                                styles={CustomStyles}
                                                value={organizations.filter(function (option) {
                                                    return option.value?.nameTw === organization.value?.nameTw;
                                                })}
                                            />
                                        )}
                                        {lang === "zh-CN" && (
                                            <Select
                                                options={organizations}
                                                getOptionLabel={(option) => option.value.nameCn}
                                                onChange={(newValue) => setOrganization(newValue)}
                                                styles={CustomStyles}
                                                value={organizations.filter(function (option) {
                                                    return option.value?.nameCn === organization.value?.nameCn;
                                                })}
                                            />
                                        )}
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="instructor" sm={2} size="sm" className="modal-form-input-label">
                                            {t("referee.class.number")}:
                                        </Label>

                                        <Input
                                            type="number"
                                            value={number}
                                            onChange={(e) => setNumber(e.target.value)}
                                            className="modal-form-input-text"
                                            style={{ width: "300px" }}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label sm={2} size="sm" className="modal-form-input-label">
                                            {t("referee.record.location")}*:
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
                                {t("referee.class.update")}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
