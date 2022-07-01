import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    const authRoles = auth?.roles;
    const authUsers = auth?.users?.find(role => allowedRoles?.includes(role));
    const goToUnauthorizedPage = <Navigate to="/unauthorized" state={{ from: location }} replace />;
    const goToAuthentificationPage = <Navigate to="/authentification/login" state={{ from: location }} replace />;
    
    return (
        authRoles
            ? <Outlet />
            : authUsers
            ? goToUnauthorizedPage
            : goToAuthentificationPage
    );
}

export default RequireAuth;