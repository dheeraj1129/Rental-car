import { useState } from "react";
import Payment from "./Payment";

function CarDetails({ car, extraDetails, onClose }) {
  const [set, setpay] = useState(false);
  const payclick = () => {
    setpay(!set);
  };

  return (
    <div className="bg-white z-50 inset-0   justify-center items-center fixed flex">
      <div className="p-4 justify-center  flex-col flex items-center border rounded-lg ">
        <h2 className="text-2xl font-bold">Car Details</h2>
        <ul className="mt-2">
          <li>
            <strong></strong> {car.images}
          </li>
          <li>
            <strong>Name:</strong> {car.title}
          </li>
          <li>
            <strong>Class:</strong> {car.class}
          </li>
          <li>
            <strong>Price:</strong> {car.Price}
          </li>
          <li>
            <strong>No. of Cylinders:</strong> {car.no_of_cylinders}
          </li>
          <li>
            <strong>Max Power:</strong> {car.max_power}
          </li>
          <li>
            <strong>Ground Clearance:</strong> {car.ground_clearance}
          </li>
          {/* Add more details as required */}
        </ul>
        <div className="flex flex-row w-full  justify-around">
          <button
            className="mt-4 px-4  bg-red-500 text-white rounded"
            onClick={onClose}>
            Close
          </button>
          <button
            className="mt-4 px-4  bg-red-500 text-white rounded"
            onClick={payclick}>
            {set && <Payment />}
            payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
