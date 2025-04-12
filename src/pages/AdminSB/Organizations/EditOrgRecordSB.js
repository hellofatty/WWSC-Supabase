/** @format */

import { useState} from "react";
import { supabase } from "../../../supabase/supabaseClient";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import moment from "moment";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Checkbox from "@mui/material/Checkbox";
// import Select from "react-select";

// Components
// import SingleDropzoneSB from "../../../components/Dropzone/SingleDropzoneSB";
import CountryListEn from "../../../components/CountryList/CountryListEn";
import CountryListTw from "../../../components/CountryList/CountryListTw";
import CountryListCn from "../../../components/CountryList/CountryListCn";
import CustomTab from "../../../components/CustomTab/CustomTab";

import "./EditOrgRecord.css";

export default function EditOrgRecordSB({ org, toggle }) {
    const { t } = useTranslation();

    const [loading, setLoading] = useState(false);

    // Form state
    const [logoFile, setLogoFile] = useState(null);
    const [name, setName] = useState(org.name);
    const [nameTw, setNameTw] = useState(org.name_tw);
    const [nameCn, setNameCn] = useState(org.name_cn);
    const [orgURL, setOrgURL] = useState(org.org_url);
    const [orgURL2, setOrgURL2] = useState(org.org_url2);
    const [logoURL, setLogoURL] = useState("");

    const [isAuthorized, setIsAuthorized] = useState(org.is_authorized);
    const [status, setStatus] = useState(org.status);
    // const [user, setUser] = useState(org.user);

    const convertedFromDate = org.from_date ? moment.utc(org.from_date).format("yyyy-MM-DD") : null;
    const convertedToDate = org.to_date ? moment.utc(org.to_date).format("yyyy-MM-DD") : null;

    // const [fromDate, setFromDate] = useState(org.from_date ? moment(org.from_date).format("YYYY-MM-DD") : "");
    // const [toDate, setToDate] = useState(org.to_date ? moment(org.to_date).format("YYYY-MM-DD") : "");

    const [fromDate, setFromDate] = useState(convertedFromDate);
    const [toDate, setToDate] = useState(convertedToDate);
    const [years, setYears] = useState(org.years);
    // const [users, setUsers] = useState([]);
    // Modify the state initialization to use org.city
    const [city, setCity] = useState(org.city);
    const [cityTw, setCityTw] = useState(org.city_tw);
    const [cityCn, setCityCn] = useState(org.city_cn);
    // // Convert JSONB to object when initializing state
    const [country, setCountry] = useState(
        org.country_en
            ? {
                  label: org.country_en.label,
                  value: org.country_en.value,
              }
            : null
    );
    const [countryTw, setCountryTw] = useState(
        org.country_tw
            ? {
                  label: org.country_tw.label,
                  value: org.country_tw.value,
              }
            : null
    );
    const [countryCn, setCountryCn] = useState(
        org.country_cn
            ? {
                  label: org.country_cn.label,
                  value: org.country_cn.value,
              }
            : null
    );
    // const [country, setCountry] = useState(null);
    // const [countryTw, setCountryTw] = useState(null);
    // const [countryCn, setCountryCn] = useState(null);

    // // Fetch referees for contact selection
    // useEffect(() => {
    //     const fetchReferees = async () => {
    //         try {
    //             const { data: referees, error } = await supabase
    //                 .from("referees")
    //                 .select("*")
    //                 .in("grade", ["3", "4"])
    //                 .order("referee_id", { ascending: true });

    //             if (error) throw error;

    //             setUsers(
    //                 referees.map((referee) => ({
    //                     value: { ...referee, id: referee.id },
    //                     label: referee.name,
    //                 }))
    //             );
    //         } catch (err) {
    //             console.error("Error fetching referees:", err);
    //             toast.error(t("admin.org-list.fetch-referees-error"));
    //         }
    //     };

    //     fetchReferees();
    // }, [t]);

    // Add this helper function at the top of the component
    const formatCountryData = (countryObj) => {
        if (!countryObj) return null;
        return {
            label: countryObj.label || null,
            value: countryObj.value || null,
        };
    };
    // // Helper function to transform country data
    // const transformCountryData = (countryObj) => {
    //     if (!countryObj) return null;
    //     return {
    //         label: countryObj.label,
    //         value: countryObj.value,
    //     };
    // };

    // Replace the countryData object with this
    const countryData = {
        country_en: formatCountryData(country),
        country_tw: formatCountryData(countryTw),
        country_cn: formatCountryData(countryCn),
    };

    const handleLogoUpload = async (file) => {
        try {
            if (!file) return null;

            const fileExt = file.name?.split('.').pop();
            const fileName = `logo.${fileExt}`;
            const filePath = `${org.id}/${fileName}`;

            // Upload file to Supabase storage
            const { error: uploadError } = await supabase.storage
                .from('org_logos')
                .upload(filePath, file, {
                    cacheControl: '3600',
                    upsert: true
                });

            if (uploadError) throw uploadError;

            // Get public URL
            const { data: { publicUrl } } = supabase.storage
                .from('org_logos')
                .getPublicUrl(filePath);

            return publicUrl;
        } catch (err) {
            console.error('Error uploading logo:', err);
            throw err;
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let updateData = {
                name,
                name_tw: nameTw,
                name_cn: nameCn,
                org_url: orgURL,
                org_url2: orgURL2,
                city_en: city,
                city_tw: cityTw,
                city_cn: cityCn,
                is_authorized: isAuthorized,
                status: status,
                from_date: fromDate ? moment(fromDate).toISOString() : null,
                to_date: toDate ? moment(toDate).toISOString() : null,
                years,
                // user_id: user?.value?.id,
                ...countryData, // Spread the country data
            };

           // Handle logo upload if new file is selected
           if (logoFile) {
            const logoUrl = await handleLogoUpload(logoFile);
            if (logoUrl) {
                updateData.logo_url = logoUrl;
            }
        }

        // Update organization data
        const { error: updateError } = await supabase
            .from('organizations')
            .update(updateData)
            .eq('id', org.id);

        if (updateError) throw updateError;

            toast.success(t("admin.org-list.update-success"));
            toggle();
        } catch (err) {
            console.error("Error updating organization:", err);
            toast.error(t("admin.org-list.update-error"));
        } finally {
            setLoading(false);
        }
    };

    // // ========= React-Select CustomStyles==========
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
                    // defaultValue={org?.city}
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
                    // defaultValue={org.name_tw}
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
                    // defaultValue={org?.city_tw}
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
                    // defaultValue={org?.city_cn}
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

                        {/* Add logo upload section */}
                        <FormGroup>
                            <Label sm={2} size="sm">
                                {t("admin.org-list.logo")}:
                            </Label>
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={handleLogoUpload}
                                className="modal-form-input-file"
                                style={{ fontSize: "0.8rem" }}
                            />
                            <div
                                style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px" }}
                            >
                                {/* <div className="logo-preview">
                                    <p style={{ textIndent: "0", textAlign: "center" }}>original logo</p>
                                    <img
                                        src={org.logo_url}
                                        alt="Logo preview"
                                        style={{
                                            maxWidth: "100px",
                                            maxHeight: "100px",
                                            marginTop: "10px",
                                        }}
                                    />
                                </div> */}

                                {logoURL && (
                                    <div className="logo-preview">
                                        <p style={{ textIndent: "0", textAlign: "center" }}>new logo</p>
                                        <img
                                            src={logoURL}
                                            alt="Logo preview"
                                            style={{
                                                maxWidth: "100px",
                                                maxHeight: "100px",
                                                marginTop: "10px",
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                {t("admin.org-list.orgURL")}
                            </Label>

                            <Input
                                type="text"
                                onChange={(e) => setOrgURL(e.target.value)}
                                value={orgURL || ""}
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
                                value={orgURL2 || ""}
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
                                        value={status || ""}
                                        // defaultValue={"pending"}
                                        style={{ fontSize: "0.8rem", color: "teal" }}
                                    >
                                        <option value="active"> {t("admin.org-list.active")}</option>
                                        <option value="expired"> {t("admin.org-list.expired")}</option>
                                        <option value="pending"> {t("admin.org-list.pending")}</option>
                                        <option value="inactive"> {t("admin.org-list.inactive")}</option>
                                    </Input>
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
                                    <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                        {t("admin.org-list.fromDate")}*:
                                    </Label>

                                    <Input
                                        type="date"
                                        onChange={(e) => setFromDate(e.target.value)}
                                        value={fromDate || ""}
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
                                        value={toDate || ""}
                                        className="modal-form-input-text"
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                        {t("admin.org-list.years")}*:
                                    </Label>

                                    <Input
                                        type="text"
                                        value={years || ""}
                                        onChange={(e) => setYears(e.target.value)}
                                        className="modal-form-input-text"
                                        // style={{ width: "300px" }}
                                    />
                                </FormGroup>
                            </>
                        )}
                        {/* <SingleDropzoneSB
                            files={logoFile}
                            setFiles={setLogoFile}
                            id={org.id}
                            fileURL={logoURL}
                            setFileURL={setLogoURL}
                        /> */}
                    </div>

                    <div style={{ width: "150px" }} className="modal-form-action-buttons">
                        <Button
                            variant="contained"
                            color="primary"
                            size="sm"
                            style={{ width: "100%" }}
                            disabled={loading}
                        >
                            {loading ? t("general.loading") : t("referee.record.update")}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
