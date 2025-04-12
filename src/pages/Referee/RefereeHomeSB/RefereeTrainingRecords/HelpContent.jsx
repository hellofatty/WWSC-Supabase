/** @format */

// import { Link } from "react-router-dom";
// import LoginIcon from "@mui/icons-material/Login";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";

const selectAuthOrgDialogContent = (
    <ol className="referee-grade-list">
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            Click the down arrow button <KeyboardArrowDownIcon /> to expand the pull-down menu.
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            Select the WWSC authorized training organization of your attending referee training class from the list.
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            You can quickly find the organization by just typing the partial name of the organization. You can also
            check if the status of authorization is still "active" or has expired.
        </li>{" "}
    </ol>
);

const selectAuthOrgDialogContentTw = (
    <ol className="referee-grade-list">
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            請點擊下拉箭頭按鈕
            <KeyboardArrowDownIcon />
            以展開下拉選單。
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            從列表中選擇舉辦您參加裁判員培訓班的授權培訓團體。
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            你可以通過輸入授權培訓團體的部分中文名稱來快速找到該授權培訓團體。
        </li>{" "}
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            你也可以確認培訓團體的目前授權是否還「有效」或已「過期」。
        </li>
    </ol>
);
const selectAuthOrgDialogContentCn = (
    <ol className="referee-grade-list">
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            请点击下拉箭头按钮
            <KeyboardArrowDownIcon />
            以展开下拉选单。
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            从列表中选择举办您参加裁判员培训班的授权培训团体。
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            你可以通过输入授权培训团体的部分中文名称来快速找到该授权培训团体。
        </li>{" "}
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            你也可以确认培训团体的目前授权是否还「有效」或已「过期」。
        </li>
    </ol>
);

// Instructor Dialog
const selectInstructorDialogContent = (
    <ol className="referee-grade-list">
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            Click the down arrow button <KeyboardArrowDownIcon /> to expand the pull-down menu.
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            Select the training instructor of your attending referee training class from the list.
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            You can quickly find the training instructor by just typing the referee ID number or any partial name of the
            instructor.
        </li>{" "}
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            The current status of all Grade-3 referees in the training instructor list is "valid."
        </li>{" "}
    </ol>
);

const selectInstructorDialogContentTw = (
    <ol className="referee-grade-list">
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            請點擊下拉箭頭按鈕
            <KeyboardArrowDownIcon />
            以展開下拉選單。
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            從列表中選擇舉辦您參加裁判員培訓班的培訓講師。
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            你可以通過輸入培訓講師的裁判員編號或部分名字來快速找到該培訓講師。
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            列表中所列培訓講師，其目前第三級裁判證的狀態為「有效」。
        </li>
    </ol>
);

const selectInstructorDialogContentCn = (
    <ol className="referee-grade-list">
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            请点击下拉箭头按钮
            <KeyboardArrowDownIcon />
            以展开下拉选单。
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            从列表中选择举办您参加裁判员培训班的培训讲师。
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            你可以通过输入培训讲师的裁判员编号或部分名字来快速找到该培训讲师。
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            列表中所列培训讲师，其目前第三级裁判證的状态为「有效」。
        </li>
    </ol>
);

// Select Country Dialog Content

const selectCountryDialogContent = (
    <ol className="referee-grade-list">
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            Click the down arrow button <KeyboardArrowDownIcon /> to expand the pull-down menu.
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            Select the location (country/district) of your attending referee training class from the list.
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            You can quickly find the location by just typing the partial name of your country/district or just the
            country code (e.g., "US" for United States)
        </li>{" "}
    </ol>
);
const selectCountryDialogContentTw = (
    <ol className="referee-grade-list">
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            請點擊下拉箭頭按鈕
            <KeyboardArrowDownIcon />
            以展開下拉選單。
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            從列表中選擇您參加的裁判員培訓班地點（國家/地區）
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            您可以通過輸入國家/地區的部分中文名稱或國家代碼（例如，“US”代表美國）來快速找到該地點。
        </li>
    </ol>
);
const selectCountryDialogContentCn = (
    <ol className="referee-grade-list">
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            请点击下拉箭头按钮
            <KeyboardArrowDownIcon />
            以展开下拉选单。
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            从列表中选择您参加的裁判员培训班地点（国家/地区）
        </li>
        <li
            className="content-list-item"
            style={{
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
                marginRight: "12px",
            }}
        >
            您可以通过输入国家/地区的部分中文名称或国家代码（例如，“US”代表美国）来快速找到该地点。
        </li>
    </ol>
);

