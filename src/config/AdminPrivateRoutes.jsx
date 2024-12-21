import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminPrivateRoutes = () => {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  return isLoggedIn && user.role === 'admin' ? <Outlet /> : <Navigate to="/" />;
};

export default AdminPrivateRoutes;
