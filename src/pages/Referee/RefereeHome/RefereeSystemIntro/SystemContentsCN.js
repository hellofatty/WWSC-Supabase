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

// ======简体中文=====

export function IntroContentCN() {
    return (
        <div>
            <SecondaryTitle text="WWSC裁判员系统介绍" />

            <hr></hr>
            <ResParagraphNoIndent>
                <b>欢迎使用世界Wiser运动委员会的裁判员系统！！</b>
            </ResParagraphNoIndent>
            <hr />
            <ResParagraphNoIndent>
                在使用本系统第一次前，请先
                <Link to={"/referee-home/signup"}>
                    <AccountBoxIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                    <b>註册</b>
                </Link>
                并输入您的用户资料。等註册成功後，系统将会引导您至您的「<strong>裁判员信息中心</strong>」。
                之後您就可以直接
                <Link to={"/referee-home/login"}>
                    <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                    <strong>登入</strong>
                </Link>
                来使用本系统。
            </ResParagraphNoIndent>

            <ResParagraphNoIndent>本系统将提供裁判员们以下不同的清单项目和功能内容:</ResParagraphNoIndent>

            <div style={{ color: "teal" }}>
                {" "}
                <AccordionGroup size="small" transition="0.2s ease">
                    <Accordion>
                        <AccordionSummary>
                            {" "}
                            <div
                                className="rs-list-item"
                                style={{ fontSize: "1rem", marginTop: "12px", marginBottom: "12px", color:"tomato" }}
                            >
                               1. &nbsp;裁判员信息中心
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ marginLeft: "2rem" }}>
                                <ResParagraphNoIndent>
                                    除了提供您电子格式的<b>裁判员识别證</b>
                                    之外，在此裁判员也可快速地浏览以下不同的裁判员个人资料和各种记录图表。您的裁判员信息中心会包含以下讯息：
                                </ResParagraphNoIndent>
                                <ol className="referee-grade-list" type="a">
                                    <li className="rs-list-item">裁判员个人档案卡</li>
                                    <li className="rs-list-item">担任比赛裁判员执裁记录的累计进度圆形图</li>
                                    <li className="rs-list-item">担任比赛裁判员执裁记录的年度曲线图或条状图</li>
                                    <li className="rs-list-item">担任裁判员执裁的比赛所在国家和地区分配圆饼图</li>
                                </ol>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            {" "}
                            <div
                                className="rs-list-item"
                                style={{ fontSize: "1rem", marginTop: "12px", marginBottom: "12px", color:"tomato" }}
                            >
                               2. &nbsp;裁判员个人档案资料
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ marginLeft: "2rem" }}>
                                <ResParagraphNoIndent>
                                    裁判员可在此<b>浏览</b>和<b>编辑/更新</b>以下裁判员的个人资料，包含：
                                </ResParagraphNoIndent>
                                <ol className="referee-grade-list" type="a">
                                    <li className="rs-list-item">
                                        裁判员的目前有效状态*（例如：有效、处理中、过期和无效）
                                    </li>
                                    <li className="rs-list-item">显示在裁判员识别證上的英文姓名</li>
                                    <li className="rs-list-item">其他名字（例如，中文名字）</li>
                                    <li className="rs-list-item">裁判员的级别*（例如，3 或 4）</li>
                                    <li className="rs-list-item">性别</li>
                                    <li className="rs-list-item">所属Wiser团体</li>
                                    <li className="rs-list-item">头衔/职称</li>
                                    <li className="rs-list-item">电子邮箱*</li>
                                    <li className="rs-list-item">居住所在国家/地区</li>
                                </ol>
                                <small style={{ fontSize: "0.8rem", color: "teal", marginBottom: "12px" }}>
                                    * 仅供WWSC更新
                                </small>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            {" "}
                            <div
                                className="rs-list-item"
                                style={{ fontSize: "1rem", marginTop: "12px", marginBottom: "12px", color:"tomato" }}
                            >
                               3. &nbsp;裁判员的各种记录
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                        <div style={{ marginLeft: "2rem" }}>
                            <ol className="referee-grade-list" type="a">
                                <li
                                    className="rs-list-item"
                                   style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                >
                                    <strong>参加裁判员培训的记录：</strong>
                                </li>
                                <ResParagraphNoIndent>
                                    裁判员可在此<b>新增建立</b>过去参加裁判员培训的记录，并可<b>上传</b>
                                    与此记录相关的档案资料。除此之外，裁判员也可以<b>编辑/更新</b>或<b>删除</b>
                                    已输入的记录，和
                                    <b>下载</b>
                                    之前上传的档案资料。参加裁判员培训的记录，包含:
                                </ResParagraphNoIndent>
                                <ol className="referee-grade-list" type="i">
                                    <li className="rs-list-item">培训日期</li>
                                    <li className="rs-list-item">培训课程级别</li>
                                    <li className="rs-list-item">授权培训团体名称</li>
                                    <li className="rs-list-item">培训讲师名字</li>
                                    <li className="rs-list-item">培训所在地点（国家或地区）</li>
                                </ol>
                                <li
                                    className="rs-list-item"
                                   style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                >
                                    <strong>担任比赛裁判员的执裁记录</strong>：
                                </li>
                                <ResParagraphNoIndent>
                                    见习裁判员和WWSC认證的裁判员可在此<b>新增建立</b>过去担任比赛裁判员的执裁记录，并可
                                    <b>上传</b>
                                    与此记录相关的档案资料。除此之外，裁判员也可<b>编辑/更新</b>或<b>删除</b>
                                    已输入的记录，和
                                    <b>下载</b>
                                    之前上传的档案资料。担任比赛裁判员的执裁记录，包含:
                                </ResParagraphNoIndent>
                                <ol className="referee-grade-list" type="i">
                                    <li className="rs-list-item">比赛日期</li>
                                    <li className="rs-list-item">比赛名称</li>
                                    <li className="rs-list-item">举办比赛团体名称</li>
                                    <li className="rs-list-item">比赛所在地点（国家或地区）</li>
                                </ol>
                                <li
                                    className="rs-list-item"
                                   style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                >
                                    <strong>担任裁判员培训班讲师的记录</strong>（此记录项目仅适用於<b>第三级裁判员</b>）
                                </li>
                                <ResParagraphNoIndent>
                                    第三级裁判员可在此<b>新增建立</b>过去担任裁判员培训班讲师的记录，并可<b>上传</b>
                                    与此记录相关的档案资料。除此之外，裁判员也可<b>编辑/更新</b>或<b>删除</b>
                                    已输入的记录，和
                                    <b>下载</b>
                                    之前上传的档案资料。担任裁判员培训班讲师的记录，包含:
                                </ResParagraphNoIndent>
                                <ol className="referee-grade-list" type="i">
                                    <li className="rs-list-item">培训日期</li>
                                    <li className="rs-list-item">培训课程级别</li>
                                    <li className="rs-list-item">授权培训团体</li>
                                    <li className="rs-list-item">参加培训学员的人数</li>
                                    <li className="rs-list-item">培训所在地点（国家或地区）</li>
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

