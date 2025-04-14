/** @format */

import "./EditTrainingClassRecord.css";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "../../../../supabase/supabaseClient";
import { toast } from "react-toastify";
import moment from "moment";
import { Button, Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import { useTranslation } from "react-i18next";

import CountryListEn from "../../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../../components/CountryList/CountryListCn";
import Select from "react-select";
// import { useLocation, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export default function EditTrainingClassRecordSB({ toggle, uid, record }) {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    // const navigate = useNavigate();
    // const location = useLocation();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Convert the date format
    const convertedDate = moment.utc(record.date).format("YYYY-MM-DD");
    const [date, setDate] = useState(convertedDate);
    const [course, setCourse] = useState(record.course || "");
    const [number, setNumber] = useState(record.number || "");
    const [note, setNote] = useState(record.note || "");
    const [org, setOrg] = useState(
        record.org_id
            ? {
                  value: record.org_id,
                  label: record.org?.name,
                  labelTw: record.org?.name_tw,
                  labelCn: record.org?.name_cn,
              }
            : null
    );
    const [country, setCountry] = useState(
        record.country_en
            ? {
                  label: record.country_en.label,
                  value: record.country_en.value,
              }
            : null
    );
    const [countryTw, setCountryTw] = useState(
        record.country_tw
            ? {
                  label: record.country_tw.label,
                  value: record.country_tw.value,
              }
            : null
    );
    const [countryCn, setCountryCn] = useState(
        record.country_cn
            ? {
                  label: record.country_cn.label,
                  value: record.country_cn.value,
              }
            : null
    );

    const [orgs, setOrgs] = useState([]);

    // Fetch organizations
    const fetchOrgs = useCallback(async () => {
        try {
            const { data, error } = await supabase.from("organizations").select().eq("status", "active").order("name");

            if (error) throw error;

            setOrgs(
                data.map((org) => ({
                    value: org.id,
                    label: org.name,
                    labelTw: org.name_tw,
                    labelCn: org.name_cn,
                }))
            );
        } catch (err) {
            console.error("Error fetching organizations:", err);
            setError(err.message);
        }
    }, []);

    useEffect(() => {
        fetchOrgs();
    }, [fetchOrgs]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from("class")
                .update({
                    date: moment(date).toISOString(),
                    course,
                    org_id: org?.value,
                    number,
                    country_en: country,
                    country_tw: countryTw,
                    country_cn: countryCn,
                    user_id: uid,
                    year: moment(date).year().toString(),
                    month: moment(date).format("MMMM"),
                    note,
                    updated_at: new Date().toISOString(),
                })
                .eq("id", record.id)
                .eq("user_id", uid);

            if (error) throw error;

            toast.success(t("referee.class.update-success-message"));
            toggle();
        } catch (err) {
            console.error("Error updating class record:", err);
            toast.error(t("general.error-message"));
            // navigate(location.pathname);
        } finally {
            setLoading(false);
        }
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
                                                placeholder="Select an auth. training org...."
                                                options={orgs}
                                                getOptionLabel={(option) => option?.label}
                                                onChange={(newValue) => setOrg(newValue)}
                                                styles={CustomStyles}
                                                value={orgs.filter(function (option) {
                                                    return option?.value === org?.value;
                                                })}
                                            />
                                        )}
                                        {lang === "zh-TW" && (
                                            <Select
                                                placeholder="選擇授權培訓團體..."
                                                options={orgs}
                                                getOptionLabel={(option) => option?.labelTw}
                                                onChange={(newValue) => setOrg(newValue)}
                                                styles={CustomStyles}
                                                value={orgs.filter(function (option) {
                                                    return option?.value === org?.value;
                                                })}
                                            />
                                        )}
                                        {lang === "zh-CN" && (
                                            <Select
                                                placeholder="选择授权培训团体..."
                                                options={orgs}
                                                getOptionLabel={(option) => option.labelCn}
                                                onChange={(newValue) => setOrg(newValue)}
                                                styles={CustomStyles}
                                                value={orgs.filter(function (option) {
                                                    return option?.value === org?.value;
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
                            <Button
                                variant="contained"
                                color="primary"
                                size="sm"
                                style={{ width: "100%" }}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span>
                                        <CircularProgress size={20} style={{ color: "teal" }} />
                                        {t("general.loading")}
                                    </span>
                                ) : (
                                    t("general.update")
                                )}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
