import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AccountBalance from "../components/account-balance";
import Contact from "../components/contact";
import Dashboard from "../components/dashboard";
import Login from "../components/login";
import PermissionDenied from "../components/permission-denied";
import Promotions from "../components/promotions";
import TransactionHistory from "../components/transaction-history";
import UsersList from "../components/users-list";
import ProtectedRoutes from "./protected-routes";
import PublicRoutes from "./public-routes";
import Signup from "../components/signup";
import Profile from "../components/profile";
import { UserPermission } from "../components/with-permission";

const MainRoutes = () => {
  const navigate  = useNavigate()
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/accountbalance" element={<AccountBalance />} />
          <Route path="dashboard/promotions" element={<Promotions />} />
          <Route
            path="dashboard/transactions"
            element={<TransactionHistory />}
          />
          <UserPermission roleRequired="BankAccountHaveUser" message="">
            <Route path="userslist" element={<UsersList />} />
            </UserPermission>
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="" element={<PublicRoutes />}>
          <Route path="signup" element={<Signup navigate={navigate} />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<PermissionDenied />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
