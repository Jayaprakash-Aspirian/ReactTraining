import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Welcome from "./welcome";

const Dashboard = () => {
  const { t } = useTranslation();
  
  // const userdata = useSelector((state: any) => state.userdata);
  // console.log(userdata)

  // const userdatas = useSelector((state: any) => state.usersdata);
  // sessionStorage.setItem("user",userdatas);

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
