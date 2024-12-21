import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const CustomerRoutes = () => {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  return isLoggedIn && user.role === 'admin' ? <Navigate to="/admin" /> : <Outlet />;
};

export default CustomerRoutes;
