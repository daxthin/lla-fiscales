import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ExpandableCard from "../../components/expandable-card";
import { paths } from "../../routes/paths";
import "./styles.css";
import { Link } from "react-router-dom";

const CertificadoDeEscrutinio = () => {
  return (
	<main id="root">
		<Navbar />
		<header>
			<section id="hero" className="flex flex-col justify-center items-center gap-8 w-full relative">
				<div className="flex flex-col gap-11 mt-32 mb-44">
					<h3 className="text-black font-bold text-2xl text-center">Cómo fiscalizar</h3>
					<h1 className="text-black font-bold text-6xl text-center">El certificado de escrutinio</h1>
				</div>
				<img src="assets/images/hero_img_var2.png" alt="" id="hero-bg" className="absolute w-full h-full object-cover -z-10" />
			</section>
		</header>
        <section className="flex flex-col justify-center items-center">
            <div className="w-[980px] mt-16 flex flex-col gap-10">
                <h1 className="font-bold text-[1.9rem]">La importancia del certificado de escrutinio</h1>

                <div className="flex flex-col justify-center items-center mt-10">
                    <div className="flex flex-row gap-7 pt-10 pb-10 pl-8 pr-8 bg-[#FFF4F4] border-l-[6px] border-l-[#D64B4B] rounded-lg">
                        <div className="flex flex-col w-20 h-auto">
                            <img src="assets/images/alert-icon.svg" alt="" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#FF0000] font-bold mb-2 text-lg">
                                Aviso importante
                            </span>
                            <p className="font-semibold">
                                Cualquier variación escrita entre esta página y las referencias
                                oficiales del Código Electoral Nacional (C.N.E)/ Cámara Nacional
                                Electoral (C.N.E). Siempre es válidos las referencias oficiales
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#E9E9E9] rounded-2xl flex flex-col shadow-md">
                    <div className="p-8 w-full flex flex-row justify-center items-center">
                        <img src="assets/resources/foto390.png" alt="" />
                    </div>
                    <div className="w-full bg-white pb-16 pl-8 pr-8 pt-6 rounded-b-2xl">
                        <div className="flex flex-row items-center gap-2">
                            <div>
                                <img src="assets/images/askq.png" alt="" />
                            </div>
                            <h3 className="font-bold text-2xl">¿Que pasa luego de realizarse el acta de escrutinio?</h3>
                        </div>
                        <p className="mt-8">Luego de realizarse el ACTA DE ESCRUTINIO el presidente de mesa hará el CERTIFICADO DE ESCRUTINIO original, este documento irá dentro de la urna.</p>
                    </div>
                </div>

                <div className="bg-[#E9E9E9] rounded-2xl flex flex-col shadow-md">
                    <div className="p-8 w-full flex flex-row justify-center items-center">
                        <img src="assets/resources/foto390.png" alt="" />
                    </div>
                    <div className="w-full bg-white pb-16 pl-8 pr-8 pt-6 rounded-b-2xl">
                        <div className="flex flex-row items-center gap-2">
                            <div>
                                <img src="assets/images/askq.png" alt="" />
                            </div>
                            <h3 className="font-bold text-2xl">¿Que pasa luego de realizarse el acta de escrutinio?</h3>
                        </div>
                        <p className="mt-8">Luego de realizarse el ACTA DE ESCRUTINIO el presidente de mesa hará el CERTIFICADO DE ESCRUTINIO original, este documento irá dentro de la urna.</p>
                    </div>
                </div>

                <div className="bg-[#E9E9E9] rounded-2xl flex flex-col shadow-md">
                    <div className="p-8 w-full flex flex-row justify-center items-center">
                        <img src="assets/resources/foto390.png" alt="" />
                    </div>
                    <div className="w-full bg-white pb-16 pl-8 pr-8 pt-6 rounded-b-2xl">
                        <div className="flex flex-row items-center gap-2">
                            <div>
                                <img src="assets/images/askq.png" alt="" />
                            </div>
                            <h3 className="font-bold text-2xl">¿Que pasa luego de realizarse el acta de escrutinio?</h3>
                        </div>
                        <p className="mt-8">Luego de realizarse el ACTA DE ESCRUTINIO el presidente de mesa hará el CERTIFICADO DE ESCRUTINIO original, este documento irá dentro de la urna.</p>
                    </div>
                </div>

                <div className="bg-[#E9E9E9] rounded-2xl flex flex-col shadow-md">
                    <div className="p-8 w-full flex flex-row justify-center items-center">
                        <img src="assets/resources/foto390.png" alt="" />
                    </div>
                    <div className="w-full bg-white pb-16 pl-8 pr-8 pt-6 rounded-b-2xl">
                        <div className="flex flex-row items-center gap-2">
                            <div>
                                <img src="assets/images/askq.png" alt="" />
                            </div>
                            <h3 className="font-bold text-2xl">¿Que pasa luego de realizarse el acta de escrutinio?</h3>
                        </div>
                        <p className="mt-8">Luego de realizarse el ACTA DE ESCRUTINIO el presidente de mesa hará el CERTIFICADO DE ESCRUTINIO original, este documento irá dentro de la urna.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center mt-10">
                    <div className="flex flex-row gap-7 pt-10 pb-10 pl-8 pr-8 bg-[#FFF4F4] border-l-[6px] border-l-[#D64B4B] rounded-lg">
                        <div className="flex flex-col w-20 h-auto">
                            <img src="assets/images/alert-icon.svg" alt="" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#FF0000] font-bold mb-2 text-lg">
                                Aviso importante
                            </span>
                            <p className="font-semibold">
                                si se reemplazo el fiscal debe haber dejado constancia en el acta complementaria a los efectos de que el certificado de escrutinio no sea cuestionado.
                            </p>
                        </div>
                    </div>
                </div>

                <h1 className="font-bold text-[1.9rem]">La importancia del certificado de escrutinio</h1>
                <p>En ese momento termina para el fiscal su día de votación entregándole al fiscal general el CERTIFICADO DE ESCRUTINIO</p>
                <h1 className="font-bold text-[1.9rem]">Frases para dejar asentadas las observaciones en el acta de apertura, complementarias y/o cierre de escrutinio</h1>

                <div className="flex flex-col gap-20 bg-[#F9FAFB] p-8 rounded-2xl">
                    <div className="flex flex-row justify-center items-center">
                        <p>AFILIADO DESIGNADO COMO AUTORIDAD DE MESA:</p>
                        <p>“Se ha observado la actuación del Sr. …… DNI …… como Autoridad de Mesa, que aparece como afiliado a un partido político en el Registro de Afiliados de la C.N.E., violando la Acordada Extraordinaria 129/08 de la C.N.E. y jurisprudencia del fuero electoral.”</p>
                    </div>
                </div>

            </div>
        </section>
		<Footer></Footer>
	</main>
    );
};

export default CertificadoDeEscrutinio;
