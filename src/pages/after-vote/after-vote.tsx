import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { paths } from "../../routes/paths";
import { Link } from "react-router-dom";
import "./styles.css";
import {ExpandableCard, ExpandableCardItem} from "../../components/expandable-card";
import ExpandableItem from "../../components/expandable-item";

const AfterVote = () => {
  return (
	<main id="root">
		<Navbar />
		<header>
			<section id="hero" className="flex flex-col justify-center items-center gap-8 w-full relative">
				<div className="flex flex-col gap-11 mt-32 mb-44">
					<h3 className="text-black font-bold text-2xl text-center">Cómo fiscalizar</h3>
					<h1 className="text-black font-bold text-6xl text-center">El paso a paso</h1>
				</div>
				<img src="assets/images/hero_img_var2.png" alt="" id="hero-bg" className="absolute w-full h-full object-cover -z-10" />
			</section>
		</header>
        <section className="flex flex-col justify-center items-center">
            <div className="w-[1200px]">
                <div className="flex flex-row justify-center w-full border-b-2 p-4 gap-4 border-black">
                    <Link to={paths.beforeVote} className="p-2 text-black rounded">Antes de la votación</Link>
                    <Link to={paths.duringVote} className="p-2 text-black rounded">Durante la votación</Link>
                    <Link to={paths.afterVote} className="bg-brand p-2 text-white rounded">Después de la votación</Link>
                </div>
                {/* first part */}
                <div className="flex flex-col gap-8 w-full">
                    <div className="w-full">
                        <div className="flex flex-col gap-4">
                            <h2 className="font-bold text-[1.9rem]">Durante la votación</h2>
                            <h3 className="font-bold text-2xl">Apertura del comicio</h3>
                        </div>
                        <ExpandableCard imgSrc="assets/images/close-pane.png" title="Cierre de comicio" subtitle="A partir de las 18 hs">
                            <ExpandableCardItem 
                                imgSrc="assets/resources/image532.png"
                                title="Clausura del acto electoral"
                                description="A las 18 hs se procederá al cierre de la votación. Este periodo puede extenderse si quedan votantes dentro del establecimiento haciendo fila para votar en la mesa. Las autoridades de seguridad cerrarán las puertas de la escuela dando por finalizado la votación."
                            />
                            <ExpandableCardItem 
                                imgSrc="assets/resources/image539.png"
                                title="Comando general electoral: cierre de mesa"
                                description="Retirado el último elector se procede al cierre de la mesa.  Confeccionar un acta de cierre donde completará los datos solicitados y firmarán las autoridades y fiscales."
                            />
                            <ExpandableCardItem 
                                imgSrc="assets/resources/image422.png"
                                title="Inicio de escrutinio"
                                description="Para dar inicio al escrutinio se debe despejar el lugar donde se realizará la apertura de la urna. Si es el cuarto oscuro se retirarán las boletas oficiales que hayan quedado sin usar. Dejando una mesa completamente libre."
                            />
                            <ExpandableCardItem 
                                imgSrc=""
                                title="Apertura y conteo"
                                description="SOLO LAS AUTORIDADES DE MESA PUEDEN INTERVENIR EN LA APERTURA Y CONTEO. NO PUDIENDO CUALQUIER OTRA PERSONA INTERVENIR EN EL MISMO Y SOLO SERÁN OBSERVADORES. A veces es posible que las autoridades soliciten ayuda de los fiscales de mesa, pero NO ESTÁ PERMITIDO INTERVENCIÓN DE OTRAS PERSONAS."
                            />
                            <ExpandableCardItem 
                                imgSrc="assets/resources/image242.png"
                                title="Escrutinio de mesa"
                                description="Al cierre las autoridades procederán a contar la cantidad de personas que votaron de acuerdo al padrón especial del presidente de mesa. Cantidad de electores que debe coincidir con la cantidad de votantes del patrón del fiscal o planilla de votantes."
                            />
                            <ExpandableCardItem 
                                imgSrc="assets/resources/image533.png"
                                title="Apertura de la urna"
                                description="Se procederá a abrir la urna (previo a retirar todas las boletas del cuarto oscuro) y se contarán los sobres que deberán coincidir con la cantidad de votantes. Estos sobres sacados de las urnas DEBEN tener la firma de presidente, auxiliar y fiscales de mesa."
                            />
                            <ExpandableCardItem 
                                imgSrc="assets/resources/image922.png"
                                title="Apertura de sobre por sobre"
                                description="Coincidiendo lo anterior se procederá a abrir sobre por sobre, de a uno debiendo exhibir el contenido del sobre  y clasificar ese voto en positivo , nulo, blanco o recurrido."
                            />
                            <ExpandableCardItem 
                                imgSrc=""
                                title="Apertura de sobre por sobre"
                                description="Coincidiendo lo anterior se procederá a abrir sobre por sobre, de a uno debiendo exhibir el contenido del sobre  y clasificar ese voto en positivo , nulo, blanco o recurrido."
                            />
                        </ExpandableCard>
                    </div>
                </div>
                    {/* second part */}
                    <div className="w-full mt-8">
                    <h2 className="font-bold text-[1.9rem] mb-14">¿Quienes pueden votar?</h2>
                    <ExpandableItem title="Voto positivo" subtitle="Solo durante el escrutinio">
                        <div className="grid grid-rows-1 grid-cols-[20em_auto] gap-4">
                            <p>
                                Un voto es afirmativo cuando hay boleta oficializada donde se puede leer el número de lista y partido.
                                C.E.N. Artículo 101 - Procedimiento. Calificación de los sufragios
                            </p>
                            <div className="flex flex-row gap-4">
                                <div>
                                    <img className="relative bg-[#F0F0F0] p-4 rounded-2xl" src="assets/resources/image5302.png" alt="" />
                                </div>
                                <div>
                                    <img className="relative bg-[#F0F0F0] p-4 rounded-2xl" src="assets/resources/image5030.png" alt="" />
                                </div>
                                <div>
                                    <img className="relative bg-[#F0F0F0] p-4 rounded-2xl" src="assets/resources/image5322.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </ExpandableItem>
                    <ExpandableItem title="Voto en blanco" subtitle="Solo durante el escrutinio">
                    <div className="grid grid-rows-1 grid-cols-2 gap-4">                     
                        <p>
                            es el voto en cuyo sobre viene vacío o contiene un papel de cualquier color sin leyenda.
                            C.E.N. Artículo 101 - Procedimiento. Calificación de los sufragios
                        </p>
                        <div>
                            <img className="relative bg-[#F0F0F0] p-4 rounded-2xl" src="assets/resources/image5430.png" alt="" />
                        </div>
                    </div>
                    </ExpandableItem>
                    <ExpandableItem title="Voto nulo" subtitle="Solo durante el escrutinio">
                        <div className="grid grid-rows-1 grid-cols-[20em_auto] gap-4">
                            <p>
                                El voto es nulo si: <br />
                                - Dentro del sobre hay boletas no oficializadas<br />
                                - Dentro del sobre hay objetos extraños diferentes a las boletas oficializadas<br />
                                - Si hay votos de agrupaciones diferentes para las mismas categorías de cargos en disputa.<br />
                                - Si la boleta tiene roto el encabezado y no puede leerse el número de lista, agrupación y cargos.<br />
                                - Si la boleta tiene inscripciones o leyendas (es válido si solamente tiene algún nombre tachado, pero no si tiene otra inscripción o leyenda). Art. 101 CE
                                <br />
                                <br />
                                Los votos nulos van a la urna dentro de sus sobres con la leyenda nulo . <b>C.E.N. Artículo 101 - Procedimiento. Calificación de los sufragios</b>
                            </p>
                            <div className="flex flex-row gap-4">
                                <div>
                                    <img className="relative bg-[#F0F0F0] p-4 rounded-2xl" src="assets/resources/foto305.png" alt="" />
                                </div>
                                <div>
                                    <img className="relative bg-[#F0F0F0] p-4 rounded-2xl" src="assets/resources/foto343.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </ExpandableItem>
                    <ExpandableItem title="Voto recurrido" subtitle="Solo durante el escrutinio">
                        <div className="grid grid-rows-1 grid-cols-2 gap-4">
                            <p>
                                Los votos recurridos son aquellos cuya validez o nulidad fuere cuestionada por algún fiscal presente en la mesa. El fiscal deberá fundamentar su pedido y expresar en forma concreta las causas del mismo. Deberá incorporar sus datos, domicilio y partido político por el que fiscaliza en el formulario correspondiente. Ese voto se anotará en el acta como "voto recurrido" y será la Justicia Electoral, quien decidirá sobre su validez o nulidad en el escrutinio definitivo.
                                <br />
                                Este caso se da cuando a nuestro criterio un voto es válido y el presidente de mesa lo considera nulo, o en el caso inverso, cuando consideramos que el voto es nulo y el presidente lo considera válido. En tal caso debemos recurrir el voto para que su validez o nulidad sea revisada por la Junta electoral.
                                <br />
                                <br />
                                <b>C.E.N. Artículo 101 - Procedimiento. Calificación de los sufragios</b>
                            </p>
                            <div>
                                <img className="relative bg-[#F0F0F0] p-4 rounded-2xl" src="assets/resources/image200.png" alt="" />
                            </div>
                        </div>
                    </ExpandableItem>
                    <ExpandableItem title="Voto de identidad impugnada" subtitle="No se abre el sobre">
                        <p>
                            solo en votación Ya explicado anteriormente                         
                        </p>
                    </ExpandableItem>
                </div>
            </div>
            <div className="w-full p-8 bg-violet-50 mt-8 flex flex-row justify-center items-center">
                <div className="grid grid-rows-1 grid-cols-2 pl-40 pr-40 gap-20 place-content-center place-items-center">
                    <p className="text-2xl">
                        Completado el conteo se completa el <b>ACTA DE ESCRUTINIO</b> donde figuran los votos para cada partido, siendo lo ideal utilizar 3 digitos para evitar modificación de números a posteriori, votos en blanco, nulos, etc. Firma presidente, auxiliar y fiscales. <b>SI ES POSIBLE, CON DISCRECIÓN, SERÍA BUENO QUE EL FISCAL PUDIERA TOMAR FOTO DEL ACTA DE ESCRUTINIO.</b> 
                    </p>
                    <div className="bg-white p-8 rounded-2xl">
                        <img src="assets/resources/foto3540.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
		<Footer></Footer>
	</main>
  );
};

export default AfterVote;
