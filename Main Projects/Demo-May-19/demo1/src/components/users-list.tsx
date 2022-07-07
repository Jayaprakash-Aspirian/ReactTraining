import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Welcome from "./welcome";
import { Person } from "./types/typesimport";
import { useDispatch, useSelector } from "react-redux";
import { usersFetchLogic } from "../store/logic/all-users-logic";
import { transactionsFetchLogic } from "../store/logic/all-transaction-history-logic";
import { addTransactionsData, errorMessage, updateUserData } from "../store/activity.actions";
import { userdetails } from "./session-storage";
import { datedetails } from "./currenttime";
import { UserPermission } from "./with-permission";

const UsersList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [amount, setAmount] = useState<any>("");
  const [user, setUserData] = useState({} as Person);

  useEffect(() => {
    setUserData(JSON.parse(userdetails()));
  }, []);

  useEffect(() => {
    dispatch(transactionsFetchLogic);
  }, []);

  const alltransactions = useSelector(
    (state: any) => state.alltransactionsdata.transactions
  );

  const handleChange=(event:any,datas:any) => {
    (event.target.value < 0 ) ? setAmount({ ...amount, [datas.mobile]: "" }) :setAmount({ ...amount, [datas.mobile]: event.target.value}) 
  }

  const handleClick = (e:any,datas:any)=>{
    e.preventDefault();
    return (!Number(amount[datas.mobile])) ? "" : SentAmount(datas) 
  }

  const SentAmount = (datas: Person) => {
    
    const transactions = {
      id: alltransactions.length + 1,
      from: user.mobile,
      to: datas.mobile,
      sentmoney: amount[datas.mobile],
      date: datedetails(),
    };

    if( Number(user.amount) < amount[datas.mobile]) {
      dispatch(errorMessage("Your account has insufficient funds...! Check that you have enough money in your account."))
    }else{
      dispatch(addTransactionsData(transactions));
      alert(
        "Amount " +
          amount[datas.mobile] +
          " sent to the " +
          datas.firstname +
          " " +
          datas.lastname +
          " successfully"
      );
      datas.amount = String(Number(datas.amount)+amount[datas.mobile])
      user.amount = String(Number(user.amount)- amount[datas.mobile] )
      dispatch(updateUserData(datas))
      dispatch(updateUserData(user));
      sessionStorage.setItem("user", JSON.stringify(user))
      setAmount({...amount,[datas.mobile]:""})
    }

    // (Number(user.amount)< amount[datas.mobile]) 
    // ?dispatch(errorMessage("Your account has insufficient funds...! Check that you have enough money in your account."))
    // :dispatch(addTransactionsData(transactions)) &&
    // // alert(
    // //   "Amount " +
    // //     amount[datas.mobile] +
    // //     " sent to the " +
    // //     datas.firstname +
    // //     " " +
    // //     datas.lastname +
    // //     " successfully"
    // // ) &&
    // (user.amount = String(Number(user.amount)- amount[datas.mobile] )) &&
    // dispatch(updateUserData(user)) && 
    // (sessionStorage.setItem("user", JSON.stringify(user))) &&
    // setAmount({...amount,[datas.mobile]:""})

  };

  useEffect(() => {
    dispatch(usersFetchLogic);
  }, []);

  const allusersare = useSelector((state: any) => state.allusersdata);

  const withoutuserdata = allusersare.list.filter((datas: any) => {
    return user.mobile !== datas.mobile && datas.account!== null ;
  });

  const usersdatas = withoutuserdata.map((datas: any, index: number,mobile :any) => (
    <div key={index}>
      <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
        <div className="text-uppercase">
          {datas.firstname} {datas.lastname} - {datas.mobile}
          <pre></pre>
          <input
            type="number"
            onChange={event => handleChange(event,datas)}
            className = "width30"
            value = {amount[datas.mobile]}
            
          />
          <br />
          <button
            className="btn btn-primary text-uppercase"
            id="sent-moneny-button"
            onClick={(event) => {
              handleClick(event,datas)
            }}
          >
            {t("sent_money")}
          </button>
        </div>
      </div>
      <hr />
    </div>
  ));

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
            {usersdatas}
          </div>
        </div>
      </div>

    </>
  );
};

export default UsersList;