// const RefereeIdDialogContent = (
//     <>
//         <p className="content-text">
//             Please enter your <b>referee ID number</b> as indicated on your Referee ID Card (your ID number format may
//             be like WWSC-G3-SR_XXXXX or WWSC-G4-CR_XXXXX). If you don't have an assigned referee ID number(for example,
//             you are a Referee-in-Training), please signup accoding to steps of signup by Referee-in-Training.
//         </p>
//         <p>
//             If you forget or can't locate your referee ID number, please email us at
//             <a href="mailto:info@worldwisersport.org">
//                 <i> info@worldwisersport.org </i>
//             </a>
//             to inquire and retrieve your referee ID number.
//         </p>
//     </>
// );
// const RefereeIdDialogContentTw = (
//     <p className="content-text">
//         請輸入您裁判證上的「<b>裁判員編號</b>」（参考格式為 WWSC-G3-SR-XXXXX 或
//         WWSC-G4-CR-XXXXX），如果您沒有裁判員編號（例如你是見習裁判員），請你按照見習裁判員登錄步驟登錄；或如您忘了您的裁判員編號，請來函至本會電子郵箱
//         <a href="mailto:info@worldwisersport.org">
//             <i>info@worldwisersport.org</i>
//         </a>{" "}
//         查詢您的裁判員編號。
//     </p>
// );

// const RefereeIdDialogContentCn = (
//     <p className="content-text">
//         请输入您裁判證上的「<b>裁判员编号</b>」（参考格式为 WWSC-G3-SR-XXXXX 或
//         WWSC-G4-CR-XXXXX），如您没有裁判员编号（如见习裁判员），请按照见习裁判员登录步骤登录；或如您忘了您的裁判员编号，请来函至本会电子邮箱
//         <a href="mailto:info@worldwisersport.org">
//             <i>info@worldwisersport.org</i>
//         </a>{" "}
//         查询您的裁判员编号。
//     </p>
// );

// const displayNameDialogContent = (
//     <p className="content-text">
//         A <b>User's Display Name</b> is the name that a user chooses to be known by, which may be different from their
//         legal name. It's often a combination of their first and last name. (for example, John Doe).
//     </p>
// );
// const displayNameDialogContentTw = (
//     <p className="content-text">
//         「<b>用戶顯示名稱</b>
//         」是用戶選擇的一個名稱，可用來標識自己，這個名稱可以與你的法定名字不同。但通常是用户的名字和姓氏的組合（例如：李大明）。
//     </p>
// );
// const displayNameDialogContentCn = (
//     <p className="content-text">
//         「<b>用户显示名称</b>
//         」是用户选择的一个名称，可用来标识自己，这个名称可以与你的法定名字不同。但通常是用户的名字和姓氏的组合（例如：李大明）。
//     </p>
// );

