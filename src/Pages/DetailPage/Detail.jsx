import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const DetailPage = () => {
  const { id } = useParams();
  const [carData, setCarData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation();

  const [showModal, setShowModal] = useState(false);

  const handleContactClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const fetchResultsById = async (id) => {
    setIsLoading(true);
    setIsError(false);
    try {
      // const currentLocale = localeMap[i18n.language] || "en_GB";
      const response = await axios.get(
        `${import.meta.env.VITE_API_KEY}vehicle?_fieldset=details&id=${id}`
      );
      setCarData(response.data?.vehicle);
    } catch (err) {
      console.log(err);
      setIsError(true);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (id) fetchResultsById(id);
  }, [id]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const {
    images = [],
    description = { title: "" },
    general,
    sections = [],
  } = carData || {};

  return (
    <section className="details-page mt-5">
      <div className="container">
        {/* Row */}
        <div className="row justify-content-between">
          {/* Col Starting*/}
          <div className="col-md-7 pe-0">
            <div className="detail-heading py-2">
              <h2 className="det-heading">{description.title}</h2>
            </div>
            <div className="button-list d-flex align-items-center gap-3">
              <button className="property-btn">
                <i className="fa-regular fa-calendar-days txt-blue"></i>
                <span> {general?.year}</span>
              </button>
              <button className="property-btn">
                <i className="fa-solid fa-truck txt-blue"></i>
                <span> {general?.make?.name}</span>
              </button>
            </div>
            <div className="detail-gallery my-4">
              {/* Main Swiper */}
              <Swiper
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[Navigation, Thumbs, Pagination, Scrollbar, A11y]}
                className="main-swiper"
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
              >
                {images?.length > 0 &&
                  images?.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img.src}
                        alt={`Slide ${index}`}
                        className=" quality-img"
                        width={"100%"}
                        height={"400px"}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>

              {/* Thumbnail Swiper */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="thumb-swiper mt-3"
              >
                {images?.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img?.src}
                      alt={`Thumbnail ${index}`}
                      className=""
                      width={"100%"}
                      height={"120px"}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="detail-desc py-2 ">
              <h4>{t("detailPage.description.title")}</h4>
              <p>{description.title}</p>
            </div>
            <hr />
            <div className="detail-features py-2">
              <h4>{t("detailPage.features.title")}</h4>
              <div className="features-row py-3">
                {sections?.map((section) => {
                  const validSubsections = section.subsections?.filter(
                    (subsection) =>
                      subsection.fields?.some((field) => field.display_value)
                  );
                  if (validSubsections?.length > 0) {
                    return (
                      <div key={section.key} className="section">
                        <h5 style={{ color: "#2596be" }}>{section.title}</h5>
                        {validSubsections.map((subsection) => (
                          <div key={subsection.key} className="subsection mb-4">
                            {subsection.fields
                              ?.filter((field) => field.display_value)
                              .map((field) => (
                                <div
                                  key={field.key}
                                  className="d-flex align-items-center justify-content-between mb-1"
                                >
                                  <span style={{ fontWeight: 500 }}>
                                    {field.label}:
                                  </span>
                                  <span>{field.display_value}</span>
                                </div>
                              ))}
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
          {/* Col closing */}

          {/* Col Starting */}
          <div className="col-md-4">
            <div className="detail-right-properties mt-3 pb-0 mb-0">
              <div className="truck-price text-end">
                <h4>
                  {carData?.sales_conditions.pricing?.asking?.in_eur?.formatted}
                </h4>
              </div>
              <div className="detail-properties">
                {sections
                  ?.find((section) => section.key === "general")
                  ?.subsections?.[0]?.fields?.find(
                    (field) => field.key === "general.type.name"
                  )?.display_value && (
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span>{t("detailPage.properties.type")}</span>
                    </div>
                    <span className="text-end">
                      {
                        sections
                          ?.find((section) => section.key === "general")
                          ?.subsections?.[0]?.fields?.find(
                            (field) => field.key === "general.type.name"
                          )?.display_value
                      }
                    </span>
                  </div>
                )}
                {carData?.general?.year && (
                  <>
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span>{t("detailPage.properties.model")}</span>
                      </div>
                      <div className="">
                        <span className="text-end">
                          {carData?.general?.year}
                        </span>
                      </div>
                    </div>
                  </>
                )}
                {general?.make?.name && (
                  <>
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span>{t("detailPage.properties.brand")}</span>
                      </div>
                      <div className="">
                        <span className="text-end">{general?.make?.name}</span>
                      </div>
                    </div>
                  </>
                )}
                {sections
                  ?.find((section) => section.key === "general")
                  ?.subsections?.[0]?.fields?.find(
                    (field) =>
                      field.key === "identification.license_plate.formatted"
                  )?.display_value && (
                  <>
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span>{t("detailPage.properties.number")}</span>
                      </div>
                      <div className="">
                        <span className="text-end">
                          {
                            sections
                              ?.find((section) => section.key === "general")
                              ?.subsections?.[0]?.fields?.find(
                                (field) =>
                                  field.key ===
                                  "identification.license_plate.formatted"
                              )?.display_value
                          }
                        </span>
                      </div>
                    </div>
                  </>
                )}
                {sections
                  ?.find((section) => section.key === "general")
                  ?.subsections?.[0]?.fields?.find(
                    (field) => field.key === "history.construction_date"
                  )?.display_value && (
                  <>
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span>{t("detailPage.properties.productionDate")}</span>
                      </div>
                      <div className="">
                        <span className="text-end">
                          {
                            sections
                              ?.find((section) => section.key === "general")
                              ?.subsections?.[0]?.fields?.find(
                                (field) =>
                                  field.key === "history.construction_date"
                              )?.display_value
                          }
                        </span>
                      </div>
                    </div>
                  </>
                )}
                {carData?.general?.transmission && (
                  <>
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span>{t("detailPage.properties.transmission")}</span>
                      </div>
                      <div className="">
                        <span className="text-end">
                          {carData?.general?.transmission}
                        </span>
                      </div>
                    </div>
                  </>
                )}
                {carData?.condition?.odometer?.formatted && (
                  <>
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span>{t("detailPage.properties.mileage")}</span>
                      </div>
                      <div className="">
                        <span className="text-end">
                          {carData?.condition.odometer?.formatted}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div style={{ width: "100%", marginTop: "40px" }}>
              <button
                className="detail-contact-btn"
                style={{ width: "100%" }}
                onClick={handleContactClick}
              >
                Contact
              </button>
            </div>

            {showModal && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <button className="modal-close-btn" onClick={closeModal}>
                    &times;
                  </button>

                  <div className="details-form">
                    <div className="row">
                      <div className="col-md-12"></div>
                      <div className="col-md-12">
                        <div className="mt-2">
                          <form className="main-form p-0">
                            <div className="row">
                              <div className="col-md-12 my-2">
                                <label
                                  htmlFor="name"
                                  className="form-label py-2"
                                >
                                  {t("detailPage.form.name")}
                                  <span className="required-sign /">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control py-3"
                                  id="name"
                                  placeholder={t(
                                    "detailPage.form.firstNamePlaceholder"
                                  )}
                                  required
                                />
                              </div>
                              <div className="col-md-12 my-2">
                                <label
                                  htmlFor="last-name"
                                  className="form-label py-2"
                                >
                                  {t("detailPage.form.lastName")}{" "}
                                  <span className="required-sign">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control py-3"
                                  id="lastName"
                                  placeholder={t(
                                    "detailPage.form.lastNamePlaceholder"
                                  )}
                                  required
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12 my-2">
                                <label
                                  htmlFor="email"
                                  className="form-label py-2"
                                >
                                  {t("detailPage.form.email")}{" "}
                                  <span className="required-sign">*</span>
                                </label>
                                <input
                                  type="email"
                                  className="form-control py-3"
                                  id="email"
                                  placeholder={t(
                                    "detailPage.form.emailPlaceholder"
                                  )}
                                  required
                                />
                              </div>
                              <div className="col-md-12 my-2">
                                <label
                                  htmlFor="phone-number"
                                  className="form-label py-2"
                                >
                                  {t("detailPage.form.phoneNumber")}{" "}
                                  <span className="required-sign">*</span>
                                </label>
                                <input
                                  type="number"
                                  className="form-control py-3 "
                                  id="phonenumber"
                                  placeholder={t(
                                    "detailPage.form.phoneNumberPlaceholder"
                                  )}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12 my-2">
                              <label
                                htmlFor="message"
                                className="form-label py-2"
                              >
                                {t("detailPage.form.message")}
                                <span className="required-sign">*</span>
                              </label>
                              <textarea
                                className="form-control full-width"
                                id="message"
                                rows="4"
                                placeholder={t(
                                  "detailPage.form.messagePlaceholder"
                                )}
                                required
                              ></textarea>
                            </div>
                            <button type="submit" className="submit-btn my-3">
                              {t("detailPage.form.submit")}
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Col End */}
        </div>
        {/* Row */}
      </div>
    </section>
  );
};

export default DetailPage;
