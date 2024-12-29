import { useTranslation } from "react-i18next";

const AdvertisePage = () => {
  const { t } = useTranslation();

  return (
    <section className="advertise">
      <div className="advertise-banner">
        <div className="content d-flex align-items-center">
          <div className="container text-center py-4 w-75">
            <div className="advertise-content">
              <h1 className="txt-white">{t("advertisePage.banner.title")}</h1>
              <h4 className="txt-blue">
                {t("advertisePage.banner.carCompanies.title")}
              </h4>
              <p className="txt-white">
                {t("advertisePage.banner.carCompanies.description")}
              </p>

              <h4 className="txt-blue">
                {t("advertisePage.banner.individuals.title")}
              </h4>
              <p className="txt-white">
                {t("advertisePage.banner.individuals.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="advertise-form">
        <div className="container">
          <form action="">
            <div className="advertise-head py-4">
              <h1>
                <span className="txt-blue">
                  {t("advertisePage.form.header.title")}
                </span>
              </h1>
            </div>

            <div className="advertise-row d-flex align-items-center justify-content-between">
              <div className="col-md-6 px-4">
                <div className="col-md-12 my-3">
                  <label htmlFor="features" className="form-label py-2">
                    {t("advertisePage.form.fields.subscription.label")}
                    <span className="required-sign">*</span>
                  </label>

                  <select className="form-control py-3" id="country" required>
                    <option value="">
                      {t("advertisePage.form.fields.subscription.placeholder")}
                    </option>
                    <option value="USA">2020</option>
                    <option value="Canada">2021</option>
                    <option value="UK">2022</option>
                    <option value="Australia">2023</option>
                  </select>
                </div>

                <div className="col-md-12 my-3">
                  <label htmlFor="cocNumber" className="form-label py-2">
                    {t("advertisePage.form.fields.cocNumber.label")}
                    <span className="required-sign">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="cocNumber"
                    placeholder={t(
                      "advertisePage.form.fields.cocNumber.placeholder"
                    )}
                    required
                  />
                </div>

                <div className="col-md-12 my-3">
                  <label htmlFor="firstName" className="form-label py-2">
                    {t("advertisePage.form.fields.firstName.label")}
                    <span className="required-sign">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="firstName"
                    placeholder={t(
                      "advertisePage.form.fields.firstName.placeholder"
                    )}
                    required
                  />
                </div>

                <div className="col-md-12 my-3">
                  <label htmlFor="street" className="form-label py-2">
                    {t("advertisePage.form.fields.street.label")}
                    <span className="required-sign">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="street"
                    placeholder={t(
                      "advertisePage.form.fields.street.placeholder"
                    )}
                  />
                </div>

                <div className="col-md-12 my-3">
                  <label htmlFor="country" className="form-label py-2">
                    {t("advertisePage.form.fields.country.label")}
                    <span className="required-sign">*</span>
                  </label>
                  <select className="form-control py-3" id="country" required>
                    <option value="">
                      {t("advertisePage.form.fields.country.placeholder")}
                    </option>
                    <option value="USA">2020</option>
                    <option value="Canada">2021</option>
                    <option value="UK">2022</option>
                    <option value="Australia">2023</option>
                  </select>
                </div>

                <div className="col-md-12 my-3">
                  <label htmlFor="phoneNumber" className="form-label py-2">
                    {t("advertisePage.form.fields.phoneNumber.label")}
                    <span className="required-sign">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="phoneNumber"
                    placeholder={t(
                      "advertisePage.form.fields.phoneNumber.placeholder"
                    )}
                    required
                  />
                </div>

                <div className="col-md-12 my-3">
                  <label htmlFor="zipCode" className="form-label py-2">
                    {t("advertisePage.form.fields.zipCode.label")}
                    <span className="required-sign">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="zipCode"
                    placeholder={t(
                      "advertisePage.form.fields.zipCode.placeholder"
                    )}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6 px-4">
                <div className="col-md-12 my-3">
                  <label htmlFor="company" className="form-label py-2">
                    {t("advertisePage.form.fields.company.label")}
                    <span className="required-sign">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="company"
                    placeholder={t(
                      "advertisePage.form.fields.company.placeholder"
                    )}
                    required
                  />
                </div>

                <div className="col-md-12 my-3">
                  <label htmlFor="insert" className="form-label py-2">
                    {t("advertisePage.form.fields.insert.label")}
                    <span className="required-sign">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="insert"
                    placeholder={t(
                      "advertisePage.form.fields.insert.placeholder"
                    )}
                    required
                  />
                </div>

                <div className="col-md-12 my-3">
                  <label htmlFor="lastName" className="form-label py-2">
                    {t("advertisePage.form.fields.lastName.label")}
                    <span className="required-sign">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="lastName"
                    placeholder={t(
                      "advertisePage.form.fields.lastName.placeholder"
                    )}
                    required
                  />
                </div>

                <div className="col-md-12 my-3">
                  <label htmlFor="streetNumber" className="form-label py-2">
                    {t("advertisePage.form.fields.streetNumber.label")}
                    <span className="required-sign">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="streetNumber"
                    placeholder={t(
                      "advertisePage.form.fields.streetNumber.placeholder"
                    )}
                  />
                </div>

                <div className="col-md-12 my-3">
                  <label htmlFor="city" className="form-label py-2">
                    {t("advertisePage.form.fields.city.label")}
                    <span className="required-sign">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="city"
                    placeholder={t(
                      "advertisePage.form.fields.city.placeholder"
                    )}
                  />
                </div>

                <div className="col-md-12 my-3">
                  <label htmlFor="email" className="form-label py-2">
                    {t("advertisePage.form.fields.email.label")}
                    <span className="required-sign">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control py-3"
                    id="email"
                    placeholder={t(
                      "advertisePage.form.fields.email.placeholder"
                    )}
                    required
                  />
                </div>

                <div className="col-md-12 my-3">
                  <label htmlFor="bank" className="form-label py-2">
                    {t("advertisePage.form.fields.bank.label")}
                    <span className="required-sign">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="bank"
                    placeholder={t(
                      "advertisePage.form.fields.bank.placeholder"
                    )}
                    required
                  />
                </div>
              </div>
            </div>
            <button className="advertise-btn">
              {t("advertisePage.form.button")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdvertisePage;
