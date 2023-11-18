import { IAlertCardProps } from "./types";

const AlertCard: React.FC<IAlertCardProps> = ({ message = "default message", message2, message3 }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-10">
      <div className="flex flex-row w-[380px] md:w-1/2 gap-2 pt-10 pb-10 ml-8 mr-8 bg-[#FFF4F4] border-l-[6px] border-l-[#D64B4B] shadow-xl border-r-2 rounded-lg">
        <picture className="w-14 h-auto m-1">
          <img src="assets/images/alert-icon.svg" alt="logo informativo" className=" relative w-full h-auto -mt-2 ml-1" />
        </picture>
        <div className="flex flex-col w-9/12">
          <span className="text-[#FF0000] font-bold mb-2 text-2xl">
            Aviso importante
          </span>
          <p className="font-semibold">
            { message }
            {
              message2 && (
                <>
                  <br />
                  <br />
                  { message2 }
                </>
              )
            }
            {
              message3 && (
                <>
                  <br />
                  <br />
                  { message3 }
                </>
              )
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default AlertCard;