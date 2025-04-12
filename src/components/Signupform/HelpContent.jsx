/** @format */

import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ResponsiveImg from "../../components/ResponsiveImg/ResponsiveImg";

const selectRefereeTypeDialogContent = (
    <div className="content-text">
        During
        <Link to={"/referee-home/signup"}>
            <AccountBoxIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
            <b>Signup</b>
        </Link>
        <b>, Referees-in-Training</b> first need to make sure to select "<b>Referee-in-Training</b>" to sign up. This
        selection is by default. If you are <b>WWSC Referees (Grade-3 or Grade-4 referees)</b>, you need to change the
        selection to "<b>WWSC Referee</b>."{" "}
    </div>
);
const selectRefereeTypeDialogContentTw = (
    <div className="content-text">
        <b>見習裁判員</b>在
        <Link to={"/referee-home/signup"}>
            <AccountBoxIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
            <b>註冊</b>
        </Link>
        時，首先必須先確定選擇「<b>見習裁判員</b>」 選項進行註冊，此為預設選項。但如果您已是本會認證的
        <b>第三或第四級裁判員</b>，則必須改變選項選擇 「<b>WWSC裁判員</b>
        」。
    </div>
);
const selectRefereeTypeDialogContentCn = (
    <div className="content-text">
        <b>见习裁判员</b>在
        <Link to={"/referee-home/signup"}>
            <AccountBoxIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
            <b>注册</b>
        </Link>
        时，首先必须先确定选择「<b>见习裁判员</b>」 选项进行注册，此为预设选项。但如果您已是本会认證的
        <b>第三或第四级裁判员</b>，则必须改变选项选择 「<b>WWSC裁判员</b>
        」。
    </div>
);
const RefereeIdDialogContent = (
    <div className="content-text">
        <p>
            Please enter your <b>referee ID number</b> as indicated on your Referee ID Card (your ID number format may
            be like WWSC-G3-SR_XXXXX or WWSC-G4-CR_XXXXX). If you don't have an assigned referee ID number(for example,
            you are a Referee-in-Training), please signup accoding to steps of signup by Referee-in-Training.
        </p>
        <br></br>
        <p>
            If you forget or can't locate your referee ID number, please email us at
            <a href="mailto:info@worldwisersport.org">
                <i> info@worldwisersport.org </i>
            </a>
            to inquire and retrieve your referee ID number.
        </p>
    </div>
);
const RefereeIdDialogContentTw = (
    <div className="content-text">
        請輸入您裁判證上的「<b>裁判員編號</b>」（参考格式為 WWSC-G3-SR-XXXXX 或
        WWSC-G4-CR-XXXXX），如果您沒有裁判員編號（例如你是見習裁判員），請你按照見習裁判員註冊步驟註冊；或如您忘了您的裁判員編號，請來函至本會電子郵箱
        <a href="mailto:info@worldwisersport.org">
            <i>info@worldwisersport.org</i>
        </a>{" "}
        查詢您的裁判員編號。
    </div>
);

const RefereeIdDialogContentCn = (
    <div className="content-text">
        请输入您裁判證上的「<b>裁判员编号</b>」（参考格式为 WWSC-G3-SR-XXXXX 或
        WWSC-G4-CR-XXXXX），如您没有裁判员编号（如见习裁判员），请按照见习裁判员注册步骤注册；或如您忘了您的裁判员编号，请来函至本会电子邮箱
        <a href="mailto:info@worldwisersport.org">
            <i>info@worldwisersport.org</i>
        </a>{" "}
        查询您的裁判员编号。
    </div>
);

const displayNameDialogContent = (
    <div className="content-text" style={{ marginLeft: "0" }}>
        A <b>User's Display Name</b> is the name that a user chooses to be known by, which may be different from their
        legal name. It's often a combination of their first and last name. (for example, John Doe).
    </div>
);
const displayNameDialogContentTw = (
    <div className="content-text">
        「<b>用戶顯示名稱</b>
        」是用戶選擇的一個名稱，可用來標識自己，這個名稱可以與你的法定名字不同。但通常是用户的名字和姓氏的組合（例如：李大明）。
    </div>
);
const displayNameDialogContentCn = (
    <div className="content-text">
        「<b>用户显示名称</b>
        」是用户选择的一个名称，可用来标识自己，这个名称可以与你的法定名字不同。但通常是用户的名字和姓氏的组合（例如：李大明）。
    </div>
);

