/** @format */

// import { useState } from "react";
import Select from "react-select";
import { countries } from "../../data/countries/countries";
import { countriesTW } from "../../data/countries/countriesTW";
import { countriesCN } from "../../data/countries/countriesCN";
import { useTranslation } from "react-i18next";

// import { Dropdown } from "primereact/dropdown";

function CountryList({ location, setLocation }) {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;

    // const [selectedValue, setSelectedValue] = useState("");
    const CustomStyles = {
        control: (provided) => ({
            ...provided,
            width: "200px",
            borderRadius: "8px",
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

    // console.log(selectedValue.value, selectedValue.label);
    console.log(location);
    return (
        <>
            {lang === "en" && (
                <Select
                    options={countries}
                    styles={CustomStyles}
                    defaultValue={countries[232]}
                    getOptionLabel={(option) => `${option.label} (${option.value})`}
                    onChange={(newValue) => setLocation(newValue)}
                    placeholder={t("referee.record.select-country-label")}
                    autosize={true}
                />
            )}
            {lang === "zh-TW" && (
                <Select
                    options={countriesTW}
                    styles={CustomStyles}
                    defaultValue={countriesTW[232]}
                    getOptionLabel={(option) => `${option.label} (${option.value})`}
                    onChange={(newValue) => setLocation(newValue)}
                    placeholder={t("referee.record.select-country-label")}
                    autosize={true}
                />
            )}
            {lang === "zh-CN" && (
                <Select
                    options={countriesCN}
                    styles={CustomStyles}
                    defaultValue={countriesCN[232]}
                    getOptionLabel={(option) => `${option.label} (${option.value})`}
                    onChange={(newValue) => setLocation(newValue)}
                    placeholder={t("referee.record.select-country-label")}
                    autosize={true}
                />
            )}
            {/* <h1>{selectedValue.label}</h1> */}
        </>
    );
}

export default CountryList;
