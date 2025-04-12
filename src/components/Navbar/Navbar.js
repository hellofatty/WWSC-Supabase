/** @format */

import "./Navbar.css";
// import CustomDrop from "../CustomDrop/CustomDrop";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import { useTranslation } from "react-i18next";
import { useState } from "react";

import {
    AboutUsMenu,
    AdminZoneMenu,
    ContactUsMenu,
    GalleryMenu,
    HomeMenu,
    PlayWiserMenu,
    RefereeZoneMenu,
    WiserInfoMenu,
    WiserSportMenu,
} from "./NavbarContent";
import { useMediaQuery } from "@mui/material";

export default function Navbar() {
    // const { t } = useTranslation("global");
    const [open, setOpen] = useState(false);
    // console.log(open);

    const isSmallScreen = useMediaQuery("(max-width:992px)");
    // const { user } = useAuthContext();
    // console.log(user);

    // const { document: referee } = useDocument("users", user?.uid);

    // if (!referee) {
    //     return <div className="loading">{t("general.loading")}</div>;
    // }

    const clickOpen = () => {
        setOpen(!open);
    };

    const navMenu = (
        <div className="wwsc-navbar">
            <div className="navbar">
                <nav>
                    <ul>
                        <div className="navbar-container">
                            <HomeMenu clickOpen={clickOpen} />
                            {/* ==============ABOUT US ===========*/}
                            <AboutUsMenu clickOpen={clickOpen} />
                            {/* =============WISER SPORT========== */}
                            <WiserSportMenu clickOpen={clickOpen} />
                            {/* =============PLAY WISER========== */}
                            <PlayWiserMenu clickOpen={clickOpen} />
                            {/* =============GALLERY========== */}
                            <GalleryMenu clickOpen={clickOpen} />
                            {/* =============WISER INFO========== */}
                            <WiserInfoMenu clickOpen={clickOpen} />
                            {/* =============REFEREE ZONE========== */}
                            <RefereeZoneMenu clickOpen={clickOpen} />
                            {/* =============CONTACT US========== */}
                            <ContactUsMenu clickOpen={clickOpen} />
                            {/* =============Admin Zone========== */}
                            <AdminZoneMenu clickOpen={clickOpen} />
                        </div>
                    </ul>
                </nav>
            </div>
   
        </div>
    );

    const navMenuSmall = (
        <div className="wwsc-navbar-sm">
            {open ? (
                <div className="navbar-sm">
                    <nav>
                        <ul style={{marginLeft:"0", paddingLeft:"0"}}>
                            <div className="navbar-container-sm">
                                <HomeMenu clickOpen={clickOpen} />
                                {/* ==============ABOUT US ===========*/}
                                <AboutUsMenu clickOpen={clickOpen} />
                                {/* =============WISER SPORT========== */}
                                <WiserSportMenu clickOpen={clickOpen} />
                                {/* =============PLAY WISER========== */}
                                <PlayWiserMenu clickOpen={clickOpen} />
                                {/* =============GALLERY========== */}
                                <GalleryMenu clickOpen={clickOpen} />
                                {/* =============WISER INFO========== */}
                                <WiserInfoMenu clickOpen={clickOpen} />
                                {/* =============REFEREE ZONE========== */}
                                <RefereeZoneMenu clickOpen={clickOpen} />
                                {/* =============CONTACT US========== */}
                                <ContactUsMenu clickOpen={clickOpen} />
                                {/* =============Admin Zone========== */}
                                <AdminZoneMenu clickOpen={clickOpen} />
                            </div>
                        </ul>
                    </nav>
                </div>
            ) : null}

            <div className="menu-close-icon-container">
                {!open && (
                    <span className="menu-icon" onClick={clickOpen}>
                        <MenuIcon fontSize="medium" />
                    </span>
                )}
                {open && (
                    <span className="close-icon" onClick={clickOpen}>
                        <CloseIcon fontSize="medium" />
                    </span>
                )}
            </div>
        </div>
    );
    return !isSmallScreen? navMenu : navMenuSmall;
}
