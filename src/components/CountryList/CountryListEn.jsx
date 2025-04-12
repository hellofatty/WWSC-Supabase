/** @format */

import Select from "react-select";
import { countries } from "../../data/countries/countries";
import { useTranslation } from "react-i18next";

// import { Dropdown } from "primereact/dropdown";

function CountryListEn({ location, setLocation }) {
    const { t } = useTranslation("global");
    // const lang = i18n.language;

    // const [selectedValue, setSelectedValue] = useState("");
    const CustomStyles = {
        control: (provided) => ({
            ...provided,
            width: "200px",
            borderRadius: "8px",
            boxShadow: "none",
            textAlign: "left",
            fontSize: "0.85rem",
            color:"teal"
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
        <Select
            options={countries}
            styles={CustomStyles}
            defaultValue={countries[232]}
            getOptionLabel={(option) => `${option?.label} (${option?.value})`}
            onChange={(newValue) => setLocation(newValue)}
            placeholder={t("referee.record.select-country-label")}
            className="modal-form-input-text"
            value={countries.filter(function(option) {
                return option?.value === location?.value;
              })}
        />
    );
}

export default CountryListEn;
