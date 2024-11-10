import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css"

const SignupForm = () => {
    const [submitErrorMessage, setSubmitErrorMessage] = useState("");
    const [submitSuccessMessage, setSubmitSuccessMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    useEffect(() => {
        const jwtToken = Cookies.get("jwt_token");
        if (jwtToken) {
            navigate("/dashboard");
        }
    });

    const validateName = (name) => {
        const isValidInput = /^[A-Za-z\s]+$/.test(name.trim());
        if (!isValidInput) return "*only Alphabets please";
        return "";
    }
    const validateNumber = (number) => {
        if (number.trim()?.length !== 10) return "*Only 10 digits please";
        const isValidInput = /^[0-9]+$/.test(number.trim());
        if (!isValidInput) return "*only Numbers please";
        return "";
    }
    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValidInput = emailPattern.test(email.trim());
        if (!isValidInput) return "*Please Enter a Valid Email";
        return "";
    }
    const validatePassword = (password) => {
        const enteredPassword = password.trim();
        const hasUpperCase = /[A-Z]/.test(enteredPassword);
        const hasLowerCase = /[a-z]/.test(enteredPassword);
        const hasNumber = /[0-9]/.test(enteredPassword);
        const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(enteredPassword);
        const hasLength = enteredPassword.length >= 5;

        if (!(hasLength && hasLowerCase && hasUpperCase && hasSpecialChar && hasNumber)) return "*password should have an UpperCase, a LowerCase, a Number, a SpecialCharacter and minimum length 5";
        return "";
    }

    const onBlur = (e) => {
        const { name, value } = e?.target;
        let reqValue = "";
        switch (name) {
            case "firstName":
                reqValue = validateName(value);
                break;
            case "lastName":
                reqValue = validateName(value);
                break;
            case "mobileNumber":
                reqValue = validateNumber(value);
                break;
            case "email":
                reqValue = validateEmail(value);
                break;
            case "password":
                reqValue = validatePassword(value);
                break;
            default:
                break;
        }
        setErrors({
            ...errors,
            [name]: reqValue,
        })
    }

    // onClickSignupLogin 
    const onClickSignupLogin = () => {
        navigate("/login")
    }

    const onChange = (e) => {
        const { name, value } = e?.target;
        setFormData({
            ...formData,
            [name]: value.trim(),
        });
        setErrors({
            ...errors,
            [name]: "",
        })
    }

    const validateForm = () => {
        const reqErrors = {
            firstName: validateName(formData?.firstName),
            lastName: validateName(formData?.lastName),
            mobileNumber: validateNumber(formData?.mobileNumber),
            email: validateEmail(formData?.email),
            password: validatePassword(formData?.password),
        }
        setErrors({ ...errors });
        const hasErrors = Object.values(reqErrors).some(error => error !== "");

        return !hasErrors;
    }

    const onSuccessfulRegister = async (id, name, userProfileData) => {
        Cookies.set("jwt_token", `${id}`)
        const userProfileStringifiedData = JSON.stringify(userProfileData)

        await localStorage.setItem("username", name);
        await localStorage.setItem("userProfileData", userProfileStringifiedData)
        navigate("/dashboard");
    }

    // what Happens on Submit Form 
    const onSubmitSignupForm = async (event) => {
        event.preventDefault();

        if (!validateForm()) return;

        console.log("signup Triggered");

        const signupApiUrl = "http://localhost:4000/api/auth/signup";

        const userSignupData = { ...formData, mobileNumber: formData?.mobileNumber.toString() }

        const signupOptions = {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userSignupData),
        }

        try {
            const signupResponse = await fetch(signupApiUrl, signupOptions);
            console.log("signupResponse", signupResponse);
            if (signupResponse.ok) {
                setSubmitErrorMessage("");
                const signupJson = await signupResponse.json();
                const { userId, userData } = signupJson;
                const { firstName, lastName } = userData;

                const userName = firstName + " " + lastName;
                onSuccessfulRegister(userId, userName, userData);
                // const reqMsg = `${message}. You can Login now.`;
                // setSubmitSuccessMessage(reqMsg);
            } else {
                setSubmitSuccessMessage("");
                const signupJson = await signupResponse.json();
                const { message } = signupJson;
                setSubmitErrorMessage(message);
            }
        } catch (error) {
            console.error("An error occurred during signup:", error);
            setSubmitErrorMessage(`An error occurred: ${error.message}`);
        }
    }


    const signupForm = () => {
        return (
            <form className="signup-form" onSubmit={onSubmitSignupForm} >
                <div className="signup-input-el-container" >
                    <label className="signup-label-el" htmlFor="firstname"> First Name : </label>
                    <input onBlur={onBlur} onChange={onChange}
                        type="input" className="signup-input-el" id="firstname" name="firstName"
                        placeholder="Enter your First Name" required />
                </div>
                {errors?.firstName && <p className="signup-error-msg" > {errors?.firstName}  </p>}

                <div className="signup-input-el-container" >
                    <label className="signup-label-el" htmlFor="lastname"> Last Name : </label>
                    <input onBlur={onBlur} onChange={onChange}
                        type="input" className="signup-input-el" id="lastname" name="lastName"
                        placeholder="Enter your Last Name" required />
                </div>
                {errors?.lastName && <p className="signup-error-msg" > {errors?.lastName}  </p>}

                <div className="signup-input-el-container" >
                    <label className="signup-label-el" htmlFor="mobilenumber"> Mobile Number  : </label>
                    <input onBlur={onBlur} onChange={onChange}
                        type="tel" className="signup-input-el" id="mobilenumber" name="mobileNumber"
                        placeholder="Enter your Mobile Number" required />
                </div>
                {errors?.mobileNumber && <p className="signup-error-msg" > {errors?.mobileNumber}  </p>}

                <div className="signup-input-el-container" >
                    <label className="signup-label-el" htmlFor="email"> Email  : </label>
                    <input onBlur={onBlur} onChange={onChange}
                        type="email" className="signup-input-el" id="email" name="email"
                        placeholder="Enter your Email" required />
                </div>
                {errors?.email && <p className="signup-error-msg" > {errors?.email}  </p>}

                <div className="signup-input-el-container">
                    <label className="signup-label-el" htmlFor="password">Password:</label>
                    <div className="password-toggle-container">
                        <input
                            onBlur={onBlur}
                            onChange={onChange}
                            type={showPassword ? "text" : "password"}
                            className="signup-input-el password-input"
                            id="password"
                            name="password"
                            placeholder="Enter your Password"
                            required
                        />
                        <button
                            type="button"
                            className="show-password-btn"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                {errors?.password && <p className="signup-error-msg" > {errors?.password}  </p>}

                <button className="signup-button" type="submit" > Register  </button>

                <p className="signup-error-msg" > {submitErrorMessage} </p>

                <p className="signup-error-msg signup-success-msg" > {submitSuccessMessage} </p>

                <p className="login-signup" onClick={onClickSignupLogin} > Already Registered. Do you Want to Login ?  </p>
            </form>
        )
    }

    return (
        <div className="signup-page" >
            <h1 className="signup-head" > React Authentication App </h1>
            {signupForm()}
        </div>
    )
}

export default SignupForm