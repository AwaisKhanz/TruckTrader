import React from "react";
import TruckCard from "../../../components/TruckCard";

const HomeTrucks = ({ carData }) => {
  return (
    <section className="truck-listing mb-5">
      <div className="container">
        <div className="truck-listing-row">
          <div className="row">
            {carData?.map((truck, index) => (
              <div className="col-md-3 my-3" key={index}>
                <TruckCard truck={truck} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTrucks;
