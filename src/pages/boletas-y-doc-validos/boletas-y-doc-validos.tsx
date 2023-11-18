import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./styles.css";
import BoletasYdocTable from "../../components/boletas-y-doc-table";
import CertEscrutinio from "../../components/cert-escrutinio-table";
import { Hero } from "../../components/hero";

const BolestasYDocValidos = () => {
    return (
        <main id="root">
            <Navbar />
            <header>
                <Hero 
                    title="Boletas y documentos válidos" 
                    imgSrc="assets/images/hero_img_var2.png"
                />
            </header>
            <section className="flex flex-col justify-center items-center">
                <div className="w-full md:w-[1200px] mt-16 flex flex-col gap-10 p-4">
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
