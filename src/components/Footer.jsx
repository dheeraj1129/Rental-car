import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          {/* <!-- About Section --> */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a company dedicated to providing the best services to our
              customers. Our mission is to innovate and lead in our industry.
            </p>
          </div>
          {/* <!-- Links Section --> */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="./" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="./Cars" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Contact Section --> */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Street Name, City, Country</li>
              <li className="text-gray-400">Email: info@example.com</li>
              <li className="text-gray-400">Phone: (123) 456-7890</li>
            </ul>
          </div>
          {/* <!-- Social Media Section --> */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <li href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  facebook
                </svg>
              </li>
              <li href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  Youtube
                </svg>
              </li>
              <li href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor "
                  viewBox="0 0 24 24">
                  {" "}
                  Twitter
                </svg>
              </li>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
