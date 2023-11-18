import { useEffect, useState } from "react";
import { IExpandableItemProps } from "./types";

import './styles.css';
import { useReduceToogle } from "../../stores/useReduceToggle";

const ExpandableItem: React.FC<IExpandableItemProps> = ({title, subtitle, children, iconSrc}) => {
  const { isToggle } =useReduceToogle()
  const [collapse, setCollapse] = useState(true)

  useEffect(()=> {
    isToggle 
      ? setCollapse(false) 
      : setCollapse(true)
  },[isToggle])

  
  console.log('estado local:', collapse)
  return (
    <div className="w-full pl-4 pr-4">
      <div className="flex flex-col border-t border-black p-4 w-full">
        <div 
            className="accordion-btn cursor-pointer flex flex-row items-center justify-between w-full select-none" 
            onClick={()=>{
              setCollapse(!collapse)
          }}>
          <div className="flex flex-row">
            <div className="pt-5">
              <img src={iconSrc} alt="" />
            </div>
            <div>
              <h2 className="font-bold md:text-2xl pt-4 pb-4 pl-2 pr-2 -z-20 cursor-pointer">
                {title}
              </h2>
              <h3 className="font-medium text-2xl pt-4 pb-4 pl-2 pr-2 -z-20 cursor-pointer">
                {subtitle}
              </h3>
            </div>
          </div>
          <div className="-z-20">
            <img src="assets/images/expand-arrow.png" alt="" className={`${collapse ? 'rotate-180' : ''}`}/>
          </div>
        </div>
        <div className={`accordion-info ${collapse ? 'hidden' : ''}`}>
          <div className="mb-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableItem;