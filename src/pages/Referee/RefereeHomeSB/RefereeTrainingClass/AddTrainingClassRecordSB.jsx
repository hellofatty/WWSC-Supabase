/** @format */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../../../../supabase/supabaseClient";
import { Button, Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import { toast } from "react-toastify";
import Select from "react-select";
import CountryListEn from "../../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../../components/CountryList/CountryListCn";
import "./AddTrainingClassRecord.css";

export default function AddTrainingClassRecordSB({ toggle, uid }) {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    // Form states
    const [date, setDate] = useState("");
    const [course, setCourse] = useState("");
    const [organization, setOrganization] = useState(null);
    const [number, setNumber] = useState("");
    const [country, setCountry] = useState(null);
    const [countryTw, setCountryTw] = useState(null);
    const [countryCn, setCountryCn] = useState(null);
    const [note, setNote] = useState("");

    const [orgs, setOrgs] = useState([]);

    // Fetch organizations
    useEffect(() => {
        const fetchOrgs = async () => {
            const { data, error } = await supabase
                .from("organizations")
                .select("id, name, name_tw, name_cn, status")
                .eq("status", "active")
                .order("name");

            if (error) {
                console.error("Error fetching organizations:", error);
                return;
            }

            setOrgs(
                data.map((org) => ({
                    value: org,
                    label: org.name,
                    labelTw: org.name_tw,
                    labelCn: org.name_cn,
                }))
            );
        };

        fetchOrgs();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase.from("class").insert({
                user_id: uid,
                date: new Date(date).toISOString(),
                course,
                org_id: organization?.value?.id,
                number: parseInt(number),
                country_en: country,
                country_tw: countryTw,
                country_cn: countryCn,
                note,
                year: new Date(date).getFullYear().toString(),
                month: new Date(date).toLocaleString("default", { month: "long" }),
            });

            if (error) throw error;

            toast.success(t("referee.class.add-success-message"));
            reset();
            navigate(location.pathname);
            toggle();
        } catch (err) {
            console.error("Error adding class record:", err);
            toast.error(t("referee.class.add-error-message"));
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setDate("");
        setCourse("");
        setOrganization(null);
        setNumber("");
        setCountry(null);
        setCountryTw(null);
        setCountryCn(null);
        setNote("");
    };

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
                            <small style={{ color: "grey", fontSize: "0.75rem" }}>
                                *{t("general.required-fields")}
                            </small>
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
                                                options={orgs}
                                                getOptionLabel={(option) => `${option.label} (${option.value.status})`}
                                                onChange={(newValue) => setOrganization(newValue)}
                                                styles={CustomStyles}
                                            />
                                        )}
                                        {lang === "zh-TW" && (
                                            <Select
                                                options={orgs}
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
                                color="primary"
                                type="submit"
                                size="sm"
                                style={{ width: "120px" }}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span>
                                        <i className="fas fa-spinner fa-spin me-2"></i>
                                        {t("common.submitting")}
                                    </span>
                                ) : (
                                    t("referee.class.submit")
                                )}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
