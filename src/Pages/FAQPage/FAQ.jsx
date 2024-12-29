import { useTranslation } from "react-i18next";

const FAQPage = () => {
  const { t } = useTranslation();

  return (
    <section className="faq-page">
      <div className="faq-banner">
        <div className="content d-flex justify-content-center align-items-center">
          <div className="container text-center">
            <div className="faq-content">
              <h1 className="txt-white">
                {t("faqPage.banner.title.part1")}{" "}
                <span className="txt-blue">
                  {t("faqPage.banner.title.part2")}
                </span>
                <br />
                {t("faqPage.banner.title.part3")}
              </h1>
              <p className="txt-white">{t("faqPage.banner.description")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="FAQ-one">
        <div className="container">
          <div className="row">
            {[...Array(2)].map((_, colIndex) => (
              <div className="col-md-6" key={colIndex}>
                <div className="accordion" id={`accordionExample${colIndex}`}>
                  <div
                    className="accordion accordion-flush"
                    id={`accordionFlushExample${colIndex}`}
                  >
                    {[...Array(5)].map((_, questionIndex) => {
                      const questionNumber = colIndex * 5 + questionIndex + 1;
                      return (
                        <div className="accordion-item" key={questionNumber}>
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#flush-collapse${questionNumber}`}
                              aria-expanded="false"
                              aria-controls={`flush-collapse${questionNumber}`}
                            >
                              {t(`faqPage.questions.${questionNumber}.title`)}
                            </button>
                          </h2>
                          <div
                            id={`flush-collapse${questionNumber}`}
                            className="accordion-collapse collapse"
                            data-bs-parent={`#accordionFlushExample${colIndex}`}
                          >
                            <div className="accordion-body">
                              {t(
                                `faqPage.questions.${questionNumber}.description`
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="FAQ-two py-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-5">
              <div className="FAQ-ad">
                <h1>
                  <span className="txt-blue">
                    {t("faqPage.advertise.title.part1")}
                  </span>{" "}
                  {t("faqPage.advertise.title.part2")}
                </h1>
                <p>{t("faqPage.advertise.description")}</p>
                <div className="FAQ-img card-img">
                  <img src="assets/images/contact-girl.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExampleAdvertise"
              >
                {[...Array(5)].map((_, questionIndex) => {
                  const questionNumber = questionIndex + 11; // Adjust question numbering for this section
                  return (
                    <div className="accordion-item" key={questionNumber}>
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapseAdvertise${questionNumber}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapseAdvertise${questionNumber}`}
                        >
                          {t(`faqPage.questions.${questionNumber}.title`)}
                        </button>
                      </h2>
                      <div
                        id={`flush-collapseAdvertise${questionNumber}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExampleAdvertise"
                      >
                        <div className="accordion-body">
                          {t(`faqPage.questions.${questionNumber}.description`)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
