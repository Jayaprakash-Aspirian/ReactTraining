import { Navigate, Outlet } from "react-router-dom";


const useAuth = () => {
  const userdetails = sessionStorage.getItem("user");
  let user: any;

  if (userdetails) {
    user = JSON.parse(userdetails);
  }
  if (user) {
    return {
      auth: true,
      role: user.role,
    };
  } else {
    return {
      auth: false,
      role: null,
    };
  }
};

type ProtectedRouteType = {
  roleRequired?: "ADMIN" | "USER";
};

const ProtectedRoutes = (props: ProtectedRouteType) => {
  const { auth, role } = useAuth();
  if (props.roleRequired) {
    return auth ? (
      props.roleRequired === role ? (
        <Outlet />
      ) : (
        <Navigate to="/denied" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } else {
    return auth ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
