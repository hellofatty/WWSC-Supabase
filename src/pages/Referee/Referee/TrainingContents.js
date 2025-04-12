/** @format */
import { Link } from "react-router-dom";
import { ResParagraph, ResParagraphNoIndent, SecondaryTitle } from "../../../components/Text/Title/Title";
// =============English========

export const certContent = (
    <div>
        <SecondaryTitle text="Certification System for Wiser Referees" />
        <ol style={{ color: "teal" }}>
            <li className="rt-list-item">
                All grades of official Wiser referees must complete the World Wiser Sport Committee’s (WWSC) required
                training courses and assessments. After being qualified, a referee certificate corresponding to its
                grade will then be issued by the WWSC.
            </li>

            <li className="rt-list-item">
                The grade of Wiser Referee represents its qualification that can be assigned to officiate certain levels
                of Wiser matches/tournaments.
            </li>
            <li className="rt-list-item">
                Official Wiser referees certified by the World Wiser Sport Committee are divided into the following four
                major grades:
            </li>
        </ol>

        <ul style={{ color: "teal", listStyleType: "disc", marginLeft:"1rem" }}>
            <li className="rt-list-item">
                <b>Grade 1: International Referee</b>
            </li>
            <li className="rt-list-item">
                <b>Garde 2: National Referee</b>
            </li>
            <li className="rt-list-item">
                <b>Grade 3: State Referee</b>
            </li>
            <li className="rt-list-item">
                <b>Grade 4: Club Referee</b>
            </li>
        </ul>
    </div>
);

