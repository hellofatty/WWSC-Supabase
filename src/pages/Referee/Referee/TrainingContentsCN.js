/** @format */
import { Link } from "react-router-dom";
import { ResParagraph, ResParagraphNoIndent, SecondaryTitle } from "../../../components/Text/Title/Title";
// ======简体中文=====

export const certContent_CN = (
    <div>
        <div className="page-secondary-title"></div>
        <SecondaryTitle text="裁判员认證制度" />
        <ol style={{ color: "teal" }}>
            <li className="rt-list-item">
                所有级别的正式Wiser裁判员都必需经由世界Wiser运动委员会训练认證，合格後颁发符合其相应级别的裁判员證书。
            </li>
            <li className="rt-list-item">Wiser裁判员的级别代表该裁判员能被指派担任何种层级Wiser竞赛裁判员的资格。</li>
            <li className="rt-list-item">世界Wiser运动委员会正式认證的裁判员共分四种主要级别：</li>
            <ul style={{ color: "teal", listStyleType: "disc", marginLeft: "1rem" }}>
                <li className="rt-list-item">第一级国际级裁判（International Referee）</li>
                <li className="rt-list-item">第二级国家级裁判（National Referee）</li>
                <li className="rt-list-item">第三级地区级裁判（State Referee）</li>
                <li className="rt-list-item">第四级俱乐部级裁判 （Club Referee）</li>
            </ul>
        </ol>
    </div>
);

export const dutyContent_CN = (
    <div>
        <SecondaryTitle text="比赛中裁判员的职责" />
        <ol style={{ color: "teal" }}>
            <li className="rt-list-item">于比赛中执行世界Wiser运动委员会制定的Wiser比赛规则；</li>
            <li className="rt-list-item">维持场上比赛安全和秩序以及确保比赛队伍间的公平竞争；</li>
            <li className="rt-list-item">确定比赛场地妥善佈置和比赛中使用的球，旗子和设备符合比赛规格要求；</li>
            <li className="rt-list-item">确保参赛球员遵守Wiser 比赛礼仪和符合Wiser运动精神；</li>
            <li className="rt-list-item">掌握比赛流程并配合插旗员和记录员以让比赛顺利进行；</li>
            <li className="rt-list-item">比赛前召集两队队长以抽籤或其他方式，来决定哪队先发球和发完球后先攻击；</li>
            <li className="rt-list-item">
                吹哨的时机:
                <ul style={{ marginTop: "20px", paddingLeft: "2rem", listStyleType: "disc" }}>
                    <li className="rt-list-item">比赛开始和比赛结束；</li>
                    <li className="rt-list-item">球员开始打球动作前（拦击除外）；</li>
                    <li className="rt-list-item">裁判员做出任何手势判决前；</li>
                    <li className="rt-list-item">比赛中犯规发生时；</li>
                    <li className="rt-list-item">紧急状况时希望大家注意。</li>
                </ul>
            </li>
            <li className="rt-list-item">在球被击中关住﹑被误击，或出局后，立即做出适当的判决手势；</li>
            <li className="rt-list-item">在比赛中队伍或球员犯规后，执行相应的处罚；</li>
            <li className="rt-list-item">召集两队宣佈比赛结果；</li>
            <li className="rt-list-item">并於比赛结束后，签署和提交比赛记录表。</li>
        </ol>
    </div>
);

