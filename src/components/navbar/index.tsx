import Dropdown from "../dropdown";
import Search from "../search";

const Navbar: React.FC = () => {
    return (
        <nav className="w-full flex flex-row justify-around items-center bg-white p-4">
            <div className="flex flex-row gap-8 justify-center items-center">
                <img src="../../public/lla_logo.png" alt="" draggable={false}/>
                <a href="/" className="text-black border-b-[3px] w-[94px] text-center p-1 border-b-violet-700 font-bold text-base">Home</a>
                <Dropdown name="Cómo fiscalizar">
                    <li>
                        <a href="/involved-people" className="text-black font-semibold text-base">
                            Personas que intervienen
                        </a>
                    </li>
                    <li>
                        <a href="/before-vote" className="text-black font-semibold text-base">
                            El paso a paso
                        </a>
                    </li>
                    <li>
                        <a href="/" className="text-black font-semibold text-base">
                            El certificado de Escrutinio
                        </a>
                    </li>
                    <li>
                        <a href="/" className="text-black font-semibold text-base">
                            Trampas comunes
                        </a>
                    </li>
                    <li>
                        <a href="/" className="text-black font-semibold text-base">
                            Boletas y documentos válidos
                        </a>
                    </li>
                    <li>
                        <a href="/" className="text-black font-semibold text-base">
                            Cuándo, cómo y dónde denunciar
                        </a>
                    </li>
                </Dropdown>
            </div>
            <Search></Search>
        </nav>
    )
}

export default Navbar;