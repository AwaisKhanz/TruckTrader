import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h2 className="mb-0">
            <strong>
              <span className="txt-danger">{t("navbar.brandName")}</span>
              {t("navbar.trader")}
            </strong>
          </h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active">
                {t("navbar.home")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="aboutus">
                {t("navbar.about")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="faq">
                {t("navbar.faq")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="contact">
                {t("navbar.contact")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="advertise">
                {t("navbar.advertise")}
              </NavLink>
            </li>
          </ul>
          <form className="d-flex align-items-center">
            <ul className="nav">
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="pe-2">
                    {i18n.language === "en" ? "Eng" : "Ned"}
                  </span>
                  <i className="fa fa-globe"></i>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => changeLanguage("en")}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => changeLanguage("nl")}
                    >
                      Nederlands
                    </button>
                  </li>
                </ul>
              </li>
            </ul>

            <NavLink to="signin" className="red-btn btn me-3">
              {t("navbar.signIn")}
            </NavLink>
            <NavLink to="signup" className="white-btn btn">
              {t("navbar.signUp")}
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
