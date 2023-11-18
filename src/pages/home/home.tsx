import Card from "../../components/card";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { paths } from "../../routes/paths";
import "./styles.css";
import { Hero } from "../../components/hero";
import Button from "../../components/button";
import AlertCard from "../../components/alert-card";

const HomePage = () => {


  return (
    <main id="root">
      <Navbar />
      <header>
        <Hero 
          title="La Libertad Avanza"
          subtitle="Fiscales"
          description="Bienvenidos a la página de Fiscales de La Libertad Avanza. En nuestra página ofrecemos toda información para fiscales generales y de mesa para el próximo comicio del 19 de Noviembre de 2023." 
          imgSrc="assets/images/hero_img.png"
        >
          <p className="font-bold text-lg text-center">Si ves alguna irregularidad no dudes en denunciar</p>
          <Button isLink href={paths.denunciar}>Quiero denunciar</Button>
        </Hero>
      </header>
      <section id="important-info">
        <div className="flex flex-col justify-between items-center gap-10 mt-28 mb-28">
          <h3 className="text-black font-bold text-2xl">Qué necesitas saber</h3>
          <h1 className="text-black font-bold text-4xl md:text-5xl text-center">
            Datos importantes
          </h1>
          <p className="text-black font-normal text-lg text-center">
            En los distintos enlaces encontrará toda la información disponible
            sobre este tema.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-16 flex-wrap">
          {/* You need to create a Card component that takes props like imgSrc, href, title, and description */}
          <Card
            imgSrc="assets/images/Book.png"
            href={paths.home}
            title="Código Electoral Nacional (C.E.N.)"
            description="Nuestra referencia principal sobre la cual se sacó toda la información"
          />
          <Card
            imgSrc="assets/images/checkbook.png"
            href={paths.home}
            title="Registro de afiliaddos"
            description="Sitio para corroborar que la autoridad de mesa no esté afiliada a ningún partido político"
          />
          <Card
            imgSrc="assets/images/Study.png"
            href={paths.home}
            title="Cámara Nacional Electoral (CNE)"
            description="Información de la Cámara Nacional Electoral con sus distintas resoluciones acordadas"
          />
        </div>
        <AlertCard message={'Cualquier variación escrita entre esta página y las referencias oficiales del Código Electoral Nacional (C.N.E)/ Cámara Nacional Electoral (C.N.E). Siempre es válidos las referencias oficiales'}/>

      </section>
      {/* Make sure to import and use your Footer component */}
      <Footer />
    </main>
  );
};

export default HomePage;
