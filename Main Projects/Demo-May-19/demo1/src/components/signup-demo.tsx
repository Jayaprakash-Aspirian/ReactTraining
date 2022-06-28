import React, { Component } from 'react'
import { SignupData } from './types/typesimport';
import Welcome from './welcome';

export default class SignupDemo extends Component<SignupData> {
  constructor(props:SignupData){
    super(props);
    this.state = {
      firstname:"",
      lastname: "",
      email: "",
      mobile:"",
      password : "",
      confirmpassword : "",
      clientError : ""
    };
    this.SubmitForm = this.SubmitForm.bind(this);

  }
  // state: SignupData = {
  //   firstname:"",
  //   lastname: "",
  //   email: "",
  //   mobile:"",
  //   password : "",
  //   confirmpassword : "",
  //   clientError : ""
  // };
  componentDidMount() {
    dispatch(usersFetchLogic);
  }
  SubmitForm(e:any){
                  

    // dispatch(fetchJokes(this.state.value));

  }


  render() {
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
                        onChange={(e) => this.state.firstname)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        placeholder={t("enter_lastname")}
                        onChange={(e) => setLName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter the Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter the Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="confirmpassword"
                        placeholder="Confirm password"
                        onChange={(e) => setConfirmpassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        placeholder="Enter the Mobile Number"
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <a
                        className="btn btn-secondary"
                        onClick={() => {
                          navigate("/login");
                        }}
                      >
                        {t("login")}
                      </a>
                      <button className="btn btn-primary" type="submit">
                        {t("create_account")}
                      </button>
                    </div>
                    <br />
                    {clientError ? (
                      <span style={{ color: "red" }}>{clientError}</span>
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


