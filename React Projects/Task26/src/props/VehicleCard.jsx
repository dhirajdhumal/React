import React from "react";

const VehicleCard = ({ vehicles }) => {
  return (
    <>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h3>Vehicle Name: {vehicles.vehicleName}</h3>
        <p>Fuel Type: {vehicles.fuelType}</p>
        <p>Price: {vehicles.price}</p>
      </div>
    </>
  );
};

export default VehicleCard;
