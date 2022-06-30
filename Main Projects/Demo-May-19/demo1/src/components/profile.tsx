import { useEffect, useState } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { Person } from "./types/typesimport";
import Welcome from "./welcome";
import { userdetails, userdetailsdata } from "./session-storage";
import React, { Component } from "react";
import { render } from "@testing-library/react";

// type ProfileData = {
//   userdata: {
//     firstname: string;
//     lastname: string;
//     email: string;
//     mobile: string;
//     account: string;
//     amount: string;
//     role: string;
//   };
// };

class Profile extends Component {
  // constructor(props: any) {
  //   super(props);

  //   this.state = {
  //     userdata : userdetailsdata()
  //   };
  // }

  // state: Person = {
  // firstname: "",
  // lastname: "",
  // email: "",
  // mobile: "",
  // account: "",
  // amount: "",
  // role: "",
  // };
  // componentDidMount() {
  //   this.setState((state) => ({
  //     firstname: userdetailsdata().firstname,
  //     lastname: userdetailsdata().lastname,
  //     email: userdetailsdata().email,
  //     mobile: userdetailsdata().mobile,
  //     account: userdetailsdata().account,
  //     amount: userdetailsdata().amount,
  //     role: userdetailsdata().role,
  //   }));
  // }

  render() {
    const { t }: any = this.props;
    return (
      <>
        <div className="dashboard-change">
          <div id="main-content" className="bg-white border">
            <Welcome />
            <br />
            <div className="text-uppercase">{t("profile_page")}:</div>
            {/* <div className="text-uppercase">{t("profile_page")}:</div>
            <div className="order my-3 bg-light">
              <div className="column">
                <div className="col-lg-8">
                  <div className="d-flex flex-column justify-content-between order-summary">
                    <div>
                      <div className="d-flex align-items-center">
                        <div className="text-uppercase">{t("Name ")}:</div>
                        {this.state.firstname} {this.state.lastname}
                      </div>
                      <br />
                      <div className="d-flex align-items-center">
                        <div className="text-uppercase">{t("Email")}:</div>
                        {this.state.email}
                      </div>
                      <br />
                      <div className="d-flex align-items-center">
                        <div className="text-uppercase">{t("mobile")} :</div>
                        {this.state.mobile}
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
                          {this.state.account}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default withTranslation() (Profile);
