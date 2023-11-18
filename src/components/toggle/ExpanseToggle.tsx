import { useState } from "react"
import { useReduceToogle } from "../../stores/useReduceToggle";

export function ExpanseToggle() {
  const [collapse, setCollapse] = useState(false);
  
  const { isToggle, toggleChange } =useReduceToogle()
  const handleChange = () => {
    setCollapse(!collapse);
    toggleChange(collapse)
  }


  console.log('estado global:',isToggle)
  return (
    <div className="flex place-content-center p-8">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" onChange={handleChange}/>
          <div className="w-[88px] h-[48px] rounded-full bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-10 after:w-10 after:transition-all peer-checked:bg-violet-300"></div>
          <span className="ms-3 text-md font-medium text-gray-900">Expandir todo</span>
      </label>
    </div>
  )
}