const emailDialogContent = (
    <div style={{ textIndent: "0" }} className="content-text">
        <span>
            1. &nbsp; Please enter your <b>personal valid email address</b>. Please don't sign up using your
            organization's or a shared email address.
        </span>
        <br></br>
        <span>
            2. &nbsp; Please also don't use the same email address to sign up and creat multiple referee accounts.
        </span>
        <br></br>
        <span>
            3. &nbsp; The email address you entered will be not only used as a unique username to
            <Link to={"/referee-home/login"}>
                <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                <strong>Login</strong>
            </Link>{" "}
            to our system, but also used to receive email notifications from our system if you{" "}
            <b>forget and want to reset your password</b>. To prevent from missing any important email notifications
            from our system, it is important to sign up with a personal valid email address that you are currently
            using. Thank you!
        </span>{" "}
    </div>
);
const emailDialogContentTw = (
    <div style={{ textIndent: "0" }} className="content-text">
        <span>
            1. &nbsp; 請輸入裁判員目前使用的<b>有效個人電子郵箱</b>
            ，不要使用團體或共享的電子郵箱註冊；
        </span>
        <br></br>
        <span>2. &nbsp; 也請不要使用同一個電子郵箱重複註冊多個賬號；</span>
        <br></br>
        <span>
            3. &nbsp; 此輸入的電子郵箱除了用來
            <Link to={"/referee-home/login"}>
                <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                <strong>登入</strong>
            </Link>
            本系統外，也會用來接收系統發出的<b>忘記/重設密碼</b>
            的電子郵件通知！ 因此為了避免錯失重要的系統電子郵件通知，
            <b>
                <u>請務必輸入您目前使用的有效個人電子郵箱</u>
            </b>
            ，謝謝！
        </span>{" "}
    </div>
);
const emailDialogContentCn = (
    <div style={{ textIndent: "0" }} className="content-text">
        <span>
            1. &nbsp;请输入裁判员目前使用的<b>有效个人电子邮箱</b>
            ，不要使用团体或共享的电子邮箱注册；
        </span>
        <br></br>
        <span>2. &nbsp;也请不要使用同一个电子邮箱重複注册多个账号；</span>
        <br></br>
        <span>
            3. &nbsp;此输入的电子邮箱除了用来{" "}
            <Link to={"/referee-home/login"}>
                <LoginIcon sx={{ paddingBottom: "2px", fontSize: "1.2rem" }} />
                <strong>登入</strong>
            </Link>
            本系统外，也会用来接收系统发出的<b>忘记/重设密码</b>
            的电子邮件通知！ 因此为了避免错失重要的系统电子邮件通知，
            <b>
                <u>请务必输入您目前使用的有效个人电子邮箱</u>
            </b>
            ，谢谢！
        </span>{" "}
    </div>
);

