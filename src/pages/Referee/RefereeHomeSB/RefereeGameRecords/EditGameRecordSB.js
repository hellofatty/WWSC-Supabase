/** @format */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../../../../supabase/supabaseClient";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Select from "react-select";
import { toast } from "react-toastify";
import moment from "moment";
import CountryListEn from "../../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../../components/CountryList/CountryListCn";
import "./EditGameRecord.css";

export default function EditGameRecordSB({ uid, record, toggle }) {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    const [orgs, setOrgs] = useState([]);

    // Fetch organizations
    useEffect(() => {
        const fetchOrgs = async () => {
            const { data, error } = await supabase
                .from("organizations")
                .select("id, name, name_tw, name_cn, status")
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

    // Set initial state from record
    const [date, setDate] = useState(moment(record.date).format("YYYY-MM-DD"));
    const [game, setGame] = useState(record.game || "");
    const [gameTw, setGameTw] = useState(record.game_tw || "");
    const [gameCn, setGameCn] = useState(record.game_cn || "");
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
    const [note, setNote] = useState(record.note || "");

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from("games")
                .update({
                    date: moment(date).toISOString(),
                    game,
                    game_tw: gameTw,
                    game_cn: gameCn,
                    org_id: org?.value,
                    country_en: country,
                    country_tw: countryTw,
                    country_cn: countryCn,
                    note,
                    year: moment(date).year().toString(),
                    month: moment(date).format("MMMM"),
                    updated_at: new Date().toISOString(),
                })
                .eq("id", record.id)
                .eq("user_id", uid);

            if (error) throw error;

            toast.success(t("referee.record.update-success-message"));
            navigate(location.pathname);
            toggle();
        } catch (err) {
            console.error("Error updating record:", err);
            toast.error(t("referee.record.update-error-message"));
        } finally {
            setLoading(false);
        }
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
                                    options={orgs}
                                    getOptionLabel={(option) => `${option?.label}`}
                                    onChange={(newValue) => setOrg(newValue)}
                                    styles={CustomStyles}
                                    value={orgs.filter(function (option) {
                                        return option?.value === org?.value;
                                    })}
                                />
                            )}
                            {lang === "zh-TW" && (
                                <Select
                                    placeholder="選擇活動團體..."
                                    options={orgs}
                                    getOptionLabel={(option) => option?.labelTw}
                                    // getOptionLabel={(option) => `${option.value.nameTw} (有效)`}
                                    onChange={(newValue) => setOrg(newValue)}
                                    styles={CustomStyles}
                                    value={orgs.filter(function (option) {
                                        return option?.value === org?.value;
                                    })}
                                />
                            )}
                            {lang === "zh-CN" && (
                                <Select
                                 placeholder="选择活动团体..."
                                    options={orgs}
                                    getOptionLabel={(option) => option.labelCn}
                                 
                                    onChange={(newValue) => setOrg(newValue)}
                                    styles={CustomStyles}
                                    value={org.filter(function (option) {
                                        return option.value === org?.value;
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
                        <Button color="primary" size="sm" style={{ width: "100%" }} disabled={loading}>
                            {loading ? (
                                <span>
                                    <i className="fas fa-spinner fa-spin me-2"></i>
                                    {t("general.updating")}
                                </span>
                            ) : (
                                t("referee.record.update")
                            )}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
