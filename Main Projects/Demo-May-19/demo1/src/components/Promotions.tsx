import { useTranslation } from "react-i18next";
import Welcome from "./Welcome";

const Promotions = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="dashboard-change">
        <div id="main-content" className="bg-white border">
          <Welcome />
          <br />
          <div className="text-uppercase">{t("promotions")}:</div>

          <div className="order my-3 bg-light">
            <br />
            <div className="row">
              <div className="col-lg-4">
                <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                  <div> {t("promotions_subtitle")}.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotions;
