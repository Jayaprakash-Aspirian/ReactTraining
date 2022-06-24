import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {  userdetails } from "./session-storage";
import { Person } from "./types/typesimport";
import Welcome from "./welcome";

const AccountBalance = () => {
  const { t } = useTranslation();
  const [UserData, setUserData] = useState({} as Person);
  
  useEffect(() => {
    setUserData(JSON.parse(userdetails()));
  }, []);

  return (
    <>
      <div className="dashboard-change">
        <div id="main-content" className="bg-white border">
          <Welcome />
          <br />
          <div className="text-uppercase">{t("account")}</div>
          <div className="order my-3 bg-light">
            <br />
            <div className="column">
              <div className="col-lg-8">
                <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                  <div>
                    <p className="text-uppercase">
                      {t("user_name")}
                      <br />
                      {t("name")}{" "}
                    </p>{" "}
                    <br />
                    {UserData.account}
                  </div>
                  <div>
                    {" "}
                    <p className="text-uppercase">
                      {t("account")} <br />
                      {t("balance")}
                    </p>
                    <br />
                    {UserData.amount}{" "}
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

export default AccountBalance;
