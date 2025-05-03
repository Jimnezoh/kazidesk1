"use client";

import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Finances() {
  const data = [
    { month: "Jan", moneyIn: 140000, moneyOut: 70000 },
    { month: "Feb", moneyIn: 190000, moneyOut: 220000 },
    { month: "Mar", moneyIn: 110000, moneyOut: 100000 },
    { month: "Apr", moneyIn: 130000, moneyOut: 105000 },
    { month: "May", moneyIn: 100000, moneyOut: 130000 },
    { month: "Jun", moneyIn: 180000, moneyOut: 101000 },
    { month: "Jul", moneyIn: 170000, moneyOut: 90000 },
  ];

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-blue-50 p-2 sm:p-3 rounded shadow-md border border-blue-100">
          <p className="font-medium text-xs sm:text-sm">{`${label} 2025`}</p>
          <p className="text-xs sm:text-sm flex items-center">
            <span className="w-2 h-2 inline-block bg-blue-900 rounded-full mr-2"></span>
            <span className="text-blue-900 font-medium">
              ${formatCurrencyK(payload[0].value)}
            </span>
          </p>
          <p className="text-xs sm:text-sm flex items-center">
            <span className="w-2 h-2 inline-block bg-[#35ADFF] rounded-full mr-2"></span>
            <span className="text-[#35ADFF] font-medium">
              ${formatCurrencyK(payload[1].value)}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  // Format currency with thousands abbreviation
  const formatCurrencyK = (value) => {
    return `${Math.round(value / 1000)}k`;
  };

  // Format Y axis ticks
  const formatYAxis = (value) => {
    if (value === 0) return "$0k";
    return `$${value / 1000}k`;
  };

  return (
    <div>
      <div className="mb-[16px]">
        <p>Finances</p>
      </div>

      <div className="bg-white p-3 sm:p-4 md:px-[110px] py-[82px] rounded-[20px] shadow-sm w-full mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
          <div className="relative w-full sm:w-auto">
            <select
              className="appearance-none bg-white pl-2 pr-4 sm:pr-8 py-1 rounded text-xs sm:text-sm font-medium cursor-pointer w-full sm:w-auto"
              defaultValue="Last 7 months"
            >
              <option>Last 7 months</option>
              <option>Last 3 months</option>
              <option>Last year</option>
            </select>
            <div className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between sm:justify-end gap-3 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="w-2 h-2 sm:w-3 sm:h-3 inline-block bg-blue-900 rounded-full"></span>
              <span className="text-xs sm:text-xs leading-4 sm:leading-5">
                Money In
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="w-2 h-2 sm:w-3 sm:h-3 inline-block bg-blue-400 rounded-full"></span>
              <span className="text-xs sm:text-xs leading-4 sm:leading-5">
                Money Out
              </span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={data}>
                <XAxis dataKey="month" />
                <YAxis
                  domain={[0, 250000]}
                  tickFormatter={formatYAxis}
                  ticks={[0, 50000, 100000, 150000, 200000, 250000]}
                />

                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="moneyIn"
                  className="fill-[#062165] rounded-[10px] cursor-pointer"
                  radius={[5, 5, 5, 5]}
                />
                <Bar
                  dataKey="moneyOut"
                  className="fill-[#35ADFF] rounded-[10px] cursor-pointer"
                  radius={[5, 5, 5, 5]}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finances;
