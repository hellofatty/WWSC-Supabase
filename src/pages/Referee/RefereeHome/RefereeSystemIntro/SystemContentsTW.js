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

// =========繁體中文==========
export function IntroContentTW() {
    return (
        <div>
            <SecondaryTitle text="WWSC裁判員系統介紹" />

            <hr></hr>
            <ResParagraphNoIndent>
                <b>歡迎使用世界Wiser運動委員會的裁判員系統！！</b>
            </ResParagraphNoIndent>
            <hr />
            <ResParagraphNoIndent>
                在使用本系統第一次前，請先
                <Link to={"/referee-home/signup"}>
                    <AccountBoxIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                    <b>註冊</b>
                </Link>
                並輸入您的用戶資料。等註冊成功後，系統將會引導您至您的「<strong>裁判員信息中心</strong>」。
                之後您就可以直接
                <Link to={"/referee-home/login"}>
                    <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                    <strong>登入</strong>
                </Link>
                來使用本系統。
            </ResParagraphNoIndent>

            <ResParagraphNoIndent>本系統將提供裁判員們以下不同的清單項目和功能內容:</ResParagraphNoIndent>

            <div style={{ color: "teal" }}>
                {" "}
                <AccordionGroup size="small" transition="0.2s ease">
                    <Accordion>
                        <AccordionSummary>
                            {" "}
                            <div
                                className="rs-list-item"
                                style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                            >
                               1. &nbsp;裁判員信息中心
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ marginLeft: "2rem" }}>
                                <ResParagraphNoIndent>
                                    除了提供您電子格式的<b>裁判員識別證</b>
                                    之外，在此裁判員也可快速地瀏覽以下不同的裁判員個人資料和各種記錄圖表。您的裁判員信息中心會包含以下訊息：
                                </ResParagraphNoIndent>
                                <ol className="referee-grade-list" type="a">
                                    <li className="rs-list-item">裁判員個人檔案卡</li>
                                    <li className="rs-list-item">擔任比賽裁判員執裁記錄的累計進度圓形圖</li>
                                    <li className="rs-list-item">擔任比賽裁判員執裁記錄的年度曲線圖或條狀圖</li>
                                    <li className="rs-list-item">擔任裁判員執裁的比賽所在國家和地區分配圓餅圖</li>
                                </ol>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            {" "}
                            <div
                                className="rs-list-item"
                                style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                            >
                                2. &nbsp;裁判員個人檔案資料
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ marginLeft: "2rem" }}>
                                <ResParagraphNoIndent>
                                    裁判員可在此<b>瀏覽</b>和<b>編輯/更新</b>以下裁判員的個人資料，包含：
                                </ResParagraphNoIndent>
                                <ol className="referee-grade-list" type="a">
                                    <li className="rs-list-item">
                                        裁判員的目前有效狀態*（例如：有效、處理中、過期和無效）
                                    </li>
                                    <li className="rs-list-item">顯示在裁判員識別證上的英文姓名</li>
                                    <li className="rs-list-item">其他名字（例如，中文名字）</li>
                                    <li className="rs-list-item">裁判員的級別*（例如，3 或 4）</li>
                                    <li className="rs-list-item">性別</li>
                                    <li className="rs-list-item">所屬Wiser團體</li>
                                    <li className="rs-list-item">頭銜/職稱</li>
                                    <li className="rs-list-item">電子郵箱*</li>
                                    <li className="rs-list-item">居住所在國家/地區</li>
                                </ol>
                                <small style={{ fontSize: "0.8rem", color: "teal", marginBottom: "12px" }}>
                                    * 僅供WWSC更新
                                </small>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            {" "}
                            <div
                                className="rs-list-item"
                                style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                            >
                                3. &nbsp;裁判員的各種記錄
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ marginLeft: "2rem" }}>
                                <ol className="referee-grade-list" type="a">
                                    <li
                                        className="rs-list-item"
                                        style={{ fontSize: "0.9rem", marginTop: "12px", marginBottom: "12px" }}
                                    >
                                        <strong>參加裁判員培訓的記錄：</strong>
                                    </li>
                                    <ResParagraphNoIndent>
                                        裁判員可在此<b>新增建立</b>過去參加裁判員培訓的記錄，並可<b>上傳</b>
                                        與此記錄相關的檔案資料。除此之外，裁判員也可以<b>編輯/更新</b>或<b>刪除</b>
                                        已輸入的記錄，和
                                        <b>下載</b>
                                        之前上傳的檔案資料。參加裁判員培訓的記錄，包含:
                                    </ResParagraphNoIndent>
                                    <ol className="referee-grade-list" type="i">
                                        <li className="rs-list-item">培訓日期</li>
                                        <li className="rs-list-item">培訓課程級別</li>
                                        <li className="rs-list-item">授權培訓團體名稱</li>
                                        <li className="rs-list-item">培訓講師名字</li>
                                        <li className="rs-list-item">培訓所在地點（國家或地區）</li>
                                    </ol>
                                    <li
                                        className="rs-list-item"
                                        style={{ fontSize: "0.9rem", marginTop: "12px", marginBottom: "12px" }}
                                    >
                                        <strong>擔任比賽裁判員的執裁記錄</strong>：
                                    </li>
                                    <ResParagraphNoIndent>
                                        見習裁判員和WWSC認證的裁判員可在此<b>新增建立</b>
                                        過去擔任比賽裁判員的執裁記錄，並可
                                        <b>上傳</b>
                                        與此記錄相關的檔案資料。除此之外，裁判員也可<b>編輯/更新</b>或<b>刪除</b>
                                        已輸入的記錄，和
                                        <b>下載</b>
                                        之前上傳的檔案資料。擔任比賽裁判員的執裁記錄，包含:
                                    </ResParagraphNoIndent>
                                    <ol className="referee-grade-list" type="i">
                                        <li className="rs-list-item">比賽日期</li>
                                        <li className="rs-list-item">比賽名稱</li>
                                        <li className="rs-list-item">舉辦比賽團體名稱</li>
                                        <li className="rs-list-item">比賽所在地點（國家或地區）</li>
                                    </ol>
                                    <li
                                        className="rs-list-item"
                                        style={{ fontSize: "0.9rem", marginTop: "12px", marginBottom: "12px" }}
                                    >
                                        <strong>擔任裁判員培訓班講師的記錄</strong>（此記錄項目僅適用於
                                        <b>第三級裁判員</b>）
                                    </li>
                                    <ResParagraphNoIndent>
                                        第三級裁判員可在此<b>新增建立</b>過去擔任裁判員培訓班講師的記錄，並可<b>上傳</b>
                                        與此記錄相關的檔案資料。除此之外，裁判員也可<b>編輯/更新</b>或<b>刪除</b>
                                        已輸入的記錄，和
                                        <b>下載</b>
                                        之前上傳的檔案資料。擔任裁判員培訓班講師的記錄，包含:
                                    </ResParagraphNoIndent>
                                    <ol className="referee-grade-list" type="i">
                                        <li className="rs-list-item">培訓日期</li>
                                        <li className="rs-list-item">培訓課程級別</li>
                                        <li className="rs-list-item">授權培訓團體</li>
                                        <li className="rs-list-item">參加培訓學員的人數</li>
                                        <li className="rs-list-item">培訓所在地點（國家或地區）</li>
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

