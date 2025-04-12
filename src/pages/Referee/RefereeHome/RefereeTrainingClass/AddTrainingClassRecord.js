/** @format */

import "./AddTrainingClassRecord.css";

import { useState, useEffect } from "react";
import { useCollection } from "../../../../hooks/useCollection";
import { Timestamp } from "firebase/firestore";
import { Button, Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import { toast } from "react-toastify";
import { useFirestore } from "../../../../hooks/useFirestore";
import { useTranslation } from "react-i18next";
import CountryListEn from "../../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../../components/CountryList/CountryListCn";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddTrainingClassRecord({ toggle, uid }) {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
        const navigate = useNavigate();
      const location = useLocation();

    const { documents: orgList } = useCollection("organizations", ["status", "==", "active"], ["createdAt", "asc"]);
    console.log(orgList);

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

    const [date, setDate] = useState("");
    const [course, setCourse] = useState("");
    const [organization, setOrganization] = useState("");
    const [number, setNumber] = useState(null);
    const [country, setCountry] = useState(null);
    const [countryTw, setCountryTw] = useState(null);
    const [countryCn, setCountryCn] = useState(null);
    const [note, setNote] = useState("");

    const { addDocument, response } = useFirestore(`users/${uid}/class`);

    const showToastMessage = () => {
        toast.success(i18n.t("referee.record.add-success-message"));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addDocument({
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

        reset();
        showToastMessage();
        navigate(location.pathname); // Navigate to the current path
        toggle();
    };

    const reset = () => {
        setDate("");
        setCourse("");
        setOrganization("");
        setCountry(null);
        setCountryTw(null);
        setCountryCn(null);
        setNote("");
    };

    useEffect(() => {
        console.log("response", response.success);
        if (response.success) {
            setDate("");
            setCourse(null);
            setOrganization("");
            setNumber(null);
            setCountry(null);
            setCountryTw(null);
            setCountryCn(null);
            setNote("");
        }
    }, [response.success]);

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
                    <Form onSubmit={handleSubmit}>
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
                                            type="select"
                                            value={course}
                                            onChange={(e) => setCourse(e.target.value)}
                                            className="modal-form-input-text"
                                        >
                                            <option value="" selected disabled hidden style={{ color: "gray" }}>
                                                {t("referee.class.courseLlabel")}
                                            </option>
                                            <option value="G3 Course" className="modal-form-select-option-item">
                                                {t("referee.class.courseG3")}
                                            </option>
                                            <option value="G4 Course" className="modal-form-select-option-item">
                                                {t("referee.class.courseG4")}
                                            </option>
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
                                                getOptionLabel={(option) => `${option.label} (${option.value.status})`}
                                                onChange={(newValue) => setOrganization(newValue)}
                                                styles={CustomStyles}
                                            />
                                        )}
                                        {lang === "zh-TW" && (
                                            <Select
                                                options={organizations}
                                                getOptionLabel={(option) => `${option.value.nameTw} (有效)`}
                                                onChange={(newValue) => setOrganization(newValue)}
                                                styles={CustomStyles}
                                            />
                                        )}
                                        {lang === "zh-CN" && (
                                            <Select
                                                options={organizations}
                                                getOptionLabel={(option) => `${option.value.nameCn} (有效)`}
                                                onChange={(newValue) => setOrganization(newValue)}
                                                styles={CustomStyles}
                                            />
                                        )}
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label sm={2} size="sm" className="modal-form-input-label">
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
                            </Row>{" "}
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label sm={2} size="sm" className="modal-form-input-label">
                                            {t("referee.class.location")}*:
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
                        <div style={{ display: "flex", width: "100%", justifyContent: "center", gap: "16px" }}>
                            <Button
                                type="button"
                                color="secondary"
                                size="sm"
                                onClick={reset}
                                style={{ width: "120px" }}
                            >
                                {t("referee.class.reset")}
                            </Button>
                            <Button color="primary" type="submit" size="sm" style={{ width: "120px" }}>
                                {t("referee.class.submit")}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