const passwordDialogContent = (
    <div className="content-text">
        <span>
            To ensure the protection of the system and the security of your personal information, as well as to prevent
            unauthorized access to your account, please adhere to the following password requirements when setting your
            password:
        </span>
        <br></br>
        <span style={{ marginLeft: "1rem" }}>
            1. &nbsp;The password length must be no less than 6 characters and no more than 12 characters;
        </span>
        <br></br>
        <span style={{ marginLeft: "1rem" }}>
            2. &nbsp;The password may contain:
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "2rem" }}>
                <span>&#9632; &nbsp;English alphabets (a-z or A-Z);</span>
                <span>&#9632; &nbsp;Numbers (0-9)</span>
                <span>&#9632; &nbsp;Any characterics like:~ ! ? @ # $ % ^ & * _ - + </span>
            </div>
        </span>
        <span style={{ marginLeft: "1rem" }}>
            3. &nbsp;The password <b>must not</b> contain any spaces;
        </span>{" "}
        <br></br>
        <span style={{ marginLeft: "1rem" }}>4. &nbsp; We suggest your password better containing:</span>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "2rem" }}>
            <span>&#9632; &nbsp;At least one uppercase letter (A-Z) and one lowercase letter (a-z);</span>
            <span>&#9632; &nbsp;At least one number (0-9).</span>
        </div>
    </div>
);
const passwordDialogContentTw = (
    <div className="content-text">
        <span>
            請輸入裁判員的帳戶<b>密碼</b>
            ，為了能保護系統和您的個人資訊安全，和防止他人盜用您的賬戶，請遵守以下的密碼要求，來設定您的密碼：
        </span>
        <br></br>
        <span style={{ marginLeft: "1rem" }}>1. &nbsp;密碼的長度不能少於6個字符和多於12個字符；</span> <br></br>
        <span style={{ marginLeft: "1rem" }}>
            2. &nbsp;密碼可以包含以下字符：
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "2rem" }}>
                <span>&#9632; &nbsp;大小寫英文字母（ A-Z 或 a-z）；</span>
                <span>&#9632; &nbsp;數字 （0-9）；</span>
                <span>&#9632; &nbsp;或任何以下符号：~ ! ? @ # $ % ^ & * _ - + </span>
            </div>
        </span>
        <span style={{ marginLeft: "1rem" }}>3. &nbsp;密碼中不能包含空格；</span>
        <br></br>
        <span style={{ marginLeft: "1rem" }}>4. &nbsp;建議密碼最好包含：</span>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "2rem" }}>
            <span>&#9632; &nbsp;至少 1 個大寫英文字母 （A-Z）和 1 個小寫英文字母 （a-z）；</span>
            <span>&#9632; &nbsp;至少 1 個數字 （0-9）</span>
        </div>
    </div>
);

const passwordDialogContentCn = (
    <div className="content-text">
        <span>
            请输入裁判员的帐户<b>密码</b>
            ，为了能保护系统和您的个人资讯安全，和防止他人盗用您的账户，请遵守以下的密码要求，来设定您的密码：
        </span>
        <br></br>
        <span style={{ marginLeft: "1rem" }}>1.  密码的长度不能少於6个字符和多於12个字符；</span> <br></br>
        <span style={{ marginLeft: "1rem" }}>
            2.  密码可以包含以下字符：
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "2rem" }}>
                <span>■  大小写英文字母（ A-Z 或 a-z）；</span>
                <span>■  数字 （0-9）；</span>
                <span>■  或任何以下符号：~ ! ? @ # $ % ^ & * _ - + </span>
            </div>
        </span>
        <span style={{ marginLeft: "1rem" }}>3.  密码中不能包含空格；</span>
        <br></br>
        <span style={{ marginLeft: "1rem" }}>4.  建议密码最好包含：</span>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "2rem" }}>
            <span>■  至少 1 个大写英文字母 （A-Z）和 1 个小写英文字母 （a-z）；</span>
            <span>■  至少 1 个数字 （0-9）</span>
        </div>
    </div>
);

