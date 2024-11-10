import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const jwtToken = Cookies.get("jwt_token"); 
        if (jwtToken) {
            navigate("/dashboard");
        }
    }, [navigate]);

    const onHomeSignup = () => {
        navigate("/signup");
    }

    const onHomeLogin = () => {
        navigate("/login");
    }

    return (
        <div className="home-container">
            <h1 className="home-head">React Authentication App</h1>
            <h2 className="guest-greeting">Welcome</h2>
            
            <div className="signup-login-container">
                <div className="home-btns-container">
                    <h3 className="home-btns-heading">Are you a New User?</h3>
                    <button className="home-btn" onClick={onHomeSignup}>Register</button>
                </div>
                <div className="home-btns-container">
                    <h3 className="home-btns-heading">Already a User?</h3>
                    <button className="home-btn" onClick={onHomeLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
