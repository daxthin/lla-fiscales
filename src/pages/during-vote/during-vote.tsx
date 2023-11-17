import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { paths } from "../../routes/paths";
import "./styles.css";
import { Link } from "react-router-dom";
import ExpandableCard from "../../components/expandable-card";
import AccordionItem from "../../components/accordionItem";

const DuringVote = () => {
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
                    <Link to={paths.duringVote} className="bg-brand p-2 text-white rounded">Durante la votación</Link>
                    <Link to={paths.afterVote} className="p-2 text-black rounded">Después de la votación</Link>
                </div>
                <div className="mt-8 flex flex-col items-start justify-center w-full">

                    {/* first part */}
                    <div className="flex flex-col gap-8 w-full">
                        <div className="w-full">
                            <div className="flex flex-col gap-4">
                                <h2 className="font-bold text-[1.9rem]">Durante la votación</h2>
                                <h3 className="font-bold text-2xl">Apertura del comicio</h3>
                            </div>
                            <ExpandableCard imgSrc="" title="Apertura del comicio" subtitle="A partir de las 8 de la mañana">
                                <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                                    <img src="assets/resources/foto51.png" alt="" />
                                    <div>
                                        <h3 className="font-normal text-2xl">Apertura del acto electoral</h3>
                                        <p>
                                            Una vez sellada la urna a las 8 hs. se dará inicio al proceso de votación y procederá a elaborar el ACTA DE APERTURA.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                                    <img src="assets/resources/foto51.png" alt="" />
                                    <div>
                                        <h3 className="font-normal text-2xl">Votación: Ranura de la urna</h3>
                                        <p>
                                            Es en extremo recomendable que la urna con la ranura visible para el fiscal para poder observar lo sobres y detectar alguna anomalía. 
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                                    <img src="assets/resources/foto51.png" alt="" />
                                    <div>
                                        <h3 className="font-normal text-2xl">Recordatorio</h3>
                                        <p>
                                            Es aconsejable acordar con el presidente de mesa, para evitar conflictos que terminen en actas de denuncias, la forma en que el fiscal LLA firmará los sobres. Se recomienda que el fiscal no firme (como máximo) más de 5 sobres por tanda (5 de un color, 5 de otro y así alternando). Esto es fundamental para evitar la TRAMPA DE VOTO EN CADENA.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                                    <img src="assets/resources/foto51.png" alt="" />
                                    <div>
                                        <h3 className="font-normal text-2xl">Antes de la votación</h3>
                                        <p>
                                            Es aconsejable acordar con el presidente de mesa, para evitar conflictos que terminen en actas de denuncias, la forma en que el fiscal LLA firmará los sobres. Se recomienda que el fiscal no firme (como máximo) más de 5 sobres por tanda (5 de un color, 5 de otro y así alternando). Esto es fundamental para evitar la TRAMPA DE VOTO EN CADENA.                                        
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                                    <img src="assets/resources/foto51.png" alt="" />
                                    <div>
                                        <h3 className="font-normal text-2xl">Cuarto oscuro accesible</h3>
                                        <p>
                                            Verificar siempre que sean todas boletas oficializadas. Fecha 19 Noviembre 2023 y Fecha 22 Octubre 2023 Exp 7574-2023 31-oct-2023 link a Exp 7574-2023 31-oct-2023.pdf (autorización Justicia Nacional Electoral sobre uso de boletas) 
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b flex gap-20 flex-row border-black pl-40 pr-40 pb-8 pt-8 justify-start items-center">
                                    <img src="assets/resources/foto51.png" alt="" />
                                    <div>
                                        <h3 className="font-normal text-2xl">Quienes votan</h3>
                                        <p>
                                            Inicio de la votación por parte de las autoridades de mesa y fiscales partidarios si figuran en el padrón. EN NINGÚN CASO SE PODRÁ AGREGAR A MANO EN EL PADRÓN A UN VOTANTE.                                       
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
                        <div className="w-full">
                            <h3 className="font-bold text-2xl">El presidente solicita documento al ciudadano. Los documentos válidos para votar son:</h3>
                            <ExpandableCard imgSrc="" title="Quienes votan y primeros pasos" subtitle="Quienes votan y primeros pasos">
                                <div className="border-b border-black pl-40 pr-40 pb-8 pt-8 justify-center items-center">
                                    <h3 className="font-normal text-2xl">Validez de documentación</h3>
                                    <p>
                                        Chequear bien quienes pueden votar.
                                    </p>
                                </div>
                                <div className="border-b border-black pl-40 pr-40 pb-8 pt-8 justify-center items-center">
                                    <h3 className="font-normal text-2xl">DNI válido: ver padrón de mesa</h3>
                                    <p>
                                        El documento válido para votar es el ejemplar que figura en el padrón de la mesa o uno posterior. Si el/la elector/a se presenta con uno anterior al registrado no podrá votar. Esto no es negociable. Art. 86 C.E.N.
                                    </p>
                                </div>
                                <div className="border-b border-black pl-40 pr-40 pb-8 pt-8 justify-center items-center">
                                    <h3 className="font-normal text-2xl">Chequeo del DNI por el Fiscal de mesa</h3>
                                    <p>
                                        De acuerdo con el Art. 89 C.E.N., el presidente debe permitir al fiscal ver el DNI del elector para verificar la identidad. El artículo dice: “Verificación de la identidad del elector. Comprobado que el documento cívico presentado pertenece al mismo elector que aparece registrado como elector, el presidente procederá a verificar la identidad del compareciente con las indicaciones respectivas de dicho documento, oyendo sobre el punto a los fiscales de los partidos”.
                                    </p>
                                </div>
                                <div className="border-b border-black pl-40 pr-40 pb-8 pt-8 justify-center items-center">
                                    <h3 className="font-normal text-2xl">Protocolos de chequeo</h3>
                                    <p>
                                        Tener en cuenta que los protocolos de salud establecidos para la votación (Acordada 83/2021 y otras) no han dejado sin efecto las normas contenidas en el Código Electoral. Todos los derechos consagrados en el Código se encuentran vigentes y se pueden ejercer. Puede observarse el DNI, única forma de constatar la identidad del elector, pueden firmarse los sobres, pueden controlarse las boletas en el cuarto oscuro, con la periodicidad necesaria
                                    </p>
                                </div>
                            </ExpandableCard>
                            
                        </div>
                    </div>

                    {/* second part */}
                    <div className="w-full mt-8">
                        <h2 className="font-bold text-[1.9rem] mb-14">¿Quienes pueden votar?</h2>
                        <AccordionItem title="Quienes pueden votar">
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
                        <AccordionItem title="Quienes NO pueden votar">
                            <p>
                                No figuran inscriptos en el padrón. En ningún caso se podrá agregar una persona a mano en el padrón.                                <br />
                                <br />
                                No exhibiera documento habilitante físico. En ningún caso se aceptará la votación de una persona que presente un documento en forma digital                                <br />
                                <br />
                                Si se presenta una persona con un documento anterior al que figura en el padrón (ver en el gráfico “cómo corroborar el tipo de ejemplar”).                                <br />
                                <br />
                                Si no coincidiese la fotografía del padrón con la del documento 
                                <br />
                                <br />
                                Quienes figuran en el padrón con un sello rojo línea anulada o inhabilitada                            </p>
                        </AccordionItem>
                    </div>

                    {/* third part */}
                    <div className="w-full border-t border-black flex flex-row justify-center items-center">
                        <div className="bg-purple-100 p-8 rounded-2xl flex flex-row justify-center items-center gap-8 mt-8 w-full">
                            <h3 className="text-purple-700 font-bold text-xl">¿Cómo corroborar el tipo de ejemplar?</h3>
                            <div className="rounded-2xl bg-white p-8">
                                <img src="assets/resources/foto101.png" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* fourt part */}
                    <div className="w-full mt-8">
                        <AccordionItem title="Voto de identidad impugnada">
                            <div className="flex flex-col mb-8">
                                <h2 className="font-medium text-2xl">solo en la votación antes de ingresar el sobre a la urna.</h2>
                                <div className="grid grid-cols-2 grid-rows-1 gap-8 mt-4">
                                    <p>
                                        ¿Qué pasa si no se puede identificar correctamente a un ciudadano?
                                        <br />
                                        <br />
                                        Si la identidad de un/a elector/a generara dudas a las autoridades de mesa o a los/as fiscales y éstas no pudieran ser resueltas en la mesa (por ejemplo el presidente puede, a sugerencia de los fiscales, hacer preguntas sobre los datos contenidos en el padrón) el/la elector/a podrá votar bajo el siguiente procedimiento: se le otorgarán dos sobres; el sobre de votación y el sobre cubierta de voto impugnado donde constarán los datos del/ de la elector/a impugnado/a, su huella dactilar y las razones sostenidas por el/la impugnante. Si el presidente, como autoridad máxima de la mesa decide que la persona puede votar, el fiscal que tiene dudas debe asegurarse de hacer el procedimiento de impugnación de identidad descripto precedentemente, y el presidente no puede negarse a seguir el procedimiento de voto impugnado. El fiscal que impugnare la identidad debe fundar esa impugnación y dejar constancia en el formulario.
                                        <br />
                                        <br />
                                        Los votos impugnados no se abrirán en el escrutinio de mesa sino que se enviarán a la Justicia Nacional Electoral en el mismo sobre cerrado dentro del bolsín plástico para su posterior definición. Arts. 91 y 92 C.E.N. Foto18
                                    </p>
                                    <div className="bg-violet-50 rounded-2xl flex flex-row items-center justify-center">
                                        <img src="assets/resources/image453.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem title="Voto comando electoral">
                            <div className="flex flex-col mb-8">
                                <h2 className="font-medium text-2xl">Figura como “Voto Comando General Electoral</h2>
                                <div className="grid grid-cols-2 grid-rows-1 gap-8 mt-4">
                                    <p>
                                        Si en el padrón aparece un/a elector/a identificado/a como “Voto Comando General Electoral” deberá entregarle, además del sobre de votación, un sobre especial (sobre-cubierta) que tiene la inscripción “Voto Comando Electoral”.
                                    </p>
                                    <div className="bg-violet-50 rounded-2xl flex flex-row items-center justify-center">
                                        <img src="assets/resources/image453.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col mb-8">
                                <div className="grid grid-cols-2 grid-rows-1 gap-8 mt-4">
                                    <p>
                                        El/la elector/a deberá:
                                        <ul className="list-disc p-8">
                                            <li>Ingresar al cuarto oscuro con los dos sobres.</li>
                                            <li>Colocar su voto en el sobre común, y luego este en el sobre-cubierta. </li>
                                            <li>Introducir el sobre en la urna.</li>
                                            <li>Firmar el padrón.</li>
                                        </ul>
                                    </p>
                                    <div className="bg-violet-50 rounded-2xl flex flex-row items-center justify-center">
                                        <img src="assets/resources/image453.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center mt-8 mb-20">
                                <div className="grid grid-rows-1 grid-cols-2 gap-7 pt-10 pb-10 pl-8 pr-8 bg-[#FFF4F4] border-l-[6px] border-l-[#D64B4B] rounded-lg place-items-center">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-start items-center gap-4">
                                            <div className="flex flex-col w-10 h-auto">
                                                <img src="assets/images/alert-icon.svg" alt="" />
                                            </div>
                                            <span className="text-[#FF0000] font-bold text-lg">
                                                Aviso importante
                                            </span>
                                        </div>
                                        <p className="font-semibold pl-14">
                                            Los votos de identidad impugnada y del personal subordinado al Comando General Electoral serán contabilizados, pero no abiertos ni escrutados en la mesa. 
                                            <br />
                                            <br />
                                            Faltan sobres para el comando: Ante la falta de sobres para el Comando Electoral, deberán utilizar un sobre de voto impugnado, tachar esa leyenda y agregar a mano “Voto Comando Electoral”. El mismo deberá ser firmado por las autoridades de mesa.
                                        </p>
                                    </div>
                                    <div className="bg-violet-50 p-8 rounded-2xl">
                                        <img className="h-full w-full relative" src="assets/resources/image453.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem title="Voto de cantado">
                            <h2 className="font-medium text-2xl mb-8">Persona que dice claramente a quien va a votar</h2>
                            <p className="">
                                Puede ocurrir que un elector diga a quien va a votar o exhiba la boleta o algún papel con algún símbolo/referencia de la BOLETA o el PARTIDO al que va a votar.
                                No se anula el voto si dice a quién va a votar. No se puede impedir que vote (no se impugna)
                                PERO SI SE LE DEBE ADVERTIR “que la VIOLACIÓN DEL SECRETO DEL VOTO es un delito que se pena con 1 a 18 meses de prisión”. El Presidente de Mesa por sí o a pedido de algún fiscal puede requerirle al Comando Electoral que lo ponga a disposición de la Justicia Electoral. Normativa relacionada: Arts. 85 y 142 del C.E.N. Adulteración/ ocultamiento”. (Art. 139 Inc. g C.E.N.)
                            </p>
                        </AccordionItem>
                    </div>
                </div>
            </div>
        </section>
		<Footer></Footer>
	</main>
  );
};

export default DuringVote;
