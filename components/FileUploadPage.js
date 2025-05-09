"use client";

import React from "react";

import { useState } from "react";

export default function page({title}) {
  const [checked, setChecked] = useState(false);
  // Simple switch component using checkbox
  const SimpleSwitch = ({ checked, onChange }) => (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div
        className={`w-10 h-5 sm:w-11 sm:h-6 rounded-full ${
          checked ? "bg-blue-600" : "bg-[#8F8F94]"
        }`}
      >
        <div
          className={`absolute top-0.5 left-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full transition-transform duration-300 ease-in-out ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        ></div>
      </div>
    </label>
  );
  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target.file.files[0];
    const formData = new FormData();
    formData.append("file", file);

    // Add  API call here to upload the file

    console.log("File ready for upload:", formData);
  };

  return (
    <div className="py-[52px] px-[28px] rounded-[20px] bg-white">
      <div className="flex flex-col gap-[28px]">
        <div className="flex flex-col gap-[28px]">
          <h2 className="font-semibold text-[14px] leading-[20px]">
            {title}
          </h2>
          <div className="bg-[#FEF4C7] rounded-[5px] p-[10px]">
            <p className="font-Inter text-[14px] leading-[20px] ">
              Date format should be in Y-m-d (e.g. 2022-04-21) format. Make sure
              the date format is correct in the excel file.
            </p>
          </div>
          <p className="font-Inter text-[14px] leading-[20px]">
            Upload File (file must be a file of type: xls, xlsx, csv)
          </p>
        </div>
        <div>
          {/* <div className='flex flex-col gap-[8px] '>
                <label className='font-Inter text-[14px] leading-[20px]'>Upload File</label>
                <input type="file" className='border rounded-[5px] py-[39px] border-[#D1D1D1]  w-full' />
            </div> */}
          <label className="w-full border rounded-[5px] border-[#D1D1D1] py-[39px]  flex flex-col items-center justify-center cursor-pointer px-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 64 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-[64px] md:h-[63px]"
            >
              <path
                d="M32.0003 26.25V49.875M32.0003 26.25L39.8753 34.125M32.0003 26.25L24.1253 34.125M46.4378 39.375C50.4251 39.375 53.0003 36.1436 53.0003 32.1563C53.0001 30.5776 52.4825 29.0426 51.5267 27.7862C50.5709 26.5298 49.2296 25.6214 47.7083 25.2C47.4742 22.256 46.254 19.4769 44.2451 17.3121C42.2361 15.1474 39.5557 13.7234 36.6373 13.2705C33.7189 12.8176 30.7331 13.3622 28.1625 14.8163C25.5919 16.2703 23.5869 18.5489 22.4715 21.2835C20.1232 20.6326 17.6126 20.9411 15.4918 22.1413C13.3711 23.3415 11.8139 25.335 11.163 27.6833C10.5121 30.0315 10.8206 32.5422 12.0208 34.6629C13.221 36.7837 15.2145 38.3408 17.5628 38.9918"
                stroke="#8F8F94"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mt-2 text-deep-sapphire text-[14px] md:text-[16px]">
              Choose a file
            </span>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleSubmit}
            />
          </label>
        </div>
        <div>
          <div>
            <p className="font-Inter text-[14px] mb-[11px] leading-[20px] ">
              File Contains Headings Row
            </p>
            <div>
              <SimpleSwitch checked={checked} onChange={onChange} />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-[8px] mt-[28px] sm:text-nowrap ">
            <button
              onClick={handleSubmit}
              className=" items-center bg-[#0044FF] text-white rounded-[40px] flex gap-[8px] p-[10px]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0002 4.16683V11.6668M5.8335 11.6668H4.16683C3.94582 11.6668 3.73385 11.7546 3.57757 11.9109C3.42129 12.0672 3.3335 12.2791 3.3335 12.5002V15.8335C3.3335 16.0545 3.42129 16.2665 3.57757 16.4228C3.73385 16.579 3.94582 16.6668 4.16683 16.6668H15.8335C16.0545 16.6668 16.2665 16.579 16.4228 16.4228C16.579 16.2665 16.6668 16.0545 16.6668 15.8335V12.5002C16.6668 12.2791 16.579 12.0672 16.4228 11.9109C16.2665 11.7546 16.0545 11.6668 15.8335 11.6668H14.1668M6.66683 7.50016L10.0002 3.3335L13.3335 7.50016M14.1668 14.1668H14.1752"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className=" font-Inter text-[14px] leading-[20px]">
                Upload and Move to Next Step
              </span>
            </button>
            <button className="p-[10px]  bg-[#D1ECFF] rounded-[40px]">
              <span className="text-[#0044FF] items-center font-Inter text-[18px] leading-[20px]">
                Back
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


