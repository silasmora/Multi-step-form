import React from 'react'
import { Sidebar } from "./components/sidebar"
import { StepOne } from "./stepPages/StepOne"
import { StepTwo } from "./stepPages/StepTwo"
import { StepThree } from "./stepPages/StepThree"
import { StepFour } from "./stepPages/StepFour"
import { Routes, Route } from "react-router-dom"
import { StepFive } from './stepPages/StepFive'

function App() {
  
  const totalSteps = 4

  return (
    
    <div className="max-w-5xl rounded-lg shadow-lg items-center justify-center md:flex md:mx-8 md:mt-24 md:bg-white md:h-[600px] lg:mx-auto ">

      <Sidebar 
      totalSteps={totalSteps}
      />
      
      <Routes>
        <Route path="/" element={<StepOne />} />
        <Route path="/step2" element={<StepTwo />} />
        <Route path="/step3" element={<StepThree />} />
        <Route path="/step4" element={<StepFour />} />
        <Route path='step5' element={<StepFive />}/>
      </Routes>
    </div>  
    
  )
}

export default App
