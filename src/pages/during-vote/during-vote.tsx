import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { paths } from "../../routes/paths";
import "./styles.css";
import { Link } from "react-router-dom";
import { ExpandableCard, ExpandableCardItem } from "../../components/expandable-card";
import ExpandableItem from "../../components/expandable-item";
import { Hero } from "../../components/hero";
import { useMediaQuery } from "react-responsive";
import { ExpanseToggle } from "../../components/toggle/ExpanseToggle";
import AlertCard from "../../components/alert-card";

const DuringVote = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  
  const checkSVG = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={`text-green-500 ${isTabletOrMobile ? "w-6 h-6" : " w-8 h-8"}`}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" 
      />
  </svg>
  )

  const crossSVG = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={`text-red-500 ${isTabletOrMobile ? "w-6 h-6" : " w-8 h-8"}`}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
      />
    </svg>
  )
  
  return (
    <main id="root">
      <Navbar />
      <header>
        <Hero
          title="El Paso a Paso"
          subtitle="Como Fiscalizar"
          imgSrc="assets/images/hero_img_var2.png"
        />
      </header>
      <section className="flex flex-col justify-center items-center ml-4 mr-4 ">
        <div className="w-full">
          <div className={`flex flex-row justify-center border-b-2 p-4 border-black w-full ${isTabletOrMobile ? "gap-2" : "gap-8"}`}>
            <Link to={paths.beforeVote} className={`text-black text-center text-[17px] rounded-lg ${isTabletOrMobile ? "p-3 w-[90px]" : "p-2"}`}>{isTabletOrMobile ? "Antes" : "Antes de la votación"}</Link>
            <Link to={paths.duringVote} className={`bg-brand text-center text-[17px] text-white rounded-lg ${isTabletOrMobile ? "p-3 w-[90px]" : "p-2"}`}>{isTabletOrMobile ? "Durante" : "Durante la votación"}</Link>
            <Link to={paths.afterVote} className={`text-black text-center text-[17px] rounded-lg ${isTabletOrMobile ? "p-3 w-[90px]" : "p-2"}`}>{isTabletOrMobile ? "Despues" : "Despues de la votación"}</Link>
          </div>
          <div className="mt-8 flex flex-col items-start justify-center w-full">

            {/* first part */}
            <div className="flex flex-col gap-8 w-full">
              <div className="w-full">
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold text-[1.9rem]">Durante la votación</h2>
                  <h3 className="font-bold text-2xl">Apertura del comicio</h3>
                </div>
                <ExpandableCard 
                  imgSrc="assets/images/double-door.png" 
                  title="Apertura del comicio" 
                  subtitle="A partir de las 8 de la mañana"
                >
                  <ExpandableCardItem
                    imgSrc="assets/resources/foto7.jpg"
                    title="Apertura del acto electoral"
                    description="Una vez sellada la urna a las 8 hs. se dará inicio al proceso de votación y procederá a elaborar el ACTA DE APERTURA."
                  />

                  <ExpandableCardItem
                    imgSrc="assets/resources/foto17.jpg"
                    title="Votación: Ranura de la urna"
                    description="Es en extremo recomendable que la urna con la ranura visible para el fiscal para poder observar lo sobres y detectar alguna anomalía."
                  />

                  <ExpandableCardItem
                    imgSrc="assets/resources/votoencadena.jpg"
                    title="Recordatorio"
                    description="Es aconsejable acordar con el presidente de mesa, para evitar conflictos que terminen en actas de denuncias, la forma en que el fiscal LLA firmará los sobres. Se recomienda que el fiscal no firme (como máximo) más de 5 sobres por tanda (5 de un color, 5 de otro y así alternando). Esto es fundamental para evitar la TRAMPA DE VOTO EN CADENA."
                  />

                  <ExpandableCardItem
                    imgSrc="assets/resources/foto11.jpg"
                    title="Cantidad de sobres firmados"
                    description=" La autoridad de mesa no puede cuestionar o exigir la firma de muchas cantidades de sobre u oponerse a los colores usados por el fiscal de mesa. En ningún artículo del Código Nacional Electoral exige cantidades de sobre firmados o limita colores."
                  />

                  <ExpandableCardItem
                    imgSrc="assets/resources/lugares.png"
                    title="Antes de la votación"
                    description="Es aconsejable acordar con el presidente de mesa, para evitar conflictos que terminen en actas de denuncias, la forma en que el fiscal LLA firmará los sobres. Se recomienda que el fiscal no firme (como máximo) más de 5 sobres por tanda (5 de un color, 5 de otro y así alternando). Esto es fundamental para evitar la TRAMPA DE VOTO EN CADENA."
                  />

                  <ExpandableCardItem
                    imgSrc="assets/resources/fiscales.jpg"
                    title="Inicio de la votación: autoridades de mesa"
                    description="Inicio de la votación por parte de las autoridades de mesa y fiscales partidarios si figuran en el padrón. EN NINGÚN CASO SE PODRÁ AGREGAR A MANO EN EL PADRÓN A UN VOTANTE."
                  />

                  <ExpandableCardItem
                    imgSrc="assets/resources/electortachado.png"
                    title="Elector tachado"
                    description="Si un elector se encuentra tachado del padrón, significa que ese/a elector/a está excluido/a del padrón y por lo tanto no está habilitado/a para votar. Puede figurar habilitado en los padrones de fiscales y estar tachado en el padrón del presidente, y en tal caso no puede votar. Art. 88 C.E.N."
                  />

                  <ExpandableCardItem
                    imgSrc="assets/resources/foto8.jpg"
                    title="Quienes votan"
                    description="Solo votan las personas que están inscriptas en el padrón de la mesa. Nadie puede exigir que una persona vote en una mesa en la que no figure registrado. Ni el presidente de mesa, ni el delegado de la justicia electoral (en general, el director de la Escuela), ni el comando electoral (gendarmería/fuerzas armadas). Arts. 86 Y 87 C.E.N.Solo votan las personas que están inscriptas en el padrón de la mesa. Nadie puede exigir que una persona vote en una mesa en la que no figure registrado. Ni el presidente de mesa, ni el delegado de la justicia electoral (en general, el director de la Escuela), ni el comando electoral (gendarmería/fuerzas armadas). Arts. 86 Y 87 C.E.N."
                  />

                </ExpandableCard>
              </div>
              <div className="w-full">
                <h3 className="font-bold text-2xl">El presidente solicita documento al ciudadano. Los documentos válidos para votar son:</h3>
                <ExpandableCard 
                  imgSrc="assets/images/elections.png" 
                  title="Quienes votan y primeros pasos" 
                  subtitle="Quienes votan y primeros pasos"
                >
                  <ExpandableCardItem
                    imgSrc="assets/resources/foto9.jpg"
                    title="Validez de documentación"
                    description="Chequear bien quienes pueden votar."
                  />
                  <ExpandableCardItem
                    imgSrc="assets/resources/foto10.jpg"
                    title="DNI válido: ver padrón de mesa"
                    description='El documento válido para votar es el ejemplar que figura en el padrón de la mesa o uno posterior. Si el/la elector/a se presenta con uno anterior al registrado no podrá votar. Esto no es negociable. Art. 86 C.E.N.
                    De acuerdo con el Art. 89 C.E.N., el presidente debe permitir al fiscal ver el DNI del elector para verificar la identidad. El artículo dice: “Verificación de la identidad del elector. Comprobado que el documento cívico presentado pertenece al mismo elector que aparece registrado como elector, el presidente procederá a verificar la identidad del compareciente con las indicaciones respectivas de dicho documento, oyendo sobre el punto a los fiscales de los partidos"'
                  />
                  <ExpandableCardItem
                    imgSrc="assets/resources/chequeo.jpeg"
                    title="Chequeo del DNI por el Fiscal de mesa"
                    description="De acuerdo con el Art. 89 C.E.N., el presidente debe permitir al fiscal ver el DNI del elector para verificar la identidad. El artículo dice: “Verificación de la identidad del elector. Comprobado que el documento cívico presentado pertenece al mismo elector que aparece registrado como elector, el presidente procederá a verificar la identidad del compareciente con las indicaciones respectivas de dicho documento, oyendo sobre el punto a los fiscales de los partidos”."
                  />
                  <ExpandableCardItem
                    imgSrc="assets/resources/documentos-validos.jpg"
                    title="Protocolos de chequeo"
                    description="Tener en cuenta que los protocolos de salud establecidos para la votación (Acordada 83/2021 y otras) no han dejado sin efecto las normas contenidas en el Código Electoral. Todos los derechos consagrados en el Código se encuentran vigentes y se pueden ejercer. Puede observarse el DNI, única forma de constatar la identidad del elector, pueden firmarse los sobres, pueden controlarse las boletas en el cuarto oscuro, con la periodicidad necesaria"
                  />
                </ExpandableCard>

              </div>
            </div>

            {/* second part */}

            {isTabletOrMobile && <ExpanseToggle />}

            <div className="w-full mt-8">
              <h2 className="font-bold text-[1.9rem] mb-14">¿Quienes pueden votar?</h2>
              <ExpandableItem iconSrc="assets/images/Ok.png" title="Quienes pueden votar">
                <ul className="mb-4 ">
                <li className={`flex flex-row gap-4 ${isTabletOrMobile ? "items-center justify-center" : "justify-start"}`}>
                    {checkSVG}
                    <p className={`${isTabletOrMobile ? "text-[1.2rem] w-11/12 mb-3" : "text-lg mb-2"}`}>
                      Todas aquellas personas que estén en el padrón aunque hayan diferencias respecto a los datos impresos en el padrón.
                    </p>
                  </li>
                  <li className={`flex flex-row gap-4 ${isTabletOrMobile ? "items-center justify-center" : "justify-start"}`}>
                    {checkSVG}
                    <p className={`${isTabletOrMobile ? "text-[1.2rem] w-11/12 mb-3" : "text-lg mb-2"}`}>
                      Personas que presentar documentos físicos sin fotografía y en ese caso las autoridades de mesa deberán preguntar sobre los datos del documento.
                    </p>
                  </li>
                  <li className={`flex flex-row gap-4 ${isTabletOrMobile ? "items-center justify-center" : "justify-start"}`}>
                    {checkSVG}
                    <p className={`${isTabletOrMobile ? "text-[1.2rem] w-11/12 mb-3" : "text-lg mb-2"}`}>
                      Si no coincidiese la fotografía del padrón con la del documento
                    </p>
                  </li>
                  <li className={`flex flex-row gap-4 ${isTabletOrMobile ? "items-center justify-center" : "justify-start"}`}>
                    {checkSVG}
                    <p className={`${isTabletOrMobile ? "text-[1.2rem] w-11/12 mb-3" : "text-lg mb-2"}`}>
                      Si tuviera DNI cuyo ejemplar sea igual o posterior al que figura en el padrón. Ver “cómo corroborar el tipo de ejemplar”
                    </p>
                  </li>
                </ul>
              </ExpandableItem>
              <ExpandableItem iconSrc="assets/images/Cancel.png" title="Quienes NO pueden votar">
                <ul className="mb-4 ">
                  <li className={`flex flex-row gap-4 ${isTabletOrMobile ? "items-center justify-center" : "justify-start"}`}>
                    {crossSVG}
                    <p className={`${isTabletOrMobile ? "text-[1.2rem] w-11/12 mb-3" : "text-lg mb-2"}`}>
                      No figuran inscriptos en el padrón. <b>En ningún caso se podrá agregar una persona a mano en el padrón.</b>
                    </p>
                    </li>
                  <li className={`flex flex-row gap-4 ${isTabletOrMobile ? "items-center justify-center" : "justify-start"}`}>
                    {crossSVG}
                    <p className={`${isTabletOrMobile ? "text-[1.2rem] w-11/12 mb-3" : "text-lg mb-2"}`}>
                      No exhibiera documento habilitante físico. <b>En ningún caso se aceptará la votación de una persona que presente un documento en forma digital</b>
                    </p>
                  </li>
                  <li className={`flex flex-row gap-4 ${isTabletOrMobile ? "items-center justify-center" : "justify-start"}`}>
                    {crossSVG}
                    <p className={`${isTabletOrMobile ? "text-[1.2rem] w-11/12 mb-3" : "text-lg mb-2"}`}>
                      Si se presenta una persona con un documento anterior al que figura en el padrón (ver en el gráfico “cómo corroborar el tipo de ejemplar”).
                    </p>
                  </li>
                  <li className={`flex flex-row gap-4 ${isTabletOrMobile ? "items-center justify-center" : "justify-start"}`}>
                    {crossSVG}
                    <p className={`${isTabletOrMobile ? "text-[1.2rem] w-11/12 mb-3" : "text-lg mb-2"}`}>
                      Quienes figuran en el padrón con un sello rojo <b>línea anulada</b> o <b>inhabilitada</b>
                    </p>
                  </li>
                </ul>
              </ExpandableItem>
            </div>

            {/* third part */}
            <div className="w-full border-t border-black flex flex-row justify-center items-center">
              <div className={`bg-purple-100 p-8 rounded-2xl flex gap-8 mt-8 w-full justify-center items-center ${isTabletOrMobile ? "flex-col" : "flex-row "}`}>
                <h3 className="text-purple-700 font-bold text-xl">¿Cómo corroborar el tipo de ejemplar?</h3>
                <picture className="rounded-2xl bg-[#F0F0F0] p-8">
                  <img src="assets/resources/foto10.jpg" alt="proceso de confirmacion de dni valido" />
                </picture>
              </div>
            </div>

            {/* fourt part */}
            <div className="w-full mt-8">
              <ExpandableItem title="Voto de identidad impugnada">
                <div className="flex flex-col mb-8">
                  <h2 className="font-medium text-2xl">solo en la votación antes de ingresar el sobre a la urna.</h2>
                  <div className={`${isTabletOrMobile ? "" : "grid grid-cols-2 grid-rows-1 gap-8 mt-4 place-content-center place-items-center"}`}>
                    <p className="mb-8">
                      ¿Qué pasa si no se puede identificar correctamente a un ciudadano?
                      <br />
                      <br />
                      Si la identidad de un/a elector/a generara dudas a las autoridades de mesa o a los/as fiscales y éstas no pudieran ser resueltas en la mesa (por ejemplo el presidente puede, a sugerencia de los fiscales, hacer preguntas sobre los datos contenidos en el padrón) el/la elector/a podrá votar bajo el siguiente procedimiento: se le otorgarán dos sobres; el sobre de votación y el sobre cubierta de voto impugnado donde constarán los datos del/ de la elector/a impugnado/a, su huella dactilar y las razones sostenidas por el/la impugnante. Si el presidente, como autoridad máxima de la mesa decide que la persona puede votar, el fiscal que tiene dudas debe asegurarse de hacer el procedimiento de impugnación de identidad descripto precedentemente, y el presidente no puede negarse a seguir el procedimiento de voto impugnado. El fiscal que impugnare la identidad debe fundar esa impugnación y dejar constancia en el formulario.
                      <br />
                      <br />
                      <b>Los votos impugnados no se abrirán en el escrutinio de mesa sino que se enviarán a la Justicia Nacional Electoral en el mismo sobre cerrado dentro del bolsín plástico para su posterior definición</b>. Arts. 91 y 92 C.E.N.
                    </p>
                    <picture className="bg-[#F0F0F0] rounded-2xl flex flex-row items-center justify-center p-8">
                      <img src="assets/resources/image453.png" alt="identificar al ciudadano" />
                    </picture>
                  </div>
                </div>
              </ExpandableItem>
              <ExpandableItem title="Voto comando electoral">
                <div className="flex flex-col mb-8">
                  <h2 className="font-medium text-2xl">Figura como “Voto Comando General Electoral</h2>
                  <div className={`${isTabletOrMobile ? "" : "grid grid-cols-2 grid-rows-1 gap-8 mt-4 place-content-center place-items-center"}`}>
                    <p>
                      Si en el padrón aparece un/a elector/a identificado/a como “Voto Comando General Electoral” deberá entregarle, además del sobre de votación, un sobre especial (sobre-cubierta) que tiene la inscripción “Voto Comando Electoral”.
                    </p>
                    <picture className="bg-[#F0F0F0] rounded-2xl flex flex-row items-center justify-center p-8 mt-8">
                      <img src="assets/resources/FotoA20.jpg" alt="voto comando general" />
                    </picture>
                  </div>
                </div>
                <div className="flex flex-col mb-8">
                  <div className={`${isTabletOrMobile ? "" : "grid grid-cols-2 grid-rows-1 gap-8 mt-4 place-content-center place-items-center"}`}>
                    <p>
                      El/la elector/a deberá:
                      <ul className="list-disc p-8">
                        <li>Ingresar al cuarto oscuro con los dos sobres.</li>
                        <li>Colocar su voto en el sobre común, y luego este en el sobre-cubierta. </li>
                        <li>Introducir el sobre en la urna.</li>
                        <li>Firmar el padrón.</li>
                      </ul>
                    </p>
                    <picture className="bg-[#F0F0F0] rounded-2xl flex flex-row items-center justify-center p-4">
                      <img src="assets/resources/FotoA21.jpg" alt="comando general" />
                    </picture>
                  </div>
                </div>
                <AlertCard message={`Los votos de identidad impugnada y del personal subordinado al Comando General Electoral serán contabilizados, pero no abiertos ni escrutados en la mesa.`} message2="Faltan sobres para el comando: Ante la falta de sobres para el Comando Electoral, deberán utilizar un sobre de voto impugnado, tachar esa leyenda y agregar a mano “Voto Comando Electoral”. El mismo deberá ser firmado por las autoridades de mesa." />

                <picture className={`bg-[#F0F0F0] flex justify-center items-center m-auto ${isTabletOrMobile ? "w-full h-auto" : "w-rounded-2xl w-[800px] flex-row p-4"}`}>
                    <img className={`${isTabletOrMobile ? "w-full h-auto" : "object-cover"}`} src="assets/resources/FotoA22.jpg" alt="registro de voto comando electoral" />
                </picture>

              </ExpandableItem>
              <ExpandableItem title="Voto de cantado">
                <h2 className="font-medium text-2xl mb-8">Persona que dice claramente a quien va a votar</h2>
                <p className="text-lg font-semibold bg-violet-400/70 rounded-lg p-2">
                  Puede ocurrir que un elector diga a quien va a votar o exhiba la boleta o algún papel con algún símbolo/referencia de la BOLETA o el PARTIDO al que va a votar.
                  No se anula el voto si dice a quién va a votar. No se puede impedir que vote (no se impugna)
                  PERO SI SE LE DEBE ADVERTIR “que la VIOLACIÓN DEL SECRETO DEL VOTO es un delito que se pena con 1 a 18 meses de prisión”. El Presidente de Mesa por sí o a pedido de algún fiscal puede requerirle al Comando Electoral que lo ponga a disposición de la Justicia Electoral. Normativa relacionada: Arts. 85 y 142 del C.E.N. Adulteración/ ocultamiento”. (Art. 139 Inc. g C.E.N.)
                </p>
              </ExpandableItem>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default DuringVote;
