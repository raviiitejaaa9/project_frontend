import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
        const jwtToken = Cookies.get("jwt_token");
        
        if (jwtToken) {
            setIsAuthenticated(true);
        } else {
            navigate("/");
        }
    }, [navigate]);

    if (!isAuthenticated) {
        return null;
    }

    return element;
};

export default ProtectedRoute;
