/** @format */

import "./AddOrgRecord.css";
// Add this import at the top
import moment from "moment";
import { useState} from "react";
import { supabase } from "../../../supabase/supabaseClient";
import { Button, Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";
import CountryListEn from "../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../components/CountryList/CountryListCn";
import CustomTab from "../../../components/CustomTab/CustomTab";
// import Select from "react-select";
import { Checkbox } from "@mui/material";

// ===========Create AddOrgRecord Component============

export default function AddOrgRecordSB({ toggle }) {
    const { t } = useTranslation("global");
    const [isPending, setIsPending] = useState(false);
    // const [users, setUsers] = useState([]);

    // Fetch referees for contact selection
    // useEffect(() => {
    //     const fetchReferees = async () => {
    //         const { data, error } = await supabase
    //             .from("referees")
    //             .select("*")
    //             .in("grade", ["3", "4"])
    //             .order("referee_id", { ascending: true });

    //         if (error) {
    //             console.error("Error fetching referees:", error);
    //             return;
    //         }

    //         setUsers(
    //             data.map((user) => ({
    //                 value: { ...user, id: user.id },
    //                 label: user.name,
    //             }))
    //         );
    //     };

    //     fetchReferees();
    // }, []);

    // ----------Create fields in Firestore organizations collection---
    // Form states
    // const [logoFile, setLogoFile] = useState(null);
    const [name, setName] = useState("");
    const [nameTw, setNameTw] = useState("");
    const [nameCn, setNameCn] = useState("");
    const [orgURL, setOrgURL] = useState("");
    const [orgURL2, setOrgURL2] = useState("");
    // const [logoURL, setLogoURL] = useState("");

    const [isAuthorized, setIsAuthorized] = useState(false);
    const [status, setStatus] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [years, setYears] = useState("");
    // const [user, setUser] = useState(null);
    const [city, setCity] = useState("");
    const [cityTw, setCityTw] = useState("");
    const [cityCn, setCityCn] = useState("");

    const [country, setCountry] = useState(null);
    const [countryTw, setCountryTw] = useState(null);
    const [countryCn, setCountryCn] = useState(null);

    // Add this helper function at the top of the component
    const formatCountryData = (countryObj) => {
        if (!countryObj) return null;
        return {
            label: countryObj.label || null,
            value: countryObj.value || null,
        };
    };

    // Replace the countryData object with this
    const countryData = {
        country_en: formatCountryData(country),
        country_tw: formatCountryData(countryTw),
        country_cn: formatCountryData(countryCn),
    };

    // const handleLogoChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         if (file.size > 2000000) {
    //             toast.error(t("admin.org-list.file-too-large"));
    //             return;
    //         }

    //         // Validate file type
    //         const validTypes = ["image/jpeg", "image/png", "image/gif"];
    //         if (!validTypes.includes(file.type)) {
    //             toast.error(t("admin.org-list.invalid-file-type"));
    //             return;
    //         }

    //         setLogoFile(file);
    //         setLogoURL(URL.createObjectURL(file));
    //     }
    // };

    // useEffect(() => {
    //     // Cleanup preview URL when component unmounts
    //     return () => {
    //         if (logoURL) {
    //             URL.revokeObjectURL(logoURL);
    //         }
    //     };
    // }, [logoURL]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true);

        try {
            // Prepare organization data
            const orgData = {
                name: name?.trim(),
                name_tw: nameTw?.trim(),
                name_cn: nameCn?.trim(),
                org_url: orgURL?.trim(),
                org_url2: orgURL2?.trim(),
                city_en: city?.trim(),
                city_tw: cityTw?.trim(),
                city_cn: cityCn?.trim(),
                is_authorized: isAuthorized? isAuthorized : false,
                status: isAuthorized ? status : "pending",
                from_date: fromDate ? moment(fromDate).toISOString() : null,
                to_date: toDate ? moment(toDate).toISOString() : null,
                years: years || null,
                // user_id: user?.value?.id || null,
                ...countryData,
            };

            // 1. Create organization record
            const { error: orgError } = await supabase
            .from("organizations")
            .insert(orgData)
          
            
            // const { data: org, error: orgError } = await supabase
            //     .from("organizations")
            //     .insert(orgData)
            //     .select()
            //     .single();

            if (orgError) throw orgError;

            // 2. Upload logo if provided
            // if (logoFile) {
            //     const fileExt = logoFile.name.split(".").pop();
            //     const filePath = `${org.id}/logo.${fileExt}`;

            //     const { error: uploadError } = await supabase.storage.from("org_logos").upload(filePath, logoFile, {
            //         cacheControl: "3600",
            //         upsert: true,
            //     });

            //     if (uploadError) throw uploadError;

            //     // 3. Get public URL and update organization record
            //     const { data: urlData } = supabase.storage
            //         .from("org_logos")
            //         .getPublicUrl(filePath);

            //     if (!urlData?.publicUrl) {
            //         throw new Error("Failed to get logo URL");
            //     }

                // if (urlData?.publicUrl) {
                //     orgData.logo_url = urlData.publicUrl;
                // }

            //     const { error: updateError } = await supabase
            //         .from("organizations")
            //         .update({ logo_url: urlData.publicUrl })
            //         .eq("id", org.id);

            //     if (updateError) throw updateError;
            // }

            toast.success(t("admin.org-list.add-success-message"));
            reset();
            toggle();
        } catch (error) {
            console.error("Error adding organization:", error);
            toast.error(t("admin.org-list.add-error-message"));
        } finally {
            setIsPending(false);
        }
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

        // setLogoURL("");
        setIsAuthorized(false);
        setStatus("");
        setFromDate("");
        setToDate("");
        setYears("");
        // setUser(null);
    };

    //========= React-Select CustomStyles==========
    // const CustomStyles = {
    //     control: (provided) => ({
    //         ...provided,
    //         width: "200px",

    //         borderRadius: "5px",
    //         boxShadow: "none",
    //         textAlign: "left",
    //         fontSize: "0.8rem",
    //     }),
    //     option: (provided, state) => ({
    //         ...provided,
    //         color: state.isSelected ? "white" : "teal",
    //         backgroundColor: state.isSelected ? "teal" : "white",
    //         fontSize: "0.8rem",
    //     }),
    // };

    // console.log(status);

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
                <Form onSubmit={handleSubmit}>
                    <CustomTab content={content} />
                    <div className="modal-form-input-container">
                        {/* Add logo upload section before CustomTab */}
                        {/* <FormGroup>
                            <Label sm={2} size="sm">
                                {t("admin.org-list.logo")}:
                            </Label>
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={handleLogoChange}
                                className="modal-form-input-file"
                            />
                            {logoURL && (
                                <div className="logo-preview">
                                    <img
                                        src={logoURL}
                                        alt="Logo preview"
                                        style={{
                                            maxWidth: "200px",
                                            maxHeight: "200px",
                                            marginTop: "10px",
                                        }}
                                    />
                                </div>
                            )}
                        </FormGroup> */}

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
                        {/* <FormGroup>
                            <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                {t("admin.org-list.contact")}*:
                            </Label>
                            <Select
                                options={users}
                                getOptionLabel={(option) => `${option.label} (${option.value.referee_id})`}
                                onChange={(newValue) => setUser(newValue)}
                                styles={CustomStyles}
                            />
                        </FormGroup> */}
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

                                <Row>
                                    <Col md={6}>
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
                                    </Col>
                                    <Col md={6}>
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
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
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
                                    </Col>
                                </Row>
                            </>
                        )}
                    </div>
                    <div style={{ display: "flex", width: "100%", justifyContent: "center", gap: "16px" }}>
                        <Button
                            type="button"
                            color="secondary"
                            size="sm"
                            onClick={reset}
                            style={{ width: "120px" }}
                            disabled={isPending}
                        >
                            {t("referee.record.reset")}
                        </Button>
                        <Button color="primary" size="sm" style={{ width: "120px" }} disabled={isPending}>
                            {isPending ? t("general.loading") : t("referee.record.submit")}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
