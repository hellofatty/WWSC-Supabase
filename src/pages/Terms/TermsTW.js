/** @format */

import { Link } from "react-router-dom";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import "./Terms.css";

export default function TermsTW() {
    return (
        <>
            <div className="page-primary-title">網站使用條款與條件</div>
          <AccordionGroup size="sm" disableDivider >
                <Accordion>
                    <AccordionSummary>
                   
                        <div className="page-subtitle2">I. &nbsp;前言</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p style={{ textIndent: "0" }}>
                            歡迎您訪問我們的網站 <Link to="/">https://worldwisersport.org/</Link>{" "}
                            （以下簡稱為“本網站”），本網站是由<strong>世界Wiser運動委員會</strong>（英文名為World Wiser
                            Sport
                            Committee，以下簡稱為“WWSC”）所擁有。藉由瀏覽我們的網站時，您將被視為已閱讀、理解、和同意接受並遵守我們的協議（以下簡稱“本用戶協議”）中所聲明的下列的條款與條件，以及我們的
                            <Link to="/wwsc-privacy-policy">隱私權政策</Link>
                            （請參照下面有關隱私權政策的部分以獲得更多信息）。
                        </p>
                        <p style={{ textIndent: "0" }}>
                            此協議從 <strong>2012年11月23日</strong>起生效。
                        </p>
                        <p style={{ textIndent: "0" }}>
                            以下術語適用於本條款和條件、隱私權政策和免責聲明的任何或所有協議：“用戶”、“您”和“您的”指的是您，也就是訪問瀏覽本網站並接受本網站條款和條件者。“WWSC”、“我們自己”和“我們”
                            指的是世界Wiser運動委員會。“一方”、“雙方”或“我們”是指用戶與我們自己、或用戶或我們自己。任何使用上述的術語或術語中任何字，無論是單數、複數、英文的大寫和/或他/她與他們都被視為是可互相交換的，因此都被認為是相同意義的。
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div className="page-subtitle2">II. &nbsp;本網站的所有權與其內容</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p style={{ textIndent: "0" }}>
                            本網站是由WWSC所擁有。除非另有說明，本網站中特別發表或展示的所有內容，包括但不僅限於:
                            文字、圖案、數據、照片圖像、視頻、聲音、繪圖插畫以及內容的選用與安排（“WWSC內容”）是由WWSC所有並保留一切權利。
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div className="page-subtitle2">III. &nbsp;商標/版權所有</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p style={{ textIndent: "0" }}>
                            本網站含有的WWSC商標、服務標記、本WWSC標誌
                            logo以及任何其它WWSC的文字標誌、設計、名稱或口號都是WWSC的智慧財產。未經WWSC事先書面同意之前，禁止被全部或部份地複印、仿造或使用。本網站上所有屬於WWSC的內容和材料，包括但不僅限於文字、圖案、網站名稱、圖像和標誌都是WWSC的智慧財產，並在美國和其它國家受到適用的版權和商標法律的保護。除非得到WWSC的書面特別授權，任何未經授權的使用本網站的WWSC內容，包括但不僅限於：複製、分發、展示或傳送，是被嚴格禁止的。
                        </p>
                        <p style={{ textIndent: "0" }}>
                            本網站中提及的其它第三方的商標、註冊商標以及機構/公司名稱和/或標誌是屬於相關的第三方的智慧財產（簡稱“第三方智慧財產”）。除非得到相關的第三方的特別授權，任何未經授權的使用第三方智慧財產的是被嚴格禁止的。對於本網站用戶未經授權擅自使用第三方智慧財產，WWSC將不承擔任何法律賠償或責任。
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div className="page-subtitle2">IIV. &nbsp;使用本網站的責任和遵守的行為</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="detail-container">
                            <p style={{ textIndent: "0" }}>
                                通過瀏覽我們的網站和直接或間接地獲得到我們為您提供的信息、資源、服務、註冊、培訓與應用項目（以下簡稱為“資源”），您同意使用這些資源只是根據1）本用戶協議的條款，和2）適用的法律、規章以及普遍接受的線上慣例或準則所允許的用途。
                            </p>
                            <p style={{ textIndent: "0" }}>其中，您理解：</p>
                            <div className="detail-section">
                                <ol type="a" style={{ color: "teal", fontSize: "0.9rem", lineHeight: "1.8" }}>
                                    <li>
                                        為了獲得我們的資源，您可能會被要求提供有關您個人的某些信息
                                       （例如識別身份、聯繫方式等）
                                        作為註冊過程的一部份或作為讓您能夠使用我們資源的一部份。您同意任何您提供的信息均是準確、正確的和最近的。
                                    </li>
                                    <li>
                                        您有責任維護與您用來獲得我們資源的任何帳號相關的任何登錄信息的保密性，因此，您有責任為您的帳戶下發生的所有活動負責
                                    </li>
                                    <li>
                                        我們嚴格禁止利用不是我們提供的以外任何方式來獲得（或企圖獲得）我們的任何資源。您特別同意不用任何自動化的、不道德的或非常規的方式來獲得（或企圖獲得）我們的任何資源。
                                    </li>
                                    <li>
                                        從事任何中斷或干擾我們資源，包括儲存我們資源的伺服器或/與之相聯結的網絡的任何活動是被嚴格禁止的。
                                    </li>
                                    <li>試圖複印、複製、重做、出售、交易或轉賣我們的資源是被嚴格禁止的。</li>
                                    <li>
                                        如由於您作了上面所提及的任何未經我們授權的活動，而直接或間接地讓我們蒙受或招致損失或損害的後果，您將全權負責，而您可能會因此而承擔刑事和民事的的責任。
                                    </li>
                                    <li>
                                        對於您或我們的網站的其他第三方用戶所發表的任何內容，我們不承擔任何法律責任。但是，如您使用開放式的通訊工具在我們的網站所發表的任何內容，只要它不違反或侵犯任何第三方的智慧財產的前提下，將成為WWSC的財產，正因為如此，給了我們一個永久的、不可撤銷的、全世界範圍內、免版稅的和專有的許可權，我們可以按照需求來進行複製、修改、改編、翻譯、出版、公開展示及/或分發。這僅是指適用與如上所述通過開放式通訊工具所發表的內容，並不涉及註冊過程中要使用我們資源而必須提供的信息。凡是所有在註冊過程中提供的信息，將受到我們的隱私權政策所保護。
                                    </li>
                                    <li>
                                        對於任何違反本用戶協議或未能履行與您的帳戶有關的義務，而因您或任何使用您帳戶的其他人導致的所有損失、費用、損害和花費包括合理的律師費，您同意賠償和不傷害WWSC及其董事、行政人員、管理人員、員工、志願者、捐助者和代理人。根據本用戶協議的保障下，我們保留具有防禦任何索賠的唯一權利，在此情況下，您必須在我們合理的要求下跟我們合作。
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div className="page-subtitle2">V. &nbsp;隱私權政策</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p style={{ textIndent: "0" }}>
                            您的隱私權對我們是非常重要的，這就是為什麼我們另外制定了一個獨立的隱私權政策，以便詳細地解釋我們如何收集、管理、處理、保護和儲存您的私人信息。我們的隱私權政策是包括在本用戶協議範圍內的，若欲閱讀我們全部的隱私權政策請點擊
                            <Link to="/wwsc-privacy-policy">這裡</Link>。
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div className="page-subtitle2">VI. &nbsp;鏈接</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p style={{textIndent:"0"}}>
                            未獲得我們書面同意之前，您不可以建立與本網站任何網頁的鏈接。但如果您已建立了與本網站的某網頁的鏈接，您將為此承擔其風險。下列的限制將適用於當您通過鏈接來使用本網站時。
                        </p>
                        <p style={{textIndent:"0"}}>
                            我們不查看或審閱從本網站連結出的它方網站的內容。我們不一定共享或認同在這些網站上所表達的觀點或出現的資料，而且我們也不應被視為這些觀點或資料的發佈者。請注意我們不對這些網站處理隱私權的做法或其內容負責。我們鼓勵我們的用戶了解這些網站的隱私權聲明。在向他們透露任何您的私人信息前，您必須評估任何經由本網站聯結或您直接瀏覽其他網站的安全性和可信度。對於您向第三方透露私人信息而造成任何方式的損失或損毀，WWSC將不承擔任何的責任。
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div className="page-subtitle2">VII. &nbsp;免責聲明</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="page-subtitle2">（1） 擔保限制</div>
                        <p style={{textIndent:"0", marginTop:"10px"}}>
                            通過使用我們的網站，您理解並同意所有我們提供的資源是“現況”和“現有”的，這代表着我們不向您表示或保證：
                        </p>
                        <div className="detail-section">
                            <ol type="i" >
                                <li>使用我們的資源將滿足您的需要或要求。</li>
                                <li>使用我們的資源將不會中斷、是及時的、安全的或無錯誤的。</li>
                                <li>通過使用我們的資源獲得的信息是正確的和可靠的，以及</li>
                                <li> 我們提供的任何資源操作和功能中的任何缺陷會被修復或更正。</li>
                            </ol>
                        </div>
                        <p style={{textIndent:"0", marginTop:"10px"}}>此外，您了解並同意：</p>
                        <div className="detail-section">
                            <ol type="i" >
                                <li>
                                    您是基於您自己的判斷和風險評估，來決定透過使用我們的資源來下載或以其它方式獲得任何內容的，因此您將為下載內容可能損害您的電腦或其它裝置而造成任何資料的損失全權負責，而且
                                </li>
                                <li>
                                    除了那些已在本用戶協議中明確列出的之外，您沒有從WWSC或我們提供的任何資源獲得信息或建議，無論是表明的、隱含的、口頭或書面的，對您產生任何擔保、保證或任何類似的條件。
                                </li>
                            </ol>
                        </div>
                        <div className="page-subtitle2">（2） 責任限制</div>
                        <p style={{textIndent:"0", marginTop:"10px"}}>
                            在適用的責任限制法規的最大限度下，WWSC將不為任何直接、間接、偶發、有原因或典型的，可能由於您使用我們的資源引起的,
                            或者是由於任何改變、數據損失或損壞、註銷、無法瀏覽或當機引起的損失或損壞承擔責任。
                        </p>

                        <div className="page-subtitle2">（3） 語言翻譯的免責聲明</div>
                        <p style={{textIndent:"0", marginTop:"10px"}}>
                            本網站含有的信息可能會被翻譯成其它語言以便利使用本網站的用戶們(以下簡稱“翻譯”)。本網站使用“人為翻譯”和用谷歌翻譯(Google
                            Translate)進行的動態的“機器翻譯”。由於谷歌翻譯是一個外部網站，WWSC對於其翻譯內容的品質和準確性無法控制。WWSC網站上所有的內容在經谷歌過濾翻譯後，在翻譯過的網頁上的部份文字、圖像和整體外觀可能會產生不如預期和無法預料的劣質結果。谷歌翻譯可能有其獨自的隱私權和使用政策，這些政策並不受WWSC控制也與WWSC的隱私權和使用政策無關。
                        </p>
                        <p style={{textIndent:"0"}}>
                            本網站的正式內容是用英文寫的，而且本網站的英文版本是WWSC認可的唯一版本。如有對涉及翻譯中的信息準確性的任何問題，請參閱正式的英文版本，如在有任何問題時，請永遠以英文版本為本網站的權威版本。
                        </p>
                        <p style={{textIndent:"0"}}>
                            網站的某些項目可能無法被翻譯，比如含有文字的圖像、文件、地圖和網頁元素。此外，網站的某些功能也可能在被翻譯的網頁上無法作用。如果您對網站上出現的信息有任何問題，請
                            <Link to="/contact-us">聯繫我們</Link>。
                        </p>

                        <div className="page-subtitle2">（4） 不可抗力的情況</div>
                        <p style={{marginTop:"10px", textIndent:"0"}}>
                            由於超出該方無法控制的事件而無法履行任何協議義務時，任何一方都不應該為此向對方負賠償責任。這些無法控制的事件包括但不僅限於：無法控制的自然力量、恐怖活動、戰爭、政治叛亂、暴動、暴亂、內亂、民政或軍事權力機關的行為、起義、地震、洪水或任何其它在我們控制外的自然或人為的最終結果；或者我們無法合理地預見這些事件而造成協議或合同的終止。受到這樣事件影響的任何一方應該立刻將此情況通知另一方，並採取一切合理的努力以履行其中所包含的任何協議的條款和條件。
                        </p>
                        <div className="page-subtitle2">（5） 棄權</div>
                        <p style={{marginTop:"10px", textIndent:"0"}}>
                            如有任一方無法嚴格執行本協議或任何協議的條款；或者任一方無法行使他/她在此所有的權利或補償皆將不構成棄權，也不會使其在本協議或任何協議下的義務消失或減少。除非經雙方簽字明確聲明，要不然對本協議或任何協議的任何條款的棄權將不會生效。
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div className="page-subtitle2">VIII. &nbsp;終止使用</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p style={{textIndent:"0"}}>
                            您同意我們可以在我們自行決定下，經通知或不經通知，在任何理由包括但不僅限於違反本用戶協議下暫停或終止您使用我們全部或部份的的網站和資源。任何涉嫌違法、詐欺或濫用行為，都可以成為終止您與我們的關係並提交給執法機構的理由。一旦暫停或終止時，您使用我們提供的資源的權利將立即停止，而且我們保留去除或刪除您在我們這裡儲存的信息，包括任何賬戶或登錄信息的權利。
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div className="page-subtitle2">IX. &nbsp;適用法律</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p style={{textIndent:"0"}}>
                            本網站是由WWSC在美國加利福尼亞州（加州）的辦公室所管理。這些條款和條件適用於加州的法律所管轄。藉由瀏覽本網站，您同意遵守這些條款和條件，以及加州法庭在任何由瀏覽本網站而產生的爭議中具有專屬的司法管轄權。如果這些條款中的任何條款，因任何原因（包括但不僅限於上面提出的排除和限制條款）而被視為無效或無法執行，則該無效或無法執行的規定將被從這些條款中分隔出來，而其餘的條款將仍然繼續適用。對於從本條款和條件或任何協議中分出的這些WWSC無法執行或無法選擇行使終止的這些條款中的任何規定，不得被解釋為放棄此類條款，也不影響到這些條款和條件或任何協議及其部份的有效性或此後執行每一和所有條款的權利。除非在書面形式並經WWSC正式授權的代表簽字下，否則這些條款和條件不應該被修正、修改、變動或增補。
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div className="page-subtitle2">X. &nbsp;變更通知</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p style={{textIndent:"0"}}>
                            WWSC保留在任何時間可自行決定變更本用戶協議中的任何條款與條件或本網站的任何政策或準則的權利。當我們作出變更時，我們將更新本用戶協議頂端的“最近更新”的日期。一旦公佈在本網站後，任何變更將立即生效。您在變更公佈後，繼續使用本網站將代表您接受我們的變更。我們鼓勵您在瀏覽本網站的任何時候都能查閱本用戶協議。
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div className="page-subtitle2">XI. &nbsp;聯繫信息</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p style={{textIndent:"0"}}>
                            我們的聯繫方式可在我們的網站上的 <Link to="/contact-us">聯繫我們</Link> 鏈接找到。
                        </p>
                        <p style={{textIndent:"0"}}>如果您對上述本網站的條款與條件有任何問題或意見，您可以聯繫我們：</p>
                        <div className="detail-section">
                            <div className="wwsc-contact-container">
                                <span>
                                    <strong>世界Wiser運動委員會 (World Wiser Sport Committee)</strong>
                                </span>
                                <span>709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA</span>
                                <span>
                                    Web Address: <Link to="/">https://worldwisersport.org/</Link>
                                </span>
                                <span>
                                    Email:
                                    <a href="mailto: info@worldwisersport.org">
                                        <em> info@worldwisersport.org</em>
                                    </a>
                                </span>
                                <span>Tel: (626) 795-7485; </span>
                            </div>
                            <p className="w3-center w3-section">©2012-2025 所有版權為世界Wiser運動委員會所擁有。</p>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </AccordionGroup>
        </>
    );
}
