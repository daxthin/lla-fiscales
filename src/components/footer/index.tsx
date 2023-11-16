const Footer = () => {
    return (
        <footer className="bg-black flex flex-row items-center justify-between pb-28 pt-32 pr-36 pl-36 mt-20 self-end">
            <h2 className="text-white font-bold text-base">Fiscales La Libertad Avanza</h2>
            <div className="flex flex-row gap-4">
                <a href="">
                    <img src="public/assets/images/Instagram.png" alt="" />
                </a>
                <a href="">
                    <img src="public/assets/images/Facebook.png" alt="" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;