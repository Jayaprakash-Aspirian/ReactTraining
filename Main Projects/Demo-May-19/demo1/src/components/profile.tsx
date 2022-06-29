import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Person } from "./types/typesimport";
import Welcome from "./welcome";
import { userdetails } from "./session-storage";
import React, { Component } from 'react'
import { render } from "@testing-library/react";

type ProfileData = {
  userdata: {  
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
    account: string;
    amount: string;
    role: string;
  }
}

class Profile extends Component<ProfileData> {
  // const { t } = useTranslation();
  // const [UserData, setUserData] = useState({} as Person);

  // useEffect(() => {
  //   setUserData(JSON.parse(userdetails()));
  // }, []);
  constructor(props:ProfileData){
    super(props)
    this.state = {userdata: JSON.parse(userdetails())}
  }
  // state : Person = {

  // }
  render(){
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
                      <div className="text-uppercase">{t("Name ")}:</div>
                      {this.state.userdata} {UserData.lastname}
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
                        {UserData.account}
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
   }
};

export default Profile ;
