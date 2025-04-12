/** @format */

import "./EditOrgRecord.css";
// import "./AddTrainingRecord.css";

import { toast } from "react-toastify";
import moment from "moment";

import { useState, useEffect } from "react";
import { useCollection } from "../../../hooks/useCollection";
import { Timestamp } from "firebase/firestore";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Checkbox from "@mui/material/Checkbox";

import { useFirestore } from "../../../hooks/useFirestore";
import { useTranslation } from "react-i18next";

import Select from "react-select";

export default function EditAuthOrgRecord({ org, toggle }) {
    const { t, i18n } = useTranslation("global");
    // const lang = i18n.language;

    console.log(org);
    const { documents: refereeList, error } = useCollection("users", ["grade", "in", ["3", "4"]], ["refereeId", "asc"]);

    const [users, setUsers] = useState([]);

    // create user values for react-select
    useEffect(() => {
        if (refereeList) {
            setUsers(
                refereeList.map((user) => {
                    return { value: { ...user, id: user.id }, label: user.name };
                })
            );
        }
    }, [refereeList]);

    // const [files, setFiles] = useState([]);

    const convertedFromDate =
        org.fromDate !== undefined ? moment.utc(org.fromDate.toDate()).format("yyyy-MM-DD") : null;
    const convertedToDate = org.toDate !== undefined ? moment.utc(org.toDate.toDate()).format("yyyy-MM-DD") : null;
    const [isAuthorized, setIsAuthorized] = useState(org.isAuthorized);
    const [status, setStatus] = useState(org.status);
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

    // console.log(isAuthorized);

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

    return (
        <div className="referee-home">
            <div className="container train-container">
                {error && <p>{error}</p>}
                <Form onSubmit={handleUpdate}>
                    <div className="modal-form-input-container">
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