// const emailDialogContent = (
//     <ol className="referee-grade-list">
//         <li
//             className="content-list-item"
//             style={{
//                 fontSize: "0.9rem",
//                 marginTop: "12px",
//                 marginBottom: "12px",
//                 marginRight: "12px",
//             }}
//         >
//             Please enter your <b>personal valid email address</b>. Please don't sign up using your organization's or a
//             shared email address.
//         </li>
//         <li
//             className="content-list-item"
//             style={{
//                 fontSize: "0.9rem",
//                 marginTop: "12px",
//                 marginBottom: "12px",
//                 marginRight: "12px",
//             }}
//         >
//             Please also don't use the same email address to sign up and creat multiple referee accounts. The email
//             address you entered will not only be used as a unique username to
//             <Link to={"/referee-home/login"}>
//                 <LoginIcon style={{ marginRight: "2px" }} />
//                 <strong>Login</strong>
//             </Link>{" "}
//             to our system, but also used to receive email notifications from our system if you{" "}
//             <b>forget and want to reset your password</b>.
//         </li>
//         <li
//             className="content-list-item"
//             style={{
//                 fontSize: "0.9rem",
//                 marginTop: "12px",
//                 marginBottom: "12px",
//                 marginRight: "12px",
//             }}
//         >
//             To prevent from missing any important emails from our system, it is important to sign up with a personal
//             valid email address that you are currently using. Thank you!
//         </li>{" "}
//     </ol>
// );
// const emailDialogContentTw = (
//     <ol className="referee-grade-list">
//         <li
//             className="content-list-item"
//             style={{
//                 fontSize: "0.9rem",
//                 marginTop: "12px",
//                 marginBottom: "12px",
//                 marginRight: "12px",
//             }}
//         >
//             請輸入裁判員目前使用的<b>有效個人電子郵箱</b>
//             ，不要使用團體或共享的電子郵箱登錄，
//         </li>
//         <li
//             className="content-list-item"
//             style={{
//                 fontSize: "0.9rem",
//                 marginTop: "12px",
//                 marginBottom: "12px",
//                 marginRight: "12px",
//             }}
//         >
//             也請不要使用同一個電子郵箱重複登錄多個賬號。此輸入的電子郵箱除了用來{" "}
//             <Link to={"/referee-home/login"}>
//                 <LoginIcon style={{ fontSize: "1.2rem", marginRight: "2px" }} />
//                 <strong>登入</strong>
//             </Link>
//             本系統外，也會用來接收系統發出的<b>忘記/重設密碼</b>
//             的電子郵件通知！
//         </li>
//         <li
//             className="content-list-item"
//             style={{
//                 fontSize: "0.9rem",
//                 marginTop: "12px",
//                 marginBottom: "12px",
//                 marginRight: "12px",
//             }}
//         >
//             因此為了避免錯失重要的系統電子郵件通知，
//             <b>
//                 <u>請務必輸入您目前使用的有效個人電子郵箱</u>
//             </b>
//             ，謝謝！
//         </li>{" "}
//     </ol>
// );
// const emailDialogContentCn = (
//     <ol className="referee-grade-list">
//         <li
//             className="content-list-item"
//             style={{
//                 fontSize: "0.9rem",
//                 marginTop: "12px",
//                 marginBottom: "12px",
//                 marginRight: "12px",
//             }}
//         >
//             请输入裁判员目前使用的<b>有效个人电子邮箱</b>
//             ，不要使用团体或共享的电子邮箱登录，
//         </li>
//         <li
//             className="content-list-item"
//             style={{
//                 fontSize: "0.9rem",
//                 marginTop: "12px",
//                 marginBottom: "12px",
//                 marginRight: "12px",
//             }}
//         >
//             也请不要使用同一个电子邮箱重複登录多个账号。此输入的电子邮箱除了用来{" "}
//             <Link to={"/referee-home/login"}>
//                 <LoginIcon style={{ fontSize: "1.2rem", marginRight: "2px" }} />
//                 <strong>登入</strong>
//             </Link>
//             本系统外，也会用来接收系统发出的<b>忘记/重设密码</b>
//             的电子邮件通知！
//         </li>
//         <li
//             className="content-list-item"
//             style={{
//                 fontSize: "0.9rem",
//                 marginTop: "12px",
//                 marginBottom: "12px",
//                 marginRight: "12px",
//             }}
//         >
//             因此为了避免错失重要的系统电子邮件通知，
//             <b>
//                 <u>请务必输入您目前使用的有效个人电子邮箱</u>
//             </b>
//             ，谢谢！
//         </li>{" "}
//     </ol>
// );

// const passwordDialogContent = (
//     <>
//         <br></br>
//         <p className="content-text">
//             To ensure the protection of the system and the security of your personal information, as well as to prevent
//             unauthorized access to your account, please adhere to the following password requirements when setting your
//             password:
//         </p>
//         <ol className="referee-grade-list" type="1">
//             <li className="content-list-item">
//                 The password length must be no less than 6 characters and no more than 12 characters;
//             </li>
//             <li className="content-list-item">
//                 The password may contain:
//                 <ul style={{ listStyle: "square" }}>
//                     <li className="content-list-item">English alphabets (a-z or A-Z);</li>
//                     <li className="content-list-item">Numbers (0-9)</li>
//                     <li className="content-list-item">Any characterics like:~ ! ? @ # $ % ^ & * _ - + </li>
//                 </ul>
//             </li>
//             <li className="content-list-item">
//                 The password <b>must not</b> contain any spaces;
//             </li>
//             <li className="content-list-item">We suggest your password better containing:</li>
//             <ul style={{ listStyle: "square" }}>
//                 <li className="content-list-item">
//                     At least one uppercase letter (A-Z) and one lowercase letter (a-z);
//                 </li>
//                 <li className="content-list-item">At least one number (0-9).</li>
//             </ul>
//         </ol>
//     </>
// );
// const passwordDialogContentTw = (
//     <>
//         <br></br>
//         <p className="content-text">
//             請輸入裁判員的帳戶<b>密碼</b>
//             ，為了能保護系統和您的個人資訊安全，和防止他人盜用您的賬戶，請遵守以下的密碼要求，來設定您的密碼：
//         </p>
//         <ol className="referee-grade-list" type="1">
//             <li className="content-list-item">密碼的長度不能少於6個字符和多於12個字符；</li>
//             <li className="content-list-item">
//                 密碼可以包含以下字符：
//                 <ul style={{ listStyle: "square" }}>
//                     <li className="content-list-item">大小寫英文字母（ A-Z 或 a-z）；</li>
//                     <li className="content-list-item">數字 （0-9）；</li>
//                     <li className="content-list-item">或任何以下符号：~ ! ? @ # $ % ^ & * _ - + </li>
//                 </ul>
//             </li>
//             <li className="content-list-item">密碼中不能包含空格；</li>
//             <li className="content-list-item">建議密碼最好包含：</li>
//             <ul style={{ listStyle: "square" }}>
//                 <li className="content-list-item">至少 1 個大寫英文字母 （A-Z）和 1 個小寫英文字母 （a-z）；</li>
//                 <li className="content-list-item">至少 1 個數字 （0-9）</li>
//             </ul>
//         </ol>
//     </>
// );

