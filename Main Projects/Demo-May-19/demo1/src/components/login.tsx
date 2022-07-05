import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DataLogin } from "../server-side-validation/login-validation";
import { successMessage } from "../store/activity.actions";
import { usersFetchLogic } from "../store/logic/all-users-logic";
import { LoginValidation } from "../validation/login-validation";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string>();

  useEffect(() => {
    dispatch(usersFetchLogic);
  }, []);

  const allusersare = useSelector((state: any) => state.allusersdata.list);

  const AuthenticateLogin = (e: any) => {
    e.preventDefault();
    LoginValidation(mobile, password)
      ? setLoginError(LoginValidation(mobile, password))
      : DataLogin(mobile, password, allusersare)
      ? setLoginError(DataLogin(mobile, password, allusersare))
      : dispatch(successMessage("Successfully loggined in!!....")) && navigate("/dashboard");
  };

  return (
    <>
      <div className="body-signup">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="card">
                <h2 className="card-title text-center" id="h2-signup">
                  {t("login")} Page
                </h2>
                <div className="card-body py-md-4">
                  <form onSubmit={AuthenticateLogin}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder={t("enter_mobile")}
                        name="phone"
                        onChange={(e) => setMobile(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder={t("enter_password")}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      {loginError ? (
                        <h5 className="error-red-color">{loginError}</h5>
                      ) : null}
                    </div>
                    <br />
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <a
                        className="btn btn-secondary"
                        onClick={() => {
                          navigate("/signup");
                        }}
                      >
                        {t("signup")}
                      </a>
                      <button className="btn btn-primary" type="submit">
                        {t("login")}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
