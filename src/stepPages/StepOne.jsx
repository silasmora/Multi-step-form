import React, { useContext, useState } from 'react'
import { Context } from '../Context'

export const StepOne = () => {

  const {formData, updateFormData} = useContext(Context)
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      step1: {
        ...formData.step1,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  

  return (
    <div className='md:h-full md:px-12 md:py-8'>
      
      <div className='mx-4 py-8 px-6 bg-white rounded-lg absolute top-28 left-0 right-0 md:relative md:top-0 md:mx-0'>

        <h1 className='text-marineBlue text-2xl font-bold md:text-3xl lg:text-4xl'>Personal info</h1>
        <p className='py-4 text-coolGray'>Please provide your name, email address, and phone number.</p>
        <form onSubmit={handleSubmit} className='md:mt-8'>

          <div className='flex flex-col'>
            <label className='text-marineBlue/75 mb-[2px]' id='name' >Name</label>
            <input
              onChange={handleChange}  
              value={formData.step1.name} 
              className='p-2.5 ring-1 ring-coolGray rounded-md focus:outline-none focus:ring-2 focus:ring-purplishBlue' type="text" name="name" id="name" placeholder='Name e.g. Stephen King'/>
          </div>

          <div className='flex flex-col my-4'>
            <label className='text-marineBlue/75 mb-[2px]' id='email' >Email Address</label>
            <input
              onChange={handleChange} 
              value={formData.step1.email}
              className='p-2.5 ring-1 ring-coolGray rounded-md focus:outline-none focus:ring-2 focus:ring-purplishBlue' type="text" name="email address" id="email" placeholder='e.g. stephenking@lorem.com'/>
          </div>

          <div className='flex flex-col'>
            <label className='text-marineBlue/75 mb-[2px]' id='phone number' >Phone Number</label>
            <input
              onChange={handleChange} 
              value={formData.step1.phoneNumber} 
              className='p-2.5 ring-1 ring-coolGray rounded-md focus:outline-none focus:ring-2 focus:ring-purplishBlue' type="text" name="phone number" id="phone number" placeholder='e.g. +1 234 567 890'/>
          </div>

        </form>
      </div>

      <div className="bg-white w-full fixed bottom-0 md:mt-8 md:relative">
        <div className='flex justify-end py-4 pr-4'>
          <button
            type='submit'
            onClick={handleSubmit}
            className="bg-marineBlue text-gray-100 py-3 px-4 rounded hover:bg-blue-900">Next Step</button>
        </div>
      </div>

    </div>
  )
}
