import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className="main-footer py-5">
      <div className="container">
        <div className="footer-row d-flex align-items-center justify-content-between">
          <div className="row">
            <div className="col-md-4">
              <h2>
                <span className="txt-danger">{t("footer.title.brand")}</span>
                {t("footer.title.name")}
              </h2>
              <p>{t("footer.description")}</p>
              <div className="social-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin ps-4"></i>
              </div>
            </div>
            <div className="col-md-4 px-3 mt-3">
              <h4 className="txt-white">{t("footer.navigate.title")}</h4>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
                <li className="nav-item">
                  <a
                    className="nav-link active d-inline-block"
                    aria-current="page"
                    href="#"
                  >
                    {t("footer.navigate.home")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-inline-block"
                    aria-current="page"
                    href="#"
                  >
                    {t("footer.navigate.about")}
                  </a>
                </li>
                <li className="nav-item d-inline-block">
                  <a
                    className="nav-link d-inline-block"
                    aria-current="page"
                    href="#"
                  >
                    {t("footer.navigate.faq")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-inline-block"
                    aria-current="page"
                    href="#"
                  >
                    {t("footer.navigate.contact")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-inline-block"
                    aria-current="page"
                    href="#"
                  >
                    {t("footer.navigate.advertise")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 px-3 mt-3">
              <h4 className="txt-white">{t("footer.subscribe.title")}</h4>
              <p>{t("footer.subscribe.description")}</p>
              <form className="d-flex align-items-center justify-content-between">
                <input
                  type="email"
                  className="w-70 ms-2"
                  placeholder={t("footer.subscribe.inputPlaceholder")}
                />
                <button className="red-btn btn ms-3 w-30" type="submit">
                  {t("footer.subscribe.submitButton")}
                </button>
              </form>
            </div>

            <div className="col-md-12 text-center footer-copy mt-5 border-top">
              <p className="mt-4">{t("footer.copyRight")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
