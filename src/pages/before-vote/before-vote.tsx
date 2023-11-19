import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { ExpandableCard, ExpandableCardItem } from "../../components/expandable-card";
import { paths } from "../../routes/paths";
import "./styles.css";
import { Link } from "react-router-dom";
import { Hero } from "../../components/hero";
import { useMediaQuery } from "react-responsive";
import { DownloadLink } from "../../components/button/buttonDownload";

const BeforeVote = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  
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
            <Link to={paths.beforeVote} className={`bg-brand text-center text-[17px] text-white rounded-lg ${isTabletOrMobile ? "p-3 w-[90px]" : "p-2"}`}>{isTabletOrMobile ? "Antes" : "Antes de la votación"}</Link>
            <Link to={paths.duringVote} className={`text-black text-center text-[17px] rounded-lg ${isTabletOrMobile ? "p-3 w-[90px]" : "p-2"}`}>{isTabletOrMobile ? "Durante" : "Durante la votación"}</Link>
            <Link to={paths.afterVote} className={`text-black text-center text-[17px] rounded-lg ${isTabletOrMobile ? "p-3 w-[90px]" : "p-2"}`}>{isTabletOrMobile ? "Despues" : "Despues de la votación"}</Link>
          </div>
          <div className="mt-8 flex flex-col items-start justify-center w-full">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-[1.9rem]">Antes de la votación</h2>
              <p>Te recomendamos algunos de los siguientes pasos a tener en cuenta antes del proceso de votación y llegada al colegio.</p>
            </div>
            <div className="mb-12">
              <ExpandableCard
                title="Recomendaciones antes de empezar" 
                subtitle="Paso a paso" 
                imgSrc="assets/images/space-before-graph.png"
              >
                <ExpandableCardItem
                  imgSrc="assets/resources/fiscales.jpg"
                  title="Primer contacto con los fiscales"
                  description="Tomar contacto antes de la elección, de ser posible, con el/los fiscal/es general/es para coordinar previamente. O en su defecto tener contacto con el coordinador de fiscales de la zona."
                />

                <ExpandableCardItem
                  imgSrc="assets/resources/fiscales.jpg"
                  title="Herramienta Escenciales"
                  description="Llevar biromes (azul, negra y otros colores), llevar resaltador, llevar papel/cuaderno para realizar anotaciones. Llevar Planilla de Control de Votantes"
                />

                  <DownloadLink URL="http://localhost:5173/lla-fiscales/assets/docs/Planilla-de-control-de-votantes.pdf" FILENAME="Planilla-de-control-de-votantes.pdf" children={"Planilla CdV"} />

                <ExpandableCardItem
                  imgSrc="assets/resources/propaganda.png"
                  title="Verificar la presencia de AFICHES PARTIDOS"
                  description="Verificar que en la entrada o en el interior de la escuela o en el interior del aula que oficia de mesa NO HAYA afiches partidarios o de propaganda política o cualquier cosa que pueda inducir el voto (imágenes de Perón o Evita por ejemplo). Se deberá comunicar al Delegado de la Junta Electoral para que esta propaganda sea removida. "
                />

                <ExpandableCardItem
                  imgSrc="assets/resources/dni.png"
                  title="Llevar DNI y celular"
                  description="Llevar DNI y llevar cargador de teléfono."
                />

                <ExpandableCardItem
                  imgSrc="assets/resources/puntualidad.png"
                  title="Llegar temprano : antes de la 7 am"
                  description="Llegar temprano a la escuela. Se recomienda llegar a las 7 am para tener tiempo de identificar participantes, lugares, etc."
                />


                <ExpandableCardItem
                  imgSrc="assets/resources/jerarquia.png"
                  title="Identificar al fiscal general del partido"
                  description="Identificar fiscal general del partido quien entregará el poder emitido por LLA para el fiscal de mesa que deberá ser presentado ante las autoridades de mesa"
                />

                <ExpandableCardItem
                  imgSrc="assets/resources/lugares.png"
                  title="Tomar buena ubicación de la silla"
                  description="De ser posible, si no está el auxiliar del presidente, tomar ubicación en la silla al lado del presidente de mesa para poder ir siguiendo el control de documentos de los votantes."
                />

                <ExpandableCardItem
                  imgSrc="assets/resources/foto21.png"
                  title="Solicitar copia de padrón"
                  description="Solicitar a la autoridad de mesa la copia del padrón. ¿Qué pasa si la autoridad de mesa no tiene copia del padrón para el fiscal LLA? Solución a ese problema: Sacar fotos al PADRÓN DE PARED de la mesa asignada (este afiche viene con la urna y elementos). El fiscal sacará varias fotos de ese padrón para poder tener la información de votantes de la mesa e irá anotando en un papel el nro de orden que votó llevando conjuntamente con la planilla control de votantes. (foto 2)"
                />

                <ExpandableCardItem
                  imgSrc="assets/resources/foto31.png"
                  title="Cuarto oscuro"
                  description="Preparación del cuarto oscuro"
                />

                <ExpandableCardItem
                  imgSrc="assets/resources/foto41.png"
                  title="Habilitación"
                  description="Habilitación del cuarto oscuro"
                />

                <ExpandableCardItem
                  imgSrc="assets/resources/foto161.png"
                  title="Verificar que las boletas SEAN LAS OFICIALES "
                  description="Verificar siempre que sean todas boletas oficializadas. Fecha 19 Noviembre 2023 y Fecha 22 Octubre 2023 Exp 7574-2023 31-oct-2023 link a Exp 7574-2023 31-oct-2023.pdf (autorización Justicia Nacional Electoral sobre uso de boletas)"
                />

                <ExpandableCardItem
                  imgSrc="assets/resources/foto51.png"
                  title="Cuarto oscuro accesible"
                  description="Verificar siempre que sean todas boletas oficializadas. Fecha 19 Noviembre 2023 y Fecha 22 Octubre 2023 Exp 7574-2023 31-oct-2023 link a Exp 7574-2023 31-oct-2023.pdf (autorización Justicia Nacional Electoral sobre uso de boletas) "
                />

                <ExpandableCardItem
                  imgSrc="assets/resources/foto61.png"
                  title="Habilitación de la urna de votación"
                  description="Habilitación de URNA. La urna deberá estar abierta y vacía a la vista de todos los fiscales. Luego se procede a cerrar la misma y colocar las fajas autoadhesivas sin dejar ninguna ranura posible para introducir o extraer sobres salvo la ranura de voto. Estas fajas deberán ser firmadas por las autoridades y fiscales. Foto6. Este proceso se hace cerca de las 8 hs. Ver Trampa URNA EMBARAZADA"
                />

                <ExpandableCardItem
                  imgSrc="assets/resources/orden.jfif"
                  title="Ordenar las boletas y verificar cartelería por ecima"
                  description="Deberán ordenar las boletas por número de menor a mayor y de izquierda a derecha. Es importante verificar que en el cuarto oscuro no se encuentre cartelería que pueda interferir en la voluntad del/ de la elector/a y colocar en lugares visibles la información sobre de disposiciones y delitos electorales. Arts. 76 y 82 C.E.N."
                />
              </ExpandableCard>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default BeforeVote;
