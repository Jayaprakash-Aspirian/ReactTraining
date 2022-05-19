import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import InnerContent from "../components/InnerContent";
import Sidebar from "../components/Sidebar";
import UsersList from "../components/UsersList";

const MainRoutes=() => {
    return (
      <>
          <Routes>

              <Route path="/" element={<InnerContent />} >
                  <Route path="/" element={<Navigate replace to="dashboard"/>} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="userslist" element={<UsersList />} />
              </Route>
 
          </Routes>
      </>
    )
  }
  
  export default MainRoutes;