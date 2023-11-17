import { Link } from "react-router-dom";
import Dropdown from "../dropdown";
import Search from "../search";
import { paths } from "../../routes/paths";
import { useMediaQuery } from "react-responsive";

const Navbar: React.FC = () => {
    
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

    return (
        isTabletOrMobile ?
        <nav className="w-full grid grid-cols-3 grid-rows-1 justify-around items-center bg-white p-4">
            <div className="flex flex-row gap-8 justify-center items-center w-14">
                <img className="col-start-1 col-end-2" src="assets/images/lla-mobile-logo.png" alt="" draggable={false}/> 
            </div>
            <div className="flex flex-row gap-4 justify-center items-center col-start-3 col-end-4">
                <Search></Search>
                <Dropdown name="" />
            </div>
        </nav>
            : 
        <nav className="w-full flex flex-row justify-around items-center bg-white p-4">
            <div className="flex flex-row gap-8 justify-center items-center">
            <img src="assets/images/lla_logo.png" alt="" draggable={false}/> 
                <Link to={paths.home} className="text-black border-b-[3px] w-[94px] text-center p-1 border-b-violet-700 font-bold text-base">Home</Link>
                <Dropdown name="Cómo fiscalizar" />
            </div>
            <Search></Search>
        </nav> 
    )
}

export default Navbar;