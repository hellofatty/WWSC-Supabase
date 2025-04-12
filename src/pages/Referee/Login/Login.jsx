/** @format */
import "./Login.css";

import LoginForm from "../../../components/LoginForm/LoginForm";
// import LoginFormSB from "../../../components/LoginForm/LoginFormSB";

export default function Login() {
    return (
        <>
            <div className="login-signup-form-container">
                <div className="login-signup-form-content">
                    <LoginForm />
                    {/* <LoginFormSB /> */}
                </div>
            </div>
        </>
    );
}