export function RitContentCN() {
    const [index, setIndex] = useState(0);
    return (
        <div>
            <SecondaryTitle text="见习裁判员註册" />

            <div style={{ color: "teal" }}>
                <AccordionGroup size="small" transition="0.2s ease">
                    <Accordion
                        expanded={index === 0}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 0 : null);
                        }}
                    >
                        <AccordionSummary>
                            <div className="page-subtitle2" style={{ color: "teal", textAlign: "left", fontSize: "1rem" }}>
                                <LooksOneRoundedIcon
                                    sx={{ paddingBottom: "3px", marginRight: "10px", fontSize: "1.6rem" }}
                                />
                                选择适当的裁判员选项
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ marginLeft: "2rem" }}>
                                <ResParagraphNoIndent>
                                    <b>见习裁判员</b>在{" "}
                                    <Link to={"/referee-home/signup"}>
                                        <AccountBoxIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                        <strong>註册</strong>
                                    </Link>
                                    时，首先必须先确定选择以下「<b>见习裁判员</b>」
                                    选项进行註册，此为预设选项。但如果您已是本会认證的第三或第四级裁判员，则必须选择 「
                                    <b>WWSC裁判员</b>
                                    」来改变选项 ；
                                </ResParagraphNoIndent>
                                <ResponsiveImg
                                    src="/assets/Referee/signupForm/signup_form_RIT_1_CN.jpg"
                                    alt="选择适当的裁判员选项"
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
                            <div className="page-subtitle2" style={{ color: "teal", textAlign: "left", fontSize: "1rem" }}>
                                <LooksTwoRoundedIcon
                                    sx={{ paddingBottom: "3px", marginRight: "10px", fontSize: "1.6rem" }}
                                />
                                以下为<b>见习裁判员</b>註册时的必填项目（标记*）：
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
                                           style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                        >
                                            a. &nbsp;用户显示名称
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div style={{ marginLeft: "2rem" }}>
                                            <ResParagraphNoIndent>
                                                用户显示名称是用户选择的一个名称，可用来标识自己，这个名称可能与其法定名字不同。但通常是用户的名字和姓氏的组合（例如：李大明）。
                                            </ResParagraphNoIndent>
                                            <ResponsiveImg
                                                src="/assets/Referee/signupForm/signup_form_RIT_DisplayName_1_CN.jpg"
                                                alt="输入用户显示名称"
                                            />
                                            <ResParagraphNoIndent>
                                                见习裁判员
                                                <Link to={"/referee-home/login"}>
                                                    <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                                    <strong>登入</strong>
                                                </Link>
                                                後， <b>用户显示名称</b>将会被显示在以下此处：
                                            </ResParagraphNoIndent>
                                            <ResponsiveImg
                                                src="/assets/Referee/signupForm/signup_form_RIT_DisplayName_2_CN.jpg"
                                                alt="登入後用户显示名称地方"
                                            />
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary>
                                        {/* 电子邮箱 */}
                                        <div
                                            className="rs-list-item"
                                           style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                        >
                                            b. &nbsp;电子邮箱
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div style={{ marginLeft: "2rem" }}>
                                            <ResParagraphNoIndent>
                                                请输入裁判员目前使用的<b>有效个人电子邮箱</b>
                                                ，不要使用团体或共享的电子邮箱註册，也请不要使用同一个电子邮箱重複註册多个账号。此输入的电子邮箱除了用来{" "}
                                                <Link to={"/referee-home/login"}>
                                                    <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                                    <strong>登入</strong>
                                                </Link>
                                                本系统外，也会用来接收系统发出的<b>忘记/重设密码</b>
                                                的电子邮件通知！因此为了避免错失重要的系统电子邮件通知，
                                                <b>
                                                    <u>请务必输入您目前使用的有效个人电子邮箱</u>
                                                </b>
                                                ，谢谢！
                                            </ResParagraphNoIndent>
                                            <ResponsiveImg
                                                src="/assets/Referee/signupForm/signup_form_RIT_Email_1_CN.jpg"
                                                alt="输入电子邮箱"
                                            />
                                        </div>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary>
                                        {" "}
                                        {/* 密码 */}
                                        <div
                                            className="rs-list-item"
                                           style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                        >
                                            c. &nbsp;密码
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div style={{ marginLeft: "2rem" }}>
                                            <ResponsiveImg
                                                src="/assets/Referee/signupForm/signup_form_RIT_PW_1_CN.jpg"
                                                alt="输入密码"
                                            />
                                            <ResParagraphNoIndent>
                                                请输入裁判员的帐户<b>密码</b>
                                                ，为了能保护系统和您的个人资讯安全，和防止他人盗用您的账户，请遵守以下的密码要求，来设定您的密码：
                                            </ResParagraphNoIndent>
                                            <ol className="referee-grade-list" type="i">
                                                <li className="rs-list-item">
                                                    密码的长度不能少於6个字符和多於12个字符；
                                                </li>
                                                <li className="rs-list-item">
                                                    密码可以包含以下字符：
                                                    <ul style={{ listStyle: "square" }}>
                                                        <li className="rs-list-item">
                                                            大小写英文字母（ A-Z 或 a-z）；
                                                        </li>
                                                        <li className="rs-list-item">数字 （0-9）；</li>
                                                        <li className="rs-list-item">
                                                            或任何以下符号：~ ! ? @ # $ % ^ & * _ - +{" "}
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="rs-list-item">密码中不能包含空格；</li>
                                                <li className="rs-list-item">建议密码最好包含：</li>
                                                <ul style={{ listStyle: "square" }}>
                                                    <li className="rs-list-item">
                                                        至少 1 个大写英文字母 （A-Z）和 1 个小写英文字母 （a-z）；
                                                    </li>
                                                    <li className="rs-list-item">至少 1 个数字 （0-9）</li>
                                                </ul>
                                            </ol>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary>
                                        {/* 选择上传照片 */}
                                        <div
                                            className="rs-list-item"
                                           style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                        >
                                            d. &nbsp;选择上传照片
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div style={{ marginLeft: "2rem" }}>
                                            <ResParagraphNoIndent>
                                                点击以下「<b>选择上传照片</b>」
                                                按键，以打开储存在您电脑中照片目录的档案夹。请注意选择的档案必须是图形档案格式（例如：.jpg
                                                或.png档案格式），其档案尺寸必须小於 1 MB。上传的照片将作为您未来
                                                <b>裁判员识别證</b>和<b>个人档案照片辨识</b>
                                                使用。上传照片前，请详细阅读本会有关
                                                <a
                                                    href="/assets/Referee/signupForm/裁判员识别證照片尺寸和规格要求.pdf"
                                                    target="_blank"
                                                >
                                                    「裁判员识别證」照片的尺寸和规格要求
                                                </a>
                                                ，谢谢！
                                            </ResParagraphNoIndent>
                                            <ResponsiveImg
                                                src="/assets/Referee/signupForm/signup_form_RIT_Photo_1_CN.jpg"
                                                alt="选择上传裁判證和档案照片"
                                            />
                                            <ResParagraphNoIndent>
                                                选择适当的照片後，请点击「<b>开启(O)」</b>按键以确认选择！
                                            </ResParagraphNoIndent>
                                            <ResponsiveImg
                                                src="/assets/Referee/signupForm/signup_form_RIT_Photo_2_TW.jpg"
                                                alt="选择适当的照片"
                                            />
                                            <br></br>
                                            <ResParagraphNoIndent>
                                                您将看到您选择的照片，确认照片後，最後点击「<b>註册</b>
                                                」按键以完成註册步骤！但如想重新选择不同照片，请点击 「<b>清除选择</b>
                                                」按键，重新选择您想要的照片。
                                            </ResParagraphNoIndent>
                                            <ResponsiveImg
                                                src="/assets/Referee/signupForm/signup_form_RIT_Signup_1_CN.jpg"
                                                alt="完成註册"
                                            />
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                </AccordionGroup>
                                </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion >
                        <AccordionSummary>
                            <div className="page-subtitle2" style={{ color: "teal", textAlign: "left", fontSize: "1rem" }}>
                                <Looks3RoundedIcon
                                    sx={{ paddingBottom: "3px", marginRight: "10px", fontSize: "1.6rem" }}
                                />
                                恭喜你按照以上步骤完成了註册，之後就可以直接
                                <Link to={"/referee-home/login"}>
                                    <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                    <strong>登入</strong>
                                </Link>
                                我们的系统了！
                            </div>
                        </AccordionSummary>
                        {/* <AccordionDetails>Content</AccordionDetails> */}
                    </Accordion>
                </AccordionGroup>
            </div>
        </div>
    );
}

