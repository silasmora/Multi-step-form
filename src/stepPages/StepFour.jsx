import React, { useContext } from 'react'
import { Context } from '../Context'
import { useNavigate } from 'react-router-dom'

export const StepFour = () => {

  const {formData} = useContext(Context)
  const navigate = useNavigate()

  const getPrice = (selectedPlan, selectedBilling, addons) => {
    let basePrice = 0;
  
    switch (selectedPlan) {
      case 'Arcade':
        basePrice = selectedBilling === 'yearly' ? 90 : 9;
        break;
      case 'Advanced':
        basePrice = selectedBilling === 'yearly' ? 120 : 12;
        break;
      case 'Pro':
        basePrice = selectedBilling === 'yearly' ? 150 : 15;
        break;
      default:
        basePrice = 0;
    }
  
    let addonsPrice = 0;
  
    if (addons && addons.length > 0) {
      addonsPrice = addons.reduce((totalPrice, addon) => {
        switch (addon) {
          case 'Online service':
            return totalPrice + (selectedBilling === 'yearly' ? 10 : 1);
          case 'Larger storage':
          case 'Customizable profile':
            return totalPrice + (selectedBilling === 'yearly' ? 20 : 2);
          default:
            return totalPrice;
        }
      }, 0);
    }
  
    const totalPrice = basePrice + addonsPrice

    const formattedBasePrice = selectedBilling === 'monthly' ? `+$${basePrice}/mo` : `$${basePrice}/yr`
    const formattedAddonsPrice = selectedBilling === 'monthly' ? `+$${addonsPrice}/mo` : `$${addonsPrice}/yr`
    const formattedTotalPrice = selectedBilling === 'monthly' ? `+$${totalPrice}/mo` : `$${totalPrice}/yr`
  
    return {
      basePrice: formattedBasePrice, 
      addonsPrice: formattedAddonsPrice, 
      totalPrice: formattedTotalPrice}
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/step5')
  }
  

  return (
    <form onSubmit={handleSubmit} className='w-[70%] md:h-[568px] md:px-10'>
      <div className='mx-4 py-8 px-6 bg-white rounded-lg absolute top-28 left-0 right-0 md:relative md:top-0 md:mx-0 md:h-[80%]'>

        <h1 className='text-marineBlue font-bold text-3xl lg:text-4xl'>Finishing up</h1>
        <p className='pt-4 text-coolGray text-lg'>Double-check everything looks OK before confirming.</p>

        <div className='mt-8 bg-magnolia/75 rounded-lg'>
          
          <div className='flex justify-between items-center p-3 text-marineBlue/80 md:p-5'>
            <div>
              <span className='font-bold'>{formData.step2?.selectedPlan}</span>
              <span className='font-bold '>({formData.step2?.selectedBilling === 'monthly' ? 'Monthly' : 'Yearly'})</span>
              <a className='block underline hover:text-purplishBlue cursor-pointer' onClick={() => navigate('/step2')}>Change</a>
            </div>
            <div className='font-bold '>
              {getPrice(
              formData.step2?.selectedPlan,
              formData.step2?.selectedBilling,
              formData.step3?.selectedAddOns
              ).basePrice}
            </div>
          </div>
          
          {formData.step3?.selectedAddOns && formData.step3.selectedAddOns.length > 0 && (
            <ul className='p-3 text-coolGray border-t md:p-5'>
              {formData.step3.selectedAddOns.map((addon, index) => (
                <div key={index} className='flex justify-between py-2'>
                  <li>{addon}:</li>
                  <span className='text-marineBlue/80'>
                    {getPrice(
                      formData.step2?.selectedPlan,
                      formData.step2?.selectedBilling,
                      [addon] // Pass addon as an array
                    ).addonsPrice}
                  </span>
                </div>
              ))}
            </ul>
          )}

          
                        
        </div>

        <div className='flex justify-between px-3 pt-6 md:px-5'>
            <div className='text-coolGray'>
              Total ({formData.step2?.selectedBilling === 'monthly' ? 'per month' : 'per year'})
            </div>
            <div className='text-purplishBlue font-bold text-lg'>
              {getPrice(
                  formData.step2?.selectedPlan,
                  formData.step2?.selectedBilling,
                  formData.step3?.selectedAddOns
                ).totalPrice}
            </div>
        </div>          

      </div>

      <div className="bg-white w-full fixed bottom-0 md:relative md:h-[20%] flex flex-col justify-end">
        <div className='flex justify-between py-4 px-6'>
          <button 
            onClick={() => navigate('/step3')}       className='text-coolGray hover:text-marineBlue cursor-pointer'>Go Back
          </button>
          <button
            type='submit'
            className="bg-purplishBlue text-gray-100 py-3 px-6 rounded hover:bg-purplishBlue/60">Confirm
          </button>
        </div>
      </div>
    </form>
  )
}
