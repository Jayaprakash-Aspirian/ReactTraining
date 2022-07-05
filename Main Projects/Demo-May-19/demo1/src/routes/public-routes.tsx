import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = sessionStorage.getItem("user");
  return ( (user) ? true : false )
};

const PublicRoutes = (props: any) => {
  const auth = useAuth();
  return auth ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoutes;
