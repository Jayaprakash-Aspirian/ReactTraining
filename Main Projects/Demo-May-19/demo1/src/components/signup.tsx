import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { PropsAllusersare, SignupData } from "./types/typesimport";
import { RegisterValidation } from "../validation/signup-validation";
import { usersFetchLogic } from "../store/logic/all-users-logic";
import { addUsersData,successMessage } from "../store/activity.actions";
import { connect } from "react-redux";
import { Registration } from "../server-side-validation/signup-validation";

class Signup extends Component<PropsAllusersare, SignupData> {
  constructor(props: any) {
    super(props);
    console.log(this.props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      confirmpassword: "",
      clientError: "",
    };
    this.SubmitForm = this.SubmitForm.bind(this);
    this.componentDidMount = this.componentDidMount;
  }

  componentDidMount() {
    this.props.getAllusersdata();
  }

  SubmitForm(e: any) {
    e.preventDefault();
    const datas = {
      id: this.props.allusersare.length + 1,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      mobile: this.state.mobile,
      account: null,
      amount: null,
      role: " USER",
    };

    RegisterValidation(datas, this.state.confirmpassword)
      ? this.setState({
          clientError: RegisterValidation(datas, this.state.confirmpassword),
        })
      : Registration(datas, this.props.allusersare)
      ? this.setState({
          clientError: Registration(datas, this.props.allusersare),
        })
      : this.props.updateUserdata(datas) && this.props.message("Your Data, Successfully Registered....Login Here!!!") && this.props.navigate("/login");

    
  }

  render() {
    const { t, navigate }: any = this.props;

    return (
      <div className="body-signup">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="card">
                <h2 className="card-title text-center" id="h2-signup">
                  {t("register_message")}
                </h2>
                <div className="card-body py-md-4">
                  <form onSubmit={this.SubmitForm}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        placeholder={t("enter_firstname")}
                        value={this.state.firstname}
                        onChange={(event) =>
                          this.setState({ firstname: event.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        placeholder={t("enter_lastname")}
                        onChange={(event) =>
                          this.setState({ lastname: event.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter the Email"
                        onChange={(event) =>
                          this.setState({ email: event.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter the Password"
                        onChange={(event) =>
                          this.setState({ password: event.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="confirmpassword"
                        placeholder="Confirm password"
                        onChange={(event) =>
                          this.setState({ confirmpassword: event.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        placeholder="Enter the Mobile Number"
                        onChange={(event) =>
                          this.setState({ mobile: event.target.value })
                        }
                      />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <a
                        className="btn btn-secondary"
                        onClick={() => {
                          {
                            navigate("/login");
                          }
                        }}
                      >
                        {t("login")}
                      </a>
                      <button className="btn btn-primary" type="submit">
                        {t("create_account")}
                      </button>
                    </div>
                    <br />
                    {this.state.clientError ? (
                      <span className="error-red-color">
                        {this.state.clientError}
                      </span>
                    ) : null}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAllusersdata: () => dispatch(usersFetchLogic),
    updateUserdata: (datas: any) => dispatch(addUsersData(datas)),
    message: (message:string) => dispatch(successMessage(message)),
  };
};

const mapStateToProps = (state: any) => {
  return {
    allusersare: state.allusersdata.list,
  };
};

const Signupis = withTranslation()(Signup);

export default connect(mapStateToProps, mapDispatchToProps)(Signupis);