// const passwordDialogContentCn = (
//     <>
//         <br></br>
//         <p className="content-text">
//             请输入裁判员的帐户<b>密码</b>
//             ，为了能保护系统和您的个人资讯安全，和防止他人盗用您的账户，请遵守以下的密码要求，来设定您的密码：
//         </p>
//         <ol className="referee-grade-list" type="1">
//             <li className="content-list-item">密码的长度不能少於6个字符和多於12个字符；</li>
//             <li className="content-list-item">
//                 密码可以包含以下字符：
//                 <ul style={{ listStyle: "square" }}>
//                     <li className="content-list-item">大小写英文字母（ A-Z 或 a-z）；</li>
//                     <li className="content-list-item">数字 （0-9）；</li>
//                     <li className="content-list-item">或任何以下符号：~ ! ? @ # $ % ^ & * _ - + </li>
//                 </ul>
//             </li>
//             <li className="content-list-item">密码中不能包含空格；</li>
//             <li className="content-list-item">建议密码最好包含：</li>
//             <ul style={{ listStyle: "square" }}>
//                 <li className="content-list-item">至少 1 个大写英文字母 （A-Z）和 1 个小写英文字母 （a-z）；</li>
//                 <li className="content-list-item">至少 1 个数字 （0-9）</li>
//             </ul>
//         </ol>
//     </>
// );

// const photoDialogContent = (
//     <>
//         <p className="content-text">
//             Click "<b> Select a Photo to Upload</b>" button to open the folder containing the photo directory stored on
//             your computer. Please be advised that your selected file must be in a image file format (for example, .jpg
//             or .png) and the file size must be less than 1 MB. The uploaded photo will be used for your Referee ID card
//             and personal profile for identification purposes. Prior to uploading your phoro, please review our
//             requirements for
//             <a
//                 href="/assets/Referee/signupForm/Size and Format of Photo for WWSC Wiser Referee ID Card.pdf"
//                 target="_blank"
//             >
//                 {" "}
//                 Size and Format of Photo for WWSC Wiser Referee ID Card
//             </a>
//         </p>
//         <img
//             src="/assets/Referee/signupForm/signup_form_referee_Photo_1.jpg"
//             alt="Select a file to upload"
//             style={{ height: "450px" }}
//             className="img-layout"
//         />