export function RitContentTW() {
    const [index, setIndex] = useState(0);
    return (
        <div>
            <SecondaryTitle text="見習裁判員註冊" />

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
                                選擇適當的裁判員選項
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ marginLeft: "2rem" }}>
                                <ResParagraphNoIndent>
                                    <b>見習裁判員</b>在{" "}
                                    <Link to={"/referee-home/signup"}>
                                        <AccountBoxIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                        <strong>註冊</strong>
                                    </Link>
                                    時，首先必須先確定選擇以下「<b>見習裁判員</b>」
                                    選項進行註冊，此為預設選項。但如果您已是本會認證的第三或第四級裁判員，則必須選擇 「
                                    <b>WWSC裁判員</b>
                                    」來改變選項 ；
                                </ResParagraphNoIndent>
                                <ResponsiveImg
                                    src="/assets/Referee/signupForm/signup_form_RIT_1_TW.jpg"
                                    alt="選擇適當的裁判員選項"
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
                                以下為<b>見習裁判員</b>註冊時的必填項目（標記*）：
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
                                                a. &nbsp;用户顯示名稱
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ marginLeft: "2rem" }}>
                                                <ResParagraphNoIndent>
                                                    用戶顯示名稱是用戶選擇的一個名稱，可用來標識自己，這個名稱可能與其法定名字不同。但通常是用户的名字和姓氏的組合（例如：李大明）。
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_RIT_DisplayName_1_TW.jpg"
                                                    alt="輸入用户顯示名稱"
                                                />
                                                <ResParagraphNoIndent>
                                                    見習裁判員
                                                    <Link to={"/referee-home/login"}>
                                                        <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                                        <strong>登入</strong>
                                                    </Link>
                                                    後， <b>用户顯示名稱</b>將會被顯示在以下此處：
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_RIT_DisplayName_2_TW.jpg"
                                                    alt="登入後用户顯示名稱地方"
                                                />
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary>
                                            {/* 電子郵箱 */}
                                            <div
                                                className="rs-list-item"
                                                style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                            >
                                                b. &nbsp;電子郵箱
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ marginLeft: "2rem" }}>
                                                <ResParagraphNoIndent>
                                                    請輸入裁判員目前使用的<b>有效個人電子郵箱</b>
                                                    ，不要使用團體或共享的電子郵箱註冊，也請不要使用同一個電子郵箱重複註冊多個賬號。此輸入的電子郵箱除了用來{" "}
                                                    <Link to={"/referee-home/login"}>
                                                        <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                                        <strong>登入</strong>
                                                    </Link>
                                                    本系統外，也會用來接收系統發出的<b>忘記/重設密碼</b>
                                                    的電子郵件通知！因此為了避免錯失重要的系統電子郵件通知，
                                                    <b>
                                                        <u>請務必輸入您目前使用的有效個人電子郵箱</u>
                                                    </b>
                                                    ，謝謝！
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_RIT_Email_1_TW.jpg"
                                                    alt="輸入電子郵箱"
                                                />
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion>
                                        <AccordionSummary>
                                            {" "}
                                            {/* 密碼 */}
                                            <div
                                                className="rs-list-item"
                                                style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                            >
                                                c. &nbsp;密碼
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ marginLeft: "2rem" }}>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_RIT_PW_1_TW.jpg"
                                                    alt="輸入密碼"
                                                />
                                                <ResParagraphNoIndent>
                                                    請輸入裁判員的帳戶<b>密碼</b>
                                                    ，為了能保護系統和您的個人資訊安全，和防止他人盜用您的賬戶，請遵守以下的密碼要求，來設定您的密碼：
                                                </ResParagraphNoIndent>
                                                <ol className="referee-grade-list" type="i">
                                                    <li className="rs-list-item">
                                                        密碼的長度不能少於6個字符和多於12個字符；
                                                    </li>
                                                    <li className="rs-list-item">
                                                        密碼可以包含以下字符：
                                                        <ul style={{ listStyle: "square" }}>
                                                            <li className="rs-list-item">
                                                                大小寫英文字母（ A-Z 或 a-z）；
                                                            </li>
                                                            <li className="rs-list-item">數字 （0-9）；</li>
                                                            <li className="rs-list-item">
                                                                或任何以下符号：~ ! ? @ # $ % ^ & * _ - +{" "}
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="rs-list-item">密碼中不能包含空格；</li>
                                                    <li className="rs-list-item">建議密碼最好包含：</li>
                                                    <ul style={{ listStyle: "square" }}>
                                                        <li className="rs-list-item">
                                                            至少 1 個大寫英文字母 （A-Z）和 1 個小寫英文字母 （a-z）；
                                                        </li>
                                                        <li className="rs-list-item">至少 1 個數字 （0-9）</li>
                                                    </ul>
                                                </ol>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary>
                                            {/* 選擇上傳照片 */}
                                            <div
                                                className="rs-list-item"
                                                style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                            >
                                                d. &nbsp;選擇上傳照片
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ marginLeft: "2rem" }}>
                                                <ResParagraphNoIndent>
                                                    點擊以下「<b>選擇上傳照片</b>」
                                                    按鍵，以打開儲存在您電腦中照片目錄的檔案夾。請注意選擇的檔案必須是圖形檔案格式（例如：.jpg
                                                    或.png檔案格式），其檔案尺寸必須小於 1 MB。上傳的照片將作為您未來
                                                    <b>裁判員識別證</b>和<b>個人檔案照片辨識</b>
                                                    使用。上傳照片前，請詳細閱讀本會有關
                                                    <a
                                                        href="/assets/Referee/signupForm/裁判員識別證照片尺寸和規格要求.pdf"
                                                        target="_blank"
                                                    >
                                                        「裁判員識別證」照片的尺寸和規格要求
                                                    </a>
                                                    ，謝謝！
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_RIT_Photo_1_TW.jpg"
                                                    alt="選擇上傳裁判證和檔案照片"
                                                />
                                                <ResParagraphNoIndent>
                                                    選擇適當的照片後，請點擊「<b>開啟(O)」</b>按鍵以確認選擇！
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_RIT_Photo_2_TW.jpg"
                                                    alt="選擇適當的照片"
                                                />
                                                <br></br>
                                                <ResParagraphNoIndent>
                                                    您將看到您選擇的照片，確認照片後，最後點擊「<b>註冊</b>
                                                    」按鍵以完成註冊步驟！但如想重新選擇不同照片，請點擊 「
                                                    <b>清除重新選擇</b>
                                                    」按鍵，重新選擇您想要的照片。
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_RIT_Signup_1_TW.jpg"
                                                    alt="完成註冊"
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
                            <div className="page-subtitle2" style={{ color: "teal", textAlign: "left", fontSize: "1rem" }}>
                                <Looks3RoundedIcon
                                    sx={{ paddingBottom: "3px", marginRight: "10px", fontSize: "1.6rem" }}
                                />
                                恭喜你按照以上步驟完成了註冊，之後就可以直接
                                <Link to={"/referee-home/login"}>
                                    <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.3rem" }} />
                                    <strong>登入</strong>
                                </Link>
                                我們的系統了！
                            </div>
                        </AccordionSummary>
                        {/* <AccordionDetails>Content</AccordionDetails> */}
                    </Accordion>
                </AccordionGroup>
            </div>
        </div>
    );
}

