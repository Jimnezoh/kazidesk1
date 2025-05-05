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
    addedBy: "Elvis Madowo"
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

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-lg font-medium text-gray-800 mb-6">Deal Details</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
          {/* First Row */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Lead Contacts <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="leadContact"
                value={formData.leadContact}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md appearance-none pr-10 bg-white"
              >
                <option value="Mr. Antony">Mr. Antony</option>
                <option value="Ms. Sarah">Ms. Sarah</option>
                <option value="Mr. David">Mr. David</option>
              </select>
              {/* <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-500" /> */}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Deal Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="dealName"
              value={formData.dealName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter deal name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Pipeline <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="pipeline"
                value={formData.pipeline}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md appearance-none pr-10 bg-white"
              >
                <option value="Sales Pipeline">Sales Pipeline</option>
                <option value="Marketing Pipeline">Marketing Pipeline</option>
              </select>
              {/* <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-500" /> */}
            </div>
          </div>

          {/* Second Row */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Deal Stages <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="flex items-center p-2 border border-gray-300 rounded-md">
                <span className="inline-flex items-center justify-center w-4 h-4 mr-2 rounded-full bg-blue-500">
                  {/* <Check className="h-3 w-3 text-white" /> */}
                </span>
                <span className="flex-grow">Generated</span>
                {/* <ChevronDown className="h-4 w-4 text-gray-500" /> */}
              </div>
            </div>
          </div>

          <div className="space-y-2">
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
              />
              <span className="inline-flex items-center px-3 bg-gray-100 text-gray-600 border-t border-r border-b border-gray-300 rounded-r-md">
                KES
              </span>
            </div>
          </div>

          <div className="space-y-2">
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
            />
          </div>

          {/* Third Row */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Deal Agent
            </label>
            <div className="relative">
              <select
                name="dealAgent"
                value={formData.dealAgent}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md appearance-none pr-10 bg-white"
              >
                <option value="Garnet Blaze">Garnet Blaze</option>
                <option value="Cobalt Shadow">Cobalt Shadow</option>
                <option value="Sapphire Storm">Sapphire Storm</option>
              </select>
              {/* <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-500" />  */}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Products
            </label>
            <div className="flex">
              <div className="relative flex-grow">
                <select
                  name="products"
                  value={formData.products}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-l-md appearance-none pr-10 bg-white"
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

          <div className="space-y-2">
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
        <div className="mt-8 flex space-x-4">
          <button
            type="submit"
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {/* <Check className="h-4 w-4 mr-2" /> */}
            Save
          </button>
          <button
            type="button"
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {/* <Check className="h-4 w-4 mr-2" /> */}
            Save & Add More
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}