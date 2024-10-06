import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SalesBarChart from "../components/SalesBarChart";
import ProductsPieChart from "../components/ProductsPieChart";
import UsersTable from "../components/UsersTable";

const AnalyticsPage = () => {
  return (
    <>
      <Navbar />

      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-4xl font-semibold px-2 py-1 uppercase">
            Analytics
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 ml-5 mr-5 lg:mt-20 lg:ml-10 lg:mr-10">
          <SalesBarChart />
          <ProductsPieChart />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 ml-5 mr-5 lg:ml-10 lg:mr-10">
          <UsersTable />
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Footer />
      </div>
    </>
  );
};

export default AnalyticsPage;
