import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

const NavbarComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const onClickLogout = () => {
        Cookies.remove('jwt_token');
        navigate('/login');
        localStorage.removeItem('username');
        localStorage.removeItem('userProfileData');
        localStorage.clear();
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
                <Link to="/dashboard" className={isActive('/dashboard')}>
                    Dashboard
                </Link>
                <Link to="/profile" className={isActive('/profile')}>
                    Profile
                </Link>
            </div>
            <button className="logout-btn" onClick={onClickLogout}>
                Logout
            </button>
        </div>
    );
};

export default NavbarComponent;
