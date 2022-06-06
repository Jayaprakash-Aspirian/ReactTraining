import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { allusersdata } from "../axios/datas";
import { usersFetchLogic } from "../store/logic/all-users-logic";
import { Person } from "./types/typesimport";
import Welcome from "./Welcome";

const Dashboard = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  // const [users, setUsers] = useState<any>();

  // console.log(typeof(allusersdata))
  // useEffect(() => {  
  //   allusersdata.then(
  //     value=>{
  //       dispatch(AllUsersData(value));
  //     }
  //   )
  // }, []);

  // const usersare = useSelector((state:any) => state.usersdata);
  // console.log("ss")
  // console.log(usersare)
  // console.log(typeof(usersare))

  // const getv = usersare.map((data:any)=>{
  //   console.log(data.firstname)
  // })
  // console.log(users)
  // console.log(getval)
  // console.log("geS")

  // const checkval:any = users.map((data :Person)=>{
  //   console.log(data.firstname)
  // })
  // console.log(allusersdata)
  useEffect(() => {  
    dispatch(usersFetchLogic);
  }, []);

  const allusersare = useSelector((state:any) => state.allusersdata);
  console.log(allusersare)

  console.log("need")



  return (
    <>
      <div className="dashboard-change">
        <div id="main-content" className="bg-white border">
          <Welcome />
          <br />
          <div className="text-uppercase">{t("account")}</div>
          <div className="order my-3 bg-light">
            <br />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="col-lg-4" style={{ width: "20%" }}>
                <Link
                  to="accountbalance"
                  style={{ textDecoration: "inherit", color: "white" }}
                >
                  <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                    <div className="btn btn-primary text-uppercase">
                      {t("view_account_balance")}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4" style={{ width: "20%" }}>
                <Link
                  to="promotions"
                  style={{ textDecoration: "inherit", color: "white" }}
                >
                  <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                    <div className="btn btn-primary text-uppercase">
                      {" "}
                      {t("promotion_details")}{" "}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4" style={{ width: "20%" }}>
                <Link
                  to="transactions"
                  style={{ textDecoration: "inherit", color: "white" }}
                >
                  <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                    <div className="btn btn-primary text-uppercase">
                      {t("show_transaction_history")}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
