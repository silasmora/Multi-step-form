import React from 'react'

export const Sidebar = ({ currentStep, totalSteps }) => {
  return (
    <div className='bg-mobileSidebar bg-cover h-44 bg-center'>
      <ul className='flex justify-center'>
        {Array.from({ length: totalSteps }, (_, index) => index + 1).map((step, index) => (
          <li key={index} className={`text-white h-10 w-10 mx-2 mt-8 border border-white rounded-full flex justify-center items-center 
          ${step === currentStep ? 'bg-lightBlue text-black' : ''}`}>
            {step}
          </li>
        ))}
      </ul>
      
    </div>
  )
}

