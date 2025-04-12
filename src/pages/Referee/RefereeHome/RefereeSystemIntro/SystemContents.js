/** @format */
import { Link } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LoginIcon from "@mui/icons-material/Login";
import LooksOneRoundedIcon from "@mui/icons-material/LooksOneRounded";
import LooksTwoRoundedIcon from "@mui/icons-material/LooksTwoRounded";
import Looks3RoundedIcon from "@mui/icons-material/Looks3Rounded";
import ResponsiveImg from "../../../../components/ResponsiveImg/ResponsiveImg";
import { ResParagraphNoIndent, SecondaryTitle } from "../../../../components/Text/Title/Title";
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary } from "@mui/joy";
import { useState } from "react";

// =========English==========
export function IntroContent() {
    return (
        <div>
            <SecondaryTitle text="Introduction to WWSC Referee System" />

            <hr></hr>
            <ResParagraphNoIndent>
                <b>Welcome to the Referee System of the World Wiser Sports Committee (WWSC)!!</b>
            </ResParagraphNoIndent>
            <hr />
            <ResParagraphNoIndent>
                Before accessing our system for the first time, please enter your user information to &nbsp;
                <Link to={"/referee-home/signup"}>
                    <AccountBoxIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                    <strong> Signup</strong>.
                </Link>
                &nbsp; Once signed up successfully, the system will direct you to your referee
                <strong> Dashoboard</strong>. Thereafter, you can directly&nbsp;
                <Link to={"/referee-home/login"}>
                    <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                    <strong>Login </strong>
                </Link>
                to our system.
            </ResParagraphNoIndent>

            <ResParagraphNoIndent>
                This system will provide referees with a variety of menu items and functional content as shown below.
            </ResParagraphNoIndent>

            <div style={{ color: "teal" }}>
                {" "}
                <AccordionGroup size="small" transition="0.2s ease">
                    <Accordion>
                        <AccordionSummary>
                            {" "}
                            <div
                                className="rs-list-item"
                                style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color: "tomato" }}
                            >
                                1. &nbsp;Dashboard
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ marginLeft: "2rem" }}>
                                <ResParagraphNoIndent>
                                    In addition to providing an electronic version of <b>Referee ID Card</b>, the
                                    referee can also quickly browse his/her own personal information and different
                                    referee records in various graphical chart formats. The dashboard includes the
                                    following information:
                                </ResParagraphNoIndent>
                                <ol className="referee-grade-list" type="a">
                                    <li className="rs-list-item">The Referee Perosnal Profile Card</li>
                                    <li className="rs-list-item">
                                        The circular progress chart depicts the progress of cumulative records of the
                                        referee officiating Wiser games.
                                    </li>
                                    <li className="rs-list-item">
                                        The line chart or bar chart illustrates annual records of the referee
                                        officiating Wiser games
                                    </li>
                                    <li className="rs-list-item">
                                        The pie chart illustrates the records of the referee officiating Wiser games
                                        categorized by country or region of games.
                                    </li>
                                </ol>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            {" "}
                            <div
                                className="rs-list-item"
                                style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color: "tomato" }}
                            >
                                2. &nbsp;Profile
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ marginLeft: "2rem" }}>
                                <ResParagraphNoIndent>
                                    The referee may <b>view</b> and <b>edit/update</b> the following personal profile
                                    information here, including:
                                </ResParagraphNoIndent>
                                <ol className="referee-grade-list" type="a">
                                    <li className="rs-list-item">
                                        Referee's Current Certification Status*(e.g., active, pending, expired,
                                        inactive){" "}
                                    </li>
                                    <li className="rs-list-item">English Name indicated on the refere ID card</li>
                                    <li className="rs-list-item">Other Name</li>
                                    <li className="rs-list-item">Referee's Grade*(e.g, 3 or 4)</li>
                                    <li className="rs-list-item">Gender</li>
                                    <li className="rs-list-item">Associated Wiser Organization</li>
                                    <li className="rs-list-item">Title/Position</li>
                                    <li className="rs-list-item">Email*</li>
                                    <li className="rs-list-item">Resided Country/Region</li>
                                </ol>
                                <small style={{ fontSize: "0.8rem", color: "teal", marginBottom: "12px" }}>
                                    * Updated by WWSC Only
                                </small>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            {" "}
                            <div
                                className="rs-list-item"
                                style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color: "tomato" }}
                            >
                                3. &nbsp;Referee Training Records
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ marginLeft: "2rem" }}>
                                <ol className="referee-grade-list" type="a">
                                    <li
                                        className="rs-list-item"
                                        style={{ fontSize: "0.9rem", marginTop: "12px", marginBottom: "12px" }}
                                    >
                                        <strong>Referee Training Records:</strong>
                                    </li>
                                    <ResParagraphNoIndent>
                                        The referee can <b>add</b> his/her previous referee training records, as well as{" "}
                                        <b>upload</b> relevant suppoting documents associated with these records.
                                        Additionally, the referee can also <b>edit/update</b>, or <b>delete</b>
                                        previously entered records, and <b>download</b> any documents uploaded earlier.
                                        The referee training records include the following information:
                                    </ResParagraphNoIndent>
                                    <ol className="referee-grade-list" type="i">
                                        <li className="rs-list-item">Training Date</li>
                                        <li className="rs-list-item">Training Class Type</li>
                                        <li className="rs-list-item">Name of Authorized Training Organization</li>
                                        <li className="rs-list-item">Name of Training Instructor</li>
                                        <li className="rs-list-item">Training Location (Country/District)</li>
                                    </ol>
                                    <li
                                        className="rs-list-item"
                                        style={{ fontSize: "0.9rem", marginTop: "12px", marginBottom: "12px" }}
                                    >
                                        <strong>Records of the Referee Officiating Wiser Games</strong>：
                                    </li>
                                    <ResParagraphNoIndent>
                                        The Referee-in-Training or WWSC certified Referee can <b>add</b> their previous
                                        records of the referee officiating Wiser games, as well as <b>upload</b>{" "}
                                        relevant suppoting docuemnts associated with these records. Additionally, the
                                        referee can also <b>edit/update</b>, or <b>delete</b>
                                        previously entered records; and <b>download</b> any docuemnts uploaded earlier.
                                        The records of the referee officiating Wiser games include the following
                                        information:
                                    </ResParagraphNoIndent>
                                    <ol className="referee-grade-list" type="i">
                                        <li className="rs-list-item">Date of the Game</li>
                                        <li className="rs-list-item">Name of the Game</li>
                                        <li className="rs-list-item">Organization Hosting the Game</li>
                                        <li className="rs-list-item">Location of the Game (Country/District)</li>
                                    </ol>
                                    <li
                                        className="rs-list-item"
                                        style={{ fontSize: "0.9rem", marginTop: "12px", marginBottom: "12px" }}
                                    >
                                        <strong>
                                            Records for Serving as an Instructor of Referee Training Classes
                                        </strong>
                                        （only appliable for <b>Grade-3 referees</b>）
                                    </li>
                                    <ResParagraphNoIndent>
                                        The Grade-3 referee can <b>add</b> their previous records for serving as an
                                        instructor of referee training classes, as well as <b>upload</b> relevant
                                        suppoting documents associated with these records. Additionally, the referee can
                                        also <b>edit/update</b>, or <b>delete </b>
                                        previously entered records; and <b>download</b> any documents uploaded earlier.
                                        The records for serving as an instructor of referee training classes may include
                                        the following information:
                                    </ResParagraphNoIndent>
                                    <ol className="referee-grade-list" type="i">
                                        <li className="rs-list-item">Training Date</li>
                                        <li className="rs-list-item">Training Class Type</li>
                                        <li className="rs-list-item">Name of Authorized Training Organization</li>
                                        <li className="rs-list-item">Number of Trainees</li>
                                        <li className="rs-list-item">Training Location (Country/District)</li>
                                    </ol>
                                </ol>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </AccordionGroup>
            </div>
        </div>
    );
}

