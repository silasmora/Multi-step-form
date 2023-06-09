import React from 'react'
import { useContext } from "react"
import { Sidebar } from "./components/sidebar"
import { StepOne } from "./stepPages/StepOne"
import { StepTwo } from "./stepPages/StepTwo"
import { StepThree } from "./stepPages/StepThree"
import { StepFour } from "./stepPages/StepFour"
import { Context } from "./Context"
import { Routes, Route } from "react-router-dom"

function App() {
  
  const {completedSteps} = useContext(Context)
  const isStepCompleted = (step) => completedSteps.includes(step)
  const totalSteps = 4

  return (
    
    <div className="md:flex max-w-4xl rounded-lg items-center justify-center md:mx-8 md:mt-24 md:bg-white md:h-[600px] lg:mx-auto ">

      <Sidebar 
      totalSteps={totalSteps}
      />
      
      
      
      {Array.from({length: totalSteps}, (_,index) => index + 1).map((step, index) => (
        <React.Fragment key={index}>

          {step === 1 && !isStepCompleted(1) ? <StepOne /> : null}
          {step === 2 && isStepCompleted(1) ? <StepTwo /> : null}
          {step === 3 && isStepCompleted(2) ? <StepThree /> : null}
          {step === 4 && isStepCompleted(3) ? <StepFour /> : null}
        
        </React.Fragment>
      ))}
     
     
  

    </div>  
    
  )
}

export default App
