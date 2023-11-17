import { useMediaQuery } from "react-responsive"
import { IHeroProps } from "./types"
import './styles.css';

export const Hero: React.FC<IHeroProps> = ({title = "Sample title", description = '', imgSrc = '', children}) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
    return (
        <section id="hero" className="flex flex-col justify-center items-center gap-8 w-full relative pb-32">
        <div className="flex flex-col gap-11 mt-32">
          <h3 className="text-black font-bold text-2xl text-center">Cómo fiscalizar</h3>
          <h1 className="text-black font-bold text-4xl md:text-6xl text-center">{title}</h1>
          <div className="m-auto mt-4 mb-4 w-[350px] md:w-[960px]">
            <p className="text-black font-medium md:text-2xl text-center">
                {
                    description
                }
            </p>
          </div>
        </div>
        {
            children
        }
        {
          isTabletOrMobile ?
          <div
            className="absolute w-full h-full object-cover -z-10"
            id="hero-bg-mobile"
          >
          </div>
          :
          <img
            src={imgSrc}
            alt=""
            id="hero-bg"
            className="absolute w-full h-full object-cover -z-10"
          /> 
        }
      </section>
    )
}