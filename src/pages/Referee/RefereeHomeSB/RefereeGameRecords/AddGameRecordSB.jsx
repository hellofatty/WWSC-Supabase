/** @format */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "../../../../supabase/supabaseClient";
// import { useAuthContextSB } from "../../../../hooks/useAuthContextSB";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import { toast } from "react-toastify";
import Select from "react-select";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import "./AddGameRecord.css";
import CountryListEn from "../../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../../components/CountryList/CountryListCn";

export default function AddGameRecordSB({ toggle, uid }) {
    
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    // Form states
    const [date, setDate] = useState("");
    const [game, setGame] = useState("");
    const [gameTw, setGameTw] = useState("");
    const [gameCn, setGameCn] = useState("");
    const [org, setOrg] = useState(null);
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
                .select("id, name, name_tw, name_cn")
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

        fetchOrgs();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // const gameDate = new Date(date);

            const { error } = await supabase
                .from("games")
                .insert({
                user_id: uid,
                org_id: org?.value,
                date: moment(date).toISOString(),
                game,
                game_tw: gameTw,
                game_cn: gameCn,
                country_en: country
                    ? {
                          label: country.label,
                          value: country.value,
                      }
                    : null,
                country_tw: countryTw
                    ? {
                          label: countryTw.label,
                          value: countryTw.value,
                      }
                    : null,
                country_cn: countryCn
                    ? {
                          label: countryCn.label,
                          value: countryCn.value,
                      }
                    : null,
                year: moment(date).year().toString(),
                month: moment(date).format("MMMM"),
                note,
            });

            if (error) throw error;

            toast.success(t("referee.record.add-success-message"));
            reset();
            navigate(location.pathname);
            toggle();
        } catch (error) {
            console.error("Error adding game record:", error);
            toast.error(t("referee.record.add-error-message"));
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setDate("");
        setGame("");
        setGameTw("");
        setGameCn("");
        setOrg(null);
        setCountry(null);
        setCountryTw(null);
        setCountryCn(null);
        setNote("");
    };

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
                                    <Select
                                        placeholder={t("referee.record.select-org-label")}
                                        options={orgs}
                                        value={org}
                                        onChange={(newValue) => setOrg(newValue)}
                                        getOptionLabel={(option) =>
                                            lang === "zh-TW"
                                                ? option.labelTw
                                                : lang === "zh-CN"
                                                ? option.labelCn
                                                : option.label
                                        }
                                        styles={CustomStyles}
                                        isSearchable={true}
                                    />
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
                        <Button
                            type="button"
                            color="secondary"
                            size="sm"
                            onClick={reset}
                            style={{ width: "120px" }}
                            disabled={loading}
                        >
                            {t("referee.record.reset")}
                        </Button>
                        <Button type="submit" color="primary" size="sm" style={{ width: "120px" }} disabled={loading}>
                            {loading ? (
                                <span>
                                    <i className="fas fa-spinner fa-spin me-2"></i>
                                    {t("common.submitting")}
                                </span>
                            ) : (
                                t("referee.record.submit")
                            )}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
