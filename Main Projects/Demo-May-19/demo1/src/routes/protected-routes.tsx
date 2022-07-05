import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const userdetails = sessionStorage.getItem("user");

  const user = userdetails ? JSON.parse(userdetails) : "";

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
