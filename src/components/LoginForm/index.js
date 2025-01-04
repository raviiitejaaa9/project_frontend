import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const LoginForm = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const jwtToken = Cookies.get("jwt_token");
        if (jwtToken) {
            navigate("/dashboard");
        }
    }, [navigate]);

    const onSuccessfulLogin = (id, name, userProfileData) => {
        Cookies.set("jwt_token", `${id}`);
        localStorage.setItem("username", name);
        localStorage.setItem("userProfileData", JSON.stringify(userProfileData));
        navigate("/dashboard");
    };

    const onSubmitLogin = async (event) => {
        event.preventDefault();
        setErrorMessage("");

        if (!userEmail || !userPassword) {
            setErrorMessage("Both email and password are required.");
            return;
        }

        const userInfo = { userEmail, userPassword };
        const loginUrl = "https://quasar-colossal-wing.glitch.me/api/auth/login";
        const loginOptions = {
            mode: "cors",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userInfo),
        };

        try {
            const response = await fetch(loginUrl, loginOptions);
            if (response.ok) {
                const jsonData = await response.json();
                let { userId, userData } = jsonData;
                const { firstName, lastName } = userData;
                const userName = firstName + " " + lastName;
                if (userData?.password) delete userData?.password;
                onSuccessfulLogin(userId, userName, userData);
            } else {
                const jsonData = await response.json();
                setErrorMessage(jsonData.message);
            }
        } catch (error) {
            setErrorMessage("Unable to connect. Please try again later.");
        }
    };

    const onBlurEmail = () => {
        if (!userEmail) setErrorMessage("*Email should not be empty");
    };

    const onBlurPassword = () => {
        if (!userPassword) setErrorMessage("*Please Enter your Password");
    };

    const onChangeEmail = (event) => setUserEmail(event.target.value.trim());
    const onChangePassword = (event) => setUserPassword(event.target.value.trim());
    const onClickLoginSignup = () => navigate("/");

    return (
        <div className="login-page">
            <h1 className="login-head">React Authentication App</h1>
            <form className="login-form" onSubmit={onSubmitLogin}>
                <div className="login-input-el-container">
                    <label htmlFor="login-email" className="login-label-el">Email:</label>
                    <input
                        id="login-email"
                        onBlur={onBlurEmail}
                        onChange={onChangeEmail}
                        value={userEmail}
                        type="email"
                        className="login-input-el"
                        placeholder="Enter your Registered Email"
                        required
                    />
                </div>
                <div className="login-input-el-container">
                    <label htmlFor="login-password" className="login-label-el">Password:</label>
                    <div className="password-toggle-container">
                        <input
                            id="login-password"
                            onBlur={onBlurPassword}
                            onChange={onChangePassword}
                            value={userPassword}
                            type={showPassword ? "text" : "password"}
                            className="login-input-el password-input"
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
                <button className="login-button" type="submit">Login</button>
                <p className="error-msg">{errorMessage}</p>
                <p className="login-signup" onClick={onClickLoginSignup}>
                    Not Registered Yet? Do you Want to Register?
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
