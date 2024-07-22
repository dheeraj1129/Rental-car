import React from "react";
import Sign from "./Sign";

const Home = ({ showSignIn }) => {
  return (
    <div className="flex flex-row w-screen h-screen justify-around items-center  bg-black text-teal-50 ">
      <div className="flex flex-col items-start space-y-4">
        <h1 className="text-6xl font-bold">Go anywhere with Uber</h1>
        <h4 className="text-xl font-thin px-2">
          Request a ride, hop in, and go.
        </h4>

        <div>
          <input
            type="text"
            placeholder="Enter destination"
            className="border-black border-2 px-2 h-12 w-[17rem] mb-2"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter destination"
            className="border-black border-2 px-2 h-12 w-[17rem] mb-2"
          />
        </div>
        <button className="bg-white text-black text-lg px-4 py-2 rounded">
          See Price
        </button>
      </div>
      <div className="pic"></div>
      {showSignIn && <Sign />}
    </div>
  );
};

export default Home;