export function RitContent() {
    const [index, setIndex] = useState(0);

    return (
        <>
            <div>
                <SecondaryTitle text="Signup by Referees-in-Training" />

                <div style={{ color: "teal" }}>
                    <AccordionGroup size="small" transition="0.2s ease">
                        <Accordion
                            expanded={index === 0}
                            onChange={(event, expanded) => {
                                setIndex(expanded ? 0 : null);
                            }}
                        >
                            <AccordionSummary>
                                <div
                                    className="page-subtitle2"
                                    style={{ color: "teal", textAlign: "left", fontSize: "1rem" }}
                                >
                                    <LooksOneRoundedIcon
                                        sx={{ paddingBottom: "3px", marginRight: "10px", fontSize: "1.6rem" }}
                                    />
                                    Select proper "Referee Selection" button
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ marginLeft: "2rem" }}>
                                    <ResParagraphNoIndent>
                                        During
                                        <Link to={"/referee-home/signup"}>
                                            <AccountBoxIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                            Signup,
                                        </Link>
                                        Referees-in-Training first need to make sure to select "
                                        <b>Referee-in-Training</b>" to sign up. This selection is by default. If you are
                                        WWSC Referees (Grade-3 or Grade 4 referees) , you need to switch the selection
                                        to “<b>WWSC Referee</b>”
                                    </ResParagraphNoIndent>
                                    <ResponsiveImg
                                        src="/assets/Referee/signupForm/signup_form_RIT_1.jpg"
                                        alt="Referee Selection"
                                    />
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={index === 1}
                            onChange={(event, expanded) => {
                                setIndex(expanded ? 1 : null);
                            }}
                        >
                            <AccordionSummary>
                                <div
                                    className="page-subtitle2"
                                    style={{ color: "teal", textAlign: "left", fontSize: "1rem" }}
                                >
                                    <LooksTwoRoundedIcon
                                        sx={{ paddingBottom: "3px", marginRight: "10px", fontSize: "1.6rem" }}
                                    />
                                    Please enter the information at the following required fields (marked by *):
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ marginLeft: "2rem" }}>
                                    <AccordionGroup size="small" transition="0.2s ease" disableDivider>
                                        <Accordion>
                                            <AccordionSummary>
                                                {" "}
                                                <div
                                                    className="rs-list-item"
                                                    style={{
                                                        fontSize: "1rem",
                                                        marginTop: "6px",
                                                        marginBottom: "6px",
                                                        color: "tomato",
                                                    }}
                                                >
                                                    a. &nbsp;User's Display Name
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div style={{ marginLeft: "2rem" }}>
                                                    <ResParagraphNoIndent>
                                                        A <b>User's Display Name</b> is the name that a user chooses to
                                                        be known by, which may be different from their legal name. It's
                                                        often a combination of their first and last name. (for example,
                                                        John Doe).
                                                    </ResParagraphNoIndent>
                                                    <ResponsiveImg
                                                        src="/assets/Referee/signupForm/signup_form_RIT_DisplayName_1.jpg"
                                                        alt="Input User's Display Name"
                                                    />
                                                    <ResParagraphNoIndent>
                                                        After the referee-in-training has
                                                        <Link to={"/referee-home/login"}>
                                                            <LoginIcon
                                                                sx={{ paddingBottom: "2px", fontSize: "1.2rem" }}
                                                            />
                                                            <strong>logged in</strong>,
                                                        </Link>
                                                        &nbsp; the user's display name will be shown as follows:
                                                    </ResParagraphNoIndent>
                                                    <ResponsiveImg
                                                        src="/assets/Referee/signupForm/signup_form_RIT_DisplayName_2.jpg"
                                                        alt="Display Name's Location"
                                                    />
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary>
                                                {/* Email */}
                                                <div
                                                    className="rs-list-item"
                                                    style={{
                                                        fontSize: "1rem",
                                                        marginTop: "6px",
                                                        marginBottom: "6px",
                                                        color: "tomato",
                                                    }}
                                                >
                                                    b. &nbsp;Email
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div style={{ marginLeft: "2rem" }}>
                                                    <ResParagraphNoIndent>
                                                        Please enter your <b>personal valid email address</b>. Please
                                                        don't sign up using your organization's or a shared email
                                                        address.
                                                    </ResParagraphNoIndent>
                                                    <ResParagraphNoIndent>
                                                        Please also don't use the same email address to sign up and
                                                        creat multiple referee accounts.
                                                    </ResParagraphNoIndent>

                                                    <ResParagraphNoIndent>
                                                        The email address you entered will not only be used as a unique
                                                        username to
                                                        <Link to={"/referee-home/login"}>
                                                            <LoginIcon
                                                                sx={{ paddingBottom: "2px", fontSize: "1.2rem" }}
                                                            />
                                                            <strong>Login</strong>
                                                        </Link>{" "}
                                                        to our system, but also used to receive email notifications from
                                                        our system if you <b>forget and want to reset your password</b>.
                                                        To prevent from missing any important emails from our system, it
                                                        is important to sign up with a personal valid email address that
                                                        you are currently using. Thank you!
                                                    </ResParagraphNoIndent>
                                                    <ResponsiveImg
                                                        src="/assets/Referee/signupForm/signup_form_RIT_Email_1.jpg"
                                                        alt="Enter your email address"
                                                    />
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>

                                        <Accordion>
                                            <AccordionSummary>
                                                {/* Password */}
                                                <div
                                                    className="rs-list-item"
                                                    style={{
                                                        fontSize: "1rem",
                                                        marginTop: "6px",
                                                        marginBottom: "6px",
                                                        color: "tomato",
                                                    }}
                                                >
                                                    c. &nbsp;Password
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div style={{ marginLeft: "2rem" }}>
                                                    <ResponsiveImg
                                                        src="/assets/Referee/signupForm/signup_form_RIT_PW_1.jpg"
                                                        alt="Enter your password"
                                                    />
                                                    <ResParagraphNoIndent>
                                                        Please enter your user account <b>password</b>.{" "}
                                                    </ResParagraphNoIndent>{" "}
                                                    <ResParagraphNoIndent>
                                                        To ensure the protection of the system and the security of your
                                                        personal information, as well as to prevent unauthorized access
                                                        to your account, please adhere to the following password
                                                        requirements when setting your password:
                                                    </ResParagraphNoIndent>
                                                    <ol className="referee-grade-list" type="i">
                                                        <li className="rs-list-item">
                                                            The password length must be no less than 6 characters and no
                                                            more than 12 characters;
                                                        </li>
                                                        <li className="rs-list-item">
                                                            The password may contain:
                                                            <ul style={{ listStyle: "square" }}>
                                                                <li className="rs-list-item">
                                                                    English alphabets (a-z or A-Z);
                                                                </li>
                                                                <li className="rs-list-item">Numbers (0-9)</li>
                                                                <li className="rs-list-item">
                                                                    Any characterics like:~ ! ? @ # $ % ^ & * _ - +{" "}
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="rs-list-item">
                                                            The password <b>must not</b> contain any spaces;
                                                        </li>
                                                        <li className="rs-list-item">
                                                            We suggest your password better containing:
                                                        </li>
                                                        <ul style={{ listStyle: "square" }}>
                                                            <li className="rs-list-item">
                                                                At least one uppercase letter (A-Z) and one lowercase
                                                                letter (a-z);
                                                            </li>
                                                            <li className="rs-list-item">At least one number (0-9).</li>
                                                        </ul>
                                                    </ol>
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary>
                                                {/* Select a Photo to Upload */}
                                                <div
                                                    className="rs-list-item"
                                                    style={{
                                                        fontSize: "1rem",
                                                        marginTop: "6px",
                                                        marginBottom: "6px",
                                                        color: "tomato",
                                                    }}
                                                >
                                                    d. &nbsp;Select a Photo to Upload
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div style={{ marginLeft: "2rem" }}>
                                                    <ResParagraphNoIndent>
                                                        Click "<b>Select a Photo to Upload</b>" button to open the
                                                        folder containing the photo directory stored on your computer.
                                                        Please be advised that your selected file must be in a image
                                                        file format (for example, .jpg or .png) and the file size must
                                                        be less than 1 MB. The uploaded photo will be used for your
                                                        Referee ID card in the future and personal profile for
                                                        identification purposes. Prior to uploading your phoro, please
                                                        review our requirements for
                                                        <a
                                                            href="/assets/Referee/signupForm/Size and Format of Photo for WWSC Wiser Referee ID Card.pdf"
                                                            target="_blank"
                                                        >
                                                            Size and Format of Photo for WWSC Wiser Referee ID Card
                                                        </a>
                                                    </ResParagraphNoIndent>
                                                    <ResponsiveImg
                                                        src="/assets/Referee/signupForm/signup_form_RIT_Photo_1.jpg"
                                                        alt="Select a file to upload"
                                                    />
                                                    <ResParagraphNoIndent>
                                                        After selecting the appropriate photo, please click the{" "}
                                                        <b>Open</b> button to confirm your selection.
                                                    </ResParagraphNoIndent>
                                                    <ResponsiveImg
                                                        src="/assets/Referee/signupForm/signup_form_RIT_Photo_2.jpg"
                                                        alt="open folder to select file"
                                                    />
                                                    <br></br>
                                                    <ResParagraphNoIndent>
                                                        You will see the selected photo as shwon below. After confirming
                                                        your selection, please click the <b>Signup</b> button to
                                                        complete the Signup process. If you want to select a different
                                                        photo, please click the <b>Clear Selection</b> button to
                                                        re-select your desired photo again.
                                                    </ResParagraphNoIndent>
                                                    <ResponsiveImg
                                                        src="/assets/Referee/signupForm/signup_form_RIT_Signup_1.jpg"
                                                        alt="Sign-up"
                                                    />
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>
                                    </AccordionGroup>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary>
                                <div
                                    className="page-subtitle2"
                                    style={{ color: "teal", textAlign: "left", fontSize: "1rem" }}
                                >
                                    <Looks3RoundedIcon
                                        sx={{ paddingBottom: "3px", marginRight: "10px", fontSize: "1.6rem" }}
                                    />
                                    Congratulations on successfully completing your signup!! You will now be able to
                                    access our system by
                                    <Link to={"/referee-home/login"}>
                                        <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                        <strong>Login</strong>
                                    </Link>{" "}
                                    directly in the future!
                                </div>
                            </AccordionSummary>
                            {/* <AccordionDetails>Content</AccordionDetails> */}
                        </Accordion>
                    </AccordionGroup>
                </div>
            </div>
        </>
    );
}

