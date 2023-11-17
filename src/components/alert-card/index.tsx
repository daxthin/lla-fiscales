import { IAlertCardProps } from "./types";

const AlertCard: React.FC<IAlertCardProps> = ({message = "default message"}) => {
    return (
        <div className="flex flex-col justify-center items-center mt-20 mb-20 shadow-md">
            <div className="flex flex-row gap-7 pt-10 pb-10 pl-8 pr-8 bg-[#FFF4F4] border-l-[6px] border-l-[#D64B4B] rounded-lg">
                <div className="flex flex-col w-20 h-auto">
                    <img src="assets/images/alert-icon.svg" alt="" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[#FF0000] font-bold mb-2 text-lg">
                        Aviso importante
                    </span>
                    <p className="font-semibold">
                        {
                            message
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AlertCard;