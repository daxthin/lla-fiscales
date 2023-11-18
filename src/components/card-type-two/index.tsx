import { ICardVariantTwoProps } from "./types";

const CardVariantTwo: React.FC<ICardVariantTwoProps> = ({title = "Sample title", description = "Sample description", imgSrc = ""}) => {
    return (
        <div className="bg-[#E9E9E9] rounded-2xl flex flex-col shadow-md">
            <div className="p-8 w-full flex flex-row justify-center items-center">
                <img src={imgSrc} alt="" />
            </div>
            <div className="w-full bg-white pb-16 pl-8 pr-8 pt-6 rounded-b-2xl">
                <div className="flex flex-row items-center gap-2">
                    <picture>
                        <img src="assets/images/askq.png" alt="logo de pregunta" className="w-full h-auto"/>
                    </picture>
                    <h3 className="font-bold text-2xl">{title}</h3>
                </div>
                <p className="mt-8 text-lg">{description}</p>
            </div>
        </div>
    )
}

export default CardVariantTwo;