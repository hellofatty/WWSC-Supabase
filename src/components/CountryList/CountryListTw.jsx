/** @format */

import Select from "react-select";
import { countriesTW } from "../../data/countries/countriesTW";
import { useTranslation } from "react-i18next";

// import { Dropdown } from "primereact/dropdown";

function CountryListTw({ location, setLocation }) {
    const { t } = useTranslation("global");

    // const [selectedValue, setSelectedValue] = useState("");
    const CustomStyles = {
        control: (provided) => ({
            ...provided,
            width: "200px",
            borderRadius: "8px",
            boxShadow: "none",
            textAlign: "left",
            fontSize: "0.85rem",
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
            options={countriesTW}
            styles={CustomStyles}
            // defaultValue={countriesTW[232]}
            getOptionLabel={(option) => `${option?.label} (${option?.value})`}
            onChange={(newValue) => setLocation(newValue)}
            placeholder={t("referee.record.select-country-label")}
            className="modal-form-input-text"
            // value={{ label:`${location?.label} (${location?.value})` }}
            value={countriesTW.filter(function(option) {
                return option?.value === location?.value;
              })}
        />
    );
}

export default CountryListTw;
