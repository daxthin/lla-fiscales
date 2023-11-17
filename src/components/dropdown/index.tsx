import { useState } from "react";
import { IDropdownProps } from "./types";
import './styles.css';

const Dropdown: React.FC<IDropdownProps> = ({name, children}) => {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    window.addEventListener("click", (e)=>{
        const className = (e.target as HTMLDivElement).className;
        if(!className.includes("dropdown")) setIsVisible(false);
    })

    return (
        <div className="dropdown">
            <div className="flex flex-row justify-center items-center" onClick={()=>setIsVisible(!isVisible)}>
                <button className="dropdown-btn font-bold">{name}</button>
                <div className="min-w-[25px]">
                    <img src="assets/images/sort-down.png" alt="" />
                </div>
            </div>
            {
                <div className={`dropdown-list transition-opacity w-full md:w-auto left-0 md:left-auto duration-200 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} bg-white absolute rounded-[10px] p-4 mt-4 z-10`}>
                    <ul className="flex flex-col gap-1">
                        {children}
                    </ul>
                </div>
            }
        </div>
    )
}


export default Dropdown;