import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import './index.css';

const NavbarComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const onClickLogout = () => {
        Cookies.remove('jwt_token');
        navigate('/login');
        localStorage.removeItem('username');
        localStorage.removeItem('userProfileData');
    };

    const onClickNavLogo = () => {
        navigate('/dashboard');
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div className="navbar">
            <div className="brand" onClick={onClickNavLogo}>
                React Authentication App
            </div>
            <div className="nav-links">
                <a href="/dashboard" className={isActive('/dashboard')}>
                    Dashboard
                </a>
                <a href="/profile" className={isActive('/profile')}>
                    Profile
                </a>
            </div>
            <button className="logout-btn" onClick={onClickLogout}>
                Logout
            </button>
        </div>
    );
};

export default NavbarComponent;
