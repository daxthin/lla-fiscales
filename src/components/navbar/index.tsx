import { Link } from "react-router-dom";
import Dropdown from "../dropdown";
import Search from "../search";
import { isMobile } from 'react-device-detect';
import { paths } from "../../routes/paths";

const Navbar: React.FC = () => {
    return (
        isMobile ?
        <nav className="w-full flex flex-row justify-around items-center bg-white p-4">
            <div className="flex flex-row gap-8 justify-center items-center">
            <img src="assets/images/lla-mobile-logo.png" alt="" draggable={false}/> 
                <Dropdown name="Cómo fiscalizar" />
            </div>
            <Search></Search>
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