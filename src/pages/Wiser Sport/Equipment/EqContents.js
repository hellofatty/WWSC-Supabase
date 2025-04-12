/** @format */
import { SecondaryTitle, ResParagraphNoIndent } from "../../../components/Text/Title/Title";
import ballImg from "../../../assets/Wiser Sport/Balls-min.jpg";
import flagImg from "../../../assets/Wiser Sport/Flags-min.png";
import ropeImg from "../../../assets/Wiser Sport/Rope-min.gif";

// =================English================
export function BallsContent() {
    return (
        <div className="equip-content">
            <SecondaryTitle>The Balls for Wiser Game:</SecondaryTitle>

            <ResParagraphNoIndent style={{ textIndent: "0" }}>
                Each ball shall have a diameter of about <strong>90</strong> millimeters and weighs about
                <strong>168</strong> grams. There are 7 red balls and 7 white balls. The balls of each color are
                numbered from 1 to 7.
            </ResParagraphNoIndent>
            <img src={ballImg} alt="Wiser balls" width="80%" loading="lazy" />
        </div>
    );
}

export function FlagsContent() {
    return (
        <div className="equip-content">
            <SecondaryTitle text="The Flags for Wiser Game:"/>

            <ResParagraphNoIndent style={{ textIndent: "0" }}>
                Prepare <strong>10</strong> yellow and <strong>10</strong> red flags. The design and size of each flag
                is shown in the diagram below. The shape of the flag is an <strong>isosceles right triangle</strong>.
                The length of two equal sides of the triangle is
                <strong>
                    <u> one foot. </u>
                </strong>
                When inserting a flag into the ground, the pole of the flag should be
                <strong>
                    <u> 2 feet </u>
                </strong>
                above the ground.
            </ResParagraphNoIndent>
            <br></br>
            <img src={flagImg} alt="flags" width="60%" loading="lazy" />
           
            <small>Specifications & Dimensions of Flags</small>
        </div>
    );
}

export function RopeContent() {
    return (
        <div className="equip-content">
              <SecondaryTitle text='Prepare a 12-meter rope to delineate the "Centerline."'/> <br />
            <img src={ropeImg} alt="rope" width="60%" loading="lazy" />
            <br></br>
            <small>(m: meter)</small>
        </div>
    );
}
