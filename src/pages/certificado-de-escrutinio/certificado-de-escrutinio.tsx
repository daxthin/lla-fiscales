import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./styles.css";
import CardVariantTwo from "../../components/card-type-two";
import AlertCard from "../../components/alert-card";
import { Hero } from "../../components/hero";
import { useMediaQuery } from "react-responsive";

const CertificadoDeEscrutinio = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

  return (
    <main id="root">
      <Navbar />
      <header>
        <Hero
          title="El certificado de escrutinio"
          subtitle="Contra el fraude"
          imgSrc="assets/images/hero_img_var2.png"
        />
      </header>
      <section className="flex flex-col justify-center items-center">
        <div className={`${isTabletOrMobile ? 'w-full ml-4 mr-4' : 'w-[980px] mt-16 flex flex-col gap-10'}}`}>
          <h1 className="font-bold text-3xl ml-2 mr-2">La importancia del certificado de escrutinio</h1>

          <AlertCard message={"El CERTIFICADO DE ESCRUTINIO es nuestro COMPROBANTE CONTRA EL FRAUDE. Si nos vamos sin ese documento todo lo hecho durante el día será en vano."}></AlertCard>

          <CardVariantTwo
            title={"¿Que pasa luego de realizarse el acta de escrutinio?"}
            description={"Luego de realizarse el ACTA DE ESCRUTINIO el presidente de mesa hará el CERTIFICADO DE ESCRUTINIO original, este documento irá dentro de la urna."}
            imgSrc={"assets/resources/foto390.png"}
          />

          <CardVariantTwo
            title={"¿Qué más adicional debe de pedir el fiscal?"}
            description={"Adicionalmente EL FISCAL DEBE PEDIR UNA COPIA DEL CERTIFICADO DE ESCRUTINIO. Por el Art. 102 del C.E.N. el presidente está obligado a dar una copia de este documento al fiscal que lo solicite y los demás integrantes de la mesa (auxiliar y fiscales) están obligados a firmar dicha copia. En caso de que alguien se negara a firmar dicha copia el fiscal debe realizar un ACTA ante el representante de la Junta Electoral"}
            imgSrc={"assets/resources/image999.png"}
          />

          <CardVariantTwo
            title={"¿Qué pasa luego de haber firmado toda la documentación?"}
            description={`
                        Una vez firmada la documentación el presidente de mesa preparará la devolución de toda la mesa de la siguiente manera: 

                        Todo la documentación y urna preparada como establece el punto anterior se entrega al personal del Correo Argentino.
                    `}
            imgSrc={"assets/resources/image333.png"}
          />

          <CardVariantTwo
            title={"¿Hay algún otro documento que debe de completar el presidente de mesa?"}
            description={`
                        Otro documento que completa el presidente es el TELEGRAMA que será entregado al correo para que se transmitan los datos. SI ES POSIBLE, CON DISCRECIÓN, SERÍA BUENO QUE EL FISCAL PUDIERA TOMAR FOTO DEL TELEGRAMA.
                    `}
            imgSrc={"assets/resources/image444.png"}
          />

          <AlertCard message={"Si se reemplazo el fiscal debe haber dejado constancia en el acta complementaria a los efectos de que el certificado de escrutinio no sea cuestionado."}></AlertCard>

          <h1 className="font-bold text-3xl ml-2 mr-2">La importancia del certificado de escrutinio</h1>
          <p className="text-lg font-semibold mr-2 ml-2 mt-4 mb-4">En ese momento termina para el fiscal su día de votación entregándole al fiscal general el CERTIFICADO DE ESCRUTINIO</p>
          <h1 className="font-bold text-xl ml-2 mr-2">Frases para dejar asentadas las observaciones en el acta de apertura, complementarias y/o cierre de escrutinio</h1>

          <div className={`bg-[#F9FAFB] rounded-2xl shadow-xl mt-8 flex flex-col ${isTabletOrMobile ? 'p-4' : 'p-8'}`}>
            <div className={`text-lg font-semibold ${isTabletOrMobile ? 'mt-4' : "grid grid-rows-1 grid-cols-[15em_auto] gap-8"}`}>
              <p>AFILIADO DESIGNADO COMO AUTORIDAD DE MESA</p>
              <p className={`${isTabletOrMobile ? 'text-xl mt-4 italic' : "italic"}`}>
                “Se ha observado la actuación del Sr. …… DNI …… como Autoridad de Mesa, que aparece como afiliado a un partido político en el Registro de Afiliados de la C.N.E., violando la Acordada Extraordinaria 129/08 de la C.N.E. y jurisprudencia del fuero electoral.”
              </p>
            </div>
          </div>

          <div className={`bg-[#F9FAFB] rounded-2xl shadow-xl mt-8 flex flex-col ${isTabletOrMobile ? 'p-4' : 'p-8'}`}>
            <div className={`text-lg font-semibold ${isTabletOrMobile ? 'mt-4' : "grid grid-rows-1 grid-cols-[15em_auto] gap-8"}`}>
              <p>FISCAL DESIGNADO COMO AUTORIDAD DE MESA</p>
              <p className={`${isTabletOrMobile ? 'text-xl mt-4 italic' : "italic"}`}>
                “Se ha observado la actuación de quien se presentará como fiscal por el Partido/Alianza…como Autoridad de Mesa, violando la Acordada Extraordinaria 129/08 de la C.N.E. y jurisprudencia del fuero electoral.” Nota: identificarlo con nombre completo y DNI.
              </p>
            </div>
          </div>

          <div className={`bg-[#F9FAFB] rounded-2xl shadow-xl mt-8 flex flex-col ${isTabletOrMobile ? 'p-4' : 'p-8'}`}>
            <div className={`text-lg font-semibold ${isTabletOrMobile ? 'mt-4' : "grid grid-rows-1 grid-cols-[15em_auto] gap-8"}`}>
              <p>AUTORIDAD DE MESA ESTÁ DEJANDO VOTAR CON EJEMPLAR DE DNI ANTERIOR AL QUE FIGURA EN EL PADRÓN</p>
              <p className={`${isTabletOrMobile ? 'text-xl mt-4 italic' : "italic"}`}>
                “Se ha observado la actuación de quien se presentará como fiscal por el Partido/Alianza…como Autoridad de Mesa, violando la Acordada Extraordinaria 129/08 de la C.N.E. y jurisprudencia del fuero electoral.” Nota: identificarlo con nombre completo y DNI.
              </p>
            </div>
          </div>

          <div className={`bg-[#F9FAFB] rounded-2xl shadow-xl mt-8 flex flex-col ${isTabletOrMobile ? 'p-4' : 'p-8'}`}>
            <div className={`text-lg font-semibold ${isTabletOrMobile ? 'mt-4' : "grid grid-rows-1 grid-cols-[15em_auto] gap-8"}`}>
              <p>AUTORIDAD DE MESA AGREGA A MANO GENTE AL PADRÓN</p>
              <p className={`${isTabletOrMobile ? 'text-xl mt-4 italic' : "italic"}`}>
                Se deja constancia que la autoridad de mesa está violando el Art. 86, inc. 3 a y b C.E.N. que dice “3. No le será admitido el voto: a) Si el elector exhibiere un documento cívico anterior al que consta en el padrón”.
              </p>
            </div>
          </div>

          <div className={`bg-[#F9FAFB] rounded-2xl shadow-xl mt-8 flex flex-col ${isTabletOrMobile ? 'p-4' : 'p-8'}`}>
            <div className={`text-lg font-semibold ${isTabletOrMobile ? 'mt-4' : "grid grid-rows-1 grid-cols-[15em_auto] gap-8"}`}>
              <p>DELEGADO IMPIDE ACTUACIÓN Y/O SE ARROGA FACULTADES FRENTE AL FISCAL O LA AUTORIDAD DE MESA</p>
              <p className={`${isTabletOrMobile ? 'text-xl mt-4 italic' : "italic"}`}>
                Se deja constancia que la autoridad de mesa está agregando gente al padrón en violación del Art. 86 que dice: Los electores podrán votar únicamente en la mesa receptora de votos en cuya lista figuren asentados y con el documento cívico habilitante. El presidente verificará si el elector a quien pertenece el documento cívico figura en el padrón electoral de la mesa”
                Caso 2: el delegado y/o comando electoral le dice a la autoridad de mesa que los agregue a ellos o a otra persona al padrón. Dejo constancia que se está violando el Art. 87 que establece: “Ninguna autoridad, ni aun el juez federal con competencia electoral, podrá ordenar al presidente de mesa que admita el voto de un elector que no figura inscripto en los ejemplares del padrón electoral”.
              </p>
            </div>
          </div>

          <div className={`bg-[#F9FAFB] rounded-2xl shadow-xl mt-8 flex flex-col ${isTabletOrMobile ? 'p-4' : 'p-8'}`}>
            <div className={`text-lg font-semibold ${isTabletOrMobile ? 'mt-4' : "grid grid-rows-1 grid-cols-[15em_auto] gap-8"}`}>
              <p>NO ME PERMITEN IMPUGNAR LA IDENTIDAD DEL ELECTOR</p>
              <p className={`${isTabletOrMobile ? 'text-xl mt-4 italic' : "italic"}`}>
                Dejar asentado en el acta complementaria: Dejo constancia que el Delegado de la Justicia Electoral interfería con el normal desarrollo del comicio impidiendo… u ordenando … (relatar hechos)
              </p>
            </div>
          </div>

          <div className={`bg-[#F9FAFB] rounded-2xl shadow-xl mt-8 flex flex-col ${isTabletOrMobile ? 'p-4' : 'p-8'}`}>
            <div className={`text-lg font-semibold ${isTabletOrMobile ? 'mt-4' : "grid grid-rows-1 grid-cols-[15em_auto] gap-8"}`}>
              <p>NO ME PERMITEN RECURRIR UN VOTO</p>
              <p className={`${isTabletOrMobile ? 'text-xl mt-4 italic' : "italic"}`}>
                Dejo constancia que la autoridad de mesa no me deja impugnar la identidad del elector, violando el Art. 89 C.E.N. que autoriza la verificación de la identidad del elector y el Art. 91 C.E.N. que establece que los fiscales “tienen derecho a impugnar el voto del compareciente cuando a su juicio hubiere falseado su identidad.”
              </p>
            </div>
          </div>

          <div className={`bg-[#F9FAFB] border-b-2 rounded-2xl shadow-xl mt-8 mb-16 flex flex-col ${isTabletOrMobile ? 'p-4' : 'p-8'}`}>
            <div className={`text-lg font-semibold ${isTabletOrMobile ? 'mt-4 mb-8' : "grid grid-rows-1 grid-cols-[15em_auto] gap-8"}`}>
              <p>FALTA DE FIRMAS Y TROQUELES EN EL PADRON</p>
              <p className={`${isTabletOrMobile ? 'text-xl mt-4 italic' : "italic"}`}>
                “Se ha observado que faltan .. troqueles o constancias de emisión de voto, sin que conste la firma del elector en el padrón electoral” (Art. 139 inc. i, C.E.N.)
              </p>
            </div>
          </div>

        </div>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default CertificadoDeEscrutinio;
