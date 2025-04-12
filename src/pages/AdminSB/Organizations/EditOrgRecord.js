/** @format */

import "./EditOrgRecord.css";
// import "./AddTrainingRecord.css";

import { toast } from "react-toastify";
import moment from "moment";

import { useEffect, useState } from "react";
import { useCollection } from "../../../hooks/useCollection";
import { Timestamp } from "firebase/firestore";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Checkbox from "@mui/material/Checkbox";

import { useFirestore } from "../../../hooks/useFirestore";
import { useTranslation } from "react-i18next";
// // import CountrySelect from "../../../../components/CountrySelect/CountrySelect";
// import CountryList from "../../../components/CountryList/CountryList";
import CountryListEn from "../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../components/CountryList/CountryListCn";
import CustomTab from "../../../components/CustomTab/CustomTab";
import Select from "react-select";
import SingleDropzone from "../../../components/Dropzone/SingleDropzone";


export default function EditOrgRecord({ org, toggle }) {
    const { t, i18n } = useTranslation("global");
    // const lang = i18n.language;

    console.log(org);
    const { documents: refereeList} = useCollection("users", ["grade", "in", ["3", "4"]], ["refereeId", "asc"]);

    const [users, setUsers] = useState([]);

    // // create user values for react-select
    useEffect(() => {
        if (refereeList) {
            setUsers(
                refereeList.map((user) => {
                    return { value: { ...user, id: user.id }, label: user.name };
                })
            );
        }
    }, [refereeList]);

    const [files, setFiles] = useState([]);

    // const convertedFromDate = moment(org.fromDate.toDate().toLocaleString()).format("yyyy-MM-DD");
    // const convertedToDate = moment(org.toDate.toDate().toLocaleString()).format("yyyy-MM-DD");

    const [name, setName] = useState(org.name);
    const [nameTw, setNameTw] = useState(org.nameTw);
    const [nameCn, setNameCn] = useState(org.nameCn);

    const [orgURL, setOrgURL] = useState(org.orgURL);
    const [orgURL2, setOrgURL2] = useState(org.orgURL2);

    const [city, setCity] = useState(org.city);
    const [cityTw, setCityTw] = useState(org.cityTw);
    const [cityCn, setCityCn] = useState(org.cityCn);
    const [country, setCountry] = useState(org.country);
    const [countryTw, setCountryTw] = useState(org.countryTw);
    const [countryCn, setCountryCn] = useState(org.countryCn);

    const [logoURL, setLogoURL] = useState(org.logoURL);

    const convertedFromDate = org.fromDate!==undefined?moment.utc(org.fromDate.toDate()).format("yyyy-MM-DD"):null;
    const convertedToDate = org.toDate!==undefined?moment.utc(org.toDate.toDate()).format("yyyy-MM-DD"):null;
    const [isAuthorized, setIsAuthorized] = useState(org.isAuthorized);
    const [status, setStatus] = useState(org.status);
    // const [statusTw, setStatusTw] = useState(org.statusTw);
    // const [statusCn, setStatusCn] = useState(org.statusCn);
    const [user, setUser] = useState(org.user);
    // console.log(user);
    const [fromDate, setFromDate] = useState(convertedFromDate);
    const [toDate, setToDate] = useState(convertedToDate);
    const [years, setYears] = useState(org.years);

    const { updateDocument, response } = useFirestore("organizations");

    const showToastMessage = () => {
        toast.success(i18n.t("referee.record.update-success-message"));
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        updateDocument(org.id, {
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
            orgURL2,
            isAuthorized,
            status: status,
            fromDate: Timestamp.fromDate(new Date(fromDate)),
            toDate: Timestamp.fromDate(new Date(toDate)),
            years,
            user,
        });

        response && console.log("response", response);

        showToastMessage();
        toggle();
    };

    // ========= React-Select CustomStyles==========
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

    // console.log(org.user);
    const inputsEngContent = (
        <>
            <FormGroup>
                <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                    Org. Name
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
                    Org. City
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
                    Select Country or Region:
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
                    团体名称
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
                <Form onSubmit={handleUpdate}>
                    <div className="modal-form-input-container">
                        <CustomTab content={content} />
                        <br />
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
                        <SingleDropzone
                            files={files}
                            setFiles={setFiles}
                            id={org.id}
                            fileURL={logoURL}
                            setFileURL={setLogoURL}
                        />
                    </div>

                    <div style={{ width: "150px" }} className="modal-form-action-buttons">
                        <Button variant="contained" color="primary" size="sm" style={{ width: "100%" }}>
                            {t("referee.record.update")}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
