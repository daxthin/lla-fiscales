import { useState } from "react";
import { IDropdownProps } from "./types";
import { Link } from "react-router-dom"
import { paths } from "../../routes/paths";
import MenuIcon from '@mui/icons-material/Menu';
import './styles.css';
import { useMediaQuery } from "react-responsive";

const Dropdown: React.FC<IDropdownProps> = ({name}) => {

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
    window.addEventListener("click", (e)=>{
        const className = (e.target as HTMLDivElement).className;
        if(!className.includes("dropdown") || !className.includes("dropdown-btn")) setIsVisible(false);
    })

    return (
        <div className="dropdown">
            <div className="flex flex-row justify-center items-center">
                {
                    isTabletOrMobile ? 
                    <button className="dropdown-btn font-bold" onClick={()=>setIsVisible(!isVisible)}>
                        <MenuIcon />
                    </button> : 
                    <>
                        <button className="dropdown-btn font-bold" onClick={()=>setIsVisible(!isVisible)}>{name}</button>
                        <div className="min-w-[25px]">
                            <img src="assets/images/sort-down.png" alt="" />
                        </div> 
                    </>
                }
            </div>
            {
                <div className={`dropdown-list transition-opacity w-full md:w-auto left-0 md:left-auto duration-200 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} bg-white absolute rounded-[10px] p-4 mt-4 z-10`}>
                    <ul className="flex flex-col gap-1">
                    <li>
                        <Link to={paths.involvedPeople}  className="text-black font-semibold text-base">
                            Personas que intervienen
                        </Link>
                    </li>
                    <li>
                        <Link to={paths.beforeVote} className="text-black font-semibold text-base">
                            El paso a paso
                        </Link>
                    </li>
                    <li>
                        <Link to={paths.certDeEscrutinio} className="text-black font-semibold text-base">
                            El certificado de Escrutinio
                        </Link>
                    </li>
                    <li>
                        <Link to={paths.commonCheats} className="text-black font-semibold text-base">
                            Trampas comunes
                        </Link>
                    </li>
                    <li>
                        <Link to={paths.boletasYDocValidos} className="text-black font-semibold text-base">
                            Boletas y documentos válidos
                        </Link>
                    </li>
                    <li>
                        <Link to={paths.denunciar} className="text-black font-semibold text-base">
                            Cuándo, cómo y dónde denunciar
                        </Link>
                    </li>
                    </ul>
                </div>
            }
        </div>
    )
}


export default Dropdown;