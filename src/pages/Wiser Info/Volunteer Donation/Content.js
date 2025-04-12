/** @format */

import { PrimaryTitle, ResParagraph, SecondaryTitle } from "../../../components/Text/Title/Title";

export function ContentEng() {
    return (
        <>
           
            <PrimaryTitle text="Join and Support Us"/>
            <SecondaryTitle text="Become a Volunteer to Assist Us"/>
            {/* <div className="page-secondary-title" style={{ border: "0" }}>
                Become a Volunteer to Assist Us
            </div> */}
            <ResParagraph>
                The <b>World Wiser Sport Committee (WWSC)</b> The World Wiser Sport Committee (WWSC) is a legally
                established nonprofit organization in the United States, dedicated to promoting the public good through
                the advancement of Wiser sport. We welcome volunteers to help further our mission and support the
                development of Wiser sport in your country or region. You can contribute financially, participate in
                hands-on volunteering, or serve as an ambassador for Wiser sport. Together, we will flourish and work
                collaboratively as a united community.
            </ResParagraph>
            <SecondaryTitle text="Donat to Support Us"/>
         
            <ResParagraph>
                Your contribution to the World Wiser Sport Committee (WWSC) plays a crucial role in the advancement and
                promotion of Wiser sport. As a <b>501(c)(3) </b>non-profit organization, the WWSC is dedicated to
                spreading Wiser sport globally. Our mission is to empower individuals from diverse regions, races, ages,
                and cultures to engage in Wiser sport, thereby alleviating illness, slowing the aging process, enhancing
                both physical and mental well-being, fostering wisdom, building friendships, uplifting moral values, and
                ultimately promoting peace and happiness for all humanity. Your generous donation aids our staff,
                supports educational initiatives in schools, facilitates community outreach, and funds competitions.
                Contribute today to ensure a thriving future for Wiser sport both locally and internationally.
            </ResParagraph>

            <ResParagraph>
                {" "}
                To donate by mail, please send your contribution to our mailing address below. For information and
                inquiries, contact us at the following email address. Thanks!
            </ResParagraph>
            <div
                className="wwsc-contact-info"
                style={{
                    color: "teal",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    fontSize: "0.85rem",
                }}
            >
                <img
                    className="referee-card-back-logo"
                    src="/WWSC-logo-min.png"
                    alt="logo"
                    style={{ width: "80px", marginBottom: "16px" }}
                />

                <div className="wwsc-title" style={{ fontSize: "0.9rem" }}>
                    <strong>World Wiser Sport Committee</strong>
                </div>

                <div className="wwsc-address" style={{ marginBottom: "6px" }}>
                    709 E. Colorado Blvd., Suite 270, Pasadena, CA 91101
                </div>
                <div className="wwsc-phone-email" style={{ marginBottom: "6px" }}>
                    Tel: 626.795.7485; Email:&nbsp;
                    <a href="mailto:info@worldwisersport.org">
                        <i>info@worldwisersport.org</i>
                    </a>{" "}
                </div>
                {/* <div className="wwsc-email"></div> */}
                <div className="wwsc-web">
                    <a href="https://worldwisersport.org/">www.wordwisersport.org</a>
                </div>
            </div>
            <br></br>
        </>
    );
}

