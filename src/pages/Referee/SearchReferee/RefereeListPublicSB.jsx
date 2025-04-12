/** @format */

import "./RefereeListPublic.css";
import { useState, useEffect } from "react";
import { supabase } from "../../../supabase/supabaseClient";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";
import ViewRefereeInfoSB from "./ViewRefereeInfoSB";

export default function RefereeListPublicSB() {
    const { t } = useTranslation("global");
    const [query, setQuery] = useState("");
    const [refereeList, setRefereeList] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch referees from Supabase
    useEffect(() => {
        const fetchReferees = async () => {
            try {
                const { data, error } = await supabase
                    .from("referees")
                    .select("*")
                    .in("grade", ["3", "4"])
                    .order("referee_id", { ascending: true });

                if (error) throw error;

                setRefereeList(data);
            } catch (err) {
                console.error("Error fetching referees:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReferees();
    }, []);

    return (
        <>
            <div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {loading && <p>{t("general.loading")}</p>}
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
                        style={{ color: "teal" }}
                    />
                </div>

                <br></br>
                {refereeList &&
                    refereeList
                        .filter((referee) => {
                            return query.toLowerCase() === ""
                                ? null
                                : referee.referee_id.toLowerCase().includes(query) ||
                                      referee.name.toLowerCase().includes(query) ||
                                      referee.display_name.toLowerCase().includes(query) ||
                                      referee.other_name.toLowerCase().includes(query) ||
                                      referee.status.toLowerCase().includes(query);
                        })
                        .map((referee, index) => (
                            <div key={index} style={{ marginTop: "12px" }}>
                                <ViewRefereeInfoSB referee={referee} />
                            </div>
                        ))}
            </div>
        </>
    );
}
