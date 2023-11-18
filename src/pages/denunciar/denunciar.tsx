import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./styles.css";
import { Hero } from "../../components/hero";
import Button from "../../components/button";

const Denunciar = () => {
  return (
	<main id="root">
		<Navbar />
		<header>
            <Hero 
				title="Cuándo, cómo y dónde denunciar" 
				imgSrc="assets/images/hero_img_var2.png"
			/>
		</header>
        <section className="flex flex-col justify-center items-center">
            <div className="w-[1200px] mt-16 flex flex-col gap-10">
                <h1 className="font-bold text-[1.9rem]">Cuándo, cómo y dónde denunciar</h1>

                <div className="grid grid-rows-1 grid-cols-2 gap-20">
                        <div className="mt-8">
                            <p>
                                Inicialmente cualquier irregularidad antes, durante o después del comicio debe ser realizada ante el <b>REPRESENTANTE DE LA JUNTA ELECTORAL</b> al momento de suceder el evento (no espere horas para hacer su denuncia). Busque a esta persona, comuníquele el suceso que está en contra al normal funcionamiento (una persona que no la dejan votar pese a estar en el padrón y correctamente identificada, personas extrañas en el recinto, roturas de boletas, amenazas, etc.).
                            </p>
                            <h2 className="text-lg font-bold">OPCIONES</h2>
                            <ul className="list-disc p-8">
                                <li>
                                    Para hacer la denuncia pida al <b>representante hacer un ACTA</b> donde ponga de manera breve y clara las circunstancias del suceso. <b>El ACTA</b> debe estar firmado por Ud., el representante de la Junta Electoral, un ciudadano si el problema involucró un votante, las autoridades de mesa. <b>PIDA COPIA PARA UD</b>. Identifique a las personas por nombre/apellido y nro de DNI.
                                </li>
                                <li>
                                    Otra opción válida para hacer una denuncia en caso de considerarlo grave son las <b>Fiscalías Electorales</b>. Corresponde destacar que además tiene la potestad de llevar adelante investigaciones relacionadas con los delitos y contravenciones que pudieran surgir de los aludidos controles patrimoniales partidarios. Del mismo modo, es función de esta Fiscalía Electoral investigar los delitos y contravenciones que en materia electoral se cometan, como todas aquellas acciones u omisiones que, en mayor o en menor medida, lesionen o pongan en peligro el adecuado desarrollo de la función electoral, y que atenten contra los procesos electorales en generales y/o las características del voto, en particular, el cual debe ser universal, libre, directo, personal, secreto e intransferible.
                                </li>
                            </ul>
                        </div>
                        <div>
                        <div className="bg-[#F8F8F8] h-[800px] w-[800px] rounded-2xl flex flex-row justify-center items-center">
                            <img src="assets/resources/image422.png" alt=""  className="h-full w-full"/>
                        </div>
                    </div>
                </div>

                <Button isLink href={'https://www.padron.gov.ar/cne_denuncias/'}>Quiero Denunciar</Button>

            </div>
        </section>
		<Footer></Footer>
	</main>
    );
};

export default Denunciar;
