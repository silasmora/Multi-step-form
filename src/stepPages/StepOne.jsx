import React from 'react'

export const StepOne = () => {
  return (
    <div className=' '>
      
      <div className='py-8 px-6 bg-white rounded-lg mx-8 absolute top-28 left-0 right-0 '>

        <h1 className='text-marineBlue text-2xl font-bold'>Personal info</h1>
        <p className='py-4 text-coolGray'>Please provide your name, email address, and phone number.</p>
        <form className=''>

          <div className='flex flex-col'>
            <label className='text-marineBlue/75 mb-[2px]' id='name' >Name</label>
            <input className='p-2 ring-1 ring-coolGray rounded-sm' type="text" name="name" id="name" placeholder='Name e.g. Stephen King'/>
          </div>

          <div className='flex flex-col my-4'>
            <label className='text-marineBlue/75 mb-[2px]' id='email' >Email Address</label>
            <input className='p-2 ring-1 ring-coolGray rounded-sm' type="text" name="email address" id="email" placeholder='e.g. stephenking@lorem.com'/>
          </div>

          <div className='flex flex-col'>
            <label className='text-marineBlue/75 mb-[2px]' id='phone number' >Phone Number</label>
            <input className='p-2 ring-1 ring-coolGray rounded-sm' type="text" name="phone number" id="phone number" placeholder='e.g. +1 234 567 890'/>
          </div>

        </form>
      </div>

      <div className="bg-white w-full fixed bottom-0">
        <div className='flex justify-end py-4 pr-4'>
          <button className="bg-marineBlue text-gray-100 py-3 px-4 rounded">Next Step</button>
        </div>
      </div>

    </div>
  )
}
