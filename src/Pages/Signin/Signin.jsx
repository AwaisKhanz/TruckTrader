import { useTranslation } from "react-i18next";

const SigninPage = () => {
  const { t } = useTranslation();

  return (
    <section className="Signin-page">
      <div className="login-form mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="form-content">
                <h2 className="card-title text-center py-2">
                  {t("signinPage.title.part1")}{" "}
                  <span className="txt-blue">
                    {t("signinPage.title.part2")}
                  </span>
                </h2>
                <p className="text-center py-2">{t("signinPage.subtitle")}</p>
              </div>

              <form className="mt-4">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label py-2">
                    {t("signinPage.form.email.label")}{" "}
                    <span className="required-sign">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control py-3"
                    id="email"
                    placeholder={t("signinPage.form.email.placeholder")}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label py-2">
                    {t("signinPage.form.password.label")}{" "}
                    <span className="required-sign /">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control py-3"
                    id="password"
                    placeholder={t("signinPage.form.password.placeholder")}
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        {t("signinPage.form.rememberMe")}
                      </label>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                      <a href="#" className="text-decoration-none txt-black">
                        {t("signinPage.form.forgotPassword")}
                      </a>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn login-btn mt-3 w-100">
                  {t("signinPage.form.submitButton")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;
