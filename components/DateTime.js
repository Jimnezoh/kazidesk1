"use client";

import React from "react";
import { useState, useEffect } from "react";

function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const Timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(Timer);
  }, []);

  // formart of the time
  const dateoptions = {
    weekday: "long",
  };
  const timeoptions = {
    hour: "2-digit",
    minute: "2-digit",
    // second: '2-digit',
    hour12: true,
  };

  const formattedTime = dateTime.toLocaleString("en-US", timeoptions);
  const formattedDate = dateTime.toLocaleString("en-US", dateoptions);
  return (
    <div className="  flex flex-col-reverse font-Inter w-[64px]">
      <div className="font-Inter text-[12px] leading-[20px] w-[46px]">
        {formattedDate}
      </div>
      <div className="w-[64px] text-[14px] font-semibold">{formattedTime}</div>
    </div>
  );
}

export default DateTime;
