import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Person } from "./types/typesimport";
import { userdetails } from "./session-storage";

const Welcome = () => {
  const { t } = useTranslation();
  const [UserData, setUserData] = useState({} as Person);

  useEffect(() => {
    setUserData(JSON.parse(userdetails()));
  }, []);

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
