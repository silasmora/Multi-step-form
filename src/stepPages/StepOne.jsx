import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import { useNavigate } from 'react-router-dom'

export const StepOne = () => {

  const {formData, setFormData, markStepAsCompleted} = useContext(Context)
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      step1: {
        ...formData.step1,
        [name]: value,
      },
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Perform form validation
    const errors = validateForm(formData.step1)
    setErrors(errors)

    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      // console.log('Form submitted:', formData)
      markStepAsCompleted(1)
      navigate('/step2')
    }

  }

  const validateForm = (data) => {
    const errors = {}

    if (!data.name || !data.email || !data.phoneNumber) {
      errors.name = 'This field is required'
      errors.email = 'This field is required'
      errors.phoneNumber = 'This field is required'
    }
    return errors
  }

  return (
    <form onSubmit={handleSubmit} className='h-[568px] w-[70%] md:px-10'>
      
      <div className='mx-4 py-8 px-6 bg-white rounded-lg absolute top-28 left-0 right-0 md:relative md:top-0 md:mx-0 md:h-3/4'>

        <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Personal info</h1>
        <p className='py-4 text-coolGray'>Please provide your name, email address, and phone number.</p>
        
        <div className='flex flex-col mt-8'>
          <div className='flex justify-between'>
            <label className='text-marineBlue/75 mb-[2px]' id='name' >Name</label>
            {errors.name && <p className='text-red-600 font-medium'>{errors.name}</p>}
          </div>
          <input
            onChange={handleChange}  
            value={formData.step1.name} 
            className={`p-2.5 ring-1 ring-coolGray rounded-md focus:outline-none focus:ring-2 focus:ring-purplishBlue ${errors.name && 'ring-red-600'} `} 
            type="text" 
            name="name" 
            id="name" 
            placeholder='Name e.g. Stephen King'
            required
            />
            
        </div>

        <div className='flex flex-col my-4'>
          <div className='flex justify-between'>
            <label className='text-marineBlue/75 mb-[2px]' id='email' >Email Address</label>
            {errors.name && <p className='text-red-600 font-medium'>{errors.email}</p>}
          </div>
          <input
            onChange={handleChange}
            value={formData.step1.email}
            className={`p-2.5 ring-1 ring-coolGray rounded-md focus:outline-none focus:ring-2 focus:ring-purplishBlue ${errors.name && 'ring-red-600'} `} 
            type="text" 
            name="email" 
            id="email" 
            placeholder='e.g. stephenking@lorem.com'
            required
            />
        </div>

        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <label className='text-marineBlue/75 mb-[2px]' id='email' >Phone Number</label>
            {errors.name && <p className='text-red-600 font-medium'>{errors.phoneNumber}</p>}
          </div>
          <input
            onChange={handleChange} 
            value={formData.step1.phoneNumber} 
            className={`p-2.5 ring-1 ring-coolGray rounded-md focus:outline-none focus:ring-2 focus:ring-purplishBlue ${errors.name && 'ring-red-600'} `}
            type="text" 
            name="phoneNumber" 
            id="phoneNumber" 
            placeholder='e.g. +1 234 567 890'
            required
            />
        </div>

      </div>
      

      <div className="bg-white w-full fixed bottom-0 md:relative md:h-1/4 flex flex-col justify-end">
        <div className='flex justify-end py-4 px-4'>
          <button
            type='submit'
            onClick={handleSubmit}
            className="bg-marineBlue text-gray-100 py-3 px-4 rounded hover:bg-blue-900">Next Step</button>
        </div>
      </div>

    </form>
  )
}
