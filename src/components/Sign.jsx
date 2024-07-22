import React, { useState } from "react";

function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [close, seclose] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy authentication logic
    if (email === "user@example.com" && password === "password") {
      alert("Login successful!");
      // Implement actual login logic here
    } else {
      setError("Invalid email or password");
    }
  };

  const clikclose = () => {
    seclose(!close);
  };

  return (
    <>
      {!close && (
        <div class=" rounded-lg shadow-lg  w-screen justify-center items-center flex flex-col fixed inset-0 bg-gray-300">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Log In</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded">
              Log In
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded ml-2"
              onClick={clikclose}>
              Close
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Sign;