export const applyTrainingContent_CN = (
    <div>
      
        <SecondaryTitle text="如何申请参加第四级裁判员培训班？" />

        <ResParagraphNoIndent>
            凡是WWSC所正式授权举办的第四级裁判员培训班必须要<u>同时具备有以下两项条件</u>，
            参加的培训学员才能在通过培训课程和相关测验以及十场裁判记录考核后，获得WWSC颁发的第四级裁判员识别證：
        </ResParagraphNoIndent>
        <ol style={{ color: "teal" }}>
            <li className="rt-list-item">
                主办培训团体必须与WWSC正式签署“<b>授权举办第四级Wiser裁判员培训班协议书</b>
                ”，以获得WWSC正式授权培训的资格。在每次培训课程开始之前，主办培训团体必须向所有参加培训的学员们展示此签署的授权协议书，以證明其授权培训资格；
            </li>

            <li className="rt-list-item">
                担任第四级Wiser裁判员培训课程的培训讲师必须是
                <b>正式取得WWSC认證的第叁级地区级（State Level）Wiser 裁判员资格者</b>
                。讲师在培训时必须佩带由WWSC所颁发的第叁级裁判员识别證，證明其具有担任第四级Wiser裁判员培训班合格讲师的资格。
            </li>
        </ol>
        <ResParagraph>
            为了方便学员查询参加的培训班是否为WWSC正式授权的培训课程，本会在本会官方网站上已经公佈经本会正式
            <Link to={"/referee-zone/referee-training-organizations"}>授权的主办培训团体</Link>
            和可供查询确认担任培训讲师是否是符合本会培训讲师资格的
            <Link to={"/referee-zone/search-referee"}>第三级Wiser裁判员名单</Link>。
        </ResParagraph>
        <ResParagraph>另外，任何学员参加WWSC所授权的第四级裁判员培训班时，必须特别注意以下重要事项：</ResParagraph>
        <ul style={{ color: "teal", listStyleType: "disc" }}>
            <li className="rt-list-item">
                世界Wiser运动委员会为依法在美国正式成立的非营利纯体育机构，它<u>无偿</u>
                授权主办培训团体举办第四级裁判员培训班，其主要目的是用来推广和发展Wiser运动，因此参加本会授权培训团体所举办的培训班，
                <u>
                    <b>所有参加培训的学员是不向WWSC缴纳任何学费的</b>
                </u>
                ；
            </li>

            <li className="rt-list-item">
                虽然本会不向学员收取任何学费，但各主办培训的团体可根据自身的实际情况，自行考量决定是否要求参加培训的学员们共同分摊培训相关的费用开支，任何费用的收取和支出
                <u>都必须合理、清楚，并符合其所属国家和当地政府的法律规章</u>
                。如授权主办培训团体希望学员分摊费用来支付培训开销，主办培训团体必须在寄发培训通知时，在通知中事先以书面的方式告知将参加的学员们。请参加培训的学员们特别注意这些分摊培训费用不是WWSC要求主办培训团体收取的，这些收取的费用完全是由主办培训团体作为其培训相关支出使用，跟WWSC毫无任何关係。
            </li>
            <li className="rt-list-item">
                在培训开始之前，本会要求授权的主办培训团体必须让每一位参加培训的学员详细阅读{" "}
                <b>学员参加“第四级Wiser裁判员培训班”同意书</b>
                ，如认同同意书里规定的所有内容，每位学员需签名并註明签名日期以表同意。
                <b>
                    <u>学员只有在学员同意书中签名并註明日期後，方可继续参加培训。</u>
                </b>
                在培训课程正式开始之前，主办培训团体也需再次向参加学员公开宣佈上述所提及收取的款项是属於主办培训团体与学员之间分摊费用的一部份，其收取的款项不会交给WWSC，也不会与WWSC分享；
            </li>

            <li className="rt-list-item">
                学员们在完成第四级裁判员培训课程後，并成功通过<b>现场的笔试和裁判员手势测验</b>
                ，将获得「见习裁判员」的资格。於取得「见习裁判员」资格起一年内，
                <b>依规定必须担任至少10场Wiser比赛的裁判员</b>，并将10场比赛的
                <a href="https://worldwisersport.org/pdf/Referee_Training/%E8%A3%81%E5%88%A4%E6%AF%94%E8%B3%BD%E8%A8%98%E9%8C%84%E8%A1%A8_WWSC-Referee_Record_frm_Chinese.pdf">
                    「裁判记录表」{" "}
                </a>
                和相关證据登入并上传至本会裁判员系统，<b>合格学员必须以电子邮件向本会正式提出申请</b>
                ，本会将审核学员提交的记录资料和上传文件，等审核完毕后将发给合格学员电子格式的有效第四级Wiser裁判员识别證。
            </li>
        </ul>
    </div>
);

export const formContent_CN = (
    <div>
        <div className="rt-form-item">
            <a href="https://worldwisersport.org/pdf/G3_Referee/WWSC-G3_Referee_Work_Record_frm_Chinese_10_24_2015.pdf">
                WWSC 第三级裁判工作比赛记录表 (供第三级裁判员使用)
            </a>
        </div>
        <div className="rt-form-item">
            <a href="https://worldwisersport.org/pdf/Referee_Training/%E8%A3%81%E5%88%A4%E6%AF%94%E8%B3%BD%E8%A8%98%E9%8C%84%E8%A1%A8_WWSC-Referee_Record_frm_Chinese.pdf">
                WWSC 第四级裁判工作比赛记录表 (供见习裁判员使用)
            </a>
        </div>
    </div>
);

export const content_CN = [
    { title: "认證制度", content: certContent_CN },
    { title: "比赛职责", content: dutyContent_CN },
    { title: "裁判培训", content: applyTrainingContent_CN },
    { title: "比赛记录", content: formContent_CN },
];