export const dutyContent = (
    <div>
        <SecondaryTitle text="Duties and Responsibilities of a Referee in a Wiser Game" />
        <ol style={{ color: "teal" }}>
            <li className="rt-list-item">
                Enforce the rules of the Wiser sport set by World Wiser Sport Committee (WWSC);
            </li>
            <li className="rt-list-item">Maintain order and safety in the game and ensure fair competitions;</li>
            <li className="rt-list-item">
                Ensure that the playing field is set up properly and the balls, flags and equipment meet all
                requirements;
            </li>
            <li className="rt-list-item">
                Ensure that all players follow Wiser etiquette and the spirit of the Wiser sport;
            </li>
            <li className="rt-list-item">
                Oversee the processes of the Wiser game and instruct the flag person and the record keeper;
            </li>
            <li className="rt-list-item">
                Conduct the drawing of lots with team captains to determine which team will serve and also attack first
                after the serving;
            </li>
            <li className="rt-list-item">
                Blow the whistle in the following circumstances:{" "}
                <ul style={{ marginTop: "20px", paddingLeft: "2rem", listStyleType: "disc" }}>
                    <li className="rt-list-item">To initiate and conclude the game; </li>
                    <li className="rt-list-item">
                        Before the player initiates any ball actions except “interception”;
                    </li>{" "}
                    <li className="rt-list-item">Before making each hand gesture; </li>
                    <li className="rt-list-item">After fouls are committed;</li>
                    <li className="rt-list-item">
                       For emergency purposes, to call people's attention.
                    </li>
                </ul>
            </li>
            <li className="rt-list-item">
                Make hand gestures for ruling after balls are locked, mishit and struck out;
            </li>
            <li className="rt-list-item">Enforce penalties after fouls are committed ;</li>
            <li className="rt-list-item">Call upon both teams and announce the game result; and,</li>
            <li className="rt-list-item">Sign and submit the record tracking sheet after the end of game.</li>
        </ol>
    </div>
);
const applyTrainingContent = (
    <>
        
        <SecondaryTitle text="How to Apply for Attending WWSC Grade Referee Training Class?" />
        <ResParagraphNoIndent>
            All of WWSC's officially authorized "<b>Grade 4 Wiser Referee Training Classes</b>" must{" "}
            <u>simultaneously meet the following two requirements</u>. Only after attending WWSC's officially authorized
            Training Classes, completing the entire training curriculum, successfully passing the training test, and
            providing records of having refereed ten (10) Wiser matches can an attending trainee/student be issued a
            Grade 4 Wiser Referee ID Card by the WWSC.
        </ResParagraphNoIndent>
        <ol style={{ color: "teal" }}>
            <li className="rt-list-item">
                The Training Hosting Organization must have signed the "
                <b>Authorization Agreement to Establish Grade 4 Wiser Referee Training Classes</b>" with the WWSC to
                receive WWSC's official authorization to hold the Training Classes. Before each session of the Training
                Classes begins, the Training Hosting Organization must exhibit the signed authorization agreement to all
                attending trainees, as the proof of its qualification to hold the Training Classes;
            </li>

            <li className="rt-list-item">
                The Training Instructor of "Grade 4 Wiser Referee Training Classes" must possess{" "}
                <b>the status of Grade 3 (State-Level) Wiser Referee officially certified by the WWSC</b>. During the
                Training Classes, the instructor must present the WWSC-issued Grade 3 Wiser Referee ID card, to show the
                credential as a qualified instructor for the Grade 4 Wiser Referee Training Classes.
            </li>
        </ol>
        <ResParagraph>
            To allow trainees/students to ensure that a training class they are attending has been officially authorized
            by the WWSC, the WWSC has posted{" "}
            <Link to={"/referee-zone/referee-training-organizations"}>
                a list of WWSC's officially authorized organizations
            </Link>{" "}
            to hold the Training Classes on its official website and anyone can also search the names of{" "}
            <Link to={"/referee-zone/search-referee"}>Grade 3 Wiser referees </Link>who are qualified instructors for
            the Training Classes.
        </ResParagraph>
        <ResParagraph>
            In addition, when attending any of WWSC's officially authorized Grade 4 Wiser Referee Training Classes, all
            trainees must pay special attention to the following important matters:
        </ResParagraph>
        <ul style={{ color: "teal", listStyleType: "disc" }}>
            <li className="rt-list-item">
                The WWSC is a purely athletic non-profit organization legally established in the United States of
                America, and it has authorized the Training Hosting Organization to hold the Training Classes for the
                purpose of promoting and developing the Wiser Sport <u>without receiving any compensation</u>.
                Therefore, when attending the Training Classes held by a WWSC-authorized training organization,{" "}
                <u>
                    <b>trainees attending the Training Classes are not required to pay any tuition to the WWSC</b>
                </u>
                ;
            </li>

            <li className="rt-list-item">
                However, although the WWSC does not require any tuition from trainees/students, when required by
                financial circumstances, the Training Hosting Organization may, upon its sole discretion, ask
                trainees/students to share the costs related to the Training Classes. The collection of any fee and its
                expenditure{" "}
                <u>
                    must be reasonable, clear, and in compliance with any applicable laws and regulations of the home
                    country and local government of the Training Hosting Organization
                </u>
                . If the Training Hosting Organization decides to ask trainees/students to share costs, the organization
                must inform prospective students in the training announcement in writing about sharing costs. The
                prospective students must also be specifically notified that the WWSC does not require the authorized
                Training Hosting Organization to collect money from students for sharing training costs and any
                collected money will be completely used by the hosting organization to pay for expenses related to the
                training, and has nothing to do with the WWSC in any way.
            </li>
            <li className="rt-list-item">
                Before the initial Training Class starts, the WWSC requests that the WWSC-authorized Training Hosting
                Organization shall require every attending trainee to read carefully the "
                <b>Trainee Consent Form to Attend Grade 4 Wiser Referee Training Class</b>" (see attachment). If the
                trainee agrees with the contents of the Consent Form, then he or she shall sign and date said Consent
                Form.{" "}
                <u>
                    <b>
                        Only students who have signed and dated the Trainee Consent Forms shall be permitted to take the
                        Training Class
                    </b>
                </u>
                . Before the initial Training Class begins, the Training Hosting Organization shall also publicly
                announce to the attendees that any and all funds collected are part of the shared expenses between the
                Training Hosting Organization and each of the trainees, and will be neither submitted to nor shared with
                the WWSC.
            </li>

            <li className="rt-list-item">
                After trainees have completed the training curriculum, and have successfully passed both{" "}
                <b>the written exam and the test of the referee's hand gestures</b>, such attending trainees will be
                qualified as "Referees-In-Training." Within one year after being qualified as a "Referee-In-Training,"
                <b>one must referee at least ten (10) Wiser games</b> and submit a{" "}
                <a href="https://worldwisersport.org/pdf/Referee_Training/%E8%A3%81%E5%88%A4%E6%AF%94%E8%B3%BD%E8%A8%98%E9%8C%84%E8%A1%A8_WWSC-Referee_Record_frm_Chinese.pdf">
                    “Referee Record Form”
                </a>{" "}
                to record all required 10 games along with other supplemental information to the WWSC Refere System for
                review and verification.{" "}
                <b>
                    The qualified trainee must submit by email an official application for Grade 4 referee certification
                </b>
                . Once the review is completed, the WWSC will issue the Grade 4 Wiser Referee ID cards
            </li>
        </ul>
    </>
);

export const formContent = (
    <div id="record-form">
        <div className="rt-form-item">
            <a href="https://worldwisersport.org/pdf/G3_Referee/WWSC-G3_Referee_Work_Record_frm_English_10_24_2015.pdf">
                WWSC Grade 3 Referee Work Record Form (for Grade 3 Wiser Referee)
            </a>
        </div>
        <div className="rt-form-item">
            <a href="https://worldwisersport.org/pdf/Referee_Training/WWSC-Referee_Record_frm_12_02_13_E.pdf">
                WWSC Grade 4 Referee Work Record Form (for Referee-in-Training)
            </a>
        </div>
    </div>
);

export const content = [
    { title: "Certification", content: certContent },
    { title: "Duties", content: dutyContent },
    { title: "Training", content: applyTrainingContent },
    { title: "Records", content: formContent },
];
