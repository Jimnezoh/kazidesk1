import React from 'react'

function OverviewCards({title, value, active, inactive}) {
  return (
    <div className='bg-[#F8F8F8] border-[#F2F2F2] border rounded-lg p-1 sm:p-2 md:p-3 lg:p-4 xl:p-[5px] 2xl:p-6 mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-[10px] 2xl:mt-6 w-full sm:w-56 md:w-60 lg:w-64 xl:w-[230.75px] 2xl:w-72'>
      <div className='font-medium leading-5 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-[14px] 2xl:text-base'>
        <p>{title}</p>
      </div>
      <div className='my-2 sm:my-2 md:my-3 lg:my-3 xl:my-[12px] 2xl:my-4 font-semibold text-base sm:text-lg md:text-lg lg:text-xl xl:text-[20px] 2xl:text-2xl leading-5'>
        <p>{value}</p>
      </div>
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-[12px] 2xl:gap-4 mb-2 sm:mb-2 md:mb-2 lg:mb-3 xl:mb-[10px] 2xl:mb-4'>
        <div className='flex items-center text-[8px] sm:text-[9px] md:text-[9px] lg:text-[10px] xl:text-[10px] 2xl:text-xs leading-5 text-[#7C7C7C] gap-1 sm:gap-1 md:gap-2 lg:gap-2 xl:gap-[8px] 2xl:gap-3'>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 sm:w-2 sm:h-2 md:w-2 md:h-2 lg:w-2 lg:h-2 xl:w-[10px] xl:h-[10px] 2xl:w-3 2xl:h-3">
            <circle cx="5" cy="5" r="5" fill="#24954A"/>
          </svg>
          <p> active: {active}</p>
        </div>
        <div className='flex items-center text-[8px] sm:text-[9px] md:text-[9px] lg:text-[10px] xl:text-[10px] 2xl:text-xs leading-5 text-[#7C7C7C] gap-1 sm:gap-1 md:gap-2 lg:gap-2 xl:gap-[8px] 2xl:gap-3'>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 sm:w-2 sm:h-2 md:w-2 md:h-2 lg:w-2 lg:h-2 xl:w-[10px] xl:h-[10px] 2xl:w-3 2xl:h-3">
            <circle cx="5" cy="5" r="5" fill="#F50404"/>
          </svg>
          <p> Inactive: {inactive}</p>
        </div>
      </div>
    </div>
  )
}

export default OverviewCards