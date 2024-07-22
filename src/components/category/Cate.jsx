import React, { useState } from "react";

function Cate() {
  const [data, setcat] = useState([]);

  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setcat(data);
      });
  };

  const handleButtonClick = (category) => {
    const urls = {
      SUV: "./jdata/suv.json",
      Sedan: "./jdata/sedan.json",
      MUV: "./jdata/muv.json",
      Hatchback: "./jdata/hactback.json",
      Luxury: "./jdata/luxury.json",
    };
    fetchData(urls[category]);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-start mx-4 justify-start">
      <h1 className="text-4xl font-bold text-center my-8">Electric Cars</h1>
      <div className="flex space-x-4 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700"
          onClick={() => handleButtonClick("SUV")}>
          SUV
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700"
          onClick={() => handleButtonClick("Sedan")}>
          Sedan
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700"
          onClick={() => handleButtonClick("MUV")}>
          MUV
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700"
          onClick={() => handleButtonClick("Hatchback")}>
          Hatchback
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700"
          onClick={() => handleButtonClick("Luxury")}>
          Luxury
        </button>
      </div>
      <div className=" lg:grid-cols-4 grid sm:grid-col2 gap-4 w-screen ">
        {data.map((ele, index) => (
          <div
            key={index}
            className="p-4 m-2 rounded  -lg shadow-lg bg-white text-start">
            <img src={ele.image} alt="" />
            <h2 className="text-lg font-semibold text-black">{ele.name}</h2>
            <p className="text-sm text-gray-700">RS:{ele.price}</p>
            <p className="text-sm text-gray-900 font-bold">{ele.variant}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cate;
