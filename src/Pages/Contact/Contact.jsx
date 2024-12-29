import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <section className="contact">
        <div className="content d-flex justify-content-center align-items-center">
          <div className="container text-center">
            <div className="contact-us width-75 mx-auto">
              <h1>
                {t("contactPage.heading")} <span className="txt-blue">Us</span>
              </h1>
              <p>{t("contactPage.description")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form mt-5 pt-5">
        <div className="container">
          <div className="contact-form-row">
            <div className="row">
              <div className="col-md-5 form-pic">
                <div className="row my-3 d-flex align-items-center justify-content-between">
                  <div className="col-md-1">
                    <i className="fab fa-2x fa-whatsapp text-muted pe-1"></i>
                  </div>
                  <div
                    className="col-md-11"
                    style={{ fontSize: "16px", fontWeight: 500 }}
                  >
                    {t("contactPage.callUs.label")}
                    <br />
                    {t("contactPage.callUs.phone")}
                  </div>
                </div>
                <div className="row my-3 d-flex align-items-center justify-content-between">
                  <div className="col-md-1">
                    <i className="fa fa-2x fa-clock text-muted pe-1"></i>
                  </div>
                  <div
                    className="col-md-11"
                    style={{ fontSize: "16px", fontWeight: 500 }}
                  >
                    {t("contactPage.officeHours.label")}
                    <br />
                    {t("contactPage.officeHours.timing")}
                  </div>
                </div>
                <div className="row my-3 d-flex align-items-center justify-content-between">
                  <div className="col-md-12 contact-img">
                    <img src="assets/images/contact-girl.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-7 main-form-header my-3">
                <h2>
                  <span className="txt-blue">
                    {t("contactPage.form.title")}
                  </span>
                </h2>
                <form className="main-form py-5">
                  <div className="row">
                    <div className="col-md-6 my-2">
                      <label htmlFor="name" className="form-label py-2">
                        <i className="fa fa-user text-muted pe-1"></i>
                        {t("contactPage.form.fields.firstName.label")}
                        <span className="required-sign"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control py-3"
                        id="name"
                        placeholder={t(
                          "contactPage.form.fields.firstName.placeholder"
                        )}
                        required
                      />
                    </div>
                    <div className="col-md-6 my-2">
                      <label htmlFor="last-name" className="form-label py-2">
                        <i className="fa fa-user text-muted pe-1"></i>
                        {t("contactPage.form.fields.lastName.label")}
                        <span className="required-sign"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control py-3"
                        id="lastName"
                        placeholder={t(
                          "contactPage.form.fields.lastName.placeholder"
                        )}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 my-2">
                      <label htmlFor="email" className="form-label py-2">
                        <i className="fa fa-envelope text-muted pe-1"></i>
                        {t("contactPage.form.fields.email.label")}
                        <span className="required-sign"> *</span>
                      </label>
                      <input
                        type="email"
                        className="form-control py-3"
                        id="email"
                        placeholder={t(
                          "contactPage.form.fields.email.placeholder"
                        )}
                        required
                      />
                    </div>
                    <div className="col-md-6 my-2">
                      <label htmlFor="phone-number" className="form-label py-2">
                        <i className="fa fa-phone text-muted pe-1"></i>
                        {t("contactPage.form.fields.phoneNumber.label")}
                        <span className="required-sign"> *</span>
                      </label>
                      <input
                        type="number"
                        className="form-control py-3 "
                        id="phonenumber"
                        placeholder={t(
                          "contactPage.form.fields.phoneNumber.placeholder"
                        )}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12 my-2">
                    <label htmlFor="message" className="form-label py-2">
                      <i className="fa fa-message text-muted pe-1"></i>
                      {t("contactPage.form.fields.message.label")}
                      <span className="required-sign"> *</span>
                    </label>
                    <textarea
                      className="form-control full-width"
                      id="message"
                      rows="7"
                      placeholder={t(
                        "contactPage.form.fields.message.placeholder"
                      )}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn my-3">
                    {t("contactPage.form.submitButton")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
