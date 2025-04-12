/** @format */
import "./Signup.css";

import SignupForm from "../../../components/Signupform/SignupForm";

export default function Signup() {
    return (
        <div className="login-signup-form-container">
            <div className="login-signup-form-content">
                <SignupForm />
                {/* <SignupForm /> */}
            </div>
        </div>
    );
}
