import{ useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Person } from "./types/typesimport";
import Welcome from "./Welcome";

const TransactionHistory = () => {
  const { t } = useTranslation();
  const [UserData, setUserData] = useState({} as Person);
  const datas: any = localStorage.getItem("user");
  useEffect(() => {
    setUserData(JSON.parse(datas));
  }, []);

  return (
    <>
      <div className="dashboard-change">
        <div id="main-content" className="bg-white border">
          <Welcome />
          <br />
          <div className="text-uppercase">{t("profile_page")}:</div>
          <div className="order my-3 bg-light">
            <div className="column">
              <div className="col-lg-8">
                <div className="d-flex flex-column justify-content-between order-summary">
                  <div>
                    <div className="d-flex align-items-center">
                      <div className="text-uppercase">{t("Name ")}</div>
                      {UserData.firstname} {UserData.lastname}
                    </div>
                    <br />
                    <div className="d-flex align-items-center">
                      <div className="text-uppercase">{t("Email")}:</div>
                      {UserData.email}
                    </div>
                    <br />
                    <div className="d-flex align-items-center">
                      <div className="text-uppercase">{t("mobile")} :</div>
                      {UserData.mobile}
                    </div>
                  </div>
                  <div>
                    <br />
                    <div className="d-flex align-items-center">
                      <div className="text-uppercase">
                        {t("accounts_have")}:
                      </div>
                      <div
                        className="btn btn-primary text-uppercase"
                        style={{ color: "green" }}
                      >
                        {UserData.account}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
