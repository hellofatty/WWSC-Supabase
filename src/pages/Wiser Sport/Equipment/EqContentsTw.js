/** @format */

import ballImg from "../../../assets/Wiser Sport/Balls-min.jpg";
import flagImg from "../../../assets/Wiser Sport/Flags-min.png";
import ropeImg from "../../../assets/Wiser Sport/Rope-min.gif";
import { SecondaryTitle, ResParagraphNoIndent } from "../../../components/Text/Title/Title";

// =================繁體中文================

export function BallsContentTw() {
    return (
        <div className="equip-content">
             <SecondaryTitle text="Wiser 比賽球："/>
          
            <ResParagraphNoIndent>
                每顆球的直徑約<strong>90</strong> 毫米，重量約
                <strong>168</strong> 克。紅﹑白兩色各7顆，分別以1到7來編號。
            </ResParagraphNoIndent>
            <img src={ballImg} alt="Wiser balls" width="80%" loading="lazy" />
        </div>
    );
}
export function FlagsContentTw() {
    return (
        <div className="equip-content">
             <SecondaryTitle text="Wiser 比賽旗:"/>
        
            <ResParagraphNoIndent >
                準備黃旗與紅旗各 <strong>10</strong> 支。旗子的規格和尺寸如下圖所示，兩邊為
                <strong>
                    <u>1英呎</u>
                </strong>
                長的<strong>等腰直角三角</strong>旗面，旗子插入地面後，地面以上的旗桿高度需為
                <strong>
                    <u>2英呎</u>
                </strong>
            </ResParagraphNoIndent>
            <img src={flagImg} alt="flags" width="60%" loading="lazy" />
            <br></br>
            <small>旗子的規格和尺寸 (測量單位 ft. 為英呎的英文字feet的縮寫)</small>
        </div>
    );
}

export function RopeContentTw() {
    return (
        <div className="equip-content">
             <SecondaryTitle text="準備一條12米長的繩子來設定“中界線”。"/>
          
            <img src={ropeImg} alt="rope" width="60%" loading="lazy" />
            <br></br>
            <small>(測量單位 m 為米或公尺的英文字meter的縮寫)</small>
        </div>
    );
}
