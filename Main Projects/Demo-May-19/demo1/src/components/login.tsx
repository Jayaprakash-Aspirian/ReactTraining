import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { applyMiddleware } from "redux";
import { usersFetchLogic } from "../store/logic/all-users-logic";
import { LoginValidation } from "../validation/login-validation";
// import api from '../services/services-data'

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [mobileError, setMobileError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [clientErrors, setClientErrors] = useState("");
  const [error, setError] = useState(null)

  useEffect(() => {
    dispatch(usersFetchLogic);
  }, []);


  const allusersare = useSelector((state: any) => state.allusersdata.list);
  
  const AuthenticateLogin = (e: any) => {
    const useris = allusersare.filter(
      (data: any) => data.mobile === mobile && data.password === password
    );
    const mobileis = allusersare.filter((data: any) => data.mobile === mobile);                          
    // const data = { mobile : mobile , password :password}
    // const validation = LoginValidation(mobile,password)
    
    // if (validation) {
    //   setClientErrors(validation)
    // }else{
    //   api.authenticateuser(data)
      
    //   debugger;                                                                                                 

    // }
    
    if (useris[0]) { 
      sessionStorage.setItem("user", JSON.stringify(useris[0]));
      console.log('session');
      debugger;
      navigate("/dashboard");
    } else if (mobileis) {
      setMobileError(undefined);
      setPasswordError("Invalid Password");
    } else {
      setMobileError("Invalid Mobile Number");
      setPasswordError(undefined);
    }
    e.preventDefault();
  };

  return (
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
                    />
                    {mobileError ? (
                      <h5 style={{ color: "red" }}>{mobileError}</h5>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder={t("enter_password")}
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError ? (
                      <h5 style={{ color: "red" }}>{passwordError}</h5>
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
  );
};

export default Login;