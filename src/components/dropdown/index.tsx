import { useState } from "react";
import { IDropdownListProps, IDropdownProps } from "./types";
import { Link } from "react-router-dom"
import { paths } from "../../routes/paths";
import MenuIcon from '@mui/icons-material/Menu';
import './styles.css';
import { useMediaQuery } from "react-responsive";
import CloseIcon from '@mui/icons-material/Close';

const Dropdown: React.FC<IDropdownProps> = ({name}) => {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

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
            <div className={`${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <DropdownList closeButton={()=>setIsVisible(!isVisible)}>
                    <ul className="flex flex-col gap-1 bg-white">
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
                </DropdownList>
            </div>
        </div>
    )
}

const DropdownList: React.FC<IDropdownListProps> = ({children, closeButton}) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
    return (
        isTabletOrMobile ?
        <div className={`w-full h-auto left-0 flex flex-row justify-center dropdown-list transition-opacity duration-200 absolute mt-6 z-10`}>
            <div className="w-[280px] bg-white p-4 flex flex-col dropdown-shadow">
                <div className="flex flex-row justify-between items-center border-b border-black mb-2 pb-1 leading-[2]">
                    <span className="font-bold">Cómo fiscalizar</span>
                    <button className="opacity-[0.3]" onClick={closeButton}>
                        <CloseIcon />
                    </button>
                </div>
                {children}
            </div>
        </div> 
            :
        <div className={`dropdown-list transition-opacity duration-200 bg-white absolute rounded-[10px] p-4 mt-4 z-10`}>
            {children}
        </div>
    )

}

export default Dropdown;