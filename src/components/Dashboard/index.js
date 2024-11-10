import React from "react";
import NavbarComponent from "../NavbarComponent";
import profileImg from "../../assets/images/profile-icon-design-free-vector.jpg"
import "./index.css"

const Dashboard = () => {

    const username = localStorage.getItem("username");

    const dashboardSec = () => (
        <div className="dashboard-sec" > 
            <h1 className="dashboard-head"> Welcome to the Dashboard {username} </h1>
            <img src = {profileImg}
                 alt = "profile-pic" className="profile-img" 
            />
        </div>
    )

    return(
        <div className="dashboard-container" >
             <NavbarComponent/>
             {dashboardSec()}
        </div>
    )
}

export default Dashboard