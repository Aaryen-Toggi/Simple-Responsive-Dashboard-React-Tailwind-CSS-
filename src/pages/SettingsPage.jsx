import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SettingsPage = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Update User Details
        </h2>

        <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-md">
          <form>
            {/* User Name */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                placeholder="Enter your email"
              />
            </div>

            {/* Old Password */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Old Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                placeholder="Enter old password"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                placeholder="Enter new password"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                placeholder="Confirm new password"
              />
            </div>

            {/* Save Changes Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Footer />
      </div>
    </>
  );
};

export default SettingsPage;
