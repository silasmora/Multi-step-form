import React, { useContext, useState } from 'react'
import MyToggle from '../components/MyToggle'
import { Context } from '../Context'
import { useNavigate } from 'react-router-dom'

export const StepTwo = () => {

  const {formData, setFormData, markStepAsCompleted} = useContext(Context)
  const [selectedPlan, setSelectedPlan] = useState(formData.step2?.selectedPlan || '')
  const [selectedBilling, setSelectedBilling] = useState(formData.step2?.selectedBilling || '')
  const [enabled, setEnabled] = useState(false)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan)
    
  }

  const handleBillingChange = (value) => {
    setSelectedBilling(value);
    
  }
  
  console.log(selectedBilling)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData((prevFormData) => ({
      ...prevFormData,
      step2: {
        ...prevFormData.step2,
        selectedPlan: selectedPlan,
        selectedBilling: selectedBilling
      }
    }))

    const errors = validateForm({
      selectedPlan
    })
    setErrors(errors)

    if (Object.keys(errors).length === 0) {
      markStepAsCompleted(2)
      navigate('/step3')
    }
  }

  const validateForm = (data) => {
    const errors = {}

    if (!data.selectedPlan) {
      errors.selectedPlan = 'Please select a plan'
    }
    return errors
  }

  return (
    <form onSubmit={handleSubmit} className='h-[568px] w-[70%] md:px-10'>
      
      <div className='mx-4 py-8 px-6 bg-white rounded-lg absolute top-28 left-0 right-0 md:relative md:top-0 md:mx-0 md:h-[80%]'>
        
        <h1 className='text-marineBlue font-bold text-2xl md:text-3xl lg:text-4xl'>Select your plan</h1>
        <p className='pt-4 text-coolGray'>You have the option of monthly or yearly billing</p>
        <p className='h-6 text-red-600 font-medium'>{errors.selectedPlan}</p>
        

        <div className='md:flex items-center w-full'>
          <div 
          onClick={() => handlePlanChange('arcade')} className={`flex p-4 ring-1 ring-coolGray/50 rounded-md cursor-pointer hover:ring-purplishBlue md:flex-col md:w-1/3
          ${selectedPlan === 'arcade' ? 'bg-magnolia/75 ring-purplishBlue ' : ''}`}>
            
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>
              <div className='ml-4 md:ml-0 md:pt-8'>
                <p className='text-marineBlue/70 font-bold'>Arcade</p>
                <p className='text-coolGray my-[2px]'>${selectedBilling === 'yearly' ? '90/yr' : '9/mo'}</p>
                <p className={`text-marineBlue/70 font-medium text-sm ${selectedBilling === 'yearly' ? 'visible' : 'invisible'}`}>2 months free</p>
              </div>
            
          </div>

          <div
          onClick={() => handlePlanChange('advanced')}
          className={`flex p-4 ring-1 ring-coolGray/50 rounded-md my-4 cursor-pointer hover:ring-purplishBlue md:flex-col md:w-1/3 md:mx-4
          ${selectedPlan === 'advanced' ? 'bg-magnolia/75 ring-purplishBlue' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg>
            <div className='ml-4 md:ml-0 md:pt-8'>
              <p className='text-marineBlue/70 font-bold'>Advanced</p>
              <p className='text-coolGray my-[2px]'>${selectedBilling === 'yearly' ? '120/yr' : '12/mo'}</p>
              <p className={`text-marineBlue/70 font-medium text-sm ${selectedBilling === 'yearly' ? 'visible' : 'invisible'}`}>
                2 months free
              </p>
            </div>
          </div>

          <div 
          onClick={() => handlePlanChange('pro')}
          className={`flex p-4 ring-1 ring-coolGray/50 rounded-md cursor-pointer hover:ring-purplishBlue md:flex-col md:w-1/3
          ${selectedPlan === 'pro' ? 'bg-magnolia/75 ring-purplishBlue' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g></svg>
            <div className='ml-4 md:ml-0 md:pt-8'>
              <p className='text-marineBlue/70 font-bold'>Pro</p>
              <p className='text-coolGray my-[2px] '>${selectedBilling === 'yearly' ? '150/yr' : '15/mo'}</p>
              <p className={`text-marineBlue/70 font-medium text-sm ${selectedBilling === 'yearly' ? 'visible' : 'invisible'}`}>2 months free</p>
            </div>
          </div>
        </div>

        <div className='flex justify-around bg-magnolia/75 rounded-lg mt-8 py-4 px-8 text-coolGray font-medium sm:px-24 md:px-0'>
          <p className={`text-${selectedBilling === 'monthly' ? 'marineBlue' : ''}`}>Monthly</p>
          <MyToggle
            enabled={selectedBilling === 'yearly'}
            setEnabled={setEnabled}
            handleBillingChange={handleBillingChange}
            
          />
          <p className={`text-${selectedBilling === 'yearly' ? 'marineBlue' : ''}`}>Yearly</p>
        </div>

          
      </div>

      <div className="bg-white w-full fixed bottom-0 md:relative md:h-[20%] flex flex-col justify-end">
        <div className='flex justify-between py-4 px-4'>
          <button 
            onClick={() => navigate('/')}       className='text-coolGray hover:text-marineBlue cursor-pointer'>Go Back
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
