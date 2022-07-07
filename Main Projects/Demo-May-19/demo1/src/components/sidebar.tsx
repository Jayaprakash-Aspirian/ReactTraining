import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";
import { WithPermission } from "./with-permission";


const Sidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      <WithPermission roleRequired="USER" message="">
        <div className="col-lg-3 my-lg-0 my-md-1" id="sidebar-change">
          <div id="sidebar" className="bg-purple">
            <div className="h4 text-white">{t("account")}</div>
            <ul>
              <Link
                to="/dashboard"
                style={{ textDecoration: "inherit", color: "white" }}
              >
                <li
                  className={
                    location.pathname.includes("/dashboard") ? "active" : ""
                  }
                >
                  <div className="text-decoration-none d-flex align-items-start">
                    <div className="fas fa-box pt-2 me-3"></div>
                    <div className="d-flex flex-column">
                      <div className="link">{t("my_account")}</div>
                      <div className="link-desc">{t("dashboard")}</div>
                    </div>
                  </div>
                </li>
              </Link>
              {/* <UserPermission roleRequired="BankAccountHaveUser" message=""> */}
              <Link
                to="/userslist"
                style={{ textDecoration: "inherit", color: "white" }}
              >
                <li
                  className={location.pathname === "/userslist" ? "active" : ""}
                >
                  <div className="text-decoration-none d-flex align-items-start">
                    <div className="far fa-address-book pt-2 me-3"></div>
                    <div className="d-flex flex-column">
                      <div className="link">{t("users_list")}</div>
                      <div className="link-desc">{t("userslist_subtitle")}</div>
                    </div>
                  </div>
                </li>
              </Link>
              {/* </UserPermission> */}
              <Link
                to="/profile"
                style={{ textDecoration: "inherit", color: "white" }}
              >
                <li
                  className={location.pathname === "/profile" ? "active" : ""}
                >
                  <div className="text-decoration-none d-flex align-items-start">
                    <div className="far fa-user pt-2 me-3"></div>
                    <div className="d-flex flex-column">
                      <div className="link">{t("profile")}</div>
                      <div className="link-desc">{t("profile_subtitile")}</div>
                    </div>
                  </div>
                </li>
              </Link>
              <Link
                to="/contact"
                style={{ textDecoration: "inherit", color: "white" }}
              >
                <li
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  <div className="text-decoration-none d-flex align-items-start">
                    <div className="fas fa-headset pt-2 me-3"></div>
                    <div className="d-flex flex-column">
                      <div className="link">{t("help")}</div>
                      <div className="link-desc">{t("help_subtitle")}</div>
                    </div>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <Outlet />
      </WithPermission>
    </>
  );
};

export default Sidebar;
