import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Person } from "./types/typesimport";

const Welcome = () => {
  const { t } = useTranslation();
  const [UserData, setUserData] = useState({} as Person);
  const [data, setData] = useState<any>([]);

  const datas: any = localStorage.getItem("user");
  const user = JSON.parse(datas);

  const baseURL = "http://localhost:3000/users/";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    data.map((userdatas: any) => {
      if (userdatas.mobile === user.mobile) {
        setUserData(userdatas);
      }
    });
  });

  return (
    <>
      <div className="d-flex flex-column">
        <div className="h5">
          {t("hello")} {UserData.firstname} {UserData.lastname}
        </div>
        <div>
          {t("logged_in_as")} {UserData.email}
        </div>
      </div>
    </>
  );
};

export default Welcome;
