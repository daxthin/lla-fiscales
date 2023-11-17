import Dropdown from "../dropdown";
import Search from "../search";
import { paths } from "../../routes/paths";
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
    return (
        <nav className="w-full flex flex-row justify-around items-center bg-white p-4">
            <div className="flex flex-row gap-8 justify-center items-center">
                <img src="assets/images/lla_logo.png" alt="" draggable={false}/>
                <Link to={paths.home} className="text-black border-b-[3px] w-[94px] text-center p-1 border-b-violet-700 font-bold text-base">Home</Link>
                <Dropdown name="Cómo fiscalizar">
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
                        <Link to={paths.home} className="text-black font-semibold text-base">
                            Trampas comunes
                        </Link>
                    </li>
                    <li>
                        <Link to={paths.home} className="text-black font-semibold text-base">
                            Boletas y documentos válidos
                        </Link>
                    </li>
                    <li>
                        <Link to={paths.home} className="text-black font-semibold text-base">
                            Cuándo, cómo y dónde denunciar
                        </Link>
                    </li>
                </Dropdown>
            </div>
            <Search></Search>
        </nav>
    )
}

export default Navbar;