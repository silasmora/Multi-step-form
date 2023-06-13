import { useEffect } from 'react';
import { Switch } from '@headlessui/react';

export default function MyToggle({ enabled, setEnabled, handleBillingChange }) {
  
  const handleChange = () => {
    setEnabled(!enabled)
    const newBillingOption = enabled ? 'monthly' : 'yearly'
    handleBillingChange(newBillingOption)
  }

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={`${enabled ? 'bg-marineBlue' : 'bg-marineBlue/50'}
          relative inline-flex h-[24px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
