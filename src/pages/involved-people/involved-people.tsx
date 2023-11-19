import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ExpandableItem from "../../components/expandable-item";
import "./styles.css";
import { Hero } from "../../components/hero";
import { ExpanseToggle } from "../../components/toggle/ExpanseToggle";
import { useMediaQuery } from "react-responsive";

const InvolvedPeople = () => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
	const COLOR_SPAN: string = "font-bold bg-violet-200/60"

  return (
	<main id="root">
		<Navbar />
		<header>
			<Hero 
				title="Personas que intervienen"
				subtitle="Cómo fiscalizar"
				imgSrc="assets/images/hero_img_var2.png"
			/>
		</header>
		<section className={`flex flex-col items-center ${ isTabletOrMobile ? '-mt-40' : 'mt-32'}`}>
			{ <ExpanseToggle /> }

				<ExpandableItem title="Autoridades de mesa">
					<p>
						Son ciudadanos/as elegidos/as aleatoriamente por la Justicia Nacional Electoral. Deben ser electores/as hábiles y votar en la mesa en que actúan, tener entre 18 y 70 años y saber leer y escribir. Por cada mesa de votación hay dos autoridades: El/la Presidente y el/la suplente quien auxilia al primero. Si falta el presidente queda el suplente solo <span className={COLOR_SPAN}>Art. 72 y 73 C.E.N.</span>
						Las autoridades de mesa no pueden estar afiliadas a ningún partido. Verificar que la autoridad no se encuentre incluida en esto en el padrón de afiliados de la <span className={COLOR_SPAN}> C.N.E.</span> (según <span className={COLOR_SPAN}>acordada extraordinaria 129/08</span>)
						Los/as fiscales partidarios no son autoridades de mesa.
						<br />
						<br />
						Quien decide cómo proceder en caso de desacuerdo es el presidente, pero el fiscal tiene derecho a dejar constancia en actas especiales de cualquier situación relevante.
						Cada mesa tiene una autoridad de mesa o presidente y un auxiliar (o suplente en función de presidente) es la autoridad máxima en la mesa. Estas personas deberán identificarse a través de telegrama de la Junta Electoral.
						<br />
						<br />
						Si hasta las 8.30 horas no se hubieren presentado el/la presidente/a o el/la suplente a su mesa, la autoridad policial y/o el/la empleado/a postal harán conocer tal circunstancia a sus superiores (y éstos a la Justicia Electoral) para que sean designadas las autoridades y pueda habilitarse la mesa.
						En caso que de no encontrarse presentes las autoridades designadas se procederá a buscar auxiliares de otras mesas de la misma escuela. En caso de no encontrarse se designará al primer ciudadano que esté esperando para votar en la mesa. Por ley este ciudadano está obligado a cumplir la función. Todo esto será organizado y designado por el Delegado de la Junta Electoral presente en la escuela.
						<br />
						<br />
						<div className="bg-violet-200 rounded p-1">
							<span className="font-bold">	
								🚨  Comentario: Si el presidente (sobretodo) o suplente son personas responsables e imparciales hay mucha garantía de un comicio limpio. Si son simpatizantes partidarios PODRÍA suceder de que avalen o participen en alguna irregularidad. Cambiar datos, cambiar votos, permitir votos nulos o anular votos válidos. EL FISCAL DEBE ESTAR MUY ATENTO A ESTOS COMPORTAMIENTOS.
							</span>
						</div>
					</p>
				</ExpandableItem>
				<ExpandableItem title="Comando General Electoral">
					<div className="flex flex-row items-center justify-center gap-4 flex-wrap">
						<p>
							Fuerzas armadas o de seguridad que custodian la escuela donde se realiza el comicio. Su tarea es velar por la seguridad de las urnas y autoridades, evitar alteraciones del orden en el establecimiento. Gendarmería estará a cargo de la custodia de las urnas. Fuerzas de seguridad a cargo de la seguridad de las alteraciones del orden en el establecimiento.
						</p>
					</div>
				</ExpandableItem>
				<ExpandableItem title="Delegado de la junta electoral">
					<div className="grid md:grid-cols-[auto_20em] md:grid-rows-1 grid-rows-2 grid-cols-1">
						<p>
							Es el representante de la Junta Electoral (organismo máximo judicial) en el establecimiento. Es el nexo presente en la escuela y la Junta Electoral. Esta persona deberá decidir sobre aquella cuestión que suceda antes, durante o después del comicio y deba tomarse una decisión al respecto. <span className={COLOR_SPAN}>Esta persona es MUY IMPORTANTE como referencia, consultas y para hacer denuncias.</span> Esta persona deberá identificarse a través de una designación de la Junta Electoral con nombre, apellido y número DNI. Identificar a esta persona apenas uno llega a la escuela es una de las primeras cosas que debe hacer un fiscal.
						</p>
						<picture className=" mt-8 w-full">
							<img src="assets/resources/foto1.jpg" alt="funciones del delegado de la JNC" className="w-full h-auto"/>
						</picture>
					</div>
				</ExpandableItem>
				<ExpandableItem title="Fiscales">
					<p>
						Los/as fiscales representan a los partidos políticos ante cada mesa electoral. Hay distintos tipos de fiscales: de mesa, generales y tecnológicos.
						<br />
						<br />
						En cada mesa de votación actúan los/as fiscales de mesa mientras que los generales se desempeñan en todo el establecimiento colaborando con los primeros. En una misma mesa no pueden desempeñarse conjuntamente dos fiscales de mesa de la misma agrupación política. Su misión es fiscalizar las operaciones del acto electoral y hacer reclamos. <span className={COLOR_SPAN}>Arts. 56 y 57 C.E.N.</span>.
						Los poderes de los/as fiscales de mesa y fiscales generales serán otorgados bajo la firma de las autoridades directivas del partido y contendrán nombre y apellido completo, número de documento cívico y su firma al pie del mismo. Estos poderes deberán ser presentados a los/as presidentes/as de mesa para su reconocimiento <span className={COLOR_SPAN}>Arts. 59 C.E.N.</span>.
						Los fiscales pueden actuar aunque no tengan domicilio en el distrito porque la Cámara Electoral y el Juez Federal de la Provincia de Buenos Aires han declarado inconstitucional el <span className={COLOR_SPAN}>Art 58 C.E.N. Fallo Alianza Cambiemos expte. N° C.N.E. 7142/2017/CA1.</span>
						Según el manual de <span className={COLOR_SPAN}>Autoridades de Mesa C.N.E. pág. 12 y Guía rápida fiscales partidarios C.N.E. pág. 10</span>, los fiscales pueden ser reemplazados dejando constancia en el acta complementaria.
						Ante cualquier dificultad pedir apoyo de los fiscales generales.
					</p>
					<br />
					<div>
						<h3 className="font-bold">✅ Derechos del fiscal</h3>
						<ul className="list-disc p-8">
							<li className="mb-2">
								<div className={`rounded-lg p-2 text-md font-bold uppercase ${COLOR_SPAN}`}>Fiscalizar en cualquier mesa del país Cámara Nacional Electoral fallo 7142/2017/CA1</div>
							</li>
							<li className="mb-2">
								Estar presente cuando se acondicione el cuarto oscuro, cuando se cierre la urna <span className={COLOR_SPAN}>Art. 82 C.E.N.</span> y firmar documentación de apertura, asentando observaciones si las hubiese <span className={COLOR_SPAN}>Art. 83 C.E.N.</span>
							</li>
							<li className="mb-2">
								Firmar los sobres <span className={COLOR_SPAN}>Art. 93 C.E.N.</span> y verificar cada sobre antes que el elector lo deposite en la urna <span className={COLOR_SPAN}>Art. 94 C.E.N.</span>
							</li>
							<li className="mb-2">
								Ver el DNI del elector para cotejar su identidad (<span className={COLOR_SPAN}>Art. 89 C.E.N.</span> e impugnar en caso de duda <span className={COLOR_SPAN}>Art. 91 C.E.N.</span>
							</li>
							<li className="mb-2">
								Verificar el tipo de ejemplar del DNI y no permitir que vote si es anterior al que figura en el padrón <span className={COLOR_SPAN}>Art. 86, Inc. 3 a y b C.E.N.</span>
							</li>
							<li className="mb-2">
								Examinar el cuarto oscuro <span className={COLOR_SPAN}>Art. 97 C.E.N.</span> y reponer nuestras boletas cuando considere necesario <span className={COLOR_SPAN}>Art. 98 C.E.N.</span>
							</li>
							<li className="mb-2">
								Ser reemplazado en cualquier momento, asentándolo en el acta <span className={COLOR_SPAN}>Manual de autoridades de mesa C.N.E. pág. 13</span> y Guía rápida fiscales partidarios <span className={COLOR_SPAN}>C.N.E. pág. 10</span>)
							</li>
							<li className="mb-2">
								Dejar asentada cualquier observación en las actas <span className={COLOR_SPAN}>Art. 57 y 102 inc. d C.E.N.</span>
							</li>
							<li className="mb-2">
								Estar presente en el escrutinio de la mesa <span className={COLOR_SPAN}>Art. 101 C.E.N.</span>
							</li>
							<li className="mb-2">
								Recurrir los votos y dejar asentados los fundamentos del reclamo <span className={COLOR_SPAN}>Art. 101 inc. 4 punto IV C.E.N.</span>
							</li>
							<li className="mb-2">
								Revisar los datos del acta de escrutinio, telegrama y certificados antes de firmarlos y sacarles fotografías <span className={COLOR_SPAN}>Art. 102 C.E.N.</span>
							</li>
							<li className="mb-2">
								<div className={`rounded-lg p-2 text-md font-extrabold uppercase bg-violet-200`}>
									Que la Autoridad de Mesa me firme mi Certificado de Escrutinio Art. 102 C.E.N..
								</div>
							</li>
							<li className="mb-2">
								En la mesa de votación que fiscalizamos, tenemos derechos.
							</li>
						</ul>
					</div>
					<br />
					<div>
						<h3 className="font-bold">❌ ¿Qué NO pueden hacer los/las fiscales?</h3>
						<br />
						<p>
							Los fiscales no pueden compartir las funciones de las autoridades de mesa ni darles indicaciones al Delegado de la Junta Electora/a ni al Comando Electoral. No pueden confeccionar documentación oficial ni orientar o asistir a los electores, no pueden manipular votos ni realizar el escrutinio. El presidente de mesa es la máxima autoridad, pero si se produce algún incidente con los fiscales ya sea por intromisión de los mismos en las funciones de las autoridades de mesa o por cualquier otra circunstancia, podrán recurrir al personal del Comando General Electoral
						</p>
						<ul className="list-disc p-8">
							<li>
								<h6 className="font-medium text-lg mb-2">Fiscal General del partido:</h6> 
								<p className="text-md mb-6">
									El representante del partido político para el establecimiento donde hay varias mesas de votación. Se ocupará de toda la coordinación de los fiscales de las distintas mesas <span className={COLOR_SPAN}>dejando las debidas constancias en actas</span>, será agente de consulta y quien podrá resolver conflictos en la mesa actuando con el delegado de la junta electoral. Deberá firmar actas de reemplazo de fiscales de ser necesario, proveerá de boletas para reposición, realizará el control de los cuartos oscuros, etc. Es el nexo en la escuela del partido.
								</p>
								</li>
							<li>
								<h6 className="font-medium text-lg mb-2">Fiscal de mesa del partido:</h6>
								<p className="text-md mb-6">
									Es el representante del partido político que estará en todo momento en la mesa asignada donde se está realizando la elección. Desde el principio del comicio, durante y una vez finalizado deberá <span className={COLOR_SPAN}>ser veedor de todo el proceso desde el inicio hasta la entrega de la urna al correo. Entre las ellas el recuento de votos, pedir su copia del CERTIFICADO DE ESCRUTINIO obtener foto del acta de escrutinio, telegrama y acta complementaria</span> al presidente de mesa, presenciar el sellado de la urna con todos los votos y documentos oficiales hasta que se entregue al Representante del Correo Argentino. Entregada la copia del <span className={COLOR_SPAN}>CERTIFICADO DE ESCRUTINIO</span> al fiscal general el fiscal de mesa termina su participación.
								</p>	
							</li>
							<li>
								<h6 className="font-medium text-lg mb-2">Representante del Correo Argentino:</h6> 
								<p className="text-md mb-6">
										Es la persona encargada de entregar la urna y todos los elementos de la mesa de votación. Esta persona estará encargada de recibir la información del presidente de mesa y comunicarla a través de un telegrama para que los datos se incorporen a los cómputos generales. Además, recibirá la urna fajada de cada mesa donde estén los votos escrutados conjuntamente con el bolsín, telegrama y elementos sobrantes de la mesa de votación.
								</p>
							</li>
							<li>
								<h6 className="font-medium text-lg mb-2">Electores:</h6>
								<p className="text-md mb-6">
									Son los/as ciudadanos/as incluidos expresamente en el padrón electoral de la mesa de votación. No puede agregarse a una persona al padrón, bajo ninguna razón o circunstancia. Persona que no está en el padrón de la mesa <span className={COLOR_SPAN}>NO PUEDE VOTAR. Art. 1 y 2 C.E.N.</span>
								</p>
							</li>
						</ul>
						<p>
							En las elecciones primarias se utilizará el mismo padrón que en las elecciones generales, en el que constarán las personas que cumplan 16 años hasta el día de la elección general. <span className={COLOR_SPAN}>Art. 23 C.E.N.</span>
						</p>
					</div>
				</ExpandableItem>
		</section>
		<Footer></Footer>
	</main>
  );
};

export default InvolvedPeople;
