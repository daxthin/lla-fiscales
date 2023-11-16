import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ExpandableCard from "../../components/expandable-card";
import { paths } from "../../routes/paths";
import "./styles.css";

const BeforeVote = () => {
  return (
	<main id="root">
		<Navbar />
		<header>
			<section id="hero" className="flex flex-col justify-center items-center gap-8 w-full relative">
				<div className="flex flex-col gap-11 mt-32 mb-44">
					<h3 className="text-black font-bold text-2xl text-center">Cómo fiscalizar</h3>
					<h1 className="text-black font-bold text-6xl text-center">El paso a paso</h1>
				</div>
				<img src="assets/hero_img_var2.png" alt="" id="hero-bg" className="absolute w-full h-full object-cover -z-10" />
			</section>
		</header>
        <section className="flex flex-col justify-center items-center">
            <div className="w-3/4">
                <div className="flex flex-row justify-center w-full border-b-2 p-4 gap-4 border-black">
                    <a href={paths.beforeVote} className="bg-brand p-2 text-white rounded">Antes de la votación</a>
                    <a href={paths.duringVote} className="p-2 text-black rounded">Durante la votación</a>
                    <a href={paths.afterVote} className="p-2 text-black rounded">Después de la votación</a>
                </div>
                <div className="mt-8 flex flex-col items-start justify-center w-full">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-[1.9rem]">Antes de la votación</h2>
                        <p>Te recomendamos algunos de los siguientes pasos a tener en cuenta antes del proceso de votación y llegada al colegio.</p>
                    </div>
                    <ExpandableCard>
                        <div className="border-b border-black pl-40 pr-40 pb-8 pt-8 justify-center items-center">
                            <h3 className="font-normal text-2xl">Primer contacto con los fiscales</h3>
                            <p>
                                Tomar contacto antes de la elección, de ser posible, con el/los fiscal/es general/es para coordinar previamente. O en su defecto tener contacto con el coordinador de fiscales de la zona.
                            </p>
                        </div>
                        <div className="border-b border-black pl-40 pr-40 pb-8 pt-8 justify-center items-center">
                            <h3 className="font-normal text-2xl">Planilla de control de votantes</h3>
                            <p>
                                Llevar Planilla de Control de Votantes  (ver en documentos útiles).
                            </p>
                        </div>
                        <div className="border-b border-black pl-40 pr-40 pb-8 pt-8 justify-center items-center">
                            <h3 className="font-normal text-2xl">Verificar la presencia de AFICHES PARTIDOS</h3>
                            <p>
                                Verificar que en la entrada o en el interior de la escuela o en el interior del aula que oficia de mesa NO HAYA afiches partidarios o de propaganda política o cualquier cosa que pueda inducir el voto (imágenes de Perón o Evita por ejemplo). Se deberá comunicar al Delegado de la Junta Electoral para que esta propaganda sea removida.
                            </p>
                        </div>
                        <div className="border-b border-black pl-40 pr-40 pb-8 pt-8 justify-center items-center">
                            <h3 className="font-normal text-2xl">Llevar DNI y celular</h3>
                            <p>
                                Llevar DNI y llevar cargador de teléfono.
                            </p>
                        </div>
                        <div className="border-b border-black pl-40 pr-40 pb-8 pt-8 justify-center items-center">
                            <h3 className="font-normal text-2xl">Llegar temprano : antes de la 7 am</h3>
                            <p>
                                Llegar temprano a la escuela. Se recomienda llegar a las 7 am para tener tiempo de identificar participantes, lugares, etc.
                            </p>
                        </div>
                        <div className="border-b border-black pl-40 pr-40 pb-8 pt-8 justify-center items-center">
                            <h3 className="font-normal text-2xl">Identificar al fiscal general del partido</h3>
                            <p>
                                Identificar fiscal general del partido quien entregará el poder emitido por LLA para el fiscal de mesa que deberá ser presentado ante las autoridades de mesa.                           
                            </p>
                        </div>
                        <div className="border-b border-black pl-40 pr-40 pb-8 pt-8 justify-center items-center">
                            <h3 className="font-normal text-2xl">Tomar buena ubicación de la silla</h3>
                            <p>
                                De ser posible, si no está el auxiliar del presidente, tomar ubicación en la silla al lado del presidente de mesa para poder ir siguiendo el control de documentos de los votantes.                        
                            </p>
                        </div>
                        <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                            <img src="assets/images/foto21.png" alt="" />
                            <div>
                                <h3 className="font-normal text-2xl">Solicitar copia de padrón</h3>
                                <p>
                                    Solicitar a la autoridad de mesa la copia del padrón. ¿Qué pasa si la autoridad de mesa no tiene copia del padrón para el fiscal LLA? Solución a ese problema: Sacar fotos al PADRÓN DE PARED de la mesa asignada (este afiche viene con la urna y elementos). El fiscal sacará varias fotos de ese padrón para poder tener la información de votantes de la mesa e irá anotando en un papel el nro de orden que votó llevando conjuntamente con la planilla control de votantes. (foto 2)                            
                                </p>
                            </div>
                        </div>
                        <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                        <img src="assets/images/foto31.png" alt="" />
                            <div>
                                <h3 className="font-normal text-2xl">Cuarto oscuro</h3>
                                <p>
                                    Preparación del cuarto oscuro
                                </p>
                            </div>
                        </div>
                        <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                            <img src="assets/images/foto41.png" alt="" />
                            <div>
                                <h3 className="font-normal text-2xl">Habilitación</h3>
                                <p>
                                    Habilitación del cuarto oscuro 
                                </p>
                            </div>
                        </div>
                        <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                            <img src="assets/images/foto161.png" alt="" />
                            <div>
                                <h3 className="font-normal text-2xl">Verificar que las boletas SEAN LAS OFICIALES</h3>
                                <p>
                                    Verificar siempre que sean todas boletas oficializadas. Fecha 19 Noviembre 2023 y Fecha 22 Octubre 2023 Exp 7574-2023 31-oct-2023 link a Exp 7574-2023 31-oct-2023.pdf (autorización Justicia Nacional Electoral sobre uso de boletas) 
                                </p>
                            </div>
                        </div>
                        <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                            <img src="assets/images/foto51.png" alt="" />
                            <div>
                                <h3 className="font-normal text-2xl">Cuarto oscuro accesible</h3>
                                <p>
                                    Verificar siempre que sean todas boletas oficializadas. Fecha 19 Noviembre 2023 y Fecha 22 Octubre 2023 Exp 7574-2023 31-oct-2023 link a Exp 7574-2023 31-oct-2023.pdf (autorización Justicia Nacional Electoral sobre uso de boletas) 
                                </p>
                            </div>
                        </div>
                        <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                            <img src="assets/images/foto61.png" alt="" />
                            <div>
                                <h3 className="font-normal text-2xl">Habilitación de la urna de votación</h3>
                                <p>
                                    Habilitación de URNA. La urna deberá estar abierta y vacía a la vista de todos los fiscales. Luego se procede a cerrar la misma y colocar las fajas autoadhesivas sin dejar ninguna ranura posible para introducir o extraer sobres salvo la ranura de voto. Estas fajas deberán ser firmadas por las autoridades y fiscales. Foto6. Este proceso se hace cerca de las 8 hs. Ver Trampa URNA EMBARAZADA
                                </p>
                            </div>
                        </div>
                        <div className="border-b border-black pl-40 pr-40 pb-8 pt-8 justify-center items-center">
                            <h3 className="font-normal text-2xl">Ordenar las boletas y verificar cartelería por ecima</h3>
                            <p>
                                Deberán ordenar las boletas por número de menor a mayor y de izquierda a derecha. Es importante verificar que en el cuarto oscuro no se encuentre cartelería que pueda interferir en la voluntad del/ de la elector/a y colocar en lugares visibles la información sobre de disposiciones y delitos electorales. Arts. 76 y 82 C.E.N.
                            </p>
                        </div>
                    </ExpandableCard>
                </div>
            </div>
        </section>
		<Footer></Footer>
	</main>
  );
};

export default BeforeVote;
