import { Navigate, Route, Routes } from "react-router-dom";
import AccountBalance from "../components/accountBalance";
import Contact from "../components/contact";
import Dashboard from "../components/dashboard";
import Login from "../components/login";
import PermissionDenied from "../components/permissionDenied";
import Profile from "../components/profile";
import Promotions from "../components/promotions";
import SentMoney from "../components/signup-demo";
import SignUp from "../components/signUp";
import TransactionHistory from "../components/transactionHistory";
import UsersList from "../components/usersList";
import ProtectedRoutes from "./protectedRoutes";
import PublicRoutes from "./publicRoutes";
import SignupDemo from "../components/signup-demo";

const MainRoutes = () => {
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
          <Route path="userslist" element={<UsersList />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="" element={<PublicRoutes />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="signupdemo" element={<SignupDemo />} /> */}
        </Route>
        <Route path="*" element={<PermissionDenied />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
