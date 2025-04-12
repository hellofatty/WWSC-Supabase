/** @format */

import "./AddGameRecord.css";

import { useState, useEffect } from "react";
import { useCollection } from "../../../../hooks/useCollection";
import { Timestamp } from "firebase/firestore";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import { toast } from "react-toastify";
import { useFirestore } from "../../../../hooks/useFirestore";
import { useTranslation } from "react-i18next";
import CountryListEn from "../../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../../components/CountryList/CountryListCn";
import Select from "react-select";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddGameRecord({ toggle, uid }) {
    
    dayjs.extend(utc);
    dayjs.extend(timezone);
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
      const navigate = useNavigate();
        const location = useLocation();

    const { documents: orgList } = useCollection("organizations");
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

    const [game, setGame] = useState("");
    const [gameTw, setGameTw] = useState("");
    const [gameCn, setGameCn] = useState("");
    const [organization, setOrganization] = useState("");
    const [country, setCountry] = useState(null);
    const [countryTw, setCountryTw] = useState(null);
    const [countryCn, setCountryCn] = useState(null);
    const [note, setNote] = useState("");

    const { addDocument, response } = useFirestore(`users/${uid}/games`);

    const showToastMessage = () => {
        toast.success(i18n.t("referee.record.add-success-message"));
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();

        addDocument({
            date: Timestamp.fromDate(new Date(date)),
            game,
            gameTw,
            gameCn,
            organization,
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
        setGame("");
        setGameTw("");
        setGameCn("");
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
            setGame("");
            setGameTw("");
            setGameCn("");
            setOrganization("");
            setCountry(null);
            setCountryTw(null);
            setCountryCn(null);
            setNote("");
        }
    }, [response.success]);

    // console.log(location);
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
                <Form onSubmit={handleSubmit}>
                    <div className="modal-form-input-container">
                    <small style={{color:"grey", fontSize:"0.75rem"}}>*{t("general.required-fields")}</small>
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
                        <FormGroup>
                            <Label sm={2} size="sm" className="modal-form-input-label">
                                {t("referee.record.game")}:
                            </Label>
                            {lang === "en" && (
                                <Input
                                    type="text"
                                    value={game}
                                    onChange={(e) => setGame(e.target.value)}
                                    className="modal-form-input-text"
                                />
                            )}
                            {lang === "zh-TW" && (
                                <Input
                                    type="text"
                                    value={gameTw}
                                    onChange={(e) => setGameTw(e.target.value)}
                                    className="modal-form-input-text"
                                />
                            )}
                            {lang === "zh-CN" && (
                                <Input
                                    type="text"
                                    value={gameCn}
                                    onChange={(e) => setGameCn(e.target.value)}
                                    className="modal-form-input-text"
                                />
                            )}
                        </FormGroup>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label sm={2} size="sm" className="modal-form-input-label">
                                        {t("referee.record.organization")}:
                                    </Label>

                                    {lang === "en" && (
                                        <Select
                                            options={organizations}
                                            getOptionLabel={(option) => `${option.label}`}
                                            onChange={(newValue) => setOrganization(newValue)}
                                            styles={CustomStyles}
                                        />
                                    )}
                                    {lang === "zh-TW" && (
                                        <Select
                                            options={organizations}
                                            getOptionLabel={(option) => `${option.value.nameTw}`}
                                            onChange={(newValue) => setOrganization(newValue)}
                                            styles={CustomStyles}
                                        />
                                    )}
                                    {lang === "zh-CN" && (
                                        <Select
                                            options={organizations}
                                            getOptionLabel={(option) => `${option.value.nameCn}`}
                                            onChange={(newValue) => setOrganization(newValue)}
                                            styles={CustomStyles}
                                        />
                                    )}
                                </FormGroup>
                            </Col>
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
                                </FormGroup>{" "}
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
                        <Button type="button" color="secondary" size="sm" onClick={reset} style={{ width: "120px" }}>
                            {t("referee.record.reset")}
                        </Button>
                        <Button color="primary" size="sm" style={{ width: "120px" }}>
                            {t("referee.record.submit")}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
