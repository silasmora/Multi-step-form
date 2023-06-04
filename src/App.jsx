import { useState } from "react"
import { Sidebar } from "./components/Sidebar"
import { StepOne } from "./stepPages/StepOne"

function App() {
  
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  return (
    
    <div className="">

      <Sidebar 
        currentStep={currentStep} 
        totalSteps={totalSteps}/>
      <div className="">
        <StepOne 
          currentStep={currentStep} 
          setCurrentStep={setCurrentStep}/>
      </div>
      
    </div>  
    
  )
}

export default App
