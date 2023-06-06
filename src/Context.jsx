import React, {useState} from 'react'

const Context = React.createContext()

const ContextProvider = ({ children }) => {

  const [formData, setFormData] = useState({
    step1: {
      name: '',
      email: '',
      phoneNumber: ''
    },
    step2: {
      selectedPlan: false,
      
    },
    step3: {
      addOns: false
    },
    
  })

  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData
    }))
  }

  const value = {
    formData,
    updateFormData
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}