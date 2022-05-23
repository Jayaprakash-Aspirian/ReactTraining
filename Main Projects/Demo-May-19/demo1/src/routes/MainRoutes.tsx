import { Navigate, Route, Routes } from "react-router-dom";
import AccountBalance from "../components/AccountBalance";
import Contact from "../components/Contact";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Promotions from "../components/Promotions";
import Sidebar from "../components/Sidebar";
import SignUp from "../components/SignUp";
import TransactionHistory from "../components/TransactionHistory";
import UsersList from "../components/UsersList";

const MainRoutes=() => {
    return (
      <>

        {/* <Sidebar /> */}

          <Routes>
              <Route path="/" element={<Sidebar />} >
                  <Route path="/" element={<Navigate replace to="dashboard"/>} />
                  <Route path="dashboard" element={<Dashboard />} />
                    <Route path="dashboard/accountbalance" element={<AccountBalance />} />
                    <Route path="dashboard/promotions" element={<Promotions/>} />
                    <Route path="dashboard/transactions" element={<TransactionHistory />} />
                  <Route path="userslist" element={<UsersList />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="contact" element={<Contact/>} />
              </Route>
         

              <Route path="signup" element={<SignUp />} ></Route>
              
              <Route path="login" element={<Login />}></Route>
          </Routes>
      </>
    )
  }
  
  export default MainRoutes;