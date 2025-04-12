/** @format */

import "./RefereeListPublic.css";
// import { useCollection } from "../../../hooks/useCollection";

// ---------Material UI-------
import SearchIcon from "@mui/icons-material/Search";

import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ViewRefereeInfo from "./ViewRefereeInfo";
import { useCollection } from "../../../hooks/useCollection";

export default function RefereeListPublic() {
    // All referees

    const { t } = useTranslation("global");

    const [query, setQuery] = useState("");
    const { documents: refereeList, error} = useCollection(
        "users",
        ["grade", "in", ["3", "4"]],
        ["refereeId", "asc"]
    );
        
    // const keys = ["name", "otherName", "refereeId", "grade", "status"];

    // console.log(user);

    return (
        <>
            <div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div className="page-primary-title">{t("referee.search-title")}</div>
                <span className="searchbar-text">{t("admin.referee-list.search")}</span>
                <div className="searchbar-public">
                    <Tooltip title={t("admin.referee-list.search")}>
                        <SearchIcon className="searchIcon-public" />
                    </Tooltip>{" "}
                    <input
                        // placeholder={t("admin.referee-list.search")}
                        className="searchInput-public"
                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                        style={{color:"teal"}}
                    />
                </div>

              <br></br>
                {refereeList &&
                    refereeList
                        .filter((referee) => {
                            return query.toLowerCase() === ""
                                ? null
                                : referee.refereeId.toLowerCase().includes(query) ||
                                      referee.name.toLowerCase().includes(query) ||
                                      referee.displayName.toLowerCase().includes(query) ||
                                      referee.otherName.toLowerCase().includes(query) ||
                                      referee.status.toLowerCase().includes(query);
                        })
                        .map((referee, index) => (
                            <div key={index} style={{ marginTop: "12px" }}>
                                <ViewRefereeInfo referee={referee} />
                            </div>
                        ))}
            </div>
        </>
    );
}
