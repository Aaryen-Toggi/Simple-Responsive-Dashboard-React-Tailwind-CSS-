import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

{
  /* Data for Sales Bar Chart*/
}
const data = [
  {
    name: "Jan",
    currentSales: 110545,
  },
  {
    name: "Feb",
    currentSales: 95420,
  },
  {
    name: "Mar",
    currentSales: 125760,
  },
  {
    name: "Apr",
    currentSales: 113400,
  },
  {
    name: "May",
    currentSales: 102500,
  },
  {
    name: "Jun",
    currentSales: 119780,
  },
  {
    name: "Jul",
    currentSales: 128650,
  },
  {
    name: "Aug",
    currentSales: 118500,
  },
  {
    name: "Sep",
    currentSales: 109730,
  },
  {
    name: "Oct",
    currentSales: 122500,
  },
  {
    name: "Nov",
    currentSales: 115300,
  },
  {
    name: "Dec",
    currentSales: 135600,
  },
];

function SalesBarChart() {
  return (
    <div className="h-[22rem] w-full sm:w-3/5 bg-white text-black mr-5 mt-5 p-4 rounded-lg border border-orange-500 flex flex-col flex-1">
      <strong className=" font-large">Sales</strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="currentSales" fill="#0ea5e9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesBarChart;
