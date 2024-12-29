import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Link, NavLink } from "react-router-dom";

const TruckCard = ({ truck }) => {
  const {
    images,
    description,
    sales_conditions,
    condition,
    general,
    id,
    advertiser,
  } = truck;

  return (
    <div className="card shadow-lg rounded-lg overflow-hidden">
      <div className="">
        {/* Swiper slider for images */}
        {images?.length <= 0 ? (
          <div
            style={{
              height: "200px",
              backgroundColor: "#f0f0f0",
              textAlign: "center",
              lineHeight: "200px",
              fontSize: "16px",
            }}
          >
            No images available
          </div>
        ) : (
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
          >
            {images?.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image?.src}
                  alt={description?.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div style={{ padding: "15px" }}>
          <div>
            <h6 className="card-title text-lg font-semibold ">
              {general?.make.name} {general?.model.name}
            </h6>
          </div>

          <div
            className="mt-3 text-sm"
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
              fontSize: "14px",
              // minHeight: "40px",
              // maxHeight: "40px",
            }}
          >
            {/* Year */}
            <div className="flex items-center">
              <i className="fa-solid fa-calendar-alt txt-blue truck-card-icon"></i>
              <small className="">{general.year || "No date"}</small>
            </div>

            {/* Odometer */}
            {condition.odometer.formatted && (
              <div className="flex items-center">
                <i className="fa-solid fa-tachometer-alt txt-blue truck-card-icon"></i>
                <small className="">{condition?.odometer?.formatted}</small>
              </div>
            )}
          </div>

          <div className=" mt-4">
            {sales_conditions?.pricing?.asking?.in_eur?.formatted && (
              <small className="txt-blue " style={{ fontSize: "16px" }}>
                {sales_conditions?.pricing?.asking?.in_eur?.formatted}
              </small>
            )}
          </div>

          {/* Footer with button */}
          <hr className="my-3" />
          <div className="footer navbar">
            {/* Location */}
            <div className="flex items-center">
              <small className="txt-blue" style={{ fontSize: "16px" }}>
                {advertiser?.city || "Location unknown"}
              </small>
            </div>
            <Link to={`/detailpage/${id}`} className="view_car_btn ">
              View car
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckCard;
