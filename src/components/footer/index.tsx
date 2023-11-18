import { useMediaQuery } from "react-responsive";

const Footer = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

    const currentYear = (): React.ReactNode => {
        const currentYear = new Date().getFullYear();

        return (
            <p className="font-light text-xl text-center mt-2">&copy; {currentYear} La Libertad Avanza</p>
        )
    }

    return (
        <footer className={`text-white flex bg-black ${isTabletOrMobile ? 'h-[200px] w-full flex-col place-content-center' : 'justify-between pb-16 pt-16 pr-36 pl-36 mt-20 gap-8 self-end flex-wrap'}`}>
            <h2 className="font-bold text-xl text-center mt-2 mb-8">Fiscales La Libertad Avanza</h2>
            <div className="flex flex-row gap-4 justify-center items-center mb-2">
                <a href="">
                    <img 
                        src="assets/images/Instagram.png" 
                        alt=""
                        className="w-10 h-10"
                    />
                </a>
                <a href="">
                    <img 
                        src="assets/images/Facebook.png" 
                        alt=""
                        className="w-10 h-10"
                    />
                </a>
            </div>
            {currentYear()}
        </footer>
    )
}

export default Footer;