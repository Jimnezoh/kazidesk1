"use client";

import React from "react";
import { useState } from "react";

function page() {
  const [formData, setFormData] = useState({
    salutation: "Mr.",
    name: "",
    email: "",
    leadSource: "Marketing",
    leadCategory: "Tours and Travels",
    companyName: "",
    website: "",
    mobileNo: "",
    country: "Kenya",
    state: "",
    city: "",
    address: "",
  });

  // Form validation state
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Required fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // You can add API call here to save the data
      alert("Form submitted successfully!");
    }
  };

  // Handle save and add more
  const handleSaveAndAddMore = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form saved, preparing for new entry:", formData);
      // Save current form data
      // Then reset form for new entry
      setFormData({
        salutation: "Mr.",
        name: "",
        email: "",
        leadSource: "Marketing",
        leadCategory: "Tours and Travels",
        companyName: "",
        website: "",
        mobileNo: "",
        country: "Kenya",
        state: "",
        city: "",
        address: "",
      });
      alert("Lead saved! You can add another one.");
    }
  };

  // Handle cancel
  const handleCancel = () => {
    if (
      window.confirm(
        "Are you sure you want to cancel? All unsaved changes will be lost."
      )
    ) {
      // Reset form or navigate away
      window.history.back();
    }
  };
  return (
    <div className="bg-[#FFFFFF] py-[52px] px-[28px] rounded-[20px]">
      <div className="flex flex-col gap-[34px]">
        <div className="flex flex-col gap-[66px]">
          {/* lead details  */}
          <div>
            <div className="mb-[78px]">
              <h2 className="font-Inter font-semibold text-[14px] leading-[20px] ">
                Lead Contact Details
              </h2>
            </div>
            <div className="flex flex-col gap-[34px]">
              <div className="flex flex-col md:flex-row gap-[28px]">
                <div className="w-full ">
                  <label className="block mb-[10px] text-sm font-medium text-gray-700">
                    Salutation
                  </label>
                  <div className="relative">
                    <select
                      id="salutation"
                      name="salutation"
                      value={formData.salutation}
                      onChange={handleChange}
                      className="w-full  border rounded-[5px]  p-[10px] bg-white"
                      required
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs">Mrs.</option>
                      <option value="Miss">Miss</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <label className="block mb-[10px] text-sm font-medium text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    className="border rounded-[5px] p-[10px] w-full"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="w-full">
                  <label className="block mb-[10px] text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="text"
                    className="border rounded-[5px] p-[10px] w-full"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[28px]">
                <div className="w-full ">
                  <label className="block text-sm mb-[10px] font-medium text-gray-700">
                    Lead Source
                  </label>
                  <div className="flex w-full">
                    <div className="w-full">
                      <select
                        id="leadSource"
                        name="leadSource"
                        value={formData.leadSource}
                        onChange={handleChange}
                        className="w-full border rounded-l-[5px]  p-[10px] bg-white"
                        required
                      >
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="text-[14px] border leading-[20px] rounded-r-[10px] p-[10px]">
                      <p>Add</p>
                    </div>
                  </div>
                </div>
                <div className="w-full ">
                  <label className="block text-sm mb-[10px] font-medium text-gray-700">
                    Lead Category
                  </label>
                  <div className="flex w-full">
                    <div className="w-full">
                      <select
                        id="leadCategory"
                        name="leadCategory"
                        value={formData.leadCategory}
                        onChange={handleChange}
                        className="w-full border rounded-l-[5px]  p-[10px] bg-white"
                        required
                      >
                        <option value="Marketing">Tours and Travels </option>
                        <option value="Sales">Adventures</option>
                      </select>
                    </div>
                    <div className="text-[14px] border leading-[20px] rounded-r-[10px] p-[10px]">
                      <p>Add</p>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium mb-[11px]">
                    Added By
                  </label>
                  <div className="flex gap-[8px] p-[10px] border rounded-[5px]">
                    <img
                      src="/assets/profile.jpg"
                      alt="profile-picture"
                      className="h-[20px] w-[20px] rounded-full items-center"
                    />
                    <p>Elvis Madowo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* company details  */}
          <div>
            <div className="mb-[78px]">
              <h2 className="font-Inter font-semibold text-[14px] leading-[20px] ">
                Company Details{" "}
              </h2>
            </div>
            <div className="flex flex-col gap-[34px]">
              <div className="flex flex-col md:flex-row gap-[28px]">
                <div className="w-full">
                  <label className="block mb-[10px] text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="border rounded-[5px] p-[10px] w-full"
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-[10px] text-sm font-medium text-gray-700">
                    Website
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="border rounded-[5px] p-[10px] w-full"
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-[10px] text-sm font-medium text-gray-700">
                    Mobile no.
                  </label>
                  <input
                    type="text"
                    id="mobileNo"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    className="border rounded-[5px] p-[10px] w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[28px]">
                <div className="w-full">
                  <label className="block text-sm font-medium mb-[11px]">
                    Country
                  </label>
                  <div className="flex gap-[8px] p-[10px] border rounded-[5px]">
                    <img
                      src="/assets/profile.jpg"
                      alt="profile-picture"
                      className="h-[20px] w-[20px]  rounded-full items-center"
                    />
                    <div className="w-full ">
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full focus:outline-0 "
                        required
                      >
                        <option value="Kenya">Kenya</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Tanzania">Tanzania</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label className="block mb-[10px] text-sm font-medium text-gray-700">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="border rounded-[5px] p-[10px] w-full"
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-[10px] text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    z
                    className="border rounded-[5px] p-[10px] w-full"
                  />
                </div>
              </div>
              <div className=" flex flex-wrap flex-col gap-[10px] ">
                <div className="w-full">
                  <label htmlFor="address" className=" ">
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-[10px] border border-[#DCDCDC] rounded-[5px] focus:outline-none focus:ring-1 focus:ring-[#DCDCDC]"
                    placeholder="e.g 1376, Nyangumi Road, off Lenana Road, Kilimani, Nairobi, Kenya"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* buttons  */}

        <div className="flex flex-col sm:flex-row gap-[8px]">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#0044FF] flex gap-[8px] items-center p-[10px] rounded-[40px] text-[#FFFFFF] text-[14px] leading-[20px]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.1875 12.1875L5.3125 15.3125M9.6875 10.3125L12.8125 7.1875M7.1875 12.1875L10.3125 15.3125L17.8125 7.1875"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Save</span>
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#0044FF] p-[10px] flex gap-[8px] items-center  rounded-[40px] text-[#FFFFFF] text-[14px] leading-[20px]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.1875 12.1875L5.3125 15.3125M9.6875 10.3125L12.8125 7.1875M7.1875 12.1875L10.3125 15.3125L17.8125 7.1875"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Save & Add More</span>
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-[#FFDDDD] p-[10px] rounded-[40px] text-[#900C0C] text-[14px] leading-[20px]"
          >
            <p>Cancel</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
