import { useTranslation, withTranslation } from "react-i18next";
import { Person, ProfileData } from "./types/typesimport";
import Welcome from "./welcome";
import { userdetailsdata } from "./session-storage";
import React, { Component } from "react";

class Profile extends Component<{}, ProfileData> {
  constructor(props: any) {
    super(props);
    this.state = {
      userdata: {
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        account: "",
        amount: "",
        role: "",
      },
    };
  }

  componentDidMount() {
    this.setState({
      userdata: userdetailsdata(),
    });
  }

  render() {
    const { t }: any = this.props;
    return (
      <>
        <div className="dashboard-change">
          <div id="main-content" className="bg-white border">
            <Welcome />
            <br />
            <div className="text-uppercase">{t("profile_page")}:</div>
            <div className="text-uppercase">{t("profile_page")}:</div>
            <div className="order my-3 bg-light">
              <div className="column">
                <div className="col-lg-8">
                  <div className="d-flex flex-column justify-content-between order-summary">
                    <div>
                      <div className="d-flex align-items-center">
                        <div className="text-uppercase">{t("Name ")}:</div>
                        {this.state.userdata.firstname}{" "}
                        {this.state.userdata.lastname}
                      </div>
                      <br />
                      <div className="d-flex align-items-center">
                        <div className="text-uppercase">{t("Email")}:</div>
                        {this.state.userdata.email}
                      </div>
                      <br />
                      <div className="d-flex align-items-center">
                        <div className="text-uppercase">{t("mobile")} :</div>
                        {this.state.userdata.mobile}
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
                          id="bank-color"
                        >
                          {this.state.userdata.account}
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
}

export default withTranslation()(Profile);
