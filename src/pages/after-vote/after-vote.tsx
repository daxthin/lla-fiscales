import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { paths } from "../../routes/paths";
import { Link } from "react-router-dom";
import "./styles.css";
import ExpandableCard from "../../components/expandable-card";
import AccordionItem from "../../components/accordionItem";

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
            <div className="w-[980px]">
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
                        <ExpandableCard imgSrc="" title="Cierre de comicio" subtitle="A partir de las 18 hs">
                            <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                                <img src="assets/resources/foto51.png" alt="" />
                                <div>
                                    <h3 className="font-normal text-2xl">Clausura del acto electoral</h3>
                                    <p>
                                        A las 18 hs se procederá al cierre de la votación. Este periodo puede extenderse si quedan votantes dentro del establecimiento haciendo fila para votar en la mesa. Las autoridades de seguridad cerrarán las puertas de la escuela dando por finalizado la votación. 
                                    </p>
                                </div>
                            </div>
                            <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                                <img src="assets/resources/foto51.png" alt="" />
                                <div>
                                    <h3 className="font-normal text-2xl">Comando general electoral: cierre de mesa</h3>
                                    <p>
                                        Retirado el último elector se procede al cierre de la mesa. Confeccionar un acta de cierre donde completará los datos solicitados y firmarán las autoridades y fiscales. 
                                    </p>
                                </div>
                            </div>
                            <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                                <img src="assets/resources/foto51.png" alt="" />
                                <div>
                                    <h3 className="font-normal text-2xl">Escrutinio de mesa</h3>
                                    <p>
                                        Al cierre las autoridades procederán a contar la cantidad de personas que votaron de acuerdo al padrón especial del presidente de mesa. Cantidad de electores que debe coincidir con la cantidad de votantes del patrón del fiscal o planilla de votantes.
                                    </p>
                                </div>
                            </div>
                            <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                                <img src="assets/resources/foto51.png" alt="" />
                                <div>
                                    <h3 className="font-normal text-2xl">Antes de la votación</h3>
                                    <p>
                                        Se procederá a abrir la urna (previo a retirar todas las boletas del cuarto oscuro) y se contarán los sobres que deberán coincidir con la cantidad de   votantes. Estos sobres sacados de las urnas DEBEN tener la firma de presidente, auxiliar y fiscales de mesa.                                    
                                    </p>
                                </div>
                            </div>
                            <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                                <img src="assets/resources/foto51.png" alt="" />
                                <div>
                                    <h3 className="font-normal text-2xl">Apertura de sobre por sobre</h3>
                                    <p>
                                        Coincidiendo lo anterior se procederá a abrir sobre por sobre, de a uno debiendo exhibir el contenido del sobre y clasificar ese voto en positivo , nulo, blanco o recurrido.
                                    </p>
                                </div>
                            </div>
                            <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                                <img src="assets/resources/foto51.png" alt="" />
                                <div>
                                    <h3 className="font-normal text-2xl">Cuento de votos</h3>
                                    <p>
                                        Una vez separadas todas las boletas por partido se procederá a contar los votos.                                   
                                    </p>
                                </div>
                            </div>
                            <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                                <img src="assets/resources/foto51.png" alt="" />
                                <div>
                                    <h3 className="font-normal text-2xl">Inicio de la votación: autoridades de mesa</h3>
                                    <p>
                                        Inicio de la votación por parte de las autoridades de mesa y fiscales partidarios si figuran en el padrón. EN NINGÚN CASO SE PODRÁ AGREGAR A MANO EN EL PADRÓN A UN VOTANTE.
                                    </p>
                                </div>
                            </div>
                        </ExpandableCard>
                    </div>
                </div>
                    {/* second part */}
                    <div className="w-full mt-8">
                    <h2 className="font-bold text-[1.9rem] mb-14">¿Quienes pueden votar?</h2>
                    <AccordionItem title="Voto positivo">
                        <p>
                            Todas aquellas personas que estén en el padrón aunque hayan diferencias respecto a los datos impresos en el padrón.
                            <br />
                            <br />
                            Personas que presentar documentos físicos sin fotografía y en ese caso las autoridades de mesa deberán preguntar sobre los datos del documento.
                            <br />
                            <br />
                            Personas que presentar documentos físicos sin fotografía y en ese caso las autoridades de mesa deberán preguntar sobre los datos del documento.
                            <br />
                            <br />
                            Si no coincidiese la fotografía del padrón con la del documento 
                            <br />
                            <br />
                            Si tuviera DNI cuyo ejemplar sea igual o posterior al que figura en el padrón (ver gráfico “cómo corroborar el tipo de ejemplar”
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Voto en blanco">
                        <p>
                            No figuran inscriptos en el padrón. En ningún caso se podrá agregar una persona a mano en el padrón.                                
                            <br />
                            <br />
                            No exhibiera documento habilitante físico. En ningún caso se aceptará la votación de una persona que presente un documento en forma digital                                <br />
                            <br />
                            Si se presenta una persona con un documento anterior al que figura en el padrón (ver en el gráfico “cómo corroborar el tipo de ejemplar”).                                <br />
                            <br />
                            Si no coincidiese la fotografía del padrón con la del documento 
                            <br />
                            <br />
                            Quienes figuran en el padrón con un sello rojo línea anulada o inhabilitada                            
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Voto nulo">
                        <p>
                            No figuran inscriptos en el padrón. En ningún caso se podrá agregar una persona a mano en el padrón.                                
                            <br />
                            <br />
                            No exhibiera documento habilitante físico. En ningún caso se aceptará la votación de una persona que presente un documento en forma digital                                <br />
                            <br />
                            Si se presenta una persona con un documento anterior al que figura en el padrón (ver en el gráfico “cómo corroborar el tipo de ejemplar”).                                <br />
                            <br />
                            Si no coincidiese la fotografía del padrón con la del documento 
                            <br />
                            <br />
                            Quienes figuran en el padrón con un sello rojo línea anulada o inhabilitada                            
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Voto recurrido">
                        <p>
                            No figuran inscriptos en el padrón. En ningún caso se podrá agregar una persona a mano en el padrón.                                
                            <br />
                            <br />
                            No exhibiera documento habilitante físico. En ningún caso se aceptará la votación de una persona que presente un documento en forma digital                                <br />
                            <br />
                            Si se presenta una persona con un documento anterior al que figura en el padrón (ver en el gráfico “cómo corroborar el tipo de ejemplar”).                                <br />
                            <br />
                            Si no coincidiese la fotografía del padrón con la del documento 
                            <br />
                            <br />
                            Quienes figuran en el padrón con un sello rojo línea anulada o inhabilitada                            
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Voto de identidad impugnada">
                        <p>
                            No figuran inscriptos en el padrón. En ningún caso se podrá agregar una persona a mano en el padrón.                                
                            <br />
                            <br />
                            No exhibiera documento habilitante físico. En ningún caso se aceptará la votación de una persona que presente un documento en forma digital                                <br />
                            <br />
                            Si se presenta una persona con un documento anterior al que figura en el padrón (ver en el gráfico “cómo corroborar el tipo de ejemplar”).                                <br />
                            <br />
                            Si no coincidiese la fotografía del padrón con la del documento 
                            <br />
                            <br />
                            Quienes figuran en el padrón con un sello rojo línea anulada o inhabilitada                            
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Voto de identidad impugnada">
                        <p>
                            No figuran inscriptos en el padrón. En ningún caso se podrá agregar una persona a mano en el padrón.                                
                            <br />
                            <br />
                            No exhibiera documento habilitante físico. En ningún caso se aceptará la votación de una persona que presente un documento en forma digital                                <br />
                            <br />
                            Si se presenta una persona con un documento anterior al que figura en el padrón (ver en el gráfico “cómo corroborar el tipo de ejemplar”).                                <br />
                            <br />
                            Si no coincidiese la fotografía del padrón con la del documento 
                            <br />
                            <br />
                            Quienes figuran en el padrón con un sello rojo línea anulada o inhabilitada                            
                        </p>
                    </AccordionItem>
                </div>
            </div>
            <div className="w-full p-8 bg-violet-50 mt-8 flex flex-row justify-center items-center">
                <div className="grid grid-rows-1 grid-cols-2 pl-40 pr-40 place-content-center place-items-center">
                    <p className="text-lg">
                        Completado el conteo se completa el ACTA DE ESCRUTINIO donde figuran los votos para cada partido, siendo lo ideal utilizar 3 digitos para evitar modificación de números a posteriori, votos en blanco, nulos, etc. Firma presidente, auxiliar y fiscales. SI ES POSIBLE, CON DISCRECIÓN, SERÍA BUENO QUE EL FISCAL PUDIERA TOMAR FOTO DEL ACTA DE ESCRUTINIO. 
                    </p>
                    <div className="bg-white p-8 rounded-2xl">
                        <img src="assets/resources/image453.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
		<Footer></Footer>
	</main>
  );
};

export default AfterVote;
