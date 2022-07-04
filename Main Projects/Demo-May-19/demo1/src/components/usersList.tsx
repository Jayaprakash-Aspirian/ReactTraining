import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Welcome from "./welcome";
import { Person } from "./types/typesimport";
import { useDispatch, useSelector } from "react-redux";
import { usersFetchLogic } from "../store/logic/all-users-logic";
import { transactionsFetchLogic } from "../store/logic/all-transaction-history-logic";
import { addTransactionsData } from "../store/activity.actions";
import { userdetails } from "./session-storage";
import { datedetails } from "./currenttime";

const UsersList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [amount, setAmount] = useState<any>();
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

  const SentAmount = (datas: Person) => {
    
    const userdatas = JSON.parse(userdetails());

    const transactions = {
      id: alltransactions.length + 1,
      from: userdatas.mobile,
      to: datas.mobile,
      sentmoney: amount[datas.mobile],
      date: datedetails(),
    };

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
  };

  useEffect(() => {
    dispatch(usersFetchLogic);
  }, []);

  const allusersare = useSelector((state: any) => state.allusersdata);

  const withoutuserdata = allusersare.list.filter((datas: any) => {
    return user.mobile !== datas.mobile;
  });

  const usersdatas = withoutuserdata.map((datas: any, index: number) => (
    <div key={index}>
      <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
        <div className="text-uppercase">
          {datas.firstname} {datas.lastname} - {datas.mobile}
          <pre></pre>
          <input
            type="number"
            onChange={(e) =>
              setAmount({ ...amount, [datas.mobile]: e.target.value })
            }
            className = "width30"
          />
          <br />
          <button
            className="btn btn-primary text-uppercase"
            id="sent-moneny-button"
            onClick={() => {
              SentAmount(datas);
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
