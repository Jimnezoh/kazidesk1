"use client";

import Dealsubheading from "@/components/Dealsubheading";
import EmployeeSearchBar from "@/components/Employeesearchbar";
import React from "react";
import { useState } from "react";

const Deals = [
  {
    name: "Project Ember",
    leadname: "Juma Mwangi",
    email: "mokaya@techinnovations.co.ke",
    mobile: "+254 701 234 567",
    value: "KES 75,000",
    date: "16-04-2025",
    agent: "Cobalt Shadow",
    addedby: "Larry More",
    stage: "Generated",
  },
  {
    name: "Project Zenith",
    leadname: "Amani Njeri",
    email: "sarah@healthsolutions.co.ke",
    mobile: "+254 702 345 678",
    value: "KES 120,000",
    date: "16-04-2025",
    agent: "Garnet Blaze",
    addedby: "Larry More",
    stage: "Qualified",
  },
  {
    name: "Project Nova",
    leadname: "Kiptoo Karanja",
    email: "alice@engineeringexcellence.com",
    mobile: "+254 703 456 789",
    value: "KES 250,000",
    date: "16-04-2025",
    agent: "Sapphire Storm",
    addedby: "Larry More",
    stage: "Proposal Sent",
  },
  {
    name: "Project Quest",
    leadname: "Wanjiru Kamau",
    email: "michael@brownstoneenterprises",
    mobile: "+254 704 567 890",
    value: "KES 500,000",
    date: "16-04-2025",
    agent: "Obsidian Night",
    addedby: "Larry More",
    stage: "Lost",
  },
  {
    name: "Project Radiance",
    leadname: "Lydia Otieno",
    email: "jessica@creativemindsagency.com",
    mobile: "+254 705 678 901",
    value: "KES 850,000",
    date: "16-04-2025",
    agent: "Citrine Sun",
    addedby: "Larry More",
    stage: "Win",
  },
  {
    name: "Project Apex",
    leadname: "Moses Abdi",
    email: "david@smithandcoengineering.co.ke",
    mobile: "+254 706 789 012",
    value: "KES 300,000",
    date: "16-04-2025",
    agent: "Peridot Leaf",
    addedby: "Larry More",
    stage: "Generated",
  },
  {
    name: "Project Heritage",
    leadname: "Nia Wambui",
    email: "emily@winnerschapel.co.ke",
    mobile: "+254 707 890 123",
    value: "KES 950,000",
    date: "16-04-2025",
    agent: "Crystal Light",
    addedby: "Larry More",
    stage: "Proposal Sent",
  },
  {
    name: "Project Sentinel",
    leadname: "Julius Ndungu",
    email: "james@wilsonconsultingservices.co.ke",
    mobile: "+254 708 901 234",
    value: "KES 400,000",
    date: "16-04-2025",
    agent: "Opal Dream",
    addedby: "Larry More",
    stage: "Generated",
  },
  {
    name: "Project Eternity",
    leadname: "Faith Nyambura",
    email: "sophia@martinezmarketingsolutions.com",
    mobile: "+254 709 012 345",
    value: "KES 600,000",
    date: "16-04-2025",
    agent: "Emerald Forest",
    addedby: "Larry More",
    stage: "Win",
  },
  {
    name: "Project Convergence",
    leadname: "Davis Kibet",
    email: "daniel@garciagloballogistics.com",
    mobile: "+254 710 123 456",
    value: "KES 100,000",
    date: "16-04-2025",
    agent: "Peridot Leaf",
    addedby: "Larry More",
    stage: "Win",
  },
];

