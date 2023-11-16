import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { paths } from "../../routes/paths";
import "./styles.css";

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
				<img src="../../public/hero_img_var2.png" alt="" id="hero-bg" className="absolute w-full h-full object-cover -z-10" />
			</section>
		</header>
        <section className="flex flex-col justify-center items-center">
            <div className="w-3/4">
                <div className="flex flex-row justify-center w-full border-b-2 p-4 gap-4 border-black">
                    <a href={paths.beforeVote} className="p-2 text-black rounded">Antes de la votación</a>
                    <a href={paths.duringVote} className="bg-brand p-2 text-white rounded">Durante la votación</a>
                    <a href={paths.afterVote} className="p-2 text-black rounded">Después de la votación</a>
                </div>
                <div className="mt-8 flex flex-col items-start justify-center w-full">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-[1.9rem]">Después de la votación</h2>
                        <p>Te recomendamos algunos de los siguientes pasos a tener en cuenta antes del proceso de votación y llegada al colegio.</p>
                    </div>
                </div>
            </div>
        </section>
		<Footer></Footer>
	</main>
  );
};

export default DuringVote;
