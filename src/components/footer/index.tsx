import { useMediaQuery } from "react-responsive";
import { pathsExternal } from "../../routes/paths";

const Footer = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

    const currentYear = (): React.ReactNode => {
        const currentYear = new Date().getFullYear();

        return (
            <p className="font-light text-xl text-center">&copy; {currentYear} La Libertad Avanza</p>
        )
    }

    return (
        <footer className={`text-white flex bg-black ${isTabletOrMobile ? 'h-[200px] w-full flex-col place-content-center' : 'justify-between pb-16 pt-16 pr-36 pl-36 mt-20 gap-8 self-end flex-wrap'}`}>
            <section className={`flex w-full ${isTabletOrMobile ? 'h-[200px] w-full flex-col place-content-center' : " flex-row gap-4 place-content-center mb-2 justify-between"}`}>
                <h2 className={`font-bold text-center ${isTabletOrMobile ? 'text-xl mb-3' : 'text-2xl'}`}>Fiscales La Libertad Avanza</h2>
                <div className={`flex flex-row gap-4 ${isTabletOrMobile ? 'place-content-center' : ''}`}>
                    <a href="">
                        <img 
                            src="assets/images/instagram.svg" 
                            alt=""
                            className="w-10 h-10 shadow-sm rounded-full"
                        />
                    </a>
                    <a href={pathsExternal.LLA}>
                        <img 
                            src="assets/images/logoLLAAP.svg" 
                            alt="pagina de la APP de la Libertad Avanza"
                            className="w-10 h-10"
                        />
                    </a>
                    <a href="">
                        <img 
                            src="assets/images/facebook.svg" 
                            alt=""
                            className="w-10 h-10"
                        />
                </a>
                </div>
                {currentYear()}
                <div className="flex flex-col justify-center items-center  font-light text-sm text-center">
                    <p>
                        Diseño: <a className="text-indigo-300"  href={pathsExternal.DES1}>@Rosi_Esq </a>
                    </p>
                    <p>
                        Colaboradores: 
                        <a className="text-indigo-300" href={pathsExternal.COL1}> @Daxthin </a>
                        / 
                        <a className="text-indigo-300" href={pathsExternal.COL2}> @LombardiDev</a>
                    </p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;