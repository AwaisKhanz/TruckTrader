import { useState } from "react";
import { useTranslation } from "react-i18next";

const SignupPage = () => {
  const { t } = useTranslation();
  const [isBusiness, setIsBusiness] = useState(false);
  const [accountType, setAccountType] = useState("");

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
    if (event.target.value === "business") {
      setIsBusiness(event.target.checked);
    } else {
      setIsBusiness(false); // Automatically hide business fields if Private is checked
    }
  };

  return (
    <section className="signup-page">
      <div className="signup-banner">
        <div className="content d-flex justify-content-center align-items-center">
          <div className="container text-center">
            <div className="signup-content">
              <h1>
                <span className="txt-blue">{t("signupPage.banner.part1")}</span>{" "}
                {t("signupPage.banner.part2")}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="signup-form py-5 my-5">
        <div className="container">
          <form>
            <div className="row">
              {/* Account Type Side */}
              <div className="col-md-6">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h5>{t("signupPage.accountType.label")}</h5>
                  </div>
                  <div className="col-md-4 d-flex align-items-center">
                    <input
                      type="radio"
                      id="private"
                      name="accountType"
                      value="private"
                      className="me-2 custom-checkbox"
                      checked={accountType === "private"}
                      onChange={handleAccountTypeChange}
                    />
                    <label htmlFor="private">
                      {t("signupPage.accountType.private")}
                    </label>
                  </div>
                  <div className="col-md-4 d-flex align-items-center">
                    <input
                      type="radio"
                      id="business"
                      name="accountType"
                      value="business"
                      className="me-2 custom-checkbox"
                      checked={accountType === "business"}
                      onChange={handleAccountTypeChange}
                    />
                    <label htmlFor="business">
                      {t("signupPage.accountType.business")}
                    </label>
                  </div>
                </div>
                <div className="row pt-3 mt-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label py-2">
                      {t("signupPage.form.firstName.label")}
                      <span className="required-sign /">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control py-3"
                      id="name"
                      placeholder={t("signupPage.form.firstName.placeholder")}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="surname" className="form-label py-2">
                      {t("signupPage.form.surname.label")}
                      <span className="required-sign /">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control py-3"
                      id="surname"
                      placeholder={t("signupPage.form.surname.placeholder")}
                      required
                    />
                  </div>

                  {/* Business Type Field */}
                  {isBusiness && (
                    <div className="col-md-12 mt-3 business-fields">
                      <label htmlFor="subscription" className="form-label py-2">
                        {t("signupPage.form.subscription.label")}
                      </label>
                      <select className="form-control py-3">
                        <option disabled>
                          {t("signupPage.form.subscription.placeholder")}
                        </option>
                        <option>
                          {t("signupPage.form.subscription.option1")}
                        </option>
                        <option>
                          {t("signupPage.form.subscription.option2")}
                        </option>
                        <option>
                          {t("signupPage.form.subscription.option3")}
                        </option>
                      </select>
                    </div>
                  )}
                  {/* Business Type Field / */}

                  <div className="col-md-6 my-3">
                    <label htmlFor="zipCode" className="form-label py-2">
                      {t("signupPage.form.zipCode.label")}
                      <span className="required-sign /">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control py-3"
                      id="zipCode"
                      placeholder={t("signupPage.form.zipCode.placeholder")}
                      required
                    />
                  </div>
                  <div className="col-md-6 my-3">
                    <label htmlFor="streetCode" className="form-label py-2">
                      {t("signupPage.form.streetCode.label")}
                      <span className="required-sign /">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control py-3"
                      id="streetCode"
                      placeholder={t("signupPage.form.streetCode.placeholder")}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="street" className="form-label py-2">
                      {t("signupPage.form.street.label")}
                      <span className="required-sign /">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control py-3"
                      id="street"
                      placeholder={t("signupPage.form.street.placeholder")}
                      required
                    />
                  </div>
                  <div className="col-md-6 my-3">
                    <label htmlFor="city" className="form-label py-2">
                      {t("signupPage.form.city.label")}
                      <span className="required-sign /">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control py-3"
                      id="city"
                      placeholder={t("signupPage.form.city.placeholder")}
                      required
                    />
                  </div>
                  <div className="col-md-6 my-3">
                    <label htmlFor="country" className="form-label py-2">
                      {t("signupPage.form.country.label")}
                      <span className="required-sign">*</span>
                    </label>
                    <select
                      className="form-control py-3"
                      id="country"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {t("signupPage.form.country.placeholder")}
                      </option>
                      <option value="USA">
                        {t("signupPage.form.country.option1")}
                      </option>
                      <option value="Canada">
                        {t("signupPage.form.country.option2")}
                      </option>
                      <option value="UK">
                        {t("signupPage.form.country.option3")}
                      </option>
                      <option value="Australia">
                        {t("signupPage.form.country.option4")}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Gender Type Side */}
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row align-items-center mb-3">
                      <div className="col-md-2">
                        <h5>{t("signupPage.form.gender.label")}</h5>
                      </div>
                      <div className="col-md-3 d-flex align-items-center justify-content-center">
                        <input
                          type="checkbox"
                          id="male"
                          name="gender"
                          value="male"
                          className="me-2 custom-checkbox"
                        />
                        <label htmlFor="male">
                          {t("signupPage.form.gender.male")}
                        </label>
                      </div>
                      <div className="col-md-3 d-flex align-items-center justify-content-center">
                        <input
                          type="checkbox"
                          id="female"
                          name="gender"
                          value="female"
                          className="me-2 custom-checkbox"
                        />
                        <label htmlFor="female">
                          {t("signupPage.form.gender.female")}
                        </label>
                      </div>
                      <div className="col-md-3 d-flex align-items-center justify-content-center">
                        <input
                          type="checkbox"
                          id="other"
                          name="gender"
                          value="other"
                          className="me-2 custom-checkbox"
                        />
                        <label htmlFor="other">
                          {t("signupPage.form.gender.other")}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="signup-btn">
              {t("signupPage.form.submitButton")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
