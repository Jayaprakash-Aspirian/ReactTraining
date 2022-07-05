import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="dashboard-change">
        <div id="main-content" className="bg-white border">
          <div className="d-flex flex-column">
            <div className="h5">{t("any_queries")}:</div>
          </div>
          <br />
          <div className="text-uppercase">{t("contact_from_here")}.</div>
          <div className="order my-3 bg-light">
            <br />
            <div className="row">
              <div className="col-lg-4">
                <div className="text-uppercase">{t("email")} :</div>
                <p>{t("aspay_mailid")}</p>
                <br />
                <div className="text-uppercase">{t("contact_us")} :</div>
                <p>12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
