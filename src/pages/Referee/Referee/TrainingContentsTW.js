/** @format */
import { Link } from "react-router-dom";
import { ResParagraph, ResParagraphNoIndent, SecondaryTitle } from "../../../components/Text/Title/Title";

// =========繁體中文==========
const certContent_TW = (
    <div>
        <SecondaryTitle text="裁判員認證制度" />
        <ol style={{ color: "teal" }}>
            <li className="rt-list-item">
                所有級別的正式Wiser裁判員都必需經由世界Wiser運動委員會訓練認證，合格後頒發符合其相應級別的裁判員證書。
            </li>
            <li className="rt-list-item">Wiser裁判員的級別代表該裁判員能被指派擔任何種層級Wiser競賽裁判員的資格。</li>
            <li className="rt-list-item">世界Wiser運動委員會正式認證的裁判員共分四種主要級別：</li>
            <ul style={{ color: "teal", listStyleType: "disc", marginLeft: "1rem" }}>
                <li className="rt-list-item">
                    <b>第一級國際級裁判（International Referee）</b>
                </li>
                <li className="rt-list-item" data-icon="😎">
                    <b>第二級國家級裁判（National Referee）</b>
                </li>
                <li className="rt-list-item">
                    <b>第三級地區級裁判（State Referee）</b>
                </li>
                <li className="rt-list-item">
                    <b>第四級俱樂部級裁判 （Club Referee）</b>
                </li>
            </ul>
        </ol>
    </div>
);

const dutyContent_TW = (
    <div>
        <SecondaryTitle text="比賽中裁判員的職責" />
        <ol style={{ color: "teal" }}>
            <li className="rt-list-item">于比賽中執行世界Wiser運動委員會制定的Wiser比賽規則；</li>
            <li className="rt-list-item">維持場上比賽安全和秩序以及確保比賽隊伍間的公平競爭；</li>
            <li className="rt-list-item">確定比賽場地妥善佈置和比賽中使用的球，旗子和設備符合比賽規格要求；</li>
            <li className="rt-list-item">確保參賽球員遵守Wiser 比賽禮儀和符合Wiser運動精神；</li>
            <li className="rt-list-item">掌握比賽流程並配合插旗員和記錄員以讓比賽順利進行；</li>
            <li className="rt-list-item">比賽前召集兩隊隊長以抽籤或其他方式，來決定哪隊先發球和發完球后先攻擊；</li>
            <li className="rt-list-item">
                吹哨的時機:{" "}
                <ul style={{ marginTop: "20px", paddingLeft: "2rem", listStyleType: "disc" }}>
                    <li className="rt-list-item">比賽開始和比賽結束；</li>
                    <li className="rt-list-item">球員開始打球動作前（攔擊除外）；</li>
                    <li className="rt-list-item">裁判員做出任何手勢判決前；</li>
                    <li className="rt-list-item">比賽中犯規發生時；</li>
                    <li className="rt-list-item">緊急狀況時希望大家注意。</li>
                </ul>
            </li>
            <li className="rt-list-item">在球被擊中關住﹑被誤擊，或出局后，立即做出適當的判決手勢；</li>
            <li className="rt-list-item">在比賽中隊伍或球員犯規后，執行相應的處罰；</li>
            <li className="rt-list-item">召集兩隊宣佈比賽結果；</li>
            <li className="rt-list-item">並於比賽結束后，簽署和提交比賽記錄表。</li>
        </ol>
    </div>
);

