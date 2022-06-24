import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Welcome from "./welcome";
import { Person } from "./types/typesimport";
import { useDispatch, useSelector } from "react-redux";
import { usersFetchLogic } from "../store/logic/all-users-logic";
import axios from "axios";
import { transactionsFetchLogic } from "../store/logic/all-transaction-history-logic";
import { DateTime } from "luxon";
import { transactionsAddLogic } from "../store/logic/add-transactions-logic";
import { addTransactionsData, ADD_TRANSACTIONS_ACTIVITY } from "../store/activity.actions";
import {  userdetails } from "./session-storage";

const UsersList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [transactions, setTransaction] = useState({})
  const [amount, setAmount] = useState<any>();
  const alltransactions = useSelector(
    (state: any) => state.alltransactionsdata.transactions
  );
  const [user, setUserData] = useState({} as Person);
  
  useEffect(() => {
    setUserData(JSON.parse(userdetails()));
  }, []);

  useEffect(() => {
    dispatch(transactionsFetchLogic);
  }, []);

  useEffect(() => {
    dispatch(addTransactionsData(transactions))
  },[transactions])

  const SentAmount = (datas: Person) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dateis = new Date();
    const day = days[dateis.getDay()];
    const datedetails =
      day +
      " " +
      DateTime.now().toLocaleString(DateTime.DATE_MED) +
      " " +
      dateis.getHours() +
      ":" +
      dateis.getMinutes() +
      ":" +
      dateis.getSeconds();

    const userdatas = JSON.parse(userdetails());

    setTransaction({
      id: alltransactions.length + 1,
      from: userdatas.mobile,
      to: datas.mobile,
      sentmoney: amount[datas.mobile],
      date: datedetails,
    })

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
            style={{ width: "30%" }}
          />
          <br />
          <div
            className="btn btn-primary text-uppercase"
            style={{ color: "green" }}
            onClick={() => {
              SentAmount(datas);
            }}
          >
            {t("sent_money")}
          </div>
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
