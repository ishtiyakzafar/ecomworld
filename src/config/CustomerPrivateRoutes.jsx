import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const CustomerPrivateRoutes = () => {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  return isLoggedIn && user.role === 'customer' ? <Outlet /> : <Navigate to="/" />;
};

export default CustomerPrivateRoutes;
