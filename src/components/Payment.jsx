import React from "react";

function Payment() {
  return (
    <>
      <div class=" rounded-lg shadow-lg  w-screen justify-center items-center flex flex-col inset-0 fixed bg-white">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Payment Information
        </h2>
        <form>
          <div class="mb-4">
            <label for="card-number" class="block text-gray-700 font-bold mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="card-number"
              class="shadow appearance-none border
         rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div class="mb-4">
            <label for="expiry-date" class="block text-gray-700 font-bold mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiry-date"
              class="shadow appearance-none border rounded
         w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="MM/YY"
            />
          </div>

          <div class="mb-4">
            <label for="cvc" class="block text-gray-700 font-bold mb-2">
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
         focus:outline-none focus:shadow-outline"
              placeholder="CVC"
            />
          </div>

          <div class="mb-6">
            <label
              for="name-on-card"
              class="block text-gray-700 font-bold mb-2">
              Name on Card
            </label>
            <input
              type="text"
              id="name-on-card"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
        leading-tight focus:outline-none focus:shadow-outline"
              placeholder="John Doe"
            />
          </div>

          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button">
              Submit Payment
            </button>
            <div className="flex flex-row w-full justify-around">
              <button className="mt-4 px-4 bg-red-500 text-white rounded">
                Payment
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Payment;