const photoDialogContent = (
    <div className="content-text">
        <span >
            Click "<b> Select a Photo to Upload</b>" button to open the folder containing the photo directory stored on
            your computer. Please be advised that your selected file must be in a image file format (for example, .jpg
            or .png) and the file size must be less than 1 MB. The uploaded photo will be used for your Referee ID card
            and personal profile for identification purposes. Prior to uploading your phoro, please review our
            requirements for
            <a
                href="/assets/Referee/signupForm/Size and Format of Photo for WWSC Wiser Referee ID Card.pdf"
                target="_blank"
            >
                {" "}
                Size and Format of Photo for WWSC Wiser Referee ID Card
            </a>
        </span>
        <ResponsiveImg src="/assets/Referee/signupForm/signup_form_referee_Photo_1.jpg" alt="Select a file to upload" />

        <span >
            After selecting the appropriate photo, please click the <b>Open</b> button to confirm your selection.
        </span>
        <ResponsiveImg
            src="/assets/Referee/signupForm/signup_form_referee_Photo_2.jpg"
            alt="Open folder to select a file"
        />

        <span >
            You will see the selected photo as shown below. After confirming your selection, please click the "
            <b>Signup</b>" button to complete the signup process. If you want to select a different photo, please click
            the "<b>Clear Selection</b>" button to re-select your desired photo again.
        </span>
        <ResponsiveImg src="/assets/Referee/signupForm/signup_form_referee_Signup_1.jpg" alt="Complete Signup" />
    </div>
);
const photoDialogContentTw = (
    <div className="content-text">
        <span >
            點擊以下「<b>選擇上傳照片</b>」
            按鍵，以打開儲存在您電腦中照片目錄的檔案夾。請注意選擇的檔案必須是圖形檔案格式（例如：.jpg
            或.png檔案格式），其檔案尺寸必須小於 1 MB。上傳的照片將作為您<b>裁判員識別證</b>和<b>個人檔案照片辨識</b>
            使用。上傳照片前，請詳細閱讀本會有關
            <a href="/assets/Referee/signupForm/裁判員識別證照片尺寸和規格要求.pdf" target="_blank">
                「裁判員識別證」照片的尺寸和規格要求
            </a>
            ，謝謝！
        </span>{" "}
        <ResponsiveImg
            src="/assets/Referee/signupForm/signup_form_referee_Photo_1_TW.jpg"
            alt="選擇上傳裁判證和檔案照片"
        />
        <span >
            選擇適當的照片後，請點擊「<b>開啟(O)」</b>按鍵以確認選擇！
        </span>
        <ResponsiveImg src="/assets/Referee/signupForm/signup_form_referee_Photo_2_TW.jpg" alt="選擇適當的照片" />
        <span >
            您將看到您選擇的照片，確認照片後，最後點擊「<b>註冊</b>」按鍵以完成註冊步驟！但如想重新選擇不同照片，請點擊
            「<b>清除重新選擇</b>」按鍵，重新選擇您想要的照片。
        </span>
        <ResponsiveImg src="/assets/Referee/signupForm/signup_form_referee_Signup_1_TW.jpg" alt="完成註冊" />
    </div>
);

const photoDialogContentCn = (
    <div className="content-text">
        <span>
            点击以下「<b>选择上传照片</b>」
            按键，以打开储存在您电脑中照片目录的档案夹。请注意选择的档案必须是图像档案格式（例如：.jpg
            或.png档案格式），其档案尺寸必须小於 1 MB。上传的照片将作为您<b>裁判员识别證</b>和<b>个人档案照片辨识</b>
            使用。上传照片前，请详细阅读本会有关
            <a href="/assets/Referee/signupForm/裁判员识别證照片尺寸和规格要求.pdf" target="_blank">
                「裁判员识别證」照片的尺寸和规格要求
            </a>
            ，谢谢！
        </span>
        <ResponsiveImg
            src="/assets/Referee/signupForm/signup_form_referee_Photo_1_CN.jpg"
            alt="选择上传裁判證和档案照片"
        />

        <span>
            选择适当的照片後，请点击「<b>开启(O)」</b>按键以确认选择！
        </span>
        <ResponsiveImg src="/assets/Referee/signupForm/signup_form_referee_Photo_2_TW.jpg" alt="选择适当的照片" />

        <span>
            您将看到您选择的照片，确认照片後，最後点击「<b>注册</b>」按键以完成注册步骤！但如想重新选择不同照片，请点击
            「<b>清除重新选择</b>」按键，重新选择您想要的照片。
        </span>
        <ResponsiveImg src="/assets/Referee/signupForm/signup_form_referee_Signup_1_CN.jpg" alt="完成注册" />
    </div>
);

export {
    selectRefereeTypeDialogContent,
    selectRefereeTypeDialogContentTw,
    selectRefereeTypeDialogContentCn,
    RefereeIdDialogContent,
    RefereeIdDialogContentTw,
    RefereeIdDialogContentCn,
    displayNameDialogContent,
    displayNameDialogContentTw,
    displayNameDialogContentCn,
    emailDialogContent,
    emailDialogContentTw,
    emailDialogContentCn,
    passwordDialogContent,
    passwordDialogContentTw,
    passwordDialogContentCn,
    photoDialogContent,
    photoDialogContentTw,
    photoDialogContentCn,
};
