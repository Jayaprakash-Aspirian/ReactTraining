import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Welcome from "./Welcome";
import { Person } from "./types/typesimport";

const UsersList = () => {
  const { t } = useTranslation();
  const userdetails: any = localStorage.getItem("user");
  const user = JSON.parse(userdetails);
  const [amount, setAmount] = useState("");
  const [post, setPost] = useState();
  const baseURL = "http://localhost:3000/users/";

  const SentAmount = () => {
    console.log(amount + "amount sent to");
  };

  useEffect(() => {
   axios.get(baseURL).then((response) => {
    const val = response.data;

    setPost(
      val.map((datas: Person, index: any) => {
        if (user.mobile === datas.mobile) {
          return;
        } else {
          return (
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
        }
      })
    );
  });
  }, []);

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
            {post}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersList;
