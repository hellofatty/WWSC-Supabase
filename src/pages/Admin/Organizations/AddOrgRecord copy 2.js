/** @format */

import "./AddOrgRecord.css";

import { useState, useEffect } from "react";
import { useCollection } from "../../../hooks/useCollection";
import { Timestamp } from "firebase/firestore";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { toast } from "react-toastify";
import { useFirestore } from "../../../hooks/useFirestore";
import { useTranslation } from "react-i18next";
import CountryListEn from "../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../components/CountryList/CountryListCn";
import CustomTab from "../../../components/CustomTab/CustomTab";

import Select from "react-select";
import Checkbox from "@mui/material/Checkbox";


// ===========Create AddOrgRecord Component============

export default function AddOrgRecord({ toggle }) {
    const { t, i18n } = useTranslation("global");
    // const lang = i18n.language;

    // create org. contact for react-select
    const { documents: refereeList, error } = useCollection("users", ["grade", "in", ["3", "4"]], ["refereeId", "asc"]);

    // console.log(typeof refereeList);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (refereeList) {
            setUsers(
                refereeList.map((user) => {
                    return { value: { ...user, id: user.id }, label: user.name };
                })
            );
        }
    }, [refereeList]);
    console.log(users);

  
    // ----------Create fields in Firestore organizations collection---

    const [name, setName] = useState("");
    const [nameTw, setNameTw] = useState("");
    const [nameCn, setNameCn] = useState("");
    const [orgURL, setOrgURL] = useState("");
    const [orgURL2, setOrgURL2] = useState("");

    const [city, setCity] = useState("");
    const [cityTw, setCityTw] = useState("");
    const [cityCn, setCityCn] = useState("");
    const [country, setCountry] = useState("");
    const [countryTw, setCountryTw] = useState("");
    const [countryCn, setCountryCn] = useState("");

    const [logoURL, setLogoURL] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);

    const [status, setStatus] = useState("");
    const [user, setUser] = useState(null);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [years, setYears] = useState("");

    const { addDocument, response } = useFirestore("organizations");

    const showToastMessage = () => {
        toast.success(i18n.t("referee.record.add-success-message"));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addDocument({
            name,
            nameTw,
            nameCn,
            orgURL,
            city,
            cityTw,
            cityCn,
            country,
            countryTw,
            countryCn,
            logoURL,
            isAuthorized,
            orgURL2,
            status,
            fromDate: Timestamp.fromDate(new Date(fromDate)),
            toDate: Timestamp.fromDate(new Date(toDate)),
            years,
            user,
        });

        reset();
        showToastMessage();
        toggle();
    };

    const reset = () => {
        setName("");
        setNameTw("");
        setNameCn("");
        setOrgURL("");
        setOrgURL2("");
        setCity("");
        setCityTw("");
        setCityCn("");
        setCountry("");
        setCountryTw("");
        setCountryCn("");
        setLogoURL("");
        setIsAuthorized(false);
        setStatus("");
        setFromDate("");
        setToDate("");
        setYears("");
        setUser(null);
    };

    useEffect(() => {
        console.log("response", response?.success);
        if (response?.success) {
            setName("");
            setNameTw("");
            setNameCn("");
            setOrgURL("");
            setOrgURL2("");
            setCity("");
            setCityTw("");
            setCityCn("");
            setCountry("");
            setCountryTw("");
            setCountryCn("");
            setLogoURL("");
            setIsAuthorized(false);
            setStatus("");
            setFromDate("");
            setToDate("");
            setYears("");
            setUser(null);
        }
    }, [response?.success]);

    //========= React-Select CustomStyles==========
    const CustomStyles = {
        control: (provided) => ({
            ...provided,
            width: "200px",

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

    console.log(status);

    const inputsEngContent = (
        <>
            <FormGroup>
                <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                    The name of organization*:
                </Label>

                <Input
                    required
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                    Enter the city where the organization is located:
                </Label>

                <Input
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                    Select the country or region where the organization is located:
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
                <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                    團體名稱*:
                </Label>

                <Input
                    required
                    type="text"
                    onChange={(e) => setNameTw(e.target.value)}
                    value={nameTw}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
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
                <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                    選擇團體所在國家或地區:
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
                <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                    团体名称*:
                </Label>

                <Input
                    required
                    type="text"
                    onChange={(e) => setNameCn(e.target.value)}
                    value={nameCn}
                    className="modal-form-input-text"
                />
            </FormGroup>
            <FormGroup>
                <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
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
                <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                    选择团体所在国家或地区:
                </Label>

                <div className="country-select-input">
                    <CountryListCn setLocation={setCountryCn} location={countryCn} />
                </div>
            </FormGroup>
        </>
    );

    const content = [
        { title: "English（英文）", content: inputsEngContent },
        { title: "繁體中文", content: inputsTwContent },
        { title: "简体中文", content: inputsCnContent },
    ];

    return (
        <div className="referee-home">
            <div className="container train-container">
                {/* {error && <p>{error}</p>} */}
                <Form onSubmit={handleSubmit}>
                    {error && <p>{error}</p>}
                    <div className="modal-form-input-container">
                        <CustomTab content={content} />
                        <FormGroup>
                            <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                {t("admin.org-list.orgURL")}
                            </Label>

                            <Input
                                type="text"
                                onChange={(e) => setOrgURL(e.target.value)}
                                value={orgURL}
                                className="modal-form-input-text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                {t("admin.org-list.orgURL2")}
                            </Label>

                            <Input
                                type="text"
                                onChange={(e) => setOrgURL2(e.target.value)}
                                value={orgURL2}
                                className="modal-form-input-text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <div>
                                <Label htmlFor="isAuthroized" sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                    {t("admin.org-list.isAuthorized")}*:
                                </Label>
                                <br />
                                <Checkbox
                                    checked={isAuthorized}
                                    onChange={(e) => setIsAuthorized(e.target.checked)}
                                    inputProps={{ "aria-label": "controlled" }}
                                />
                            </div>
                        </FormGroup>
                        {isAuthorized && (
                            <>
                                 <FormGroup>
                            <Label htmlFor="orgStatus" sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                {t("admin.org-list.status")}*:
                            </Label>

                            <Input
                                type="select"
                                id="orgStatus"
                                name="status"
                                onChange={(e) => setStatus(e.target.value)}
                                value={status}
                                // defaultValue={"pending"}
                                style={{ fontSize: "0.8rem", color: "teal" }}
                            >
                                <option value="active"> {t("admin.org-list.active")}</option>
                                <option value="expired"> {t("admin.org-list.expired")}</option>
                                <option value="pending"> {t("admin.org-list.pending")}</option>
                                <option value="inactive"> {t("admin.org-list.inactive")}</option>
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                {t("admin.org-list.contact")}*:
                            </Label>
                            <Select
                                options={users}
                                getOptionLabel={(option) => `${option.label} (${option.value.refereeId})`}
                                onChange={(newValue) => setUser(newValue)}
                                styles={CustomStyles}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                {t("admin.org-list.fromDate")}*:
                            </Label>

                            <Input
                                type="date"
                                onChange={(e) => setFromDate(e.target.value)}
                                value={fromDate}
                                className="modal-form-input-text"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                {t("admin.org-list.toDate")}*:
                            </Label>

                            <Input
                                type="date"
                                onChange={(e) => setToDate(e.target.value)}
                                value={toDate}
                                className="modal-form-input-text"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                {t("admin.org-list.years")}*:
                            </Label>

                            <Input
                                type="text"
                                value={years}
                                onChange={(e) => setYears(e.target.value)}
                                className="modal-form-input-text"
                                // style={{ width: "300px" }}
                            />
                        </FormGroup>
                            </>
                        )}
                        
                    </div>
                    <div style={{ display: "flex", width: "100%", justifyContent: "center", gap: "16px" }}>
                        <Button type="button" color="secondary" size="sm" onClick={reset} style={{ width: "120px" }}>
                            {t("referee.record.reset")}
                        </Button>
                        <Button color="primary" type="submit" size="sm" style={{ width: "120px" }}>
                            {t("referee.record.submit")}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
