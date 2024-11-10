import React from "react";
import NavbarComponent from "../NavbarComponent";
import profileImg from "../../assets/images/profile-icon-design-free-vector.jpg";
import "./index.css";

const Profile = () => {
    const userInfo = localStorage.getItem("userProfileData");
    const username = localStorage.getItem("username");

    const parsedUserInfo = JSON.parse(userInfo);
    let originalNumber;
    const { email, mobileNumber } = parsedUserInfo;
    const numberLength = mobileNumber.toString().length;

    if (numberLength < 10) {
        const deficit = 10 - numberLength;
        const zeros = "0".repeat(deficit);
        originalNumber = `${zeros}${mobileNumber.toString()}`;
    } else {
        originalNumber = mobileNumber;
    }

    const profileSec = () => (
        <div className="profile-sec">
            <img
                src={profileImg}
                alt="profile-pic"
                className="profile-img"
            />
            <div className="profile-details-sec">
                <h1 className="profile-head-el">
                    <span className="profile-span-el">Username:</span> {username}
                </h1>
                <h1 className="profile-head-el">
                    <span className="profile-span-el">Mobile Number:</span> {originalNumber}
                </h1>
                <h1 className="profile-head-el">
                    <span className="profile-span-el">Email:</span> {email}
                </h1>
            </div>
        </div>
    );

    return (
        <div className="dashboard-container">
            <NavbarComponent />
            {profileSec()}
        </div>
    );
};

export default Profile;
