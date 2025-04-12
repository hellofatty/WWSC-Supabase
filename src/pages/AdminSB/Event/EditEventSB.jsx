/** @format */

import "./AddEventSB.css";

import { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { toast } from "react-toastify";
import moment from "moment";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import { supabase } from "../../../supabase/supabaseClient";
import CountryListEn from "../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../components/CountryList/CountryListCn";
import CustomTab from "../../../components/CustomTab/CustomTab";
import { useNavigate } from 'react-router-dom';


export default function EditEventSB({ event, toggle }) {
    const navigate = useNavigate();
    const { t } = useTranslation("global");
    const [loading, setLoading] = useState(false);
    const [orgs, setOrgs] = useState([]);

    // Form states
    const [date, setDate] = useState(moment(event.date).format("YYYY-MM-DD"));
    const [name, setName] = useState(event.name || '');
    const [nameTw, setNameTw] = useState(event.name_tw || '');
    const [nameCn, setNameCn] = useState(event.name_cn || '');
    const [desc, setDesc] = useState(event.desc || '');
    const [descTw, setDescTw] = useState(event.desc_tw || '');
    const [descCn, setDescCn] = useState(event.desc_cn || '');
    // const [orgId, setOrgId] = useState(event.org_id);
    const [org, setOrg] = useState(
            event.org_id
                ? {
                      value: event.org_id,
                      label: event.org?.name,
                      labelTw: event.org?.name_tw,
                      labelCn: event.org?.name_cn,
                  }
                : null
        );
    const [link, setLink] = useState(event.link);
    const [city, setCity] = useState(event.city);
    const [cityTw, setCityTw] = useState(event.city_tw);
    const [cityCn, setCityCn] = useState(event.city_cn);
    const [note, setNote] = useState(event.note);
    const [country, setCountry] = useState(
            event.country_en
                ? {
                      label: event.country_en.label,
                      value: event.country_en.value,
                  }
                : null
        );
        const [countryTw, setCountryTw] = useState(
            event.country_tw
                ? {
                      label: event.country_tw.label,
                      value: event.country_tw.value,
                  }
                : null
        );
        const [countryCn, setCountryCn] = useState(
            event.country_cn
                ? {
                      label: event.country_cn.label,
                      value: event.country_cn.value,
                  }
                : null
        );

    // Fetch organizations
    useEffect(() => {
        const fetchOrgs = async () => {
            const { data, error } = await supabase
                .from('organizations')
                .select('id, name, name_tw, name_cn')
                .order('name');

            if (error) {
                console.error('Error fetching organizations:', error);
                return;
            }

            setOrgs(data.map(org => ({
                value: org.id,
                label: org.name,
                labelTw: org.name_tw,
                labelCn: org.name_cn,
            })));
        };

        fetchOrgs();
    }, []);

     // Add Supabase realtime subscription
     useEffect(() => {
        const subscription = supabase
            .channel('events_changes')
            .on('postgres_changes', 
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'events',
                    filter: `id=eq.${event.id}`
                },
                (payload) => {
                    // Refresh the page when this event is updated
                    window.location.reload();
                }
            )
            .subscribe();

        // Cleanup subscription
        return () => {
            subscription.unsubscribe();
        };
    }, [event.id]);


    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('events')
                .update({
                    date: moment(date).toISOString(),
                    name: name?.trim(),
                    name_tw: nameTw?.trim(),
                    name_cn: nameCn?.trim(),
                    desc: desc?.trim(),
                    desc_tw: descTw?.trim(),
                    desc_cn: descCn?.trim(),
                    link: link?.trim(),
                    org_id: org?.value,
                    country_en: country,
                    country_tw: countryTw,
                    country_cn: countryCn,
                    city: city?.trim(),
                    city_tw: cityTw?.trim(),
                    city_cn: cityCn?.trim(),
                    year: moment(date).year().toString(),
                    month: moment(date).format('MMMM'),
                    note: note?.trim(),
                    updated_at: new Date().toISOString()
                })
                .eq('id', event.id);

            if (error) throw error;

            toast.success(t("admin.event-list.update-success"));
            toggle();

             // Option 1: Soft refresh using React Router
             navigate(0);
            
             // Option 2: Use window.location.reload() for hard refresh
            // window.location.reload();
            
        } catch (error) {
            console.error('Error updating event:', error);
            toast.error(t("admin.event-list.update-error"));
        } finally {
            setLoading(false);
        }
    };

    

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
                    value={orgs.filter(function (option) {
                        return option.value === org?.value;
                    })}
                />
            </FormGroup>

            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    Event city:
                </Label>

                <Input
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
                    <CountryListEn setLocation={setCountry} location={country} />
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
                    onChange={(newValue) => setOrg(newValue)}
                    className="modal-form-input-text"
                    value={orgs.filter(function (option) {
                        return option?.value === org?.value;
                    })}
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    選擇活動所在城市:
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
                    選擇活動所在國家:
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
                    getOptionLabel={(option) => option.labelCn}
                    onChange={(newValue) => setOrg(newValue)}
                    className="modal-form-input-text"
                    value={orgs.filter(function (option) {
                        return option.value === org?.value;
                    })}
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" className="modal-form-input-label">
                    选择活动所在城市:
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
                    <Form>
                        <FormGroup>
                            <Label htmlFor="noticeTitle" sm={2} size="sm">
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

                        <FormGroup>
                            <Label sm={2} size="sm">
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
                        </FormGroup>

                        {/* <Dropzone files={files} setFiles={setFiles} /> */}

                        <div style={{ margin: "auto", width: "150px" }}>
                            <Button
                                color="primary"
                                size="sm"
                                onClick={handleUpdate}
                                style={{ width: "100%", marginTop: "30px" }}
                                disabled={loading}
                            >
                                  {loading ? t("general.loading") : t("referee.class.update")}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
