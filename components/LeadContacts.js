"use client";

import React from "react";
import { useState } from "react";

const contacts = [
  {
    name: "Mr. Dennis Mokaya",
    company: "Tech Innovations Inc.",
    email: "mokaya@techinnovations.co.ke",
    addedBy: "Larry More",
    date: "16-04-2025",
  },
  {
    name: "Dr. Sarah Johnson",
    company: "Health Solutions Group",
    email: "sarah@healthsolutions.co.ke",
    addedBy: "Larry More",
    date: "16-04-2025",
  },
  {
    name: "Eng. Alice Thompson",
    company: "Engineering Excellence Ltd.",
    email: "alice@engineeringexcellence.com",
    addedBy: "Larry More",
    date: "16-04-2025",
  },
  {
    name: "Mr. Michael Brown",
    company: "Brownstone Enterprises",
    email: "michael@brownstoneenterprises",
    addedBy: "Larry More",
    date: "16-04-2025",
  },
  {
    name: "Ms. Jessica Lee",
    company: "Creative Minds Agency",
    email: "jessica@creativemindsagency.com",
    addedBy: "Larry More",
    date: "16-04-2025",
  },
  {
    name: "Eng. David Smith",
    company: "Smith & Co. Engineering",
    email: "david@smithandcoengineering.co.ke",
    addedBy: "Larry More",
    date: "16-04-2025",
  },
  {
    name: "Rev. Emily Davis",
    company: "Winners Chapel",
    email: "emily@winnerschapel.co.ke",
    addedBy: "Larry More",
    date: "16-04-2025",
  },
  {
    name: "Mr. James Wilson",
    company: "Wilson Consulting Services",
    email: "james@wilsonconsultingservices.co.ke",
    addedBy: "Larry More",
    date: "16-04-2025",
  },
  {
    name: "Ms. Sophia Martinez",
    company: "Martinez Marketing Solutions",
    email: "sophia@martinezmarketingsolutions.com",
    addedBy: "Larry More",
    date: "16-04-2025",
  },
  {
    name: "Mr. Daniel Garcia",
    company: "Garcia Global Logistics",
    email: "daniel@garciagloballogistics.com",
    addedBy: "Larry More",
    date: "16-04-2025",
  },
];

export default function EmployeeTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 10;
  const totalPages = Math.ceil(contacts.length / leadsPerPage);

  // compute slice
  const start = (currentPage - 1) * leadsPerPage;
  const currentLeads = contacts.slice(start, start + leadsPerPage);

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
              <th className="p-3">Contact Name</th>
              <th className="p-3">Company Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Added By</th>
              <th className="p-3">Created</th>
              <th className="p-3">Action</th>
              
            </tr>
          </thead>
          <tbody>
            {currentLeads.map((contacts, i) => (
              <tr
                key={i}
                className="font-Inter text-[14px] font-normal leading-[20px] whitespace-nowrap"
              >
                <td className="p-3 min-w-[160px]">
                  
                  {contacts.name}
                </td>
                <td className="p-3 min-w-[120px]">{contacts.company}</td>
                <td className="p-3 min-w-[140px]">{contacts.email}</td>
                <td className="p-3 flex items-center gap-2 min-w-[180px]">
                <img
                    src="/assets/profile.jpg"
                    alt="avatar"
                    className="w-[20px] h-[20px] gap-[8px] rounded-full"
                  />
                    {contacts.addedBy}
                  </td>
                <td className="p-3 min-w-[140px]">{contacts.date}</td>
               
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
            {contacts.length} Entries
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
