import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context'

export const StepThree = () => {

  const {formData, setFormData} = useContext(Context)
  const [selectedAddOns, setSelectedAddOns] = useState(formData.step3?.selectedAddOns || [])
  const navigate = useNavigate()

  const handleAddonChange = (addOn) => {
    setSelectedAddOns((prevSelectedAddOns) => {
      if (prevSelectedAddOns.includes(addOn)) {
        return prevSelectedAddOns.filter((item) => item !== addOn)
      } else {
        return [...prevSelectedAddOns, addOn]
      }
    })
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    setFormData((prevFormData) => ({
      ...prevFormData,
      step3: {
        ...prevFormData.step3,
        selectedAddOns: selectedAddOns
      }
    }))
    navigate('/step4')
  }
  

  return (
    <form onSubmit={handlesubmit} className='w-[70%] md:h-[568px] md:px-10'>

      <div className='mx-4 py-8 px-6 bg-white rounded-lg absolute top-28 left-0 right-0 md:relative md:top-0 md:mx-0 md:h-[80%]'>

        <h1 className='text-marineBlue font-bold text-3xl lg:text-4xl'>Pick add-ons</h1>
        <p className='py-4 text-coolGray text-lg'>Add-ons help enhance your gaming experience.</p>
        <div className='mt-8'>

          <div onClick={() => handleAddonChange('Online service')} 
          className={`flex justify-between items-center p-3 ring-1 ring-coolGray/50 rounded-md cursor-pointer hover:ring-purplishBlue sm:px-6
          ${selectedAddOns.includes('Online service') && 'bg-magnolia/75 ring-purplishBlue '}`}
          >
            <div className='flex items-center'>
              <svg className={`border border-coolGray rounded p-1
              ${selectedAddOns.includes('Online service') && 'bg-purplishBlue'}`} xml ns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
              
              <div className='pl-3 sm:pl-6'>
                <p className='text-marineBlue/70 font-bold'>Online service</p>
                <p className='text-coolGray text-sm'>Access to multiplayer games</p>
              </div>
            </div>
            <span className='text-purplishBlue text-sm'>{formData.step2.selectedBilling === 'monthly' ? '+$1/mo' : '+$10/yr'}</span>
          </div>

          <div onClick={() => handleAddonChange('Larger storage')} 
          className={`flex items-center justify-between p-3 ring-1 ring-coolGray/50 rounded-md my-4 cursor-pointer hover:ring-purplishBlue sm:px-6
          ${selectedAddOns.includes('Larger storage') && 'bg-magnolia/75 ring-purplishBlue'}`}
          >
            
            <div className='flex items-center'>
              <svg className={`border border-coolGray rounded p-1
              ${selectedAddOns.includes('Larger storage') && 'bg-purplishBlue'}`} xml ns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
          
             <div className='pl-3 sm:pl-6'>
                <p className='text-marineBlue/70 font-bold'>Larger storage </p>
                <p className='text-coolGray text-sm'>Extra 1TB of cloud save</p>
              </div>
            </div>
            <span className='text-purplishBlue text-sm'>{formData.step2.selectedBilling === 'monthly' ? '+$2/mo' : '+$20/yr'}</span>
          </div>

          <div onClick={() => handleAddonChange('Customizable profile')} className={`flex items-center justify-between p-3 ring-1 ring-coolGray/50 rounded-md my-4 cursor-pointer hover:ring-purplishBlue sm:px-6
          ${selectedAddOns.includes('Customizable profile') && 'bg-magnolia/75 ring-purplishBlue'}`} >
            <div className='flex items-center'>
              <svg className={`border border-coolGray rounded p-1
              ${selectedAddOns.includes('Customizable profile') && 'bg-purplishBlue '}`} xml ns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
              <div className='pl-3 sm:pl-6'>
                <p className='text-marineBlue/70 font-bold'>Customizable Profile</p>
                <p className='text-coolGray text-sm'>Custom theme on your profile</p>
              </div>
            </div>
            
              <span className='text-purplishBlue text-sm'>{formData.step2.selectedBilling === 'monthly' ? '+$2/mo' : '+$20/yr'}</span>
            
          </div>
        </div>
      </div>

      <div className="bg-white w-full fixed bottom-0 md:relative md:h-[20%] flex flex-col justify-end">
        <div className='flex justify-between py-4 px-6'>
          <button 
            onClick={() => navigate('/step2')}       className='text-coolGray hover:text-marineBlue cursor-pointer'>Go Back
          </button>
          <button
            type='submit'
            className="bg-marineBlue text-gray-100 py-3 px-4 rounded hover:bg-blue-900">Next Step
          </button>
        </div>
      </div>
    </form>
  )
}
