const Footer = () => {
    return (
        <footer className="bg-black flex flex-row items-center justify-center md:justify-between pb-28 pt-32 pr-36 pl-36 mt-20 gap-8 self-end flex-wrap">
            <h2 className="text-white font-bold text-base text-center">Fiscales La Libertad Avanza</h2>
            <div className="flex flex-row gap-4 justify-center items-center">
                <a href="">
                    <img src="assets/images/Instagram.png" alt="" />
                </a>
                <a href="">
                    <img src="assets/images/Facebook.png" alt="" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;