import { useState } from "react"
import { Sidebar } from "./components/sidebar"
import { StepOne } from "./stepPages/StepOne"

function App() {
  
  const [currentStep, setCurrentStep] = useState(1)
  const steps = ['step 1', 'step 2', 'step 3', 'step 4'] 
  const stepNames = ['Your Info', 'Select Plan', 'Add-Ons', 'Summary']
  const totalSteps = 4

  return (
    
    <div className="md:flex max-w-4xl rounded-lg items-center justify-center md:mx-8 md:mt-24 md:bg-white md:h-[600px] lg:mx-auto">

      <Sidebar 
        currentStep={currentStep} 
        totalSteps={totalSteps}
        steps={steps}
        stepNames={stepNames}/>
      
      <StepOne 
        currentStep={currentStep} 
        setCurrentStep={setCurrentStep}/>
      
      
    </div>  
    
  )
}

export default App
