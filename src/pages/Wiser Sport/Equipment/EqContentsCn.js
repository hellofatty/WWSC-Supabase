/** @format */
import ballImg from "../../../assets/Wiser Sport/Balls-min.jpg";
import flagImg from "../../../assets/Wiser Sport/Flags-min.png";
import ropeImg from "../../../assets/Wiser Sport/Rope-min.gif";
import { SecondaryTitle, ResParagraphNoIndent } from "../../../components/Text/Title/Title";

export function BallsContentCn() {
    return (
        <div className="equip-content">

            <SecondaryTitle text="Wiser 比赛球："/>
            <ResParagraphNoIndent>
                每颗球的直径约<strong>90</strong> 毫米，重量约
                <strong>168</strong> 克。红﹑白两色各7颗，分别以1到7来编号。
            </ResParagraphNoIndent>
            <img src={ballImg} alt="Wiser balls" width="80%" loading="lazy" />
        </div>
    );
}
export function FlagsContentCn() {
    return (
        <div className="equip-content">
             <SecondaryTitle text="Wiser 比赛旗:"/>
           
            <ResParagraphNoIndent>
                準备黄旗与红旗各 <strong>10</strong> 支。旗子的规格和尺寸如下图所示，两边为
                <strong>
                    <u>1英呎</u>
                </strong>
                长的<strong>等腰直角叁角</strong>旗面，旗子插入地面後，地面以上的旗桿高度需为
                <strong>
                    <u>2英呎</u>
                </strong>
            </ResParagraphNoIndent>
            <img src={flagImg} alt="flags" width="60%" loading="lazy" />
            <br></br>
            <small>旗子的规格和尺寸 (测量单位 ft. 为英呎的英文字feet的缩写)</small>
        </div>
    );
}

export function RopeContentCn() {
    return (
        <div className="equip-content">
             <SecondaryTitle text="準备一条12米长的绳子来设定“中界线”。"/>
           
           
            <img src={ropeImg} alt="rope" width="60%" loading="lazy" />
            <br></br>
            <small>(测量单位 m 为米或公尺的英文字meter的缩写)</small>
        </div>
    );
}
