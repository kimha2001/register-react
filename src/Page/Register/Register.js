import React from "react";
import "./Register.css";
import RegisterForm from "../../Component/RegisterForm/RegisterForm";

const Register = () => {
    return (
        <div className="Register">
            <div className="headerRegister">Create Account</div>
            <RegisterForm />
        </div>
    );
};

export default Register;
