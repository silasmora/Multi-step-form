import React, { useContext } from 'react'
import { Context } from '../Context'
import { useLocation } from 'react-router-dom';

export const Sidebar = ({ totalSteps }) => {

  const location = useLocation()
  // const {completedSteps} = useContext(Context)
  // const isStepCompleted = (step) => completedSteps.includes(step)

  const stepCount = ['step 1', 'step 2', 'step 3', 'step 4'] 
  const stepNames = ['Your Info', 'Select Plan', 'Add-Ons', 'Summary']

  return (
    <div className='bg-mobileSidebar bg-cover h-44 bg-center md:bg-desktopSidebar md:h-[568px] md:w-[30%] md:ml-4 md:rounded-lg '>
      <ul className='flex justify-center md:flex-col md:mt-4'>

          {Array.from({ length: totalSteps }, (_, index) => index + 1).map((step, index) => (
          <div key={index} className="text-white flex items-center md:px-4 md:pt-7">
            <li
              className={`h-10 w-10 mx-2 mt-8 border border-white rounded-full flex justify-center items-center md:mt-0 md:mx-4 ${
                location.pathname === `/` && step === 1 ? 'text-black bg-lightBlue' :
                location.pathname === `/step${step}` ? 'text-black bg-lightBlue' : ''
              }`}
            >
              {step}
            </li>

            <div className="hidden text-gray-100 uppercase md:flex flex-col">
              <span className="text-sm text-gray-300 font-light">{stepCount[index]}</span>
              <span className="tracking-wider text-sm font-bold">{stepNames[index]}</span>
            </div>
        </div>
          ))}
      </ul>
      
      
    </div>
  );
};
