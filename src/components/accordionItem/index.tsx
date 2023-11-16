import { useState } from "react";
import { IAccordionItemProps } from "./types";
import './styles.css';

const AccordionItem: React.FC<IAccordionItemProps> = ({title, children}) => {

  const [collapse, setCollapse] = useState(true);

  return (
    <div className="flex flex-col justify-between items-center border-t border-black ">
      <div 
          className="accordion-btn cursor-pointer flex flex-row items-center justify-between w-full select-none" 
          onClick={()=>{
            setCollapse(!collapse)
        }}>
        <h2 className="font-bold text-2xl pt-4 pb-4 pl-2 pr-2 -z-20">
          {title}
        </h2>
        <div className="-z-20">
          <img src="assets/expand-arrow.png" alt="" className={`${collapse ? 'rotate-180' : ''}`}/>
        </div>
      </div>
      <div className={`accordion-info ${collapse ? 'hidden' : ''}`}>
        <div className="p-2 mb-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;