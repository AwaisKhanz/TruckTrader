import { useTranslation } from "react-i18next";

const AboutUsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="about mb-5">
      <div className="container">
        <div className="about-us">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-7">
              <div className="about-content w-75">
                <h2>
                  {t("about.welcome")}{" "}
                  <span className="txt-blue">{t("about.truckServices")}</span>
                </h2>
                <p>{t("about.description")}</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="assets/images/image 125.jpg"
                    className="card-img"
                    alt="truck-img"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="/assets/images/image 127.jpg"
                    className="card-img"
                    alt="truck-img"
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <img
                    src="/assets/images/image 128.jpg"
                    className="card-img"
                    alt="truck-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-3">
            {[
              {
                icon: "fas fa-truck",
                title: t("about.cards.allBrands.title"),
                text: t("about.cards.allBrands.text"),
              },
              {
                icon: "fas fa-headset",
                title: t("about.cards.freeSupport.title"),
                text: t("about.cards.freeSupport.text"),
              },
              {
                icon: "fas fa-building",
                title: t("about.cards.dealership.title"),
                text: t("about.cards.dealership.text"),
              },
              {
                icon: "fas fa-dollar-sign",
                title: t("about.cards.affordable.title"),
                text: t("about.cards.affordable.text"),
              },
            ].map((card, index) => (
              <div className="col-md-3" key={index}>
                <div className="card">
                  <div className="card-body">
                    <div className="card-img">
                      <i className={`${card.icon} fa-3x mb-3`}></i>
                    </div>
                    <div className="card-title">
                      <h5>{card.title}</h5>
                    </div>
                    <div className="card-text">
                      <p>{card.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
