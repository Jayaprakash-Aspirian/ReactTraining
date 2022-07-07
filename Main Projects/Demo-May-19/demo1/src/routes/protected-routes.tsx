import { Navigate, Outlet } from "react-router-dom";
import { userdetailsdata } from "../components/session-storage";

const useAuth = () => {
  const userdetails = userdetailsdata()

  const user = userdetails ? userdetails : "";

  return user
    ? {
        auth: true,
        role: user.role,
      }
    : {
        auth: false,
        role: null,
      };
};

type ProtectedRouteType = {
  roleRequired?: "ADMIN" | "USER";
};

const ProtectedRoutes = (props: ProtectedRouteType) => {
  const { auth, role } = useAuth();

  return props.roleRequired ? (
    auth ? (
      props.roleRequired === role ? (
        <Outlet />
      ) : (
        <Navigate to="/denied" />
      )
    ) : (
      <Navigate to="/login" />
    )
  ) : auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
