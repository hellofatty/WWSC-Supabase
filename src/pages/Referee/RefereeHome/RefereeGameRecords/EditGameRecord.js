/** @format */

import "./EditGameRecord.css";

import { toast } from "react-toastify";
import moment from "moment";

import { useState, useEffect } from "react";
import { useCollection } from "../../../../hooks/useCollection";

import { Timestamp } from "firebase/firestore";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { useFirestore } from "../../../../hooks/useFirestore";
import { useTranslation } from "react-i18next";

import CountryListEn from "../../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../../components/CountryList/CountryListCn";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditGameRecord({ uid, record, toggle }) {
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

    const convertedDate = moment.utc(record.date.toDate()).format("yyyy-MM-DD");
    const [date, setDate] = useState(convertedDate);
    const [game, setGame] = useState(record.game);
    const [gameTw, setGameTw] = useState(record.gameTw);
    const [gameCn, setGameCn] = useState(record.gameCn);
    const [organization, setOrganization] = useState(record.organization);
    const [country, setCountry] = useState(record.country);
    const [countryTw, setCountryTw] = useState(record.countryTw);
    const [countryCn, setCountryCn] = useState(record.countryCn);
    const [note, setNote] = useState(record.note);

    // console.log(record.organization.value.name ? record.organization.value.name : null);

    const { updateDocument, response } = useFirestore(`users/${uid}/games`);

    const showToastMessage = () => {
        toast.success(i18n.t("referee.record.update-success-message"));
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        updateDocument(record.id, {
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

        console.log("response", response);
        showToastMessage();
        navigate(location.pathname); // Navigate to the current path
        toggle();
    };

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
        <div className="referee-home">
            <div className="container">
                <Form onSubmit={handleUpdate}>
                    <div className="modal-form-input-container">
                        <small style={{ color: "grey", fontSize: "0.75rem" }}>*{t("general.required-fields")}</small>
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
                                    // required
                                    type="text"
                                    value={game}
                                    onChange={(e) => setGame(e.target.value)}
                                    className="modal-form-input-text"
                                />
                            )}
                            {lang === "zh-TW" && (
                                <Input
                                    // required
                                    type="text"
                                    value={gameTw}
                                    onChange={(e) => setGameTw(e.target.value)}
                                    className="modal-form-input-text"
                                />
                            )}
                            {lang === "zh-CN" && (
                                <Input
                                    // required
                                    type="text"
                                    value={gameCn}
                                    onChange={(e) => setGameCn(e.target.value)}
                                    className="modal-form-input-text"
                                />
                            )}
                        </FormGroup>
                       
                                <FormGroup>
                                    <Label sm={2} size="sm" className="modal-form-input-label">
                                        {t("referee.record.organization")}:
                                    </Label>

                                    {lang === "en" && (
                                        <Select
                                            options={organizations}
                                            getOptionLabel={(option) => `${option.label}`}
                                            // getOptionLabel={(option) => `${option.label} (${option.value.status})`}
                                            onChange={(newValue) => setOrganization(newValue)}
                                            styles={CustomStyles}
                                            value={organizations.filter(function (option) {
                                                return option.label === organization.label;
                                            })}
                                        />
                                    )}
                                    {lang === "zh-TW" && (
                                        <Select
                                            options={organizations}
                                            getOptionLabel={(option) => `${option.value.nameTw}`}
                                            // getOptionLabel={(option) => `${option.value.nameTw} (有效)`}
                                            onChange={(newValue) => setOrganization(newValue)}
                                            styles={CustomStyles}
                                            value={organizations.filter(function (option) {
                                                return option.value.nameTw === organization.value.nameTw;
                                            })}
                                        />
                                    )}
                                    {lang === "zh-CN" && (
                                        <Select
                                            options={organizations}
                                            getOptionLabel={(option) => `${option.value.nameCn}`}
                                            // getOptionLabel={(option) => `${option.value.nameCn} (有效)`}
                                            onChange={(newValue) => setOrganization(newValue)}
                                            styles={CustomStyles}
                                            value={organizations.filter(function (option) {
                                                return option.value.nameCn === organization.value.nameCn;
                                            })}
                                        />
                                    )}
                                </FormGroup>
                           
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
                        </FormGroup>{" "}
                    </div>
                    <div style={{ width: "150px", marginTop: "20px" }} className="modal-form-action-buttons">
                        <Button variant="contained" color="primary" size="sm" style={{ width: "100%" }}>
                            {t("referee.record.update")}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
