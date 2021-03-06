import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { transactionsFetchLogic } from "../store/logic/all-transaction-history-logic";
import { userdetails as datas } from "./session-storage";
import { Person, Transactions } from "./types/typesimport";
import Welcome from "./welcome";

const TransactionHistory = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [userdetails, setUserData] = useState({} as Person);

  useEffect(() => {
    setUserData(JSON.parse(datas()));
  }, []);

  useEffect(() => {
    dispatch(transactionsFetchLogic);
  }, []);

  const alltransactions = useSelector(
    (state: any) => state.alltransactionsdata.transactions
  );

  const usertransactions = alltransactions.filter((datas: any) => {
    return datas.from === userdetails.mobile || datas.to === userdetails.mobile;
  });

  const usertransactionspage = usertransactions.map(
    (post: Transactions, index: number) => {
      return userdetails.mobile === post.from ? (
        <div className="order my-3 bg-light" key={index}>
          <div className="column">
            <div className="col-lg-8">
              <div className="d-flex flex-column justify-content-between order-summary">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="text-uppercase">{post.to}</div>
                  </div>
                  <div className="fs-8">{post.date}</div>
                </div>
                <div>
                  <div
                    className="btn btn-primary text-uppercase"
                    id="sent-money-color"
                  >
                    -{post.sentmoney}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : userdetails.mobile === post.to ? (
        <div className="order my-3 bg-light" key={index}>
          <div className="column">
            <div className="col-lg-8">
              <div className="d-flex flex-column justify-content-between order-summary">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="text-uppercase">{post.from}</div>
                  </div>
                  <div className="fs-8"> {post.date}</div>
                  <div className="rating d-flex align-items-center pt-1"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                <div
                  className="btn btn-primary text-uppercase"
                  id="get-money-color"
                >
                  +{post.sentmoney}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : userdetails.role === "ADMIN" ? (
        <div className="order my-3 bg-light" key={index}>
          <div className="column">
            <div className="col-lg-8">
              <div className="d-flex flex-column justify-content-between order-summary">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="text-uppercase"></div>
                  </div>
                  <div className="fs-8">
                    {t("from")}:{post.from}
                  </div>
                  <div className="fs-8">
                    {t("to")} :{post.to}
                  </div>
                  <div className="fs-8">
                    {t("sent_money")}: {post.sentmoney}
                  </div>
                  <div className="fs-8">
                    {t("date")}: {post.date}
                  </div>
                  <div className="rating d-flex align-items-center pt-1"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                <div className="btn btn-primary text-uppercase">
                  {t("edit_details")}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      );
    }
  );

  return (
    <>
      <div className="dashboard-change">
        <div id="main-content" className="bg-white border">
          <Welcome />
          <br />
          <div className="text-uppercase"> {t("transaction_history")}:</div>
          {usertransactionspage}
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
