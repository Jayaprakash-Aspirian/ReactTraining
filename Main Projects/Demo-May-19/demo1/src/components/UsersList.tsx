import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Welcome from "./Welcome";
import { Person } from "./types/typesimport";
import { useDispatch, useSelector } from "react-redux";
import { features } from "process";
import { usersFetchLogic } from "../store/logic/all-users-logic";


const UsersList = () => {

  const dispatch = useDispatch()
  const { t } = useTranslation();
  const userdetails: any = localStorage.getItem("user");
  const user = JSON.parse(userdetails);
  const [amount, setAmount] = useState("");

  const SentAmount = () => {
    console.log(amount + "amount sent ");
  };

  useEffect(() => {  
    dispatch(usersFetchLogic);
  }, []);

  const allusersare = useSelector((state:any) => state.allusersdata);
  console.log(allusersare)

  const withoutuserdata = allusersare.list.filter((datas :any)=>{
    return user.mobile !== datas.mobile ; 
  })

  const usersdatas  = withoutuserdata.map((datas :any) =>
    <div>
      <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
        <div className="text-uppercase">
          {datas.firstname} {datas.lastname} - {datas.mobile}
          <pre></pre>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            style={{ width: "30%" }}
          ></input>
          <br />
          <div
            className="btn btn-primary text-uppercase"
            style={{ color: "green" }}
            onClick={({}) => {
              SentAmount();
            }}
          >
            {t("sent_money")}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );


  return (
    <>
      <div className="dashboard-change">
        <div id="main-content" className="bg-white border">
          <div className="d-flex flex-column">
            <Welcome />
          </div>
          <br />
          <div className="text-uppercase">{t("users")} :</div>
          <div className="order my-3 bg-light">
            <br />
            { usersdatas }
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersList;