export default function DealsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const dealsPerPage = 10;
  const totalPages = Math.ceil(Deals.length / dealsPerPage);

  // compute slice
  const start = (currentPage - 1) * dealsPerPage;
  const currentDeals = Deals.slice(start, start + dealsPerPage);

  // allow pages 1 through totalPages
  const gotopage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    // <div className="p-4 bg-white shadow-md rounded-xl">
    <div>
      <div>
        <Dealsubheading />
      </div>
      <div>
        <EmployeeSearchBar />
      </div>
      <div>
        <div className="bg-[#FFFFFF] rounded-[20px] w-full overflow-auto">
          <table className="w-full text-sm table-auto">
            <thead>
              <tr className="text-left text-black text-[14px] font-Inter font-medium whitespace-nowrap">
                <th className="p-3">Deal Name</th>
                <th className="p-3">Lead Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Mobile</th>
                <th className="p-3">Value</th>
                <th className="p-3">Close Date</th>
                <th className="p-3">Deal Agent</th>
                <th className="p-3">Added by</th>
                <th className="p-3">Stage</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentDeals.map((Deals, i) => (
                <tr
                  key={i}
                  className="font-Inter text-[14px] font-normal leading-[20px] whitespace-nowrap"
                >
                  <td className="p-3 min-w-[160px]"> {Deals.name}</td>
                  <td className="p-3 min-w-[120px]">{Deals.leadname}</td>
                  <td className="p-3 min-w-[140px]">{Deals.email}</td>
                  <td className="p-3 min-w-[180px]">{Deals.mobile}</td>
                  <td className="p-3 min-w-[140px]">{Deals.value}</td>
                  <td className="p-3 min-w-[150px]">{Deals.date}</td>
                  <td className="p-3 min-w-[50px]">{Deals.agent}</td>
                  <td className="p-3 min-w-[50px]">{Deals.addedby}</td>
                  <td className="p-3 min-w-[180px] flex items-center ">
                    <div  className={`flex items-center ${
                        Deals.stage === "Generated"
                          ? "text-[#0044FF] text-[12px] font-Inter leading-[20px] bg-[#D1ECFF] px-[10px] rounded-[5px]"
                          : Deals.stage === "Qualified"
                          ? "text-[#062165] text-[12px] font-Inter leading-[20px] bg-[#D1ECFF] px-[10px] rounded-[5px]"
                          : Deals.stage === "Proposal Sent"
                          ? "text-[#79370E] text-[12px] font-Inter leading-[20px] bg-[#FEF4C7] px-[10px] rounded-[5px]"
                          : Deals.stage === "Lost"
                          ? "text-[#900C0C] text-[12px] font-Inter leading-[20px] bg-[#FFDDDD] px-[10px] rounded-[5px]"
                          : Deals.stage === "Win"
                          ? "text-[#24954A] text-[12px] font-Inter leading-[20px] bg-[#DFF9E7] px-[10px] rounded-[5px]"
                          : ""
                      }`}>
                    <div
                      className={`w-3 h-3 rounded-full mr-7 ${
                        Deals.stage === "Generated"
                          ? "bg-[#0044FF]"
                          : Deals.stage === "Qualified"
                          ? "bg-[#062165]"
                          : Deals.stage === "Proposal Sent"
                          ? "bg-[#79370E]"
                          : Deals.stage === "Lost"
                          ? "bg-[#900C0C]"
                          : Deals.stage === "Win"
                          ? "bg-[#24954A]"
                          : ""
                      }`}
                    ></div>
                    
                    <span>
                      {Deals.stage}
                    </span>
                    <div>
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.93824 5.51973C9.13631 5.39816 9.39906 5.42852 9.56422 5.60469C9.75305 5.80615 9.7432 6.12287 9.54176 6.31172L6.34157 9.31172C6.14936 9.4915 5.85018 9.4915 5.65797 9.31172L2.45778 6.31172L2.39137 6.23458C2.25723 6.04493 2.26957 5.78094 2.43434 5.60469C2.59956 5.42845 2.8632 5.398 3.06129 5.51973L3.14137 5.58126L5.99879 8.25997L8.85719 5.58126L8.93824 5.51973Z"
                          fill="#0044FF"
                        />
                      </svg>
                    </div>
                    </div>
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
              Showing {start + 1} to {start + currentDeals.length} of{" "}
              {Deals.length} Entries
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
    </div>
  );
}
