import { Navigate, Outlet } from "react-router-dom";
import { userdetailsdata } from "../components/session-storage";

const useAuth = () => {
  const user = userdetailsdata()
  return ( (user) ? true : false )
};

const PublicRoutes = (props: any) => {
  const auth = useAuth();
  return auth ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoutes;