const applyTrainingContent_TW = (
    <>
        <SecondaryTitle text="如何申請參加第四級裁判員培訓班？" />

        <ResParagraphNoIndent>
            凡是WWSC所正式授權舉辦的第四級裁判員培訓班必須要<u>同時具備有以下兩項條件</u>，
            參加的培訓學員才能在通過培訓課程和相關測驗以及十場裁判記錄考核后，獲得WWSC頒發的第四級裁判員識別證：
        </ResParagraphNoIndent>
        <ol style={{ color: "teal" }}>
            <li className="rt-list-item">
                主辦培訓團體必須與WWSC正式簽署“<b>授權舉辦第四級Wiser裁判員培訓班協議書</b>
                ”，以獲得WWSC正式授權培訓的資格。在每次培訓課程開始之前，主辦培訓團體必須向所有參加培訓的學員們展示此簽署的授權協議書，以證明其授權培訓資格；
            </li>

            <li className="rt-list-item">
                擔任第四級Wiser裁判員培訓課程的培訓講師必須是
                <b>正式取得WWSC認證的第三級地區級（State Level）Wiser 裁判員資格者</b>
                。講師在培訓時必須佩帶由WWSC所頒發的第三級裁判員識別證，證明其具有擔任第四級Wiser裁判員培訓班合格講師的資格。
            </li>
        </ol>
        <ResParagraph>
            為了方便學員查詢參加的培訓班是否為WWSC正式授權的培訓課程，本會在本會官方網站上已經公佈經本會正式
            <Link to={"/referee-zone/referee-training-organizations"}>授權的主辦培訓團體</Link>
            和可供查詢確認擔任培訓講師是否是符合本會培訓講師資格的
            <Link to={"/referee-zone/search-referee"}>第三級Wiser裁判員名單</Link>。
        </ResParagraph>
        <ResParagraph>另外，任何學員參加WWSC所授權的第四級裁判員培訓班時，必須特別注意以下重要事項：</ResParagraph>
        <ul style={{ color: "teal", listStyleType: "disc" }}>
            <li className="rt-list-item">
                世界Wiser運動委員會為依法在美國正式成立的非營利純體育機構，它<u>無償</u>
                授權主辦培訓團體舉辦第四級裁判員培訓班，其主要目的是用來推廣和發展Wiser運動，因此參加本會授權培訓團體所舉辦的培訓班，
                <u>
                    <b>所有參加培訓的學員是不向WWSC繳納任何學費的</b>
                </u>
                ；
            </li>

            <li className="rt-list-item">
                雖然本會不向學員收取任何學費，但各主辦培訓的團體可根據自身的實際情況，自行考量決定是否要求參加培訓的學員們共同分攤培訓相關的費用開支，任何費用的收取和支出
                <u>都必須合理、清楚，並符合其所屬國家和當地政府的法律規章</u>
                。如授權主辦培訓團體希望學員分攤費用來支付培訓開銷，主辦培訓團體必須在寄發培訓通知時，在通知中事先以書面的方式告知將參加的學員們。請參加培訓的學員們特別注意這些分攤培訓費用不是WWSC要求主辦培訓團體收取的，這些收取的費用完全是由主辦培訓團體作為其培訓相關支出使用，跟WWSC毫無任何關係。
            </li>
            <li className="rt-list-item">
                在培訓開始之前，本會要求授權的主辦培訓團體必須讓每一位參加培訓的學員詳細閱讀{" "}
                <b>學員參加“第四級Wiser裁判員培訓班”同意書</b>
                ，如認同同意書裡規定的所有內容，每位學員需簽名並註明簽名日期以表同意。
                <b>
                    <u>學員只有在學員同意書中簽名並註明日期後，方可繼續參加培訓。</u>
                </b>
                在培訓課程正式開始之前，主辦培訓團體也需再次向參加學員公開宣佈上述所提及收取的款項是屬於主辦培訓團體與學員之間分攤費用的一部份，其收取的款項不會交給WWSC，也不會與WWSC分享；
            </li>

            <li className="rt-list-item">
                學員們在完成第四級裁判員培訓課程後，並成功通過<b>現場的筆試和裁判員手勢測驗</b>
                ，將獲得「見習裁判員」的資格。於取得「見習裁判員」資格起一年內，
                <b>依規定必須擔任至少10場Wiser比賽的裁判員</b>，並將10場比賽的
                <a href="https://worldwisersport.org/pdf/Referee_Training/%E8%A3%81%E5%88%A4%E6%AF%94%E8%B3%BD%E8%A8%98%E9%8C%84%E8%A1%A8_WWSC-Referee_Record_frm_Chinese.pdf">
                    「裁判記錄表」{" "}
                </a>
                和相關證據登入並上傳至本會裁判員系統，<b>合格學員必須以電子郵件向本會正式提出申請</b>
                ，本會將審核學員提交的記錄資料和上傳文件，等審核完畢后將發給合格學員電子格式的有效第四級Wiser裁判員識別證。
            </li>
        </ul>
    </>
);

export const formContent_TW = (
    <div>
        <div className="rt-form-item">
            <a href="https://worldwisersport.org/pdf/G3_Referee/WWSC-G3_Referee_Work_Record_frm_Chinese_10_24_2015.pdf">
                WWSC 第三級裁判工作比賽記錄表 (供第三級裁判員使用)
            </a>
        </div>
        <div className="rt-form-item">
            <a href="https://worldwisersport.org/pdf/Referee_Training/%E8%A3%81%E5%88%A4%E6%AF%94%E8%B3%BD%E8%A8%98%E9%8C%84%E8%A1%A8_WWSC-Referee_Record_frm_Chinese.pdf">
                WWSC 第四級裁判工作比賽記錄表 (供見習裁判員使用)
            </a>
        </div>
    </div>
);

export const content_TW = [
    { title: "認證制度", content: certContent_TW },
    { title: "比賽職責", content: dutyContent_TW },
    { title: "裁判培訓", content: applyTrainingContent_TW },
    { title: "比賽記錄", content: formContent_TW },
];
