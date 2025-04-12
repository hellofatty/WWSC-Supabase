/** @format */

import "./AddEventSB.css";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import { supabase } from "../../../supabase/supabaseClient";
import moment from "moment";

import CountryListEn from "../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../components/CountryList/CountryListCn";
import CustomTab from "../../../components/CustomTab/CustomTab";

export default function AddEventSB({ toggle }) {
    const navigate = useNavigate();
    const { t } = useTranslation("global");
    const [loading, setLoading] = useState(false);

    // Form states
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [nameTw, setNameTw] = useState("");
    const [nameCn, setNameCn] = useState("");
    const [desc, setDesc] = useState("");
    const [descTw, setDescTw] = useState("");
    const [descCn, setDescCn] = useState("");
    const [org, setOrg] = useState(null);
    const [link, setLink] = useState("");
    const [city, setCity] = useState("");
    const [cityTw, setCityTw] = useState("");
    const [cityCn, setCityCn] = useState("");
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
            if (!date || !name) {
                toast.error(t("admin.event-list.required-fields"));
                return;
            }

            const eventData = {
                date: moment(date).toISOString(),
                name: name?.trim(),
                name_tw: nameTw?.trim(),
                name_cn: nameCn?.trim(),
                desc: desc?.trim(),
                desc_tw: descTw?.trim(),
                desc_cn: descCn?.trim(),
                link: link?.trim(),
                org_id: org?.value,
                city: city?.trim(),
                city_tw: cityTw?.trim(),
                city_cn: cityCn?.trim(),
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
                note: note?.trim(),
            };

            const { error } = await supabase.from("events").insert(eventData);

            if (error) throw error;
             
            toast.success(t("admin.event-list.add-success"));
            reset();
            toggle();

             // Option 1: Using React Router (smoother)
             navigate(0);
            
             // Option 2: Using window.location (hard refresh)
             // window.location.reload();
        } catch (error) {
            console.error("Error adding event:", error);
            toast.error(t("admin.event-list.add-error"));
        } finally {
            setLoading(false);
        }
    };
    console.log(org);
    const reset = () => {
        setDate("");
        setName("");
        setNameTw("");
        setNameCn("");
        setLink("");
        setOrg("");
        setCity("");
        setCityTw("");
        setCityCn("");
        setCountry("");
        setCountryTw("");
        setCountryCn("");
        setNote("");
        // setFiles([]);
    };

    // Add after state declarations
useEffect(() => {
    const channel = supabase
        .channel('events_changes')
        .on('postgres_changes', 
            {
                event: 'INSERT',
                schema: 'public',
                table: 'events'
            },
            (payload) => {
                // Refresh the page when a new event is added
                window.location.reload();
            }
        )
        .subscribe();

    return () => {
        channel.unsubscribe();
    };
}, []);

    const inputsEngContent = (
        <>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    Event Name:
                </Label>

                <Input
                    type="textarea"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    Event Description:
                </Label>

                <Input
                    type="textarea"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    Event Organization (Input to search):
                </Label>
                <Select
                    placeholder="Select event organization"
                    options={orgs}
                    getOptionLabel={(option) => option?.label}
                    onChange={(newValue) => setOrg(newValue)}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    Event's City
                </Label>

                <Input
                    // required
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    Select Country:
                </Label>

                <div className="country-select-input">
                    <CountryListEn setLocation={setCountry} location={country} className="modal-form-input-text" />
                </div>
            </FormGroup>
        </>
    );

    const inputsTwContent = (
        <>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    活動名稱:
                </Label>

                <Input
                    type="textarea"
                    onChange={(e) => setNameTw(e.target.value)}
                    value={nameTw}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    活動簡介:
                </Label>

                <Input
                    type="textarea"
                    onChange={(e) => setDescTw(e.target.value)}
                    value={descTw}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    活動團體名稱 （可輸入搜尋團體名稱）:
                </Label>
                <Select
                    placeholder="選擇活動團體..."
                    options={orgs}
                    getOptionLabel={(option) => option?.labelTw}
                    // getOptionLabel={(option) => option.value?.nameTw}
                    onChange={(newValue) => setOrg(newValue)}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    輸入團體所在城市：
                </Label>

                <Input
                    type="text"
                    onChange={(e) => setCityTw(e.target.value)}
                    value={cityTw}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    選擇活動國家:
                </Label>

                <div className="country-select-input">
                    <CountryListTw setLocation={setCountryTw} location={countryTw} />
                </div>
            </FormGroup>
        </>
    );

    const inputsCnContent = (
        <>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    活动名称:
                </Label>

                <Input
                    type="textarea"
                    onChange={(e) => setNameCn(e.target.value)}
                    value={nameCn}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    活动简介:
                </Label>

                <Input
                    type="textarea"
                    onChange={(e) => setDescCn(e.target.value)}
                    value={descCn}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    活动团体名称（可输入搜寻团体名称）:
                </Label>
                <Select
                    placeholder="选择活动团体..."
                    options={orgs}
                    getOptionLabel={(option) => option?.labelCn}
                    onChange={(newValue) => setOrg(newValue)}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    输入团体所在城市：
                </Label>

                <Input
                    type="text"
                    onChange={(e) => setCityCn(e.target.value)}
                    value={cityCn}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    选择活动国家:
                </Label>

                <div className="country-select-input">
                    <CountryListCn setLocation={setCountryCn} location={countryCn} />
                </div>
            </FormGroup>
        </>
    );

    const content = [
        { title: "English", content: inputsEngContent },
        { title: "繁體中文", content: inputsTwContent },
        { title: "简体中文", content: inputsCnContent },
    ];

    return (
        <div className="referee-home">
            <div className="container train-container">
                <div className="training">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="noticeTitle" sm={2} size="sm" className="modal-form-input-label">
                                {t("admin.event-list.event-date")}:
                            </Label>

                            <Input
                                type="date"
                                onChange={(e) => setDate(e.target.value)}
                                value={date}
                                className="modal-form-input-text"
                            />
                        </FormGroup>
                        <CustomTab content={content} />
                        {/* Select Event Organizations */}
                        <br />
                        <FormGroup>
                            <Label sm={2} size="sm" className="modal-form-input-label">
                                {t("admin.event-list.link")}:
                            </Label>

                            <Input
                                type="link"
                                onChange={(e) => setLink(e.target.value)}
                                value={link}
                                className="modal-form-input-text"
                            />
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
                        <div style={{ display: "flex", width: "100%", justifyContent: "center", gap: "16px" }}>
                            <Button
                                type="button"
                                color="secondary"
                                size="sm"
                                onClick={reset}
                                disabled={loading}
                                style={{ width: "120px" }}
                            >
                                {t("referee.record.reset")}
                            </Button>
                            <Button
                                color="primary"
                                type="submit"
                                size="sm"
                                disabled={loading}
                                style={{ width: "120px" }}
                            >
                                {loading ? t("general.loading") : t("referee.record.submit")}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
