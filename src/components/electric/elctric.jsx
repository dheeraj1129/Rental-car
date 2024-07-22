import React, { useState } from "react";

function Electric() {
  const [data, setData] = useState([]);

  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  const handleButtonClick = (category) => {
    const urls = {
      Popular: "./jdata/data.json",
      Upcoming: "./jdata/upcoming.json",
      Latest: "./jdata/muv.json",
    };
    fetchData(urls[category]);
  };

  return (
    <div className="w-screen h-fit flex flex-col items-start mx-4 justify-start">
      <h1 className="text-4xl font-bold text-center my-8">Electric Cars</h1>
      <div className="flex space-x-4 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700"
          onClick={() => handleButtonClick("Popular")}>
          Popular
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700"
          onClick={() => handleButtonClick("Upcoming")}>
          Upcoming
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700"
          onClick={() => handleButtonClick("Latest")}>
          Latest
        </button>
      </div>

      <div className="w-full p-8">
        <h2 className="text-4xl font-bold text-center my-8">Electric Cars</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((ele, index) => (
            <div
              key={index}
              className="p-4 m-2 rounded-lg shadow-lg bg-white text-start">
              <img src={ele.image} alt="" />
              <div className="text-2xl font-semibold mb-4">{ele.title}</div>
              <div className="text-lg font-semibold mb-4">{ele.name}</div>{" "}
              <div className="text-sm font-semibold mb-4">{ele.class}</div>
              <div className="text-lg font-semibold mb-4">{ele.Price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Electric;