export function ContentTW() {
    return (
        <>
            <PrimaryTitle text="加入和支持我們"/>
            <SecondaryTitle text="成為義工幫助我們"/>
      

            <ResParagraph>
                <b>世界Wiser運動委員會（WWSC）</b>
                是一個在美國合法建立的非營利組織，致力於通過推廣Wiser運動來服務公眾利益。我們誠邀志願義工共同協助完成我們的使命，在您所在的國家或地區幫助發展和促進Wiser運動。您可以通過捐献金錢、參與實地志願服務或擔任Wiser運動的推廣大使來貢獻力量。讓我們成為一個大家庭，共同努力攜手合作推廣Wiser運動。
            </ResParagraph>
      
            <SecondaryTitle text="捐獻支持我們"/>
         
            <ResParagraph>
                您對世界Wiser運動委員會的貢獻在推動和促進Wiser運動方面發揮著至關重要的作用。作為一個
                <b>501(c)(3)</b>
                非營利組織，WWSC致力於在全球推廣Wiser運動。我們的目的就是讓全世界不同地域、不同膚色、不同年齡、不同文化的人，都能通過打Wiser球，祛除疾病，延緩衰老，增強身心健康，增長智慧，增進友誼，提升道德，進而促進整個世界的和平和人類的幸福。您的慷慨捐贈將幫助我們的工作人員，支持學校的教育項目，深入接觸社區大眾，並資助各類比賽。請貢獻您的力量，以幫助Wiser運動能在未來在當地和國際上更加地蓬勃發展，謝謝！
            </ResParagraph>

            <ResParagraph>
                請通過郵寄方式捐款，請將您的捐款寄送至以下郵寄地址。如需信息或咨詢，請通過以下電子郵件地址與我們聯繫。謝謝！
            </ResParagraph>

            <div
                className="wwsc-contact-info"
                style={{
                    color: "teal",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    fontSize: "0.85rem",
                }}
            >
                <img
                    className="referee-card-back-logo"
                    src="/WWSC-logo-min.png"
                    alt="logo"
                    style={{ width: "80px", marginBottom: "16px" }}
                />

                <div className="wwsc-title" style={{ fontSize: "0.9rem" }}>
                    <strong>世界Wiser運動委員會</strong>
                </div>

                <div className="wwsc-address" style={{ marginBottom: "6px" }}>
                    709 E. Colorado Blvd., Suite 270, Pasadena, CA 91101
                </div>
                <div className="wwsc-phone-email" style={{ marginBottom: "6px" }}>
                    電話: 626.795.7485; 電子郵箱:  &nbsp;
                    <a href="mailto:info@worldwisersport.org">
                        <i>info@worldwisersport.org</i>
                    </a>{" "}
                </div>
                {/* <div className="wwsc-email"></div> */}
                <div className="wwsc-web">
                    <a href="https://worldwisersport.org/">www.wordwisersport.org</a>
                </div>
            </div>
            <br></br>
      
        </>
    );
}

export function ContentCN() {
    return (
        <>
                <PrimaryTitle text="加入和支持我们"/>
                <SecondaryTitle text="成为义工帮助我们"/>
         
            <ResParagraph>
                <b>世界Wiser运动委员会（WWSC）</b>
                是一个在美国合法建立的非营利组织，致力於通过推广Wiser运动来服务公众利益。我们诚邀志愿义工共同协助完成我们的使命，在您所在的国家或地区帮助发展和促进Wiser运动。您可以通过捐献金钱、参与实地志愿服务或担任Wiser运动的推广大使来贡献力量。让我们成为一个大家庭，共同努力携手合作推广Wiser运动。
            </ResParagraph>
            <SecondaryTitle text="捐献支持我们"/>
          

            <ResParagraph>
                您对世界Wiser運動委員會的贡献在推动和促进Wiser运动方面发挥着至关重要的作用。作为一个
                <b>501(c)(3)</b>
                非营利组织，WWSC致力于在全球推广Wiser运动。我们的目的就是让全世界不同地域、不同肤色、不同年龄、不同文化的人，都能通过打Wiser球，祛除疾病，延缓衰老，增强身心健康，增长智慧，增进友谊，提升道德，进而促进整个世界的和平和人类的幸福。您的慷慨捐赠将帮助我们的工作人员，支持学校的教育项目，深入接触社区大众，并资助各类比赛。请贡献您的力量，以帮助Wiser运动能在未来在当地和国际上更加地蓬勃发展，谢谢！
            </ResParagraph>

            <ResParagraph>
                最近通过的CARES法案允许纳税人无需逐项列举即可申报高达300美元的现金捐款作为扣除。已婚共同申报的纳税人可获得高达600美元的扣除。请咨询您的税务专业人士以获取更多信息。
            </ResParagraph>
            <ResParagraph>
                请通过邮寄方式捐款，请将您的捐款寄送至以下邮寄地址。如需信息或咨询，请通过以下电子邮件地址与我们联系。谢谢！
            </ResParagraph>
            <div
                className="wwsc-contact-info"
                style={{
                    color: "teal",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    fontSize: "0.85rem",
                }}
            >
                <img
                    className="referee-card-back-logo"
                    src="/WWSC-logo-min.png"
                    alt="logo"
                    style={{ width: "80px", marginBottom: "16px" }}
                />

                <div className="wwsc-title" style={{ fontSize: "0.9rem" }}>
                    <strong>世界Wiser运动委员会</strong>
                </div>

                <div className="wwsc-address" style={{ marginBottom: "6px" }}>
                    709 E. Colorado Blvd., Suite 270, Pasadena, CA 91101
                </div>
                <div className="wwsc-phone-email" style={{ marginBottom: "6px" }}>
                    电话: 626.795.7485; 电子邮箱:&nbsp;
                    <a href="mailto:info@worldwisersport.org">
                        <i>info@worldwisersport.org</i>
                    </a>{" "}
                </div>
                {/* <div className="wwsc-email"></div> */}
                <div className="wwsc-web">
                    <a href="https://worldwisersport.org/">www.wordwisersport.org</a>
                </div>
            </div>
          
            <br></br>
        </>
    );
}