//         <p className="content-text">
//             After selecting the appropriate photo, please click the <b>Open</b> button to confirm your selection.
//         </p>
//         <img
//             src="/assets/Referee/signupForm/signup_form_referee_Photo_2.jpg"
//             alt="Open folder to select a file"
//             style={{ height: "300px" }}
//             className="img-layout"
//         />
//         <p className="content-text">
//             You will see the selected photo as shown below. After confirming your selection, please click the "
//             <b>Signup</b>" button to complete the signup process. If you want to select a different photo, please click
//             the "<b>Clear Selection</b>" button to re-select your desired photo again.
//         </p>
//         <img
//             src="/assets/Referee/signupForm/signup_form_referee_Signup_1.jpg"
//             alt="Complete Signup"
//             style={{ height: "450px", margin: "auto" }}
//             className="img-layout"
//         />
//     </>
// );
// const photoDialogContentTw = (
//     <>
//         <p className="content-text">
//             點擊以下「<b>選擇上傳照片</b>」
//             按鍵，以打開儲存在您電腦中照片目錄的檔案夾。請注意選擇的檔案必須是圖形檔案格式（例如：.jpg
//             或.png檔案格式），其檔案尺寸必須小於 1 MB。上傳的照片將作為您<b>裁判員識別證</b>和<b>個人檔案照片辨識</b>
//             使用。上傳照片前，請詳細閱讀本會有關
//             <a href="/assets/Referee/signupForm/裁判員識別證照片尺寸和規格要求.pdf" target="_blank">
//                 「裁判員識別證」照片的尺寸和規格要求
//             </a>
//             ，謝謝！
//         </p>{" "}
//         <img
//             src="/assets/Referee/signupForm/signup_form_referee_Photo_1_TW.jpg"
//             alt="選擇上傳裁判證和檔案照片"
//             style={{ height: "450px" }}
//             className="img-layout"
//         />
//         <p className="content-text">
//             選擇適當的照片後，請點擊「<b>開啟(O)」</b>按鍵以確認選擇！
//         </p>
//         <img
//             src="/assets/Referee/signupForm/signup_form_referee_Photo_2_TW.jpg"
//             alt="選擇適當的照片"
//             style={{ height: "300px" }}
//             className="img-layout"
//         />
//         <p className="content-text">
//             您將看到您選擇的照片，確認照片後，最後點擊「<b>登錄</b>」按鍵以完成登錄步驟！但如想重新選擇不同照片，請點擊
//             「<b>清除重新選擇</b>」按鍵，重新選擇您想要的照片。
//         </p>
//         <img
//             src="/assets/Referee/signupForm/signup_form_referee_Signup_1_TW.jpg"
//             alt="完成登錄"
//             style={{ height: "450px" }}
//             className="img-layout"
//         />
//     </>
// );

// const photoDialogContentCn = (
//     <>
//         <p className="content-text">
//             点击以下「<b>选择上传照片</b>」
//             按键，以打开储存在您电脑中照片目录的档案夹。请注意选择的档案必须是图像档案格式（例如：.jpg
//             或.png档案格式），其档案尺寸必须小於 1 MB。上传的照片将作为您<b>裁判员识别證</b>和<b>个人档案照片辨识</b>
//             使用。上传照片前，请详细阅读本会有关
//             <a href="/assets/Referee/signupForm/裁判员识别證照片尺寸和规格要求.pdf" target="_blank">
//                 「裁判员识别證」照片的尺寸和规格要求
//             </a>
//             ，谢谢！
//         </p>
//         <img
//             src="/assets/Referee/signupForm/signup_form_referee_Photo_1_CN.jpg"
//             alt="选择上传裁判證和档案照片"
//             style={{ height: "450px" }}
//             className="img-layout"
//         />

//         <p className="content-text">
//             选择适当的照片後，请点击「<b>开启(O)」</b>按键以确认选择！
//         </p>
//         <img
//             src="/assets/Referee/signupForm/signup_form_referee_Photo_2_TW.jpg"
//             alt="选择适当的照片"
//             style={{ height: "300px" }}
//             className="img-layout"
//         />

//         <p className="content-text">
//             您将看到您选择的照片，确认照片後，最後点击「<b>登录</b>」按键以完成登录步骤！但如想重新选择不同照片，请点击
//             「<b>清除重新选择</b>」按键，重新选择您想要的照片。
//         </p>
//         <img
//             src="/assets/Referee/signupForm/signup_form_referee_Signup_1_CN.jpg"
//             alt="完成登录"
//             style={{ height: "450px" }}
//             className="img-layout"
//         />
//     </>
// );

export {
    selectAuthOrgDialogContent,
    selectAuthOrgDialogContentTw,
    selectAuthOrgDialogContentCn,
    selectInstructorDialogContent,
    selectInstructorDialogContentTw,
    selectInstructorDialogContentCn,
    selectCountryDialogContent,
    selectCountryDialogContentTw,
    selectCountryDialogContentCn,
    // RefereeIdDialogContent,
    // RefereeIdDialogContentTw,
    // RefereeIdDialogContentCn,
    // displayNameDialogContent,
    // displayNameDialogContentTw,
    // displayNameDialogContentCn,
    // emailDialogContent,
    // emailDialogContentTw,
    // emailDialogContentCn,
    // passwordDialogContent,
    // passwordDialogContentTw,
    // passwordDialogContentCn,
    // photoDialogContent,
    // photoDialogContentTw,
    // photoDialogContentCn,
};
