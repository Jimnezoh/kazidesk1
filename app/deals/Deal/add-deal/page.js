"use client";
import { useState } from "react";
// import { ChevronDown, Check, Plus } from "lucide-react";

export default function DealForm() {
  const [formData, setFormData] = useState({
    leadContact: "Mr. Antony",
    dealName: "",
    pipeline: "Sales Pipeline",
    dealStage: "Generated",
    dealValue: "",
    closeDate: "18-05-2025",
    dealAgent: "Garnet Blaze",
    products: "Solar Panels",
    addedBy: "Elvis Madowo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your API
  };

  // Get background color based on deal stage
  const getStageBackground = (stage) => {
    if (stage === "Generated") return "bg-gray-100";
    if (stage === "Qualified") return "bg-blue-100";
    if (stage === "Proposal Sent") return "bg-yellow-100";
    if (stage === "Lost") return "bg-red-100";
    if (stage === "Win") return "bg-green-100";
    return "bg-white";
  };

  return (
    <div className="w-full   py-[52px] px-[28px] bg-white rounded-[20px]">
      <h2 className="text-lg font-medium text-gray-800 mb-6">Deal Details</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[28px] gap-y-[34px]">
          {/* First Row */}
          <div className="space-y-[10px]">
            <label className="block text-sm font-medium text-gray-700">
              Lead Contacts <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="leadContact"
                value={formData.leadContact}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md  pr-10 bg-white"
                required
              >
                <option value="Mr. Antony">Mr. Antony</option>
                <option value="Ms. Sarah">Ms. Sarah</option>
                <option value="Mr. David">Mr. David</option>
              </select>
              {/* <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-500" /> */}
            </div>
          </div>

          <div className="space-y-[10px]">
            <label className="block text-sm font-medium text-gray-700">
              Deal Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="dealName"
              value={formData.dealName}
              onChange={handleChange}
              className="w-full p-2 border  border-gray-300 rounded-md"
              placeholder="Enter deal name"
              required
            />
          </div>

          <div className="space-y-[10px]">
            <label className="block text-sm font-medium text-gray-700">
              Pipeline <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="pipeline"
                value={formData.pipeline}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md  pr-10 bg-white"
                required
              >
                <option value="Sales Pipeline">Sales Pipeline</option>
                <option value="Marketing Pipeline">Marketing Pipeline</option>
              </select>
              {/* <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-500" /> */}
            </div>
          </div>

          {/* Second Row */}
          <div className="space-y-[10px]">
            <label className="block text-sm font-medium text-gray-700">
              Deal Stages <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="flex items-center border border-gray-300 rounded-md px-2 ">
              <div
                  className={`w-3 h-3 flex items-center rounded-full    ${
                    formData.dealStage === "Generated"
                      ? "bg-[#0044FF]"
                      : formData.dealStage === "Qualified"
                      ? "bg-[#062165]"
                      : formData.dealStage === "Proposal Sent"
                      ? "bg-[#79370E]"
                      : formData.dealStage === "Lost"
                      ? "bg-[#900C0C]"
                      : formData.dealStage === "Win"
                      ? "bg-[#24954A]"
                      : ""
                  }`}
                >
                </div>
                <select
                  name="dealStage"
                  value={formData.dealStage}
                  onChange={handleChange}
                  className={`w-full p-2 rounded-l-md focus:outline-0  pr-10 bg-white ${
                    formData.dealStage === "Generated"
                      ? "text-[#0044FF] text-[12px] font-Inter leading-[20px] bg-[#D1ECFF] px-[10px] rounded-[5px]"
                      : formData.dealStage === "Qualified"
                      ? "text-[#062165] text-[12px] font-Inter leading-[20px] bg-[#D1ECFF] px-[10px] rounded-[5px]"
                      : formData.dealStage === "Proposal Sent"
                      ? "text-[#79370E] text-[12px] font-Inter leading-[20px] bg-[#FEF4C7] px-[10px] rounded-[5px]"
                      : formData.dealStage === "Lost"
                      ? "text-[#900C0C] text-[12px] font-Inter leading-[20px] bg-[#FFDDDD] px-[10px] rounded-[5px]"
                      : formData.dealStage === "Win"
                      ? "text-[#24954A] text-[12px] font-Inter leading-[20px] bg-[#DFF9E7] px-[10px] rounded-[5px]"
                      : ""
                  }`}
                >
                  <option value="Generated">Generated</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Proposal Sent">Proposal Sent</option>
                  <option value="Lost">Lost</option>
                  <option value="Win">Win</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-[10px]">
            <label className="block text-sm font-medium text-gray-700">
              Deal Value <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <input
                type="text"
                name="dealValue"
                value={formData.dealValue}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-l-md"
                placeholder="0"
                required
              />
              <span className="inline-flex items-center px-3 bg-gray-100 text-gray-600 border-t border-r border-b border-gray-300 rounded-r-md">
                KES
              </span>
            </div>
          </div>

          <div className="space-y-[10px]">
            <label className="block text-sm font-medium text-gray-700">
              Close Date <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="closeDate"
              value={formData.closeDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="DD-MM-YYYY"
              required
            />
          </div>

          {/* Third Row */}
          <div className="space-y-[10px]">
            <label className="block text-sm font-medium text-gray-700">
              Deal Agent
            </label>
            <div className="relative">
              <select
                name="dealAgent"
                value={formData.dealAgent}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md  pr-10 bg-white"
              >
                <option value="Garnet Blaze">Garnet Blaze</option>
                <option value="Cobalt Shadow">Cobalt Shadow</option>
                <option value="Sapphire Storm">Sapphire Storm</option>
              </select>
              {/* <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-500" />  */}
            </div>
          </div>

          <div className="space-y-[10px]">
            <label className="block text-sm font-medium text-gray-700">
              Products
            </label>
            <div className="flex">
              <div className="relative flex-grow">
                <select
                  name="products"
                  value={formData.products}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-l-md  pr-10 bg-white"
                >
                  <option value="Solar Panels">Solar Panels</option>
                  <option value="Wind Turbines">Wind Turbines</option>
                </select>
                {/* <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-500" />  */}
              </div>
              <button
                type="button"
                className="px-3 bg-gray-100 text-gray-600 border-t border-r border-b border-gray-300 rounded-r-md hover:bg-gray-200"
              >
                Add
              </button>
            </div>
          </div>

          <div className="space-y-[10px]">
            <label className="block text-sm font-medium text-gray-700">
              Added By
            </label>
            <div className="flex items-center p-2 border border-gray-300 rounded-md bg-gray-50">
              <div className="w-6 h-6 rounded-full bg-red-600 mr-2"></div>
              <span>{formData.addedBy}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-[34px] flex gap-[8px]">
          <button
            type="submit"
            className="flex items-center gap-[8px] p-[10px] bg-[#0044FF] text-white rounded-[40px] hover:bg-blue-700"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.1875 12.6802L5.3125 15.8052M9.6875 10.8052L12.8125 7.68018M7.1875 12.6802L10.3125 15.8052L17.8125 7.68018"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {/* <Check className="h-4 w-4 mr-2" /> */}
            <span>Save</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-[8px] p-[10px] bg-[#0044FF] text-white rounded-[40px] hover:bg-blue-700"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.1875 12.6802L5.3125 15.8052M9.6875 10.8052L12.8125 7.68018M7.1875 12.6802L10.3125 15.8052L17.8125 7.68018"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {/* <Check className="h-4 w-4 mr-2" /> */}
            <span>Save & Add More</span>
          </button>
          <button
            type="button"
            className="p-[10px] bg-[#FFDDDD] text-[#900C0C] text-[14px] font-inter leading-[20px] rounded-[40px] hover:bg-red-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