export function RefereeContentCN() {
    const [index, setIndex] = useState(0);
    return (
        <div>
            <SecondaryTitle text="WWSC认證裁判员註册" />

            <div style={{ color: "teal" }}>
                <AccordionGroup size="small" transition="0.2s ease">
                    <Accordion
                        expanded={index === 0}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 0 : null);
                        }}
                    >
                        <AccordionSummary>
                            <div className="page-subtitle2" style={{ color: "teal", textAlign: "left" }}>
                                <LooksOneRoundedIcon
                                    sx={{ paddingBottom: "3px", marginRight: "10px", fontSize: "1.8rem" }}
                                />
                                选择适当的裁判员选项
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ marginLeft: "2rem" }}>
                                <ResParagraphNoIndent>
                                    <b>WWSC认證的裁判员（第三级或第四级裁判员）</b>在{" "}
                                    <Link to={"/referee-home/signup"}>
                                        <AccountBoxIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                        <strong>註册</strong>
                                    </Link>
                                    时，首先必须先确定选择「<b>WWSC裁判员</b>」选项进行註册。请注意预设选项为「
                                    <b>见习裁判员</b>
                                    」。
                                </ResParagraphNoIndent>
                                <ResponsiveImg
                                    src="/assets/Referee/signupForm/signup_form_referee_1_CN.jpg"
                                    alt="选择适当的裁判员选项"
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
                            <div className="page-subtitle2" style={{ color: "teal", textAlign: "left", fontSize: "1rem" }}>
                                <LooksTwoRoundedIcon
                                    sx={{ paddingBottom: "3px", marginRight: "10px", fontSize: "1.6rem" }}
                                />
                                以下为<b>WWSC裁判员</b>註册时的必填项目（标记*）：
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
                                               style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                            >
                                                a. &nbsp;裁判员编号
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ marginLeft: "2em" }}>
                                                <ResParagraphNoIndent>
                                                    请输入您裁判證上的「<b>裁判员编号</b>」（格式为 WWSC-G3-SR-XXXXX 或
                                                    WWSC-G4-CR-XXXXX），如您没有裁判员编号（如见习裁判员），请按照见习裁判员註册步骤註册；或如您忘了您的裁判员编号，请来函至本会电子邮箱
                                                    <a href="mailto:info@worldwisersport.org">
                                                        <i>info@worldwisersport.org</i>
                                                    </a>{" "}
                                                    查询您的裁判员编号。
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_refereeID_1_CN.jpg"
                                                    alt="输入裁判员编号"
                                                />
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion>
                                        <AccordionSummary>
                                            <div
                                                className="rs-list-item"
                                               style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                            >
                                                b. &nbsp;用户显示名称
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ marginLeft: "4rem" }}>
                                                <ResParagraphNoIndent>
                                                    用户显示名称是用户选择的一个名称，可用来标识自己，这个名称可能与其法定名字不同。但通常是用户的名字和姓氏的组合（例如：王玛丽）。
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_referee_DisplayName_1_CN.jpg"
                                                    alt="输入用户显示名称"
                                                />

                                                <ResParagraphNoIndent>
                                                    裁判员
                                                    <Link to={"/referee-home/login"}>
                                                        <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                                        <strong>登入</strong>
                                                    </Link>
                                                    後， <b>用户显示名称</b>将会被显示在以下此处：
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_referee_DisplayName_2_CN.jpg"
                                                    alt="登入後用户显示名称地方"
                                                />
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary>
                                            {" "}
                                            {/* 电子邮箱 */}
                                            <div
                                                className="rs-list-item"
                                               style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                            >
                                                c. &nbsp;电子邮箱
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ marginLeft: "4rem" }}>
                                                <ResParagraphNoIndent>
                                                    请输入裁判员目前使用的<b>有效个人电子邮箱</b>
                                                    ，不要使用团体或共享的电子邮箱註册，也请不要使用同一个电子邮箱重複註册多个账号。此输入的电子邮箱除了用来{" "}
                                                    <Link to={"/referee-home/login"}>
                                                        <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                                        <strong>登入</strong>
                                                    </Link>
                                                    本系统外，也会用来接收系统发出的<b>忘记/重设密码</b>
                                                    的电子邮件通知！因此为了避免错失重要的系统电子邮件通知，
                                                    <b>
                                                        <u>请务必输入您目前使用的有效个人电子邮箱</u>
                                                    </b>
                                                    ，谢谢！
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_referee_Email_1_CN.jpg"
                                                    alt="输入电子邮箱"
                                                />
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion>
                                        <AccordionSummary>
                                            {" "}
                                            {/* 密码 */}
                                            <div
                                                className="rs-list-item"
                                               style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                            >
                                               d. &nbsp;密码
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ marginLeft: "4rem" }}>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_referee_PW_1_CN.jpg"
                                                    alt="输入密码"
                                                />
                                                <ResParagraphNoIndent>
                                                    请输入裁判员的账户<b>密码</b>
                                                    ，为了能保护系统和您的个人资讯安全，和防止他人盗用您的账户，请遵守以下的密码要求，来设定您的密码：
                                                </ResParagraphNoIndent>
                                                <ol className="referee-grade-list" type="i">
                                                    <li className="rs-list-item">
                                                        密码的长度不能少於6个字符和多於12个字符；
                                                    </li>
                                                    <li className="rs-list-item">
                                                        密码可以包含以下字符：
                                                        <ul style={{ listStyle: "square" }}>
                                                            <li className="rs-list-item">
                                                                大小写英文字母（ A-Z 或 a-z）；
                                                            </li>
                                                            <li className="rs-list-item">数字 （0-9）；</li>
                                                            <li className="rs-list-item">
                                                                或任何以下符号：~ ! ? @ # $ % ^ & * _ - +{" "}
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="rs-list-item">密码中不能包含空格；</li>
                                                    <li className="rs-list-item">建议密码最好包含：</li>
                                                    <ul style={{ listStyle: "square" }}>
                                                        <li className="rs-list-item">
                                                            至少 1 个大写英文字母 （A-Z）和 1 个小写英文字母 （a-z）；
                                                        </li>
                                                        <li className="rs-list-item">至少 1 个数字 （0-9）</li>
                                                    </ul>
                                                </ol>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion>
                                        <AccordionSummary>
                                            {" "}
                                            {/* 选择上传照片 */}
                                            <div
                                                className="rs-list-item"
                                               style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                            >
                                                e. &nbsp;选择上传照片
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ marginLeft: "4rem" }}>
                                                <ResParagraphNoIndent>
                                                    点击以下「<b>选择上传照片</b>」
                                                    按键，以打开储存在您电脑中照片目录的档案夹。请注意选择的档案必须是图形档案格式（例如：.jpg
                                                    或.png档案格式），其档案尺寸必须小於 1 MB。上传的照片将作为您
                                                    <b>裁判员识别證</b>和<b>个人档案照片辨识</b>
                                                    使用。上传照片前，请详细阅读本会有关
                                                    <a
                                                        href="/assets/Referee/signupForm/裁判员识别證照片尺寸和规格要求.pdf"
                                                        target="_blank"
                                                    >
                                                        「裁判员识别證」照片的尺寸和规格要求
                                                    </a>
                                                    ，谢谢！
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_referee_Photo_1_CN.jpg"
                                                    alt="选择上传裁判證和档案照片"
                                                />

                                                <ResParagraphNoIndent>
                                                    选择适当的照片後，请点击「<b>开启(O)」</b>按键以确认选择！
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_referee_Photo_2_TW.jpg"
                                                    alt="选择适当的照片"
                                                />

                                                <ResParagraphNoIndent>
                                                    您将看到您选择的照片，确认照片後，最後点击「<b>註册</b>
                                                    」按键以完成註册步骤！但如想重新选择不同照片，请点击 「
                                                    <b>清除选择</b>
                                                    」按键，重新选择您想要的照片。
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_referee_Signup_1_CN.jpg"
                                                    alt="完成註册"
                                                />
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </AccordionGroup>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion disabled>
                        <AccordionSummary>
                            {" "}
                            <div className="page-subtitle2" style={{ color: "teal", textAlign: "left", fontSize: "1rem" }}>
                                <Looks3RoundedIcon
                                    sx={{ paddingBottom: "3px", marginRight: "10px", fontSize: "1.6rem" }}
                                />
                                恭喜你按照以上步骤完成了註册，之後就可以直接
                                <Link to={"/referee-home/login"}>
                                    <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                    <strong>登入</strong>
                                </Link>
                                我们的系统了！
                            </div>
                        </AccordionSummary>
                        {/* <AccordionDetails>Content</AccordionDetails> */}
                    </Accordion>{" "}
                </AccordionGroup>{" "}
            </div>
        </div>
    );
}

export const content_CN = [
    { title: "介绍", content: <IntroContentCN /> },
    { title: "WWSC裁判员", content: <RefereeContentCN /> },
    { title: "见习裁判员", content: <RitContentCN /> },
];
