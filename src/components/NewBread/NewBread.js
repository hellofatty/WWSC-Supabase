/** @format */

import "./NewBread.css";
import { useTranslation } from "react-i18next";

import { useLocation, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export default function NewBread() {
    const { t } = useTranslation();
    // const lang = i18n.language;

    const location = useLocation();
    console.log(location);
    let currentLink = "";
    console.log(currentLink);

    let crumbs = location.pathname
        .split("/")
        .filter((crumb) => crumb !== "")
        .map((crumb) => {
            currentLink += `/${crumb}`;

            return (
                <div>
                    <BreadcrumbItem active>
                        /
                        <Link
                            style={{
                                marginLeft: "5px",
                                marginRight: "5px",
                                textDecoration: "none",
                                color: "gray",
                                pointerEvents: "none",
                            }}
                        >
                            {crumb
                                .split("-")
                                .map((word) =>
                                    word === "wwsc" ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1)
                                )
                                .join(" ")}
                        </Link>
                    </BreadcrumbItem>
                </div>
            );
        });

    crumbs.unshift(
        <div>
            <BreadcrumbItem active>
                <Link exact to={"/"} style={{ marginRight: "5px" }}>
                    {t("navbar.home")}
                </Link>
            </BreadcrumbItem>
        </div>
    );

    const display =
        location.pathname !== "/" &&
        !(location.pathname.slice(1).split("/")[1] === "referee-home") &&
        !(location.pathname.slice(1).split("/")[0] === "admin-zone");
    // const display = location.pathname !== "/" && !(location.pathname.slice(1).split("-")[0] === "referee");

    // console.log(location.pathname.slice(1).split("/")[0]);

    return (
        <>
            {display && (
                <div>
                    <Breadcrumb listTag="div" className="bread">
                        {crumbs}
                    </Breadcrumb>
                </div>
            )}
        </>
    );
}
