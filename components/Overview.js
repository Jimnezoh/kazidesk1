import React from 'react'
import OverviewCards from './Overviewcards'

function Overview() {
    const overviewCardsData = [
        {
          title: "Total Employees",
          value: 146,
          active: 100,
          inactive: 46,
        },
        {
          title: "Total Employees",
          value: 100,
          active: 80,
          inactive: 20,
        },
        {
          title: "Total Employees",
          value: 50,
          active: 40,
          inactive: 10,
        },
        {
          title: "Total Employees",
          value: 75,
          active: 40,
          inactive: 35,
        }
    ]
  
  return (
    <div className="pl-2 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-[25px] 2xl:pl-[25px] my-4 sm:my-6 md:my-8 lg:my-10 xl:my-[40px] 2xl:my-[40px] py-3 sm:py-4 md:py-5 lg:py-5 xl:py-[23px] 2xl:py-[23px] rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-xl xl:rounded-[20px] 2xl:rounded-[20px] bg-white">
      {/* overview title */}
      <div className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-[14px] 2xl:text-base leading-5 font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-6 2xl:mb-8">
        <p>Overview</p>
      </div>
      
      {/* Responsive card layout */}
      <div className="flex flex-wrap gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-[45px] 2xl:gap-[45px]">
        {overviewCardsData.map((card, index) => (
          <OverviewCards 
            key={index}
            title={card.title}
            value={card.value}
            active={card.active}
            inactive={card.inactive}
          />
        ))}
      </div>
    </div>
  )
}

export default Overview