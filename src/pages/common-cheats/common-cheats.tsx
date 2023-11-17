import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./styles.css";
import { Hero } from "../../components/hero";

const CommonCheats = () => {
  return (
	<main id="root">
		<Navbar />
		<header>
            <Hero 
				title="Trampas comunes" 
				imgSrc="assets/images/hero_img_var2.png"
			/>
		</header>
        <section className="flex flex-col justify-center items-center">
            <div className="w-[980px] mt-16 flex flex-col gap-10">
                <h1 className="font-bold text-[1.9rem]">La importancia del certificado de escrutinio</h1>

                <div className="grid grid-rows-1 grid-cols-[auto_auto] select-none">
                    <div className="bg-violet-700 w-[30px] h-[30px] rounded-full flex flex-row justify-center items-center mr-2">
                        <span className="text-white">1</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold">URNA EMBARAZADA</h2>
                        <p>
                            Esta trampa consiste en cerrar tiempo antes de la apertura de la mesa a las 8hs con sobres adentro. Esto es posible cuando el fiscal se presenta tarde a la mesa. Si el fiscal está temprano nunca deberá pasar de que no pueda ver el cierre y fajado de la urna. Si el fiscal llega antes de las 8 hs y la URNA está ya fajada puede moverla para ir chequear que no haya nada adentro. Nunca puede haber un voto antes de las 8 hs horario en que se firma el ACTA DE APERTURA (ni siquiera de la autoridad de mesa). Los votos se ingresan después de la firma del ACTA DE APERTURA.
                        </p>
                    </div>
                </div>

                <div className="grid grid-rows-1 grid-cols-[auto_auto] select-none">
                    <div className="bg-violet-700 w-[30px] h-[30px] rounded-full flex flex-row justify-center items-center mr-2">
                        <span className="text-white">2</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold">TRAMPA DE VOTO EN CADENA</h2>
                        <p>   
                            Esta trampa consiste en que un votante agarra un sobre firmado por las autoridades y fiscales, una vez en el interior del cuarto oscuro cambia el sobre firmado por otro sobre con firmas apócrifas. Introduce este sobre ilegal rápidamente en la urna y una vez afuera de la escuela le entrega el sobre legal a un puntero político donde este le coloca una boleta de su partido en el sobre legal sustraído, lo sella y se lo da a otro votante de la mesa. El otro votante recibe un nuevo sobre legal vacío y en el cuarto oscuro saca el primer sobre legal sustraído con la boleta en su interior y guarda el nuevo sobre legal vacío para empezar otra vez el ciclo (voto en cadena). Eso se evita firmando pocas cantidades de sobres (máximo 5 sobres), variando el color de birome con que se firma para que el fiscal partidario pueda detectar cuando se está introduciendo un sobre con otra firma de otro color y pueda parar el voto de acuerdo al control de la Planilla de Control de Votantes. Si el fiscal detecta que un sobre tiene una firma de un color que no corresponde para ese momento debe inmediatamente avisarle al presidente de mesa para que frene la introducción del voto en la urna explicándole la situación. El presidente en este caso deberá romper el sobre y entregarle uno nuevo para que el ciudadano vaya al cuarto oscuro y proceda nuevamente a sufragar. 
                            <b> Art 9 y Art 10 de C.E.N. </b>
                        </p>
                    </div>
                </div>

                <div className="grid grid-rows-1 grid-cols-[auto_auto] select-none">
                    <div className="bg-violet-700 w-[30px] h-[30px] rounded-full flex flex-row justify-center items-center mr-2">
                        <span className="text-white">3</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold">BOLETAS FALSAS O ROTAS</h2>
                        <p>
                            Esta trampa puede evitarse en menor escala si se ingresa al cuarto oscuro cada 10 electores para verificar orden del cuarto, realizar la reposición retirando el pilón que esta y dejando uno nuevo de 20 boletas. <b>A FIN DE NO ENTORPECER EL DESARROLLO, PERO TAMBIEN PARA VERIFICAR QUE NO TENGA ANOMALIAS LAS BOLETAS DEL CUARTO COMO BOLETAS DE OTRA FECHA</b>. En caso de detectarse deberemos dejar asentado dicha anormalidad en un acta y llegado el caso que hubiera alguna rota o debe otra fecha recurrir el voto con motivo de la anormalidad y que sea defendido en el escrutinio definitivo.
                        </p>
                    </div>
                </div>

                <div className="grid grid-rows-1 grid-cols-[auto_auto] select-none">
                    <div className="bg-violet-700 w-[30px] h-[30px] rounded-full flex flex-row justify-center items-center mr-2">
                        <span className="text-white">4</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold">VOLTEAR URNAS</h2>
                        <p>
                            Es una trampa que consiste en cambiar las cantidades de los votos afirmativos entre las fuerzas políticas, por ello debe ser controlados todos los documentos de acto electoral que estén completados de manera correcta todos por igual. 
                            <br />
                            Otra manera es que los fiscales de mesa por alguna razón se retiren antes del conteo., podría evitarse de una manera menor si un fiscal general se hace cargo de la mesa o bien solicita se le firme el certificado de escrutinio.
                        </p>
                    </div>
                </div>

                <div className="grid grid-rows-1 grid-cols-[auto_auto] select-none">
                    <div className="bg-violet-700 w-[30px] h-[30px] rounded-full flex flex-row justify-center items-center mr-2">
                        <span className="text-white">5</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold">SUPLANTACIÓN DE IDENTIDAD</h2>
                        <p>
                            Esté tipo de fraude o delito se da cuando una persona se presenta a votar en lugar de otra, o un fallecido, ante la duda se procede a solicitar a la autoridad de mesa que tenés dudas con el electores para que lo interrogue o solicitar el voto de identidad impugnada y que resuelva la justicia electoral mediante la huella.
                        </p>
                    </div>
                </div>

            </div>
        </section>
		<Footer></Footer>
	</main>
    );
};

export default CommonCheats;
