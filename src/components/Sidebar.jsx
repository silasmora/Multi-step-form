import React from 'react';

export const Sidebar = ({ currentStep, totalSteps, steps, stepNames }) => {
  return (
    <div className='bg-mobileSidebar bg-cover h-44 bg-center md:bg-desktopSidebar md:h-[568px] md:w-[274px] md:ml-4 md:rounded-lg lg:ml-0'>
      <ul className='flex justify-center md:flex-col md:mt-4'>
          {Array.from({ length: totalSteps }, (_, index) => index + 1).map((step, index) => (
          <div className='text-white flex items-center md:px-4 md:pt-7 '>
            <li
              key={index}
              className={` h-10 w-10 mx-2 mt-8 border border-white rounded-full flex justify-center items-center md:mt-0 md:mx-4  ${
                step === currentStep ? 'text-black bg-lightBlue' : ''
              }`}
            >
              {step}
            </li>
            <div className='hidden text-gray-100 uppercase md:flex flex-col '>
              <span className="text-sm text-gray-300 font-light">{steps[index]}</span>
              <span className='tracking-wider text-sm font-bold'>{stepNames[index]}</span>
            </div>
          </div>
          ))}
      </ul>
      
      
    </div>
  );
};
