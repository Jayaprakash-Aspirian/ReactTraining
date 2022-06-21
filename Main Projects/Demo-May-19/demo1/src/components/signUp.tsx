import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SIGNUP_DATA } from "../store/activity.actions";
import { usersFetchLogic } from "../store/logic/all-users-logic";

const SignUp = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    dispatch(usersFetchLogic);
  }, []);

  const allusersare = useSelector((state: any) => state.allusersdata.list);

  const SubmitForm = () => {
    const datas = {
      id: allusersare.length + 1,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      mobile: mobile,
      role: " USER",
    };

    // dispatch({ type: SIGNUP_DATA,payload:datas })

    axios
      .post("http://localhost:3000/users", datas)
      .then((resp: any) => {
        console.log(resp.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
    alert("Account created Successfully");
  };

  let navigate = useNavigate();
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
                <form onSubmit={SubmitForm}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder={t("enter_firstname")}
                      onChange={(e) => setFName(e.target.value)}
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
