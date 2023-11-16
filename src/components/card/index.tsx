import { ICardProps } from "./types";
import './styles.css';

const Card: React.FC<ICardProps> = ({title, description, href, imgSrc}) => {
    return (
        <div className="Card flex flex-col justify-evenly items-center rounded-[20px] gap-6 shadow-md p-10 md:w-[350px]">
            <div>
                <img src={imgSrc} alt="" />
            </div>
            <h3 className="text-black font-bold text-2xl text-center">{title}</h3>
            <p className="text-black font-normal text-base text-center">{description}</p>
            <a href={href} className="text-black rounded border-black border-[2px] pt-2 pb-2 pl-4 pr-4">
                <span className="border-b border-black font-bold">Acceder</span>
            </a>
        </div>
    )
}

export default Card;