import Card from "../../components/card";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Button from "../../components/button";
import { paths } from "../../routes/paths";
import "./styles.css";

const HomePage = () => {
  return (
    <main id="root">
      <Navbar />
      <header>
        <section
          id="hero"
          className="flex flex-col justify-center items-center gap-8 w-full relative pb-32"
        >
          <div className="flex flex-col gap-11 mt-32">
            <h3 className="text-black font-bold text-2xl text-center">
              Fiscales
            </h3>
            <h1 className="text-black font-bold text-6xl text-center">
              La libertad avanza
            </h1>
            <div className="m-auto mt-4 mb-4 sm:w-[600px] md:w-[960px]">
              <p className="text-black font-medium text-2xl text-center">
                Bienvenidos a la página de Fiscales de La Libertad Avanza. En
                nuestra página ofrecemos toda información para fiscales
                generales y de mesa para el próximo comicio del 19 de Noviembre
                de 2023.
              </p>
            </div>
            <p className="font-bold text-lg text-center">
              Si ves alguna irregularidad no dudes en denunciar
            </p>
          </div>
          <Button isLink href={paths.home}>Quiero Denunciar</Button>
          <img
            src="public/assets/images/hero_img.png"
            alt=""
            id="hero-bg"
            className="absolute w-full h-full object-cover -z-10"
          />
        </section>
      </header>
      <section id="important-info">
        <div className="flex flex-col justify-between items-center gap-10 mt-28 mb-28">
          <h3 className="text-black font-bold text-2xl">Qué necesitas saber</h3>
          <h1 className="text-black font-bold text-5xl">Datos importantes</h1>
          <p className="text-black font-normal text-lg">
            En los distintos enlaces encontrará toda la información disponible
            sobre este tema.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-16">
          {/* You need to create a Card component that takes props like imgSrc, href, title, and description */}
          <Card
            imgSrc="public/assets/images/Book.png"
            href={paths.home}
            title="Código Electoral Nacional (C.E.N.)"
            description="Nuestra referencia principal sobre la cual se sacó toda la información"
          />
          <Card
            imgSrc="public/assets/images/checkbook.png"
            href={paths.home}
            title="Registro de afiliaddos"
            description="Sitio para corroborar que la autoridad de mesa no esté afiliada a ningún partido político"
          />
          <Card
            imgSrc="public/assets/images/Study.png"
            href={paths.home}
            title="Cámara Nacional Electoral (CNE)"
            description="Información de la Cámara Nacional Electoral con sus distintas resoluciones acordadas"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-44 mb-44">
          <div className="flex flex-row md:w-1/2 gap-7 pt-10 pb-10 pl-8 pr-8 bg-[#FFF4F4] border-l-[6px] border-l-[#D64B4B] rounded-lg">
            <div className="flex flex-col w-20 h-auto">
              <img src="public/assets/images/alert-icon.svg" alt="" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#FF0000] font-bold mb-2 text-lg">
                Aviso importante
              </span>
              <p className="font-semibold">
                Cualquier variación escrita entre esta página y las referencias
                oficiales del Código Electoral Nacional (C.N.E)/ Cámara Nacional
                Electoral (C.N.E). Siempre es válidos las referencias oficiales
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Make sure to import and use your Footer component */}
      <Footer />
    </main>
  );
};

export default HomePage;
