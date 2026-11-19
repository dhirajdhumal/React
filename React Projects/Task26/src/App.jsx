import React from "react";
import Wallet from "./Wallet";
import DoctorCard from "./props/DoctorCard";
import RoomCard from "./props/RoomCard";
import VehicleCard from "./props/VehicleCard";
import VolumeController from "./hooks/useState/VolumeController";
import AcController from "./hooks/useState/AcController";
import WaterTracker from "./hooks/useState/WaterTracker";
import JobApplication from "./onChange/JobApplication";
import ElectricityBill from "./onChange/ElectricityBill";
import TableBooking from "./onChange/TableBooking";
import AttendanceMarking from "./onClick/AttendanceMarking";
import CertificateStatus from "./onClick/CertificateStatus";
import RestaurantOrder from "./onClick/RestaurantOrder";
import ParkingFee from "./conditionalRendering/ParkingFee";
import AtmStatus from "./conditionalRendering/AtmStatus";
import OnlineDelivery from "./conditionalRendering/OnlineDelivery";
import ShowHidePassword from "./hooks/useState/ShowHidePassword";
import ChangeColor from "./hooks/useState/ChangeColor";
import LikeCount from "./hooks/useState/LikeCount";
import DisplayName from "./hooks/useState/DisplayName";
import Counter from "./hooks/useState/Counter";
import UncontrolledForm from "./hooks/useRef/UncontrolledForm";
import Arrays from "./hooks/useState/Arrays";
import Objects from "./hooks/useState/Objects";
import Task from "./hooks/useState/Task";
import GetData from "./hooks/useForm/GetData";

const App = () => {
  const doctors = [
    {
      name: "Firoj",
      specialization: "Cardiologist",
      fees: 250,
    },
    {
      name: "Dhiraj",
      specialization: "Neurologist",
      fees: 500,
    },
    {
      name: "Jay",
      specialization: "Dermatologist",
      fees: 300,
    },
    {
      name: "Suyash",
      specialization: "Orthopedic",
      fees: 400,
    },
    {
      name: "Vedant",
      specialization: "Pediatrician",
      fees: 350,
    },
  ];

  const rooms = [
  {
    roomType: "Single Room",
    pricePerNight: 1500,
    maximumGuests: 1
  },
  {
    roomType: "Double Room",
    pricePerNight: 2500,
    maximumGuests: 2
  },
  {
    roomType: "Deluxe Room",
    pricePerNight: 3500,
    maximumGuests: 3
  },
  {
    roomType: "Family Room",
    pricePerNight: 4500,
    maximumGuests: 4
  },
  {
    roomType: "Suite",
    pricePerNight: 6000,
    maximumGuests: 5
  }
  ];

  const vehicles = [
  {
    vehicleName: "Honda Activa",
    fuelType: "Petrol",
    price: 85000
  },
  {
    vehicleName: "Tata Nexon",
    fuelType: "Diesel",
    price: 1200000
  },
  {
    vehicleName: "Hyundai Creta",
    fuelType: "Petrol",
    price: 1100000
  },
  {
    vehicleName: "Tata Nexon EV",
    fuelType: "Electric",
    price: 1500000
  },
  {
    vehicleName: "Maruti Suzuki Swift",
    fuelType: "Petrol",
    price: 650000
  }
  ];

  return (
    <>
      <Wallet />
      <hr />

      <h1 style={{color: "red"}}>Props</h1>
      <hr />
      <h2>Doctor's Details</h2>
      <div className="div" style={{display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: "40px"}}>
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.name} doctors={doctor} />
        ))}
      </div>
      <hr />

      <h2>Hotel Room Details</h2>
      <div className="div" style={{display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: "40px"}}>
        {rooms.map((room) => (
          <RoomCard key={room.roomType} rooms={room} />
        ))}
      </div>
      <hr />

      <h2>Vehicle Details</h2>
      <div className="vehicle-card" style={{display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: 'wrap', gap: "40px"}}>
        {vehicles.map((vehicle)=>(
          <VehicleCard key={vehicle.vehicleName} vehicles = {vehicle} />
        ))}
      </div>
      <hr />

      <h1 style={{color: "red"}}>useState Hook</h1>
      <hr />
      <Arrays />

      <hr />
      <Objects />

      <hr />
      <VolumeController />
      <hr />

      <AcController />
      <hr />

      <WaterTracker />
      <hr />

      <Counter />
      <hr />

      <ShowHidePassword />
      <hr />

      <ChangeColor />
      <hr />

      <LikeCount />
      <hr />

      <DisplayName />
      <hr />

      <h1 style={{color: "red"}}>onChange Event</h1>
      <hr />
      <JobApplication />
      <hr />

      <ElectricityBill />
      <hr />

      <TableBooking />
      <hr />

      <h1 style={{color: "red"}}>onClick Event</h1>
      <hr />
      <AttendanceMarking />
      <hr />

      <CertificateStatus />
      <hr />

      <RestaurantOrder />
      <hr />

      <h1 style={{color: "red"}}>Conditional Rendering</h1>
      <hr />
      <ParkingFee />
      <hr />

      <AtmStatus />
      <hr />

      <OnlineDelivery />
       <hr />

      <h1 style={{color: "red"}}>Controlled Form</h1>
      <hr />
      <UncontrolledForm />
      <hr />

      <Task />
      <hr />

      <h1 style={{color: "red"}}>useForm Hook</h1>
      <hr />
      <GetData />
      <hr />

    </>
  );
};

export default App;
