import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./RegisterForm.css";
import { useDispatch } from "react-redux";
const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
        },

        validationSchema: Yup.object({
            name: Yup.string().required("Required").min(4, "Must be 4 characters or more"),
            email: Yup.string()
                .required("Required")
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address"),
            password: Yup.string()
                .required("Required")
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                    "Password must be 7-19 characters and contain at least one letter, one number and a special character",
                ),
            confirmPassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("password"), null], "Password must match"),
            phone: Yup.string()
                .required("Required")
                .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Must be a valid phone number"),
        }),

        onSubmit: (values) => {
            window.alert("Successful Registration ");
            console.log(values);
        },
    });

    const dispatch = useDispatch();

    return (
        <section>
            <form className="infoform" onSubmit={formik.handleSubmit}>
                <label>Your name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && <p className="errorMsg">{formik.errors.name}</p>}
                <label>Email address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.errors.email && <p className="errorMsg">{formik.errors.email}</p>}

                <label>Password</label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Enter your  password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password && <p className="errorMsg">{formik.errors.password}</p>}

                <label>Confirm password</label>
                <input
                    type="text"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                />
                {formik.errors.confirmPassword && <p className="errorMsg">{formik.errors.confirmPassword}</p>}

                <label>Phone number</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                />
                {formik.errors.phone && <p className="errorMsg">{formik.errors.phone}</p>}

                <button type="submit">Continue</button>

                <div className="footerForm">
                    Already have an account? <span>sing in</span>
                </div>
            </form>
        </section>
    );
};

export default RegisterForm;
