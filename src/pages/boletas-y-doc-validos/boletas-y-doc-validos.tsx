import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./styles.css";
import BoletasYdocTable from "../../components/boletas-y-doc-table";
import CertEscrutinio from "../../components/cert-escrutinio-table";

const BolestasYDocValidos = () => {
    return (
        <main id="root">
            <Navbar />
            <header>
                <section id="hero" className="flex flex-col justify-center items-center gap-8 w-full relative">
                    <div className="flex flex-col gap-11 mt-32 mb-44">
                        <h3 className="text-black font-bold text-2xl text-center">Cómo fiscalizar</h3>
                        <h1 className="text-black font-bold text-6xl text-center">Boletas y documentos válidos</h1>
                    </div>
                    <img src="assets/images/hero_img_var2.png" alt="" id="hero-bg" className="absolute w-full h-full object-cover -z-10" />
                </section>
            </header>
            <section className="flex flex-col justify-center items-center">
                <div className="w-[1200px] mt-16 flex flex-col gap-10">
                    <h1 className="font-bold text-[1.9rem]">Boletas y documentos válidos</h1>
                    <h2 className="font-bold text-2xl">En esta sección encontrará las boletas válidas y documentos vigentes para ser usadas en el ballotage del 19 de Noviembre de 2023</h2>
                    <BoletasYdocTable/>
                    <h1 className="font-bold text-[1.9rem]">Boletas y documentos válidos</h1>
                    <CertEscrutinio/>
                    
                </div>
            </section>
            <Footer></Footer>
        </main>
        );
};

export default BolestasYDocValidos;
