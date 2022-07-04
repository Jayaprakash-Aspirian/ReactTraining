import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import Welcome from "./welcome";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="dashboard-change">
        <div id="main-content" className="bg-white border">
          <Welcome />
          <br />
          <div className="text-uppercase">{t("account")}</div>
          <div className="order my-3 bg-light">
            <br />
            <div className="flex-direction-row" >
              <div className="col-lg-4" >
                <Link
                  to="accountbalance" className="dashboard-links"
                >
                  <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                    <div className="btn btn-primary text-uppercase">
                      {t("view_account_balance")}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4" >
                <Link
                  to="promotions" className="dashboard-links"
                >
                  <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                    <div className="btn btn-primary text-uppercase">
                      {t("promotion_details")}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4" >
                <Link
                  to="transactions" className="dashboard-links"
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
