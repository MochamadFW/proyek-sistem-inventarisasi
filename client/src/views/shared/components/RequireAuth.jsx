import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const RequireAuth = ({ allowedRole }) => {
    const { auth } = useAuth();
    const location = useLocation();
    return (
        auth?.role === allowedRole ? <Outlet /> : auth?.user ? <h1>Unauthorized</h1> : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;