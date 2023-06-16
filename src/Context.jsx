import React, {useState} from 'react'

const Context = React.createContext()

const ContextProvider = ({ children }) => {

  const [completedSteps, setCompletedSteps] = useState([])
  
  const [formData, setFormData] = useState({
    step1: {
      name: '',
      email: '',
      phoneNumber: ''
    },
    step2: {
      selectedPlan: '',
      selectedBilling: ''
    },
    step3: {
      selectedAddOns: []
    }
  })

  console.log(formData)

  const markStepAsCompleted = (step) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps((prevCompletedSteps) => [...prevCompletedSteps, step])
    }
  }

  const value = {
    formData,
    setFormData,
    markStepAsCompleted,
    completedSteps
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}