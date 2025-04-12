/** @format */

import "./AddEvent.css";

import { useState, useEffect } from "react";
import { useCollection } from "../../../hooks/useCollection";
import { Timestamp } from "firebase/firestore";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { toast } from "react-toastify";
import moment from "moment";
import { useFirestore } from "../../../hooks/useFirestore";
import { useTranslation } from "react-i18next";
// import Dropzone from "../../../components/Dropzone/Dropzone";
import Select from "react-select";
import CountryListEn from "../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../components/CountryList/CountryListCn";
import CustomTab from "../../../components/CustomTab/CustomTab";

export default function EditEvent({ event, toggle }) {
    const { t, i18n } = useTranslation("global");
    // const lang = i18n.language;

    console.log(event.id);

    const { documents: orgList, error } = useCollection("organizations");
    // console.log(orgList);

    const [orgs, setOrgs] = useState([]);

    useEffect(() => {
        if (orgList) {
            setOrgs(
                orgList.map((org) => {
                    return {
                        value: { ...org, id: org.id },
                        label: org.name,
                    };
                })
            );
        }
    }, [orgList]);

    // const [files, setFiles] = useState([]);

    const convertedDate = moment.utc(event.date.toDate()).format("yyyy-MM-DD");
    const [date, setDate] = useState(convertedDate);
    const [name, setName] = useState(event.name);
    const [nameTw, setNameTw] = useState(event.nameTw);
    const [nameCn, setNameCn] = useState(event.nameCn);
    const [desc, setDesc] = useState(event.desc);
    const [descTw, setDescTw] = useState(event.descTw);
    const [descCn, setDescCn] = useState(event.descCn);
    const [org, setOrg] = useState(event.org);
    const [link, setLink] = useState(event.link);
    const [country, setCountry] = useState(event.country);
    const [countryTw, setCountryTw] = useState(event.countryTw);
    const [countryCn, setCountryCn] = useState(event.countryCn);
    const [city, setCity] = useState(event.city);
    const [cityTw, setCityTw] = useState(event.cityTw);
    const [cityCn, setCityCn] = useState(event.cityCn);
    const [note, setNote] = useState(event.note);

    const { updateDocument, response } = useFirestore(`events`);

    const showToastMessage = () => {
        toast.success(i18n.t("admin.event-list.update-success-message"));
    };

    const handleUpdate = () => {
        updateDocument(event.id, {
            date: Timestamp.fromDate(new Date(date)),
            name,
            nameTw,
            nameCn,
            desc,
            descTw,
            descCn,
            link,
            org,
            country,
            countryTw,
            countryCn,
            city,
            cityTw,
            cityCn,
            year: new Date(date).getFullYear().toString(),
            month: new Date(date).toLocaleString("default", { month: "long" }),
            note,
        });

        console.log("response", response);
        showToastMessage();
        toggle();
    };

    if (error) {
        return <div className="error">{error}</div>;
    }
    if (!orgList) {
        return <div className="loading">{t("general.loading")}</div>;
    }

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
                        return option.label === org.label;
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
                    getOptionLabel={(option) => option.value?.nameTw}
                    onChange={(newValue) => setOrg(newValue)}
                    className="modal-form-input-text"
                    value={orgs.filter(function (option) {
                        return option.value.nameTw === org.value?.nameTw;
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
                    getOptionLabel={(option) => option.value.nameCn}
                    onChange={(newValue) => setOrg(newValue)}
                    className="modal-form-input-text"
                    value={orgs.filter(function (option) {
                        return option.value.nameCn === org.value?.nameCn;
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
                            >
                                {t("referee.class.update")}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