export function RefereeContent() {
    const [index, setIndex] = useState(0);
    return (
        <>
            <div>
                <SecondaryTitle text="Signup by WWSC Certified Referees" />

                <div style={{ color: "teal" }}>
                    <AccordionGroup size="small" transition="0.2s ease">
                        <Accordion
                            expanded={index === 0}
                            onChange={(event, expanded) => {
                                setIndex(expanded ? 0 : null);
                            }}
                        >
                            <AccordionSummary>
                                <div
                                    className="page-subtitle2"
                                    style={{ color: "teal", textAlign: "left", fontSize: "1rem" }}
                                >
                                    <LooksOneRoundedIcon
                                        sx={{ paddingBottom: "3px", marginRight: "10px", fontSize: "1.6rem" }}
                                    />
                                    Select proper 'Referee Selection' button
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ marginLeft: "2rem" }}>
                                    <ResParagraphNoIndent>
                                        During
                                        <Link to={"/referee-home/signup"}>
                                            <AccountBoxIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                            <strong>Signup </strong>
                                        </Link>
                                        , <b> WWSC Referees (Grade-3 or Grade 4 referees)</b> first need to change the
                                        selection to "<b>WWSC Referee"</b>" to sign up. Please note that the deafult
                                        selection is "Referee-in-Training."
                                    </ResParagraphNoIndent>
                                    <ResponsiveImg
                                        src="/assets/Referee/signupForm/signup_form_referee_1.jpg"
                                        alt="Referee Selection"
                                    />
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={index === 1}
                            onChange={(event, expanded) => {
                                setIndex(expanded ? 1 : null);
                            }}
                        >
                            <AccordionSummary>
                                {" "}
                                <div
                                    className="page-subtitle2"
                                    style={{ color: "teal", textAlign: "left", fontSize: "1rem" }}
                                >
                                    <LooksTwoRoundedIcon
                                        sx={{ paddingBottom: "3px", marginRight: "10px", fontSize: "1.6rem" }}
                                    />
                                    Please enter the information at the following required fields (marked by *)
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ marginLeft: "2rem" }}>
                                    <AccordionGroup size="small" transition="0.2s ease" disableDivider>
                                        <Accordion>
                                            <AccordionSummary>
                                                {" "}
                                                <div
                                                    className="rs-list-item"
                                                    style={{
                                                        fontSize: "1rem",
                                                        marginTop: "6px",
                                                        marginBottom: "6px",
                                                        color: "tomato",
                                                    }}
                                                >
                                                    a. &nbsp;Referee ID Number
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div style={{ marginLeft: "2rem" }}>
                                                    <ResParagraphNoIndent>
                                                        Please enter your <b>referee ID number</b> as indicated on your
                                                        Referee ID Card (your ID format may be like WWSC-G3-SR_XXXXX or
                                                        WWSC-G4-CR_XXXXX). If you don't have an assigned referee ID
                                                        number(for example, you are a Referee-in-Training), please
                                                        signup accoding to steps of signup by Referee-in-Training. If
                                                        you forget or can't locate your referee ID number, please email
                                                        us at
                                                        <a href="mailto:info@worldwisersport.org">
                                                            <i>info@worldwisersport.org</i>
                                                        </a>
                                                        to inquire and retrieve your referee ID number.
                                                    </ResParagraphNoIndent>
                                                    <ResponsiveImg
                                                        src="/assets/Referee/signupForm/signup_form_refereeID_1.jpg"
                                                        alt="Enter your referee ID number"
                                                    />
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>

                                        <Accordion>
                                            <AccordionSummary>
                                                <div
                                                    className="rs-list-item"
                                                    style={{
                                                        fontSize: "1rem",
                                                        marginTop: "6px",
                                                        marginBottom: "6px",
                                                        color: "tomato",
                                                    }}
                                                >
                                                    b. &nbsp;User's Display Name
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div style={{ marginLeft: "2rem" }}>
                                                    <ResParagraphNoIndent>
                                                        A <b>User's Display Name</b> is the name that a user chooses to
                                                        be known by, which may be different from their legal name. It's
                                                        often a combination of their first and last name. (for example,
                                                        Mary Jane).
                                                    </ResParagraphNoIndent>
                                                    <ResponsiveImg
                                                        src="/assets/Referee/signupForm/signup_form_referee_DisplayName_1.jpg"
                                                        alt="Input User's Display Name"
                                                    />

                                                    <ResParagraphNoIndent>
                                                        After the referee has &nbsp;
                                                        <Link to={"/referee-home/login"}>
                                                            <LoginIcon
                                                                sx={{ paddingBottom: "2px", fontSize: "1.2rem" }}
                                                            />
                                                            <strong>logged in</strong>,&nbsp;
                                                        </Link>
                                                        the <b> User's display name</b> will be shown as follows:
                                                    </ResParagraphNoIndent>

                                                    <ResponsiveImg
                                                        src="/assets/Referee/signupForm/signup_form_referee_DisplayName_2.jpg"
                                                        alt="Display Name's Location"
                                                    />
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary>
                                                {" "}
                                                {/* Email */}
                                                <div
                                                    className="rs-list-item"
                                                    style={{
                                                        fontSize: "1rem",
                                                        marginTop: "6px",
                                                        marginBottom: "6px",
                                                        color: "tomato",
                                                    }}
                                                >
                                                    c. &nbsp;Email
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div style={{ marginLeft: "2rem" }}>
                                                    <ResParagraphNoIndent>
                                                        Please enter your <b> personal valid email address</b> and don't
                                                        sign up using your organization's or a shared email address.
                                                    </ResParagraphNoIndent>{" "}
                                                    <ResParagraphNoIndent>
                                                        Please also don't use the same email address to sign up and
                                                        creat multiple referee accounts. The email address you entered
                                                        will not only be used as a unique username to
                                                        <Link to={"/referee-home/login"}>
                                                            <LoginIcon
                                                                sx={{ paddingBottom: "2px", fontSize: "1.2rem" }}
                                                            />
                                                            <strong>Login</strong>
                                                        </Link>{" "}
                                                        to our system, but also used to receive email notifications from
                                                        our system if you <b>forget and want to reset your password</b>.
                                                    </ResParagraphNoIndent>
                                                    <ResParagraphNoIndent>
                                                        To prevent from missing any important emails from our system, it
                                                        is important to sign up with a personal valid email address that
                                                        you are currently using. Thank you!
                                                    </ResParagraphNoIndent>{" "}
                                                    <ResponsiveImg
                                                        src="/assets/Referee/signupForm/signup_form_referee_Email_1.jpg"
                                                        alt="Enter your email address"
                                                    />
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>

                                        <Accordion>
                                            <AccordionSummary>
                                                {/* Password */}
                                                <div
                                                    className="rs-list-item"
                                                    style={{
                                                        fontSize: "1rem",
                                                        marginTop: "6px",
                                                        marginBottom: "6px",
                                                        color: "tomato",
                                                    }}
                                                >
                                                    d. &nbsp;Passowrd
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div style={{ marginLeft: "2rem" }}>
                                                    <ResponsiveImg
                                                        src="/assets/Referee/signupForm/signup_form_referee_PW_1.jpg"
                                                        alt="Enter your password"
                                                    />
                                                    <ResParagraphNoIndent>
                                                        To ensure the protection of the system and the security of your
                                                        personal information, as well as to prevent unauthorized access
                                                        to your account, please adhere to the following password
                                                        requirements when setting your password:
                                                    </ResParagraphNoIndent>
                                                    <ol className="referee-grade-list" type="i">
                                                        <li className="rs-list-item">
                                                            The password length must be no less than 6 characters and no
                                                            more than 12 characters;
                                                        </li>
                                                        <li className="rs-list-item">
                                                            The password may contain:
                                                            <ul style={{ listStyle: "square" }}>
                                                                <li className="rs-list-item">
                                                                    English alphabets (a-z or A-Z);
                                                                </li>
                                                                <li className="rs-list-item">Numbers (0-9)</li>
                                                                <li className="rs-list-item">
                                                                    Any characterics like:~ ! ? @ # $ % ^ & * _ - +{" "}
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="rs-list-item">
                                                            The password <b>must not</b> contain any spaces;
                                                        </li>
                                                        <li className="rs-list-item">
                                                            We suggest your password better containing:
                                                        </li>
                                                        <ul style={{ listStyle: "square" }}>
                                                            <li className="rs-list-item">
                                                                At least one uppercase letter (A-Z) and one lowercase
                                                                letter (a-z);
                                                            </li>
                                                            <li className="rs-list-item">At least one number (0-9).</li>
                                                        </ul>
                                                    </ol>
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>

                                        <Accordion>
                                            <AccordionSummary>
                                                {/* Select a Photo to Upload */}
                                                <div
                                                    className="rs-list-item"
                                                    style={{
                                                        fontSize: "1rem",
                                                        marginTop: "6px",
                                                        marginBottom: "6px",
                                                        color: "tomato",
                                                    }}
                                                >
                                                    e. &nbsp;Select a Photo to Upload
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div style={{ marginLeft: "2rem" }}>
                                                    <ResParagraphNoIndent>
                                                        Click "<b> Select a Photo to Upload</b>" button to open the
                                                        folder containing the photo directory stored on your computer.
                                                        Please be advised that your selected file must be in a image
                                                        file format (for example, .jpg or .png) and the file size must
                                                        be less than 1 MB. The uploaded photo will be used for your
                                                        Referee ID card and personal profile for identification
                                                        purposes. Prior to uploading your phoro, please review our
                                                        requirements for
                                                        <a
                                                            href="/assets/Referee/signupForm/Size and Format of Photo for WWSC Wiser Referee ID Card.pdf"
                                                            target="_blank"
                                                        >
                                                            {" "}
                                                            Size and Format of Photo for WWSC Wiser Referee ID Card
                                                        </a>
                                                    </ResParagraphNoIndent>
                                                    <ResponsiveImg
                                                        src="/assets/Referee/signupForm/signup_form_referee_Photo_1.jpg"
                                                        alt="Select a file to upload"
                                                    />
                                                    <ResParagraphNoIndent>
                                                        After selecting the appropriate photo, please click the{" "}
                                                        <b>Open</b> button to confirm your selection.
                                                    </ResParagraphNoIndent>
                                                    <ResponsiveImg
                                                        src="/assets/Referee/signupForm/signup_form_referee_Photo_2.jpg"
                                                        alt="Open folder to select a file"
                                                    />
                                                    <ResParagraphNoIndent>
                                                        You will see the selected photo as shown below. After confirming
                                                        your selection, please click the "<b>Signup</b>" button to
                                                        complete the signup process. If you want to select a different
                                                        photo, please click the "<b>Clear Selection</b>" button to
                                                        re-select your desired photo again.
                                                    </ResParagraphNoIndent>
                                                    <ResponsiveImg
                                                        src="/assets/Referee/signupForm/signup_form_referee_Signup_1.jpg"
                                                        alt="Complete Signup"
                                                    />

                                                   
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>
                                    </AccordionGroup>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary>
                                {" "}
                                <div
                                    className="page-subtitle2"
                                    style={{ color: "teal", textAlign: "left", fontSize: "1rem" }}
                                >
                                    <Looks3RoundedIcon
                                        sx={{ paddingBottom: "3px", marginRight: "10px", fontSize: "1.6rem" }}
                                    />
                                    Congratulations on successfully completing your signup!! You will now be able to access our
                            system by
                            <Link to={"/referee-home/login"}>
                                <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.3rem" }} />
                                <strong>Login</strong>
                            </Link>{" "}
                            directly in the future!
                                </div>
                            </AccordionSummary>
                            {/* <AccordionDetails>Content</AccordionDetails> */}
                        </Accordion>{" "}
                    </AccordionGroup>{" "}
                </div>
            </div>

           
        </>
    );
}

export const content = [
    { title: "Introduction", content: <IntroContent /> },
    { title: "WWSC Referee", content: <RefereeContent /> },
    { title: "Referees-in-Training", content: <RitContent /> },
];