export function RefereeContentTW() {
    const [index, setIndex] = useState(0);
    return (
        <div>
            <SecondaryTitle text="WWSC認證裁判員註冊" />

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
                                選擇適當的裁判員選項
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ marginLeft: "2rem" }}>
                                <ResParagraphNoIndent>
                                    <b>WWSC認證的裁判員（第三級或第四級裁判員）</b>在{" "}
                                    <Link to={"/referee-home/signup"}>
                                        <AccountBoxIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                        <strong>註冊</strong>
                                    </Link>
                                    時，首先必須先確定選擇「<b>WWSC裁判員</b>」選項進行註冊。請注意預設選項為「
                                    <b>見習裁判員</b>
                                    」。
                                </ResParagraphNoIndent>
                                <ResponsiveImg
                                    src="/assets/Referee/signupForm/signup_form_referee_1_TW.jpg"
                                    alt="選擇適當的裁判員選項"
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
                                以下為<b>WWSC裁判員</b>註冊時的必填項目（標記*）：
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
                                                a. &nbsp;裁判員編號
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ marginLeft: "2rem" }}>
                                                <ResParagraphNoIndent>
                                                    請輸入您裁判證上的「<b>裁判員編號</b>」（格式為 WWSC-G3-SR-XXXXX 或
                                                    WWSC-G4-CR-XXXXX），如您沒有裁判員編號（如見習裁判員），請按照見習裁判員註冊步驟註冊；或如您忘了您的裁判員編號，請來函至本會電子郵箱
                                                    <a href="mailto:info@worldwisersport.org">
                                                        <i>info@worldwisersport.org</i>
                                                    </a>{" "}
                                                    查詢您的裁判員編號。
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_refereeID_1_TW.jpg"
                                                    alt="輸入裁判員編號"
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
                                                b. &nbsp;用户顯示名稱
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ marginLeft: "2rem" }}>
                                                <ResParagraphNoIndent>
                                                    用戶顯示名稱是用戶選擇的一個名稱，可用來標識自己，這個名稱可能與其法定名字不同。但通常是用户的名字和姓氏的組合（例如：王瑪麗）。
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_referee_DisplayName_1_TW.jpg"
                                                    alt="輸入用户顯示名稱"
                                                />

                                                <ResParagraphNoIndent>
                                                    裁判員
                                                    <Link to={"/referee-home/login"}>
                                                        <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                                        <strong>登入</strong>
                                                    </Link>
                                                    後， <b>用户顯示名稱</b>將會被顯示在以下此處：
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_referee_DisplayName_2_TW.jpg"
                                                    alt="登入後用户顯示名稱地方"
                                                />
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary>
                                            {" "}
                                            {/* 電子郵箱 */}
                                            <div
                                                className="rs-list-item"
                                                style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                            >
                                                c. &nbsp;電子郵箱
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ marginLeft: "2rem" }}>
                                                {" "}
                                                <ResParagraphNoIndent>
                                                    請輸入裁判員目前使用的<b>有效個人電子郵箱</b>
                                                    ，不要使用團體或共享的電子郵箱註冊，也請不要使用同一個電子郵箱重複註冊多個賬號。此輸入的電子郵箱除了用來{" "}
                                                    <Link to={"/referee-home/login"}>
                                                        <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                                                        <strong>登入</strong>
                                                    </Link>
                                                    本系統外，也會用來接收系統發出的<b>忘記/重設密碼</b>
                                                    的電子郵件通知！因此為了避免錯失重要的系統電子郵件通知，
                                                    <b>
                                                        <u>請務必輸入您目前使用的有效個人電子郵箱</u>
                                                    </b>
                                                    ，謝謝！
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_referee_Email_1_TW.jpg"
                                                    alt="輸入電子郵箱"
                                                />
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion>
                                        <AccordionSummary>
                                            {" "}
                                            {/* 密碼 */}
                                            <div
                                                className="rs-list-item"
                                                style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                            >
                                                d. &nbsp;密碼
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ marginLeft: "2rem" }}>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_referee_PW_1_TW.jpg"
                                                    alt="輸入密碼"
                                                />
                                                <ResParagraphNoIndent>
                                                    請輸入裁判員的賬戶<b>密碼</b>
                                                    ，為了能保護系統和您的個人資訊安全，和防止他人盜用您的賬戶，請遵守以下的密碼要求，來設定您的密碼：
                                                </ResParagraphNoIndent>
                                                <ol className="referee-grade-list" type="i">
                                                    <li className="rs-list-item">
                                                        密碼的長度不能少於6個字符和多於12個字符；
                                                    </li>
                                                    <li className="rs-list-item">
                                                        密碼可以包含以下字符：
                                                        <ul style={{ listStyle: "square" }}>
                                                            <li className="rs-list-item">
                                                                大小寫英文字母（ A-Z 或 a-z）；
                                                            </li>
                                                            <li className="rs-list-item">數字 （0-9）；</li>
                                                            <li className="rs-list-item">
                                                                或任何以下符号：~ ! ? @ # $ % ^ & * _ - +{" "}
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="rs-list-item">密碼中不能包含空格；</li>
                                                    <li className="rs-list-item">建議密碼最好包含：</li>
                                                    <ul style={{ listStyle: "square" }}>
                                                        <li className="rs-list-item">
                                                            至少 1 個大寫英文字母 （A-Z）和 1 個小寫英文字母 （a-z）；
                                                        </li>
                                                        <li className="rs-list-item">至少 1 個數字 （0-9）</li>
                                                    </ul>
                                                </ol>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion>
                                        <AccordionSummary>
                                            {" "}
                                            {/* 選擇上傳照片 */}
                                            <div
                                                className="rs-list-item"
                                                style={{ fontSize: "1rem", marginTop: "6px", marginBottom: "6px", color:"tomato" }}
                                            >
                                                e. &nbsp;選擇上傳照片
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ marginLeft: "2rem" }}>
                                                <ResParagraphNoIndent>
                                                    點擊以下「<b>選擇上傳照片</b>」
                                                    按鍵，以打開儲存在您電腦中照片目錄的檔案夾。請注意選擇的檔案必須是圖形檔案格式（例如：.jpg
                                                    或.png檔案格式），其檔案尺寸必須小於 1 MB。上傳的照片將作為您
                                                    <b>裁判員識別證</b>和<b>個人檔案照片辨識</b>
                                                    使用。上傳照片前，請詳細閱讀本會有關
                                                    <a
                                                        href="/assets/Referee/signupForm/裁判員識別證照片尺寸和規格要求.pdf"
                                                        target="_blank"
                                                    >
                                                        「裁判員識別證」照片的尺寸和規格要求
                                                    </a>
                                                    ，謝謝！
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_referee_Photo_1_TW.jpg"
                                                    alt="選擇上傳裁判證和檔案照片"
                                                />

                                                <ResParagraphNoIndent>
                                                    選擇適當的照片後，請點擊「<b>開啟(O)」</b>按鍵以確認選擇！
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_referee_Photo_2_TW.jpg"
                                                    alt="選擇適當的照片"
                                                />

                                                <ResParagraphNoIndent>
                                                    您將看到您選擇的照片，確認照片後，最後點擊「<b>註冊</b>
                                                    」按鍵以完成註冊步驟！但如想重新選擇不同照片，請點擊 「
                                                    <b>清除選擇</b>
                                                    」按鍵，重新選擇您想要的照片。
                                                </ResParagraphNoIndent>
                                                <ResponsiveImg
                                                    src="/assets/Referee/signupForm/signup_form_referee_Signup_1_TW.jpg"
                                                    alt="完成註冊"
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
                            {" "}
                            <div className="page-subtitle2" style={{ color: "teal", textAlign: "left", fontSize: "1rem" }}>
                                <Looks3RoundedIcon
                                    sx={{ paddingBottom: "3px", marginRight: "10px", fontSize: "1.6rem" }}
                                />
                                恭喜你按照以上步驟完成了註冊，之後就可以直接
                                <Link to={"/referee-home/login"}>
                                    <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.3rem" }} />
                                    <strong>登入</strong>
                                </Link>
                                我們的系統了！
                            </div>
                        </AccordionSummary>
                        {/* <AccordionDetails>Content</AccordionDetails> */}
                    </Accordion>{" "}
                </AccordionGroup>{" "}
            </div>
        </div>
    );
}

export const content_TW = [
    { title: "介紹", content: <IntroContentTW /> },
    { title: "WWSC裁判員", content: <RefereeContentTW /> },
    { title: "見習裁判員", content: <RitContentTW /> },
];
