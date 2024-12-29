import { useTranslation } from "react-i18next";

const AboutUsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="about-banner">
        <div className="content d-flex justify-content-center align-items-center">
          <div className="container text-center">
            <div className="about-content mx-auto">
              <h1 className="txt-white">
                {t("aboutUs.banner.title.part1")}{" "}
                <span className="txt-blue">
                  {t("aboutUs.banner.title.part2")}
                </span>
              </h1>
              <p className="txt-white">{t("aboutUs.banner.description")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-row">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6">
              <img src="assets/images/contact-girl.png" alt="" />
            </div>
            <div className="col-md-6">
              <h2 className="txt-black">
                {t("aboutUs.section1.title.part1")}{" "}
                <span className="txt-blue">
                  {t("aboutUs.section1.title.part2")}
                </span>
              </h2>
              <div className="about-properties text-start">
                <ul className="nav flex-column">
                  {t("aboutUs.section1.benefits", { returnObjects: true }).map(
                    (benefit, index) => (
                      <li className="nav-item" key={index}>
                        <i className="fa-solid fa-check txt-blue"></i>
                        <span className="ms-3">{benefit}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-row-2 d-flex justify-content-center my-4">
        <div className="content w-100 d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="txt-black">
                  {t("aboutUs.section2.title.part1")}{" "}
                  <span className="txt-blue">
                    <br />
                    {t("aboutUs.section2.title.part2")}
                  </span>
                </h2>
                <p>{t("aboutUs.section2.description")}</p>
                <div className="about-properties text-start">
                  <ul className="nav flex-column">
                    <h4 className="py-3">
                      {t("aboutUs.section2.advantages.title")}
                    </h4>
                    {t("aboutUs.section2.advantages.list", {
                      returnObjects: true,
                    }).map((advantage, index) => (
                      <li className="nav-item" key={index}>
                        <i className="fa-solid fa-check txt-blue"></i>
                        <span className="ms-3">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <img src="assets/images/contact-girl.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-row-3">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
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
            <div className="col-md-6">
              <div className="about-content px-5">
                <h2>
                  {t("aboutUs.section3.title.part1")}{" "}
                  <span className="txt-blue">
                    {t("aboutUs.section3.title.part2")}
                  </span>
                </h2>
                <div className="about-properties text-start">
                  <ul className="nav flex-column">
                    {t("aboutUs.section3.connections", {
                      returnObjects: true,
                    }).map((connection, index) => (
                      <li className="nav-item" key={index}>
                        <i className="fa-solid fa-check txt-blue"></i>
                        <span className="ms-3">{connection}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 d-flex justify-content-center my-4 about-xml">
        <div className="about-content text-center px-5">
          <h2 className="">
            {t("aboutUs.section4.title.part1")}{" "}
            <span className="txt-blue">
              {t("aboutUs.section4.title.part2")}
            </span>
          </h2>
          <div className="about-properties text-start">
            <ul className="nav flex-column text-center">
              {t("aboutUs.section4.list", { returnObjects: true }).map(
                (item, index) => (
                  <li className="nav-item" key={index}>
                    <i className="fa-solid fa-check txt-blue"></i>
                    <span className="ms-3">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
