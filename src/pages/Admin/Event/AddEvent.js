/** @format */

import "./AddEvent.css";

import { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { toast } from "react-toastify";
import { useFirestore } from "../../../hooks/useFirestore";
import { useTranslation } from "react-i18next";
import { useCollection } from "../../../hooks/useCollection";
import Select from "react-select";

import CountryListEn from "../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../components/CountryList/CountryListCn";
import CustomTab from "../../../components/CustomTab/CustomTab";

export default function AddEvent({ toggle }) {
    const { t, i18n } = useTranslation("global");
    // const lang = i18n.language;

    const { documents: orgList, error } = useCollection("organizations");

    const [orgs, setOrgs] = useState([]);

    // let arrOrgList = Array.from(orgList);
    console.log(orgList);

    useEffect(() => {
        if (orgList) {
            setOrgs(
                orgList.map((org, id) => {
                    return {
                        value: { ...org, id: org.id },
                        label: org.name,
                    };
                })
            );
        }
    }, [orgList]);

    console.log(orgs);

    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [nameTw, setNameTw] = useState("");
    const [nameCn, setNameCn] = useState("");
    const [desc, setDesc] = useState("");
    const [descTw, setDescTw] = useState("");
    const [descCn, setDescCn] = useState("");
    const [org, setOrg] = useState("");
    const [link, setLink] = useState("");
    const [city, setCity] = useState("");
    const [cityTw, setCityTw] = useState("");
    const [cityCn, setCityCn] = useState("");
    const [country, setCountry] = useState("");
    const [countryTw, setCountryTw] = useState("");
    const [countryCn, setCountryCn] = useState("");
    const [note, setNote] = useState("");
    // const [files, setFiles] = useState([]);

    const { addDocument, response } = useFirestore("events");

  

    const showToastMessage = () => {
        toast.success(i18n.t("admin.notice-form.add-success-message"));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        addDocument({
            date: Timestamp.fromDate(new Date(date)),
            name,
            nameTw,
            nameCn,
            desc,
            descTw,
            descCn,
            link,
            org,
            city: city,
            cityTw: cityTw,
            cityCn: cityCn,
            country,
            countryTw,
            countryCn,
            year: new Date(date).getFullYear().toString(),
            month: new Date(date).toLocaleString("default", { month: "long" }),
            note,
        });

        reset();
        showToastMessage();
        toggle();
    };

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

    useEffect(() => {
        console.log("response", response.success);
        if (response.success) {
            setDate("");
            setName("");
            setNameTw("");
            setNameCn("");
            setDesc("");
            setDescTw("");
            setDescCn("");
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
        }
    }, [response.success]);

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
                    getOptionLabel={(option) => option.value?.nameTw}
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
                    value={city}
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
                    getOptionLabel={(option) => option.value?.nameCn}
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
                    value={city}
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
                    {error && <p>{error}</p>}
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
                                style={{ width: "120px" }}
                            >
                                {t("referee.record.reset")}
                            </Button>
                            <Button color="primary" type="submit" size="sm" style={{ width: "120px" }}>
                                {t("referee.record.submit")}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
