"use client";

import React from "react";
import { useState } from "react";

const employees = [
  {
    name: "Larry More",
    id: "EMP 2",
    position: "Design Lead",
    department: "Product",
    project: "Kazi Afya",
    status: "On Leave",
  },
  {
    name: "Mary Ritah",
    id: "EMP 3",
    position: "Tech Lead",
    department: "Tech",
    project: "Mara Chai",
    status: "active",
  },
  {
    name: "Bill Kaunda",
    id: "EMP 4",
    position: "Sales Assistant",
    department: "Business Development",
    project: "Safi Soko",
    status: "active",
  },
  {
    name: "Marilyn Monroe",
    id: "EMP 5",
    position: "UI UX Designer",
    department: "Product",
    project: "Nia Maji",
    status: "active",
  },
  {
    name: "Anita Atieno",
    id: "EMP 6",
    position: "General Manager",
    department: "Management",
    project: "Zuri Mboga",
    status: "active",
  },
  {
    name: "Kilonzo Abel",
    id: "EMP 7",
    position: "Chef",
    department: "Support",
    project: "Furaha Nyumbani",
    status: "Terminated",
  },
  {
    name: "Wanjiku Lucy",
    id: "EMP 8",
    position: "Software Developer",
    department: "Tech",
    project: "Mrembo Kazi",
    status: "active",
  },
  {
    name: "Linda Auma",
    id: "EMP 9",
    position: "Software Developer",
    department: "Tech",
    project: "Kikundi Usiku",
    status: "active",
  },
  {
    name: "Kerubo Ivyne",
    id: "EMP 10",
    position: "Sales Assistant",
    department: "Business Development",
    project: "Amani Nguvu",
    status: "On Leave",
  },
  {
    name: "Mandela Thambo",
    id: "EMP 10",
    position: "Software Developer",
    department: "Tech",
    project: "Amani Nguvu",
    status: "active",
  },
  
];

export default function EmployeeTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 10;
  const totalPages = Math.ceil(employees.length / leadsPerPage);

  // compute slice
  const start = (currentPage - 1) * leadsPerPage;
  const currentLeads = employees.slice(start, start + leadsPerPage);

  // allow pages 1 through totalPages
  const gotopage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    // <div className="p-4 bg-white shadow-md rounded-xl">
    <div>
      <div className="bg-[#FFFFFF] rounded-[20px] w-full overflow-auto">
        <table className="w-full text-sm table-auto">
          <thead>
            <tr className="text-left text-black text-[14px] font-Inter font-medium whitespace-nowrap">
              <th className="p-3">Employee Name</th>
              <th className="p-3">Employee Id</th>
              <th className="p-3">Position</th>
              <th className="p-3">Department</th>
              <th className="p-3">Project</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {currentLeads.map((employees, i) => (
              <tr
                key={i}
                className="font-Inter text-[14px] font-normal leading-[20px] whitespace-nowrap"
              >
                <td className="p-3 flex items-center gap-2 min-w-[160px]">
                  <img
                    src="/assets/image2.png"
                    alt="avatar"
                    className="w-[20px] h-[20px] gap-[8px] rounded-full"
                  />
                  {employees.name}
                </td>
                <td className="p-3 min-w-[120px]">{employees.id}</td>
                <td className="p-3 min-w-[140px]">{employees.position}</td>
                <td className="p-3 min-w-[180px]">
                  <span
                    className={`${
                      employees.department === "Product"
                        ? "text-[#900C0C] text-[12px] font-Inter leading-[20px] bg-[#FFDDDD] px-[10px] rounded-[5px]"
                        : employees.department === "Tech"
                        ? "text-[#1A4D2C] text-[12px] font-Inter leading-[20px] bg-[#DFF9E7] px-[10px] rounded-[5px]"
                        : employees.department === "Business Development"
                        ? "text-[#752219] text-[12px] font-Inter leading-[20px] bg-[#FCE8D8] px-[10px] rounded-[5px]"
                        : employees.department === "Support"
                        ? "text-[#79370E] text-[12px] font-Inter leading-[20px] bg-[#FEF4C7] px-[10px] rounded-[5px]"
                        : employees.department === "Management"
                        ? "text-[#0038B1] text-[12px] font-Inter leading-[20px] bg-[#D1ECFF] px-[10px] rounded-[5px]"
                        : ""
                    }`}
                  >
                    {employees.department}
                  </span>
                </td>
                <td className="p-3 min-w-[140px]">{employees.project}</td>
                <td className="p-3 flex items-center min-w-[150px]">
                  <div
                    className={`w-3 h-3 rounded-full mr-7 ${
                      employees.status === "active"
                        ? "bg-[#24954A]"
                        : employees.status === "On Leave"
                        ? "bg-[#0783FF]"
                        : employees.status === "Terminated"
                        ? "bg-[#D40101]"
                        : ""
                    }`}
                  ></div>
                  <span
                    className={`${
                      employees.status === "active"
                        ? "text-[#24954A]"
                        : employees.status === "On Leave"
                        ? "text-[#0783FF]"
                        : employees.status === "Terminated"
                        ? "text-[#D40101]"
                        : ""
                    }`}
                  >
                    {employees.status}
                  </span>
                </td>
                <td className="p-3 text-center min-w-[50px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 9.99984H10.0083V10.0082H10V9.99984ZM10 4.1665H10.0083V4.17484H10V4.1665ZM10 15.8332H10.0083V15.8415H10V15.8332Z"
                      stroke="black"
                      strokeWidth="3.75"
                      strokeLinejoin="round"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination controls */}
      <div className="w-full my-[28px]">
        <div className="flex flex-col items-center sm:flex-row justify-between sm:justify-end   gap-[16px] text-[14px] text-[#7C7C7C]">
          <div className="text-[14px] font-Inter leading-[20px] text-[#7C7C7C]">
            Showing {start + 1} to {start + currentLeads.length} of{" "}
            {employees.length} Entries
          </div>

          <div className="flex items-center gap-[8px]">
            <button
              onClick={() => gotopage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-[45px] py-[5px] border-[1px] border-[#7C7C7C] disabled:border-[#DCDCDC] rounded-[20px] disabled:opacity-50"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12.5 5L7.5 10L12.5 15"
                  stroke="#7C7C7C"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <button className="px-3 py-1 bg-[#0038B1] rounded-[20px] text-white w-[30px] h-[30px] flex items-center justify-center">
              {currentPage}
            </button>

            <button
              onClick={() => gotopage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-[45px] py-[5px] border-[1px] border-[#7C7C7C] disabled:border-[#DCDCDC] rounded-[20px] disabled:opacity-50"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 5L12.5 10L7.5 15"
                  stroke="#7C7C7C"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
